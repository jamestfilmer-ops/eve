import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { exec } from 'child_process'
import { writeFileSync, readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import { promisify } from 'util'

const execAsync = promisify(exec)

// Verify the caller's Supabase JWT — returns the authenticated user or null
async function getAuthUser(request) {
  const token = request.headers.get('authorization')?.split('Bearer ')[1]
  if (!token) return null
  const { data: { user } } = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ).auth.getUser(token)
  return user ?? null
}

export async function POST(request) {
  try {
    // ── Auth: trust the session, never the body ──────────────────
    const user = await getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = user.id   // verified server-side — ignore any userId in body

    const { projectId } = await request.json()
    if (!projectId) {
      return NextResponse.json({ error: 'Missing projectId' }, { status: 400 })
    }

    // Service-role client only for reading — ownership enforced by the query filter
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const [projRes, charRes, sceneRes, holeRes] = await Promise.all([
      supabase.from('projects').select('*').eq('id', projectId).eq('user_id', userId).single(),
      supabase.from('characters').select('*').eq('project_id', projectId).order('created_at'),
      supabase.from('scenes').select('*').eq('project_id', projectId).order('act_number').order('order_index'),
      supabase.from('plot_holes').select('*').eq('project_id', projectId).order('created_at'),
    ])

    if (projRes.error || !projRes.data) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    const project    = projRes.data
    const characters = charRes.data  || []
    const scenes     = sceneRes.data || []
    const plotHoles  = holeRes.data  || []

    // ── Data isolation: write all user content to a JSON file ────
    // Never interpolate user strings into the Python source — that's injection.
    const uid        = `${projectId.replace(/-/g,'').slice(0,12)}_${Date.now()}`
    const tmpJson    = join(tmpdir(), `eve_data_${uid}.json`)
    const tmpPy      = join(tmpdir(), `eve_export_${uid}.py`)
    const tmpPdf     = join(tmpdir(), `eve_export_${uid}.pdf`)

    const scenesByAct = scenes.reduce((acc, s) => {
      const a = String(s.act_number || 1)
      if (!acc[a]) acc[a] = []
      acc[a].push({
        title:       s.title       || '',
        beat_label:  s.beat_label  || '',
        status:      s.status      || '',
      })
      return acc
    }, {})

    const exportPayload = {
      title:      project.title    || 'Untitled',
      logline:    project.logline  || '',
      genre:      project.genre    || '',
      framework:  project.framework || '',
      scenes_by_act: scenesByAct,
      characters: characters.map(c => ({
        name:  c.name  || '',
        role:  c.role  || '',
        notes: c.notes || '',
      })),
      plot_holes: plotHoles.map(h => ({
        description: h.description || h.title || '',
        status:      h.status || 'open',
      })),
    }

    // Write data file — Python reads this, nothing is interpolated
    writeFileSync(tmpJson, JSON.stringify(exportPayload))

    const pyScript = `
import sys, json
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

DATA_FILE = ${JSON.stringify(tmpJson)}
PDF_FILE  = ${JSON.stringify(tmpPdf)}

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    d = json.load(f)

GREEN      = colors.HexColor('#2D5016')
GREEN_PALE = colors.HexColor('#EFF6E7')
AMBER      = colors.HexColor('#C3D9A8')
TEXT_DARK  = colors.HexColor('#1A140F')
TEXT_MID   = colors.HexColor('#5C4A37')
TEXT_SOFT  = colors.HexColor('#9C836A')
BORDER     = colors.HexColor('#D9CDBF')
OFF_WHITE  = colors.HexColor('#FAF8F5')

doc = SimpleDocTemplate(
    PDF_FILE,
    pagesize=letter,
    rightMargin=0.85*inch, leftMargin=0.85*inch,
    topMargin=0.9*inch,    bottomMargin=0.9*inch,
    title=d['title'],
    author='Eve Screenwriting'
)

styles = getSampleStyleSheet()

def sty(name, **kw):
    return ParagraphStyle(name, **kw)

h1   = sty('H1',   fontName='Times-Bold',       fontSize=28, textColor=GREEN,     spaceAfter=6,  leading=34)
h2   = sty('H2',   fontName='Times-Bold',       fontSize=16, textColor=GREEN,     spaceAfter=4,  leading=20, spaceBefore=18)
h3   = sty('H3',   fontName='Times-BoldItalic', fontSize=12, textColor=GREEN,     spaceAfter=3,  leading=16, spaceBefore=12)
body = sty('Body', fontName='Helvetica',        fontSize=10, textColor=TEXT_DARK, spaceAfter=4,  leading=15)
sub  = sty('Sub',  fontName='Helvetica',        fontSize=9,  textColor=TEXT_MID,  spaceAfter=3,  leading=13)
mono = sty('Mono', fontName='Courier',          fontSize=9,  textColor=TEXT_SOFT, spaceAfter=2,  leading=13)
ctr  = sty('Ctr',  fontName='Times-Italic',     fontSize=11, textColor=TEXT_MID,  alignment=TA_CENTER, spaceAfter=4, leading=16)

story = []

# Cover
story.append(Spacer(1, 0.5*inch))
story.append(Paragraph(d['title'], h1))
if d.get('logline'):
    story.append(Paragraph(d['logline'].replace('\\n', ' '), ctr))
story.append(Spacer(1, 0.15*inch))
story.append(HRFlowable(width='100%', thickness=2, color=GREEN, spaceAfter=8))

meta_rows = []
if d.get('genre'):
    meta_rows.append([Paragraph('Genre', mono), Paragraph(d['genre'], sub)])
if d.get('framework'):
    meta_rows.append([Paragraph('Framework', mono), Paragraph(d['framework'].replace('-', ' ').title(), sub)])
total_scenes = sum(len(v) for v in d['scenes_by_act'].values())
done_scenes  = sum(1 for a in d['scenes_by_act'].values() for s in a if s.get('status') == 'complete')
meta_rows.append([Paragraph('Scenes', mono), Paragraph(f'{total_scenes} total, {done_scenes} complete', sub)])
meta_rows.append([Paragraph('Characters', mono), Paragraph(str(len(d['characters'])), sub)])

if meta_rows:
    mt = Table(meta_rows, colWidths=[1.1*inch, None])
    mt.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(mt)

story.append(Spacer(1, 0.4*inch))

# Scenes by act
if d['scenes_by_act']:
    story.append(Paragraph('Scenes', h2))
    story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=10))
    for act_num in sorted(d['scenes_by_act'].keys(), key=lambda x: int(x)):
        act_scenes = d['scenes_by_act'][act_num]
        story.append(Paragraph(f'Act {act_num}', h3))
        rows = [[Paragraph('#', mono), Paragraph('Scene', mono), Paragraph('Beat', mono), Paragraph('Status', mono)]]
        for idx, s in enumerate(act_scenes, 1):
            status_txt = 'Done' if s.get('status') == 'complete' else 'Draft'
            rows.append([
                Paragraph(str(idx), sub),
                Paragraph((s.get('title') or '')[:60], body),
                Paragraph((s.get('beat_label') or '')[:30], sub),
                Paragraph(status_txt, sty('St', fontName='Helvetica-Bold', fontSize=9,
                    textColor=GREEN if status_txt == 'Done' else TEXT_SOFT, leading=13)),
            ])
        t = Table(rows, colWidths=[0.35*inch, 3.4*inch, 1.8*inch, 0.7*inch], repeatRows=1)
        t.setStyle(TableStyle([
            ('BACKGROUND',    (0,0), (-1,0), GREEN_PALE),
            ('FONTNAME',      (0,0), (-1,0), 'Helvetica-Bold'),
            ('FONTSIZE',      (0,0), (-1,0), 8),
            ('TEXTCOLOR',     (0,0), (-1,0), GREEN),
            ('ROWBACKGROUNDS',(0,1), (-1,-1), [colors.white, OFF_WHITE]),
            ('GRID',          (0,0), (-1,-1), 0.5, BORDER),
            ('VALIGN',        (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING',    (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING',   (0,0), (-1,-1), 6),
        ]))
        story.append(t)
        story.append(Spacer(1, 0.12*inch))

story.append(Spacer(1, 0.2*inch))

# Characters
if d['characters']:
    story.append(Paragraph('Characters', h2))
    story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=10))
    char_rows = [[Paragraph('Name', mono), Paragraph('Role', mono), Paragraph('Notes', mono)]]
    for c in d['characters']:
        char_rows.append([
            Paragraph((c.get('name') or '')[:40], sty('CN', fontName='Times-Bold', fontSize=10, textColor=TEXT_DARK, leading=14)),
            Paragraph((c.get('role') or '')[:30], sub),
            Paragraph((c.get('notes') or '')[:120], sub),
        ])
    ct = Table(char_rows, colWidths=[1.5*inch, 1.3*inch, 3.4*inch], repeatRows=1)
    ct.setStyle(TableStyle([
        ('BACKGROUND',    (0,0), (-1,0), GREEN_PALE),
        ('FONTNAME',      (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE',      (0,0), (-1,0), 8),
        ('TEXTCOLOR',     (0,0), (-1,0), GREEN),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [colors.white, OFF_WHITE]),
        ('GRID',          (0,0), (-1,-1), 0.5, BORDER),
        ('VALIGN',        (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING',    (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING',   (0,0), (-1,-1), 6),
    ]))
    story.append(ct)
    story.append(Spacer(1, 0.2*inch))

# Open plot holes
open_holes = [h for h in d['plot_holes'] if h.get('status') != 'resolved']
if open_holes:
    story.append(Paragraph('Open Plot Holes', h2))
    story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=10))
    for h in open_holes:
        story.append(Paragraph(f"\\u2022 {(h.get('description') or '')[:200]}", body))
    story.append(Spacer(1, 0.15*inch))

story.append(Spacer(1, 0.3*inch))
story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=6))
story.append(Paragraph('Generated by Eve \u2014 eve-screenwriting.vercel.app', mono))

doc.build(story)
print('OK')
`

    writeFileSync(tmpPy, pyScript)

    try {
      await execAsync(`python3 "${tmpPy}"`)
      const pdfBuffer = readFileSync(tmpPdf)

      try { unlinkSync(tmpPy);   } catch {}
      try { unlinkSync(tmpPdf);  } catch {}
      try { unlinkSync(tmpJson); } catch {}

      const safeFilename = (project.title || 'project').replace(/[^a-z0-9]/gi, '-').toLowerCase()
      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${safeFilename}.pdf"`,
        },
      })
    } catch (err) {
      console.error('PDF generation error:', err)
      try { unlinkSync(tmpPy);   } catch {}
      try { unlinkSync(tmpPdf);  } catch {}
      try { unlinkSync(tmpJson); } catch {}
      return NextResponse.json({ error: 'PDF generation failed', detail: err.message }, { status: 500 })
    }

  } catch (err) {
    console.error('Export error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

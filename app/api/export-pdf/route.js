import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { exec } from 'child_process'
import { writeFileSync, readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(request) {
  try {
    const { projectId, userId } = await request.json()
    if (!projectId || !userId) {
      return NextResponse.json({ error: 'Missing projectId or userId' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    // Fetch all project data in parallel
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

    // Write a Python script to generate the PDF
    const tmpPy  = join(tmpdir(), `eve_export_${projectId}.py`)
    const tmpPdf = join(tmpdir(), `eve_export_${projectId}.pdf`)

    const escapedTitle   = (project.title  || 'Untitled').replace(/'/g, "\'")
    const escapedLogline = (project.logline || '').replace(/'/g, "\'").replace(/\n/g, ' ')
    const escapedGenre   = (project.genre   || '').replace(/'/g, "\'")
    const escapedFW      = (project.framework || '').replace(/-/g, ' ').replace(/'/g, "\'")

    const scenesByAct = scenes.reduce((acc, s) => {
      const a = s.act_number || 1
      if (!acc[a]) acc[a] = []
      acc[a].push(s)
      return acc
    }, {})

    // Build Python string for scene data
    const scenesPyStr = JSON.stringify(scenesByAct)
    const charsPyStr  = JSON.stringify(characters.map(c => ({ name: c.name, role: c.role || '', notes: c.notes || '' })))
    const holesPyStr  = JSON.stringify(plotHoles.map(h => ({ description: h.description || h.title || '', status: h.status || 'open' })))

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

GREEN      = colors.HexColor('#2D5016')
GREEN_PALE = colors.HexColor('#EFF6E7')
AMBER      = colors.HexColor('#C3D9A8')
TEXT_DARK  = colors.HexColor('#1A140F')
TEXT_MID   = colors.HexColor('#5C4A37')
TEXT_SOFT  = colors.HexColor('#9C836A')
BORDER     = colors.HexColor('#D9CDBF')
OFF_WHITE  = colors.HexColor('#FAF8F5')

doc = SimpleDocTemplate(
    r'${tmpPdf}',
    pagesize=letter,
    rightMargin=0.85*inch, leftMargin=0.85*inch,
    topMargin=0.9*inch,    bottomMargin=0.9*inch,
    title='${escapedTitle}',
    author='Eve Screenwriting'
)

styles = getSampleStyleSheet()

def sty(name, **kw):
    return ParagraphStyle(name, **kw)

h1   = sty('H1',   fontName='Times-Bold',    fontSize=28, textColor=GREEN,     spaceAfter=6,  leading=34)
h2   = sty('H2',   fontName='Times-Bold',    fontSize=16, textColor=GREEN,     spaceAfter=4,  leading=20, spaceBefore=18)
h3   = sty('H3',   fontName='Times-BoldItalic', fontSize=12, textColor=GREEN,  spaceAfter=3,  leading=16, spaceBefore=12)
body = sty('Body', fontName='Helvetica',     fontSize=10, textColor=TEXT_DARK, spaceAfter=4,  leading=15)
sub  = sty('Sub',  fontName='Helvetica',     fontSize=9,  textColor=TEXT_MID,  spaceAfter=3,  leading=13)
tag  = sty('Tag',  fontName='Helvetica-Bold', fontSize=8,  textColor=AMBER,    spaceAfter=2,  leading=11)
mono = sty('Mono', fontName='Courier',       fontSize=9,  textColor=TEXT_SOFT, spaceAfter=2,  leading=13)
ctr  = sty('Ctr',  fontName='Times-Italic',  fontSize=11, textColor=TEXT_MID,  alignment=TA_CENTER, spaceAfter=4, leading=16)

story = []

# ── COVER ──────────────────────────────────────────────────────────
story.append(Spacer(1, 0.5*inch))
story.append(Paragraph('${escapedTitle}', h1))
if '${escapedLogline}':
    story.append(Paragraph('${escapedLogline}', ctr))
story.append(Spacer(1, 0.15*inch))
story.append(HRFlowable(width='100%', thickness=2, color=GREEN, spaceAfter=8))

meta_rows = []
if '${escapedGenre}':    meta_rows.append([Paragraph('Genre', mono), Paragraph('${escapedGenre}', sub)])
if '${escapedFW}':       meta_rows.append([Paragraph('Framework', mono), Paragraph('${escapedFW}'.replace('-',' ').title(), sub)])
total_scenes = sum(len(v) for v in ${scenesPyStr}.values())
done_scenes  = sum(1 for a in ${scenesPyStr}.values() for s in a if s.get('status') == 'complete')
meta_rows.append([Paragraph('Scenes', mono), Paragraph(f'{total_scenes} total, {done_scenes} complete', sub)])
meta_rows.append([Paragraph('Characters', mono), Paragraph(str(len(${charsPyStr})), sub)])

if meta_rows:
    mt = Table(meta_rows, colWidths=[1.1*inch, None])
    mt.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(mt)

story.append(Spacer(1, 0.4*inch))

# ── SCENES BY ACT ──────────────────────────────────────────────────
scenes_by_act = ${scenesPyStr}
if scenes_by_act:
    story.append(Paragraph('Scenes', h2))
    story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=10))
    for act_num in sorted(scenes_by_act.keys(), key=lambda x: int(x)):
        act_scenes = scenes_by_act[act_num]
        story.append(Paragraph(f'Act {act_num}', h3))
        rows = [[
            Paragraph('#', mono),
            Paragraph('Scene', mono),
            Paragraph('Beat', mono),
            Paragraph('Status', mono),
        ]]
        for idx, s in enumerate(act_scenes, 1):
            title_txt  = (s.get('title') or '')[:60]
            beat_txt   = (s.get('beat_label') or ' --')[:30]
            status_txt = 'Done' if s.get('status') == 'complete' else 'Draft'
            rows.append([
                Paragraph(str(idx), sub),
                Paragraph(title_txt, body),
                Paragraph(beat_txt, sub),
                Paragraph(status_txt, sty('St', fontName='Helvetica-Bold', fontSize=9,
                    textColor=GREEN if status_txt=='Done' else TEXT_SOFT, leading=13)),
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

# ── CHARACTERS ─────────────────────────────────────────────────────
characters = ${charsPyStr}
if characters:
    story.append(Paragraph('Characters', h2))
    story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=10))
    char_rows = [[
        Paragraph('Name', mono),
        Paragraph('Role', mono),
        Paragraph('Notes', mono),
    ]]
    for c in characters:
        char_rows.append([
            Paragraph((c.get('name') or '')[:40], sty('CN', fontName='Times-Bold', fontSize=10, textColor=TEXT_DARK, leading=14)),
            Paragraph((c.get('role') or ' --')[:30], sub),
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

# ── PLOT HOLES ─────────────────────────────────────────────────────
plot_holes = ${holesPyStr}
open_holes = [h for h in plot_holes if h.get('status') != 'resolved']
if open_holes:
    story.append(Paragraph('Open Plot Holes', h2))
    story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=10))
    for h in open_holes:
        desc = (h.get('description') or '')[:200]
        story.append(Paragraph(f'• {desc}', body))
    story.append(Spacer(1, 0.15*inch))

# ── FOOTER NOTE ────────────────────────────────────────────────────
story.append(Spacer(1, 0.3*inch))
story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=6))
story.append(Paragraph('Generated by Eve —eve-screenwriting.vercel.app', mono))

doc.build(story)
print('OK')
`

    writeFileSync(tmpPy, pyScript)

    try {
      await execAsync(`python3 ${tmpPy}`)
      const pdfBuffer = readFileSync(tmpPdf)

      // Cleanup
      try { unlinkSync(tmpPy);  } catch {}
      try { unlinkSync(tmpPdf); } catch {}

      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${(project.title || 'project').replace(/[^a-z0-9]/gi, '-')}.pdf"`,
        },
      })
    } catch (err) {
      console.error('PDF generation error:', err)
      try { unlinkSync(tmpPy);  } catch {}
      try { unlinkSync(tmpPdf); } catch {}
      return NextResponse.json({ error: 'PDF generation failed', detail: err.message }, { status: 500 })
    }

  } catch (err) {
    console.error('Export error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

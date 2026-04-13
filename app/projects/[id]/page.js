'use client'
export const dynamic = 'force-dynamic'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../../lib/supabase'
import { useToast } from '../../components/Toast'
import { PRO_TABS } from '../../../lib/planUtils'

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS = ['Overview', 'Characters', 'Scenes', 'Plot Holes', 'Timeline', 'Themes Map', 'Story Map', 'World']

const frameworkLabel = {
  'save-the-cat':  'Save the Cat',
  'heros-journey': "Hero's Journey",
  'story-circle':  'Story Circle',
  'freeform':      'Freeform',
}

const statusOptions = [
  { value: 'seed',        label: 'Seed' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'drafting',    label: 'Drafting' },
  { value: 'complete',    label: 'Complete' },
]

const statusStyle = {
  seed:        { bg: 'var(--amber-pale)',  color: 'var(--amber)',  border: 'var(--amber-border)' },
  in_progress: { bg: 'var(--green-pale)',  color: 'var(--green)',  border: 'var(--green-border)' },
  drafting:    { bg: '#EFF6FF',            color: '#1D4ED8',       border: '#BFDBFE' },
  complete:    { bg: '#F0FDF4',            color: '#15803D',       border: '#BBF7D0' },
}

function timeAgo(dateStr) {
  if (!dateStr) return ' --'
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins  = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days  = Math.floor(diff / 86400000)
  if (mins < 2)   return 'Just now'
  if (mins < 60)  return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days === 1) return 'Yesterday'
  if (days < 7)   return `${days} days ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ProjectPage() {
  const params  = useParams()
  const router  = useRouter()
  const id      = params.id
  const toast   = useToast()

  const [tab,        setTab]        = useState('Overview')
  const [project,    setProject]    = useState(null)
  const [characters, setCharacters] = useState([])
  const [scenes,     setScenes]     = useState([])
  const [plotHoles,  setPlotHoles]  = useState([])
  const [themes,     setThemes]     = useState([])
  const [loading,    setLoading]    = useState(true)
  const [error,      setError]      = useState(null)
  const [userPlan,   setUserPlan]   = useState('free')

  // ── Load project + all related data ──────────────────────────────────────
  const load = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Sign in to view this project.'); setLoading(false); return }

    const [projRes, charRes, sceneRes, holeRes, themeRes, profileRes] = await Promise.all([
      supabase.from('projects').select('*').eq('id', id).eq('user_id', user.id).single(),
      supabase.from('characters').select('*').eq('project_id', id).order('created_at'),
      supabase.from('scenes').select('*').eq('project_id', id).order('act_number').order('order_index'),
      supabase.from('plot_holes').select('*').eq('project_id', id).order('created_at'),
      supabase.from('themes').select('*').eq('project_id', id).order('created_at'),
      supabase.from('profiles').select('plan').eq('id', user.id).single(),
    ])

    if (projRes.error || !projRes.data) {
      setError('Project not found.')
      setLoading(false)
      return
    }
    // surface any partial errors
    if (charRes.error)  console.error('characters:', charRes.error)
    if (sceneRes.error) console.error('scenes:', sceneRes.error)
    if (holeRes.error)  console.error('plot holes:', holeRes.error)
    if (themeRes.error) console.error('themes:', themeRes.error)

    setProject(projRes.data)
    setCharacters(charRes.data || [])
    setScenes(sceneRes.data || [])
    setPlotHoles(holeRes.data || [])
    setThemes(themeRes.data || [])
    const plan = profileRes.data?.plan
    setUserPlan(plan && plan !== 'free' ? 'pro' : 'free')
    setLoading(false)
  }, [id])

  useEffect(() => { load() }, [load])

  // ── Update project field ──────────────────────────────────────────────────
  async function updateProject(fields) {
    const { data } = await supabase
      .from('projects')
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (data) setProject(data)
  }

  if (loading) return <LoadingState />
  if (error)   return <ErrorState message={error} />

  const fw    = frameworkLabel[project.framework] || project.framework
  const ss    = statusStyle[project.status] || statusStyle.seed
  const sLabel = statusOptions.find(s => s.value === project.status)?.label || 'Seed'

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>

      {/* ── Header ── */}
      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-soft)', cursor: 'pointer' }}>
              ← Dashboard
            </span>
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '30px' }}>{project.title}</h1>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '500',
                letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px',
                borderRadius: '4px', background: ss.bg, color: ss.color, border: `1px solid ${ss.border}`,
              }}>{sLabel}</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
              {project.type} &middot; {fw} &middot; Updated {timeAgo(project.updated_at)}
            </p>
            {project.logline && (
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', marginTop: '8px', fontStyle: 'italic', maxWidth: '600px', lineHeight: '1.6' }}>
                "{project.logline}"
              </p>
            )}
          </div>

          {/* Status picker */}
          <select
            value={project.status || 'seed'}
            onChange={e => updateProject({ status: e.target.value })}
            className="input"
            style={{ width: 'auto', fontSize: '13px', padding: '7px 12px' }}
          >
            {statusOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="fade-up fade-up-delay-1" style={{
        display: 'flex', gap: '2px', borderBottom: '1px solid var(--border)',
        marginBottom: '32px', overflowX: 'auto',
      }}>
        {TABS.map(t => {
          const locked = userPlan === 'free' && PRO_TABS.includes(t)
          const isActive = tab === t
          return (
            <button key={t} onClick={() => setTab(t)} style={{
              background: 'none', border: 'none', cursor: locked ? 'default' : 'pointer',
              padding: '10px 16px', fontSize: '14px', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-ui)',
              fontWeight: isActive ? '600' : '400',
              color: locked ? 'var(--text-soft)' : isActive ? 'var(--green)' : 'var(--text-mid)',
              borderBottom: isActive ? '2px solid var(--green)' : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'color 0.15s',
              opacity: locked ? 0.55 : 1,
            }}>
              {t}
              {locked && (
                <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: '5px', verticalAlign: 'middle', opacity: 0.6 }}>
                  <rect x="2" y="4.5" width="6" height="5" rx="1" fill="currentColor"/>
                  <path d="M3.5 4.5V3a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                </svg>
              )}
              {t === 'Plot Holes' && !locked && plotHoles.filter(h => h.status === 'open').length > 0 && (
                <span style={{
                  marginLeft: '6px', fontSize: '10px', fontFamily: 'var(--font-mono)',
                  background: 'var(--amber-pale)', color: 'var(--amber)',
                  border: '1px solid var(--amber-border)', padding: '1px 6px', borderRadius: '10px',
                }}>
                  {plotHoles.filter(h => h.status === 'open').length}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* ── Tab content ── */}
      <div className="fade-up fade-up-delay-2">
        {tab === 'Overview'    && <OverviewTab    project={project} characters={characters} scenes={scenes} plotHoles={plotHoles} onUpdate={updateProject} />}
        {tab === 'Characters'  && <CharactersTab  projectId={id} characters={characters} setCharacters={setCharacters} toast={toast} />}
        {tab === 'Scenes'      && <ScenesTab      projectId={id} scenes={scenes} setScenes={setScenes} framework={project.framework} toast={toast} />}
        {tab === 'Plot Holes'  && (userPlan === 'pro'
          ? <PlotHolesTab projectId={id} plotHoles={plotHoles} setPlotHoles={setPlotHoles} toast={toast} />
          : <ProTabGate tabName="Plot Holes" />
        )}
        {tab === 'Timeline'    && (userPlan === 'pro'
          ? <TimelineTab scenes={scenes} setScenes={setScenes} toast={toast} projectId={id} />
          : <ProTabGate tabName="Timeline" />
        )}
        {tab === 'Themes Map'  && (userPlan === 'pro'
          ? <ThemesMapTab projectId={id} scenes={scenes} themes={themes} setThemes={setThemes} toast={toast} />
          : <ProTabGate tabName="Themes Map" />
        )}
        {tab === 'Story Map'   && (userPlan === 'pro'
          ? <StoryMapTab projectId={id} project={project} scenes={scenes} setScenes={setScenes} characters={characters} setCharacters={setCharacters} themes={themes} setThemes={setThemes} onUpdateProject={updateProject} toast={toast} />
          : <ProTabGate tabName="Story Map" />
        )}
        {tab === 'World'      && (userPlan === 'pro'
          ? <WorldTab projectId={id} project={project} toast={toast} />
          : <ProTabGate tabName="World" />
        )}
      </div>
    </div>
  )
}

// ─── Pro Tab Gate ──────────────────────────────────────────────────────────────

function ProTabGate({ tabName }) {
  const descriptions = {
    'Plot Holes':  'Track every unresolved story problem, continuity error, and logic gap in one place. Flag them by severity. Close them when fixed.',
    'Timeline':    'See your entire story on a vertical spine. Every scene in order, by act, with inline status and expandable notes.',
    'Themes Map':  'A visual canvas to map your themes, motifs, and symbols — and connect them to the scenes where they live.',
    'Story Map':   'Drag-and-drop your scenes, characters, and themes onto a single canvas. See the whole story at once.',
    'World':       'Build your world bible — factions, locations, political systems, cultural quirks, eras, and language. Export a formatted World Bible PDF to share with collaborators.',
  }
  return (
    <div style={{
      marginTop: '48px', padding: '56px 32px', textAlign: 'center',
      border: '1.5px dashed var(--border)', borderRadius: '16px',
      background: 'var(--white)',
    }}>
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: 'var(--green-pale)', border: '1px solid var(--green-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="8" width="12" height="9" rx="2" fill="none" stroke="var(--green)" strokeWidth="1.5"/>
          <path d="M6 8V5.5a3 3 0 016 0V8" stroke="var(--green)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>
        Pro feature
      </p>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>
        {tabName}
      </h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-mid)', maxWidth: '380px', margin: '0 auto 28px', lineHeight: '1.75' }}>
        {descriptions[tabName] || 'Upgrade to Pro to unlock this tool.'}
      </p>
      <Link href="/pricing" style={{ textDecoration: 'none' }}>
        <button style={{
          background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)',
          fontWeight: '700', fontSize: '14px', padding: '12px 32px',
          borderRadius: '8px', border: 'none', cursor: 'pointer',
        }}>
          Upgrade to Pro &rarr;
        </button>
      </Link>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-soft)', marginTop: '14px' }}>
        $8 / month &middot; Cancel anytime
      </p>
    </div>
  )
}

// ─── Overview Tab ──────────────────────────────────────────────────────────────

function OverviewTab({ project, characters, scenes, plotHoles, onUpdate }) {
  const openHoles   = plotHoles.filter(h => h.status === 'open').length
  const [exporting, setExporting] = useState(false)

  async function exportPDF() {
    setExporting(true)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const res = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: project.id, userId: session?.user?.id }),
      })
      if (!res.ok) throw new Error('Export failed')
      const blob = await res.blob()
      const url  = URL.createObjectURL(blob)
      const a    = document.createElement('a')
      a.href     = url
      a.download = `${(project.title || 'project').replace(/[^a-z0-9]/gi,'-').toLowerCase()}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error(err)
      alert('Export failed. Try again.')
    }
    setExporting(false)
  }

  return (
    <div className="project-overview-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

      {/* Stats row */}
      <div className="project-stats-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
        {[
          { label: 'Characters', value: characters.length },
          { label: 'Scenes',     value: scenes.length },
          { label: 'Acts done',  value: `${scenes.filter(s => s.status === 'complete').length}` },
          { label: 'Plot holes', value: openHoles, warn: openHoles > 0 },
        ].map((s, i) => (
          <div key={i} className="card-static" style={{ padding: '18px 20px' }}>
            <p style={{
              fontSize: '28px', fontFamily: 'var(--font-display)',
              color: s.warn ? 'var(--amber)' : 'var(--green)',
              fontWeight: '700', marginBottom: '4px',
            }}>{s.value}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Logline editor */}
      <div className="card-static" style={{ padding: '22px', gridColumn: '1 / -1' }}>
        <LoglineEditor project={project} onUpdate={onUpdate} />
      </div>

      {/* Recent characters */}
      <div className="card-static" style={{ padding: '22px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>Characters</p>
        {characters.length === 0
          ? <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>No characters yet.</p>
          : characters.slice(0, 4).map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--off-white)', fontSize: '14px' }}>
                <span style={{ fontWeight: '500' }}>{c.name}</span>
                <span style={{ color: 'var(--text-soft)', fontSize: '12px' }}>{c.role || ' --'}</span>
              </div>
            ))
        }
        {characters.length > 4 && <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '8px' }}>+{characters.length - 4} more</p>}
      </div>

      {/* Recent plot holes */}
      <div className="card-static" style={{ padding: '22px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>Open Plot Holes</p>
        {openHoles === 0
          ? <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>None open. Clean draft.</p>
          : plotHoles.filter(h => h.status === 'open').slice(0, 4).map(h => (
              <div key={h.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--off-white)', fontSize: '13px', color: 'var(--text-mid)' }}>
                {h.description}
              </div>
            ))
        }
      </div>
      {/* Export */}
      <div className="card-static" style={{ padding: '22px', gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Export</p>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Download your outline, scenes, and characters as a formatted PDF.</p>
        </div>
        <button
          onClick={exportPDF}
          disabled={exporting}
          className="btn-ghost"
          style={{ fontSize: '13px', padding: '9px 18px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', opacity: exporting ? 0.6 : 1 }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v9m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          {exporting ? 'Generating…' : 'Export PDF'}
        </button>
      </div>
    </div>
  )
}

function LoglineEditor({ project, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [val,     setVal]     = useState(project.logline || '')
  const [saving,  setSaving]  = useState(false)

  async function save() {
    setSaving(true)
    await onUpdate({ logline: val.trim() || null })
    setSaving(false)
    setEditing(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Logline</p>
        {!editing && (
          <button onClick={() => setEditing(true)} style={{ background: 'none', border: 'none', fontSize: '12px', color: 'var(--green)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            {val ? 'Edit' : 'Add logline'}
          </button>
        )}
      </div>
      {editing ? (
        <div>
          <textarea
            className="input"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Who wants what, and what stands in the way?"
            style={{ minHeight: '72px', marginBottom: '10px' }}
            autoFocus
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={save} disabled={saving} style={{ fontSize: '13px', padding: '7px 14px' }}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button className="btn-ghost" onClick={() => { setEditing(false); setVal(project.logline || '') }} style={{ fontSize: '13px', padding: '7px 14px' }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '14px', color: val ? 'var(--text-mid)' : 'var(--text-soft)', fontStyle: val ? 'italic' : 'normal', lineHeight: '1.65' }}>
          {val || 'No logline yet. A logline answers: who wants what, and what stands in the way?'}
        </p>
      )}
    </div>
  )
}

// ─── Characters Tab ────────────────────────────────────────────────────────────

function CharactersTab({ projectId, characters, setCharacters, toast }) {
  const [expanded, setExpanded] = useState(null)
  const [adding,   setAdding]   = useState(false)
  const [form,     setForm]     = useState({ name: '', role: '', want: '', need: '', ghost: '', arc: '' })
  const [saving,   setSaving]   = useState(false)

  async function addCharacter() {
    if (!form.name.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('characters')
      .insert({ project_id: projectId, ...form, name: form.name.trim() })
      .select().single()
    if (data) {
      setCharacters(prev => [...prev, data])
      setForm({ name: '', role: '', want: '', need: '', ghost: '', arc: '' })
      setAdding(false)
      toast.success('Character added.')
    } else {
      toast.error('Could not add character.')
    }
    setSaving(false)
  }

  async function updateCharacter(charId, fields) {
    const { data } = await supabase.from('characters').update(fields).eq('id', charId).select().single()
    if (data) setCharacters(prev => prev.map(c => c.id === charId ? data : c))
  }

  async function deleteCharacter(charId) {
    const { error } = await supabase.from('characters').delete().eq('id', charId)
    if (error) { toast.error('Could not delete character.'); return }
    setCharacters(prev => prev.filter(c => c.id !== charId))
    if (expanded === charId) setExpanded(null)
    toast.success('Character deleted.')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)' }}>
          {characters.length} character{characters.length !== 1 ? 's' : ''}
        </p>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
          + Add character
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--green-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>New Character</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input className="input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Character name" />
            </div>
            <div>
              <label style={labelStyle}>Role</label>
              <input className="input" value={form.role} onChange={e => setForm({...form, role: e.target.value})} placeholder="e.g. Protagonist, Mentor" />
            </div>
            <div>
              <label style={labelStyle}>Want <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(conscious goal)</span></label>
              <input className="input" value={form.want} onChange={e => setForm({...form, want: e.target.value})} placeholder="What do they think they need?" />
            </div>
            <div>
              <label style={labelStyle}>Need <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(true need)</span></label>
              <input className="input" value={form.need} onChange={e => setForm({...form, need: e.target.value})} placeholder="What do they actually need?" />
            </div>
            <div>
              <label style={labelStyle}>Ghost <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(wound / backstory)</span></label>
              <input className="input" value={form.ghost} onChange={e => setForm({...form, ghost: e.target.value})} placeholder="What happened to them before the story?" />
            </div>
            <div>
              <label style={labelStyle}>Arc</label>
              <input className="input" value={form.arc} onChange={e => setForm({...form, arc: e.target.value})} placeholder="How do they change?" />
              <label style={labelStyle}>Flaw <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(surface behaviour)</span></label>
              <input className="input" value={form.flaw || ''} onChange={e => setForm({...form, flaw: e.target.value})} placeholder="What bad habit or pattern gets them in trouble?" />
              <label style={labelStyle}>Voice <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(how they speak)</span></label>
              <input className="input" value={form.voice || ''} onChange={e => setForm({...form, voice: e.target.value})} placeholder="If you covered the names, how would you know it was them?" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addCharacter} disabled={!form.name.trim() || saving} style={{ fontSize: '13px', padding: '8px 16px', opacity: form.name.trim() ? 1 : 0.4 }}>
              {saving ? 'Saving…' : 'Add character'}
            </button>
            <button className="btn-ghost" onClick={() => setAdding(false)} style={{ fontSize: '13px', padding: '8px 16px' }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Character list */}
      {characters.length === 0 && !adding && (
        <div className="empty-state">
          <h3>No characters yet</h3>
          <p>Structure without character is furniture. Add your first character before you decide what happens to them.</p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {characters.map(c => (
          <CharacterCard
            key={c.id}
            character={c}
            expanded={expanded === c.id}
            onToggle={() => setExpanded(expanded === c.id ? null : c.id)}
            onUpdate={(fields) => updateCharacter(c.id, fields)}
            onDelete={() => deleteCharacter(c.id)}
          />
        ))}
      </div>
    </div>
  )
}

function CharacterCard({ character, expanded, onToggle, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [form,    setForm]    = useState({ ...character })
  const [saving,  setSaving]  = useState(false)

  async function save() {
    setSaving(true)
    await onUpdate(form)
    setSaving(false)
    setEditing(false)
  }

  return (
    <div className="card" style={{ padding: '18px 22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={onToggle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'var(--green-pale)', border: '1px solid var(--green-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '16px', color: 'var(--green)',
          }}>
            {character.name[0].toUpperCase()}
          </div>
          <div>
            <p style={{ fontWeight: '600', fontSize: '15px' }}>{character.name}</p>
            {character.role && <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{character.role}</p>}
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-soft)', flexShrink: 0 }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {expanded && (
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          {editing ? (
            <div>
              <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                {[
                  { key: 'name',  label: 'Name' },
                  { key: 'role',  label: 'Role' },
                  { key: 'want',  label: 'Want' },
                  { key: 'need',  label: 'Need' },
                  { key: 'ghost', label: 'Ghost' },
                  { key: 'arc',   label: 'Arc' },
                  { key: 'flaw',  label: 'Flaw' },
                  { key: 'voice', label: 'Voice' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={labelStyle}>{f.label}</label>
                    <input className="input" value={form[f.key] || ''} onChange={e => setForm({...form, [f.key]: e.target.value})} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-primary" onClick={save} disabled={saving} style={{ fontSize: '13px', padding: '7px 14px' }}>{saving ? 'Saving…' : 'Save'}</button>
                <button className="btn-ghost"   onClick={() => { setEditing(false); setForm({...character}) }} style={{ fontSize: '13px', padding: '7px 14px' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                {[
                  { label: 'Want',  value: character.want },
                  { label: 'Need',  value: character.need },
                  { label: 'Ghost', value: character.ghost },
                  { label: 'Arc',   value: character.arc },
                  character.flaw  && { label: 'Flaw',  value: character.flaw },
                  character.voice && { label: 'Voice', value: character.voice },
                ].map((f, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{f.label}</p>
                    <p style={{ fontSize: '13px', color: f.value ? 'var(--text-mid)' : 'var(--text-soft)', fontStyle: f.value ? 'normal' : 'italic' }}>
                      {f.value || 'Not set'}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-ghost" onClick={() => setEditing(true)} style={{ fontSize: '12px', padding: '6px 12px' }}>Edit</button>
                <button onClick={onDelete} style={{ background: 'none', border: 'none', fontSize: '12px', color: '#991B1B', cursor: 'pointer', padding: '6px 12px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Delete</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Beat stubs for auto-fill ──────────────────────────────────────────────────

const frameworkBeatStubs = {
  'save-the-cat': [
    { title: 'Opening Image',     act_number: 1, beat_label: 'Opening Image',    notes: 'The very first image —a snapshot of your protagonist\'s problem before anything changes.' },
    { title: 'Theme Stated',      act_number: 1, beat_label: 'Theme Stated',     notes: 'Someone says something to your protagonist that they don\'t yet understand. This is your theme.' },
    { title: 'Set-Up',            act_number: 1, beat_label: 'Set-Up',           notes: 'Introduce all the people, flaws, and circumstances that need fixing by the end.' },
    { title: 'Catalyst',          act_number: 1, beat_label: 'Catalyst',         notes: 'The event around page 12 that disrupts the protagonist\'s world. Done TO them, not by them.' },
    { title: 'Debate',            act_number: 1, beat_label: 'Debate',           notes: 'The protagonist hesitates. What is the last question they ask before committing to Act 2?' },
    { title: 'Break into Two',    act_number: 1, beat_label: 'Break into Two',   notes: 'The protagonist CHOOSES to enter Act 2. This is the most important beat —it must be active.' },
    { title: 'B Story',           act_number: 2, beat_label: 'B Story',          notes: 'The secondary storyline (usually a relationship) that carries the theme.' },
    { title: 'Fun and Games',     act_number: 2, beat_label: 'Fun and Games',    notes: 'The "promise of the premise." The audience gets what they came for.' },
    { title: 'Midpoint',          act_number: 2, beat_label: 'Midpoint',         notes: 'False victory or false defeat. After this, the protagonist becomes fully active.' },
    { title: 'Bad Guys Close In', act_number: 2, beat_label: 'Bad Guys Close In', notes: 'External and internal forces dismantle what the protagonist built in Fun and Games.' },
    { title: 'All Is Lost',       act_number: 2, beat_label: 'All Is Lost',      notes: 'The lowest point. Something must die here —literal or symbolic.' },
    { title: 'Dark Night of the Soul', act_number: 2, beat_label: 'Dark Night',  notes: 'The protagonist sits in the wreckage. The solution must come from within them.' },
    { title: 'Break into Three',  act_number: 3, beat_label: 'Break into Three', notes: 'The A and B stories merge. The protagonist has a new idea —and it comes from the B story.' },
    { title: 'Finale',            act_number: 3, beat_label: 'Finale',           notes: 'Execute the plan using everything learned. Mirror the setup in new, meaningful ways.' },
    { title: 'Final Image',       act_number: 3, beat_label: 'Final Image',      notes: 'The opposite of the Opening Image. Proof that change is real and permanent.' },
  ],
  'heros-journey': [
    { title: 'Ordinary World',        act_number: 1, beat_label: 'Ordinary World',       notes: 'The hero\'s normal life —establish what they stand to lose.' },
    { title: 'Call to Adventure',     act_number: 1, beat_label: 'Call to Adventure',    notes: 'The disruption that presents the challenge ahead.' },
    { title: 'Refusal of the Call',   act_number: 1, beat_label: 'Refusal',              notes: 'The hero hesitates. What fear holds them back?' },
    { title: 'Meeting the Mentor',    act_number: 1, beat_label: 'Mentor',               notes: 'Who gives the hero wisdom or a tool to cross the threshold?' },
    { title: 'Crossing the Threshold',act_number: 1, beat_label: 'Threshold',            notes: 'Point of no return. The Ordinary World is left behind.' },
    { title: 'Tests, Allies, Enemies',act_number: 2, beat_label: 'Tests / Allies',       notes: 'The hero learns the rules of the Special World and builds relationships.' },
    { title: 'Approach the Inmost Cave', act_number: 2, beat_label: 'Approach',          notes: 'Preparation for the Ordeal. What is the hero\'s plan?' },
    { title: 'The Ordeal',            act_number: 2, beat_label: 'Ordeal',               notes: 'The central crisis. The hero must "die" to be reborn with new knowledge.' },
    { title: 'Reward (Seizing the Sword)', act_number: 2, beat_label: 'Reward',          notes: 'What does the hero claim after surviving the Ordeal?' },
    { title: 'The Road Back',         act_number: 3, beat_label: 'Road Back',            notes: 'What drives the hero back? What final obstacle appears?' },
    { title: 'Resurrection',          act_number: 3, beat_label: 'Resurrection',         notes: 'Final transformation. The climax proves the change is real.' },
    { title: 'Return with the Elixir',act_number: 3, beat_label: 'Return',               notes: 'The hero brings back wisdom, love, or freedom that heals the Ordinary World.' },
  ],
  'story-circle': [
    { title: 'You —Establish the character',   act_number: 1, beat_label: 'You',    notes: 'Who is the protagonist in their comfort zone?' },
    { title: 'Need —Establish the want',        act_number: 1, beat_label: 'Need',   notes: 'What does the character need or want that they can\'t scratch in their current world?' },
    { title: 'Go —Enter an unfamiliar world',   act_number: 1, beat_label: 'Go',     notes: 'What threshold do they cross into something new and unfamiliar?' },
    { title: 'Search —Road of trials',          act_number: 2, beat_label: 'Search', notes: 'What obstacles does the character face while searching for what they need?' },
    { title: 'Find —The thing they were seeking', act_number: 2, beat_label: 'Find', notes: 'Do they find it? At what cost or complication?' },
    { title: 'Take —Pay the price',             act_number: 2, beat_label: 'Take',   notes: 'What must the character sacrifice or lose for what they found?' },
    { title: 'Return —Back to the familiar',    act_number: 3, beat_label: 'Return', notes: 'How do they return to the familiar world, changed?' },
    { title: 'Change —Transformation complete', act_number: 3, beat_label: 'Change', notes: 'How has the character fundamentally changed? The circle closes.' },
  ],
  'sequence-approach': [
    { title: 'Sequence 1 —Establish & Incite',   act_number: 1, beat_label: 'Sequence 1', notes: 'Establish the world and protagonist. Land the inciting incident (pp. 1–15).' },
    { title: 'Sequence 2 —Decision & Threshold', act_number: 1, beat_label: 'Sequence 2', notes: 'The protagonist\'s response and the Act 1 decision they cannot unmake (pp. 15–30).' },
    { title: 'Sequence 3 —New World, Old Methods', act_number: 2, beat_label: 'Sequence 3', notes: 'First attempt. Old tools meet new problems. Ends in setback (pp. 30–45).' },
    { title: 'Sequence 4 —Progress & Midpoint',  act_number: 2, beat_label: 'Sequence 4', notes: 'Real progress, then the midpoint reversal (pp. 45–60).' },
    { title: 'Sequence 5 —Reversal & Escalation', act_number: 2, beat_label: 'Sequence 5', notes: 'Midpoint consequences arrive. Resources stripped away (pp. 60–75).' },
    { title: 'Sequence 6 —All Is Lost & Choice',  act_number: 2, beat_label: 'Sequence 6', notes: 'Lowest point. Something dies. The fundamental choice before Act 3 (pp. 75–90).' },
    { title: 'Sequence 7 —Climax Begins',         act_number: 3, beat_label: 'Sequence 7', notes: 'Final confrontation begins. Protagonist acts on their Act 2 choice (pp. 90–105).' },
    { title: 'Sequence 8 —Resolution',            act_number: 3, beat_label: 'Sequence 8', notes: 'Climax resolves. The new state of the world (pp. 105–120).' },
  ],
  'kishotenketsu': [
    { title: 'Ki —Introduction',   act_number: 1, beat_label: 'Ki',    notes: 'Establish the world, characters, and situation. No conflict. Pure immersion.' },
    { title: 'Shō —Development',   act_number: 1, beat_label: 'Shō',   notes: 'Introduce a second element that seems unrelated. Develop both threads independently.' },
    { title: 'Ten —Twist',         act_number: 2, beat_label: 'Ten',   notes: 'The unexpected connection between Ki and Shō. A shift in perception, not a plot twist.' },
    { title: 'Ketsu —Conclusion',  act_number: 3, beat_label: 'Ketsu', notes: 'Reconcile the elements. Let the meaning land without explaining it.' },
  ],
  'fichtean': [
    { title: 'Opening Crisis',         act_number: 1, beat_label: 'Opening Crisis',  notes: 'Drop in mid-action. No setup. The audience will catch up.' },
    { title: 'Crisis 1 —Escalation',  act_number: 1, beat_label: 'Crisis 1',        notes: 'First crisis after the opening. What does it cost? What backstory does it reveal?' },
    { title: 'Crisis 2 —Escalation',  act_number: 2, beat_label: 'Crisis 2',        notes: 'Second crisis. Worse than the first. Tighten the spiral.' },
    { title: 'Crisis 3 —Peak Pressure', act_number: 2, beat_label: 'Crisis 3',      notes: 'Optional. The backstory that unlocks the full weight of the present.' },
    { title: 'Climax —All Crises Converge', act_number: 3, beat_label: 'Climax',    notes: 'Everything arrives at once. Inevitable in retrospect.' },
    { title: 'Brief Resolution',       act_number: 3, beat_label: 'Resolution',      notes: 'Keep it short. What matters already happened. One final beat, then close.' },
  ],
  'freeform': [
    { title: 'Opening',       act_number: 1, beat_label: 'Opening',    notes: 'How does the story begin? Why here and not somewhere else?' },
    { title: 'Protagonist',   act_number: 1, beat_label: 'Protagonist', notes: 'Establish who this person is and what they carry into the story.' },
    { title: 'Stakes',        act_number: 1, beat_label: 'Stakes',     notes: 'What does the protagonist lose if they fail? Make it concrete.' },
    { title: 'Central Turn',  act_number: 2, beat_label: 'Turn',       notes: 'The moment everything changes and can\'t go back. What is lost or revealed?' },
    { title: 'Low Point',     act_number: 2, beat_label: 'Low Point',  notes: 'Darkest moment. What truth must now be faced?' },
    { title: 'Resolution',    act_number: 3, beat_label: 'Resolution', notes: 'What happens in the final scenes? What does the ending mean?' },
  ],
}

// ─── Scenes Tab ────────────────────────────────────────────────────────────────

function ScenesTab({ projectId, scenes, setScenes, framework, toast }) {
  const [adding,      setAdding]      = useState(false)
  const [form,        setForm]        = useState({ title: '', act_number: 1, beat_label: '', notes: '' })
  const [saving,      setSaving]      = useState(false)
  const [autoFilling, setAutoFilling] = useState(false)
  const [confirmFill, setConfirmFill] = useState(false)

  const stubs = frameworkBeatStubs[framework] || []

  async function autoFill() {
    if (!stubs.length) return
    setAutoFilling(true)
    setConfirmFill(false)
    const inserts = stubs.map((s, i) => ({
      project_id:  projectId,
      title:       s.title,
      act_number:  s.act_number,
      beat_label:  s.beat_label,
      notes:       s.notes,
      order_index: scenes.length + i,
      status:      'draft',
    }))
    const { data, error } = await supabase.from('scenes').insert(inserts).select()
    if (data) {
      setScenes(prev => [...prev, ...data])
      toast.success(`${data.length} beat stubs added.`)
    } else {
      toast.error('Could not auto-fill beats.')
      console.error(error)
    }
    setAutoFilling(false)
  }

  const byAct = scenes.reduce((acc, s) => {
    const act = s.act_number || 1
    if (!acc[act]) acc[act] = []
    acc[act].push(s)
    return acc
  }, {})

  async function addScene() {
    if (!form.title.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('scenes')
      .insert({ project_id: projectId, ...form, title: form.title.trim(), order_index: scenes.length })
      .select().single()
    if (data) {
      setScenes(prev => [...prev, data])
      setForm({ title: '', act_number: form.act_number, beat_label: '', notes: '' })
      setAdding(false)
      toast.success('Scene added.')
    } else {
      toast.error('Could not add scene.')
    }
    setSaving(false)
  }

  async function updateScene(sceneId, fields) {
    const { data } = await supabase.from('scenes').update(fields).eq('id', sceneId).select().single()
    if (data) setScenes(prev => prev.map(s => s.id === sceneId ? data : s))
  }

  async function deleteScene(sceneId) {
    await supabase.from('scenes').delete().eq('id', sceneId)
    setScenes(prev => prev.filter(s => s.id !== sceneId))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)' }}>
          {scenes.length} scene{scenes.length !== 1 ? 's' : ''}
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {stubs.length > 0 && scenes.length === 0 && !confirmFill && (
            <button
              className="btn-ghost"
              onClick={() => setConfirmFill(true)}
              style={{ fontSize: '12px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Auto-fill {stubs.length} beats
            </button>
          )}
          {confirmFill && (
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', background: 'var(--amber-pale, #FEF3C7)', border: '1px solid var(--amber)', borderRadius: '8px', padding: '6px 12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--amber)' }}>Add {stubs.length} beat stubs?</span>
              <button
                className="btn-primary"
                onClick={autoFill}
                disabled={autoFilling}
                style={{ fontSize: '12px', padding: '5px 12px' }}
              >
                {autoFilling ? 'Adding…' : 'Yes, add'}
              </button>
              <button
                className="btn-ghost"
                onClick={() => setConfirmFill(false)}
                style={{ fontSize: '12px', padding: '5px 10px' }}
              >
                Cancel
              </button>
            </div>
          )}
          <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
            + Add scene
          </button>
        </div>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--green-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>New Scene</p>
          <div className="form-3col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Scene title *</label>
              <input className="input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="What happens in this scene?" />
            </div>
            <div>
              <label style={labelStyle}>Act</label>
              <select className="input" value={form.act_number} onChange={e => setForm({...form, act_number: parseInt(e.target.value)})}>
                <option value={1}>Act 1</option>
                <option value={2}>Act 2</option>
                <option value={3}>Act 3</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Beat label</label>
              <input className="input" value={form.beat_label} onChange={e => setForm({...form, beat_label: e.target.value})} placeholder="e.g. Catalyst" />
            </div>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Notes</label>
            <textarea className="input" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="What must this scene accomplish?" style={{ minHeight: '64px' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addScene} disabled={!form.title.trim() || saving} style={{ fontSize: '13px', padding: '8px 16px', opacity: form.title.trim() ? 1 : 0.4 }}>
              {saving ? 'Saving…' : 'Add scene'}
            </button>
            <button className="btn-ghost" onClick={() => setAdding(false)} style={{ fontSize: '13px', padding: '8px 16px' }}>Cancel</button>
          </div>
        </div>
      )}

      {scenes.length === 0 && !adding && (
        <div className="empty-state">
          <h3>No scenes yet</h3>
          <p>Every story is a sequence of scenes. Add your first —or use <strong>Auto-fill beats</strong> above to pre-populate the {stubs.length} structural beats from your {framework ? framework.replace(/-/g,' ') : ''} framework.</p>
        </div>
      )}

      {/* Scenes grouped by act */}
      {Object.entries(byAct).sort(([a],[b]) => a - b).map(([act, actScenes]) => (
        <div key={act} style={{ marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Act {act} · {actScenes.length} scene{actScenes.length !== 1 ? 's' : ''}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {actScenes.map(scene => (
              <SceneRow key={scene.id} scene={scene} onUpdate={(f) => updateScene(scene.id, f)} onDelete={() => deleteScene(scene.id)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function SceneRow({ scene, onUpdate, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const [editing,  setEditing]  = useState(false)
  const [form,     setForm]     = useState({ ...scene })
  const [saving,   setSaving]   = useState(false)

  async function save() {
    setSaving(true)
    await onUpdate(form)
    setSaving(false)
    setEditing(false)
  }

  return (
    <div className="card" style={{ padding: '14px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flex: 1 }} onClick={() => setExpanded(!expanded)}>
          {scene.beat_label && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '2px 7px',
              borderRadius: '4px', background: 'var(--green-pale)', color: 'var(--green)',
              border: '1px solid var(--green-border)', flexShrink: 0,
            }}>{scene.beat_label}</span>
          )}
          <p style={{ fontSize: '14px', fontWeight: '500' }}>{scene.title}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={() => onUpdate({ status: scene.status === 'complete' ? 'draft' : 'complete' })}
            style={{
              background: scene.status === 'complete' ? 'var(--green)' : 'transparent',
              border: `1px solid ${scene.status === 'complete' ? 'var(--green)' : 'var(--border)'}`,
              borderRadius: '4px', width: '22px', height: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            title={scene.status === 'complete' ? 'Mark incomplete' : 'Mark complete'}
          >
            {scene.status === 'complete' && (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5l2.5 2.5L9 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-soft)', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
          {editing ? (
            <div>
              <div className="form-3col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div><label style={labelStyle}>Title</label><input className="input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} /></div>
                <div><label style={labelStyle}>Act</label>
                  <select className="input" value={form.act_number} onChange={e => setForm({...form, act_number: parseInt(e.target.value)})}>
                    <option value={1}>Act 1</option><option value={2}>Act 2</option><option value={3}>Act 3</option>
                  </select>
                </div>
                <div><label style={labelStyle}>Beat</label><input className="input" value={form.beat_label || ''} onChange={e => setForm({...form, beat_label: e.target.value})} /></div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Notes</label>
                <textarea className="input" value={form.notes || ''} onChange={e => setForm({...form, notes: e.target.value})} style={{ minHeight: '60px' }} />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-primary" onClick={save} disabled={saving} style={{ fontSize: '12px', padding: '6px 12px' }}>{saving ? 'Saving…' : 'Save'}</button>
                <button className="btn-ghost" onClick={() => { setEditing(false); setForm({...scene}) }} style={{ fontSize: '12px', padding: '6px 12px' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              {scene.notes && <p style={{ fontSize: '13px', color: 'var(--text-mid)', marginBottom: '12px', lineHeight: '1.6' }}>{scene.notes}</p>}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-ghost" onClick={() => setEditing(true)} style={{ fontSize: '12px', padding: '6px 12px' }}>Edit</button>
                <button onClick={onDelete} style={{ background: 'none', border: 'none', fontSize: '12px', color: '#991B1B', cursor: 'pointer', padding: '6px 12px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Delete</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Plot Holes Tab ────────────────────────────────────────────────────────────

function PlotHolesTab({ projectId, plotHoles, setPlotHoles, toast }) {
  const [adding,  setAdding]  = useState(false)
  const [form,    setForm]    = useState({ description: '', severity: 'medium' })
  const [saving,  setSaving]  = useState(false)

  const open     = plotHoles.filter(h => h.status === 'open')
  const resolved = plotHoles.filter(h => h.status === 'resolved')

  async function addHole() {
    if (!form.description.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('plot_holes')
      .insert({ project_id: projectId, ...form, description: form.description.trim(), status: 'open' })
      .select().single()
    if (data) {
      setPlotHoles(prev => [...prev, data])
      setForm({ description: '', severity: 'medium' })
      setAdding(false)
      toast.success('Plot hole flagged.')
    } else {
      toast.error('Could not save plot hole.')
    }
    setSaving(false)
  }

  async function toggleStatus(hole) {
    const newStatus = hole.status === 'open' ? 'resolved' : 'open'
    const { data } = await supabase.from('plot_holes').update({ status: newStatus }).eq('id', hole.id).select().single()
    if (data) setPlotHoles(prev => prev.map(h => h.id === hole.id ? data : h))
  }

  async function deleteHole(holeId) {
    const { error } = await supabase.from('plot_holes').delete().eq('id', holeId)
    if (error) { toast.error('Could not delete plot hole.'); return }
    setPlotHoles(prev => prev.filter(h => h.id !== holeId))
    toast.success('Plot hole removed.')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)' }}>
          {open.length} open · {resolved.length} resolved
        </p>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
          + Flag a hole
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--amber-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Flag a Plot Hole</p>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Describe the hole *</label>
            <textarea
              className="input"
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              placeholder="What doesn't add up? What needs fixing?"
              style={{ minHeight: '72px' }}
              autoFocus
            />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Severity</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['low', 'medium', 'high'].map(s => (
                <button key={s} onClick={() => setForm({...form, severity: s})} style={{
                  padding: '6px 14px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer',
                  border: form.severity === s ? '1px solid var(--green)' : '1px solid var(--border)',
                  background: form.severity === s ? 'var(--green-pale)' : 'transparent',
                  color: form.severity === s ? 'var(--green)' : 'var(--text-mid)',
                  fontFamily: 'var(--font-ui)',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s',
                }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addHole} disabled={!form.description.trim() || saving} style={{ fontSize: '13px', padding: '8px 16px', opacity: form.description.trim() ? 1 : 0.4 }}>
              {saving ? 'Saving…' : 'Flag hole'}
            </button>
            <button className="btn-ghost" onClick={() => setAdding(false)} style={{ fontSize: '13px', padding: '8px 16px' }}>Cancel</button>
          </div>
        </div>
      )}

      {plotHoles.length === 0 && !adding && (
        <div className="empty-state">
          <h3>No plot holes flagged</h3>
          <p>Every first draft has them. The ones you track are the ones you fix.</p>
        </div>
      )}

      {/* Open holes */}
      {open.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Open · {open.length}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {open.map(h => <HoleRow key={h.id} hole={h} onToggle={() => toggleStatus(h)} onDelete={() => deleteHole(h.id)} />)}
          </div>
        </div>
      )}

      {/* Resolved holes */}
      {resolved.length > 0 && (
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Resolved · {resolved.length}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.65 }}>
            {resolved.map(h => <HoleRow key={h.id} hole={h} onToggle={() => toggleStatus(h)} onDelete={() => deleteHole(h.id)} />)}
          </div>
        </div>
      )}
    </div>
  )
}

function HoleRow({ hole, onToggle, onDelete }) {
  const severityColor = {
    high:   { bg: '#FEF2F2', color: '#991B1B', border: '#FECACA' },
    medium: { bg: 'var(--amber-pale)', color: 'var(--amber)', border: 'var(--amber-border)' },
    low:    { bg: 'var(--off-white)', color: 'var(--text-mid)', border: 'var(--border)' },
  }
  const sc = severityColor[hole.severity] || severityColor.medium

  return (
    <div className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '10px', flex: 1, alignItems: 'flex-start' }}>
        <button
          onClick={onToggle}
          style={{
            width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
            background: hole.status === 'resolved' ? 'var(--green)' : 'transparent',
            border: `2px solid ${hole.status === 'resolved' ? 'var(--green)' : 'var(--border)'}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          {hole.status === 'resolved' && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.5', textDecoration: hole.status === 'resolved' ? 'line-through' : 'none' }}>
            {hole.description}
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '1px 6px', borderRadius: '3px', background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`, textTransform: 'capitalize' }}>
              {hole.severity}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-soft)' }}>{timeAgo(hole.created_at)}</span>
          </div>
        </div>
      </div>
      <button onClick={onDelete} style={{ background: 'none', border: 'none', color: 'var(--text-soft)', cursor: 'pointer', fontSize: '16px', lineHeight: 1, padding: '0 2px', flexShrink: 0 }} title="Delete">
        &times;
      </button>
    </div>
  )
}

// ─── Shared styles ─────────────────────────────────────────────────────────────

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: '600',
  color: 'var(--text-dark)',
  marginBottom: '5px',
  fontFamily: 'var(--font-ui)',
}

// ─── Loading / Error states ────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ width: '200px', height: '36px', borderRadius: '6px', marginBottom: '8px' }} className="skeleton" />
      <div style={{ width: '300px', height: '18px', borderRadius: '4px', marginBottom: '32px' }} className="skeleton" />
      <div className="project-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginBottom: '32px' }}>
        {[0,1,2,3].map(i => <div key={i} className="skeleton" style={{ height: '80px', borderRadius: '12px' }} />)}
      </div>
      <div style={{ height: '200px', borderRadius: '12px' }} className="skeleton" />
    </div>
  )
}

function ErrorState({ message }) {
  return (
    <div style={{ maxWidth: '1100px', margin: '80px auto', padding: '40px 24px', textAlign: 'center' }}>
      <div className="card-static" style={{ padding: '48px', maxWidth: '440px', margin: '0 auto' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', marginBottom: '20px' }}>{message}</p>
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">Back to dashboard</button>
        </Link>
      </div>
    </div>
  )
}

// ─── Timeline Tab ─────────────────────────────────────────────────────────────

function TimelineTab({ scenes, setScenes, toast, projectId }) {
  const ACT_COLORS = {
    1: { bg: '#EFF6E7', border: '#6AAF3D', text: '#2D5016', label: 'Act 1' },
    2: { bg: '#FFF7ED', border: '#F59E0B', text: '#92400E', label: 'Act 2' },
    3: { bg: '#EEF2FF', border: '#6366F1', text: '#4338CA', label: 'Act 3' },
  }

  const [expanded, setExpanded] = useState(null)
  const [toggling, setToggling] = useState(null)

  async function toggleStatus(scene) {
    if (toggling === scene.id) return
    setToggling(scene.id)
    const newStatus = scene.status === 'complete' ? 'draft' : 'complete'
    try {
      const { data, error } = await supabase
        .from('scenes')
        .update({ status: newStatus })
        .eq('id', scene.id)
        .select()
        .single()
      if (error) throw error
      setScenes(prev => prev.map(s => s.id === scene.id ? { ...s, status: newStatus } : s))
    } catch {
      toast.error('Could not update scene.')
    } finally {
      setToggling(null)
    }
  }

  const byAct = scenes.reduce((acc, s) => {
    const act = s.act_number || 1
    if (!acc[act]) acc[act] = []
    acc[act].push(s)
    return acc
  }, {})

  const acts = Object.keys(byAct).map(Number).sort()
  const totalDone = scenes.filter(s => s.status === 'complete').length
  const pct = scenes.length ? Math.round((totalDone / scenes.length) * 100) : 0

  if (scenes.length === 0) {
    return (
      <div className="empty-state" style={{ marginTop: '40px' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <h3>No scenes yet</h3>
        <p>Add scenes in the Scenes tab — they will appear here on the timeline.</p>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '60px' }}>

      {/* Header + progress */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>Story Timeline</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            {scenes.length} scene{scenes.length !== 1 ? 's' : ''} &middot; {acts.length} act{acts.length !== 1 ? 's' : ''} &middot; {totalDone} complete
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '120px', height: '6px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: '3px', background: 'var(--green)', width: `${pct}%`, transition: 'width 0.4s ease' }} />
          </div>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>{pct}%</span>
        </div>
      </div>

      {/* Act sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {acts.map(act => {
          const actScenes = byAct[act] || []
          const col = ACT_COLORS[act] || { bg: '#F5F5F5', border: '#999', text: '#555', label: `Act ${act}` }
          const actDone = actScenes.filter(s => s.status === 'complete').length
          return (
            <div key={act}>
              {/* Act header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  padding: '3px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700',
                  fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase',
                  background: col.bg, color: col.text, border: `1px solid ${col.border}`,
                }}>
                  {col.label}
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-soft)' }}>
                  {actDone}/{actScenes.length} complete
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Scene list — vertical */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {actScenes.map((scene, idx) => {
                  const done = scene.status === 'complete'
                  const isExpanded = expanded === scene.id
                  const isToggling = toggling === scene.id
                  return (
                    <div key={scene.id} style={{ display: 'flex', gap: '0', position: 'relative' }}>
                      {/* Timeline spine */}
                      <div style={{ width: '40px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* Node */}
                        <div style={{
                          width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                          background: done ? 'var(--green)' : '#fff',
                          border: `2px solid ${done ? 'var(--green)' : 'var(--border)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          zIndex: 1, marginTop: '14px',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                        }}
                          onClick={() => toggleStatus(scene)}
                          title={done ? 'Mark incomplete' : 'Mark complete'}
                        >
                          {isToggling ? (
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid', borderColor: done ? '#fff' : 'var(--text-soft)', borderTopColor: 'transparent', animation: 'spin 0.6s linear infinite' }} />
                          ) : done ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: '700', color: 'var(--text-soft)' }}>{idx + 1}</span>
                          )}
                        </div>
                        {/* Connector line */}
                        {idx < actScenes.length - 1 && (
                          <div style={{ flex: 1, width: '2px', background: done ? 'var(--green-border)' : 'var(--border)', minHeight: '16px' }} />
                        )}
                      </div>

                      {/* Scene card */}
                      <div style={{ flex: 1, paddingBottom: idx < actScenes.length - 1 ? '0' : '0', paddingTop: '8px', paddingLeft: '12px', paddingRight: '4px', paddingBottom: '16px' }}>
                        <div
                          style={{
                            border: `1px solid ${done ? 'var(--green-border)' : 'var(--border)'}`,
                            borderRadius: '10px',
                            background: done ? 'var(--green-pale)' : '#fff',
                            overflow: 'hidden',
                            transition: 'border-color 0.2s',
                          }}
                        >
                          {/* Scene header row */}
                          <div
                            style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                            onClick={() => setExpanded(isExpanded ? null : scene.id)}
                          >
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{
                                fontSize: '14px', fontWeight: '600', lineHeight: '1.35',
                                color: done ? 'var(--green)' : 'var(--text-dark)',
                                margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              }}>
                                {scene.title}
                              </p>
                              {scene.beat_label && (
                                <p style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', margin: '2px 0 0', letterSpacing: '0.03em' }}>
                                  {scene.beat_label}
                                </p>
                              )}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                              {done && (
                                <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--green)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Done</span>
                              )}
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text-soft)', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>

                          {/* Expanded notes */}
                          {isExpanded && (
                            <div style={{ padding: '0 16px 14px', borderTop: '1px solid var(--border)' }}>
                              {scene.notes ? (
                                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7', margin: '12px 0 0' }}>
                                  {scene.notes}
                                </p>
                              ) : (
                                <p style={{ fontSize: '13px', color: 'var(--text-soft)', fontStyle: 'italic', margin: '12px 0 0' }}>
                                  No notes for this scene.
                                </p>
                              )}
                              <button
                                onClick={() => toggleStatus(scene)}
                                disabled={isToggling}
                                style={{
                                  marginTop: '12px', padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '600',
                                  fontFamily: 'var(--font-ui)', cursor: 'pointer', border: 'none',
                                  background: done ? 'var(--off-white)' : 'var(--green)',
                                  color: done ? 'var(--text-mid)' : '#fff',
                                  transition: 'all 0.15s',
                                }}
                              >
                                {done ? 'Mark incomplete' : 'Mark complete'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ─── Themes Map Tab ────────────────────────────────────────────────────────────

function ThemesMapTab({ projectId, scenes, themes, setThemes, toast }) {
  const [adding,      setAdding]      = useState(false)
  const [newLabel,    setNewLabel]    = useState('')
  const [newType,     setNewType]     = useState('theme')
  const [newNotes,    setNewNotes]    = useState('')
  const [saving,      setSaving]      = useState(false)
  const [selected,    setSelected]    = useState(null)   // theme id | null
  const [links,       setLinks]       = useState([])     // [{ theme_id, scene_id }]
  const [positions,   setPositions]   = useState({})
  const [dragging,    setDragging]    = useState(null)
  const [editingId,   setEditingId]   = useState(null)
  const [editNotes,   setEditNotes]   = useState('')
  const svgRef = useRef(null)

  useEffect(() => {
    const pos = {}
    themes.forEach((t, i) => {
      const saved = t.canvas_x != null ? { x: t.canvas_x, y: t.canvas_y } : null
      pos[`theme-${t.id}`] = saved || { x: 100 + (i % 3) * 240, y: 60 + Math.floor(i / 3) * 110 }
    })
    scenes.forEach((s, i) => {
      pos[`scene-${s.id}`] = { x: 80 + (i % 4) * 200, y: 380 + Math.floor(i / 4) * 100 }
    })
    setPositions(pos)
    const allLinks = []
    themes.forEach(t => {
      const linked = t.linked_scenes ? JSON.parse(t.linked_scenes) : []
      linked.forEach(sid => allLinks.push({ theme_id: t.id, scene_id: sid }))
    })
    setLinks(allLinks)
  }, [themes.length, scenes.length])

  async function addTheme() {
    if (!newLabel.trim()) return
    setSaving(true)
    const { data, error } = await supabase
      .from('themes')
      .insert({ project_id: projectId, label: newLabel.trim(), type: newType, notes: newNotes.trim() || null, linked_scenes: '[]', canvas_x: null, canvas_y: null })
      .select().single()
    setSaving(false)
    if (error) { toast.error('Failed to add theme'); return }
    setThemes(prev => [...prev, data])
    setNewLabel('')
    setNewNotes('')
    setAdding(false)
    toast.success('Theme added')
  }

  async function deleteTheme(id) {
    const { error } = await supabase.from('themes').delete().eq('id', id)
    if (error) { toast.error('Failed to delete'); return }
    setThemes(prev => prev.filter(t => t.id !== id))
    setLinks(prev => prev.filter(l => l.theme_id !== id))
    if (selected === id) setSelected(null)
    toast.success('Theme removed')
  }

  async function saveNotes(themeId, notes) {
    await supabase.from('themes').update({ notes }).eq('id', themeId)
    setThemes(prev => prev.map(t => t.id === themeId ? { ...t, notes } : t))
  }

  async function savePosition(themeId, x, y) {
    await supabase.from('themes').update({ canvas_x: Math.round(x), canvas_y: Math.round(y) }).eq('id', themeId)
  }

  async function toggleLink(themeId, sceneId) {
    const existing = links.find(l => l.theme_id === themeId && l.scene_id === sceneId)
    let newLinks
    if (existing) {
      newLinks = links.filter(l => !(l.theme_id === themeId && l.scene_id === sceneId))
    } else {
      newLinks = [...links, { theme_id: themeId, scene_id: sceneId }]
    }
    setLinks(newLinks)
    const themeLinks = newLinks.filter(l => l.theme_id === themeId).map(l => l.scene_id)
    await supabase.from('themes').update({ linked_scenes: JSON.stringify(themeLinks) }).eq('id', themeId)
  }

  function onNodeMouseDown(e, nodeKey) {
    e.preventDefault()
    e.stopPropagation()
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const pos = positions[nodeKey] || { x: 0, y: 0 }
    setDragging({ nodeKey, ox: e.clientX - rect.left - pos.x, oy: e.clientY - rect.top - pos.y })
  }

  function onSvgMouseMove(e) {
    if (!dragging) return
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const x = Math.max(0, e.clientX - rect.left - dragging.ox)
    const y = Math.max(0, e.clientY - rect.top - dragging.oy)
    setPositions(prev => ({ ...prev, [dragging.nodeKey]: { x, y } }))
  }

  function onSvgMouseUp() {
    if (!dragging) return
    if (dragging.nodeKey.startsWith('theme-')) {
      const themeId = dragging.nodeKey.replace('theme-', '')
      const pos = positions[dragging.nodeKey]
      if (pos) savePosition(themeId, pos.x, pos.y)
    }
    setDragging(null)
  }

  const THEME_COLORS = {
    theme:    { bg: '#2D5016', text: '#e8f4d4', border: '#1A3009', label: 'Theme' },
    motif:    { bg: '#7A4C07', text: '#fff7ed', border: '#5a3605', label: 'Motif' },
    question: { bg: '#3730A3', text: '#eef2ff', border: '#2e27a0', label: 'Question' },
    symbol:   { bg: '#0F766E', text: '#f0fdfa', border: '#0c6b64', label: 'Symbol' },
  }

  const selectedTheme = selected ? themes.find(t => t.id === selected) : null

  // Calculate canvas height based on node positions
  const maxY = Object.values(positions).reduce((m, p) => Math.max(m, p.y + 100), 500)
  const canvasH = Math.max(560, maxY + 80)

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>Themes Map</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            Add themes, motifs, and symbols. Drag to arrange. Click a theme node to link it to scenes.
          </p>
        </div>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ flexShrink: 0 }}>
          + Add
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card" style={{ padding: '18px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '10px' }}>
            <div style={{ flex: 1, minWidth: '160px' }}>
              <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Label</label>
              <input className="input" placeholder="e.g. Identity, Guilt, The Watch…" value={newLabel}
                onChange={e => setNewLabel(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addTheme()}
                autoFocus
              />
            </div>
            <div style={{ minWidth: '140px' }}>
              <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Type</label>
              <select className="input" value={newType} onChange={e => setNewType(e.target.value)}>
                <option value="theme">Theme</option>
                <option value="motif">Motif</option>
                <option value="question">Question</option>
                <option value="symbol">Symbol</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Notes (optional)</label>
            <textarea className="input" placeholder="How does this theme manifest in the story?" value={newNotes}
              onChange={e => setNewNotes(e.target.value)}
              rows={2}
              style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addTheme} disabled={saving}>{saving ? 'Adding…' : 'Add'}</button>
            <button className="btn-ghost" onClick={() => { setAdding(false); setNewLabel(''); setNewNotes('') }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {Object.entries(THEME_COLORS).map(([type, c]) => (
          <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: c.bg }} />
            {c.label}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--off-white)', border: '1.5px solid var(--border)' }} />
          Scene
        </div>
      </div>

      {themes.length === 0 && scenes.length === 0 ? (
        <div className="empty-state" style={{ marginTop: '20px' }}>
          <h3>Nothing here yet</h3>
          <p>Add themes above, then add scenes in the Scenes tab — they will appear here to link.</p>
        </div>
      ) : (
        <>
          {/* Canvas */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', background: '#f8f9f4', overflow: 'auto', position: 'relative' }}>
            <svg
              ref={svgRef}
              width="900"
              height={canvasH}
              style={{ display: 'block', cursor: dragging ? 'grabbing' : 'default', userSelect: 'none', minWidth: '100%' }}
              onMouseMove={onSvgMouseMove}
              onMouseUp={onSvgMouseUp}
              onMouseLeave={onSvgMouseUp}
            >
              {/* Dot grid */}
              <defs>
                <pattern id="tmgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#d4ddc8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tmgrid)" />

              {/* Zone labels */}
              {themes.length > 0 && (
                <text x="14" y="22" style={{ fontSize: '10px', fill: '#9aab8a', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  THEMES
                </text>
              )}
              {scenes.length > 0 && (
                <text x="14" y="368" style={{ fontSize: '10px', fill: '#9aab8a', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  SCENES
                </text>
              )}
              {/* Divider line between zones */}
              {themes.length > 0 && scenes.length > 0 && (
                <line x1="0" y1="355" x2="900" y2="355" stroke="#d4ddc8" strokeWidth="1" strokeDasharray="6,5" />
              )}

              {/* Links */}
              {links.map(link => {
                const tp = positions[`theme-${link.theme_id}`]
                const sp = positions[`scene-${link.scene_id}`]
                if (!tp || !sp) return null
                const theme = themes.find(t => t.id === link.theme_id)
                const col = theme ? (THEME_COLORS[theme.type] || THEME_COLORS.theme) : THEME_COLORS.theme
                return (
                  <line
                    key={`${link.theme_id}-${link.scene_id}`}
                    x1={tp.x + 60} y1={tp.y + 22}
                    x2={sp.x + 56} y2={sp.y + 18}
                    stroke={col.bg} strokeWidth="2" strokeDasharray="6,4" opacity="0.55"
                  />
                )
              })}

              {/* Scene nodes */}
              {scenes.map(scene => {
                const pos = positions[`scene-${scene.id}`] || { x: 0, y: 0 }
                const isLinked = selectedTheme
                  ? links.some(l => l.theme_id === selectedTheme.id && l.scene_id === scene.id)
                  : false
                return (
                  <g
                    key={scene.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, `scene-${scene.id}`)}
                    onClick={() => {
                      if (selectedTheme) toggleLink(selectedTheme.id, scene.id)
                    }}
                    style={{ cursor: selectedTheme ? 'pointer' : 'grab' }}
                  >
                    <rect
                      width="112" height="36" rx="6"
                      fill={isLinked ? '#e8f4d4' : 'white'}
                      stroke={isLinked ? '#2D5016' : 'var(--border)'}
                      strokeWidth={isLinked ? '2' : '1.5'}
                    />
                    {selectedTheme && !isLinked && (
                      <rect width="112" height="36" rx="6" fill="rgba(45,80,22,0.04)" />
                    )}
                    <text x="56" y="23" textAnchor="middle"
                      style={{ fontSize: '11px', fill: isLinked ? '#2D5016' : 'var(--text-dark)', fontFamily: 'var(--font-sans)', fontWeight: isLinked ? '600' : '400', pointerEvents: 'none' }}
                    >
                      {scene.title.length > 14 ? scene.title.slice(0, 13) + '…' : scene.title}
                    </text>
                  </g>
                )
              })}

              {/* Theme nodes */}
              {themes.map(theme => {
                const pos = positions[`theme-${theme.id}`] || { x: 0, y: 0 }
                const col = THEME_COLORS[theme.type] || THEME_COLORS.theme
                const isSelected = selected === theme.id
                const linkedCount = links.filter(l => l.theme_id === theme.id).length
                return (
                  <g
                    key={theme.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, `theme-${theme.id}`)}
                    onClick={() => setSelected(isSelected ? null : theme.id)}
                    style={{ cursor: 'grab' }}
                  >
                    <rect
                      width="120" height="44" rx="10"
                      fill={col.bg}
                      stroke={isSelected ? '#fff' : col.border}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                    />
                    {isSelected && (
                      <rect width="120" height="44" rx="10" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="4,3" />
                    )}
                    <text x="60" y="16" textAnchor="middle"
                      style={{ fontSize: '9px', fill: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-mono)', letterSpacing: '0.09em', textTransform: 'uppercase', pointerEvents: 'none' }}
                    >
                      {col.label}
                    </text>
                    <text x="60" y="33" textAnchor="middle"
                      style={{ fontSize: '12px', fontWeight: '600', fill: col.text, fontFamily: 'var(--font-sans)', pointerEvents: 'none' }}
                    >
                      {theme.label.length > 14 ? theme.label.slice(0, 13) + '…' : theme.label}
                    </text>
                    {linkedCount > 0 && (
                      <>
                        <circle cx="108" cy="8" r="9" fill="white" />
                        <text x="108" y="12" textAnchor="middle"
                          style={{ fontSize: '9px', fontWeight: '700', fill: col.bg, fontFamily: 'var(--font-mono)', pointerEvents: 'none' }}
                        >{linkedCount}</text>
                      </>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Linking instruction bar */}
          {selectedTheme ? (
            <div style={{ marginTop: '14px', padding: '12px 18px', borderRadius: '10px', background: 'var(--green-pale)', border: '1px solid var(--green)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: (THEME_COLORS[selectedTheme.type] || THEME_COLORS.theme).bg, flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)' }}>
                  Linking: &ldquo;{selectedTheme.label}&rdquo;
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)' }}>
                  &mdash; click scene nodes above to connect or disconnect
                </span>
              </div>
              <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 12px' }} onClick={() => setSelected(null)}>
                Done
              </button>
            </div>
          ) : (
            <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-soft)', textAlign: 'center' }}>
              Click a theme node to link scenes &middot; Drag any node to reposition
            </p>
          )}

          {/* Theme list */}
          {themes.length > 0 && (
            <div style={{ marginTop: '28px' }}>
              <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                All entries ({themes.length})
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {themes.map(t => {
                  const col = THEME_COLORS[t.type] || THEME_COLORS.theme
                  const linkedScenes = links.filter(l => l.theme_id === t.id)
                  const isEditing = editingId === t.id
                  return (
                    <div key={t.id} style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--white)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: col.bg, flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-dark)' }}>{t.label}</span>
                          <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>{col.label.toLowerCase()}</span>
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                          {linkedScenes.length} scene{linkedScenes.length !== 1 ? 's' : ''}
                        </span>
                        <button
                          className="btn-ghost"
                          style={{ fontSize: '11px', padding: '4px 10px' }}
                          onClick={() => {
                            if (isEditing) {
                              setEditingId(null)
                            } else {
                              setEditingId(t.id)
                              setEditNotes(t.notes || '')
                            }
                          }}
                        >
                          {isEditing ? 'Close' : 'Notes'}
                        </button>
                        <button
                          className="btn-danger"
                          style={{ fontSize: '11px', padding: '4px 10px' }}
                          onClick={() => deleteTheme(t.id)}
                        >
                          Remove
                        </button>
                      </div>
                      {isEditing && (
                        <div style={{ marginTop: '10px' }}>
                          <textarea
                            className="input"
                            value={editNotes}
                            onChange={e => setEditNotes(e.target.value)}
                            placeholder="How does this theme manifest? What scenes carry it? What does it mean for the story?"
                            rows={3}
                            style={{ resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
                          />
                          <button
                            className="btn-primary"
                            style={{ marginTop: '8px', fontSize: '12px', padding: '6px 14px' }}
                            onClick={() => { saveNotes(t.id, editNotes); setEditingId(null); toast.success('Notes saved') }}
                          >
                            Save notes
                          </button>
                        </div>
                      )}
                      {!isEditing && t.notes && (
                        <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.6', paddingLeft: '20px' }}>{t.notes}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

// ─── Story Map Tab ─────────────────────────────────────────────────────────────

const SM_NODE = {
  scene:     { w: 148, h: 48, rx: 8,  bg: '#0D9488', stroke: '#0F766E', fg: '#fff' },
  character: { w: 136, h: 44, rx: 22, bg: '#7C3AED', stroke: '#6D28D9', fg: '#fff' },
  theme:     { w: 128, h: 40, rx: 6,  bg: '#2D5016', stroke: '#1A3009', fg: '#fff' },
  subplot:   { w: 136, h: 44, rx: 6,  bg: '#C3D9A8', stroke: '#7A4C07', fg: '#fff' },
}

const ACT_ZONE = {
  1: { fill: 'rgba(239,246,231,0.7)', stroke: '#C3D9A8' },
  2: { fill: 'rgba(254,243,226,0.7)', stroke: '#F5C57A' },
  3: { fill: 'rgba(238,242,255,0.7)', stroke: '#C7D2FE' },
}

function smNodeType(key) {
  if (key.startsWith('scene-'))   return 'scene'
  if (key.startsWith('char-'))    return 'character'
  if (key.startsWith('theme-'))   return 'theme'
  if (key.startsWith('subplot-')) return 'subplot'
  return 'scene'
}

function smCenter(pos, key) {
  const nt = SM_NODE[smNodeType(key)] || SM_NODE.scene
  return { x: pos.x + nt.w / 2, y: pos.y + nt.h / 2 }
}

function smPath(from, to) {
  const dx = to.x - from.x
  const cx1 = from.x + dx * 0.45
  const cx2 = to.x  - dx * 0.45
  return `M ${from.x} ${from.y} C ${cx1} ${from.y} ${cx2} ${to.y} ${to.x} ${to.y}`
}

function tryParseMap(str) {
  try { return JSON.parse(str) } catch { return null }
}

function StoryMapTab({ projectId, project, scenes, setScenes, characters, setCharacters, themes, setThemes, onUpdateProject, toast }) {
  const svgRef     = React.useRef(null)
  const saveTimer  = React.useRef(null)

  const [positions,   setPositions]   = React.useState({})
  const [edges,       setEdges]       = React.useState([])
  const [dragging,    setDragging]    = React.useState(null)
  const [connectMode, setConnectMode] = React.useState(false)
  const [connectFrom, setConnectFrom] = React.useState(null)
  const [mousePos,    setMousePos]    = React.useState({ x: 0, y: 0 })
  const [selected,    setSelected]    = React.useState(null)
  const [showAdd,     setShowAdd]     = React.useState(null)
  const [addForm,     setAddForm]     = React.useState({})
  const [saving,      setSaving]      = React.useState(false)
  const [initialized, setInitialized] = React.useState(false)
  const [canvasW,     setCanvasW]     = React.useState(900)

  // Measure canvas width
  React.useEffect(() => {
    if (svgRef.current) setCanvasW(svgRef.current.clientWidth || 900)
  }, [])

  // All displayable nodes
  const allNodes = React.useMemo(() => [
    ...scenes.map(s     => ({ key: `scene-${s.id}`,     label: s.title,   sub: s.beat_label ? s.beat_label : `Act ${s.act_number || 1}`, type: 'scene' })),
    ...characters.map(c => ({ key: `char-${c.id}`,      label: c.name,    sub: c.role || '',                                             type: 'character' })),
    ...themes.filter(t => t.type !== 'subplot').map(t => ({ key: `theme-${t.id}`,   label: t.label, sub: t.type,    type: 'theme' })),
    ...themes.filter(t => t.type === 'subplot').map(t => ({ key: `subplot-${t.id}`, label: t.label, sub: 'subplot', type: 'subplot' })),
  ], [scenes, characters, themes])

  // Auto-layout: acts as columns, chars at top, themes at bottom
  const buildAutoLayout = React.useCallback(() => {
    const W = canvasW || 900
    const pos = {}

    // Characters: top row
    characters.forEach((c, i) => {
      pos[`char-${c.id}`] = { x: 60 + i * 170, y: 32 }
    })

    // Scenes: grouped by act in columns
    const byAct = {}
    scenes.forEach(s => {
      const a = s.act_number || 1
      if (!byAct[a]) byAct[a] = []
      byAct[a].push(s)
    })
    const acts = Object.keys(byAct).map(Number).sort()
    const actW = Math.max(200, Math.floor((W - 80) / Math.max(acts.length, 1)))
    acts.forEach((act, ai) => {
      byAct[act].forEach((s, si) => {
        pos[`scene-${s.id}`] = { x: 50 + ai * actW, y: 140 + si * 92 }
      })
    })

    // Themes + subplots: bottom row
    const maxRows = Math.max(...Object.values(byAct).map(a => a.length), 0)
    const bottomY = 140 + maxRows * 92 + 56
    themes.forEach((t, i) => {
      const key = t.type === 'subplot' ? `subplot-${t.id}` : `theme-${t.id}`
      pos[key] = { x: 60 + i * 158, y: bottomY }
    })

    // Auto-edges: sequential within acts + act breaks between acts
    const autoEdges = []
    acts.forEach((act, ai) => {
      const as = byAct[act] || []
      as.forEach((s, si) => {
        if (si < as.length - 1) {
          autoEdges.push({ id: `seq-${s.id}`, from: `scene-${s.id}`, to: `scene-${as[si+1].id}`, type: 'sequence', label: '' })
        }
      })
      if (ai < acts.length - 1) {
        const thisAct = byAct[act], nextAct = byAct[acts[ai+1]]
        if (thisAct?.length && nextAct?.length) {
          autoEdges.push({
            id: `act-${act}-${acts[ai+1]}`,
            from: `scene-${thisAct[thisAct.length - 1].id}`,
            to:   `scene-${nextAct[0].id}`,
            type: 'act-break',
            label: `Act ${acts[ai+1]}`,
          })
        }
      }
    })
    return { pos, edges: autoEdges }
  }, [scenes, characters, themes, canvasW])

  // Load saved layout or auto-arrange
  React.useEffect(() => {
    if (initialized) return
    const saved = project?.story_map_json ? tryParseMap(project.story_map_json) : null
    if (saved?.positions && Object.keys(saved.positions).length > 0) {
      setPositions(saved.positions)
      setEdges(saved.edges || [])
    } else {
      const { pos, edges: ae } = buildAutoLayout()
      setPositions(pos)
      setEdges(ae)
    }
    setInitialized(true)
  }, [initialized, buildAutoLayout, project])

  // Debounced save
  function queueSave(pos, eds) {
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => doSave(pos, eds), 1400)
  }

  async function doSave(pos, eds) {
    setSaving(true)
    try {
      await supabase.from('projects').update({
        story_map_json: JSON.stringify({ positions: pos, edges: eds }),
        updated_at: new Date().toISOString(),
      }).eq('id', projectId)
    } catch (e) {
      console.warn('Story map save failed (run migration):', e)
      try { localStorage.setItem(`eve_sm_${projectId}`, JSON.stringify({ positions: pos, edges: eds })) } catch {}
    }
    setSaving(false)
  }

  // Drag
  function onNodeMouseDown(e, key) {
    if (connectMode) return
    e.preventDefault(); e.stopPropagation()
    const svg = svgRef.current; if (!svg) return
    const rect = svg.getBoundingClientRect()
    const p = positions[key] || { x: 0, y: 0 }
    setDragging({ key, ox: e.clientX - rect.left - p.x, oy: e.clientY - rect.top - p.y })
  }

  function onSvgMouseMove(e) {
    const svg = svgRef.current; if (!svg) return
    const rect = svg.getBoundingClientRect()
    const x = e.clientX - rect.left, y = e.clientY - rect.top
    setMousePos({ x, y })
    if (!dragging) return
    setPositions(prev => ({ ...prev, [dragging.key]: { x: x - dragging.ox, y: y - dragging.oy } }))
  }

  function onSvgMouseUp() {
    if (dragging) { queueSave(positions, edges); setDragging(null) }
  }

  // Connect
  function onNodeClick(e, key) {
    e.stopPropagation()
    if (!connectMode) { setSelected(selected === key ? null : key); return }
    if (!connectFrom) { setConnectFrom(key); return }
    if (connectFrom === key) { setConnectFrom(null); return }
    const newEdge = { id: `e-${Date.now()}`, from: connectFrom, to: key, type: 'custom', label: '' }
    const newEdges = [...edges, newEdge]
    setEdges(newEdges); setConnectFrom(null)
    queueSave(positions, newEdges)
  }

  function deleteEdge(edgeId) {
    const newEdges = edges.filter(e => e.id !== edgeId)
    setEdges(newEdges); setSelected(null)
    queueSave(positions, newEdges)
  }

  // Auto-arrange reset
  function doAutoArrange() {
    const { pos, edges: ae } = buildAutoLayout()
    setPositions(pos); setEdges(ae)
    queueSave(pos, ae)
  }

  // Add nodes from canvas
  async function submitAdd() {
    if (!showAdd) return
    setSaving(true)
    try {
      if (showAdd === 'scene') {
        const { data, error } = await supabase.from('scenes')
          .insert({ project_id: projectId, title: addForm.title || 'New Scene', act_number: Number(addForm.act) || 1, order_index: scenes.length })
          .select().single()
        if (!error && data) {
          setScenes(prev => [...prev, data])
          const key = `scene-${data.id}`
          const np = { ...positions, [key]: { x: 180 + Math.random() * 220, y: 200 + Math.random() * 80 } }
          setPositions(np); queueSave(np, edges)
          toast.success('Scene added')
        }
      } else if (showAdd === 'character') {
        const { data, error } = await supabase.from('characters')
          .insert({ project_id: projectId, name: addForm.name || 'New Character', role: addForm.role || '' })
          .select().single()
        if (!error && data) {
          setCharacters(prev => [...prev, data])
          const key = `char-${data.id}`
          const np = { ...positions, [key]: { x: 180 + Math.random() * 220, y: 32 } }
          setPositions(np); queueSave(np, edges)
          toast.success('Character added')
        }
      } else if (showAdd === 'subplot') {
        const { data, error } = await supabase.from('themes')
          .insert({ project_id: projectId, label: addForm.label || 'New Subplot', type: 'subplot', linked_scenes: '[]' })
          .select().single()
        if (!error && data) {
          setThemes(prev => [...prev, data])
          const key = `subplot-${data.id}`
          const np = { ...positions, [key]: { x: 180 + Math.random() * 220, y: 480 } }
          setPositions(np); queueSave(np, edges)
          toast.success('Subplot added')
        }
      }
    } catch (e) { toast.error('Failed to add') }
    setSaving(false); setShowAdd(null); setAddForm({})
  }

  // Dynamic canvas height
  const canvasH = Math.max(560, ...Object.values(positions).map(p => p.y + 80))

  // Act zones for background shading
  const actZones = React.useMemo(() => {
    const byAct = {}
    scenes.forEach(s => {
      const a = s.act_number || 1
      if (!byAct[a]) byAct[a] = []
      byAct[a].push(s)
    })
    return Object.keys(byAct).map(Number).sort().map(act => {
      const actScenes = byAct[act].map(s => positions[`scene-${s.id}`]).filter(Boolean)
      if (!actScenes.length) return null
      const nt = SM_NODE.scene
      const pad = 22
      return {
        act,
        x: Math.min(...actScenes.map(p => p.x)) - pad,
        y: Math.min(...actScenes.map(p => p.y)) - pad,
        w: Math.max(...actScenes.map(p => p.x)) + nt.w - Math.min(...actScenes.map(p => p.x)) + pad * 2,
        h: Math.max(...actScenes.map(p => p.y)) + nt.h - Math.min(...actScenes.map(p => p.y)) + pad * 2,
      }
    }).filter(Boolean)
  }, [scenes, positions])

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '3px' }}>Story Map</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            {scenes.length} scene{scenes.length !== 1 ? 's' : ''} &middot; {characters.length} character{characters.length !== 1 ? 's' : ''} &middot; {themes.length} theme{themes.length !== 1 ? 's' : ''}
            {saving && <span style={{ marginLeft: '10px', color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>Saving&hellip;</span>}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={doAutoArrange}>
            Auto-arrange
          </button>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={() => { setShowAdd('scene'); setAddForm({ act: 1 }) }}>
            + Scene
          </button>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={() => { setShowAdd('character'); setAddForm({}) }}>
            + Character
          </button>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={() => { setShowAdd('subplot'); setAddForm({}) }}>
            + Subplot
          </button>
          <button
            onClick={() => { setConnectMode(v => !v); setConnectFrom(null) }}
            style={{
              fontSize: '12px', padding: '6px 13px', cursor: 'pointer',
              fontFamily: 'var(--font-ui)', borderRadius: 'var(--radius-btn)',
              border: '1px solid', transition: 'all 0.15s',
              background: connectMode ? 'var(--green)'         : 'transparent',
              color:      connectMode ? '#fff'                  : 'var(--text-mid)',
              borderColor: connectMode ? 'var(--green)'         : 'var(--border)',
            }}>
            {connectMode ? (connectFrom ? 'Pick target...' : 'Pick source...') : 'Draw line'}
          </button>
        </div>
      </div>

      {/* Add node form */}
      {showAdd && (
        <div style={{ padding: '16px 18px', marginBottom: '14px', background: 'var(--green-pale)', borderRadius: '10px', border: '1px solid var(--green-border)', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {showAdd === 'scene' && (
            <>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Scene title</label>
                <input className="input" placeholder="e.g. Opening argument" value={addForm.title || ''} onChange={e => setAddForm(f => ({ ...f, title: e.target.value }))} autoFocus onKeyDown={e => e.key === 'Enter' && submitAdd()} />
              </div>
              <div style={{ minWidth: '110px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Act</label>
                <select className="input" value={addForm.act || 1} onChange={e => setAddForm(f => ({ ...f, act: e.target.value }))}>
                  <option value={1}>Act 1</option>
                  <option value={2}>Act 2</option>
                  <option value={3}>Act 3</option>
                </select>
              </div>
            </>
          )}
          {showAdd === 'character' && (
            <>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                <input className="input" placeholder="Character name" value={addForm.name || ''} onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))} autoFocus onKeyDown={e => e.key === 'Enter' && submitAdd()} />
              </div>
              <div style={{ flex: 1, minWidth: '140px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</label>
                <input className="input" placeholder="e.g. Protagonist" value={addForm.role || ''} onChange={e => setAddForm(f => ({ ...f, role: e.target.value }))} onKeyDown={e => e.key === 'Enter' && submitAdd()} />
              </div>
            </>
          )}
          {showAdd === 'subplot' && (
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subplot name</label>
              <input className="input" placeholder="e.g. The love story" value={addForm.label || ''} onChange={e => setAddForm(f => ({ ...f, label: e.target.value }))} autoFocus onKeyDown={e => e.key === 'Enter' && submitAdd()} />
            </div>
          )}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" style={{ padding: '9px 18px', fontSize: '13px' }} onClick={submitAdd} disabled={saving}>
              {saving ? 'Adding...' : 'Add to map'}
            </button>
            <button className="btn-ghost" style={{ padding: '9px 14px', fontSize: '13px' }} onClick={() => { setShowAdd(null); setAddForm({}) }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Connect mode banner */}
      {connectMode && (
        <div style={{ padding: '10px 16px', marginBottom: '12px', background: 'var(--amber-pale)', borderRadius: '8px', border: '1px solid var(--amber-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: 'var(--amber)' }}>
            {connectFrom
              ? `Source selected. Click a target node to connect.`
              : 'Click any node to start drawing a connection.'}
          </span>
          <button onClick={() => { setConnectMode(false); setConnectFrom(null) }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--amber)', lineHeight: 1, padding: '0 2px' }}>
            &times;
          </button>
        </div>
      )}

      {scenes.length === 0 && characters.length === 0 ? (
        <div className="empty-state" style={{ marginTop: '24px' }}>
          <h3>Nothing to map yet</h3>
          <p>Add scenes and characters in their tabs. They auto-map here.</p>
        </div>
      ) : (
        <>
          {/* Canvas */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', background: '#FAFAF9' }}>
            <svg
              ref={svgRef}
              width="100%"
              height={canvasH}
              style={{
                display: 'block',
                cursor: dragging ? 'grabbing' : connectMode ? 'crosshair' : 'default',
                userSelect: 'none',
              }}
              onMouseMove={onSvgMouseMove}
              onMouseUp={onSvgMouseUp}
              onMouseLeave={onSvgMouseUp}
              onClick={() => { if (!connectMode) setSelected(null) }}
            >
              <defs>
                {/* Dot grid pattern */}
                <pattern id="smgrid" width="26" height="26" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.4" fill="#C8BEB5" opacity="0.5" />
                </pattern>
                {/* Arrow markers */}
                <marker id="sm-arrow"       markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="#94A3B8" />
                </marker>
                <marker id="sm-arrow-green" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="var(--green)" />
                </marker>
                <marker id="sm-arrow-amber" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="#C3D9A8" />
                </marker>
              </defs>

              {/* Dot background */}
              <rect width="100%" height="100%" fill="url(#smgrid)" />

              {/* Act zone backgrounds */}
              {actZones.map(zone => {
                const z = ACT_ZONE[zone.act] || ACT_ZONE[1]
                return (
                  <g key={`zone-${zone.act}`}>
                    <rect x={zone.x} y={zone.y} width={zone.w} height={zone.h}
                      fill={z.fill} stroke={z.stroke} strokeWidth="1" rx="14" />
                    <text x={zone.x + 12} y={zone.y + 17}
                      style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fill: '#888', letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                      ACT {zone.act}
                    </text>
                  </g>
                )
              })}

              {/* Edges */}
              {edges.map(edge => {
                const fp = positions[edge.from], tp = positions[edge.to]
                if (!fp || !tp) return null
                const fc = smCenter(fp, edge.from), tc = smCenter(tp, edge.to)
                const isSel     = selected === `edge-${edge.id}`
                const isActBrk  = edge.type === 'act-break'
                const isCustom  = edge.type === 'custom'
                const color     = isSel ? 'var(--green)' : isActBrk ? '#C3D9A8' : '#94A3B8'
                const markerId  = isSel ? 'sm-arrow-green' : isActBrk ? 'sm-arrow-amber' : 'sm-arrow'
                const d         = smPath(fc, tc)
                return (
                  <g key={edge.id} onClick={e => { e.stopPropagation(); setSelected(`edge-${edge.id}`) }} style={{ cursor: 'pointer' }}>
                    <path d={d} fill="none" stroke="transparent" strokeWidth="14" />
                    <path d={d} fill="none" stroke={color}
                      strokeWidth={isSel ? 2.5 : 1.8}
                      strokeDasharray={isCustom ? '6,4' : 'none'}
                      markerEnd={`url(#${markerId})`}
                      opacity={isSel ? 1 : 0.75}
                    />
                    {edge.label && (
                      <text x={(fc.x + tc.x) / 2} y={(fc.y + tc.y) / 2 - 7}
                        textAnchor="middle"
                        style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', fill: color, letterSpacing: '0.07em', pointerEvents: 'none' }}>
                        {edge.label.toUpperCase()}
                      </text>
                    )}
                  </g>
                )
              })}

              {/* Connect preview line */}
              {connectMode && connectFrom && positions[connectFrom] && (() => {
                const fp = positions[connectFrom]
                const fc = smCenter(fp, connectFrom)
                return (
                  <path d={smPath(fc, mousePos)}
                    fill="none" stroke="var(--green)" strokeWidth="1.8"
                    strokeDasharray="7,4" markerEnd="url(#sm-arrow-green)" opacity="0.65" />
                )
              })()}

              {/* Nodes */}
              {allNodes.map(node => {
                const pos = positions[node.key]
                if (!pos) return null
                const nt  = SM_NODE[node.type] || SM_NODE.scene
                const isSel     = selected  === node.key
                const isConnSrc = connectFrom === node.key
                const truncLabel = node.label.length > 17 ? node.label.slice(0, 16) + '…' : node.label
                const truncSub   = node.sub   ? (node.sub.length > 20 ? node.sub.slice(0, 19) + '…' : node.sub) : ''
                const midY       = truncSub ? nt.h / 2 - 5 : nt.h / 2 + 5

                return (
                  <g key={node.key}
                    transform={`translate(${pos.x},${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, node.key)}
                    onClick={e => onNodeClick(e, node.key)}
                    style={{ cursor: connectMode ? 'pointer' : 'grab' }}
                  >
                    {/* Drop shadow */}
                    <rect x="3" y="4" width={nt.w} height={nt.h} rx={nt.rx} fill="rgba(0,0,0,0.10)" />
                    {/* Body */}
                    <rect width={nt.w} height={nt.h} rx={nt.rx}
                      fill={nt.bg}
                      stroke={isSel || isConnSrc ? '#fff' : nt.stroke}
                      strokeWidth={isSel || isConnSrc ? 2.5 : 1.5}
                    />
                    {/* Selection / connect ring */}
                    {(isSel || isConnSrc) && (
                      <rect x="-3.5" y="-3.5" width={nt.w + 7} height={nt.h + 7} rx={nt.rx + 4}
                        fill="none"
                        stroke={isConnSrc ? '#FCD34D' : 'var(--green)'}
                        strokeWidth="2.2" strokeDasharray="5,3"
                      />
                    )}
                    {/* Primary label */}
                    <text x={nt.w / 2} y={midY}
                      textAnchor="middle"
                      style={{ fontSize: '12px', fontWeight: '700', fill: nt.fg, fontFamily: 'var(--font-ui)', pointerEvents: 'none' }}>
                      {truncLabel}
                    </text>
                    {/* Sub-label */}
                    {truncSub && (
                      <text x={nt.w / 2} y={nt.h / 2 + 12}
                        textAnchor="middle"
                        style={{ fontSize: '9px', fill: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', pointerEvents: 'none' }}>
                        {truncSub.toUpperCase()}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Edge selected: delete action */}
          {selected?.startsWith('edge-') && (
            <div style={{ marginTop: '12px', padding: '10px 16px', background: '#FEF3E2', borderRadius: '8px', border: '1px solid var(--amber-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: 'var(--amber)', fontWeight: '500' }}>Connection selected</span>
              <button
                onClick={() => deleteEdge(selected.replace('edge-', ''))}
                style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: '6px', color: '#DC2626', fontSize: '12px', padding: '5px 14px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>
                Delete
              </button>
            </div>
          )}

          {/* Legend + hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '14px', flexWrap: 'wrap' }}>
            {[
              { color: '#0D9488', label: 'Scene' },
              { color: '#7C3AED', label: 'Character' },
              { color: '#2D5016', label: 'Theme' },
              { color: '#C3D9A8', label: 'Subplot' },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: color, flexShrink: 0 }} />
                {label}
              </div>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-soft)' }}>
              Drag to move &middot; Draw line to connect &middot; Click line to delete
            </span>
          </div>
        </>
      )}
    </div>
  )
}

// ─── World Tab ────────────────────────────────────────────────────────────────

const WORLD_SECTIONS = [
  {
    key: 'factions',
    label: 'Factions',
    icon: '⚔',
    description: 'Groups with shared goals willing to take coordinated action. Every faction needs a goal, a fear, a hard limit, and an enemy.',
    fields: [
      { key: 'name',      label: 'Faction Name',      placeholder: 'e.g. The Iron Council' },
      { key: 'goal',      label: 'Core Goal',          placeholder: 'What do they concretely want?' },
      { key: 'fear',      label: 'Core Fear',          placeholder: 'What would they do anything to prevent losing?' },
      { key: 'limit',     label: 'Hard Limit',         placeholder: 'What would they never do, even to win?' },
      { key: 'enemy',     label: 'Natural Enemy',      placeholder: 'Who must they destroy or absorb?' },
      { key: 'mythos',    label: 'Public Mythology',   placeholder: 'What do they claim to stand for?' },
      { key: 'reality',   label: 'Actual Behavior',    placeholder: 'What do they actually do?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'locations',
    label: 'Locations',
    icon: '◎',
    description: 'Key places in your world. Every location needs one specific detail that exists nowhere else.',
    fields: [
      { key: 'name',      label: 'Location Name',      placeholder: 'e.g. The Sunken Market' },
      { key: 'role',      label: 'Story Role',         placeholder: 'What does this location do in the story?' },
      { key: 'detail',    label: 'Specific Detail',    placeholder: 'The one thing only this place has' },
      { key: 'center',    label: 'Center or Margin?',  placeholder: 'Is this a center of power or a margin?' },
      { key: 'feel',      label: 'Atmosphere',         placeholder: 'What does it feel like to be here?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'politics',
    label: 'Politics',
    icon: '⚖',
    description: 'The rules of the game — who decides what happens and what happens to people who disagree.',
    fields: [
      { key: 'name',      label: 'System Name',        placeholder: 'e.g. The Compact of Governors' },
      { key: 'question',  label: 'Political Question', placeholder: 'What is the story asking about power?' },
      { key: 'official',  label: 'Official Rules',     placeholder: 'What does the law or custom say?' },
      { key: 'actual',    label: 'Actual Rules',       placeholder: 'What do people who know the system understand?' },
      { key: 'enforcer',  label: 'Who Enforces',       placeholder: 'Who maintains the system and benefits most?' },
      { key: 'exempt',    label: 'Who Is Exempt',      placeholder: 'Who operates above the rules?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'eras',
    label: 'Eras & Technology',
    icon: '◷',
    description: 'When and at what technological level your story takes place — this determines what threats exist and what solutions are possible.',
    fields: [
      { key: 'name',      label: 'Era Name',           placeholder: 'e.g. The Third Reconstruction' },
      { key: 'period',    label: 'Time Period',         placeholder: 'When does the story take place?' },
      { key: 'tech',      label: 'Technology Level',   placeholder: 'What can people do? What cannot exist yet?' },
      { key: 'change',    label: 'What Changed',       placeholder: 'What is the most important recent historical shift?' },
      { key: 'wound',     label: 'Historical Wound',   placeholder: 'What event still shapes the present conflict?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'culture',
    label: 'Language & Culture',
    icon: '◈',
    description: 'How people talk, what they value, what the taboos are. Culture is the invisible hand shaping every conversation.',
    fields: [
      { key: 'name',      label: 'Culture / Group',    placeholder: 'e.g. The River People' },
      { key: 'naming',    label: 'Naming Rule',         placeholder: 'One consistent rule about how people are named' },
      { key: 'taboo',     label: 'Core Taboo',         placeholder: 'What is forbidden, and what does that reveal?' },
      { key: 'greeting',  label: 'Greeting Ritual',    placeholder: 'How do people greet each other, and when does it break down?' },
      { key: 'idiom',     label: 'Distinctive Idiom',  placeholder: 'A phrase or saying specific to this culture' },
      { key: 'value',     label: 'Core Value',         placeholder: 'What does this culture believe most?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'quirks',
    label: 'Quirks & Rituals',
    icon: '✦',
    description: 'The specific, strange, particular details that make a world feel real. One good quirk is worth ten pages of lore.',
    fields: [
      { key: 'name',      label: 'Quirk / Ritual',     placeholder: 'e.g. Covering the eyes when entering a home' },
      { key: 'who',       label: 'Who Does This',       placeholder: 'Which group, class, or culture?' },
      { key: 'origin',    label: 'Logical Root',        placeholder: 'What historical or practical reason explains this?' },
      { key: 'story',     label: 'Story Use',           placeholder: 'How does this create a scene, tension, or misunderstanding?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
]

function WorldTab({ projectId, project, toast }) {
  const [section, setSection]       = useState('factions')
  const [elements, setElements]     = useState({})
  const [loading, setLoading]       = useState(true)
  const [form, setForm]             = useState(null)      // null = list view, object = edit view
  const [saving, setSaving]         = useState(false)
  const [exporting, setExporting]   = useState(false)

  useEffect(() => { loadElements() }, [projectId])

  async function loadElements() {
    setLoading(true)
    const { data } = await supabase
      .from('world_elements')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true })

    if (data) {
      const grouped = {}
      WORLD_SECTIONS.forEach(s => { grouped[s.key] = [] })
      data.forEach(el => {
        if (grouped[el.category] !== undefined) grouped[el.category].push(el)
      })
      setElements(grouped)
    }
    setLoading(false)
  }

  async function saveElement() {
    if (!form) return
    setSaving(true)
    const payload = {
      project_id: projectId,
      category: section,
      fields: form.fields || {},
      name: form.fields?.name || 'Untitled',
    }
    if (form.id) {
      await supabase.from('world_elements').update(payload).eq('id', form.id)
    } else {
      await supabase.from('world_elements').insert(payload)
    }
    await loadElements()
    setForm(null)
    setSaving(false)
    toast?.success('Saved')
  }

  async function deleteElement(id) {
    if (!confirm('Delete this entry?')) return
    await supabase.from('world_elements').delete().eq('id', id)
    await loadElements()
    toast?.success('Deleted')
  }

  function openNew() {
    setForm({ fields: {} })
  }

  function openEdit(el) {
    setForm({ id: el.id, fields: { ...el.fields } })
  }

  async function exportBible() {
    setExporting(true)
    try {
      // Build plain-text world bible
      const lines = []
      lines.push(`WORLD BIBLE`)
      lines.push(`${project?.title || 'Untitled Project'}`)
      lines.push(`Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`)
      lines.push('')
      lines.push('─'.repeat(60))
      lines.push('')

      WORLD_SECTIONS.forEach(sec => {
        const items = elements[sec.key] || []
        if (items.length === 0) return
        lines.push(sec.label.toUpperCase())
        lines.push('─'.repeat(sec.label.length))
        lines.push('')
        items.forEach((el, i) => {
          lines.push(`${i + 1}. ${el.name || 'Untitled'}`)
          sec.fields.forEach(f => {
            const val = el.fields?.[f.key]
            if (val && val.trim()) lines.push(`   ${f.label}: ${val}`)
          })
          lines.push('')
        })
        lines.push('')
      })

      const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
      const url  = URL.createObjectURL(blob)
      const a    = document.createElement('a')
      a.href     = url
      a.download = `${(project?.title || 'world').replace(/\s+/g, '-').toLowerCase()}-world-bible.txt`
      a.click()
      URL.revokeObjectURL(url)
      toast?.success('World Bible exported')
    } catch(e) {
      toast?.error('Export failed')
    }
    setExporting(false)
  }

  const activeSec   = WORLD_SECTIONS.find(s => s.key === section)
  const activeItems = elements[section] || []

  if (loading) return (
    <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)', fontSize: '14px' }}>
      Loading world…
    </div>
  )

  return (
    <div style={{ padding: '24px 0' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>World Bible</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Build the world your story lives in. Everything here informs the writing — most of it never appears on screen directly.
          </p>
        </div>
        <button
          onClick={exportBible}
          disabled={exporting}
          style={{
            background: 'var(--green)', color: '#fff', border: 'none',
            borderRadius: '8px', padding: '9px 18px', cursor: 'pointer',
            fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px',
            opacity: exporting ? 0.7 : 1, flexShrink: 0,
          }}>
          {exporting ? 'Exporting…' : 'Export World Bible'}
        </button>
      </div>

      {/* Section nav */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {WORLD_SECTIONS.map(s => {
          const count = (elements[s.key] || []).length
          const active = s.key === section
          return (
            <button
              key={s.key}
              onClick={() => { setSection(s.key); setForm(null) }}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 14px', borderRadius: '20px', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontWeight: active ? '700' : '500', fontSize: '13px',
                background: active ? 'var(--green)' : '#fff',
                color: active ? '#fff' : 'var(--text-soft)',
                border: active ? '1px solid var(--green)' : '1px solid var(--border)',
                transition: 'all 0.15s',
              }}>
              <span style={{ fontSize: '11px' }}>{s.icon}</span>
              {s.label}
              {count > 0 && (
                <span style={{
                  background: active ? 'rgba(255,255,255,0.25)' : 'var(--green-pale)',
                  color: active ? '#fff' : 'var(--green)',
                  borderRadius: '10px', padding: '1px 7px', fontSize: '11px', fontWeight: '700',
                }}>{count}</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Section description */}
      <div style={{
        background: 'var(--green-pale)', border: '1px solid var(--green-border)',
        borderRadius: '10px', padding: '14px 18px', marginBottom: '20px',
        fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.6',
      }}>
        <strong style={{ fontFamily: 'var(--font-ui)', color: 'var(--green)' }}>{activeSec?.label}: </strong>
        {activeSec?.description}
      </div>

      {/* Form or list */}
      {form ? (
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>
              {form.id ? 'Edit' : 'New'} {activeSec?.label.replace(/s$/, '')}
            </h3>
            <button onClick={() => setForm(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-soft)', fontSize: '20px', lineHeight: 1 }}>×</button>
          </div>
          <div style={{ display: 'grid', gap: '16px' }}>
            {activeSec?.fields.map(f => (
              <div key={f.key}>
                <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '12px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {f.label}
                </label>
                {f.multiline ? (
                  <textarea
                    rows={3}
                    placeholder={f.placeholder}
                    value={form.fields?.[f.key] || ''}
                    onChange={e => setForm(prev => ({ ...prev, fields: { ...prev.fields, [f.key]: e.target.value } }))}
                    style={{
                      width: '100%', borderRadius: '8px', border: '1px solid var(--border)',
                      padding: '10px 12px', fontSize: '14px', fontFamily: 'var(--font-body)',
                      color: 'var(--text)', background: '#fff', resize: 'vertical',
                      outline: 'none', boxSizing: 'border-box', lineHeight: '1.6',
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    value={form.fields?.[f.key] || ''}
                    onChange={e => setForm(prev => ({ ...prev, fields: { ...prev.fields, [f.key]: e.target.value } }))}
                    style={{
                      width: '100%', borderRadius: '8px', border: '1px solid var(--border)',
                      padding: '10px 12px', fontSize: '14px', fontFamily: 'var(--font-body)',
                      color: 'var(--text)', background: '#fff',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
            <button
              onClick={saveElement}
              disabled={saving}
              style={{
                background: 'var(--green)', color: '#fff', border: 'none',
                borderRadius: '8px', padding: '10px 22px', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px',
                opacity: saving ? 0.7 : 1,
              }}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button
              onClick={() => setForm(null)}
              style={{
                background: '#fff', color: 'var(--text-soft)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '10px 18px', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px',
              }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Entry list */}
          {activeItems.length > 0 && (
            <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
              {activeItems.map(el => (
                <div key={el.id} style={{
                  background: '#fff', border: '1px solid var(--border)', borderRadius: '10px',
                  padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', color: 'var(--text)', marginBottom: '6px' }}>
                      {el.name || 'Untitled'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      {activeSec?.fields.filter(f => f.key !== 'name' && f.key !== 'notes' && el.fields?.[f.key]).slice(0, 3).map(f => (
                        <span key={f.key} style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)' }}>
                          <strong style={{ color: 'var(--text)', fontFamily: 'var(--font-ui)' }}>{f.label}:</strong> {el.fields[f.key]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <button
                      onClick={() => openEdit(el)}
                      style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', color: 'var(--green)', borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '12px' }}>
                      Edit
                    </button>
                    <button
                      onClick={() => deleteElement(el.id)}
                      style={{ background: '#FEE2E2', border: '1px solid #FECACA', color: '#DC2626', borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '12px' }}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {activeItems.length === 0 && (
            <div style={{
              textAlign: 'center', padding: '56px 32px',
              border: '1.5px dashed var(--border)', borderRadius: '12px',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{activeSec?.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>
                No {activeSec?.label.toLowerCase()} yet
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', maxWidth: '360px', margin: '0 auto 20px' }}>
                {activeSec?.description}
              </div>
            </div>
          )}

          <button
            onClick={openNew}
            style={{
              background: '#fff', border: '1.5px dashed var(--green)',
              color: 'var(--green)', borderRadius: '8px', padding: '10px 20px',
              cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px',
            }}>
            + Add {activeSec?.label.replace(/s$/, '')}
          </button>
        </>
      )}
    </div>
  )
}

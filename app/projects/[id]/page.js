'use client'
export const dynamic = 'force-dynamic'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../../lib/supabase'
import { useToast } from '../../components/Toast'

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS = ['Overview', 'Characters', 'Scenes', 'Plot Holes', 'Timeline', 'Themes Map']

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

  // ── Load project + all related data ──────────────────────────────────────
  const load = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Sign in to view this project.'); setLoading(false); return }

    const [projRes, charRes, sceneRes, holeRes, themeRes] = await Promise.all([
      supabase.from('projects').select('*').eq('id', id).eq('user_id', user.id).single(),
      supabase.from('characters').select('*').eq('project_id', id).order('created_at'),
      supabase.from('scenes').select('*').eq('project_id', id).order('act_number').order('order_index'),
      supabase.from('plot_holes').select('*').eq('project_id', id).order('created_at'),
      supabase.from('themes').select('*').eq('project_id', id).order('created_at'),
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
        marginBottom: '32px',
      }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px 16px', fontSize: '14px',
            fontFamily: 'var(--font-ui)',
            fontWeight: tab === t ? '600' : '400',
            color: tab === t ? 'var(--green)' : 'var(--text-mid)',
            borderBottom: tab === t ? '2px solid var(--green)' : '2px solid transparent',
            marginBottom: '-1px',
            transition: 'color 0.15s',
          }}>
            {t}
            {t === 'Plot Holes' && plotHoles.filter(h => h.status === 'open').length > 0 && (
              <span style={{
                marginLeft: '6px', fontSize: '10px', fontFamily: 'var(--font-mono)',
                background: 'var(--amber-pale)', color: 'var(--amber)',
                border: '1px solid var(--amber-border)', padding: '1px 6px', borderRadius: '10px',
              }}>
                {plotHoles.filter(h => h.status === 'open').length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      <div className="fade-up fade-up-delay-2">
        {tab === 'Overview'    && <OverviewTab    project={project} characters={characters} scenes={scenes} plotHoles={plotHoles} onUpdate={updateProject} />}
        {tab === 'Characters'  && <CharactersTab  projectId={id} characters={characters} setCharacters={setCharacters} toast={toast} />}
        {tab === 'Scenes'      && <ScenesTab      projectId={id} scenes={scenes} setScenes={setScenes} framework={project.framework} toast={toast} />}
        {tab === 'Plot Holes'  && <PlotHolesTab   projectId={id} plotHoles={plotHoles} setPlotHoles={setPlotHoles} toast={toast} />}
        {tab === 'Timeline'    && <TimelineTab    scenes={scenes} />}
        {tab === 'Themes Map'  && <ThemesMapTab   projectId={id} scenes={scenes} themes={themes} setThemes={setThemes} toast={toast} />}
      </div>
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

function TimelineTab({ scenes }) {
  const ACT_COLORS = {
    1: { bg: '#EBF5E4', border: '#6AAF3D', label: 'Act 1' },
    2: { bg: '#FFF7ED', border: '#B5700A', label: 'Act 2' },
    3: { bg: '#EEF2FF', border: '#6366F1', label: 'Act 3' },
  }

  const byAct = scenes.reduce((acc, s) => {
    const act = s.act_number || 1
    if (!acc[act]) acc[act] = []
    acc[act].push(s)
    return acc
  }, {})

  const acts = Object.keys(byAct).map(Number).sort()

  if (scenes.length === 0) {
    return (
      <div className="empty-state" style={{ marginTop: '40px' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <h3>No scenes yet</h3>
        <p>Add scenes in the Scenes tab —they&apos;ll appear here on the timeline.</p>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '6px' }}>Story Timeline</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
          {scenes.length} scene{scenes.length !== 1 ? 's' : ''} across {acts.length} act{acts.length !== 1 ? 's' : ''} · {scenes.filter(s => s.status === 'complete').length} complete
        </p>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {[
          { color: 'var(--green)', label: 'Complete' },
          { color: 'var(--border)', label: 'Draft' },
        ].map(({ color, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-soft)' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: color }} />
            {label}
          </div>
        ))}
      </div>

      {/* Act lanes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {acts.map(act => {
          const actScenes = byAct[act] || []
          const col = ACT_COLORS[act] || { bg: '#F5F5F5', border: '#999', label: `Act ${act}` }
          return (
            <div key={act}>
              {/* Act label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{
                  padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                  fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', textTransform: 'uppercase',
                  background: col.bg, color: col.border, border: `1px solid ${col.border}`,
                }}>
                  {col.label}
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{actScenes.length} scene{actScenes.length !== 1 ? 's' : ''}</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Scene track */}
              <div style={{ overflowX: 'auto', paddingBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '10px', minWidth: 'max-content', paddingBottom: '4px' }}>
                  {actScenes.map((scene, idx) => {
                    const done = scene.status === 'complete'
                    return (
                      <div
                        key={scene.id}
                        title={scene.notes || scene.title}
                        style={{
                          width: '140px', flexShrink: 0,
                          borderRadius: '8px', padding: '12px',
                          background: done ? 'var(--green-pale)' : 'var(--off-white)',
                          border: `1.5px solid ${done ? 'var(--green)' : 'var(--border)'}`,
                          position: 'relative',
                          transition: 'transform 0.15s',
                          cursor: 'default',
                        }}
                      >
                        {/* Scene number badge */}
                        <div style={{
                          position: 'absolute', top: '-9px', left: '10px',
                          background: done ? 'var(--green)' : 'var(--text-soft)',
                          color: '#fff', fontSize: '10px', fontWeight: '700',
                          fontFamily: 'var(--font-mono)', borderRadius: '4px',
                          padding: '1px 6px', letterSpacing: '0.04em',
                        }}>
                          {idx + 1}
                        </div>

                        {/* Connector line */}
                        {idx < actScenes.length - 1 && (
                          <div style={{
                            position: 'absolute', right: '-11px', top: '50%',
                            width: '10px', height: '2px',
                            background: done ? 'var(--green-light)' : 'var(--border)',
                            zIndex: 1,
                          }} />
                        )}

                        <p style={{
                          fontSize: '12px', fontWeight: '600', lineHeight: '1.4',
                          color: done ? 'var(--green)' : 'var(--text-dark)',
                          marginBottom: scene.beat_label ? '6px' : '0',
                          overflow: 'hidden', display: '-webkit-box',
                          WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                        }}>
                          {scene.title}
                        </p>
                        {scene.beat_label && (
                          <p style={{
                            fontSize: '10px', color: 'var(--text-soft)',
                            fontFamily: 'var(--font-mono)', letterSpacing: '0.03em',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          }}>
                            {scene.beat_label}
                          </p>
                        )}

                        {/* Complete checkmark */}
                        {done && (
                          <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span style={{ fontSize: '10px', color: 'var(--green)', fontWeight: '600' }}>Done</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: '36px', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>Overall progress</span>
          <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)' }}>
            {scenes.filter(s => s.status === 'complete').length} / {scenes.length}
          </span>
        </div>
        <div style={{ height: '8px', borderRadius: '4px', background: 'var(--border)', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: '4px', background: 'var(--green)',
            width: `${scenes.length ? (scenes.filter(s => s.status === 'complete').length / scenes.length) * 100 : 0}%`,
            transition: 'width 0.4s ease',
          }} />
        </div>
      </div>
    </div>
  )
}

// ─── Themes Map Tab ────────────────────────────────────────────────────────────

function ThemesMapTab({ projectId, scenes, themes, setThemes, toast }) {
  const [adding,    setAdding]    = useState(false)
  const [newLabel,  setNewLabel]  = useState('')
  const [newType,   setNewType]   = useState('theme')
  const [saving,    setSaving]    = useState(false)
  const [selected,  setSelected]  = useState(null) // { type: 'theme'|'scene', id }
  const [links,     setLinks]     = useState([])   // [{ theme_id, scene_id }]
  const [positions, setPositions] = useState({})   // { 'theme-id': {x,y}, 'scene-id': {x,y} }
  const [dragging,  setDragging]  = useState(null) // { nodeKey, ox, oy }
  const svgRef = useRef(null)

  // Load saved positions + links from themes metadata
  useEffect(() => {
    // Build initial grid positions if none saved
    const pos = {}
    themes.forEach((t, i) => {
      const saved = t.canvas_x != null ? { x: t.canvas_x, y: t.canvas_y } : null
      pos[`theme-${t.id}`] = saved || { x: 120 + (i % 3) * 220, y: 80 + Math.floor(i / 3) * 160 }
    })
    scenes.forEach((s, i) => {
      pos[`scene-${s.id}`] = { x: 120 + (i % 5) * 160, y: 420 + Math.floor(i / 5) * 120 }
    })
    setPositions(pos)

    // Links stored as JSON in theme.linked_scenes —e.g. ["scene-id-1","scene-id-2"]
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
      .insert({ project_id: projectId, label: newLabel.trim(), type: newType, linked_scenes: '[]', canvas_x: null, canvas_y: null })
      .select().single()
    setSaving(false)
    if (error) { toast.error('Failed to add theme'); return }
    setThemes(prev => [...prev, data])
    setNewLabel('')
    setAdding(false)
    toast.success('Theme added')
  }

  async function deleteTheme(id) {
    const { error } = await supabase.from('themes').delete().eq('id', id)
    if (error) { toast.error('Failed to delete'); return }
    setThemes(prev => prev.filter(t => t.id !== id))
    setLinks(prev => prev.filter(l => l.theme_id !== id))
    toast.success('Theme removed')
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

    // Save back to themes table
    const themeLinks = newLinks.filter(l => l.theme_id === themeId).map(l => l.scene_id)
    await supabase.from('themes').update({ linked_scenes: JSON.stringify(themeLinks) }).eq('id', themeId)
  }

  // Drag handlers
  function onNodeMouseDown(e, nodeKey) {
    e.preventDefault()
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
    const x = e.clientX - rect.left - dragging.ox
    const y = e.clientY - rect.top - dragging.oy
    setPositions(prev => ({ ...prev, [dragging.nodeKey]: { x, y } }))
  }

  function onSvgMouseUp() {
    if (!dragging) return
    // Save if it's a theme node
    if (dragging.nodeKey.startsWith('theme-')) {
      const themeId = dragging.nodeKey.replace('theme-', '')
      const pos = positions[dragging.nodeKey]
      if (pos) savePosition(themeId, pos.x, pos.y)
    }
    setDragging(null)
  }

  const THEME_COLORS = {
    theme:    { bg: '#2D5016', text: '#fff', border: '#1A3009' },
    motif:    { bg: '#B5700A', text: '#fff', border: '#7A4C07' },
    question: { bg: '#4F46E5', text: '#fff', border: '#3730A3' },
    symbol:   { bg: '#0F766E', text: '#fff', border: '#0D5E57' },
  }

  const selectedTheme = selected?.type === 'theme' ? themes.find(t => t.id === selected.id) : null

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>Themes Map</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            Drag theme nodes. Click a theme, then click scenes to link them.
          </p>
        </div>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ flexShrink: 0 }}>
          + Add theme
        </button>
      </div>

      {/* Add theme form */}
      {adding && (
        <div className="card" style={{ padding: '18px', marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ flex: 1, minWidth: '160px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Label</label>
            <input className="input" placeholder="e.g. Identity, Redemption…" value={newLabel}
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
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addTheme} disabled={saving}>{saving ? 'Adding…' : 'Add'}</button>
            <button className="btn-ghost" onClick={() => { setAdding(false); setNewLabel('') }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {Object.entries(THEME_COLORS).map(([type, c]) => (
          <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: c.bg }} />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--off-white)', border: '1.5px solid var(--border)' }} />
          Scene
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--green-pale)', border: '1.5px solid var(--green)' }} />
          Linked scene
        </div>
      </div>

      {themes.length === 0 && scenes.length === 0 ? (
        <div className="empty-state" style={{ marginTop: '20px' }}>
          <h3>Nothing here yet</h3>
          <p>Add themes above, then add scenes in the Scenes tab.</p>
        </div>
      ) : (
        <>
          {/* Canvas */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--off-white)', overflow: 'hidden', position: 'relative' }}>
            <svg
              ref={svgRef}
              width="100%"
              style={{ display: 'block', minHeight: '520px', cursor: dragging ? 'grabbing' : 'default', userSelect: 'none' }}
              onMouseMove={onSvgMouseMove}
              onMouseUp={onSvgMouseUp}
              onMouseLeave={onSvgMouseUp}
            >
              {/* Grid dots */}
              <defs>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="var(--border)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Links (lines between theme nodes and scene nodes) */}
              {links.map(link => {
                const tp = positions[`theme-${link.theme_id}`]
                const sp = positions[`scene-${link.scene_id}`]
                if (!tp || !sp) return null
                return (
                  <line
                    key={`${link.theme_id}-${link.scene_id}`}
                    x1={tp.x + 56} y1={tp.y + 18}
                    x2={sp.x + 56} y2={sp.y + 18}
                    stroke="var(--green)" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.6"
                  />
                )
              })}

              {/* Scene nodes */}
              {scenes.map(scene => {
                const pos = positions[`scene-${scene.id}`] || { x: 0, y: 0 }
                const isLinked = selectedTheme
                  ? links.some(l => l.theme_id === selectedTheme.id && l.scene_id === scene.id)
                  : false
                const isAnyLinked = links.some(l => l.scene_id === scene.id)
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
                      fill={isLinked ? 'var(--green-pale)' : 'white'}
                      stroke={isLinked ? 'var(--green)' : isAnyLinked ? '#aaa' : 'var(--border)'}
                      strokeWidth="1.5"
                    />
                    <text x="56" y="23" textAnchor="middle"
                      style={{ fontSize: '11px', fill: isLinked ? 'var(--green)' : 'var(--text-dark)', fontFamily: 'var(--font-sans)', fontWeight: isLinked ? '600' : '400' }}
                    >
                      {scene.title.length > 14 ? scene.title.slice(0, 13) + '…' : scene.title}
                    </text>
                    {selectedTheme && (
                      <rect width="112" height="36" rx="6" fill="rgba(45,80,22,0.06)" />
                    )}
                  </g>
                )
              })}

              {/* Theme nodes */}
              {themes.map(theme => {
                const pos = positions[`theme-${theme.id}`] || { x: 0, y: 0 }
                const col = THEME_COLORS[theme.type] || THEME_COLORS.theme
                const isSelected = selected?.type === 'theme' && selected?.id === theme.id
                const linkedCount = links.filter(l => l.theme_id === theme.id).length
                return (
                  <g
                    key={theme.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, `theme-${theme.id}`)}
                    onClick={() => setSelected(isSelected ? null : { type: 'theme', id: theme.id })}
                    style={{ cursor: 'grab' }}
                  >
                    <rect
                      width="112" height="40" rx="8"
                      fill={col.bg}
                      stroke={isSelected ? '#fff' : col.border}
                      strokeWidth={isSelected ? 3 : 1.5}
                    />
                    {isSelected && (
                      <rect width="112" height="40" rx="8" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4,3" />
                    )}
                    <text x="56" y="16" textAnchor="middle"
                      style={{ fontSize: '10px', fill: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                    >
                      {theme.type}
                    </text>
                    <text x="56" y="31" textAnchor="middle"
                      style={{ fontSize: '12px', fontWeight: '600', fill: col.text, fontFamily: 'var(--font-sans)' }}
                    >
                      {theme.label.length > 13 ? theme.label.slice(0, 12) + '…' : theme.label}
                    </text>
                    {linkedCount > 0 && (
                      <>
                        <circle cx="100" cy="8" r="9" fill="white" />
                        <text x="100" y="12" textAnchor="middle"
                          style={{ fontSize: '10px', fontWeight: '700', fill: col.bg, fontFamily: 'var(--font-mono)' }}
                        >{linkedCount}</text>
                      </>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Instruction / selected theme panel */}
          {selectedTheme ? (
            <div style={{ marginTop: '16px', padding: '14px 18px', borderRadius: '10px', background: 'var(--green-pale)', border: '1px solid var(--green)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)' }}>
                  Linking: &ldquo;{selectedTheme.label}&rdquo;
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', marginLeft: '8px' }}>
                  Click scene nodes above to connect them. Click the theme again to deselect.
                </span>
              </div>
              <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 12px' }} onClick={() => setSelected(null)}>
                Done linking
              </button>
            </div>
          ) : (
            <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-soft)', textAlign: 'center' }}>
              Click a theme node to start linking it to scenes &middot; Drag any node to reposition
            </p>
          )}

          {/* Theme list sidebar */}
          {themes.length > 0 && (
            <div style={{ marginTop: '24px' }}>
              <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                All themes ({themes.length})
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {themes.map(t => {
                  const col = THEME_COLORS[t.type] || THEME_COLORS.theme
                  const linkedScenes = links.filter(l => l.theme_id === t.id)
                  return (
                    <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--white)' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: col.bg, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-dark)' }}>{t.label}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>{t.type}</span>
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                        {linkedScenes.length} scene{linkedScenes.length !== 1 ? 's' : ''}
                      </span>
                      <button
                        className="btn-danger"
                        style={{ fontSize: '11px', padding: '4px 10px' }}
                        onClick={() => deleteTheme(t.id)}
                      >
                        Remove
                      </button>
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

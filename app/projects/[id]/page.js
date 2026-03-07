'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../../lib/supabase'
import { useToast } from '../../components/Toast'

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS = ['Overview', 'Characters', 'Scenes', 'Plot Holes']

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
  if (!dateStr) return '—'
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
  const [loading,    setLoading]    = useState(true)
  const [error,      setError]      = useState(null)

  // ── Load project + all related data ──────────────────────────────────────
  const load = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Sign in to view this project.'); setLoading(false); return }

    const [projRes, charRes, sceneRes, holeRes] = await Promise.all([
      supabase.from('projects').select('*').eq('id', id).eq('user_id', user.id).single(),
      supabase.from('characters').select('*').eq('project_id', id).order('created_at'),
      supabase.from('scenes').select('*').eq('project_id', id).order('act_number').order('order_index'),
      supabase.from('plot_holes').select('*').eq('project_id', id).order('created_at'),
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

    setProject(projRes.data)
    setCharacters(charRes.data || [])
    setScenes(sceneRes.data || [])
    setPlotHoles(holeRes.data || [])
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
      </div>
    </div>
  )
}

// ─── Overview Tab ──────────────────────────────────────────────────────────────

function OverviewTab({ project, characters, scenes, plotHoles, onUpdate }) {
  const openHoles = plotHoles.filter(h => h.status === 'open').length

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

      {/* Stats row */}
      <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
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
                <span style={{ color: 'var(--text-soft)', fontSize: '12px' }}>{c.role || '—'}</span>
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
    </div>
  )
}

// ── Logline editor ─────────────────────────────────────────────────────────────

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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                {[
                  { key: 'name',  label: 'Name' },
                  { key: 'role',  label: 'Role' },
                  { key: 'want',  label: 'Want' },
                  { key: 'need',  label: 'Need' },
                  { key: 'ghost', label: 'Ghost' },
                  { key: 'arc',   label: 'Arc' },
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

// ─── Scenes Tab ────────────────────────────────────────────────────────────────

function ScenesTab({ projectId, scenes, setScenes, framework, toast }) {
  const [adding,  setAdding]  = useState(false)
  const [form,    setForm]    = useState({ title: '', act_number: 1, beat_label: '', notes: '' })
  const [saving,  setSaving]  = useState(false)

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
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
          + Add scene
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--green-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>New Scene</p>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
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
          <p>Every story is a sequence of scenes. Add your first — it can be any scene, anywhere in the story.</p>
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
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginBottom: '32px' }}>
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
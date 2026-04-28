'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'

export const dynamic = 'force-dynamic'

const statusColor = {
  'Seed':        { bg: '#FFF8E6', color: '#92400E', border: '#FDE68A' },
  'In Progress': { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Drafting':    { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE' },
  'Complete':    { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
}

const FILTERS = ['All', 'Seed', 'In Progress', 'Drafting', 'Complete']

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [characters, setCharacters] = useState({})
  const [scenes, setScenes] = useState({})
  const [plotHoles, setPlotHoles] = useState({})
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('recent')
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) loadProjects(user.id)
      else setLoading(false)
    })
  }, [])

  async function loadProjects(userId) {
    setLoading(true)
    const { data: projs } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false })

    if (!projs || projs.length === 0) {
      setProjects([])
      setLoading(false)
      return
    }

    setProjects(projs)

    // Batch fetch counts for all projects
    const ids = projs.map(p => p.id)

    const [{ data: chars }, { data: sc }, { data: ph }] = await Promise.all([
      supabase.from('characters').select('project_id').in('project_id', ids),
      supabase.from('scenes').select('project_id').in('project_id', ids),
      supabase.from('plot_holes').select('project_id, resolved').in('project_id', ids),
    ])

    // Build count maps
    const charMap = {}, scMap = {}, phMap = {}
    ids.forEach(id => { charMap[id] = 0; scMap[id] = 0; phMap[id] = 0 })
    chars?.forEach(c => charMap[c.project_id] = (charMap[c.project_id] || 0) + 1)
    sc?.forEach(s => scMap[s.project_id] = (scMap[s.project_id] || 0) + 1)
    ph?.filter(h => !h.resolved)?.forEach(h => phMap[h.project_id] = (phMap[h.project_id] || 0) + 1)

    setCharacters(charMap)
    setScenes(scMap)
    setPlotHoles(phMap)
    setLoading(false)
  }

  const filtered = projects
    .filter(p => filter === 'All' || p.status === filter)
    .sort((a, b) => {
      if (sort === 'title') return (a.title || '').localeCompare(b.title || '')
      if (sort === 'progress') return (b.updated_at || '') > (a.updated_at || '') ? 1 : -1
      return 0
    })

  if (!user && !loading) return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: 'var(--text-mid)', marginBottom: '12px' }}>Sign in to see your projects.</p>
      <p style={{ fontSize: '14px', color: 'var(--text-soft)', marginBottom: '24px' }}>Your work is saved to your account and accessible from any device.</p>
      <Link href="/auth"><button className="btn-primary">Sign in</button></Link>
    </div>
  )

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '6px' }}>Projects</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: '15px' }}>
            {loading ? 'Loading...' : `${projects.length} ${projects.length === 1 ? 'story' : 'stories'} in your workspace.`}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/story-starter" style={{ textDecoration: 'none' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid var(--green-border)', background: 'var(--green-pale)', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', color: 'var(--green)', cursor: 'pointer' }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1l1.4 3L11 4.6l-2.3 2.2.5 3.2-2.7-1.4L3.8 10l.5-3.2L2 4.6l3.1-.6L6.5 1z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/></svg>
              Story Starter
            </button>
          </Link>
          <Link href="/projects/new" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">+ New project</button>
          </Link>
        </div>
      </div>

      {/* Filter + sort bar */}
      {projects.length > 0 && (
        <div className="fade-up fade-up-delay-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                fontSize: '13px', fontWeight: filter === f ? '600' : '400',
                padding: '5px 14px', borderRadius: '20px',
                border: filter === f ? '1.5px solid var(--green)' : '1px solid var(--border)',
                background: filter === f ? 'var(--green-pale)' : '#fff',
                color: filter === f ? 'var(--green)' : 'var(--text-soft)',
                cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                transition: 'all 0.15s ease',
              }}>{f}</button>
            ))}
          </div>
          <select className="input" style={{ width: 'auto', fontSize: '13px', padding: '6px 12px' }}
            value={sort} onChange={e => setSort(e.target.value)}>
            <option value="recent">Sort: Most recent</option>
            <option value="title">Sort: Title A–Z</option>
            <option value="progress">Sort: Most complete</option>
          </select>
        </div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} className="card" style={{ padding: '24px 28px', height: '120px', background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)', backgroundSize: '200% 100%' }} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && projects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 24px' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: 'var(--text-mid)', marginBottom: '10px' }}>No projects yet.</p>
          <p style={{ fontSize: '14px', color: 'var(--text-soft)', marginBottom: '8px' }}>No projects yet.</p>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '28px' }}>Create one, pick a framework, and start building your story.</p>
          <Link href="/projects/new" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ fontSize: '15px', padding: '12px 28px' }}>Start your first project</button>
          </Link>
        </div>
      )}

      {/* Project cards */}
      {!loading && (
        <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filtered.map(p => {
            const sc = statusColor[p.status] || statusColor['Seed']
            const charCount = characters[p.id] || 0
            const sceneCount = scenes[p.id] || 0
            const holeCount = plotHoles[p.id] || 0

            return (
              <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                <div className="card card-lift" style={{ padding: '24px 28px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        <h2 style={{ fontSize: '19px' }}>{p.title || 'Untitled project'}</h2>
                        {p.status && (
                          <span style={{
                            fontSize: '11px', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
                            padding: '2px 8px', borderRadius: '4px',
                            background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`,
                            fontFamily: 'DM Sans, sans-serif',
                          }}>{p.status}</span>
                        )}
                        {p.type && <span className="badge">{p.type}</span>}
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: p.logline ? '10px' : '0' }}>
                        {p.framework}{p.updated_at ? ` · Updated ${new Date(p.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : ''}
                      </p>
                      {p.logline && (
                        <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', fontStyle: 'italic', maxWidth: '600px' }}>
                          {p.logline}
                        </p>
                      )}
                    </div>
                    <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px', flexShrink: 0, marginLeft: '16px' }}
                      onClick={e => e.preventDefault()}>
                      Open
                    </button>
                  </div>

                  {/* Stats chips */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[
                      charCount > 0 && { label: `${charCount} character${charCount !== 1 ? 's' : ''}` },
                      sceneCount > 0 && { label: `${sceneCount} scene${sceneCount !== 1 ? 's' : ''}` },
                      holeCount > 0 && { label: `${holeCount} open plot hole${holeCount !== 1 ? 's' : ''}`, warn: true },
                    ].filter(Boolean).map((chip, i) => (
                      <span key={i} style={{
                        fontSize: '12px',
                        color: chip.warn ? '#92400E' : 'var(--text-mid)',
                        background: chip.warn ? '#FFF8E6' : 'var(--off-white)',
                        border: `1px solid ${chip.warn ? '#FDE68A' : 'var(--border)'}`,
                        padding: '3px 10px', borderRadius: '20px',
                        fontFamily: 'DM Sans, sans-serif',
                      }}>{chip.label}</span>
                    ))}
                    {charCount === 0 && sceneCount === 0 && (
                      <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontStyle: 'italic' }}>Empty project —open to begin</span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {!loading && projects.length > 0 && (
        <div className="tip-box fade-up" style={{ marginTop: '32px' }}>
          <strong>Craft note:</strong> A story in progress is not a story abandoned. The only unfinished story is the one you never started.
        </div>
      )}
    </div>
  )
}

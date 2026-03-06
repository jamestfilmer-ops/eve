'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'

const statusColor = {
  'seed':        { bg: 'var(--amber-pale)',  color: 'var(--amber)',   border: 'var(--amber-border)' },
  'in_progress': { bg: 'var(--green-pale)',  color: 'var(--green)',   border: 'var(--green-border)' },
  'drafting':    { bg: '#EFF6FF',            color: '#1D4ED8',        border: '#BFDBFE' },
  'complete':    { bg: '#F0FDF4',            color: '#15803D',        border: '#BBF7D0' },
}

const statusLabel = {
  'seed':        'Seed',
  'in_progress': 'In Progress',
  'drafting':    'Drafting',
  'complete':    'Complete',
}

const frameworkLabel = {
  'save-the-cat':   'Save the Cat',
  'heros-journey':  "Hero's Journey",
  'story-circle':   'Story Circle',
  'freeform':       'Freeform',
}

function timeAgo(dateStr) {
  if (!dateStr) return 'Never'
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

export default function Dashboard() {
  const [projects,  setProjects]  = useState([])
  const [stats,     setStats]     = useState({ projects: 0, scenes: 0, characters: 0, plotHoles: 0 })
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState(null)
  const [user,      setUser]      = useState(null)

  useEffect(() => {
    async function load() {
      // 1. Get current user
      const { data: { user }, error: authErr } = await supabase.auth.getUser()
      if (authErr || !user) {
        setError('Please sign in to view your dashboard.')
        setLoading(false)
        return
      }
      setUser(user)

      // 2. Load projects
      const { data: projectRows, error: projErr } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })

      if (projErr) {
        setError('Could not load your projects. Try refreshing.')
        setLoading(false)
        return
      }

      // 3. Load counts for stats and per-project chips
      const projectIds = (projectRows || []).map(p => p.id)

      let sceneCounts = {}, characterCounts = {}, plotHoleCounts = {}

      if (projectIds.length > 0) {
        const [scenesRes, charsRes, holesRes] = await Promise.all([
          supabase.from('scenes').select('project_id').in('project_id', projectIds),
          supabase.from('characters').select('project_id').in('project_id', projectIds),
          supabase.from('plot_holes').select('project_id, status').in('project_id', projectIds),
        ])

        ;(scenesRes.data || []).forEach(r => {
          sceneCounts[r.project_id] = (sceneCounts[r.project_id] || 0) + 1
        })
        ;(charsRes.data || []).forEach(r => {
          characterCounts[r.project_id] = (characterCounts[r.project_id] || 0) + 1
        })
        ;(holesRes.data || []).forEach(r => {
          if (r.status === 'open') {
            plotHoleCounts[r.project_id] = (plotHoleCounts[r.project_id] || 0) + 1
          }
        })
      }

      // 4. Enrich projects with counts
      const enriched = (projectRows || []).map(p => ({
        ...p,
        sceneCount:     sceneCounts[p.id]     || 0,
        characterCount: characterCounts[p.id] || 0,
        plotHoleCount:  plotHoleCounts[p.id]  || 0,
      }))

      // 5. Compute dashboard stats
      const totalScenes     = Object.values(sceneCounts).reduce((a, b) => a + b, 0)
      const totalCharacters = Object.values(characterCounts).reduce((a, b) => a + b, 0)
      const totalPlotHoles  = Object.values(plotHoleCounts).reduce((a, b) => a + b, 0)

      setProjects(enriched)
      setStats({
        projects:  enriched.length,
        scenes:    totalScenes,
        characters: totalCharacters,
        plotHoles: totalPlotHoles,
      })
      setLoading(false)
    }

    load()
  }, [])

  // ── Loading state ────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ width: '180px', height: '36px', background: 'var(--green-pale)', borderRadius: '6px', marginBottom: '8px' }} />
            <div style={{ width: '260px', height: '18px', background: 'var(--off-white)', borderRadius: '4px' }} />
          </div>
          <div style={{ width: '120px', height: '38px', background: 'var(--green-pale)', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[0,1,2,3].map(i => (
            <div key={i} className="card" style={{ padding: '20px 24px', height: '80px',
              background: 'linear-gradient(90deg, var(--off-white) 25%, var(--green-pale) 50%, var(--off-white) 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.4s infinite',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[0,1].map(i => (
            <div key={i} className="card" style={{ padding: '24px 28px', height: '130px',
              background: 'linear-gradient(90deg, var(--off-white) 25%, var(--green-pale) 50%, var(--off-white) 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.4s infinite',
            }} />
          ))}
        </div>
        <style>{`
          @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    )
  }

  // ── Error state ──────────────────────────────────────────
  if (error) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        <div className="card" style={{ padding: '40px', textAlign: 'center', maxWidth: '480px', margin: '80px auto' }}>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', marginBottom: '20px' }}>{error}</p>
          <Link href="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Sign in</button>
          </Link>
        </div>
      </div>
    )
  }

  // ── Main render ──────────────────────────────────────────
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '6px' }}>Your Stories</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: '15px' }}>
            {projects.length === 0
              ? 'No projects yet. Start your first story.'
              : 'Pick up where you left off, or start something new.'}
          </p>
        </div>
        <Link href="/projects/new" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">+ New Project</button>
        </Link>
      </div>

      {/* Stats */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
        {[
          { label: 'Projects',        value: stats.projects },
          { label: 'Scenes written',  value: stats.scenes },
          { label: 'Characters',      value: stats.characters },
          { label: 'Plot holes open', value: stats.plotHoles },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '30px', fontFamily: 'var(--font-display)', color: 'var(--green)', fontWeight: '700', marginBottom: '4px' }}>
              {s.value}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)', letterSpacing: '0.01em' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {projects.length === 0 && (
        <div className="fade-up fade-up-delay-2 empty-state card" style={{ padding: '64px 24px' }}>
          <h3>No stories yet</h3>
          <p>Every story starts somewhere small. Create your first project and give it a home.</p>
          <Link href="/projects/new" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Start your first story</button>
          </Link>
        </div>
      )}

      {/* Project list */}
      {projects.length > 0 && (
        <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {projects.map(p => {
            const status = p.status || 'seed'
            const sc = statusColor[status] || statusColor['seed']
            const label = statusLabel[status] || 'Seed'
            const fw = frameworkLabel[p.framework] || p.framework

            return (
              <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '24px 28px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <h2 style={{ fontSize: '19px' }}>{p.title}</h2>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px', fontWeight: '500',
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                          padding: '2px 8px', borderRadius: '4px',
                          background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`,
                        }}>{label}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
                        {p.type}&ensp;&middot;&ensp;{fw}&ensp;&middot;&ensp;Updated {timeAgo(p.updated_at)}
                      </p>
                    </div>
                    <button
                      className="btn-primary"
                      style={{ fontSize: '13px', padding: '8px 16px', flexShrink: 0 }}
                      onClick={e => e.preventDefault()}
                    >
                      Resume &rarr;
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[
                      { label: `${p.characterCount} character${p.characterCount !== 1 ? 's' : ''}` },
                      { label: `${p.sceneCount} scene${p.sceneCount !== 1 ? 's' : ''}` },
                      { label: `${p.plotHoleCount} plot hole${p.plotHoleCount !== 1 ? 's' : ''}` },
                    ].map((chip, i) => (
                      <span key={i} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px', color: 'var(--text-mid)',
                        background: 'var(--off-white)',
                        border: '1px solid var(--border)',
                        padding: '3px 10px', borderRadius: '20px',
                      }}>{chip.label}</span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
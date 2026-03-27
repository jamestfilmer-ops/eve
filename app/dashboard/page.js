'use client'
import React from 'react'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'
import { useToast } from '../components/Toast'
import { SkeletonPage } from '../components/Skeleton'

export const dynamic = 'force-dynamic'

const statusColor = {
  'seed':        { bg: 'var(--amber-pale)',  color: 'var(--amber)',   border: 'var(--amber-border)' },
  'in_progress': { bg: 'var(--green-pale)',  color: 'var(--green)',   border: 'var(--green-border)' },
  'drafting':    { bg: '#EFF6FF',            color: '#1D4ED8',        border: '#BFDBFE' },
  'complete':    { bg: '#F0FDF4',            color: '#15803D',        border: '#BBF7D0' },
}
const statusLabel    = { 'seed': 'Seed', 'in_progress': 'In Progress', 'drafting': 'Drafting', 'complete': 'Complete' }
const frameworkLabel = { 'save-the-cat': 'Save the Cat', 'heros-journey': "Hero's Journey", 'story-circle': 'Story Circle', 'freeform': 'Freeform', 'sequence-approach': 'Sequence Approach', 'kishotenketsu': 'Kishōtenketsu', 'fichtean': 'Fichtean Curve' }

function timeAgo(dateStr) {
  if (!dateStr) return 'Never'
  const diff  = Date.now() - new Date(dateStr).getTime()
  const mins  = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days  = Math.floor(diff / 86400000)
  if (mins  < 2)   return 'Just now'
  if (mins  < 60)  return `${mins}m ago`
  if (hours < 24)  return `${hours}h ago`
  if (days  === 1) return 'Yesterday'
  if (days  < 7)   return `${days} days ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function DashboardInner() {
  const searchParams = useSearchParams()
  const upgraded = searchParams.get('upgraded')
  const toast = useToast()
  const [showUpgradeBanner, setShowUpgradeBanner] = useState(!!upgraded)
  const [projects, setProjects] = useState([])
  const [stats,    setStats]    = useState({ projects: 0, scenes: 0, characters: 0, plotHoles: 0 })
  const [loading,  setLoading]  = useState(true)
  const [user,     setUser]     = useState(null)

  useEffect(() => {
    async function load() {
      const { data: { user }, error: authErr } = await supabase.auth.getUser()
      if (authErr || !user) {
        toast.error('Please sign in to view your dashboard.')
        setLoading(false)
        return
      }
      setUser(user)

      const { data: projectRows, error: projErr } = await supabase
        .from('projects').select('*').eq('user_id', user.id).order('updated_at', { ascending: false })

      if (projErr) {
        toast.error('Could not load your projects. Try refreshing.')
        setLoading(false)
        return
      }

      const ids = (projectRows || []).map(p => p.id)
      let sc = {}, cc = {}, pc = {}

      if (ids.length > 0) {
        const [sr, cr, hr] = await Promise.all([
          supabase.from('scenes').select('project_id').in('project_id', ids),
          supabase.from('characters').select('project_id').in('project_id', ids),
          supabase.from('plot_holes').select('project_id, status').in('project_id', ids),
        ])
        ;(sr.data || []).forEach(r => { sc[r.project_id] = (sc[r.project_id] || 0) + 1 })
        ;(cr.data || []).forEach(r => { cc[r.project_id] = (cc[r.project_id] || 0) + 1 })
        ;(hr.data || []).forEach(r => { if (r.status === 'open') pc[r.project_id] = (pc[r.project_id] || 0) + 1 })
      }

      const enriched = (projectRows || []).map(p => ({
        ...p, sceneCount: sc[p.id] || 0, characterCount: cc[p.id] || 0, plotHoleCount: pc[p.id] || 0,
      }))

      setProjects(enriched)
      setStats({
        projects:   enriched.length,
        scenes:     Object.values(sc).reduce((a, b) => a + b, 0),
        characters: Object.values(cc).reduce((a, b) => a + b, 0),
        plotHoles:  Object.values(pc).reduce((a, b) => a + b, 0),
      })
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return <SkeletonPage variant="dashboard" />

  if (!user) return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
      <div className="card" style={{ padding: '40px', textAlign: 'center', maxWidth: '480px', margin: '80px auto' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', marginBottom: '20px' }}>Sign in to view your dashboard.</p>
        <Link href="/auth" style={{ textDecoration: 'none' }}><button className="btn-primary">Sign in</button></Link>
      </div>
    </div>
  )

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>

      <div className="fade-up" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '6px' }}>Your Stories</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: '15px' }}>
            {projects.length === 0 ? 'No projects yet.' : 'Pick up where you left off.'}
          </p>
        </div>
        <Link href="/projects/new" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">+ New Project</button>
        </Link>
      </div>

      <div className="fade-up fade-up-delay-1 stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
        {[
          { label: 'Projects',        value: stats.projects   },
          { label: 'Scenes written',  value: stats.scenes     },
          { label: 'Characters',      value: stats.characters },
          { label: 'Plot holes open', value: stats.plotHoles  },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '30px', fontFamily: 'var(--font-display)', color: 'var(--green)', fontWeight: '700', marginBottom: '4px' }}>{s.value}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="fade-up fade-up-delay-2 empty-state card" style={{ padding: '64px 24px' }}>
          <h3>No stories yet</h3>
          <p>You don&apos;t have any projects yet. Create one, pick a framework, and start building.</p>
          <Link href="/projects/new" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Start your first story</button>
          </Link>
        </div>
      )}

      {projects.length > 0 && (
        <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {projects.map(p => {
            const status = p.status || 'seed'
            const sc2    = statusColor[status] || statusColor['seed']
            return (
              <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '24px 28px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <h2 style={{ fontSize: '19px' }}>{p.title}</h2>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '500', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: sc2.bg, color: sc2.color, border: `1px solid ${sc2.border}` }}>
                          {statusLabel[status] || 'Seed'}
                        </span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
                        {p.type}&ensp;&middot;&ensp;{frameworkLabel[p.framework] || p.framework}&ensp;&middot;&ensp;Updated {timeAgo(p.updated_at)}
                      </p>
                    </div>
                    <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px', flexShrink: 0 }} onClick={e => e.preventDefault()}>
                      Resume &rarr;
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[
                      `${p.characterCount} character${p.characterCount !== 1 ? 's' : ''}`,
                      `${p.sceneCount} scene${p.sceneCount !== 1 ? 's' : ''}`,
                      `${p.plotHoleCount} plot hole${p.plotHoleCount !== 1 ? 's' : ''}`,
                    ].map((label, i) => (
                      <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-mid)', background: 'var(--off-white)', border: '1px solid var(--border)', padding: '3px 10px', borderRadius: '20px' }}>{label}</span>
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

export default function Dashboard() {
  return (
    <Suspense fallback={null}>
      <DashboardInner />
    </Suspense>
  )
}

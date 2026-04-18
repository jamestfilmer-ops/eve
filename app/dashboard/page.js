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
          supabase.from('scenes').select('project_id, status').in('project_id', ids),
          supabase.from('characters').select('project_id').in('project_id', ids),
          supabase.from('plot_holes').select('project_id, status').in('project_id', ids),
        ])
        ;(sr.data || []).forEach(r => { sc[r.project_id] = (sc[r.project_id] || 0) + 1 })
        ;(cr.data || []).forEach(r => { cc[r.project_id] = (cc[r.project_id] || 0) + 1 })
        ;(hr.data || []).forEach(r => { if (r.status === 'open') pc[r.project_id] = (pc[r.project_id] || 0) + 1 })
        // track complete scene counts
        const done = {}
        ;(sr.data || []).forEach(r => { if (r.status === 'complete') done[r.project_id] = (done[r.project_id] || 0) + 1 })
        ids.forEach(id => { if (!done[id]) done[id] = 0 })
        Object.assign(sc, { __done: done })
      }

      const enriched = (projectRows || []).map(p => ({
        ...p,
        sceneCount:     sc[p.id] || 0,
        sceneDone:      (sc.__done || {})[p.id] || 0,
        characterCount: cc[p.id] || 0,
        plotHoleCount:  pc[p.id] || 0,
      }))

      setProjects(enriched)
      setStats({
        projects:   enriched.length,
        scenes:     Object.entries(sc).filter(([k]) => k !== '__done').reduce((a, [, b]) => a + b, 0),
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

  // Pick a daily lesson tip — rotates by day of month
  const dailyTips = [
    { slug: 'want-vs-need', label: 'Want vs. Need', tip: 'The gap between what your protagonist wants and what they actually need is where the theme lives.' },
    { slug: 'character-before-plot', label: 'Character before plot', tip: 'Plot is furniture. Character is the person in the room. Build the person first.' },
    { slug: 'what-a-scene-does', label: 'What a scene does', tip: 'Every scene must change something. If the end of a scene is the same as the beginning, cut it.' },
    { slug: 'dialogue-subtext', label: 'Dialogue subtext', tip: 'Characters should almost never say exactly what they mean. The meaning lives underneath the words.' },
    { slug: 'the-first-page', label: 'The first page', tip: 'You have one page to make a reader believe you know what you are doing. Not to explain. To prove.' },
    { slug: 'midpoint', label: 'The midpoint', tip: 'The midpoint is either a false victory or a false defeat. After it, nothing is the same.' },
    { slug: 'ghost', label: 'The ghost', tip: 'What happened to your protagonist before the story started? That wound drives everything they do in it.' },
    { slug: 'vonnegut-craft', label: 'Vonnegut on craft', tip: '"Every sentence must do one of two things — reveal character or advance the action." Cut the rest.' },
  ]
  const todaysTip = dailyTips[new Date().getDate() % dailyTips.length]
  const firstName = user?.email?.split('@')[0]?.split('.')?.[0] || null
  const greeting = firstName ? `Good to see you, ${firstName}.` : 'Good to see you.'
  const mostRecent = projects[0] || null

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>

        {/* Welcome row */}
        <div className="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: '6px', color: 'var(--text-dark)' }}>{greeting}</h1>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px' }}>
              {projects.length === 0 ? 'Start your first story.' : projects.length === 1 ? '1 story in progress.' : `${projects.length} stories in progress.`}
            </p>
          </div>
          <Link href="/projects/new" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">+ New project</button>
          </Link>
        </div>

        {/* Stats row */}
        <div className="fade-up fade-up-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '36px' }}>
          {[
            { label: 'Projects',   value: stats.projects,   href: '/projects' },
            { label: 'Scenes',     value: stats.scenes,     href: null },
            { label: 'Characters', value: stats.characters, href: null },
            { label: 'Plot holes', value: stats.plotHoles,  href: null },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '18px 20px', cursor: s.href ? 'pointer' : 'default' }}
              onClick={() => s.href && (window.location.href = s.href)}>
              <p style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: 'var(--green)', fontWeight: '700', marginBottom: '2px', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column layout: projects + sidebar */}
        <div className="fade-up fade-up-delay-2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '24px', alignItems: 'start' }}>

          {/* Projects column */}
          <div>
            {projects.length === 0 ? (
              <div className="empty-state card" style={{ padding: '56px 24px' }}>
                <h3>No stories yet</h3>
                <p>Create a project, pick a framework, and start building. Eve keeps track of everything while you write.</p>
                <Link href="/projects/new" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary">Start your first story</button>
                </Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {projects.map(p => {
                  const status = p.status || 'seed'
                  const sc2    = statusColor[status] || statusColor['seed']
                  return (
                    <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                      <div className="card" style={{ padding: '22px 26px', cursor: 'pointer', transition: 'box-shadow 0.15s, border-color 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,20,15,0.08)'; e.currentTarget.style.borderColor = 'var(--green-border)' }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px', flexWrap: 'wrap' }}>
                              <h2 style={{ fontSize: '17px', margin: 0, color: 'var(--text-dark)' }}>{p.title}</h2>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: '600', letterSpacing: '0.07em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '4px', background: sc2.bg, color: sc2.color, border: `1px solid ${sc2.border}`, flexShrink: 0 }}>
                                {statusLabel[status] || 'Seed'}
                              </span>
                            </div>
                            <p style={{ fontSize: '12px', color: 'var(--text-soft)', margin: 0 }}>
                              {p.type}&ensp;&middot;&ensp;{frameworkLabel[p.framework] || p.framework}&ensp;&middot;&ensp;{timeAgo(p.updated_at)}
                            </p>
                          </div>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: '600', color: 'var(--green)', paddingLeft: '16px', flexShrink: 0 }}>Resume &rarr;</span>
                        </div>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: p.sceneCount > 0 ? '10px' : '0' }}>
                          {[
                            { val: p.characterCount, label: 'character' },
                            { val: p.sceneCount,     label: 'scene' },
                            { val: p.plotHoleCount,  label: 'plot hole' },
                          ].map(({ val, label }) => (
                            <span key={label} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-mid)', background: 'var(--off-white)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '20px' }}>
                              {val} {label}{val !== 1 ? 's' : ''}
                            </span>
                          ))}
                        </div>
                        {p.sceneCount > 0 && (
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                              <span style={{ fontSize: '10px', fontFamily: 'var(--font-ui)', color: 'var(--text-soft)' }}>
                                {p.sceneDone} of {p.sceneCount} scenes complete
                              </span>
                              <span style={{ fontSize: '10px', fontFamily: 'var(--font-ui)', fontWeight: '600', color: p.sceneDone === p.sceneCount ? 'var(--green)' : 'var(--text-soft)' }}>
                                {Math.round((p.sceneDone / p.sceneCount) * 100)}%
                              </span>
                            </div>
                            <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                              <div style={{
                                height: '100%', borderRadius: '2px',
                                width: Math.round((p.sceneDone / p.sceneCount) * 100) + '%',
                                background: 'linear-gradient(90deg, #2D5016, var(--green))',
                                transition: 'width 0.3s ease',
                              }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  )
                })}
                <Link href="/projects/new" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '16px 20px', borderRadius: '10px', border: '1.5px dashed var(--border)', textAlign: 'center', cursor: 'pointer', color: 'var(--text-soft)', fontSize: '13px', fontFamily: 'var(--font-sans)', transition: 'border-color 0.15s, color 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green-border)'; e.currentTarget.style.color = 'var(--green)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-soft)' }}>
                    + Start a new story
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Today's lesson */}
            <div className="card" style={{ padding: '20px 22px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>Today</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px', lineHeight: '1.3' }}>{todaysTip.label}</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '14px', fontStyle: 'italic' }}>&ldquo;{todaysTip.tip}&rdquo;</p>
              <Link href={`/learn/${todaysTip.slug}`} style={{ textDecoration: 'none' }}>
                <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 14px', width: '100%' }}>Read the lesson &rarr;</button>
              </Link>
            </div>

            {/* Quick links */}
            <div className="card" style={{ padding: '20px 22px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '12px' }}>Quick links</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[
                  { label: 'Craft library', href: '/learn', sub: '100+ lessons' },
                  { label: 'Idea capture', href: '/ideas', sub: 'Sparks and fragments' },
                  { label: 'Frameworks', href: '/frameworks', sub: '7 story structures' },
                  { label: 'Glossary', href: '/glossary', sub: '87+ terms defined' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderRadius: '6px', transition: 'background 0.12s', cursor: 'pointer' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--off-white)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: '500', color: 'var(--text-dark)' }}>{link.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)' }}>{link.sub}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
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

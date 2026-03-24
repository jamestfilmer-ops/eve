'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import { useToast } from '../components/Toast'

export default function ProfilePage() {
  const router = useRouter()
  const toast  = useToast()
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({ projects: 0, ideas: 0, scenes: 0, characters: 0 })
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ name: '', bio: '' })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) {
        loadAll(user)
      } else {
        setLoading(false)
      }
    })
  }, [])

  async function loadAll(u) {
    setLoading(true)
    const [profileRes, projectsRes, ideasRes, scenesRes, charsRes] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', u.id).single(),
      supabase.from('projects').select('id', { count: 'exact', head: true }).eq('user_id', u.id),
      supabase.from('ideas').select('id', { count: 'exact', head: true }).eq('user_id', u.id),
      supabase.from('scenes').select('id', { count: 'exact', head: true }).eq('user_id', u.id),
      supabase.from('characters').select('id', { count: 'exact', head: true }).eq('user_id', u.id),
    ])

    const p = profileRes.data || {}
    setProfile(p)
    setForm({ name: p.full_name || u.email?.split('@')[0] || '', bio: p.bio || '' })
    setStats({
      projects: projectsRes.count || 0,
      ideas: ideasRes.count || 0,
      scenes: scenesRes.count || 0,
      characters: charsRes.count || 0,
    })
    setLoading(false)
  }

  async function handleSave() {
    if (!user) return
    setSaving(true)
    const { error } = await supabase
      .from('profiles')
      .upsert({ id: user.id, full_name: form.name, bio: form.bio, updated_at: new Date().toISOString() })
    if (error) {
      setError(error.message)
      toast.error('Could not save profile.')
    } else {
      setEditing(false)
      toast.success('Profile saved.')
    }
    setSaving(false)
  }

  function joinedDate(ts) {
    if (!ts) return 'Recently'
    const d = new Date(ts)
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  if (!user && !loading) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 20px', textAlign: 'center' }}>
        <div className="card" style={{ display: 'inline-block', padding: '48px 40px' }}>
          <p style={{ marginBottom: '20px', color: 'var(--text-mid)' }}>Sign in to view your profile.</p>
          <button className="btn-primary" onClick={() => router.push('/auth')}>Sign in</button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 20px' }}>
        <div className="skeleton" style={{ height: '160px', borderRadius: '12px', marginBottom: '16px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {[1, 2, 3, 4].map(i => <div key={i} className="skeleton" style={{ height: '80px', borderRadius: '12px' }} />)}
        </div>
        <div className="skeleton" style={{ height: '200px', borderRadius: '12px' }} />
      </div>
    )
  }

  const displayName = form.name || user?.email?.split('@')[0] || 'Writer'
  const initials = displayName.charAt(0).toUpperCase()

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '36px 20px' }}>

      {error && (
        <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '14px', color: '#9F1239' }}>
          {error}
        </div>
      )}

      {/* Profile card */}
      <div className="fade-up card" style={{ padding: '28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontFamily: 'var(--font-display)',
              fontSize: '26px', fontWeight: '700', color: '#fff', flexShrink: 0,
            }}>
              {initials}
            </div>
            <div>
              {editing ? (
                <input
                  className="input"
                  style={{ fontSize: '18px', fontFamily: 'var(--font-display)', marginBottom: '6px', padding: '6px 10px' }}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              ) : (
                <h1 style={{ fontSize: '22px', marginBottom: '4px' }}>{displayName}</h1>
              )}
              <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
                {user?.email} &middot; Member since {joinedDate(user?.created_at)}
              </p>
            </div>
          </div>
          <button
            className={editing ? 'btn-primary' : 'btn-ghost'}
            style={{ fontSize: '13px', padding: '7px 16px' }}
            onClick={() => editing ? handleSave() : setEditing(true)}
            disabled={saving}
          >
            {editing ? (saving ? 'Saving...' : 'Save profile') : 'Edit profile'}
          </button>
        </div>

        {editing ? (
          <div>
            <textarea
              className="input"
              style={{ minHeight: '80px' }}
              value={form.bio}
              onChange={e => setForm({ ...form, bio: e.target.value })}
              placeholder="A sentence or two about you and your writing..."
            />
            <button className="btn-ghost" style={{ marginTop: '10px', fontSize: '13px', padding: '6px 14px' }} onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <p style={{ fontSize: '14px', color: form.bio ? 'var(--text-mid)' : 'var(--text-soft)', lineHeight: '1.7', fontStyle: form.bio ? 'italic' : 'normal', fontFamily: form.bio ? 'var(--font-display)' : 'var(--font-ui)' }}>
            {form.bio || 'No bio yet. Click Edit profile to add one.'}
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Projects', value: stats.projects, href: '/dashboard' },
          { label: 'Ideas', value: stats.ideas, href: '/ideas' },
          { label: 'Scenes', value: stats.scenes, href: null },
          { label: 'Characters', value: stats.characters, href: null },
        ].map((s, i) => (
          <div key={i} className={s.href ? 'card' : 'card-static'} style={{ padding: '18px 20px', textAlign: 'center', cursor: s.href ? 'pointer' : 'default' }} onClick={() => s.href && router.push(s.href)}>
            <p style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: 'var(--green)', fontWeight: '700', marginBottom: '4px' }}>{s.value}</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Plan & Billing */}
      <div className="fade-up fade-up-delay-2" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Plan</h3>
        <div className="card" style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '2px', textTransform: 'capitalize' }}>
              {profile?.plan || 'Free'}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>
              {profile?.plan && profile.plan !== 'free' ? 'Active subscription' : 'Upgrade for unlimited projects and all frameworks'}
            </p>
          </div>
          {profile?.plan && profile.plan !== 'free' ? (
            <button
              className="btn-ghost"
              style={{ fontSize: '13px', padding: '6px 14px', flexShrink: 0 }}
              onClick={async () => {
                const res = await fetch('/api/stripe/portal', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ userId: user.id }),
                })
                const data = await res.json()
                if (data.url) window.location.href = data.url
              }}
            >
              Manage billing
            </button>
          ) : (
            <a href="/pricing" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '13px', padding: '6px 14px', flexShrink: 0 }}>
                Upgrade
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Quick links */}
      <div className="fade-up fade-up-delay-2">
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Quick access</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Idea Bank', description: 'Your captured fragments, one-liners, and half-formed scenes.', href: '/ideas' },
            { label: 'Active Projects', description: 'Pick up where you left off.', href: '/dashboard' },
            { label: 'Craft Library', description: 'Short lessons on structure, character, dialogue, and theme.', href: '/learn' },
            { label: 'Learning Paths', description: 'Beginner to advanced —know where you are, know where to go.', href: '/learn/tracks' },
            { label: 'Session Mode', description: 'Work through your story beat by beat.', href: '/session' },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '2px' }}>{item.label}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>{item.description}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: 'var(--text-soft)' }}>
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
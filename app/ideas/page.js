'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

const TYPES = ['All', 'One-liner', 'Scene', 'Dialogue', 'Character', 'Theme', 'Title']

const typeColors = {
  'One-liner': { bg: '#FFF8E6', color: '#92400E', border: '#FDE68A' },
  'Scene':     { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Dialogue':  { bg: '#EFF6FF', color: '#1E40AF', border: '#BFDBFE' },
  'Character': { bg: '#FDF4FF', color: '#6B21A8', border: '#E9D5FF' },
  'Theme':     { bg: '#FFF1F2', color: '#9F1239', border: '#FECDD3' },
  'Title':     { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
}

function timeAgo(ts) {
  const diff = Date.now() - new Date(ts).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 7) return `${days}d ago`
  const wks = Math.floor(days / 7)
  return `${wks}w ago`
}

export default function IdeasPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [newIdea, setNewIdea] = useState({ type: 'One-liner', text: '' })
  const [search, setSearch] = useState('')
  const [promoteId, setPromoteId] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) {
        loadIdeas(user.id)
      } else {
        setLoading(false)
      }
    })
  }, [])

  async function loadIdeas(userId) {
    setLoading(true)
    const { data, error } = await supabase
      .from('ideas')
      .select('*')
      .eq('user_id', userId)
      .order('pinned', { ascending: false })
      .order('created_at', { ascending: false })
    if (error) {
      setError(error.message)
    } else {
      setIdeas(data || [])
    }
    setLoading(false)
  }

  async function handleAdd() {
    if (!newIdea.text.trim() || !user) return
    setSaving(true)
    const { data, error } = await supabase
      .from('ideas')
      .insert({ user_id: user.id, type: newIdea.type, text: newIdea.text, pinned: false })
      .select()
      .single()
    if (error) {
      setError(error.message)
    } else {
      setIdeas(prev => [data, ...prev])
      setNewIdea({ type: 'One-liner', text: '' })
      setShowForm(false)
    }
    setSaving(false)
  }

  async function togglePin(id, current) {
    const { data, error } = await supabase
      .from('ideas')
      .update({ pinned: !current })
      .eq('id', id)
      .select()
      .single()
    if (!error) {
      setIdeas(prev =>
        prev.map(i => i.id === id ? data : i)
          .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
      )
    }
  }

  async function deleteIdea(id) {
    const { error } = await supabase.from('ideas').delete().eq('id', id)
    if (!error) setIdeas(prev => prev.filter(i => i.id !== id))
  }

  const filtered = ideas
    .filter(i => filter === 'All' || i.type === filter)
    .filter(i => i.text.toLowerCase().includes(search.toLowerCase()))

  if (!user && !loading) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 20px', textAlign: 'center' }}>
        <div className="card" style={{ display: 'inline-block', padding: '48px 40px' }}>
          <p style={{ marginBottom: '20px', color: 'var(--text-mid)' }}>Sign in to capture and manage your ideas.</p>
          <button className="btn-primary" onClick={() => router.push('/auth')}>Sign in</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 20px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: '12px' }}>Idea Bank</div>
            <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '6px' }}>Your Ideas</h1>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px', maxWidth: '480px', lineHeight: '1.65' }}>
              One-liners, fragments, overheard dialogue, half-formed characters. Drop it here before it disappears.
            </p>
          </div>
          <button className="btn-primary" onClick={() => setShowForm(!showForm)} style={{ flexShrink: 0 }}>
            {showForm ? 'Cancel' : '+ Capture idea'}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '14px', color: '#9F1239' }}>
          {error}
        </div>
      )}

      {/* Capture form */}
      {showForm && (
        <div className="fade-up card" style={{ padding: '22px', marginBottom: '28px', border: '2px solid var(--green)' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '6px' }}>Capture an idea</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '16px' }}>
            Don&apos;t edit it. Don&apos;t explain it. Just write it down exactly as it came to you.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {TYPES.filter(t => t !== 'All').map(t => {
              const active = newIdea.type === t
              const c = typeColors[t]
              return (
                <button key={t} onClick={() => setNewIdea({ ...newIdea, type: t })} style={{
                  fontSize: '12px', fontWeight: '600', padding: '5px 12px', borderRadius: '20px',
                  border: active ? `1.5px solid ${c.color}` : '1px solid var(--border)',
                  background: active ? c.bg : '#fff', color: active ? c.color : 'var(--text-soft)',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}>{t}</button>
              )
            })}
          </div>
          <textarea
            className="input"
            placeholder={
              newIdea.type === 'Dialogue' ? 'Write the line exactly as you heard it in your head...' :
              newIdea.type === 'One-liner' ? 'A single sentence that captures the whole story...' :
              newIdea.type === 'Scene' ? 'Describe the scene — what happens, what it feels like...' :
              newIdea.type === 'Character' ? "Who is this person? What's the one thing that makes them interesting?" :
              newIdea.type === 'Theme' ? 'A statement, a question, or a contradiction...' :
              'Write it down...'
            }
            style={{ minHeight: '100px', marginBottom: '14px' }}
            value={newIdea.text}
            onChange={e => setNewIdea({ ...newIdea, text: e.target.value })}
            onKeyDown={e => { if (e.key === 'Enter' && e.metaKey) handleAdd() }}
            autoFocus
          />
          <div className="tip-box" style={{ marginBottom: '14px' }}>
            <strong>Craft note:</strong> The best ideas arrive uninvited. Your only job is to catch them. Judgment comes later.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-primary" onClick={handleAdd} disabled={!newIdea.text.trim() || saving}
              style={{ opacity: newIdea.text.trim() && !saving ? 1 : 0.4 }}>
              {saving ? 'Saving...' : 'Save idea'}
            </button>
            <button className="btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Search + filter */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          className="input"
          style={{ maxWidth: '200px', fontSize: '13px', padding: '8px 12px' }}
          placeholder="Search ideas..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {TYPES.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              fontSize: '12px', fontWeight: filter === t ? '600' : '400',
              padding: '5px 11px', borderRadius: '20px',
              border: filter === t ? '1.5px solid var(--green)' : '1px solid var(--border)',
              background: filter === t ? 'var(--green-pale)' : '#fff',
              color: filter === t ? 'var(--green)' : 'var(--text-soft)',
              cursor: 'pointer', transition: 'all 0.15s ease',
            }}>{t}</button>
          ))}
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-soft)', marginLeft: 'auto' }}>
          {filtered.length} idea{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[1, 2, 3].map(i => <div key={i} className="skeleton" style={{ height: '90px', borderRadius: '12px' }} />)}
        </div>
      )}

      {/* Ideas */}
      {!loading && (
        <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-soft)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px', color: 'var(--text-mid)' }}>
                {ideas.length === 0 ? 'Your idea bank is empty.' : 'Nothing matches.'}
              </p>
              <p style={{ fontSize: '14px' }}>
                {ideas.length === 0 ? 'Every great story started as a fragment. Capture yours.' : 'Try a different search or filter.'}
              </p>
              {ideas.length === 0 && (
                <button className="btn-primary" onClick={() => setShowForm(true)} style={{ marginTop: '20px' }}>
                  Capture your first idea
                </button>
              )}
            </div>
          )}

          {filtered.map(idea => {
            const c = typeColors[idea.type] || typeColors['One-liner']
            return (
              <div key={idea.id} className="card" style={{
                padding: '18px 20px',
                borderLeft: idea.pinned ? '3px solid var(--green)' : '1px solid var(--border)',
                borderRadius: idea.pinned ? '0 12px 12px 0' : '12px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '4px',
                        background: c.bg, color: c.color, border: `1px solid ${c.border}`,
                        letterSpacing: '0.04em', textTransform: 'uppercase',
                      }}>{idea.type}</span>
                      {idea.pinned && (
                        <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Pinned</span>
                      )}
                      <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: 'auto' }}>{timeAgo(idea.created_at)}</span>
                    </div>
                    <p style={{
                      fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.7',
                      fontFamily: idea.type === 'Dialogue' || idea.type === 'One-liner' ? 'var(--font-display)' : 'var(--font-ui)',
                      fontStyle: idea.type === 'Dialogue' ? 'italic' : 'normal',
                    }}>{idea.text}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                    <button onClick={() => togglePin(idea.id, idea.pinned)} style={{
                      background: idea.pinned ? 'var(--green-pale)' : 'transparent',
                      border: '1px solid var(--border)', borderRadius: '6px',
                      padding: '5px 8px', cursor: 'pointer', fontSize: '12px',
                      color: idea.pinned ? 'var(--green)' : 'var(--text-soft)',
                      fontWeight: '600', transition: 'all 0.15s ease', minWidth: '48px',
                    }}>{idea.pinned ? 'Pinned' : 'Pin'}</button>
                    <button onClick={() => setPromoteId(promoteId === idea.id ? null : idea.id)} style={{
                      background: 'transparent', border: '1px solid var(--border)',
                      borderRadius: '6px', padding: '5px 8px', cursor: 'pointer',
                      fontSize: '12px', color: 'var(--text-soft)', transition: 'all 0.15s ease',
                    }}>Use</button>
                    <button onClick={() => deleteIdea(idea.id)} style={{
                      background: 'transparent', border: '1px solid var(--border)',
                      borderRadius: '6px', padding: '5px 8px', cursor: 'pointer',
                      fontSize: '12px', color: '#9F1239', transition: 'all 0.15s ease',
                    }}>Delete</button>
                  </div>
                </div>

                {promoteId === idea.id && (
                  <div style={{ marginTop: '14px', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-mid)', marginBottom: '10px' }}>
                      Ready to build this into a full project?
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <a href="/projects/new" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>Start a new project</button>
                      </a>
                      <button className="btn-ghost" style={{ fontSize: '13px', padding: '8px 14px' }} onClick={() => setPromoteId(null)}>Not yet</button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
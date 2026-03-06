'use client'
import { useState } from 'react'

const TYPES = ['All', 'One-liner', 'Scene', 'Dialogue', 'Character', 'Theme', 'Title']

const mockIdeas = [
  { id: 1, type: 'One-liner', text: 'A hospice nurse who can hear the last thoughts of the dying — but only the regrets.', created: '2 days ago', pinned: true },
  { id: 2, type: 'Dialogue', text: '"You\'re not angry at me. You\'re angry at the version of me you invented." — "Maybe that version was better."', created: '3 days ago', pinned: false },
  { id: 3, type: 'Scene', text: 'Two estranged brothers at their mother\'s house. One is packing her things. The other just watches from the doorway and never enters the room.', created: '1 week ago', pinned: false },
  { id: 4, type: 'Title', text: 'The Distance Between Stations', created: '1 week ago', pinned: false },
  { id: 5, type: 'Theme', text: 'What we call forgiveness is often just exhaustion.', created: '2 weeks ago', pinned: true },
  { id: 6, type: 'Character', text: 'A man who has rehearsed his father\'s funeral speech for 20 years — his father is still alive.', created: '2 weeks ago', pinned: false },
  { id: 7, type: 'One-liner', text: 'A cartographer hired to map a country that doesn\'t want to be found.', created: '3 weeks ago', pinned: false },
]

const typeColors = {
  'One-liner':  { bg: '#FFF8E6', color: '#92400E', border: '#FDE68A' },
  'Scene':      { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Dialogue':   { bg: '#EFF6FF', color: '#1E40AF', border: '#BFDBFE' },
  'Character':  { bg: '#FDF4FF', color: '#6B21A8', border: '#E9D5FF' },
  'Theme':      { bg: '#FFF1F2', color: '#9F1239', border: '#FECDD3' },
  'Title':      { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
}

export default function IdeasPage() {
  const [ideas, setIdeas] = useState(mockIdeas)
  const [filter, setFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [newIdea, setNewIdea] = useState({ type: 'One-liner', text: '' })
  const [search, setSearch] = useState('')
  const [promoteId, setPromoteId] = useState(null)

  const filtered = ideas
    .filter(i => filter === 'All' || i.type === filter)
    .filter(i => i.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.pinned - a.pinned)

  function handleAdd() {
    if (!newIdea.text.trim()) return
    setIdeas(prev => [{
      id: Date.now(), type: newIdea.type, text: newIdea.text,
      created: 'Just now', pinned: false,
    }, ...prev])
    setNewIdea({ type: 'One-liner', text: '' })
    setShowForm(false)
  }

  function togglePin(id) {
    setIdeas(prev => prev.map(i => i.id === id ? { ...i, pinned: !i.pinned } : i))
  }

  function deleteIdea(id) {
    setIdeas(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
          <div>
            <div className="badge" style={{ marginBottom: '12px' }}>Idea Bank</div>
            <h1 style={{ fontSize: '32px', marginBottom: '6px' }}>Your Ideas</h1>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px', maxWidth: '480px', lineHeight: '1.65' }}>
              One-liners, fragments, overheard dialogue, half-formed characters. Nothing is too small. Drop it here before it disappears.
            </p>
          </div>
          <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Capture idea'}
          </button>
        </div>
      </div>

      {/* Capture form */}
      {showForm && (
        <div className="fade-up card" style={{ padding: '24px', marginBottom: '28px', border: '2px solid var(--green)' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '6px' }}>Capture an idea</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '18px' }}>
            Don't edit it. Don't explain it. Just write it down exactly as it came to you.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {TYPES.filter(t => t !== 'All').map(t => {
              const active = newIdea.type === t
              const c = typeColors[t]
              return (
                <button key={t} onClick={() => setNewIdea({ ...newIdea, type: t })} style={{
                  fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px',
                  border: active ? `1.5px solid ${c.color}` : '1px solid var(--border)',
                  background: active ? c.bg : '#fff',
                  color: active ? c.color : 'var(--text-soft)',
                  cursor: 'pointer', fontFamily: 'Source Sans 3, sans-serif',
                  letterSpacing: '0.03em',
                  transition: 'all 0.15s ease',
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
              newIdea.type === 'Character' ? 'Who is this person? What\'s the one thing that makes them interesting?' :
              newIdea.type === 'Theme' ? 'A statement, a question, or a contradiction...' :
              newIdea.type === 'Title' ? 'The title — even if you don\'t know the story yet...' :
              'Write it down...'
            }
            style={{ minHeight: '100px', marginBottom: '14px' }}
            value={newIdea.text}
            onChange={e => setNewIdea({ ...newIdea, text: e.target.value })}
            autoFocus
          />
          <div className="tip-box" style={{ marginBottom: '14px' }}>
            <strong>Craft note:</strong> The best ideas arrive uninvited. Your only job is to catch them. Judgment comes later — right now just get it on the page.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-primary" onClick={handleAdd} disabled={!newIdea.text.trim()} style={{ opacity: newIdea.text.trim() ? 1 : 0.4 }}>
              Save idea
            </button>
            <button className="btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Search + filter bar */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          className="input"
          style={{ maxWidth: '260px', fontSize: '13px', padding: '8px 12px' }}
          placeholder="Search ideas..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {TYPES.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              fontSize: '12px', fontWeight: filter === t ? '600' : '400',
              padding: '5px 12px', borderRadius: '20px',
              border: filter === t ? '1.5px solid var(--green)' : '1px solid var(--border)',
              background: filter === t ? 'var(--green-pale)' : '#fff',
              color: filter === t ? 'var(--green)' : 'var(--text-soft)',
              cursor: 'pointer', fontFamily: 'Source Sans 3, sans-serif',
              transition: 'all 0.15s ease',
            }}>{t}</button>
          ))}
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-soft)', marginLeft: 'auto' }}>
          {filtered.length} idea{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Ideas grid */}
      <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-soft)' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', marginBottom: '8px', color: 'var(--text-mid)' }}>Nothing here yet.</p>
            <p style={{ fontSize: '14px' }}>Every great story started as a fragment. Capture yours.</p>
          </div>
        )}
        {filtered.map(idea => {
          const c = typeColors[idea.type]
          return (
            <div key={idea.id} className="card" style={{
              padding: '18px 22px',
              borderLeft: idea.pinned ? '3px solid var(--green)' : '1px solid var(--border)',
              borderRadius: idea.pinned ? '0 12px 12px 0' : '12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '4px',
                      background: c.bg, color: c.color, border: `1px solid ${c.border}`,
                      fontFamily: 'Source Sans 3, sans-serif', letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>{idea.type}</span>
                    {idea.pinned && (
                      <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Source Sans 3, sans-serif' }}>Pinned</span>
                    )}
                    <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: 'auto' }}>{idea.created}</span>
                  </div>
                  <p style={{
                    fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.7',
                    fontFamily: idea.type === 'Dialogue' || idea.type === 'One-liner' ? 'Playfair Display, serif' : 'Source Sans 3, sans-serif',
                    fontStyle: idea.type === 'Dialogue' ? 'italic' : 'normal',
                  }}>
                    {idea.text}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                  <button
                    onClick={() => togglePin(idea.id)}
                    title={idea.pinned ? 'Unpin' : 'Pin'}
                    style={{
                      background: idea.pinned ? 'var(--green-pale)' : 'transparent',
                      border: '1px solid var(--border)', borderRadius: '6px',
                      padding: '5px 8px', cursor: 'pointer', fontSize: '12px',
                      color: idea.pinned ? 'var(--green)' : 'var(--text-soft)',
                      fontFamily: 'Source Sans 3, sans-serif', fontWeight: '600',
                      transition: 'all 0.15s ease',
                    }}>
                    {idea.pinned ? 'Pinned' : 'Pin'}
                  </button>
                  <button
                    onClick={() => setPromoteId(idea.id)}
                    style={{
                      background: 'transparent', border: '1px solid var(--border)',
                      borderRadius: '6px', padding: '5px 8px', cursor: 'pointer',
                      fontSize: '12px', color: 'var(--text-soft)',
                      fontFamily: 'Source Sans 3, sans-serif',
                      transition: 'all 0.15s ease',
                    }}>
                    Use
                  </button>
                  <button
                    onClick={() => deleteIdea(idea.id)}
                    style={{
                      background: 'transparent', border: '1px solid var(--border)',
                      borderRadius: '6px', padding: '5px 8px', cursor: 'pointer',
                      fontSize: '12px', color: '#9F1239',
                      fontFamily: 'Source Sans 3, sans-serif',
                      transition: 'all 0.15s ease',
                    }}>
                    Delete
                  </button>
                </div>
              </div>

              {/* Promote to project modal inline */}
              {promoteId === idea.id && (
                <div style={{ marginTop: '14px', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--text-mid)', marginBottom: '10px' }}>
                    Ready to build this into a full project?
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a href="/projects/new" style={{ textDecoration: 'none' }}>
                      <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>Start a new project from this</button>
                    </a>
                    <button className="btn-ghost" style={{ fontSize: '13px', padding: '8px 14px' }} onClick={() => setPromoteId(null)}>Not yet</button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </div>
  )
}
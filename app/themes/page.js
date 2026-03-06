'use client'
import { useState } from 'react'
import Link from 'next/link'

const mockThemes = [
  { id: 1, label: 'Forgiveness vs. justice', description: 'Is it possible to forgive someone who has not asked for it? Is justice still justice when the person seeking it is also guilty?', scenes: [1, 3, 5], pinned: true },
  { id: 2, label: 'What we inherit from our parents', description: 'How much of who we are is chosen vs. received? Can we separate ourselves from what made us?', scenes: [2, 4], pinned: false },
  { id: 3, label: 'The cost of silence', description: 'What happens when the things that need to be said go unsaid for twenty years?', scenes: [1, 2, 3], pinned: false },
]

const mockMotifs = [
  { id: 1, label: 'Unopened letters', description: 'Letters written but never sent appear in Act 1 (the father\'s desk), Act 2 (the hospital bag), and Act 3 (the final reveal). Each time the meaning shifts.' },
  { id: 2, label: 'The kitchen table', description: 'Every major confrontation happens at the kitchen table — the site of family and argument simultaneously.' },
]

export default function ThemesPage() {
  const [themes, setThemes] = useState(mockThemes)
  const [motifs, setMotifs] = useState(mockMotifs)
  const [activeTab, setActiveTab] = useState('themes')
  const [showAddTheme, setShowAddTheme] = useState(false)
  const [showAddMotif, setShowAddMotif] = useState(false)
  const [newTheme, setNewTheme] = useState({ label: '', description: '' })
  const [newMotif, setNewMotif] = useState({ label: '', description: '' })

  function addTheme() {
    if (!newTheme.label.trim()) return
    setThemes(prev => [...prev, { id: Date.now(), ...newTheme, scenes: [], pinned: false }])
    setNewTheme({ label: '', description: '' })
    setShowAddTheme(false)
  }

  function addMotif() {
    if (!newMotif.label.trim()) return
    setMotifs(prev => [...prev, { id: Date.now(), ...newMotif }])
    setNewMotif({ label: '', description: '' })
    setShowAddMotif(false)
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>

      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>&larr; Dashboard</Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: '30px', marginBottom: '6px' }}>Themes &amp; Motifs</h1>
            <p style={{ fontSize: '14px', color: 'var(--text-soft)', maxWidth: '520px', lineHeight: '1.65' }}>
              Track what your story is really about — beneath the plot. The ideas that keep surfacing. The images that recur. The questions you haven't fully answered.
            </p>
          </div>
        </div>
      </div>

      <div className="tip-box fade-up fade-up-delay-1" style={{ marginBottom: '28px' }}>
        <strong>Themes vs. motifs:</strong> A theme is a question or argument your story makes about human experience. A motif is a recurring image, object, or idea that accumulates meaning across scenes. Both are tools for giving your story resonance beyond its plot.
      </div>

      {/* Tabs */}
      <div className="tab-bar fade-up fade-up-delay-2" style={{ marginBottom: '28px' }}>
        <button className={`tab ${activeTab === 'themes' ? 'active' : ''}`} onClick={() => setActiveTab('themes')}>
          Themes ({themes.length})
        </button>
        <button className={`tab ${activeTab === 'motifs' ? 'active' : ''}`} onClick={() => setActiveTab('motifs')}>
          Motifs ({motifs.length})
        </button>
      </div>

      {activeTab === 'themes' && (
        <div className="fade-up">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>The central questions your story is asking.</p>
            <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }} onClick={() => setShowAddTheme(!showAddTheme)}>
              {showAddTheme ? 'Cancel' : '+ Add theme'}
            </button>
          </div>

          {showAddTheme && (
            <div className="card" style={{ padding: '22px', marginBottom: '20px', border: '2px solid var(--green)' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '14px' }}>New Theme</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Theme statement or question</label>
                  <input className="input" placeholder="e.g. Is loyalty worth its cost?" value={newTheme.label} onChange={e => setNewTheme({ ...newTheme, label: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>How does this surface in your story?</label>
                  <textarea className="input" style={{ minHeight: '70px' }} placeholder="Which scenes, characters, or moments carry this theme?" value={newTheme.description} onChange={e => setNewTheme({ ...newTheme, description: e.target.value })} />
                </div>
              </div>
              <div className="tip-box" style={{ margin: '12px 0' }}>
                <strong>Remember:</strong> Write your theme as a question, not an answer. "Is justice worth its cost?" is a theme. "Justice is always worth it" is a message.
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-primary" style={{ fontSize: '13px' }} onClick={addTheme} disabled={!newTheme.label.trim()} style={{ opacity: newTheme.label.trim() ? 1 : 0.4, fontSize: '13px' }}>Save theme</button>
                <button className="btn-ghost" style={{ fontSize: '13px' }} onClick={() => setShowAddTheme(false)}>Cancel</button>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {themes.map(t => (
              <div key={t.id} className="card" style={{ padding: '20px 24px', borderLeft: t.pinned ? '3px solid var(--green)' : '1px solid var(--border)', borderRadius: t.pinned ? '0 12px 12px 0' : '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', fontStyle: 'italic' }}>{t.label}</h3>
                  {t.pinned && <span className="badge" style={{ fontSize: '10px' }}>Primary theme</span>}
                </div>
                {t.description && <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{t.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'motifs' && (
        <div className="fade-up">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>Recurring images, objects, or phrases that accumulate meaning.</p>
            <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }} onClick={() => setShowAddMotif(!showAddMotif)}>
              {showAddMotif ? 'Cancel' : '+ Add motif'}
            </button>
          </div>

          {showAddMotif && (
            <div className="card" style={{ padding: '22px', marginBottom: '20px', border: '2px solid var(--green)' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '14px' }}>New Motif</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>The motif</label>
                  <input className="input" placeholder="e.g. Unopened letters" value={newMotif.label} onChange={e => setNewMotif({ ...newMotif, label: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Where and how does it appear?</label>
                  <textarea className="input" style={{ minHeight: '70px' }} placeholder="Describe where it appears and how its meaning shifts each time..." value={newMotif.description} onChange={e => setNewMotif({ ...newMotif, description: e.target.value })} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button className="btn-primary" style={{ fontSize: '13px', opacity: newMotif.label.trim() ? 1 : 0.4 }} onClick={addMotif} disabled={!newMotif.label.trim()}>Save motif</button>
                <button className="btn-ghost" style={{ fontSize: '13px' }} onClick={() => setShowAddMotif(false)}>Cancel</button>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {motifs.map(m => (
              <div key={m.id} className="card" style={{ padding: '20px 24px' }}>
                <h3 style={{ fontSize: '16px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', marginBottom: '8px' }}>{m.label}</h3>
                {m.description && <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{m.description}</p>}
              </div>
            ))}
          </div>

          <div className="tip-box" style={{ marginTop: '24px' }}>
            <strong>How motifs work:</strong> A motif gains power through repetition and variation. The first time it appears, it is just an image. The second time, the audience notices. The third time, it carries the full weight of everything that came before.
          </div>
        </div>
      )}

    </div>
  )
}
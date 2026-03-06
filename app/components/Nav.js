'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// SVG icons — no emoji
const FrameworkIcon = ({ id, size = 22 }) => {
  const style = { width: size, height: size, flexShrink: 0 }
  if (id === 'save-the-cat') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  )
  if (id === 'heros-journey') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  )
  if (id === 'story-circle') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
    </svg>
  )
  // freeform
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  )
}

const frameworks = [
  {
    id: 'save-the-cat',
    name: 'Save the Cat',
    author: 'Blake Snyder',
    acts: '3 Acts · 15 Beats',
    description: 'The most widely used Hollywood structure. Blake Snyder mapped 15 specific "beats" to exact page numbers in a screenplay. It\'s prescriptive by design — and it works.',
    beats: ['Opening Image', 'Theme Stated', 'Set-Up', 'Catalyst', 'Debate', 'Break into Two', 'B Story', 'Fun & Games', 'Midpoint', 'Bad Guys Close In', 'All Is Lost', 'Dark Night of the Soul', 'Break into Three', 'Finale', 'Final Image'],
    tip: 'The "Save the Cat" moment — an early scene where your hero does something likeable — is what hooks your audience before the story kicks in.',
  },
  {
    id: 'heros-journey',
    name: "Hero's Journey",
    author: 'Joseph Campbell',
    acts: '3 Acts · 12 Stages',
    description: 'The mythic structure Campbell identified across thousands of years of storytelling — from ancient myths to Star Wars. Not a formula, but a map of human transformation.',
    beats: ['Ordinary World', 'Call to Adventure', 'Refusal of the Call', 'Meeting the Mentor', 'Crossing the Threshold', 'Tests, Allies, Enemies', 'Approach to the Inmost Cave', 'The Ordeal', 'Reward', 'The Road Back', 'Resurrection', 'Return with the Elixir'],
    tip: 'The "Ordinary World" is not boring setup — it\'s the baseline you\'ll destroy. Make it specific and lovable so the loss means something.',
  },
  {
    id: 'story-circle',
    name: 'Story Circle',
    author: 'Dan Harmon',
    acts: '1 Circle · 8 Steps',
    description: 'Harmon distilled Campbell into 8 steps that loop — character needs something, goes to get it, pays a price, comes back changed. Used on Community, Rick & Morty, and countless TV pilots.',
    beats: ['You (character in zone of comfort)', 'Need (they want something)', 'Go (into unfamiliar situation)', 'Search (adapt, struggle, work)', 'Find (get what they wanted)', 'Take (pay a price for it)', 'Return (back to familiar)', 'Change (they are different)'],
    tip: 'Every episode of a great TV show is its own complete Story Circle. So is every scene. The smaller you apply it, the tighter your writing gets.',
  },
  {
    id: 'freeform',
    name: 'Freeform',
    author: 'Your instincts',
    acts: 'No template',
    description: 'No imposed structure. You capture scenes, characters, and themes as they come. Eve organizes and tracks — the shape of the story is entirely yours.',
    beats: [],
    tip: 'Freeform doesn\'t mean unstructured — it means the structure comes from the story, not the other way around. Track your scenes and the pattern will emerge.',
  },
]

export default function NewProject() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ title: '', type: 'Novel', logline: '' })

  const fw = frameworks.find(f => f.id === selected)

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Step {step} of 2
        </p>
        <h1 style={{ fontSize: '30px', marginBottom: '8px' }}>
          {step === 1 ? 'Choose your framework' : `Set up "${form.title || 'your story'}"`}
        </h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '15px' }}>
          {step === 1
            ? 'Read the descriptions. Pick the one that feels right. You can always change it later.'
            : 'Just the basics — you can fill everything else in as you go.'}
        </p>
      </div>

      {step === 1 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {frameworks.map(f => (
              <div
                key={f.id}
                onClick={() => setSelected(f.id)}
                className="card"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  border: selected === f.id ? '2px solid var(--green)' : '1px solid var(--border)',
                  background: selected === f.id ? 'var(--green-pale)' : '#fff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '8px',
                      background: selected === f.id ? 'var(--green)' : 'var(--green-pale)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: selected === f.id ? '#fff' : 'var(--green)',
                      flexShrink: 0,
                    }}>
                      <FrameworkIcon id={f.id} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', marginBottom: '2px' }}>{f.name}</h3>
                      <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>by {f.author} · {f.acts}</p>
                    </div>
                  </div>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    border: selected === f.id ? 'none' : '2px solid var(--border)',
                    background: selected === f.id ? 'var(--green)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {selected === f.id && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '12px' }}>
                  {f.description}
                </p>

                <div className="tip-box">
                  <strong>Craft tip:</strong> {f.tip}
                </div>

                {f.beats.length > 0 && (
                  <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {f.beats.map((b, i) => (
                      <span key={i} style={{
                        fontSize: '11px', padding: '2px 8px', borderRadius: '4px',
                        background: '#fff', border: '1px solid var(--green-border)',
                        color: 'var(--text-mid)',
                      }}>{b}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="btn-primary"
            disabled={!selected}
            onClick={() => setStep(2)}
            style={{ opacity: selected ? 1 : 0.4, cursor: selected ? 'pointer' : 'not-allowed', fontSize: '15px', padding: '12px 28px' }}
          >
            Continue with {fw?.name || '...'} →
          </button>
        </>
      )}

      {step === 2 && (
        <div className="fade-up" style={{ maxWidth: '560px' }}>
          <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px',
                background: 'var(--green)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#fff', flexShrink: 0,
              }}>
                <FrameworkIcon id={fw.id} size={16} />
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)' }}>{fw.name}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{fw.acts}</p>
              </div>
              <button
                onClick={() => setStep(1)}
                style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-soft)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Change
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                  Story title <span style={{ color: 'var(--text-soft)', fontWeight: '400' }}>(can be a working title)</span>
                </label>
                <input
                  className="input"
                  placeholder="e.g. The Long Road Home"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Format</label>
                <select
                  className="input"
                  value={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                >
                  {['Novel', 'Short Story', 'Screenplay', 'TV Pilot', 'Novella', 'Memoir', 'Other'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '4px' }}>
                  Logline <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(optional — one sentence)</span>
                </label>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '6px' }}>
                  A logline answers: who wants what, and what stands in the way?
                </p>
                <textarea
                  className="input"
                  placeholder="e.g. A disgraced war correspondent returns to her hometown to care for a dying father she hasn't spoken to in twenty years."
                  value={form.logline}
                  onChange={e => setForm({ ...form, logline: e.target.value })}
                  style={{ minHeight: '80px' }}
                />
              </div>
            </div>
          </div>

          <div className="tip-box" style={{ marginBottom: '24px' }}>
            <strong>Don't overthink the title or logline.</strong> Both can change. The point is to give your story a home so you can keep building it.
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-ghost" onClick={() => setStep(1)}>← Back</button>
            <button
              className="btn-primary"
              disabled={!form.title}
              style={{ opacity: form.title ? 1 : 0.4, fontSize: '15px', padding: '12px 28px' }}
              onClick={() => router.push('/dashboard')}
            >
              Create project →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
'use client'
import { useState } from 'react'
import Link from 'next/link'

const sessionChecklist = {
  'save-the-cat': [
    { id: 'opening-image', section: 'Act 1', label: 'Opening Image defined', question: 'What is the very first image of your story? It should be the opposite of your Final Image.', tip: 'The Opening Image is a snapshot of your protagonist\'s problem, before anything changes. Keep it visual and specific.' },
    { id: 'theme-stated', section: 'Act 1', label: 'Theme stated by page 5', question: 'What does someone say to your protagonist early on that they don\'t yet understand? This is your theme.', tip: 'The theme is rarely stated by the hero — it\'s usually said TO them. They\'ll only understand it at the end.' },
    { id: 'catalyst', section: 'Act 1', label: 'Catalyst / inciting incident', question: 'What happens around page 12 that changes your protagonist\'s world? This is the event that kicks the story into motion.', tip: 'The catalyst is done TO the hero, not BY them. It forces them to respond.' },
    { id: 'break-into-two', section: 'Act 1 → 2', label: 'Break into Two moment', question: 'What choice does your protagonist make at the end of Act 1 that they cannot take back?', tip: 'This is the most important beat. The hero must actively CHOOSE to enter Act 2 — it cannot happen to them.' },
    { id: 'midpoint', section: 'Act 2', label: 'Midpoint identified', question: 'What happens exactly in the middle that raises the stakes and changes the direction of the story?', tip: 'The midpoint is either a "false victory" (things seem great, then get worse) or a "false defeat" (things seem terrible, then rally).' },
    { id: 'all-is-lost', section: 'Act 2', label: 'All Is Lost moment', question: 'What is the lowest point for your protagonist? What do they lose here?', tip: 'The All Is Lost beat often involves a death — literal or symbolic. Something must die for the hero to be reborn.' },
    { id: 'finale', section: 'Act 3', label: 'Finale structure sketched', question: 'How does your protagonist use everything they\'ve learned to win? What does winning look like?', tip: 'The finale should mirror the setup — use characters, locations, and objects from Act 1 in new, meaningful ways.' },
    { id: 'final-image', section: 'Act 3', label: 'Final Image defined', question: 'What is the last image of your story? It should be the opposite of your Opening Image.', tip: 'The Final Image proves the change is real. If your hero was alone at the start, they should be surrounded by love at the end — or vice versa.' },
  ],
}

const demoProject = {
  id: 1,
  title: 'The Long Road Home',
  framework: 'save-the-cat',
  framework_name: 'Save the Cat',
}

export default function Session() {
  const checklist = sessionChecklist['save-the-cat']
  const [answers, setAnswers] = useState({})
  const [expanded, setExpanded] = useState(checklist[0].id)
  const [saved, setSaved] = useState({})

  const completed = Object.keys(saved).filter(k => saved[k]).length
  const pct = Math.round((completed / checklist.length) * 100)

  function handleSave(id) {
    if (answers[id]?.trim()) {
      setSaved(prev => ({ ...prev, [id]: true }))
      // Auto-expand next unanswered
      const idx = checklist.findIndex(c => c.id === id)
      const next = checklist.slice(idx + 1).find(c => !saved[c.id])
      if (next) setExpanded(next.id)
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
          ← Dashboard
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
              Session Mode · {demoProject.framework_name}
            </p>
            <h1 style={{ fontSize: '28px', marginBottom: '4px' }}>{demoProject.title}</h1>
            <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Work through one question at a time. Save each answer before moving on.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '28px', fontFamily: 'Lora, serif', color: 'var(--green)', fontWeight: '700' }}>{pct}%</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{completed} of {checklist.length} beats</p>
          </div>
        </div>

        {/* Progress */}
        <div style={{ marginTop: '20px', height: '6px', background: 'var(--green-pale)', borderRadius: '3px' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: 'var(--green)', borderRadius: '3px', transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Checklist */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {checklist.map((item, i) => {
          const isDone = saved[item.id]
          const isOpen = expanded === item.id
          return (
            <div
              key={item.id}
              className="card"
              style={{
                overflow: 'hidden',
                border: isDone ? '1px solid var(--green-border)' : isOpen ? '2px solid var(--green)' : '1px solid var(--border)',
                background: isDone ? 'var(--green-pale)' : '#fff',
              }}
            >
              {/* Row */}
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', cursor: 'pointer' }}
                onClick={() => setExpanded(isOpen ? null : item.id)}
              >
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                  background: isDone ? 'var(--green)' : 'transparent',
                  border: isDone ? 'none' : '2px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {isDone && <span style={{ color: '#fff', fontSize: '11px' }}>✓</span>}
                  {!isDone && <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontWeight: '600' }}>{i + 1}</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: isDone ? 'var(--green)' : 'var(--text-dark)', textDecoration: isDone ? 'line-through' : 'none' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{item.section}</p>
                </div>
                <span style={{ color: 'var(--text-soft)', fontSize: '12px' }}>{isOpen ? '▲' : '▼'}</span>
              </div>

              {/* Expanded */}
              {isOpen && (
                <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '500', margin: '16px 0 8px', lineHeight: '1.5' }}>
                    {item.question}
                  </p>
                  <div className="tip-box" style={{ marginBottom: '14px' }}>
                    <strong>Craft tip:</strong> {item.tip}
                  </div>
                  <textarea
                    className="input"
                    placeholder="Write your answer here..."
                    value={answers[item.id] || ''}
                    onChange={e => setAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                    style={{ minHeight: '90px', marginBottom: '12px' }}
                  />
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="btn-primary"
                      onClick={() => handleSave(item.id)}
                      disabled={!answers[item.id]?.trim()}
                      style={{ opacity: answers[item.id]?.trim() ? 1 : 0.4 }}
                    >
                      Save & continue →
                    </button>
                    <button className="btn-ghost" onClick={() => setExpanded(null)}>
                      Come back later
                    </button>
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
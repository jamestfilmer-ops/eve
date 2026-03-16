'use client'
import { useState } from 'react'
import Link from 'next/link'

const LEVEL_COLORS = {
  'Beginner':     { bg: '#EFF6E7', color: '#2D5016' },
  'Intermediate': { bg: '#FEF3E2', color: '#B5700A' },
  'Advanced':     { bg: '#F0F2FF', color: '#3D52C4' },
  'Essentials':   { bg: '#EFF6E7', color: '#2D5016' },
  'Short Story':  { bg: '#F5F0FF', color: '#7C3AED' },
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{
        flexShrink: 0,
        transition: 'transform 0.28s cubic-bezier(0.22,1,0.36,1)',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        color: open ? 'var(--green)' : 'var(--text-soft)',
      }}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LessonCard({ item, writtenSlugs }) {
  const isWritten = writtenSlugs.includes(item.slug)
  const levelStyle = LEVEL_COLORS[item.level] || LEVEL_COLORS['Beginner']

  if (!isWritten) {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '16px 18px',
        opacity: 0.52,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{
            fontSize: '10px', fontWeight: '600', fontFamily: 'var(--font-mono)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '2px 8px', borderRadius: '4px',
            background: levelStyle.bg, color: levelStyle.color,
          }}>
            {item.level}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{item.time}</span>
        </div>
        <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-display)', color: 'var(--text-mid)', lineHeight: '1.4', marginBottom: '6px', flex: 0 }}>
          {item.title}
        </h3>
        <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>Coming soon</span>
      </div>
    )
  }

  return (
    <Link href={`/learn/${item.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div className="card" style={{
        padding: '16px 18px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{
            fontSize: '10px', fontWeight: '600', fontFamily: 'var(--font-mono)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '2px 8px', borderRadius: '4px',
            background: levelStyle.bg, color: levelStyle.color,
          }}>
            {item.level}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{item.time}</span>
        </div>
        <h3 style={{
          fontSize: '13px', fontFamily: 'var(--font-display)',
          color: 'var(--text-dark)', lineHeight: '1.4',
          marginBottom: '6px', flex: 0,
        }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.55', flex: 1, margin: 0 }}>
          {item.preview}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', margin: '12px 0 0' }}>
          Read &rarr;
        </p>
      </div>
    </Link>
  )
}

export default function CategoryList({ lessons, writtenSlugs }) {
  // Default: first category open, rest closed
  const [openCats, setOpenCats] = useState(() => {
    const init = {}
    lessons.forEach((cat, i) => { init[i] = i === 0 })
    return init
  })

  const toggle = (i) => {
    setOpenCats(prev => ({ ...prev, [i]: !prev[i] }))
  }

  const expandAll = () => {
    const all = {}
    lessons.forEach((_, i) => { all[i] = true })
    setOpenCats(all)
  }

  const collapseAll = () => {
    const none = {}
    lessons.forEach((_, i) => { none[i] = false })
    setOpenCats(none)
  }

  const anyOpen = Object.values(openCats).some(Boolean)

  return (
    <div>
      {/* Expand/collapse all controls */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button
          onClick={anyOpen ? collapseAll : expandAll}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600',
            color: 'var(--green)', padding: '4px 0',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            {anyOpen
              ? <path d="M2 4l4-3 4 3M2 8l4 3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              : <path d="M2 3l4 3-4 3M7 3l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            }
          </svg>
          {anyOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      {/* Category accordions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {lessons.map((cat, ci) => {
          const isOpen = openCats[ci]
          const writtenInCat = cat.items.filter(i => writtenSlugs.includes(i.slug)).length
          const totalInCat = cat.items.length

          return (
            <div
              key={ci}
              className="reveal"
              style={{
                background: '#fff',
                border: '1px solid',
                borderColor: isOpen ? 'var(--green-border)' : 'var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
                boxShadow: isOpen ? '0 2px 12px rgba(45,80,22,0.08)' : 'var(--shadow-xs)',
              }}
            >
              {/* Accordion trigger */}
              <button
                onClick={() => toggle(ci)}
                style={{
                  width: '100%',
                  background: isOpen ? 'var(--green-pale)' : 'transparent',
                  border: 'none',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'left',
                  transition: 'background 0.18s ease',
                }}
              >
                {/* Green bar */}
                <div style={{
                  width: '3px', height: '20px',
                  background: 'var(--green)',
                  borderRadius: '2px', flexShrink: 0,
                  opacity: isOpen ? 1 : 0.5,
                  transition: 'opacity 0.18s ease',
                }} />

                {/* Category name */}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: isOpen ? 'var(--green)' : 'var(--text-dark)',
                  flex: 1,
                  transition: 'color 0.18s ease',
                }}>
                  {cat.category}
                </span>

                {/* Written count */}
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-soft)',
                  flexShrink: 0,
                }}>
                  {writtenInCat}/{totalInCat}
                </span>

                {/* Badge */}
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: '600',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: isOpen ? 'var(--green)' : 'var(--off-white)',
                  color: isOpen ? '#fff' : 'var(--text-soft)',
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--green)' : 'var(--border)',
                  flexShrink: 0,
                  transition: 'all 0.18s ease',
                }}>
                  {cat.badge}
                </span>

                <ChevronIcon open={isOpen} />
              </button>

              {/* Accordion body */}
              {isOpen && (
                <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--green-border)' }}>
                  <div
                    className="card-grid"
                    style={{ marginTop: '16px' }}
                  >
                    {cat.items.map((item, i) => (
                      <LessonCard key={i} item={item} writtenSlugs={writtenSlugs} />
                    ))}
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

'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

function ChevronIcon({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{ flexShrink:0, transition:'transform 0.32s cubic-bezier(0.22,1,0.36,1)', transform:open?'rotate(180deg)':'rotate(0deg)', color:open?'var(--green)':'var(--text-soft)' }}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ProgressBar({ read, total }) {
  const pct = total === 0 ? 0 : Math.round((read / total) * 100)
  const done = pct === 100
  return (
    <div style={{ width:'64px', height:'4px', borderRadius:'2px', background:'var(--border)', overflow:'hidden', flexShrink:0 }}>
      <div style={{
        height:'100%', borderRadius:'2px',
        background: done ? 'var(--green)' : 'linear-gradient(90deg, var(--green-light), var(--green))',
        width:`${pct}%`,
        transition:'width 0.5s var(--ease-out)',
      }}/>
    </div>
  )
}

function LessonCard({ item, writtenSlugs, isRead, onRead }) {
  const isWritten = writtenSlugs.includes(item.slug)

  if (!isWritten) {
    return (
      <div style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:'12px', padding:'16px 18px', opacity:0.45, height:'100%', display:'flex', flexDirection:'column', gap:0 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'8px' }}>
          <span style={{ fontSize:'11px', color:'var(--text-soft)', fontFamily:'var(--font-mono)' }}>{item.time}</span>
        </div>
        <h3 style={{ fontSize:'13px', fontFamily:'var(--font-display)', color:'var(--text-mid)', lineHeight:'1.4', marginBottom:'6px', flex:0 }}>{item.title}</h3>
        <span style={{ fontSize:'11px', color:'var(--text-soft)', fontFamily:'var(--font-mono)', marginTop:'auto' }}>Coming soon</span>
      </div>
    )
  }

  return (
    <Link href={`/learn/${item.slug}`} style={{ textDecoration:'none', display:'block', height:'100%' }} onClick={() => onRead(item.slug)}>
      <div className="card" style={{
        padding:'16px 18px', height:'100%', display:'flex', flexDirection:'column', gap:0,
        borderLeft: isRead ? '3px solid var(--green)' : '3px solid transparent',
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'8px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            {isRead && (
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink:0 }}>
                <circle cx="6.5" cy="6.5" r="5.5" fill="var(--green-pale)" stroke="var(--green)" strokeWidth="1"/>
                <path d="M4 6.5l1.8 1.8L9 4.5" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            <span style={{ fontSize:'11px', color: isRead ? 'var(--green)' : 'var(--text-soft)', fontFamily:'var(--font-mono)', fontWeight: isRead ? '600' : '400' }}>
              {isRead ? 'Read' : item.time}
            </span>
          </div>
          {!isRead && <span style={{ fontSize:'11px', color:'var(--text-soft)', fontFamily:'var(--font-mono)' }}>{item.time}</span>}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'6px' }}>
          <h3 style={{ fontSize:'13px', fontFamily:'var(--font-display)', color:'var(--text-dark)', lineHeight:'1.4', flex:1, margin:0 }}>{item.title}</h3>
          {!FREE_SLUGS.has(item.slug) && (
            <span title="Writer tier" style={{ flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', width:'18px', height:'18px', borderRadius:'4px', background:'var(--green-pale)', border:'1px solid var(--green-border)' }}>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
                <rect x="1" y="4.5" width="7" height="5" rx="1.2" fill="var(--green)"/>
                <path d="M3 4.5V3.2a1.5 1.5 0 013 0v1.3" stroke="var(--green)" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              </svg>
            </span>
          )}
        </div>
        <p style={{ fontSize:'12px', color:'var(--text-soft)', lineHeight:'1.55', flex:1, margin:0 }}>{item.preview}</p>
        <p style={{ fontSize:'12px', color:'var(--green)', fontWeight:'600', margin:'10px 0 0' }}>
          {FREE_SLUGS.has(item.slug) ? 'Read →' : 'Unlock →'}
        </p>
      </div>
    </Link>
  )
}

// Animated accordion body using CSS max-height
function AccordionBody({ isOpen, children }) {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    if (isOpen) {
      setHeight(ref.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  // When open, update height if children change (re-render)
  useEffect(() => {
    if (isOpen && ref.current) {
      const ro = new ResizeObserver(() => {
        if (ref.current) setHeight(ref.current.scrollHeight)
      })
      ro.observe(ref.current)
      return () => ro.disconnect()
    }
  }, [isOpen])

  return (
    <div style={{
      overflow:'hidden',
      maxHeight: isOpen ? `${height}px` : '0px',
      transition:'max-height 0.38s cubic-bezier(0.22,1,0.36,1)',
    }}>
      <div ref={ref}>
        {children}
      </div>
    </div>
  )
}

const STORAGE_KEY = 'eve_read_lessons'

const FREE_SLUGS = new Set([
  'what-is-a-story', 'character-before-plot', 'the-first-page',
  'how-to-start', 'fear-and-writing', 'finding-your-story', 'vonnegut-craft',
  'what-a-scene-does', 'want-vs-need', 'the-lie', 'dialogue-subtext',
  'the-rewrite', 'act-breaks',
])

export default function CategoryList({ lessons, writtenSlugs }) {
  const [openCats, setOpenCats] = useState(() => {
    const init = {}
    lessons.forEach((cat, i) => { init[i] = i === 0 })
    return init
  })
  const [readSlugs, setReadSlugs] = useState([])

  // Load read lessons from localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      setReadSlugs(stored)
    } catch {}
  }, [])

  function markRead(slug) {
    setReadSlugs(prev => {
      if (prev.includes(slug)) return prev
      const next = [...prev, slug]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const toggle = (i) => setOpenCats(prev => ({ ...prev, [i]: !prev[i] }))

  const expandAll  = () => { const all = {}; lessons.forEach((_,i) => { all[i]=true  }); setOpenCats(all) }
  const collapseAll= () => { const none= {}; lessons.forEach((_,i) => { none[i]=false}); setOpenCats(none) }
  const anyOpen = Object.values(openCats).some(Boolean)

  const totalWritten  = writtenSlugs.length
  const totalRead     = readSlugs.filter(s => writtenSlugs.includes(s)).length
  const overallPct    = totalWritten === 0 ? 0 : Math.round((totalRead / totalWritten) * 100)

  return (
    <div>
      {/* Overall progress */}
      {totalRead > 0 && (
        <div style={{ background:'var(--green-pale)', border:'1px solid var(--green-border)', borderRadius:'10px', padding:'12px 18px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink:0 }}>
            <path d="M7.5 1L9.3 5.5H14L10.5 8.3 11.9 13 7.5 10.2 3.1 13l1.4-4.7L1 5.5h4.7z" fill="var(--green)"/>
          </svg>
          <span style={{ fontFamily:'var(--font-ui)', fontSize:'13px', color:'var(--text-dark)', fontWeight:'600' }}>
            {totalRead} of {totalWritten} lessons read
          </span>
          <div style={{ flex:1, minWidth:'120px' }}>
            <div style={{ height:'5px', borderRadius:'3px', background:'var(--green-border)', overflow:'hidden' }}>
              <div style={{ height:'100%', borderRadius:'3px', background:'var(--green)', width:`${overallPct}%`, transition:'width 0.5s var(--ease-out)' }}/>
            </div>
          </div>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--green)', fontWeight:'700' }}>{overallPct}%</span>
        </div>
      )}

      {/* Expand/collapse controls */}
      <div style={{ display:'flex', gap:'12px', justifyContent:'flex-end', marginBottom:'16px' }}>
        <button onClick={anyOpen ? collapseAll : expandAll} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-ui)', fontSize:'12px', fontWeight:'600', color:'var(--green)', padding:'4px 0', display:'flex', alignItems:'center', gap:'5px' }}>
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
      <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
        {lessons.map((cat, ci) => {
          const isOpen = openCats[ci]
          const writtenInCat = cat.items.filter(i => writtenSlugs.includes(i.slug)).length
          const readInCat    = cat.items.filter(i => readSlugs.includes(i.slug) && writtenSlugs.includes(i.slug)).length

          return (
            <div key={ci} className="reveal" style={{
              background:'#fff',
              border:'1px solid',
              borderColor: isOpen ? 'var(--green-border)' : 'var(--border)',
              borderRadius:'12px',
              overflow:'hidden',
              transition:'border-color 0.22s ease, box-shadow 0.22s ease',
              boxShadow: isOpen ? '0 2px 12px rgba(45,80,22,0.08)' : 'var(--shadow-xs)',
            }}>
              {/* Accordion trigger */}
              <button onClick={() => toggle(ci)} style={{
                width:'100%',
                background: isOpen ? 'var(--green-pale)' : 'transparent',
                border:'none', padding:'14px 20px', cursor:'pointer',
                display:'flex', alignItems:'center', gap:'12px',
                textAlign:'left',
                transition:'background 0.18s ease',
                lineHeight: 1,
              }}>
                <div style={{ width:'3px', height:'20px', background:'var(--green)', borderRadius:'2px', flexShrink:0, opacity:isOpen?1:0.4, transition:'opacity 0.18s ease' }}/>
                <span style={{ fontFamily:'var(--font-display)', fontSize:'15px', fontWeight:'700', color:isOpen?'var(--green)':'var(--text-dark)', flex:1, transition:'color 0.18s ease' }}>
                  {cat.category}
                </span>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', flexShrink:0 }}>
                  <ProgressBar read={readInCat} total={writtenInCat} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-soft)', whiteSpace:'nowrap', lineHeight:1 }}>
                    {writtenInCat}/{cat.items.length}
                  </span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', fontWeight:'600', letterSpacing:'0.06em', textTransform:'uppercase', padding:'2px 8px', borderRadius:'4px', background:isOpen?'var(--green)':'var(--off-white)', color:isOpen?'#fff':'var(--text-soft)', border:'1px solid', borderColor:isOpen?'var(--green)':'var(--border)', transition:'all 0.18s ease', whiteSpace:'nowrap', lineHeight:1 }}>
                    {cat.badge}
                  </span>
                </div>
                <ChevronIcon open={isOpen} />
              </button>

              {/* Animated body */}
              <AccordionBody isOpen={isOpen}>
                <div style={{ padding:'0 20px 20px', borderTop:'1px solid var(--green-border)' }}>
                  <div className="card-grid" style={{ marginTop:'16px' }}>
                    {cat.items.map((item, i) => (
                      <LessonCard
                        key={i}
                        item={item}
                        writtenSlugs={writtenSlugs}
                        isRead={readSlugs.includes(item.slug)}
                        onRead={markRead}
                      />
                    ))}
                  </div>
                </div>
              </AccordionBody>
            </div>
          )
        })}
      </div>
    </div>
  )
}

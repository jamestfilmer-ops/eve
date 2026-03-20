'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'eve_read_lessons'

function TrackProgressBar({ lessons }) {
  const [readSlugs, setReadSlugs] = useState([])
  useEffect(() => {
    try { setReadSlugs(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')) } catch {}
  }, [])

  const readCount = lessons.filter(l => readSlugs.includes(l.slug)).length
  const pct = lessons.length === 0 ? 0 : Math.round((readCount / lessons.length) * 100)
  if (readCount === 0) return null

  return (
    <div style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'8px' }}>
      <div style={{ flex:1, height:'4px', borderRadius:'2px', background:'var(--border)', overflow:'hidden' }}>
        <div style={{ height:'100%', borderRadius:'2px', background: pct===100 ? 'var(--green)' : 'linear-gradient(90deg,var(--green-light),var(--green))', width:`${pct}%`, transition:'width 0.5s var(--ease-out)' }}/>
      </div>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color: pct===100 ? 'var(--green)' : 'var(--text-soft)', fontWeight: pct===100 ? '700' : '400', minWidth:'32px' }}>
        {readCount}/{lessons.length}
      </span>
    </div>
  )
}

export default function TracksClient({ tracks }) {
  return (
    <>
      {tracks.map(track => (
        <section key={track.id} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden' }}>
          {/* Track header */}
          <div style={{ padding:'22px 28px 18px', borderBottom:'1px solid var(--border)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'6px', flexWrap:'wrap' }}>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'10px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', padding:'3px 10px', borderRadius:'20px', background:`${track.levelColor}15`, color:track.levelColor, border:`1px solid ${track.levelColor}30` }}>{track.level}</span>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'11px', color:'var(--text-soft)' }}>{track.time}</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(17px,2.5vw,22px)', fontWeight:'700', color:'var(--text-dark)', marginBottom:'4px' }}>
              {track.title}
            </h2>
            <p style={{ fontFamily:'var(--font-ui)', fontSize:'13px', color:'var(--text-soft)', lineHeight:'1.6', maxWidth:'520px' }}>
              {track.description}
            </p>
            <TrackProgressBar lessons={track.lessons} />
          </div>

          {/* Lesson list */}
          <div>
            {track.lessons.map((lesson, i) => (
              <Link key={lesson.slug} href={`/learn/${lesson.slug}`} style={{ textDecoration:'none', display:'block' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'16px', padding:'13px 28px', borderBottom: i < track.lessons.length-1 ? '1px solid var(--border)' : 'none', transition:'background 0.12s' }}
                  className="track-lesson-row"
                >
                  <span style={{ width:'22px', height:'22px', borderRadius:'50%', flexShrink:0, background:'var(--green-pale)', border:'1px solid var(--green-border)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'JetBrains Mono,monospace', fontSize:'10px', fontWeight:'700', color:'var(--green)' }}>{i+1}</span>
                  <div style={{ flex:1 }}>
                    <span style={{ fontFamily:'var(--font-ui)', fontSize:'14px', fontWeight:'500', color:'var(--text-dark)' }}>{lesson.title}</span>
                    {lesson.note && <span style={{ fontFamily:'var(--font-ui)', fontSize:'12px', color:'var(--text-soft)', marginLeft:'8px' }}>— {lesson.note}</span>}
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px', flexShrink:0 }}>
                    <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'11px', color:'var(--text-soft)' }}>{lesson.time}</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M4.5 2.5l4 4-4 4" stroke="var(--text-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Start CTA */}
          <div style={{ padding:'14px 28px', borderTop:'1px solid var(--border)', background:'var(--off-white)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontFamily:'var(--font-ui)', fontSize:'13px', color:'var(--text-soft)' }}>
              {track.lessons.length} lessons · {track.time}
            </span>
            <Link href={`/learn/${track.lessons[0].slug}`} style={{ textDecoration:'none' }}>
              <button style={{ background:'var(--green)', color:'#fff', fontFamily:'var(--font-ui)', fontWeight:'700', fontSize:'13px', padding:'7px 16px', borderRadius:'7px', border:'none', cursor:'pointer' }}>
                Start this path →
              </button>
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}

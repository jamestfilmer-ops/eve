'use client'
import { useState } from 'react'

const tierOrder = { 'Tier 1': 0, 'Tier 2': 1, 'Tier 3': 2 }
const tierColors = { 'Tier 1': 'var(--green)', 'Tier 2': 'var(--text-mid)', 'Tier 3': 'var(--text-soft)' }
const tierBg = { 'Tier 1': 'var(--green-pale)', 'Tier 2': 'var(--off-white)', 'Tier 3': 'var(--off-white)' }

export default function MarketsClient({ markets }) {
  const [activeGenre, setActiveGenre] = useState('All')
  const genres = ['All', ...Array.from(new Set(markets.map(m => m.genre))).sort()]
  const filtered = markets.filter(m => activeGenre === 'All' || m.genre === activeGenre)
  const sorted = [...filtered].sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier])

  return (
    <div>
      {/* Genre filter */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {genres.map(g => (
          <button
            key={g}
            onClick={() => setActiveGenre(g)}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: activeGenre === g ? '700' : '400',
              padding: '5px 14px',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: activeGenre === g ? 'var(--green)' : 'var(--border)',
              background: activeGenre === g ? 'var(--green-pale)' : 'transparent',
              color: activeGenre === g ? 'var(--green)' : 'var(--text-mid)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {g}
          </button>
        ))}
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', alignSelf: 'center', marginLeft: '4px' }}>
          {sorted.length} markets
        </span>
      </div>

      {/* Markets list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {sorted.map((m, i) => (
          <a
            key={i}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green-border)'; e.currentTarget.style.boxShadow = 'var(--shadow-xs)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)' }}>{m.name}</span>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: tierBg[m.tier],
                    color: tierColors[m.tier],
                    border: `1px solid ${m.tier === 'Tier 1' ? 'var(--green-border)' : 'var(--border)'}`,
                  }}>{m.tier}</span>
                  {activeGenre === 'All' && (
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '9px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: 'var(--off-white)',
                      color: 'var(--text-soft)',
                      border: '1px solid var(--border)',
                    }}>{m.genre}</span>
                  )}
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', margin: 0, lineHeight: '1.5' }}>{m.note}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)' }}>
                  {m.pays ? 'Pays' : 'Non-paying'}
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5l7-7M9.5 2.5H3.5M9.5 2.5v6" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Tier legend */}
      <div style={{ marginTop: '20px', padding: '14px 18px', background: 'var(--off-white)', borderRadius: '10px', border: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}/>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)' }}><strong>Tier 1</strong> — Major/prestigious. Strong career signal.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-mid)', display: 'inline-block' }}/>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)' }}><strong>Tier 2</strong> — Solid midlist. Good career-building markets.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-soft)', display: 'inline-block' }}/>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)' }}><strong>Tier 3</strong> — Entry-level. Good for early credits and practice.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

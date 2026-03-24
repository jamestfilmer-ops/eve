// PaywallBlur — WSJ/NYT style fade-to-paywall for premium lessons
// Shows first 4 sentences, then fades to a CTA
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function PaywallBlur({ children }) {
  const [expanded, setExpanded] = useState(false)

  if (expanded) return <>{children}</>

  return (
    <div style={{ position: 'relative' }}>
      {/* Content preview — shows but fades */}
      <div style={{
        maxHeight: '320px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {children}
        {/* Fade gradient */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent 0%, var(--off-white) 75%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* CTA block */}
      <div style={{
        textAlign: 'center',
        padding: '32px 24px 8px',
        background: 'var(--off-white)',
      }}>
        {/* Lock icon */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--green-pale)',
          border: '1px solid var(--green-border)',
          marginBottom: '16px',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="3" y="8" width="12" height="9" rx="2" stroke="var(--green)" strokeWidth="1.5"/>
            <path d="M6 8V6a3 3 0 016 0v2" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px',
          fontWeight: '700',
          color: 'var(--text-dark)',
          marginBottom: '8px',
          lineHeight: '1.3',
        }}>
          This is a Writer lesson
        </p>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '14px',
          color: 'var(--text-mid)',
          maxWidth: '380px',
          margin: '0 auto 24px',
          lineHeight: '1.7',
        }}>
          Unlock every lesson, all 7 frameworks, and unlimited projects for less than a coffee a month.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/auth?signup=true&plan=writer" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'var(--green)',
              color: '#fff',
              fontFamily: 'var(--font-ui)',
              fontWeight: '700',
              fontSize: '14px',
              padding: '10px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}>
              Continue reading — $1.99/mo
            </button>
          </Link>
          <button
            onClick={() => setExpanded(true)}
            style={{
              background: 'transparent',
              color: 'var(--text-soft)',
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              padding: '10px 16px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              cursor: 'pointer',
            }}
          >
            Preview anyway
          </button>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-soft)',
          marginTop: '16px',
          letterSpacing: '0.05em',
        }}>
          Already a member? <Link href="/auth" style={{ color: 'var(--green)', textDecoration: 'none' }}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}

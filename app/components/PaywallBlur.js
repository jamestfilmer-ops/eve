// PaywallBlur — WSJ/NYT-style fade-to-paywall for premium lessons
// Shows the first content section fully, then fades mid-second-section
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function PaywallBlur({ children }) {
  const [expanded, setExpanded] = useState(false)

  if (expanded) return <>{children}</>

  return (
    <div style={{ position: 'relative' }}>
      {/* Content preview — shows first ~1.5 sections then cuts */}
      <div style={{
        maxHeight: '520px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {children}

        {/* Long fade — starts at 280px from bottom so it feels gradual */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '280px',
          background: 'linear-gradient(to bottom, rgba(245,242,236,0) 0%, rgba(245,242,236,0.6) 40%, var(--off-white) 75%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* CTA — tight, warm, low-pressure */}
      <div style={{
        textAlign: 'center',
        padding: '20px 24px 40px',
        background: 'var(--off-white)',
      }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--text-soft)',
          marginBottom: '12px',
        }}>
          Writer tier
        </p>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(18px, 2.5vw, 22px)',
          fontWeight: '700',
          color: 'var(--text-dark)',
          marginBottom: '10px',
          lineHeight: '1.3',
        }}>
          Keep reading for $1.99/month.
        </p>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '14px',
          color: 'var(--text-mid)',
          maxWidth: '360px',
          margin: '0 auto 24px',
          lineHeight: '1.7',
        }}>
          All 65 lessons. All 7 frameworks. Unlimited projects.
          Less than a coffee.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/auth?signup=true&plan=writer" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'var(--green)',
              color: '#fff',
              fontFamily: 'var(--font-ui)',
              fontWeight: '700',
              fontSize: '14px',
              padding: '11px 28px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.01em',
            }}>
              Continue reading
            </button>
          </Link>
          <button
            onClick={() => setExpanded(true)}
            style={{
              background: 'transparent',
              color: 'var(--text-soft)',
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              padding: '11px 18px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              cursor: 'pointer',
            }}
          >
            Preview anyway
          </button>
        </div>

        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '12px',
          color: 'var(--text-soft)',
          marginTop: '16px',
        }}>
          Already a member?{' '}
          <Link href="/auth" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

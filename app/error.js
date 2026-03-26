'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Eve error boundary caught:', error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--off-white)', padding: '24px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: '480px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '14px',
          background: 'var(--green-pale)', border: '1px solid var(--green-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700',
          color: 'var(--text-dark)', marginBottom: '10px',
        }}>
          Something went wrong
        </h1>
        <p style={{
          fontSize: '15px', color: 'var(--text-soft)', lineHeight: '1.7', marginBottom: '32px',
        }}>
          An unexpected error occurred. Your work is safe — this is just a display issue.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={reset}
            style={{
              background: 'var(--green)', color: '#fff',
              fontFamily: 'var(--font-ui)', fontWeight: '700',
              fontSize: '14px', padding: '11px 24px',
              borderRadius: '8px', border: 'none', cursor: 'pointer',
            }}
          >
            Try again
          </button>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent', color: 'var(--text-mid)',
              fontFamily: 'var(--font-ui)', fontWeight: '600',
              fontSize: '14px', padding: '11px 24px',
              borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer',
            }}>
              Go to dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

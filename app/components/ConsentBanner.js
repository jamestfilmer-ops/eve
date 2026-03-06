'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('eve_consent_dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem('eve_consent_dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'var(--green)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap',
    }}>
      <p style={{
        fontSize: '13px',
        color: 'rgba(255,255,255,0.85)',
        lineHeight: '1.6',
        margin: 0,
        fontFamily: 'Source Sans 3, sans-serif',
      }}>
        Eve uses essential cookies to keep you signed in.
        By continuing, you agree to our{' '}
        <Link href="/terms" style={{ color: '#fff', fontWeight: '600', textDecoration: 'underline' }}>
          Terms of Service
        </Link>
        {' '}and{' '}
        <Link href="/privacy" style={{ color: '#fff', fontWeight: '600', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>.
        We never sell your data or use your writing to train AI.
      </p>
      <button
        onClick={dismiss}
        style={{
          background: '#fff',
          color: 'var(--green)',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 18px',
          fontSize: '13px',
          fontWeight: '700',
          fontFamily: 'Source Sans 3, sans-serif',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Got it
      </button>
    </div>
  )
}
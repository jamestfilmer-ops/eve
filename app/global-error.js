'use client'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Eve global error:', error)
  }, [error])

  return (
    <html>
      <body style={{
        margin: 0, fontFamily: 'sans-serif',
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#f5f4f0', padding: '24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '440px' }}>
          <h1 style={{ fontSize: '24px', color: '#1a140f', marginBottom: '12px' }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: '15px', color: '#7a7065', lineHeight: '1.7', marginBottom: '28px' }}>
            Eve hit an unexpected error. Refreshing usually fixes it.
          </p>
          <button
            onClick={reset}
            style={{
              background: '#3a7a1e', color: '#fff', border: 'none',
              borderRadius: '8px', padding: '12px 28px', fontSize: '14px',
              fontWeight: '600', cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

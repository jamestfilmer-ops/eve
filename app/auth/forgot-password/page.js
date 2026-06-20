'use client'
import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default function ForgotPassword() {
  const [email, setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState('')

  async function handleSubmit() {
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://eve-screenwriting.vercel.app/auth/reset',
      })
      if (err) throw err
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'var(--off-white)', padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L11.5 7H16L12 10.5L13.5 16L9 13L4.5 16L6 10.5L2 7H6.5L9 2Z" fill="white"/></svg>
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: '700', color: 'var(--green)' }}>Eve</span>
          </Link>
          <p style={{ color: 'var(--text-soft)', fontSize: '14px', marginTop: '8px' }}>
            Reset your password
          </p>
        </div>

        <div className="card" style={{ padding: '32px' }}>
          {sent ? (
            /* Success state */
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--green-pale)', margin: '0 auto 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11L9 16L18 6" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>
                Check your email
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', marginBottom: '24px' }}>
                We sent a reset link to <strong>{email}</strong>. Click it to set a new password. It expires in 1 hour.
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-soft)', lineHeight: '1.6' }}>
                No email? Check your spam folder, or{' '}
                <button
                  onClick={() => { setSent(false) }}
                  style={{ background: 'none', border: 'none', color: 'var(--green)', cursor: 'pointer', fontWeight: '600', fontSize: '13px', padding: 0 }}
                >
                  try again
                </button>.
              </p>
            </div>
          ) : (
            /* Form state */
            <>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', marginBottom: '20px' }}>
                Enter the email address on your account and we'll send you a link to reset your password.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>
                    Email address
                  </label>
                  <input
                    className="input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    autoFocus
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '13px', color: '#c0392b', background: '#fdf0ef', border: '1px solid #f0c0bb', borderRadius: '8px', padding: '10px 14px', margin: 0 }}>
                    {error}
                  </p>
                )}

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={loading || !email}
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px', opacity: !email ? 0.5 : 1 }}
                >
                  {loading ? 'Sending...' : 'Send reset link'}
                </button>
              </div>
            </>
          )}
        </div>

        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-soft)', marginTop: '20px' }}>
          <Link href="/auth" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>
            Back to sign in
          </Link>
        </p>

      </div>
    </div>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default function ResetPassword() {
  const [password, setPassword]   = useState('')
  const [confirm, setConfirm]     = useState('')
  const [loading, setLoading]     = useState(false)
  const [done, setDone]           = useState(false)
  const [error, setError]         = useState('')
  const [sessionReady, setSessionReady] = useState(false)
  const [invalidLink, setInvalidLink]   = useState(false)

  // Supabase embeds the recovery token in the URL hash (#access_token=...&type=recovery)
  // The client SDK picks this up automatically on mount via onAuthStateChange
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setSessionReady(true)
      }
    })
    // Fallback: if user already has a valid session (e.g. link already used once
    // and they refreshed), check it
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setSessionReady(true)
    })

    // If after 5s we still have no session, the link is likely invalid/expired
    const timer = setTimeout(() => {
      setInvalidLink(prev => {
        if (!sessionReady) return true
        return prev
      })
    }, 5000)

    return () => {
      subscription.unsubscribe()
      clearTimeout(timer)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleReset() {
    setError('')
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      const { error: err } = await supabase.auth.updateUser({ password })
      if (err) throw err
      setDone(true)
      // Redirect to dashboard after 2 seconds
      setTimeout(() => { window.location.href = '/dashboard' }, 2000)
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
            Set a new password
          </p>
        </div>

        <div className="card" style={{ padding: '32px' }}>

          {/* Done state */}
          {done && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--green-pale)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11L9 16L18 6" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>
                Password updated
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6' }}>
                Taking you to your dashboard...
              </p>
            </div>
          )}

          {/* Invalid/expired link */}
          {!done && invalidLink && !sessionReady && (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>
                Link expired or invalid
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', marginBottom: '20px' }}>
                Reset links expire after 1 hour. Request a new one below.
              </p>
              <Link href="/auth/forgot-password" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px' }}>
                  Request new link
                </button>
              </Link>
            </div>
          )}

          {/* Loading — waiting for Supabase to parse the URL token */}
          {!done && !invalidLink && !sessionReady && (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-soft)' }}>Verifying reset link...</p>
            </div>
          )}

          {/* Main form */}
          {!done && sessionReady && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>
                    New password
                  </label>
                  <input
                    className="input"
                    type="password"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoFocus
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>
                    Confirm new password
                  </label>
                  <input
                    className="input"
                    type="password"
                    placeholder="Same password again"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleReset()}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '13px', color: '#c0392b', background: '#fdf0ef', border: '1px solid #f0c0bb', borderRadius: '8px', padding: '10px 14px', margin: 0 }}>
                    {error}
                  </p>
                )}

                <button
                  className="btn-primary"
                  onClick={handleReset}
                  disabled={loading || !password || !confirm}
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px', marginTop: '4px', opacity: (!password || !confirm) ? 0.5 : 1 }}
                >
                  {loading ? 'Updating...' : 'Update password'}
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

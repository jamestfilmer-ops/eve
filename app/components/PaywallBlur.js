'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

// PaywallBlur — wraps lesson body content for paid-only lessons.
// Free users and guests see the first ~400px then hit an upgrade gate.
// Pass slug prop so free lessons can bypass the check entirely.

export default function PaywallBlur({ children, slug }) {
  // ⚠️  TESTING MODE — paywall disabled. Re-enable before Stripe launch.
  return <>{children}</>

  const [status, setStatus] = useState('loading') // loading | free | pro | guest

  useEffect(() => {
    let mounted = true
    async function check() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) { if (mounted) setStatus('guest'); return }
        const { data: profile } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', session.user.id)
          .single()
        if (!mounted) return
        const plan = profile?.plan
        setStatus(plan && plan !== 'free' ? 'pro' : 'free')
      } catch {
        if (mounted) setStatus('guest')
      }
    }
    check()
    return () => { mounted = false }
  }, [])

  // Pro users always get full content
  if (status === 'pro') return <>{children}</>

  // Loading state — show blurred preview to avoid layout flash
  if (status === 'loading') {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ maxHeight: '400px', overflow: 'hidden', position: 'relative', pointerEvents: 'none' }}>
          {children}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '260px',
            background: 'linear-gradient(to bottom, rgba(245,242,236,0) 0%, rgba(245,242,236,0.75) 50%, var(--off-white) 80%)',
          }} />
        </div>
        <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--off-white)' }}>
          <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid var(--green-border)', borderTopColor: 'var(--green)', animation: 'spin 0.7s linear infinite', margin: '0 auto' }} />
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  // Free or guest — paywall gate
  const isGuest = status === 'guest'

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ maxHeight: '400px', overflow: 'hidden', position: 'relative', pointerEvents: 'none' }}>
        {children}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '260px',
          background: 'linear-gradient(to bottom, rgba(245,242,236,0) 0%, rgba(245,242,236,0.75) 50%, var(--off-white) 80%)',
        }} />
      </div>

      <div style={{ textAlign: 'center', padding: '32px 24px 48px', background: 'var(--off-white)' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '12px' }}>
          Pro lesson
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: '1.3' }}>
          The rest of this lesson is for Pro members.
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-mid)', maxWidth: '380px', margin: '0 auto 28px', lineHeight: '1.75' }}>
          {isGuest
            ? 'Create a free account to read 10 lessons. Upgrade to Pro for all lessons, every framework, and the full project workspace.'
            : '$8 a month unlocks every lesson, all 7 frameworks, and unlimited projects. Less than one coffee.'}
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {isGuest ? (
            <>
              <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
                <button style={{ background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '14px', padding: '12px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                  Start free
                </button>
              </Link>
              <Link href="/auth" style={{ textDecoration: 'none' }}>
                <button style={{ background: 'transparent', color: 'var(--text-dark)', fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '14px', padding: '12px 20px', borderRadius: '8px', border: '1.5px solid var(--border)', cursor: 'pointer' }}>
                  Sign in
                </button>
              </Link>
            </>
          ) : (
            <Link href="/pricing" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '14px', padding: '12px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                Upgrade to Pro &rarr;
              </button>
            </Link>
          )}
        </div>

        {!isGuest && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-soft)', marginTop: '16px' }}>
            Your 10 free lessons are in the{' '}
            <Link href="/learn" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>
              Start Here
            </Link>{' '}
            category.
          </p>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

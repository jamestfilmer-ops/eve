// PaywallBlur — checks Supabase session + plan before gating content
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export default function PaywallBlur({ children }) {
  const [status, setStatus] = useState('loading') // 'loading' | 'free' | 'paid' | 'guest'

  useEffect(() => {
    let mounted = true
    async function checkAccess() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          if (mounted) setStatus('guest')
          return
        }
        const { data: profile } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', session.user.id)
          .single()
        if (!mounted) return
        const plan = profile?.plan
        if (plan && plan !== 'free') {
          setStatus('paid')
        } else {
          setStatus('free')
        }
      } catch {
        if (mounted) setStatus('guest')
      }
    }
    checkAccess()
    return () => { mounted = false }
  }, [])

  // Paid users — render everything immediately
  if (status === 'paid') return <>{children}</>

  // Still checking — show faded preview, no gate yet (avoids flash)
  if (status === 'loading') {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ maxHeight: '520px', overflow: 'hidden', position: 'relative' }}>
          {children}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '280px',
            background: 'linear-gradient(to bottom, rgba(245,242,236,0) 0%, rgba(245,242,236,0.6) 40%, var(--off-white) 75%)',
            pointerEvents: 'none',
          }} />
        </div>
        <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--off-white)' }}>
          <div style={{
            width: '24px', height: '24px', borderRadius: '50%',
            border: '2px solid var(--green-border)', borderTopColor: 'var(--green)',
            animation: 'spin 0.7s linear infinite', margin: '0 auto',
          }} />
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  // Free or guest — show paywall gate
  const isGuest = status === 'guest'

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ maxHeight: '520px', overflow: 'hidden', position: 'relative' }}>
        {children}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '280px',
          background: 'linear-gradient(to bottom, rgba(245,242,236,0) 0%, rgba(245,242,236,0.6) 40%, var(--off-white) 75%)',
          pointerEvents: 'none',
        }} />
      </div>

      <div style={{ textAlign: 'center', padding: '20px 24px 40px', background: 'var(--off-white)' }}>
        <p style={{
          fontFamily: 'var(--font-ui)', fontSize: '13px', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '12px',
        }}>
          Writer tier
        </p>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 22px)',
          fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: '1.3',
        }}>
          Keep reading for $1.99/month.
        </p>
        <p style={{
          fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)',
          maxWidth: '360px', margin: '0 auto 24px', lineHeight: '1.7',
        }}>
          All 65 lessons. All 7 frameworks. Unlimited projects. Less than a coffee.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href={isGuest ? '/auth?signup=true&plan=writer' : '/pricing'}
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)',
              fontWeight: '700', fontSize: '14px', padding: '11px 28px',
              borderRadius: '8px', border: 'none', cursor: 'pointer', letterSpacing: '0.01em',
            }}>
              {isGuest ? 'Get started free' : 'Upgrade to Writer'}
            </button>
          </Link>
        </div>

        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', marginTop: '16px' }}>
          {isGuest ? (
            <>Already have an account?{' '}
              <Link href="/auth" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>
                Sign in
              </Link>
            </>
          ) : (
            <>Free accounts include 10 core lessons.{' '}
              <Link href="/learn" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>
                Browse free lessons
              </Link>
            </>
          )}
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

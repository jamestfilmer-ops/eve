'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function AuthForm() {
  const params = useSearchParams()
  const [isSignup, setIsSignup] = useState(params.get('signup') === 'true')
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--off-white)', padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontSize: '20px' }}>✦</span>
            </div>
            <span style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '700', color: 'var(--green)' }}>Eve</span>
          </Link>
          <p style={{ color: 'var(--text-soft)', fontSize: '14px', marginTop: '8px' }}>
            {isSignup ? 'Start building your stories.' : 'Welcome back.'}
          </p>
        </div>

        {/* Card */}
        <div className="card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', background: 'var(--off-white)', borderRadius: '8px', padding: '4px', marginBottom: '24px' }}>
            {['Sign in', 'Create account'].map((label, i) => {
              const active = (i === 0 && !isSignup) || (i === 1 && isSignup)
              return (
                <button key={i} onClick={() => setIsSignup(i === 1)} style={{
                  flex: 1, padding: '8px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: active ? '600' : '400',
                  background: active ? '#fff' : 'transparent',
                  color: active ? 'var(--green)' : 'var(--text-soft)',
                  boxShadow: active ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.15s ease',
                }}>{label}</button>
              )
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {isSignup && (
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>Your name</label>
                <input className="input" placeholder="James" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
            )}
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>Email</label>
              <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>Password</label>
              <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
            </div>

            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={loading || !form.email || !form.password}
              style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px', marginTop: '4px', opacity: (!form.email || !form.password) ? 0.5 : 1 }}
            >
              {loading ? 'One moment...' : isSignup ? 'Create account' : 'Sign in'}
            </button>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-soft)', marginTop: '20px' }}>
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <button onClick={() => setIsSignup(!isSignup)} style={{ background: 'none', border: 'none', color: 'var(--green)', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
            {isSignup ? 'Sign in' : 'Create one'}
          </button>
        </p>

      </div>
    </div>
  )
}

export default function Auth() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  )
}
'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const MEDIA = [
  {
    id: 'screenplay',
    label: 'Screenplay',
    sub: 'Feature, short, or pilot',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 7h8M7 11h8M7 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'novel',
    label: 'Novel',
    sub: 'Literary or genre fiction',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4h14v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M4 4a2 2 0 012-2h10a2 2 0 012 2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'short',
    label: 'Short story',
    sub: 'Fiction under 10,000 words',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 5h12M5 9h12M5 13h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 14.5v1.5l1 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'exploring',
    label: 'Still deciding',
    sub: 'Browsing, learning, figuring it out',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 7v.5M11 10.5c0-1 1.5-1.5 1.5-3a2.5 2.5 0 00-5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="15" r=".8" fill="currentColor"/>
      </svg>
    ),
  },
]

const STAGE = [
  { id: 'idea', label: 'I have an idea', sub: 'But nothing is written yet' },
  { id: 'drafting', label: 'I\'m mid-draft', sub: 'A first draft is underway' },
  { id: 'revising', label: 'I\'m revising', sub: 'A draft exists, now fixing it' },
  { id: 'learning', label: 'Just learning', sub: 'Not working on anything specific' },
]

const GOAL = [
  {
    id: 'craft',
    label: 'Learn the craft',
    sub: 'Start with lessons on structure, character, and dialogue',
    href: '/learn',
    primary: false,
  },
  {
    id: 'project',
    label: 'Start a project',
    sub: 'Create a workspace and pick a story framework',
    href: '/projects/new',
    primary: true,
  },
  {
    id: 'idea',
    label: 'Capture an idea',
    sub: 'Get something down before it disappears',
    href: '/ideas',
    primary: false,
  },
]

function OptionCard({ selected, onClick, children, sub, label, icon }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '14px',
        width: '100%', textAlign: 'left',
        padding: '14px 18px', borderRadius: '12px',
        border: selected ? '2px solid var(--green)' : '1.5px solid var(--border)',
        background: selected ? 'var(--green-pale)' : '#fff',
        cursor: 'pointer', transition: 'all 0.2s var(--ease-out)',
        boxShadow: selected
          ? '0 2px 10px rgba(45,80,22,0.13), inset 0 1px 0 rgba(255,255,255,0.7)'
          : 'var(--shadow-xs), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
    >
      {icon && (
        <span style={{ color: selected ? 'var(--green)' : 'var(--text-soft)', flexShrink: 0 }}>
          {icon}
        </span>
      )}
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: selected ? 'var(--green)' : 'var(--text-dark)', marginBottom: '2px' }}>
          {label}
        </p>
        {sub && <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', margin: 0 }}>{sub}</p>}
      </div>
      {selected && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="9" cy="9" r="8" fill="var(--green)"/>
          <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}

export default function WelcomePage() {
  const router = useRouter()
  const [step, setStep] = useState(0) // 0=hello, 1=medium, 2=stage, 3=goal
  const [name, setName] = useState('')
  const [medium, setMedium] = useState(null)
  const [stage, setStage] = useState(null)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push('/auth'); return }
      const n = user.user_metadata?.full_name || user.email?.split('@')[0] || ''
      setName(n)
    })
  }, [])

  function goNext() {
    setAnimating(true)
    setTimeout(() => { setStep(s => s + 1); setAnimating(false) }, 180)
  }

  async function saveAndGo(href) {
    // Save preferences to profile
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase.from('profiles').upsert({
          id: user.id,
          writing_medium: medium,
          writing_stage: stage,
          onboarding_done: true,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'id' })
      }
    } catch {}
    router.push(href)
  }

  const firstName = name.split(' ')[0]
  const totalSteps = 4

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--off-white)', padding: '24px',
    }}>
      <div style={{
        width: '100%', maxWidth: '520px',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(6px)' : 'none',
        transition: 'opacity 0.18s ease, transform 0.18s ease',
      }}>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '36px' }}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} style={{
              height: '5px', borderRadius: '3px',
              width: i === step ? '28px' : '8px',
              background: i <= step ? 'var(--green)' : 'var(--border)',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>

        <div style={{
          background: '#fff', border: '1px solid var(--border)', borderRadius: '20px',
          padding: '36px 40px', boxShadow: '0 4px 28px rgba(26,20,15,0.07)',
        }}>

          {/* ── STEP 0: Hello ── */}
          {step === 0 && (
            <>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(160deg, #2D5016, var(--green))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.2', marginBottom: '12px' }}>
                {firstName ? `Welcome, ${firstName}.` : 'Welcome to Eve.'}
              </h1>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '28px' }}>
                Eve is a craft library and a story workspace. Lessons on the left, your project on the right. Two quick questions so we know where to point you — then you&apos;re in.
              </p>
              <button onClick={goNext} style={{ width: '100%', background: 'var(--green)', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', cursor: 'pointer' }}>
                Let&apos;s go
              </button>
            </>
          )}

          {/* ── STEP 1: Medium ── */}
          {step === 1 && (
            <>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>Question 1 of 2</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>
                What are you working on?
              </h2>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', marginBottom: '22px' }}>Pick the one that fits best.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {MEDIA.map(m => (
                  <OptionCard
                    key={m.id}
                    selected={medium === m.id}
                    onClick={() => setMedium(m.id)}
                    label={m.label}
                    sub={m.sub}
                    icon={m.icon}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                disabled={!medium}
                style={{ width: '100%', background: medium ? 'var(--green)' : 'var(--border)', color: medium ? '#fff' : 'var(--text-soft)', border: 'none', borderRadius: '10px', padding: '14px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', cursor: medium ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                Continue
              </button>
            </>
          )}

          {/* ── STEP 2: Stage ── */}
          {step === 2 && (
            <>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>Question 2 of 2</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>
                Where are you in the process?
              </h2>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', marginBottom: '22px' }}>No wrong answer.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {STAGE.map(s => (
                  <OptionCard
                    key={s.id}
                    selected={stage === s.id}
                    onClick={() => setStage(s.id)}
                    label={s.label}
                    sub={s.sub}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                disabled={!stage}
                style={{ width: '100%', background: stage ? 'var(--green)' : 'var(--border)', color: stage ? '#fff' : 'var(--text-soft)', border: 'none', borderRadius: '10px', padding: '14px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', cursor: stage ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                Continue
              </button>
            </>
          )}

          {/* ── STEP 3: Goal / routing ── */}
          {step === 3 && (
            <>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)' }}>You&apos;re all set</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>
                  Where do you want to start?
                </h2>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', margin: 0 }}>You can always change course.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {GOAL.map(g => (
                  <button
                    key={g.id}
                    onClick={() => saveAndGo(g.href)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      width: '100%', textAlign: 'left',
                      padding: '16px 20px', borderRadius: '12px',
                      border: g.primary ? '2px solid var(--green)' : '1.5px solid var(--border)',
                      background: g.primary ? 'var(--green-pale)' : '#fff',
                      cursor: 'pointer', transition: 'box-shadow 0.22s var(--ease-out), transform 0.18s var(--ease-out)',
                      boxShadow: g.primary
                        ? '0 2px 10px rgba(45,80,22,0.13), inset 0 1px 0 rgba(255,255,255,0.7)'
                        : 'var(--shadow-xs), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: g.primary ? 'var(--green)' : 'var(--text-dark)', marginBottom: '3px' }}>{g.label}</p>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', margin: 0, lineHeight: '1.4' }}>{g.sub}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: g.primary ? 'var(--green)' : 'var(--text-soft)' }}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>

              <button onClick={() => saveAndGo('/dashboard')} style={{ width: '100%', background: 'transparent', border: 'none', fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', cursor: 'pointer', padding: '8px' }}>
                Take me to the dashboard
              </button>
            </>
          )}

        </div>

        {/* Skip */}
        {step > 0 && step < 3 && (
          <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <Link href="/dashboard" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', textDecoration: 'none' }}>
              Skip and go to dashboard
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}

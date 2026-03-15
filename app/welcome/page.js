'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const steps = [
  {
    id: 'hello',
    title: "Welcome to Eve.",
    subtitle: "The craft platform for serious writers.",
    body: "Eve is two things: a craft library and a story workspace. You can use both for free. This takes 60 seconds — then you'll be writing.",
    cta: "Let's go",
  },
  {
    id: 'learn',
    title: "Start with the craft library.",
    subtitle: "45+ lessons. No AI. No fluff.",
    body: "Every lesson on Eve is grounded in what the best writers — King, Vonnegut, Pixar, Sorkin — have said about how stories actually work. Read a lesson, then put it into practice in your project.",
    cta: "Got it",
    links: [
      { label: 'If you have never written before', href: '/for-beginners', desc: 'Start Here' },
      { label: 'If you know your medium', href: '/learn/tracks', desc: 'Pick a learning path' },
      { label: 'If you want to explore', href: '/learn', desc: 'Browse the full library' },
    ],
  },
  {
    id: 'workspace',
    title: "Your story workspace.",
    subtitle: "Built around frameworks that actually work.",
    body: "When you create a project, you choose a framework — Save the Cat, Hero's Journey, Story Circle, and four more. Eve organizes your scenes, characters, and plot holes around that framework automatically.",
    cta: "Makes sense",
    features: [
      { icon: '⬡', label: 'Characters', desc: 'Want, need, ghost, arc — for every character' },
      { icon: '⬡', label: 'Scenes', desc: 'Organized by act, with framework beat labels' },
      { icon: '⬡', label: 'Plot Holes', desc: 'Track and close the gaps as you draft' },
      { icon: '⬡', label: 'Themes Map', desc: 'Visual canvas for the ideas underneath your story' },
    ],
  },
  {
    id: 'start',
    title: "What do you want to do first?",
    subtitle: "You can always change your mind.",
    body: null,
    cta: null,
    choices: [
      {
        icon: '📖',
        label: 'Learn the craft',
        desc: 'Start with the beginner path — nine lessons, 55 minutes.',
        href: '/for-beginners',
        primary: false,
      },
      {
        icon: '✍️',
        label: 'Start a project',
        desc: 'Create your first story and choose a framework.',
        href: '/projects/new',
        primary: true,
      },
      {
        icon: '💡',
        label: 'Capture an idea',
        desc: 'You have something. Get it down before it disappears.',
        href: '/ideas',
        primary: false,
      },
    ],
  },
]

export default function WelcomePage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    // Get user name if available
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push('/auth')
        return
      }
      const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || ''
      setName(displayName)
    })
  }, [])

  function advance() {
    if (step < steps.length - 1) {
      setAnimating(true)
      setTimeout(() => {
        setStep(s => s + 1)
        setAnimating(false)
      }, 200)
    }
  }

  const current = steps[step]
  const firstName = name.split(' ')[0]

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--off-white)', padding: '24px',
    }}>
      <div style={{
        width: '100%', maxWidth: '540px',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(8px)' : 'translateY(0)',
        transition: 'opacity 0.2s, transform 0.2s',
      }}>

        {/* Step dots */}
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '40px' }}>
          {steps.map((_, i) => (
            <div key={i} style={{
              width: i === step ? '24px' : '6px', height: '6px', borderRadius: '3px',
              background: i === step ? 'var(--green)' : i < step ? 'var(--green-light)' : 'var(--border)',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>

        {/* Card */}
        <div style={{
          background: '#fff', border: '1px solid var(--border)',
          borderRadius: '20px', padding: '40px',
          boxShadow: '0 4px 24px rgba(26,20,15,0.08)',
        }}>

          {/* Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--green)',
              background: 'var(--green-pale)', border: '1px solid var(--green-border)',
              padding: '4px 10px', borderRadius: '20px',
            }}>
              {step === 0 && firstName ? `Hello, ${firstName}` : `Step ${step + 1} of ${steps.length}`}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 30px)',
            fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.2',
            marginBottom: '8px',
          }}>
            {current.title}
          </h1>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--text-soft)', marginBottom: '20px' }}>
            {current.subtitle}
          </p>

          {current.body && (
            <p style={{
              fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.8',
              color: 'var(--text-mid)', marginBottom: '24px',
            }}>
              {current.body}
            </p>
          )}

          {/* Links (step 2) */}
          {current.links && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {current.links.map((link, i) => (
                <Link key={i} href={link.href} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--off-white)' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)' }}>{link.label}</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)' }}>{link.desc} →</span>
                </Link>
              ))}
            </div>
          )}

          {/* Features (step 3) */}
          {current.features && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              {current.features.map((feat, i) => (
                <div key={i} style={{ padding: '14px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--off-white)' }}>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '4px' }}>{feat.label}</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.4' }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Choices (step 4) */}
          {current.choices && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '8px' }}>
              {current.choices.map((choice, i) => (
                <Link key={i} href={choice.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '16px 20px', borderRadius: '12px',
                    border: choice.primary ? '2px solid var(--green)' : '1px solid var(--border)',
                    background: choice.primary ? 'var(--green-pale)' : '#fff',
                    cursor: 'pointer', transition: 'box-shadow 0.15s',
                  }}>
                    <span style={{ fontSize: '22px', flexShrink: 0 }}>{choice.icon}</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: choice.primary ? 'var(--green)' : 'var(--text-dark)', marginBottom: '2px' }}>{choice.label}</p>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.4' }}>{choice.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
              <Link href="/dashboard" style={{ textDecoration: 'none', textAlign: 'center', display: 'block', paddingTop: '4px' }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)' }}>Or go to the dashboard →</span>
              </Link>
            </div>
          )}

          {/* CTA button */}
          {current.cta && (
            <button
              onClick={advance}
              style={{
                width: '100%', background: 'var(--green)', color: '#fff',
                border: 'none', borderRadius: '10px', padding: '14px',
                fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px',
                cursor: 'pointer', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {current.cta}
            </button>
          )}
        </div>

        {/* Skip */}
        {step < steps.length - 1 && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Link href="/dashboard" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', textDecoration: 'none' }}>
              Skip intro → go to dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

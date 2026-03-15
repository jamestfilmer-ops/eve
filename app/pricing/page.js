'use client'
import React from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const plans = [
  {
    id: 'free',
    name: 'Free',
    monthly: 0,
    annual: 0,
    annualTotal: null,
    sub: 'Everything you need to start your first story.',
    cta: 'Start free',
    ctaStyle: 'ghost',
    features: [
      '1 active project',
      'Save the Cat framework',
      'Full craft library — all lessons',
      'Story glossary and reading list',
      '25 saved ideas',
      'Character builder',
      'Scene tracker',
      'Plot hole log',
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    monthly: 4.99,
    annual: 2.50,
    annualTotal: 30,
    sub: 'For writers actively working on their stories.',
    cta: 'Get Studio',
    ctaStyle: 'primary',
    popular: true,
    features: [
      { label: 'Everything in Free', dim: true },
      'Unlimited projects',
      'All 7 frameworks',
      'Unlimited saved ideas',
      'Beat sheet auto-fill',
      'PDF export',
      'Timeline view',
      'Themes Map canvas',
    ],
  },
  {
    id: 'pro',
    name: 'Professional',
    monthly: 12,
    annual: 7.50,
    annualTotal: 90,
    sub: 'For coaches, consultants, and working professionals.',
    cta: 'Get Professional',
    ctaStyle: 'inverted',
    features: [
      { label: 'Everything in Studio', dim: true },
      'Priority support',
      'Early access to new features',
      'Multiple client projects',
      'Advanced export formats',
      'Usage analytics',
      'Dedicated workspace',
    ],
  },
]

const comparisonRows = [
  { feature: 'Active projects',        free: '1',        studio: 'Unlimited', pro: 'Unlimited' },
  { feature: 'Frameworks',             free: 'Save the Cat only', studio: 'All 7', pro: 'All 7' },
  { feature: 'Craft library (lessons)',free: true,        studio: true,        pro: true },
  { feature: 'Story glossary',         free: true,        studio: true,        pro: true },
  { feature: 'Saved ideas',            free: '25',        studio: 'Unlimited', pro: 'Unlimited' },
  { feature: 'Character builder',      free: true,        studio: true,        pro: true },
  { feature: 'Scene tracker',          free: true,        studio: true,        pro: true },
  { feature: 'Plot hole log',          free: true,        studio: true,        pro: true },
  { feature: 'Beat sheet auto-fill',   free: false,       studio: true,        pro: true },
  { feature: 'PDF export',             free: false,       studio: true,        pro: true },
  { feature: 'Timeline view',          free: false,       studio: true,        pro: true },
  { feature: 'Themes Map canvas',      free: false,       studio: true,        pro: true },
  { feature: 'Multiple client projects',free: false,      studio: false,       pro: true },
  { feature: 'Priority support',       free: false,       studio: false,       pro: true },
  { feature: 'Early access',           free: false,       studio: false,       pro: true },
  { feature: 'Advanced export formats',   free: false,       studio: true,        pro: true },
  { feature: 'Usage analytics',        free: false,       studio: false,       pro: true },
]

function Check({ yes, text }) {
  if (yes === false) return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="var(--off-white)" />
      <path d="M5.5 8h5" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  if (typeof yes === 'string' && yes !== 'Soon') return <span style={{ fontSize: '13px', color: 'var(--text-dark)', fontWeight: '500' }}>{yes}</span>
  if (yes === 'Soon') return <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>Soon</span>
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="var(--green)" />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const dynamic = 'force-dynamic'

export default function PricingPage() {
  const [billing, setBilling] = React.useState('annual')
  const [loading, setLoading] = React.useState(null)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null))
  }, [])

  async function handleUpgrade(planId) {
    if (planId === 'free') {
      window.location.href = '/auth?signup=true'
      return
    }
    if (!user) {
      window.location.href = '/auth?signup=true&redirect=/pricing'
      return
    }
    const priceKey = planId + '_' + billing
    setLoading(planId)
    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceKey, userId: user.id, email: user.email, billing }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '72px 24px 0', textAlign: 'center' }}>
        <div className="fade-up">
          <div className="badge" style={{ marginBottom: '14px', display: 'inline-flex' }}>Pricing</div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '700',
            color: 'var(--green)',
            marginBottom: '18px',
            lineHeight: '1.15',
          }}>
            Start free. Upgrade when you're ready.
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-mid)', maxWidth: '480px', margin: '0 auto 32px', lineHeight: '1.75' }}>
            Every writer gets the full craft library free forever. Tools unlock as your story demands them.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--off-white)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '4px',
            gap: '2px',
            marginBottom: '60px',
          }}>
            {['monthly', 'annual'].map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '7px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  fontFamily: 'Source Sans 3, sans-serif',
                  transition: 'all 0.18s ease',
                  background: billing === b ? '#fff' : 'transparent',
                  color: billing === b ? 'var(--green)' : 'var(--text-soft)',
                  boxShadow: billing === b ? 'var(--shadow-sm)' : 'none',
                }}
              >
                {b === 'monthly' ? 'Monthly' : 'Annual'}
                {b === 'annual' && (
                  <span style={{
                    marginLeft: '6px',
                    background: 'var(--green)',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    letterSpacing: '0.04em',
                  }}>−50%</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div className="fade-up fade-up-delay-1 pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'start',
        }}>
          {plans.map(plan => {
            const price = billing === 'annual' ? plan.annual : plan.monthly
            const isPopular = plan.popular
            const isPro = plan.id === 'pro'

            return (
              <div
                key={plan.id}
                style={{
                  background: isPro ? 'var(--green)' : '#fff',
                  border: isPopular
                    ? '2px solid var(--green)'
                    : isPro
                    ? '1px solid rgba(255,255,255,0.12)'
                    : '1px solid var(--border)',
                  borderRadius: '18px',
                  padding: isPopular ? '38px 30px 30px' : '32px 30px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: isPopular
                    ? '0 8px 40px rgba(45,80,22,0.18), 0 2px 8px rgba(45,80,22,0.10)'
                    : isPro
                    ? '0 4px 20px rgba(45,80,22,0.28), 0 1px 4px rgba(45,80,22,0.18)'
                    : 'var(--shadow-sm)',
                  position: 'relative',
                  transition: 'box-shadow 0.28s ease, transform 0.28s ease',
                  transform: isPopular ? 'translateY(-8px)' : 'none',
                }}
                className={isPopular ? 'pricing-card-popular' : ''}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = isPopular ? 'translateY(-14px)' : 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = isPopular
                    ? '0 20px 60px rgba(45,80,22,0.22), 0 4px 16px rgba(45,80,22,0.14)'
                    : isPro
                    ? '0 16px 56px rgba(45,80,22,0.36), 0 2px 8px rgba(45,80,22,0.22)'
                    : 'var(--shadow-lg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = isPopular ? 'translateY(-8px)' : 'none'
                  e.currentTarget.style.boxShadow = isPopular
                    ? '0 8px 40px rgba(45,80,22,0.18), 0 2px 8px rgba(45,80,22,0.10)'
                    : isPro
                    ? '0 4px 20px rgba(45,80,22,0.28), 0 1px 4px rgba(45,80,22,0.18)'
                    : 'var(--shadow-sm)'
                }}
              >
                {isPopular && (
                  <div style={{
                    position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--green)', color: '#fff',
                    fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '4px 14px', borderRadius: '20px',
                    fontFamily: 'DM Mono, monospace',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 2px 8px rgba(45,80,22,0.25)',
                  }}>Most popular</div>
                )}

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ marginBottom: '18px' }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                      fontFamily: 'DM Mono, monospace',
                      padding: '3px 10px', borderRadius: '5px',
                      background: isPro ? 'rgba(255,255,255,0.15)' : isPopular ? 'var(--green-pale)' : 'var(--off-white)',
                      color: isPro ? 'rgba(255,255,255,0.85)' : 'var(--green)',
                      border: isPro ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--green-border)',
                    }}>{plan.name}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px', marginBottom: '4px' }}>
                    {price === 0 ? (
                      <span style={{
                        fontSize: '44px', fontWeight: '800',
                        fontFamily: 'Playfair Display, serif',
                        color: isPro ? '#fff' : 'var(--text-dark)', lineHeight: 1,
                      }}>Free</span>
                    ) : (
                      <>
                        <span style={{ fontSize: '22px', fontWeight: '700', color: isPro ? 'rgba(255,255,255,0.6)' : 'var(--text-soft)', alignSelf: 'flex-start', marginTop: '8px' }}>$</span>
                        <span style={{
                          fontSize: '44px', fontWeight: '800',
                          fontFamily: 'Playfair Display, serif',
                          color: isPro ? '#fff' : isPopular ? 'var(--green)' : 'var(--text-dark)', lineHeight: 1,
                        }}>{price % 1 === 0 ? price : price.toFixed(2)}</span>
                        <span style={{ fontSize: '14px', color: isPro ? 'rgba(255,255,255,0.5)' : 'var(--text-soft)', marginBottom: '6px', alignSelf: 'flex-end' }}>/mo</span>
                      </>
                    )}
                  </div>

                  {price !== 0 && billing === 'annual' && (
                    <p style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: isPro ? 'rgba(255,255,255,0.55)' : 'var(--amber)' }}>
                      ${plan.annualTotal} billed annually
                    </p>
                  )}
                  {price !== 0 && billing === 'monthly' && (
                    <p style={{ fontSize: '12px', color: isPro ? 'rgba(255,255,255,0.5)' : 'var(--text-soft)', marginBottom: '8px' }}>
                      Save 50% with annual billing
                    </p>
                  )}

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: isPro ? 'rgba(255,255,255,0.65)' : 'var(--text-mid)' }}>
                    {plan.sub}
                  </p>
                </div>

                <div style={{ height: '1px', background: isPro ? 'rgba(255,255,255,0.12)' : 'var(--border)', marginBottom: '22px' }} />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '28px' }}>
                  {plan.features.map((f, fi) => {
                    const isDim = typeof f === 'object' && f.dim
                    const text = typeof f === 'object' ? f.label : f
                    return (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                          {isPro ? (
                            <>
                              <circle cx="7.5" cy="7.5" r="6.5" fill="rgba(255,255,255,0.18)" />
                              <path d="M4.5 7.5l2 2 4-4" stroke={isDim ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                          ) : isPopular ? (
                            <>
                              <circle cx="7.5" cy="7.5" r="6.5" fill="var(--green)" />
                              <path d="M4.5 7.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                          ) : (
                            <>
                              <circle cx="7.5" cy="7.5" r="6.5" stroke="var(--green-border)" strokeWidth="1" fill="var(--green-pale)" />
                              <path d="M4.5 7.5l2 2 4-4" stroke={isDim ? "var(--text-soft)" : "var(--green)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                          )}
                        </svg>
                        <span style={{
                          fontSize: '14px', lineHeight: '1.5',
                          color: isPro ? (isDim ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.88)') : (isDim ? 'var(--text-soft)' : 'var(--text-dark)'),
                          fontStyle: isDim ? 'italic' : 'normal',
                        }}>{text}</span>
                      </div>
                    )
                  })}
                </div>

                {plan.ctaStyle === 'ghost' && (
                  <button
                    className="btn-ghost"
                    style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: '600' }}
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={loading === plan.id}
                  >
                    {loading === plan.id ? 'Loading...' : plan.cta}
                  </button>
                )}
                {plan.ctaStyle === 'primary' && (
                  <button
                    className="btn-primary"
                    style={{ width: '100%', padding: '13px', fontSize: '14px', fontWeight: '700' }}
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={loading === plan.id}
                  >
                    {loading === plan.id ? 'Loading...' : plan.cta}
                  </button>
                )}
                {plan.ctaStyle === 'inverted' && (
                  <button
                    style={{
                      width: '100%', padding: '13px',
                      background: 'rgba(255,255,255,0.14)',
                      border: '1px solid rgba(255,255,255,0.28)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '14px', fontWeight: '700',
                      cursor: loading === plan.id ? 'not-allowed' : 'pointer',
                      fontFamily: 'Source Sans 3, sans-serif',
                      transition: 'background 0.18s',
                      opacity: loading === plan.id ? 0.7 : 1,
                    }}
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={loading === plan.id}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                  >
                    {loading === plan.id ? 'Loading...' : plan.cta}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Trust line */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            No credit card required to start. Cancel any paid plan at any time.{` `}
            <Link href="/terms" style={{ color: 'var(--green)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Terms apply.</Link>
          </p>
        </div>

        {/* ── Comparison Table ─────────────────────────────── */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(22px, 3vw, 30px)',
            color: 'var(--green)',
            textAlign: 'center',
            marginBottom: '32px',
          }}>Full feature comparison</h2>

          <div className="comparison-table-wrap">
          <div className="comparison-table-inner" style={{
            border: '1px solid var(--border)',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {/* Table header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              background: 'var(--off-white)',
              borderBottom: '1px solid var(--border)',
              padding: '0',
            }}>
              <div style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Feature</div>
              {['Free', 'Studio', 'Professional'].map((t, i) => (
                <div key={t} style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: i === 1 ? 'var(--green)' : i === 2 ? 'var(--text-dark)' : 'var(--text-soft)',
                  background: i === 1 ? 'rgba(45,80,22,0.04)' : 'transparent',
                }}>{t}</div>
              ))}
            </div>

            {/* Rows */}
            {comparisonRows.map((row, ri) => (
              <div key={ri} style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                borderBottom: ri < comparisonRows.length - 1 ? '1px solid var(--border)' : 'none',
                background: ri % 2 === 0 ? '#fff' : 'var(--off-white)',
              }}>
                <div style={{ padding: '13px 20px', fontSize: '14px', color: 'var(--text-dark)' }}>{row.feature}</div>
                {(['free', 'studio', 'pro']).map((tier, ti) => (
                  <div key={tier} style={{
                    padding: '13px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: ti === 1 ? 'rgba(45,80,22,0.02)' : 'transparent',
                  }}>
                    <Check yes={row[tier]} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* FAQ section */}
        <div style={{ marginTop: '80px', maxWidth: '640px', margin: '80px auto 0' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: 'var(--green)',
            textAlign: 'center',
            marginBottom: '36px',
          }}>Common questions</h2>

          {[
            {
              q: 'Is the craft library really free forever?',
              a: 'Yes. Every lesson, the glossary, and the reading list are free for all users, forever. We believe education should not be gated. The paid tiers unlock writing tools, not knowledge.',
            },
            {
              q: 'What happens to my project if I downgrade?',
              a: 'Your data is never deleted. If you downgrade from Studio to Free, your additional projects are archived and accessible but not editable until you re-subscribe. You keep your first project.',
            },
            {
              q: 'Is there a free trial for Studio or Professional?',
              a: 'We offer a 7-day free trial on both paid tiers — no credit card required to start. If you\'re not satisfied, cancel any time and your projects remain accessible on the Free tier.',
            },
            {
              q: 'Can I switch between monthly and annual billing?',
              a: 'Yes. You can switch at any time. If you switch from monthly to annual mid-cycle, we prorate the difference. Annual billing saves 50% — it\'s the better deal for any writer who sticks with it.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
              padding: '24px 0',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>{item.a}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pricing-bottom-cta" style={{
          marginTop: '72px',
          textAlign: 'center',
          padding: '56px 40px',
          background: 'var(--green)',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-green)',
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 3.5vw, 36px)',
            color: '#fff',
            marginBottom: '14px',
            lineHeight: '1.2',
          }}>Your first story starts now.</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '28px', maxWidth: '380px', margin: '0 auto 28px', lineHeight: '1.7' }}>
            Free forever. No card required. Every lesson included.
          </p>
          <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '13px 32px',
              background: '#fff',
              border: 'none',
              borderRadius: '9px',
              color: 'var(--green)',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'Source Sans 3, sans-serif',
              boxShadow: '0 2px 12px rgba(0,0,0,0.14)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.14)'; }}
            >
              Start free — no card needed
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

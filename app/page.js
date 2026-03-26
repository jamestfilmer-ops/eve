'use client'
import React from 'react'
import Link from 'next/link'
// ... rest of file unchanged

const frameworks = [
  {
    name: "Save the Cat",
    author: "Blake Snyder",
    description: "15 plot beats mapped to page numbers. The most practical Hollywood structure guide ever written. Every major studio film uses it.",
    best_for: "Screenplays, commercial films",
    acts: "3 Acts / 15 Beats",
  },
  {
    name: "Hero's Journey",
    author: "Joseph Campbell",
    description: "The mythic structure underlying every great story from Homer to Star Wars. 12 stages from the ordinary world through transformation and return.",
    best_for: "Epic stories, character transformation",
    acts: "3 Acts / 12 Stages",
  },
  {
    name: "Story Circle",
    author: "Dan Harmon",
    description: "A simplified 8-step loop distilled from Campbell. Beloved by television writers. Simple enough to hold in your head during a session.",
    best_for: "TV pilots, short stories, episodic work",
    acts: "1 Circle / 8 Steps",
  },
  {
    name: "Sequence Approach",
    author: "Frank Daniel",
    description: "Three-act structure broken into 8 sequences of 10-15 pages each, every one with its own tension arc. Fixes the Act 2 sag problem by making each sequence a mini-film.",
    best_for: "Complex plots, writers who find 3-act too broad",
    acts: "3 Acts / 8 Sequences",
  },
  {
    name: "Fichtean Curve",
    author: "J.G. Fichte",
    description: "Begins in rising action, not setup. Crisis after crisis, each one raising the stakes, until the climax resolves everything at once. No slow burn allowed.",
    best_for: "Thrillers, short stories, high-tension drama",
    acts: "Rising action only",
  },
  {
    name: "Kishōtenketsu",
    author: "East Asian tradition",
    description: "Four acts: introduction, development, twist, reconciliation. No conflict required. The story turns on surprise and resonance, not opposition.",
    best_for: "Literary fiction, non-Western stories, experimental",
    acts: "4 Acts / No conflict",
  },
  {
    name: "Freeform",
    author: "Your instincts",
    description: "No template. You build the structure as you go. Eve tracks your scenes, characters, and themes —the shape is entirely yours.",
    best_for: "Literary fiction, experimental work",
    acts: "No template",
  },
]

const pillars = [
  {
    title: "Start with whatever you've got",
    body: "A character name. A feeling. One line of dialogue that won't leave you alone. That's enough. Eve helps you build from there."
  },
  {
    title: "Know your people",
    body: "The best stories are powered by character. Figure out who they are, what they want, and what they're afraid to admit — before you decide what happens to them."
  },
  {
    title: "Catch what's broken early",
    body: "Plot holes aren't failure. They're information. Flag them as you go, name what's missing, and come back when you're ready. That's how real stories get fixed."
  },
  {
    title: "Pick up right where you stopped",
    body: "Writing happens in stolen hours. Eve remembers exactly where you left off — no scrolling, no re-reading, no lost momentum."
  },
]


// ─── Pricing Section ───────────────────────────────────────────────────────────

// ─── Pricing Section (used on homepage) ───────────────────────────────────────

function PricingSection() {
  const [billing, setBilling] = React.useState('annual')

  const plans = [
    {
      id: 'free',
      name: 'Free',
      badge: 'Free',
      badgeClass: 'badge',
      monthly: 0,
      annual: 0,
      annualTotal: null,
      sub: 'Get started. No card, no catch.',
      cta: 'Start free',
      ctaStyle: 'ghost',
      features: [
        '1 story project',
        'Core craft lessons (10 lessons)',
        'Save the Cat framework',
        'Basic character builder',
        'Scene tracker (up to 10 scenes)',
        'Story glossary',
        'Up to 4 ideas saved',
        '3–4 nodes on Themes Map',
      ],
    },
    {
      id: 'writer',
      name: 'Writer',
      badge: 'Popular',
      badgeClass: 'popular',
      monthly: 1.99,
      annual: 1.00,
      annualTotal: 12,
      sub: 'Everything unlocked. Less than a coffee.',
      cta: 'Unlock everything',
      ctaStyle: 'primary',
      popular: true,
      features: [
        { label: 'Everything in Free', dim: true },
        'All 65 craft lessons',
        'All 7 story frameworks',
        'Unlimited projects',
        'Unlimited scenes, characters & ideas',
        'Full Themes Map canvas',
        'Beat sheet auto-fill',
        'PDF export',
      ],
    },
    {
      id: 'pro',
      name: 'Professional',
      badge: 'Pro',
      badgeClass: 'pro',
      monthly: 9.99,
      annual: 5.00,
      annualTotal: 60,
      sub: 'For coaches, instructors, and working pros.',
      cta: 'Get Professional',
      ctaStyle: 'inverted',
      features: [
        { label: 'Everything in Writer', dim: true },
        'Multiple client workspaces',
        'Priority support',
        'Early access to new features',
        'Usage analytics',
        'PDF export for clients',
      ],
    },
  ]

  return (
    <section style={{ background: 'var(--white)', padding: '100px 24px 80px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="badge" style={{ marginBottom: '14px', display: 'inline-flex' }}>Simple pricing</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 4vw, 44px)',
            fontWeight: '700',
            color: 'var(--text-dark)',
            marginBottom: '16px',
            lineHeight: '1.15',
          }}>
            Start for free. Pay when it's worth it.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-mid)', maxWidth: '480px', margin: '0 auto 28px', lineHeight: '1.75' }}>
            Read every lesson. Build your first story. No card required. Upgrade when you want the full toolkit.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--off-white)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '4px',
            gap: '2px',
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

        {/* Cards */}
        <div className="fade-up fade-up-delay-1 pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'start',
        }}>
          {plans.map((plan, idx) => {
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
                  padding: '32px 30px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: isPopular
                    ? '0 8px 40px rgba(45,80,22,0.18), 0 2px 8px rgba(45,80,22,0.10)'
                    : isPro
                    ? '0 4px 20px rgba(45,80,22,0.28), 0 1px 4px rgba(45,80,22,0.18)'
                    : 'var(--shadow-sm)',
                  position: 'relative',
                  transition: 'box-shadow 0.28s ease, transform 0.28s ease',
                  transform: 'none',
                }}
                className={isPopular ? 'pricing-card-popular' : ''}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = isPopular
                    ? '0 20px 60px rgba(45,80,22,0.22), 0 4px 16px rgba(45,80,22,0.14)'
                    : isPro
                    ? '0 16px 56px rgba(45,80,22,0.36), 0 2px 8px rgba(45,80,22,0.22)'
                    : 'var(--shadow-lg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = isPopular
                    ? '0 8px 40px rgba(45,80,22,0.18), 0 2px 8px rgba(45,80,22,0.10)'
                    : isPro
                    ? '0 4px 20px rgba(45,80,22,0.28), 0 1px 4px rgba(45,80,22,0.18)'
                    : 'var(--shadow-sm)'
                }}
              >
                {/* Popular label — in-flow so all cards align */}
                <div style={{ height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  {isPopular && (
                    <div style={{
                      background: 'var(--green)', color: '#fff',
                      fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '4px 14px', borderRadius: '20px',
                      fontFamily: 'JetBrains Mono, monospace',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(45,80,22,0.25)',
                    }}>Popular</div>
                  )}
                </div>

                {/* Tier header */}
                <div style={{ marginBottom: '24px' }}>
                  {/* Tier name */}
                  <div style={{ marginBottom: '18px' }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                      fontFamily: 'JetBrains Mono, monospace',
                      padding: '3px 10px', borderRadius: '5px',
                      background: isPro
                        ? 'rgba(255,255,255,0.15)'
                        : isPopular
                        ? 'var(--green-pale)'
                        : 'var(--off-white)',
                      color: isPro
                        ? 'rgba(255,255,255,0.85)'
                        : 'var(--green)',
                      border: isPro
                        ? '1px solid rgba(255,255,255,0.2)'
                        : '1px solid var(--green-border)',
                    }}>{plan.name}</span>
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px', marginBottom: '4px' }}>
                    {price === 0 ? (
                      <span style={{
                        fontSize: '44px', fontWeight: '800',
                        fontFamily: 'var(--font-display)',
                        color: isPro ? '#fff' : 'var(--text-dark)',
                        lineHeight: 1,
                      }}>Free</span>
                    ) : (
                      <>
                        <span style={{ fontSize: '22px', fontWeight: '700', color: isPro ? 'rgba(255,255,255,0.6)' : 'var(--text-soft)', alignSelf: 'flex-start', marginTop: '8px' }}>$</span>
                        <span style={{
                          fontSize: '44px', fontWeight: '800',
                          fontFamily: 'var(--font-display)',
                          color: isPro ? '#fff' : isPopular ? 'var(--green)' : 'var(--text-dark)',
                          lineHeight: 1,
                        }}>{price % 1 === 0 ? price : price.toFixed(2)}</span>
                        <span style={{ fontSize: '14px', color: isPro ? 'rgba(255,255,255,0.5)' : 'var(--text-soft)', marginBottom: '6px', alignSelf: 'flex-end' }}>/mo</span>
                      </>
                    )}
                  </div>

                  {/* Annual note */}
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

                {/* Divider */}
                <div style={{ height: '1px', background: isPro ? 'rgba(255,255,255,0.12)' : 'var(--border)', marginBottom: '22px' }} />

                {/* Features */}
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
                          fontSize: '14px',
                          lineHeight: '1.5',
                          color: isPro
                            ? (isDim ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.88)')
                            : (isDim ? 'var(--text-soft)' : 'var(--text-dark)'),
                          fontStyle: isDim ? 'italic' : 'normal',
                        }}>{text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA button */}
                {plan.ctaStyle === 'ghost' && (
                  <a href="/auth?signup=true" style={{ textDecoration: 'none' }}>
                    <button className="btn-ghost" style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: '600' }}>
                      {plan.cta}
                    </button>
                  </a>
                )}
                {plan.ctaStyle === 'primary' && (
                  <a href="/auth?signup=true" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ width: '100%', padding: '13px', fontSize: '14px', fontWeight: '700' }}>
                      {plan.cta}
                    </button>
                  </a>
                )}
                {plan.ctaStyle === 'inverted' && (
                  <a href="/auth?signup=true" style={{ textDecoration: 'none' }}>
                    <button style={{
                      width: '100%', padding: '13px',
                      background: 'rgba(255,255,255,0.14)',
                      border: '1px solid rgba(255,255,255,0.28)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '14px', fontWeight: '700',
                      cursor: 'pointer',
                      fontFamily: 'Source Sans 3, sans-serif',
                      transition: 'background 0.18s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                    >{plan.cta}</button>
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* Trust line */}
        <div className="fade-up fade-up-delay-2" style={{ textAlign: 'center', marginTop: '36px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', lineHeight: '1.7' }}>
            No credit card required to start. Cancel any paid plan at any time.{` `}
            <a href="/terms" style={{ color: 'var(--green)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Terms apply.</a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div style={{ background: 'var(--white)' }}>

      {/* Hero */}
      <section className="hero-grid" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 24px 56px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>
        <div className="fade-up">
          <div className="badge" style={{ marginBottom: '16px' }}>For writers who mean it</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: 'var(--green)',
            marginBottom: '18px',
            letterSpacing: '-0.01em',
          }}>
            The story in your head<br />
            <em style={{ fontStyle: 'italic', color: 'var(--green-light)' }}>deserves to make it to the page.</em>
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-mid)',
            lineHeight: '1.75',
            marginBottom: '28px',
            maxWidth: '440px',
          }}>
            You've got the idea. Now what? Eve walks you through the same story principles the best writers use — scene by scene, character by character — so you actually understand what you're building before you write it.
          </p>
          <div className="hero-cta-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '14px', padding: '10px 24px' }}>
                Start here — it's free
              </button>
            </Link>
            <Link href="/learn" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ fontSize: '14px', padding: '10px 22px' }}>
                Learn the craft
              </button>
            </Link>
          </div>
        </div>

        {/* Mockup card */}
        <div className="fade-up fade-up-delay-2 hero-mockup" style={{
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 8px 40px rgba(26,81,46,0.10)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Story Project</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text-dark)' }}>The Long Road Home</h3>
            </div>
            <span className="badge">Act 2 of 3</span>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-soft)', marginBottom: '6px' }}>
              <span>Story completion</span><span>42%</span>
            </div>
            <div style={{ height: '5px', background: 'var(--green-pale)', borderRadius: '3px' }}>
              <div style={{ width: '42%', height: '100%', background: 'var(--green-light)', borderRadius: '3px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { done: true, text: 'Inciting incident defined' },
              { done: true, text: 'Protagonist goal established' },
              { done: false, text: 'Midpoint reversal —what changes?' },
              { done: false, text: 'Antagonist motivation fleshed out' },
              { done: false, text: 'Act 2 low point identified' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '17px', height: '17px', borderRadius: '3px', flexShrink: 0,
                  background: item.done ? 'var(--green)' : 'transparent',
                  border: item.done ? 'none' : '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {item.done && <span style={{ color: '#fff', fontSize: '10px' }}>&#10003;</span>}
                </div>
                <span style={{
                  fontSize: '13px',
                  color: item.done ? 'var(--text-soft)' : 'var(--text-dark)',
                  textDecoration: item.done ? 'line-through' : 'none',
                }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="tip-box" style={{ marginTop: '20px' }}>
            <strong>Session note:</strong> Your midpoint is the spine of the story. Something must change irreversibly here —your protagonist cannot go back.
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-fade" style={{
        background: 'var(--off-white)',
        borderTop: '1px solid var(--green-border)',
        borderBottom: '1px solid var(--green-border)',
        padding: '52px 24px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px',
        }}>
          {pillars.map((p, i) => (
            <div key={i}>
              <div style={{ width: '24px', height: '2px', background: 'var(--green)', marginBottom: '12px' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '15px', color: 'var(--green)', marginBottom: '6px' }}>{p.title}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content depth signal */}
      <section className="section-fade" style={{ background: '#2D5016', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '32px' }}>
            What's inside the library
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
            {[
              { number: '58+', label: 'Craft lessons', sub: 'Screenwriting, novels, and short fiction', href: '/learn' },
              { number: '11', label: 'Story frameworks', sub: "Save the Cat, Hero's Journey, and 5 more", href: '/frameworks' },
              { number: '87+', label: 'Glossary terms', sub: 'Screenwriting, novels, and short fiction', href: '/glossary' },
              { number: '5', label: 'Learning paths', sub: 'Beginner to advanced', href: '/learn/tracks' },
              { number: '4', label: 'Industry guides', sub: 'Hollywood, publishing, short story, reading list', href: '/road-to-hollywood' },
              { number: '53+', label: 'Famous scripts', sub: 'With direct links to every source', href: '/scripts' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{ textDecoration: 'none', display: 'block', padding: '24px 20px', borderRadius: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.13)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: '#fff', lineHeight: '1', marginBottom: '6px' }}>{s.number}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.4' }}>{s.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* No AI section */}
      <section className="split-grid section-fade" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '56px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>
        <div className="fade-up">
          <div className="badge" style={{ marginBottom: '20px', background: 'var(--green)', color: '#fff', borderColor: 'var(--green)' }}>
            No AI. Ever.
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: '700',
            color: 'var(--text-dark)',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            Your story.<br />Your words.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '16px' }}>
            Every AI writing tool promises to make it faster. What they actually do is make it theirs. The sentences come out smooth and hollow, and somewhere in the middle of it you stop recognizing the story as yours.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
            Eve has no AI. No autocomplete. No generation. It's a thinking tool — the kind your best friend in film school would hand you before your first serious project. The ideas stay yours. We just help you figure out what they mean.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Eve never writes a word for you',
              'Eve never suggests what happens next',
              'Your content is never used to train any model',
              'No shortcuts. No shortcuts. No shortcuts.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: 'var(--green)', flexShrink: 0, marginTop: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#fff', fontSize: '10px' }}>&#10003;</span>
                </div>
                <span style={{ fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up fade-up-delay-2" style={{
          background: 'var(--green)',
          borderRadius: '16px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative large quote mark */}
          <div style={{
            position: 'absolute', top: '16px', right: '24px',
            fontFamily: 'var(--font-display)',
            fontSize: '120px', lineHeight: 1,
            color: 'rgba(255,255,255,0.07)',
            fontStyle: 'italic',
            userSelect: 'none',
            pointerEvents: 'none',
          }}>&ldquo;</div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.2vw, 23px)',
            fontStyle: 'italic',
            color: '#fff',
            lineHeight: '1.6',
            position: 'relative',
            zIndex: 1,
          }}>
            &ldquo;The discipline of the writer is to learn to be still and listen to what his subject has to tell him.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              Rachel Carson
            </p>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.75' }}>
            Eve is a thinking tool. It holds your structure so your mind stays free for the only thing that matters —the work.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-fade" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '52px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: '10px' }}>Choose your framework</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
              Every project starts with a structure choice. Pick the framework that fits how you think — or skip the template entirely and build your own.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '16px',
          }}>
            {frameworks.slice(0, 4).map((f, i) => (
              <div key={i} className="card" style={{ padding: '26px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-display)', lineHeight: '1.3' }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '10px' }}>by {f.author}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '14px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.02em' }}>Best for: {f.best_for}</p>
              </div>
            ))}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {frameworks.slice(4).map((f, i) => (
              <div key={i} className="card" style={{ padding: '26px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-display)', lineHeight: '1.3' }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '10px' }}>by {f.author}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '14px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.02em' }}>Best for: {f.best_for}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Pricing */}
      <PricingSection />

      {/* CTA */}
      <section className="section-fade" style={{ background: '#2D5016', padding: '52px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#FDFCF9', marginBottom: '10px',
          }}>Your story is waiting.</h2>
          <p style={{
            color: 'rgba(244,249,240,0.75)', fontSize: '15px', marginBottom: '20px',
            maxWidth: '400px', lineHeight: '1.7',
          }}>
            Start with whatever you have. A scene, a name, a feeling. Work it out here — then write.
          </p>
          <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'var(--green)', color: '#FDFCF9',
              fontFamily: 'var(--font-ui)', fontWeight: '700',
              fontSize: '14px', padding: '10px 24px', borderRadius: '8px',
              border: 'none', cursor: 'pointer',
            }}>
              Create your free account
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--text-dark)',
        padding: '48px 24px',
      }}>
        <div className="footer-grid" style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '48px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>E</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', color: '#fff' }}>Eve</span>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', maxWidth: '260px' }}>
              A story workspace for writers who believe structure serves the work —not the other way around. No AI. No shortcuts.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '14px' }}>Product</p>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/projects', label: 'Projects' },
              { href: '/session', label: 'Session Mode' },
              { href: '/ideas', label: 'Idea Bank' },
              { href: '/pricing', label: 'Pricing' },
            ].map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '10px', lineHeight: '1.5' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{l.label}</a>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '14px' }}>Learn</p>
            {[
              { href: '/for-beginners', label: 'Start Here' },
              { href: '/learn', label: 'Craft Library' },
              { href: '/learn/tracks', label: 'Learning Paths' },
              { href: '/frameworks', label: 'Frameworks' },
              { href: '/glossary', label: 'Glossary' },
              { href: '/visual-craft', label: 'Visual Craft' },
            ].map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '10px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{l.label}</a>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '14px' }}>Guides</p>
            {[
              { href: '/road-to-hollywood', label: 'Road to Hollywood' },
              { href: '/road-to-publishing', label: 'Road to Publishing' },
              { href: '/road-to-short-story', label: 'Road to Short Story' },
              { href: '/reading-list', label: 'Reading List' },
              { href: '/scripts', label: 'Famous Scripts' },
              { href: '/genres', label: 'Genre Guide' },
            ].map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '10px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{l.label}</a>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '14px' }}>Legal</p>
            {[
              { href: '/about', label: 'About' },
              { href: '/terms', label: 'Terms of Service' },
              { href: '/privacy', label: 'Privacy Policy' },
            ].map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '10px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{l.label}</a>
            ))}
          </div>
        </div>

        <div style={{
          maxWidth: '1200px', margin: '32px auto 0',
          paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: '12px', color: 'rgba(255,255,255,0.3)',
        }}>
          <p>© {new Date().getFullYear()} Eve. All rights reserved.</p>
          <p>Built for writers. No AI inside.</p>
        </div>
      </footer>

    </div>
  )
}

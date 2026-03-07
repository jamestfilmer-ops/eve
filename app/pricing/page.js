import Link from 'next/link'

export const metadata = {
  title: 'Pricing — Eve',
  description: 'Start free. Craft lessons are free forever. Pro tools unlock when your story needs them.',
}

const tiers = [
  {
    name: 'Free',
    tagline: 'Start your story.',
    price: { monthly: 0, annual: 0 },
    highlight: false,
    badge: null,
    features: [
      { text: '1 active project', included: true },
      { text: 'All 30+ craft lessons', included: true },
      { text: 'Save the Cat framework', included: true },
      { text: '25 ideas in your bank', included: true },
      { text: 'Characters & scenes', included: true },
      { text: 'Session mode (1 project)', included: true },
      { text: 'Additional frameworks', included: false },
      { text: 'Unlimited projects', included: false },
      { text: 'Beat sheet auto-fill', included: false },
      { text: 'Export to PDF', included: false },
      { text: 'Themes Map canvas', included: false },
      { text: 'Timeline view', included: false },
    ],
    cta: 'Create free account',
    ctaHref: '/auth?signup=true',
    ctaStyle: 'ghost',
  },
  {
    name: 'Studio',
    tagline: 'For the serious draft.',
    price: { monthly: 4.99, annual: 30 },
    highlight: true,
    badge: 'Most popular',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'All 30+ craft lessons', included: true },
      { text: 'All 7 frameworks', included: true },
      { text: 'Unlimited idea bank', included: true },
      { text: 'Characters & scenes', included: true },
      { text: 'Session mode (all projects)', included: true },
      { text: 'Beat sheet auto-fill', included: true },
      { text: 'Export to PDF', included: true },
      { text: 'Themes Map canvas', included: true },
      { text: 'Timeline view', included: true },
      { text: 'Priority support', included: false },
      { text: 'Early access features', included: false },
    ],
    cta: 'Start Studio — free 7 days',
    ctaHref: '/auth?signup=true&plan=studio',
    ctaStyle: 'primary',
  },
  {
    name: 'Pro',
    tagline: 'For writers who ship.',
    price: { monthly: 9.99, annual: 72 },
    highlight: false,
    badge: 'Coming soon',
    features: [
      { text: 'Everything in Studio', included: true },
      { text: 'Unlimited projects', included: true },
      { text: 'All 7 frameworks', included: true },
      { text: 'Unlimited idea bank', included: true },
      { text: 'Beat sheet auto-fill', included: true },
      { text: 'Export to PDF + Final Draft', included: true },
      { text: 'Themes Map canvas', included: true },
      { text: 'Timeline view', included: true },
      { text: 'Priority support', included: true },
      { text: 'Early access to new features', included: true },
      { text: 'Multiple story bibles', included: true },
      { text: 'Collaboration (coming)', included: true },
    ],
    cta: 'Join the waitlist',
    ctaHref: '/auth?signup=true&plan=pro',
    ctaStyle: 'ghost',
  },
]

const faqs = [
  {
    q: 'What happens to my projects if I downgrade?',
    a: 'Your work is always safe. If you downgrade to Free, your projects are preserved — you just lose access to editing more than 1 active at a time. Nothing is deleted.'
  },
  {
    q: 'Is the free plan really free forever?',
    a: 'Yes. All craft lessons, 1 project, Save the Cat framework, 25 ideas — free forever, no credit card required.'
  },
  {
    q: 'When will Stripe / payments be available?',
    a: 'Studio and Pro tiers are coming soon. Sign up for free and you\'ll be notified when billing is live. Early signups get priority access.'
  },
  {
    q: 'Does Eve use AI to help me write?',
    a: 'No. Never. Eve contains zero AI. No autocomplete, no suggestions, no generation. Your words are entirely yours.'
  },
  {
    q: 'Can I use Eve for novels, not just screenplays?',
    a: 'Yes. The frameworks — especially Story Circle, Hero\'s Journey, and Freeform — work for novels, short stories, and any long-form narrative. The craft library covers both mediums.'
  },
]

export default function PricingPage() {
  return (
    <div style={{ background: 'var(--white)' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, var(--green-pale) 0%, var(--white) 100%)',
        borderBottom: '1px solid var(--green-border)',
        padding: '80px 24px 48px',
        textAlign: 'center',
      }}>
        <div className="fade-up" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Pricing</div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: '700',
            color: 'var(--green)',
            lineHeight: '1.15',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}>
            Start free.<br />Write seriously.
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'var(--text-mid)',
            lineHeight: '1.8',
            maxWidth: '440px',
            margin: '0 auto',
            fontFamily: 'Source Sans 3, sans-serif',
          }}>
            All craft lessons are free forever. Pro tools unlock when your story demands them.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}>
          {tiers.map((tier, i) => {
            const isHighlight = tier.highlight
            const isSoon = tier.badge === 'Coming soon'
            return (
              <div key={i} style={{
                position: 'relative',
                background: isHighlight ? 'var(--green)' : '#fff',
                border: isHighlight ? 'none' : '1px solid var(--border)',
                borderRadius: '20px',
                padding: isHighlight ? '40px 36px' : '32px',
                boxShadow: isHighlight
                  ? '0 20px 60px rgba(45,80,22,0.28)'
                  : '0 4px 16px rgba(45,80,22,0.06)',
                transform: isHighlight ? 'scale(1.04)' : 'scale(1)',
                display: 'flex',
                flexDirection: 'column',
              }}>

                {tier.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: isHighlight ? 'var(--amber)' : 'var(--text-soft)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                    fontFamily: 'Source Sans 3, sans-serif',
                  }}>{tier.badge}</div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: isHighlight ? 'rgba(255,255,255,0.6)' : 'var(--text-soft)', marginBottom: '6px' }}>{tier.name}</p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: isHighlight ? '#fff' : 'var(--green)', marginBottom: '0' }}>{tier.tagline}</h2>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  {tier.price.monthly === 0 ? (
                    <div>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: '700', color: isHighlight ? '#fff' : 'var(--green)' }}>Free</span>
                      <p style={{ fontSize: '13px', color: isHighlight ? 'rgba(255,255,255,0.5)' : 'var(--text-soft)', marginTop: '6px' }}>Always — no credit card</p>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: '700', color: isHighlight ? '#fff' : 'var(--green)', lineHeight: '1' }}>${tier.price.monthly}</span>
                        <span style={{ fontSize: '14px', color: isHighlight ? 'rgba(255,255,255,0.6)' : 'var(--text-soft)', marginBottom: '7px' }}>/mo</span>
                      </div>
                      <p style={{ fontSize: '13px', color: isHighlight ? 'rgba(255,255,255,0.5)' : 'var(--text-soft)', marginTop: '6px' }}>
                        or ${tier.price.annual}/yr — save {Math.round((1 - (tier.price.annual / (tier.price.monthly * 12))) * 100)}%
                      </p>
                    </div>
                  )}
                </div>

                <div style={{ height: '1px', background: isHighlight ? 'rgba(255,255,255,0.15)' : 'var(--border)', marginBottom: '24px' }} />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {tier.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', opacity: f.included ? 1 : 0.38 }}>
                      <div style={{
                        width: '16px', height: '16px', flexShrink: 0, marginTop: '2px',
                        borderRadius: '50%',
                        background: f.included ? (isHighlight ? 'rgba(255,255,255,0.18)' : 'var(--green-pale)') : 'transparent',
                        border: f.included ? 'none' : `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {f.included && (
                          <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                            <path d="M1 3.5L3 5.5L7 1" stroke={isHighlight ? '#fff' : 'var(--green)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span style={{ fontSize: '14px', color: isHighlight ? (f.included ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.38)') : (f.included ? 'var(--text-dark)' : 'var(--text-soft)'), lineHeight: '1.5' }}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={isSoon ? '#' : tier.ctaHref} style={{ textDecoration: 'none' }}>
                  <div style={{
                    width: '100%',
                    padding: '13px 20px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '700',
                    fontFamily: 'Source Sans 3, sans-serif',
                    textAlign: 'center',
                    cursor: isSoon ? 'default' : 'pointer',
                    border: isHighlight ? '2px solid rgba(255,255,255,0.3)' : (tier.ctaStyle === 'primary' ? 'none' : '1.5px solid var(--green-border)'),
                    background: isHighlight ? 'rgba(255,255,255,0.14)' : (tier.ctaStyle === 'primary' ? 'var(--green)' : 'transparent'),
                    color: isHighlight ? '#fff' : (tier.ctaStyle === 'primary' ? '#fff' : 'var(--green)'),
                    opacity: isSoon ? 0.6 : 1,
                    boxSizing: 'border-box',
                  }}>{tier.cta}</div>
                </Link>

              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--green)', marginBottom: '40px', textAlign: 'center' }}>
            Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '28px' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: 'var(--green)', marginBottom: '10px', fontWeight: '600' }}>{faq.q}</p>
                <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.75' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: 'var(--green)', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 36px)', color: '#fff', marginBottom: '12px' }}>
          Your first story starts free.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '28px' }}>
          No credit card. No AI. No shortcuts.
        </p>
        <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#fff', color: 'var(--green)',
            fontWeight: '700', fontSize: '15px', padding: '13px 32px',
            borderRadius: '8px', border: 'none', cursor: 'pointer',
            fontFamily: 'Source Sans 3, sans-serif',
          }}>Create your free account</button>
        </Link>
      </section>

    </div>
  )
}

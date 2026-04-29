'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

const frameworks = [
  { name: "Save the Cat", author: "Blake Snyder", description: "15 plot beats mapped to page numbers. The most practical Hollywood structure guide ever written. Every major studio film uses it.", best_for: "Screenplays, commercial films", acts: "3 Acts / 15 Beats" },
  { name: "Hero's Journey", author: "Joseph Campbell", description: "The mythic structure underlying every great story from Homer to Star Wars. 12 stages from the ordinary world through transformation and return.", best_for: "Epic stories, character transformation", acts: "3 Acts / 12 Stages" },
  { name: "Story Circle", author: "Dan Harmon", description: "A simplified 8-step loop distilled from Campbell. Beloved by television writers. Simple enough to hold in your head during a session.", best_for: "TV pilots, short stories, episodic work", acts: "1 Circle / 8 Steps" },
  { name: "Sequence Approach", author: "Frank Daniel", description: "Three-act structure broken into 8 sequences of 10-15 pages each, every one with its own tension arc. Fixes the Act 2 sag problem.", best_for: "Complex plots, multi-POV stories", acts: "3 Acts / 8 Sequences" },
  { name: "Fichtean Curve", author: "J.G. Fichte", description: "Begins in rising action, not setup. Crisis after crisis, each one raising the stakes, until the climax resolves everything at once.", best_for: "Thrillers, short stories, high-tension drama", acts: "Rising action only" },
  { name: "Kishōtenketsu", author: "East Asian tradition", description: "Four acts: introduction, development, twist, reconciliation. No conflict required. The story turns on surprise and resonance.", best_for: "Literary fiction, non-Western stories", acts: "4 Acts / No conflict" },
  { name: "Seven-Point Story", author: "Dan Wells", description: "Build from the ending backward. The Hook is the mirror opposite of the Resolution. Write your ending first — then find the opening.", best_for: "Novelists, genre fiction, second-act problems", acts: "3 Acts / 7 Beats" },
  { name: "Freytag's Pyramid", author: "Gustav Freytag", description: "The 1863 five-stage arc that every modern framework descended from. Most useful as a diagnostic lens over your draft.", best_for: "Diagnosing existing drafts, classical drama", acts: "5 Stages" },
  { name: "Snowflake Method", author: "Randy Ingermanson", description: "Design outward from one sentence. Expand to paragraph, then to pages, then to a full scene list. Front-loads every hard structural decision.", best_for: "Novelists who need scaffolding before they write", acts: "Design-first / 10 Steps" },
  { name: "Hauge's Six-Stage", author: "Michael Hauge", description: "Maps the outer journey against the inner journey with percentage markers. Every protagonist hides behind an Identity — the story forces them toward their Essence.", best_for: "Character-driven stories, transformation arcs", acts: "6 Stages / 5 Turning Points" },
  { name: "Freeform", author: "Your instincts", description: "No template. You build the structure as you go. Eve tracks your scenes, characters, and themes — the shape is entirely yours.", best_for: "Literary fiction, experimental work", acts: "No template" },
]

function PricingSection() {
  const [annual, setAnnual] = React.useState(true)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .stat-number')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const monthlyPrice  = 4.99
  const annualMonthly = 2.50
  const annualTotal   = 30

  return (
    <section id="pricing" style={{ background: 'var(--off-white)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>Pricing</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.15', marginBottom: '14px' }}>
            Free to start. Pro when you&apos;re ready.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--text-mid)', maxWidth: '380px', margin: '0 auto 24px', lineHeight: '1.7' }}>
            Ten lessons and one project are free, forever.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '40px', padding: '5px 7px' }}>
            <button onClick={() => setAnnual(false)} style={{ padding: '6px 18px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', background: !annual ? 'var(--green)' : 'transparent', color: !annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s' }}>Monthly</button>
            <button onClick={() => setAnnual(true)} style={{ padding: '6px 18px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', background: annual ? 'var(--green)' : 'transparent', color: annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '7px' }}>
              Annual
              <span style={{ fontSize: '10px', fontWeight: '700', background: annual ? 'rgba(255,255,255,0.25)' : 'var(--green-pale)', color: annual ? '#fff' : 'var(--green)', padding: '2px 7px', borderRadius: '10px' }}>Save 50%</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div style={{ background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.9)', transition: 'box-shadow 0.28s var(--ease-out), border-color 0.22s ease' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Free</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: 1 }}>$0</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', paddingBottom: '6px' }}>forever</span>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '22px', lineHeight: '1.5' }}>Enough to know if Eve is right for you.</p>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none', display: 'block', marginBottom: '22px' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)', cursor: 'pointer' }}>Start free</button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
              {["10 Start Here lessons", "Hero's Journey + Save the Cat", "1 story project", "Characters and Scenes tabs", "Up to 8 scenes, 4 characters", "No credit card required"].map(f => (
                <div key={f} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="7.5" cy="7.5" r="6.5" fill="var(--green-pale)" stroke="var(--green-border)" strokeWidth="1"/><path d="M4.5 7.5l2 2 4-4" stroke="var(--green)" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'linear-gradient(145deg, #3a6b1e 0%, var(--green) 50%, #2d5016 100%)', border: '1.5px solid var(--green)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-green), inset 0 1px 0 rgba(255,255,255,0.12)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '20px' }}>Most popular</div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '8px' }}>Pro</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: 1 }}>${annual ? annualMonthly : monthlyPrice}</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.65)', paddingBottom: '6px' }}>/ month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '4px' }}>{annual ? `Billed $${annualTotal}/year` : 'Billed monthly'}</p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '22px', lineHeight: '1.5' }}>Everything unlocked. No limits, no friction.</p>
            <Link href="/auth?signup=true&plan=pro" style={{ textDecoration: 'none', display: 'block', marginBottom: '22px' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--green)', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>Get Pro</button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
              {["Every lesson — 119 and growing", "All 11 story frameworks", "Unlimited projects", "Plot Holes, Timeline, Themes Map", "Story Map canvas", "Unlimited scenes and characters", "Cancel anytime"].map(f => (
                <div key={f} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="7.5" cy="7.5" r="6.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/><path d="M4.5 7.5l2 2 4-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)' }}>
          No AI. On either plan. Your work is never used to train anything.{' '}
          <a href="/pricing" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: '600' }}>Full comparison &rarr;</a>
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div style={{ background: 'var(--white)' }}>

      {/* HERO — split layout */}
      <section style={{ padding: '72px 24px 64px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="hero-grid">

          {/* Left — copy */}
          <div>
            <div className="badge fade-up" style={{ marginBottom: '18px', display: 'inline-block' }}>Free to start. No AI. No fluff.</div>
            <h1 className="fade-up fade-up-delay-1" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.2vw, 60px)',
              fontWeight: '700',
              lineHeight: '1.1',
              color: 'var(--green)',
              marginBottom: '18px',
              letterSpacing: '-0.02em',
            }}>
              The story in your head<br />
              <em style={{ fontStyle: 'italic', color: 'var(--green-light)' }}>deserves to make it to the page.</em>
            </h1>
            <p className="fade-up fade-up-delay-2" style={{
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--text-mid)',
              lineHeight: '1.75',
              marginBottom: '28px',
              maxWidth: '460px',
            }}>
              You have an idea. Maybe a whole story. What you need is the craft to get it out of your head — and a place to think it through.
            </p>
            <div className="fade-up fade-up-delay-3 hero-cta-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Link href="/start" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ fontSize: '15px', padding: '13px 26px' }}>
                  Start a story
                </button>
              </Link>
              <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
                <button className="btn-ghost" style={{ fontSize: '15px', padding: '13px 22px' }}>
                  Create account — free
                </button>
              </Link>
            </div>
            <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '22px' }}>
              {[
                { n: '119', label: 'craft lessons' },
                { n: '11', label: 'frameworks' },
                { n: '87+', label: 'glossary terms' },
                { n: '53+', label: 'famous scripts' },
              ].map(s => (
                <div key={s.n} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '20px', color: 'var(--green)', lineHeight: 1 }}>{s.n}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.04em', marginTop: '3px' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — workspace mockup */}
          <div className="fade-up fade-up-delay-2 hero-mockup" style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: '18px',
            padding: '24px',
            boxShadow: '0 14px 56px rgba(26,81,46,0.12), 0 3px 12px rgba(26,20,15,0.06)',
          }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
              {['Scenes', 'Characters', 'Beat Tracker', 'Plot Holes'].map((t, i) => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600',
                  padding: '3px 9px', borderRadius: '5px',
                  background: i === 2 ? 'var(--green-pale)' : 'transparent',
                  color: i === 2 ? 'var(--green)' : 'var(--text-soft)',
                  border: i === 2 ? '1px solid var(--green-border)' : '1px solid transparent',
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <p style={{ fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>Story Project</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--text-dark)', margin: 0 }}>The Long Road Home</h3>
              </div>
              <span className="badge">Act 2 of 3</span>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '5px' }}>
                <span>Save the Cat — 42% complete</span><span>42%</span>
              </div>
              <div style={{ height: '4px', background: 'var(--green-pale)', borderRadius: '2px' }}>
                <div style={{ width: '42%', height: '100%', background: 'var(--green-light)', borderRadius: '2px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                { done: true,  text: 'Inciting incident defined' },
                { done: true,  text: 'Protagonist goal established' },
                { done: false, text: 'Midpoint reversal — what changes?' },
                { done: false, text: 'Antagonist motivation fleshed out' },
                { done: false, text: 'Act 2 low point identified' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '7px', background: item.done ? 'var(--green-pale)' : 'var(--off-white)', border: `1px solid ${item.done ? 'var(--green-border)' : 'var(--border)'}` }}>
                  <div style={{ width: '15px', height: '15px', borderRadius: '3px', flexShrink: 0, background: item.done ? 'var(--green)' : 'transparent', border: item.done ? 'none' : '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.done && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span style={{ fontSize: '12px', color: item.done ? 'var(--green)' : 'var(--text-dark)', textDecoration: item.done ? 'line-through' : 'none', textDecorationColor: 'var(--text-soft)' }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="tip-box" style={{ marginTop: '14px', fontSize: '12px' }}>
              <strong>Craft tip:</strong> Your midpoint is the spine of the story. Something must change irreversibly here.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-fade" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>How Eve works</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0, lineHeight: '1.2' }}>Four principles behind every feature.</h2>
            </div>
            <Link href="/for-beginners" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ fontSize: '13px', padding: '8px 16px' }}>New to writing? Start here</button>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px' }}>
            {[
              { n: '01', title: "One line is enough to start", body: "A name. A feeling. A scene you keep returning to. You don't need a full outline — you need somewhere to put what you already have." },
              { n: '02', title: "Character before everything", body: "Most stories stall because the writer started with plot. What does your protagonist want? What are they afraid of? What do they need?" },
              { n: '03', title: "Name what's broken", body: "Every draft has holes. The ones you ignore become the ones that sink the story. Flag them while they're small — before they're structural." },
              { n: '04', title: "Pick up without losing the thread", body: "Real writing happens in twenty-minute gaps. Eve keeps your scenes, characters, and structure exactly where you left them." },
            ].map((p, i) => (
              <div key={i} className="card card-lift" style={{ padding: '26px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.08em', marginBottom: '12px' }}>{p.n}</span>
                <div style={{ width: '20px', height: '3px', background: 'linear-gradient(90deg, var(--green-light), var(--green))', borderRadius: '2px', marginBottom: '12px', flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '15px', color: 'var(--green)', marginBottom: '8px', lineHeight: '1.3' }}>{p.title}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.75', margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT DEPTH */}
      <section className="section-fade" style={{ background: '#1a4a20', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>The craft library</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', margin: 0, letterSpacing: '-0.01em' }}>
                A complete craft education.<br />
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>No film school required.</span>
              </h2>
            </div>
            <Link href="/learn" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '9px 18px', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>Browse the library</button>
            </Link>
          </div>
          <div className="library-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
            {[
              { number: '119', label: 'Craft lessons', sub: 'Structure, character, dialogue, directors', href: '/learn' },
              { number: '11',   label: 'Frameworks', sub: "Save the Cat, Hero's Journey, and 9 more", href: '/frameworks' },
              { number: '87+',  label: 'Glossary terms', sub: 'Screenwriting, novels, short fiction', href: '/glossary' },
              { number: '5',    label: 'Learning paths', sub: 'Beginner to advanced, by medium', href: '/learn/tracks' },
              { number: '4',    label: 'Industry guides', sub: 'Hollywood, publishing, short story', href: '/road-to-hollywood' },
              { number: '53+',  label: 'Famous scripts', sub: 'Every one linked to its source', href: '/scripts' },
            ].map((s, i) => (
              <a key={i} href={s.href} className="card-dark" style={{ textDecoration: 'none', display: 'block', padding: '20px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: '#fff', lineHeight: '1', marginBottom: '5px' }}>{s.number}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.9)', marginBottom: '3px' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.5' }}>{s.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NO AI — two-column, compact */}
      <section className="section-fade" style={{ background: 'var(--white)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }} className="no-ai-grid">
          <div>
            <div className="badge" style={{ marginBottom: '18px', background: 'var(--green)', color: '#fff', borderColor: 'var(--green)', display: 'inline-block' }}>No AI. Ever.</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.1', marginBottom: '18px', letterSpacing: '-0.02em' }}>
              Your story.<br />Your words.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '14px' }}>
              Every AI writing tool promises to make it faster. What they actually do is make it theirs. The sentences come out smooth and hollow, and somewhere in the middle you stop recognizing the story as yours.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
              Eve has no AI. No autocomplete. No generation. It&apos;s a thinking tool — the kind your best friend in film school would hand you before your first serious project.
            </p>
            <blockquote style={{ borderLeft: '3px solid var(--green-border)', paddingLeft: '18px', margin: 0 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontStyle: 'italic', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '8px' }}>
                &ldquo;The discipline of the writer is to learn to be still and listen to what his subject has to tell him.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.08em', textTransform: 'uppercase', fontStyle: 'normal' }}>Rachel Carson</cite>
            </blockquote>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { label: 'Eve never writes a word for you', desc: 'The prose is yours, start to finish.' },
              { label: 'No autocomplete. No suggestions.', desc: 'No generation. No prompting. Nothing.' },
              { label: 'Your content trains nothing', desc: 'We never touch your work for any model.' },
              { label: 'The ideas stay yours', desc: 'All of them. Always. No exceptions.' },
            ].map((item, i) => (
              <div key={i} className="card card-lift" style={{ padding: '18px' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', flexShrink: 0 }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px', lineHeight: '1.4' }}>{item.label}</p>
                <p style={{ fontSize: '11px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="section-fade" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Story Frameworks</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 34px)', fontWeight: '700', margin: 0, lineHeight: '1.2', color: 'var(--text-dark)' }}>Pick a framework. Or don&apos;t.</h2>
            </div>
            <Link href="/frameworks" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ fontSize: '13px', padding: '8px 16px' }}>See all 11 →</button>
            </Link>
          </div>
          <div className="hp-framework-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '10px' }}>
            {frameworks.slice(0, 4).map((f, i) => (
              <div key={i} className="card card-lift shine-on-hover" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', gap: '6px' }}>
                  <h3 style={{ fontSize: '14px', fontFamily: 'var(--font-display)', lineHeight: '1.3', color: 'var(--text-dark)', margin: 0 }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '9px', whiteSpace: 'nowrap', flexShrink: 0, padding: '2px 6px' }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '10px', color: 'var(--text-soft)', marginBottom: '8px' }}>by {f.author}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '10px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '10px', color: 'var(--green)', fontWeight: '600', margin: 0 }}>{f.best_for}</p>
              </div>
            ))}
          </div>
          <div className="hp-framework-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '10px' }}>
            {frameworks.slice(4, 8).map((f, i) => (
              <div key={i} className="card card-lift shine-on-hover" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', gap: '6px' }}>
                  <h3 style={{ fontSize: '14px', fontFamily: 'var(--font-display)', lineHeight: '1.3', color: 'var(--text-dark)', margin: 0 }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '9px', whiteSpace: 'nowrap', flexShrink: 0, padding: '2px 6px' }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '10px', color: 'var(--text-soft)', marginBottom: '8px' }}>by {f.author}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '10px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '10px', color: 'var(--green)', fontWeight: '600', margin: 0 }}>{f.best_for}</p>
              </div>
            ))}
          </div>
          <div className="hp-framework-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {frameworks.slice(8).map((f, i) => (
              <div key={i} className="card card-lift shine-on-hover" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', gap: '6px' }}>
                  <h3 style={{ fontSize: '14px', fontFamily: 'var(--font-display)', lineHeight: '1.3', color: 'var(--text-dark)', margin: 0 }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '9px', whiteSpace: 'nowrap', flexShrink: 0, padding: '2px 6px' }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '10px', color: 'var(--text-soft)', marginBottom: '8px' }}>by {f.author}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '10px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '10px', color: 'var(--green)', fontWeight: '600', margin: 0 }}>{f.best_for}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingSection />

      {/* FINAL CTA */}
      <section className="section-fade" style={{ background: '#1a4a20', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.1', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            The story won&apos;t write itself.
          </h2>
          <p style={{ color: 'rgba(244,249,240,0.7)', fontSize: '16px', marginBottom: '28px', lineHeight: '1.7' }}>
            But it will get written if you have somewhere to work it out. Start free — no card, no catch.
          </p>
          <Link href="/start" style={{ textDecoration: 'none' }}>
            <button className="btn-primary glow-pulse shine-on-hover" style={{ fontSize: '16px', padding: '14px 34px' }}>
              Start a story — free
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--text-dark)', padding: '56px 24px 36px' }}>
        <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>E</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', color: '#fff' }}>Eve</span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', maxWidth: '240px' }}>
              A craft library and story workspace. No AI. No autocomplete. Just the work.
            </p>
          </div>

          {[
            { heading: 'Product', links: [
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/projects',  label: 'Projects' },
              { href: '/session',   label: 'Session Mode' },
              { href: '/ideas',     label: 'Idea Bank' },
              { href: '/pricing',   label: 'Pricing' },
            ]},
            { heading: 'Learn', links: [
              { href: '/for-beginners', label: 'Start Here' },
              { href: '/learn',         label: 'Craft Library' },
              { href: '/learn/tracks',  label: 'Learning Paths' },
              { href: '/frameworks',    label: 'Frameworks' },
              { href: '/glossary',      label: 'Glossary' },
            ]},
            { heading: 'Guides', links: [
              { href: '/road-to-hollywood',   label: 'Road to Hollywood' },
              { href: '/road-to-publishing',  label: 'Road to Publishing' },
              { href: '/road-to-short-story', label: 'Road to Short Story' },
              { href: '/reading-list',        label: 'Reading List' },
              { href: '/scripts',             label: 'Famous Scripts' },
            ]},
            { heading: 'Legal', links: [
              { href: '/about',   label: 'About' },
              { href: '/terms',   label: 'Terms of Service' },
              { href: '/privacy', label: 'Privacy Policy' },
            ]},
          ].map((col, i) => (
            <div key={i}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '14px' }}>{col.heading}</p>
              {col.links.map((l, j) => (
                <a key={j} href={l.href} className="footer-link">{l.label}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.28)', flexWrap: 'wrap', gap: '8px' }}>
          <p>&#169; {new Date().getFullYear()} Eve. All rights reserved.</p>
          <p>Built for writers. No AI inside.</p>
        </div>
      </footer>

    </div>
  )
}

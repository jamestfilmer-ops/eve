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
    title: "One line is enough to start",
    body: "A name. A feeling. A scene you keep returning to. You don't need a full outline — you need somewhere to put what you already have. Eve is that place."
  },
  {
    title: "Character before everything",
    body: "Most stories stall because the writer started with plot. What does your protagonist want? What are they afraid of? What do they need that they'd never admit? Answer those three things and the story starts moving."
  },
  {
    title: "Name what's broken",
    body: "Every draft has holes. The ones you ignore become the ones that sink the story. Eve gives you a place to flag them while they're small — before they're structural."
  },
  {
    title: "Pick up without losing the thread",
    body: "Real writing happens in twenty-minute gaps between everything else. Eve keeps your scenes, characters, and structure exactly where you left them — so the next session costs nothing to start."
  },
]


// ─── Pricing Section ───────────────────────────────────────────────────────────

// ─── Pricing Section (used on homepage) ───────────────────────────────────────

function PricingSection() {
  const [annual, setAnnual] = React.useState(true)
  const monthlyPrice = 8
  const annualMonthly = 5
  const annualTotal = 60

  return (
    <section id="pricing" style={{ background: 'var(--off-white)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '16px' }}>Pricing</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.2', marginBottom: '16px' }}>
            Free to start.<br />Pro when you are ready.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--text-mid)', maxWidth: '440px', margin: '0 auto 28px', lineHeight: '1.7' }}>
            Ten lessons and one project are free, forever. Pro unlocks everything with no limits.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '40px', padding: '5px 7px' }}>
            <button onClick={() => setAnnual(false)} style={{ padding: '6px 18px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', background: !annual ? 'var(--green)' : 'transparent', color: !annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s' }}>Monthly</button>
            <button onClick={() => setAnnual(true)} style={{ padding: '6px 18px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', background: annual ? 'var(--green)' : 'transparent', color: annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '7px' }}>
              Annual
              <span style={{ fontSize: '10px', fontWeight: '700', background: annual ? 'rgba(255,255,255,0.25)' : 'var(--green-pale)', color: annual ? '#fff' : 'var(--green)', padding: '2px 7px', borderRadius: '10px' }}>Save 38%</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {/* Free */}
          <div style={{ background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Free</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: 1 }}>$0</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', paddingBottom: '5px' }}>forever</span>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '24px', lineHeight: '1.5' }}>Enough to know if Eve is right for you.</p>
            <a href="/auth?signup=true" style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
              <button style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)', cursor: 'pointer' }}>Start free</button>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
              {["10 Start Here lessons", "Hero's Journey + Save the Cat", "1 story project", "Characters and Scenes tabs", "Up to 8 scenes, 4 characters", "No credit card required"].map(f => (
                <div key={f} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="7.5" cy="7.5" r="6.5" fill="var(--green-pale)" stroke="var(--green-border)" strokeWidth="1"/><path d="M4.5 7.5l2 2 4-4" stroke="var(--green)" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro */}
          <div style={{ background: 'var(--green)', border: '1.5px solid var(--green)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '20px' }}>Most popular</div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '8px' }}>Pro</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: '700', color: '#fff', lineHeight: 1 }}>${annual ? annualMonthly : monthlyPrice}</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.65)', paddingBottom: '5px' }}>/ month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '4px' }}>{annual ? `Billed $${annualTotal}/year` : 'Billed monthly'}</p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '24px', lineHeight: '1.5' }}>Everything unlocked. No limits, no friction.</p>
            <a href="/auth?signup=true&plan=pro" style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--green)', cursor: 'pointer' }}>Get Pro</button>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
              {["Every lesson — 100+ and growing", "All 7 story frameworks", "Unlimited projects", "Plot Holes, Timeline, Themes Map", "Story Map canvas", "Unlimited scenes and characters", "Cancel anytime"].map(f => (
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
          <div className="badge" style={{ marginBottom: '16px' }}>Free to start. No AI. No fluff.</div>
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
            You have an idea. Maybe a whole story. What you need is the craft to get it out of your head and onto the page — and a place to think it through. That&apos;s Eve.
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
          <div className="library-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
            {[
              { number: '100+', label: 'Craft lessons', sub: 'Structure, character, dialogue, directors', href: '/learn' },
              { number: '7', label: 'Story frameworks', sub: "Save the Cat, Hero's Journey, and 5 more", href: '/frameworks' },
              { number: '87+', label: 'Glossary terms', sub: 'Screenwriting, novels, and short fiction', href: '/glossary' },
              { number: '5', label: 'Learning paths', sub: 'Beginner to advanced, by medium', href: '/learn/tracks' },
              { number: '4', label: 'Industry guides', sub: 'Hollywood, publishing, short story, reading', href: '/road-to-hollywood' },
              { number: '53+', label: 'Famous scripts', sub: 'Every one linked to its source', href: '/scripts' },
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
              'No autocomplete. No suggestions. No generation.',
              'Your content is never used to train any model',
              'The ideas stay yours — all of them, always',
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
            Eve is a thinking tool. It holds your structure so your mind is free for the only thing that actually matters — the writing.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-fade" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '52px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: '10px' }}>Pick a framework. Or don&apos;t.</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
              Every project starts with a structure choice. Save the Cat, Hero&apos;s Journey, Story Circle, and four others — each one a different way of thinking about how stories work. Not sure? Read the descriptions. You&apos;ll know.
            </p>
          </div>
          <div className="hp-framework-grid-4" style={{
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
          <div className="hp-framework-grid-3" style={{
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
          }}>The story won&apos;t write itself.</h2>
          <p style={{
            color: 'rgba(244,249,240,0.75)', fontSize: '15px', marginBottom: '20px',
            maxWidth: '400px', lineHeight: '1.7',
          }}>
            But it will get written if you have somewhere to work it out. Start free — no card, no catch.
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
              A craft library and story workspace. No AI. No autocomplete. Just the work.
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

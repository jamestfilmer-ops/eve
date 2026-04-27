'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

const frameworks = [
  { name: "Save the Cat", author: "Blake Snyder", description: "15 plot beats mapped to page numbers. The most practical Hollywood structure guide ever written. Every major studio film uses it.", best_for: "Screenplays, commercial films", acts: "3 Acts / 15 Beats" },
  { name: "Hero's Journey", author: "Joseph Campbell", description: "The mythic structure underlying every great story from Homer to Star Wars. 12 stages from the ordinary world through transformation and return.", best_for: "Epic stories, character transformation", acts: "3 Acts / 12 Stages" },
  { name: "Story Circle", author: "Dan Harmon", description: "A simplified 8-step loop distilled from Campbell. Beloved by television writers. Simple enough to hold in your head during a session.", best_for: "TV pilots, short stories, episodic work", acts: "1 Circle / 8 Steps" },
  { name: "Sequence Approach", author: "Frank Daniel", description: "Three-act structure broken into 8 sequences of 10-15 pages each, every one with its own tension arc. Fixes the Act 2 sag problem by making each sequence a mini-film.", best_for: "Complex plots, writers who find 3-act too broad", acts: "3 Acts / 8 Sequences" },
  { name: "Fichtean Curve", author: "J.G. Fichte", description: "Begins in rising action, not setup. Crisis after crisis, each one raising the stakes, until the climax resolves everything at once. No slow burn allowed.", best_for: "Thrillers, short stories, high-tension drama", acts: "Rising action only" },
  { name: "Kishōtenketsu", author: "East Asian tradition", description: "Four acts: introduction, development, twist, reconciliation. No conflict required. The story turns on surprise and resonance, not opposition.", best_for: "Literary fiction, non-Western stories, experimental", acts: "4 Acts / No conflict" },
  { name: "Seven-Point Story", author: "Dan Wells", description: "Build from the ending backward. The Hook is the mirror opposite of the Resolution. Write your ending first — then find the opening that is its opposite.", best_for: "Novelists, genre fiction, second-act problems", acts: "3 Acts / 7 Beats" },
  { name: "Freytag's Pyramid", author: "Gustav Freytag", description: "The 1863 five-stage arc that every modern framework descended from. Most useful as a diagnostic lens — draw it over your draft to see exactly where the structural problems are.", best_for: "Diagnosing existing drafts, classical drama", acts: "5 Stages" },
  { name: "Snowflake Method", author: "Randy Ingermanson", description: "Design outward from one sentence. Expand to paragraph, then to pages, then to a full scene list. Front-loads every hard structural decision so the actual writing is clean.", best_for: "Novelists who need scaffolding before they write", acts: "Design-first / 10 Steps" },
  { name: "Hauge's Six-Stage", author: "Michael Hauge", description: "Maps the outer journey against the inner journey with percentage markers. Every protagonist hides behind an Identity — the story forces them toward their Essence.", best_for: "Character-driven stories, transformation arcs", acts: "6 Stages / 5 Turning Points" },
  { name: "Freeform", author: "Your instincts", description: "No template. You build the structure as you go. Eve tracks your scenes, characters, and themes — the shape is entirely yours.", best_for: "Literary fiction, experimental work", acts: "No template" },
]

function PricingSection() {
  const [annual, setAnnual] = React.useState(true)

  // Scroll-reveal observer
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
    <section id="pricing" style={{ background: 'var(--off-white)', padding: '120px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '20px' }}>Pricing</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.15', marginBottom: '20px' }}>
            Free to start.<br />Pro when you are ready.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', color: 'var(--text-mid)', maxWidth: '440px', margin: '0 auto 32px', lineHeight: '1.75' }}>
            Ten lessons and one project are free, forever. Pro unlocks everything with no limits.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '40px', padding: '5px 7px' }}>
            <button onClick={() => setAnnual(false)} style={{ padding: '6px 18px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', background: !annual ? 'var(--green)' : 'transparent', color: !annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s' }}>Monthly</button>
            <button onClick={() => setAnnual(true)} style={{ padding: '6px 18px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', background: annual ? 'var(--green)' : 'transparent', color: annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '7px' }}>
              Annual
              <span style={{ fontSize: '10px', fontWeight: '700', background: annual ? 'rgba(255,255,255,0.25)' : 'var(--green-pale)', color: annual ? '#fff' : 'var(--green)', padding: '2px 7px', borderRadius: '10px' }}>Save 50%</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Free</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '46px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: 1 }}>$0</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', paddingBottom: '6px' }}>forever</span>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '28px', lineHeight: '1.5' }}>Enough to know if Eve is right for you.</p>
            <a href="/auth?signup=true" style={{ textDecoration: 'none', display: 'block', marginBottom: '28px' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)', cursor: 'pointer' }}>Start free</button>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {["10 Start Here lessons", "Hero's Journey + Save the Cat", "1 story project", "Characters and Scenes tabs", "Up to 8 scenes, 4 characters", "No credit card required"].map(f => (
                <div key={f} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="7.5" cy="7.5" r="6.5" fill="var(--green-pale)" stroke="var(--green-border)" strokeWidth="1"/><path d="M4.5 7.5l2 2 4-4" stroke="var(--green)" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'linear-gradient(145deg, #3a6b1e 0%, var(--green) 50%, #2d5016 100%)', border: '1.5px solid var(--green)', borderRadius: '16px', padding: '36px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-green), inset 0 1px 0 rgba(255,255,255,0.15)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '20px' }}>Most popular</div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '8px' }}>Pro</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '46px', fontWeight: '700', color: '#fff', lineHeight: 1 }}>${annual ? annualMonthly : monthlyPrice}</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.65)', paddingBottom: '6px' }}>/ month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '4px' }}>{annual ? `Billed $${annualTotal}/year` : 'Billed monthly'}</p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '28px', lineHeight: '1.5' }}>Everything unlocked. No limits, no friction.</p>
            <a href="/auth?signup=true&plan=pro" style={{ textDecoration: 'none', display: 'block', marginBottom: '28px' }}>
              <button style={{ width: '100%', padding: '13px', borderRadius: '8px', border: 'none', background: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--green)', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>Get Pro</button>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
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

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
        background: 'var(--white)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          <div className="badge fade-up" style={{ marginBottom: '24px', display: 'inline-block' }}>Free to start. No AI. No fluff.</div>
          <h1 className="fade-up fade-up-delay-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(38px, 6vw, 72px)',
            fontWeight: '700',
            lineHeight: '1.08',
            color: 'var(--green)',
            marginBottom: '28px',
            letterSpacing: '-0.02em',
          }}>
            The story in your head<br />
            <em style={{ fontStyle: 'italic', color: 'var(--green-light)' }}>deserves to make it to the page.</em>
          </h1>
          <p className="fade-up fade-up-delay-2" style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--text-mid)',
            lineHeight: '1.75',
            marginBottom: '40px',
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}>
            You have an idea. Maybe a whole story. What you need is the craft to get it out of your head and onto the page — and a place to think it through.
          </p>
          <div className="fade-up fade-up-delay-3 hero-cta-row" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/start" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '16px', padding: '13px 30px' }}>
                Start a story →
              </button>
            </Link>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ fontSize: '16px', padding: '13px 28px' }}>
                Create an account — free
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MOCKUP CARD ──────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--off-white)',
        borderTop: '1px solid var(--green-border)',
        borderBottom: '1px solid var(--green-border)',
        padding: '100px 24px',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-fade" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', textAlign: 'center', marginBottom: '56px' }}>Your workspace</p>
          <div className="section-fade" style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 12px 56px rgba(26,81,46,0.10)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Story Project</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--text-dark)' }}>The Long Road Home</h3>
              </div>
              <span className="badge">Act 2 of 3</span>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-soft)', marginBottom: '8px' }}>
                <span>Story completion</span><span>42%</span>
              </div>
              <div style={{ height: '5px', background: 'var(--green-pale)', borderRadius: '3px' }}>
                <div style={{ width: '42%', height: '100%', background: 'var(--green-light)', borderRadius: '3px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { done: true,  text: 'Inciting incident defined' },
                { done: true,  text: 'Protagonist goal established' },
                { done: false, text: 'Midpoint reversal — what changes?' },
                { done: false, text: 'Antagonist motivation fleshed out' },
                { done: false, text: 'Act 2 low point identified' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0, background: item.done ? 'var(--green)' : 'transparent', border: item.done ? 'none' : '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.done && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span style={{ fontSize: '14px', color: item.done ? 'var(--text-soft)' : 'var(--text-dark)', textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="tip-box" style={{ marginTop: '24px' }}>
              <strong>Session note:</strong> Your midpoint is the spine of the story. Something must change irreversibly here — your protagonist cannot go back.
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ─────────────────────────────────────────────────────── */}
      <section className="section-fade" style={{ background: 'var(--white)', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', textAlign: 'center', marginBottom: '72px' }}>How Eve works</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { title: "One line is enough to start", body: "A name. A feeling. A scene you keep returning to. You don\'t need a full outline — you need somewhere to put what you already have. Eve is that place." },
              { title: "Character before everything", body: "Most stories stall because the writer started with plot. What does your protagonist want? What are they afraid of? What do they need that they\'d never admit? Answer those three things and the story starts moving." },
              { title: "Name what\'s broken", body: "Every draft has holes. The ones you ignore become the ones that sink the story. Eve gives you a place to flag them while they\'re small — before they\'re structural." },
              { title: "Pick up without losing the thread", body: "Real writing happens in twenty-minute gaps between everything else. Eve keeps your scenes, characters, and structure exactly where you left them — so the next session costs nothing to start." },
            ].map((p, i) => (
              <div key={i} className="card card-lift" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg, var(--green-light), var(--green))', borderRadius: '2px', marginBottom: '20px', flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '17px', color: 'var(--green)', marginBottom: '12px', lineHeight: '1.3' }}>{p.title}</p>
                <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', margin: '0' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT DEPTH ────────────────────────────────────────────────────── */}
      <section className="section-fade" style={{ background: '#1a4a20', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: '24px' }}>What&apos;s inside the library</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#fff', textAlign: 'center', lineHeight: '1.15', marginBottom: '80px', letterSpacing: '-0.01em' }}>
            A complete craft education.<br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>No film school required.</span>
          </h2>
          <div className="library-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
            {[
              { number: '119', label: 'Craft lessons', cls: 'stat-number reveal reveal-delay-1', sub: 'Structure, character, dialogue, directors', href: '/learn' },
              { number: '11',   label: 'Story frameworks', sub: "Save the Cat, Hero's Journey, and 9 more", href: '/frameworks' },
              { number: '87+',  label: 'Glossary terms', sub: 'Screenwriting, novels, and short fiction', href: '/glossary' },
              { number: '5',    label: 'Learning paths', sub: 'Beginner to advanced, by medium', href: '/learn/tracks' },
              { number: '4',    label: 'Industry guides', sub: 'Hollywood, publishing, short story, reading', href: '/road-to-hollywood' },
              { number: '53+',  label: 'Famous scripts', sub: 'Every one linked to its source', href: '/scripts' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{ textDecoration: 'none', display: 'block', padding: '32px 24px', borderRadius: '12px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s ease', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '700', color: '#fff', lineHeight: '1', marginBottom: '8px' }}>{s.number}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.9)', marginBottom: '6px' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.5' }}>{s.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO AI — FULL WIDTH STATEMENT ─────────────────────────────────────── */}
      <section className="section-fade" style={{ background: 'var(--white)', padding: '140px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge" style={{ marginBottom: '28px', background: 'var(--green)', color: '#fff', borderColor: 'var(--green)', display: 'inline-block' }}>No AI. Ever.</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.1', marginBottom: '32px', letterSpacing: '-0.02em' }}>
            Your story.<br />Your words.
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
            Every AI writing tool promises to make it faster. What they actually do is make it theirs. The sentences come out smooth and hollow, and somewhere in the middle of it you stop recognizing the story as yours.
          </p>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '56px' }}>
            Eve has no AI. No autocomplete. No generation. It&apos;s a thinking tool — the kind your best friend in film school would hand you before your first serious project.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', textAlign: 'left' }}>
            {[
              { label: 'Eve never writes a word for you', desc: 'The prose is yours, start to finish.' },
              { label: 'No autocomplete. No suggestions.', desc: 'No generation. No prompting. Nothing.' },
              { label: 'Your content trains nothing', desc: 'We never touch your work for any model.' },
              { label: 'The ideas stay yours', desc: 'All of them. Always. No exceptions.' },
            ].map((item, i) => (
              <div key={i} className="card card-lift" style={{ padding: '24px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', flexShrink: 0 }}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px', lineHeight: '1.4' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BREAK ──────────────────────────────────────────────────────── */}
      <section className="section-fade" style={{ background: 'var(--green)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontStyle: 'italic', color: '#fff', lineHeight: '1.65', marginBottom: '28px' }}>
            &ldquo;The discipline of the writer is to learn to be still and listen to what his subject has to tell him.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.35)' }} />
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Rachel Carson</p>
            <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.35)' }} />
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS ───────────────────────────────────────────────────────── */}
      <section className="section-fade" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 80px' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '20px' }}>Story Frameworks</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2', color: 'var(--text-dark)' }}>Pick a framework.<br />Or don&apos;t.</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
              Every project starts with a structure choice. Save the Cat, Hero&apos;s Journey, Story Circle, and four others — each one a different way of thinking about how stories work.
            </p>
          </div>
          <div className="hp-framework-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
            {frameworks.slice(0, 4).map((f, i) => (
              <div key={i} className="card card-lift shine-on-hover" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-display)', lineHeight: '1.3', color: 'var(--text-dark)' }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '12px' }}>by {f.author}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '16px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.02em' }}>Best for: {f.best_for}</p>
              </div>
            ))}
          </div>
          <div className="hp-framework-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
            {frameworks.slice(4, 8).map((f, i) => (
              <div key={i} className="card card-lift shine-on-hover" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-display)', lineHeight: '1.3', color: 'var(--text-dark)' }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '12px' }}>by {f.author}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '16px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.02em' }}>Best for: {f.best_for}</p>
              </div>
            ))}
          </div>
          <div className="hp-framework-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {frameworks.slice(8).map((f, i) => (
              <div key={i} className="card card-lift shine-on-hover" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-display)', lineHeight: '1.3', color: 'var(--text-dark)' }}>{f.name}</h3>
                  <span className="badge" style={{ fontSize: '10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.acts}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '12px' }}>by {f.author}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '16px', flex: 1 }}>{f.description}</p>
                <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.02em' }}>Best for: {f.best_for}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────────── */}
      <PricingSection />

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="section-fade" style={{ background: '#1a4a20', padding: '140px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '700', color: '#fff', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            The story won&apos;t write itself.
          </h2>
          <p style={{ color: 'rgba(244,249,240,0.7)', fontSize: '18px', marginBottom: '40px', lineHeight: '1.75' }}>
            But it will get written if you have somewhere to work it out. Start free — no card, no catch.
          </p>
          <Link href="/start" style={{ textDecoration: 'none' }}>
            <button className="btn-primary glow-pulse shine-on-hover" style={{ fontSize: '16px', padding: '14px 36px' }}>
              Start a story — free
            </button>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: 'var(--text-dark)', padding: '72px 24px 48px' }}>
        <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>E</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', color: '#fff' }}>Eve</span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', maxWidth: '260px' }}>
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
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '16px' }}>{col.heading}</p>
              {col.links.map((l, j) => (
                <a key={j} href={l.href} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '11px', lineHeight: '1.5', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >{l.label}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.28)', flexWrap: 'wrap', gap: '8px' }}>
          <p>&#169; {new Date().getFullYear()} Eve. All rights reserved.</p>
          <p>Built for writers. No AI inside.</p>
        </div>
      </footer>

    </div>
  )
}

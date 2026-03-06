'use client'
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
    name: "Freeform",
    author: "Your instincts",
    description: "No template. You build the structure as you go. Eve tracks your scenes, characters, and themes — the shape is entirely yours.",
    best_for: "Literary fiction, experimental work",
    acts: "No template",
  },
]

const pillars = [
  {
    title: "Start anywhere",
    body: "A single line of dialogue is enough to begin. Eve helps you build outward from any seed — scene, character, or feeling."
  },
  {
    title: "Characters first",
    body: "Structure without character is furniture. Build who your people are before you decide what happens to them."
  },
  {
    title: "Track what's missing",
    body: "Plot holes are normal. Flag them, name them, return to them. Every first draft has them — tracking is the cure."
  },
  {
    title: "Pick up where you left off",
    body: "Eve is built for writers who work in sessions. Come back to exactly where you were, every time."
  },
]

export default function Home() {
  return (
    <div style={{ background: 'var(--white)' }}>

      {/* Hero */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <div className="fade-up">
          <div className="badge" style={{ marginBottom: '20px' }}>Writer's workspace</div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 58px)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: 'var(--green)',
            marginBottom: '24px',
            letterSpacing: '-0.01em',
          }}>
            Every story starts<br />
            <em style={{ fontStyle: 'italic', color: 'var(--green-light)' }}>somewhere small.</em>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-mid)',
            lineHeight: '1.75',
            marginBottom: '36px',
            maxWidth: '460px',
            fontFamily: 'Source Sans 3, sans-serif',
          }}>
            Eve turns a scene, a line of dialogue, or a feeling into a structured story — using frameworks from screenwriting masters, not shortcuts.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '15px', padding: '12px 28px' }}>
                Start your first story
              </button>
            </Link>
            <Link href="/learn" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ fontSize: '15px', padding: '12px 24px' }}>
                Learn the craft
              </button>
            </Link>
          </div>
        </div>

        {/* Mockup card */}
        <div className="fade-up fade-up-delay-2" style={{
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 8px 40px rgba(45,80,22,0.10)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Story Project</p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: 'var(--green)' }}>The Long Road Home</h3>
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
              { done: false, text: 'Midpoint reversal — what changes?' },
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
            <strong>Session note:</strong> Your midpoint is the spine of the story. Something must change irreversibly here — your protagonist cannot go back.
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{
        background: 'var(--green-pale)',
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
              <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', fontSize: '15px', color: 'var(--green)', marginBottom: '6px' }}>{p.title}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* No AI section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <div className="fade-up">
          <div className="badge" style={{ marginBottom: '20px', background: 'var(--green)', color: '#fff', borderColor: 'var(--green)' }}>
            No AI. Ever.
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: '700',
            color: 'var(--green)',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            Your voice.<br />Not a prompt.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '16px' }}>
            Every AI writing tool makes the same promise: faster stories. What they deliver is the same story, told a thousand ways by a machine that has never lived anything.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
            Eve contains no AI. No autocomplete. No suggestions. No generation. Just your ideas, organized by the same structural principles that produced the greatest stories ever told.
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
          gap: '24px',
        }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '22px',
            fontStyle: 'italic',
            color: '#fff',
            lineHeight: '1.5',
          }}>
            "The discipline of the writer is to learn to be still and listen to what his subject has to tell him."
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>
            — Rachel Carson
          </p>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7' }}>
            Eve is a thinking tool. It holds your structure so your mind stays free for the only thing that matters — the work.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 34px)', marginBottom: '12px' }}>Choose your framework</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
              Every project in Eve starts with a structure choice. Not sure which? Read the descriptions — you will know.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {frameworks.map((f, i) => (
              <div key={i} className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '17px', fontFamily: 'Playfair Display, serif' }}>{f.name}</h3>
                  <span className="badge">{f.acts}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '10px' }}>by {f.author}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '14px' }}>{f.description}</p>
                <p style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.02em' }}>Best for: {f.best_for}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 34px)', marginBottom: '12px' }}>
            Start free. Upgrade when you're ready.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-mid)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.75' }}>
            Eve's core tools are free forever. Pro unlocks unlimited projects, all frameworks, and every feature we build.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '760px', margin: '0 auto' }}>
          {/* Free */}
          <div className="card" style={{ padding: '32px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--text-soft)', textTransform: 'uppercase', marginBottom: '8px' }}>Free</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: '700', color: 'var(--green)', marginBottom: '4px' }}>$0</p>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '24px' }}>Forever</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {['1 project', 'Up to 10 scenes', 'All craft lessons', 'Idea bank (25 ideas)', 'Save the Cat session mode'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--green-light)', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'var(--text-mid)' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                Get started free
              </button>
            </Link>
          </div>

          {/* Pro */}
          <div style={{
            background: 'var(--green)',
            border: '1px solid var(--green)',
            borderRadius: '12px',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 8px 32px rgba(45,80,22,0.18)',
          }}>
            <div style={{
              position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
              background: 'var(--green-light)', color: '#fff',
              fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em',
              padding: '4px 14px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap',
            }}>Most popular</div>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '8px' }}>Pro</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: '700', color: '#fff' }}>$6.59</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>/mo</p>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>$79 billed annually</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {['Unlimited projects', 'Unlimited scenes + characters', 'All 4 session frameworks', 'Plot hole tracker', 'Themes & motifs tracker', 'Timeline view (coming soon)', 'Priority support'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '9px' }}>&#10003;</span>
                  </div>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%', background: '#fff', color: 'var(--green)',
                border: 'none', borderRadius: '8px', padding: '10px',
                fontSize: '14px', fontWeight: '700', cursor: 'pointer',
                fontFamily: 'Source Sans 3, sans-serif',
              }}>
                Start free, upgrade anytime
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green)', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: '#fff', marginBottom: '16px',
        }}>Your story is waiting.</h2>
        <p style={{
          color: 'rgba(255,255,255,0.72)', fontSize: '17px', marginBottom: '36px',
          maxWidth: '420px', margin: '0 auto 36px', lineHeight: '1.7',
        }}>
          Start with whatever you have. A scene, a name, a feeling. Eve holds the rest.
        </p>
        <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#fff', color: 'var(--green)',
            fontFamily: 'Source Sans 3, sans-serif', fontWeight: '700',
            fontSize: '15px', padding: '14px 36px', borderRadius: '8px',
            border: 'none', cursor: 'pointer', letterSpacing: '0.01em',
          }}>
            Create your free account
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--text-dark)',
        padding: '48px 24px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>E</span>
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: '600', color: '#fff' }}>Eve</span>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', maxWidth: '260px' }}>
              A story workspace for writers who believe structure serves the work — not the other way around. No AI. No shortcuts.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '14px' }}>Product</p>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/projects', label: 'Projects' },
              { href: '/session', label: 'Session Mode' },
              { href: '/ideas', label: 'Idea Bank' },
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
              { href: '/learn', label: 'Craft Library' },
              { href: '/glossary', label: 'Glossary' },
              { href: '/resources', label: 'Reading List' },
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
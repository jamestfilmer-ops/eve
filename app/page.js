import Link from 'next/link'

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
  { title: "Start anywhere", body: "A single line of dialogue is enough to begin. Eve helps you build outward from any seed — scene, character, or feeling." },
  { title: "Characters first", body: "Structure without character is furniture. Build who your people are before you decide what happens to them." },
  { title: "Track what's missing", body: "Plot holes are normal. Flag them, name them, return to them. Every first draft has them — tracking is the cure." },
  { title: "Pick up where you left off", body: "Eve is built for writers who work in sessions. Come back to exactly where you were, every time." },
]

export default function Home() {
  return (
    <div style={{ background: 'var(--white)' }}>

      {/* Hero */}
      <section style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '100px 24px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center',
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
            fontSize: '18px', color: 'var(--text-mid)',
            lineHeight: '1.75', marginBottom: '36px', maxWidth: '460px',
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
          background: '#fff', border: '1px solid var(--border)',
          borderRadius: '16px', padding: '28px',
          boxShadow: '0 8px 40px var(--shadow-md)',
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
              { done: true,  text: 'Inciting incident defined' },
              { done: true,  text: 'Protagonist goal established' },
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

      {/* Frameworks */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ maxWidth: '560px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', marginBottom: '12px' }}>Choose your framework</h2>
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
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green)', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: '#fff', marginBottom: '16px',
        }}>Your story is waiting.</h2>
        <p style={{
          color: 'rgba(255,255,255,0.72)', fontSize: '17px',
          marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: '1.7',
        }}>
          Start with whatever you have. A scene, a name, a feeling. Eve holds the rest.
        </p>
        <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#fff', color: 'var(--green)',
            fontFamily: 'Source Sans 3, sans-serif', fontWeight: '700',
            fontSize: '15px', padding: '14px 36px',
            borderRadius: '8px', border: 'none', cursor: 'pointer',
            letterSpacing: '0.01em',
          }}>
            Create your free account
          </button>
        </Link>
      </section>

    </div>
  )
}
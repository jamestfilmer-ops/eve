import Link from 'next/link'

export const metadata = {
  title: "The Hero's Journey: Joseph Campbell's Monomyth —Eve",
  description: "Joseph Campbell's Hero's Journey —the 12-stage monomyth found in myths, fairy tales, and blockbusters worldwide. Learn when to follow it and when to break it.",
}

export default function LessonHerosJourney() {
  const stages = [
    { world: 'Ordinary World', n: '1', desc: 'The hero\'s normal life before the adventure. Establish what they stand to lose. The audience must care about this world for its disruption to matter.' },
    { world: 'Call to Adventure', n: '2', desc: 'The disruption —a problem, challenge, or opportunity appears. The hero\'s equilibrium is disturbed and they cannot return to the Ordinary World unchanged.' },
    { world: 'Refusal of the Call', n: '3', desc: 'The hero hesitates or refuses. Fear, obligation, or insecurity holds them back. This hesitation makes the eventual commitment more meaningful.' },
    { world: 'Meeting the Mentor', n: '4', desc: 'A guide appears who gives the hero something: wisdom, equipment, confidence, or a push. The mentor does not complete the journey —only the hero can.' },
    { world: 'Crossing the Threshold', n: '5', desc: 'The hero commits and enters the Special World —a different realm with different rules. This is the point of no return.' },
    { world: 'Tests, Allies, Enemies', n: '6', desc: 'The hero learns the rules of the Special World through trials. They find allies and identify enemies. The stakes and the world take shape.' },
    { world: 'Approach to the Inmost Cave', n: '7', desc: 'The hero prepares for the central ordeal. The inmost cave is the location of the supreme test —often where the thing they fear most lives.' },
    { world: 'Ordeal', n: '8', desc: 'The central crisis. The hero faces their greatest fear and appears to die —literally or symbolically. This death is necessary for transformation.' },
    { world: 'Reward (Seizing the Sword)', n: '9', desc: 'Surviving the ordeal, the hero claims the prize: treasure, knowledge, power, or reconciliation. The immediate goal is achieved.' },
    { world: 'The Road Back', n: '10', desc: 'The hero begins the journey home. The consequence of the ordeal pursues them. The final test is not yet complete.' },
    { world: 'Resurrection', n: '11', desc: 'The final, climactic test —a second death and rebirth. The hero must prove they have truly changed. They die as their old self and are reborn transformed.' },
    { world: 'Return with the Elixir', n: '12', desc: 'The hero returns to the Ordinary World transformed, carrying something of value for those they left behind. The community benefits from the journey.' },
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>10 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            The Hero's Journey
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Joseph Campbell
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Frameworks</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>5 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '16px' }}>
          The Hero&#39;s Journey
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          In 1949, mythologist Joseph Campbell published <em>The Hero with a Thousand Faces</em>, arguing that the myths and stories of every culture share a single underlying structure —what he called the monomyth. He identified this pattern in Greek mythology, Hindu epics, Christian narrative, Aboriginal stories, and fairy tales from every continent.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          The pattern: a hero leaves their ordinary world, enters a realm of supernatural challenge, faces a supreme ordeal, and returns transformed —bearing something of value for their community. George Lucas read Campbell closely before writing Star Wars. Christopher Vogler adapted Campbell into a practical screenwriting guide. The framework is now embedded in Hollywood at the structural level.
        </p>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Before you read this as a formula:</strong> Campbell was describing what stories do, not prescribing what they should do. The Hero&#39;s Journey is a lens for understanding narrative, not a template to fill out. Its value is in recognizing the deep logic of transformation —every beat exists because human psychology requires it.
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>The 12 stages</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '32px', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {stages.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '0', borderBottom: i < stages.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: '36px', flexShrink: 0, background: i < 5 ? 'var(--green-pale)' : i < 9 ? '#FFF7ED' : '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700', color: i < 5 ? 'var(--green)' : i < 9 ? '#B5700A' : '#6366F1' }}>{s.n}</span>
              </div>
              <div style={{ padding: '13px 16px', flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '3px', fontFamily: 'var(--font-ui)' }}>{s.world}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0, fontFamily: 'var(--font-ui)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>When to follow it, when to break it</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '16px' }}>
          The Hero&#39;s Journey is most useful for stories of transformation —where the protagonist must change fundamentally to survive or succeed. It is less useful for character studies, ensemble narratives, or stories where the point is that transformation is impossible or illusory.
        </p>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Understanding it also lets you break it deliberately. <em>No Country for Old Men</em> refuses the Resurrection —Moss dies off-screen, the antagonist is never defeated, and Sheriff Bell retires rather than returning with an elixir. That refusal is the film&#39;s point. You can only make that choice knowingly if you understand what you are refusing.
        </p>
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px', marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Further reading</p>
          <a href="https://www.amazon.com/Writer-Journey-Mythic-Structure-Storytellers/dp/1932907360" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', fontWeight: '600', textDecoration: 'none' }}>The Writer&#39;s Journey —Christopher Vogler →</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/save-the-cat" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Save the Cat</Link>
          <Link href="/learn/story-circle" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>The Story Circle →</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

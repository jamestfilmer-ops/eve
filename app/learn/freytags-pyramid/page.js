import Link from 'next/link'

export const metadata = {
  title: "Freytag's Pyramid: The Original Dramatic Structure | Eve",
  description: "Gustav Freytag's 1863 five-stage arc — Exposition, Rising Action, Climax, Falling Action, Denouement — is the root every modern story structure descends from.",
}

export default function Lesson() {
  const stages = [
    { name: 'Exposition', pct: '0–20%', color: '#C3D9A8', textColor: '#2D5016',
      desc: 'Establish the world, the protagonist, and the circumstances that make the conflict possible. Introduce the "exciting force" — the element that will set the story in motion. Everything here is setup. Plant what you will need later.',
      example: 'Hamlet learns his father is dead and his uncle has taken the throne. The world is already wrong before the ghost appears.' },
    { name: 'Rising Action', pct: '20–50%', color: '#6AAF3D', textColor: '#fff',
      desc: 'A chain of causally linked complications, each emerging from the last. Tension escalates steadily. The protagonist pursues their goal, obstacles multiply, and the stakes become personal. This is the longest section — most of the story lives here.',
      example: 'Hamlet investigates, stages the play, accidentally kills Polonius, is sent to England. Each event triggers the next.' },
    { name: 'Climax', pct: '50%', color: '#2D5016', textColor: '#fff',
      desc: 'The turning point — not the ending, but the pivot. The highest moment of tension. The outcome is determined here, though consequences unfold afterward. Everything in the rising action has been building toward this moment.',
      example: 'Hamlet returns from England, duels Laertes. The poisoned blade, the poisoned wine. There is no way back.' },
    { name: 'Falling Action', pct: '50–80%', color: '#6AAF3D', textColor: '#fff',
      desc: 'The consequences of the climax play out. Tension unravels. Secondary characters face what the protagonist set in motion. The outcome is clear but not yet fully resolved — a period of aftermath before equilibrium returns.',
      example: 'Gertrude drinks the poison. Laertes confesses. Hamlet kills the king. The deaths cascade.' },
    { name: 'Denouement', pct: '80–100%', color: '#C3D9A8', textColor: '#2D5016',
      desc: 'The "untying" — the French word for unknotting a tangled thread. Conflict settles, characters reach their new state, the world finds equilibrium. Does not have to be happy. Has to be complete.',
      example: 'Horatio survives to tell the story. Fortinbras arrives to restore order. Denmark has a king again.' },
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>6 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Freytag&apos;s Pyramid: The Original Dramatic Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            In 1863, Gustav Freytag mapped Greek tragedy and Shakespeare onto a five-stage arc. Every story structure written since descends from it. Understanding the original makes the descendants make more sense.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Why it still matters</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Freytag was not inventing a formula. He was describing what he observed in the plays that had lasted. His five stages are a map of how dramatic tension naturally rises and falls — not a prescription for how to construct a story, but a description of how successful stories tend to be constructed.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The pyramid is most useful as a diagnostic tool. When your story feels wrong — when it drags, or the ending feels unearned, or the middle loses momentum — Freytag gives you a vocabulary for locating the problem. Where is your climax? Is the rising action actually rising? Does the falling action have enough space to breathe?
          </p>
        </div>

        {/* Visual pyramid */}
        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '20px' }}>The arc</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '100px', marginBottom: '10px' }}>
            {[
              { h: 28, color: '#C3D9A8' },
              { h: 60, color: '#6AAF3D' },
              { h: 100, color: '#2D5016' },
              { h: 50, color: '#6AAF3D' },
              { h: 22, color: '#C3D9A8' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, height: s.h + 'px', background: s.color, borderRadius: '4px 4px 0 0', transition: 'opacity 0.2s' }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: '3px' }}>
            {['Exposition', 'Rising Action', 'Climax', 'Falling Action', 'Denouement'].map((l, i) => (
              <div key={i} style={{ flex: 1, fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', textAlign: 'center', lineHeight: '1.3' }}>{l}</div>
            ))}
          </div>
        </div>

        {/* Stage breakdown */}
        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '20px' }}>The five stages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {stages.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '0', borderRadius: i === 0 ? '8px 8px 0 0' : i === stages.length - 1 ? '0 0 8px 8px' : '0', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: i < stages.length - 1 ? '-1px' : '0' }}>
                <div style={{ width: '120px', flexShrink: 0, background: s.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 8px', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: s.textColor, textAlign: 'center', lineHeight: '1.2' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: s.textColor, opacity: 0.7 }}>{s.pct}</span>
                </div>
                <div style={{ padding: '16px 20px', flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.7', color: 'var(--text-dark)', margin: '0 0 8px' }}>{s.desc}</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', lineHeight: '1.6', color: 'var(--text-soft)', margin: 0, fontStyle: 'italic' }}>{s.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>The one thing most writers get wrong</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            The climax is not the ending. This is the most common misreading of the pyramid. Freytag places the climax at the midpoint of the arc, not the end. The climax is the turning point — the moment where the outcome is determined. What follows is not anticlimax. It is consequence.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Writers who rush from climax to denouement skip the falling action entirely and wonder why their endings feel hollow. The falling action gives the audience time to process what happened. It is where the emotional meaning of the climax lands. Give it room.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>Use it as a diagnostic</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Draw the pyramid for your story. Mark your inciting incident, your highest tension moment, and your resolution. If the highest tension falls in the wrong place — too early, too late, or never clearly present — you have found your structural problem.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Try this</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Take a film you know well and identify each of the five stages. Time them roughly. Then ask: is the climax at or near the midpoint? Is there real falling action, or does the film jump straight to resolution? What the film does with each stage reveals what it is prioritizing.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/heros-journey" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/seven-point-story" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: "The Snowflake Method — Novel Outlining from Core Outward | Eve",
  description: "Randy Ingermanson's Snowflake Method: 10 steps to expand a one-sentence summary into a complete novel blueprint. Best for plotters writing complex genre fiction.",
}

export default function LessonSnowflake() {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 20px' }}>
      <Link href="/learn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-soft)', fontSize: '13px', marginBottom: '32px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        All lessons
      </Link>
      <div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge">Frameworks</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
          <span className="badge" style={{ background: 'var(--off-white)', color: 'var(--text-soft)' }}>Novelists</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Snowflake Method: designing outward from the core
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          Randy Ingermanson&#39;s method for novelists who need structure before they write. Like a snowflake — start with a simple shape, add recursive detail until the complexity emerges naturally. Front-loads all the hard decisions so the actual writing is clean.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The essential first three steps</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Snowflake has ten steps, but most of the method&#39;s value comes from the first three. Even if you stop here, you&#39;ll have enough to write confidently.
        </p>
        {[
          { n: 'Step 1', title: 'One sentence', desc: 'Write a one-sentence summary of your novel under 25 words. Must contain: protagonist, goal, conflict, stakes. This is the hardest step and the most important. Everything else expands from it.' },
          { n: 'Step 2', title: 'One paragraph', desc: 'Expand to five sentences: setup, first disaster, second disaster, third disaster, ending. These are your major turning points — not scenes, but structural pillars. Write the ending first.' },
          { n: 'Step 3', title: 'Character summaries', desc: 'For each major character: name, one-sentence summary, motivation (what they want), goal (what they are trying to do), conflict (what stands in the way), epiphany (what they learn). One page each.' },
        ].map(s => (
          <div key={s.n} style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700', color: 'var(--green)', background: 'var(--green-pale)', padding: '3px 8px', borderRadius: '20px', flexShrink: 0, marginTop: '2px' }}>{s.n}</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{s.title}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65' }}>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: '20px', marginBottom: '12px', marginTop: '28px' }}>Best suited for</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Complex plotted fiction — thrillers, fantasy, science fiction, romance — where structure is a primary value and multiple storylines need to interconnect. Writers who feel paralyzed by the blank page, who write themselves into corners, or who are managing a cast of characters across a long narrative.
        </p>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          It is not suited for discovery writers, short fiction, or literary work where the prose itself is the creative act. Know your method.
        </p>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Do just the first three steps.</strong> One sentence. Five sentences. Three character pages. That is enough material to start writing and enough structure to not get lost. Come back to Steps 4–10 if you need more scaffolding.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/freytags-pyramid" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Freytag&#39;s Pyramid</Link>
          <Link href="/learn/hauge-six-stage" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>Hauge Six-Stage →</Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: "Freytag's Pyramid —The Original Dramatic Structure | Eve",
  description: "Freytag's Pyramid: the 1863 five-stage dramatic arc (Exposition, Rising Action, Climax, Falling Action, Denouement) that underpins every story structure since.",
}

export default function LessonFreytag() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Header breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Freytag's Pyramid: The Original Dramatic Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Freytag
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge">Frameworks</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>5 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Freytag&#39;s Pyramid: the original dramatic structure
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          Published in 1863, Gustav Freytag&#39;s analysis of Greek tragedy and Shakespeare identified the five-part arc that every Western story structure since has descended from. Simple to learn, powerful to diagnose with.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        {/* Visual pyramid */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '80px', marginBottom: '12px' }}>
            {[
              { h: 30, label: 'Exposition', color: '#C3D9A8' },
              { h: 55, label: 'Rising Action', color: '#6AAF3D' },
              { h: 80, label: 'Climax', color: '#2D5016' },
              { h: 45, label: 'Falling Action', color: '#6AAF3D' },
              { h: 20, label: 'Denouement', color: '#C3D9A8' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '80px' }}>
                <div style={{ width: '100%', height: s.h + 'px', background: s.color, borderRadius: '4px 4px 0 0' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            {['Exposition', 'Rising Action', 'Climax', 'Falling Action', 'Denouement'].map((l, i) => (
              <div key={i} style={{ flex: 1, fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', textAlign: 'center', lineHeight: '1.3' }}>{l}</div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The five stages</h2>
        {[
          { stage: 'Exposition', desc: 'Establish the world, the characters, and the conflict. Freytag called this the "exciting force" —the setup that makes the inciting incident meaningful.' },
          { stage: 'Rising Action', desc: 'Escalating conflict —each complication emerging causally from the last. This is the longest section: where most of the story lives.' },
          { stage: 'Climax', desc: 'The turning point. Highest tension, outcome determined. Not the ending —the pivot. Everything after is resolution.' },
          { stage: 'Falling Action', desc: 'Consequences of the climax. Tension unravels. Secondary characters face what the protagonist set in motion.' },
          { stage: 'Denouement', desc: 'The "untying" —conflict settled, characters in their new state, world reaching equilibrium.' },
        ].map(s => (
          <div key={s.stage} style={{ paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--green)', marginBottom: '4px' }}>{s.stage}</p>
            <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{s.desc}</p>
          </div>
        ))}
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Use it as a diagnostic.</strong> Draw the pyramid for your story. Mark your inciting incident, midpoint, All Is Lost, and climax. If the climax is not the highest point —if tension peaked too early or too late —you&#39;ve found your structural problem.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/seven-point-story" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Seven-Point Structure</Link>
          <Link href="/learn/snowflake-method" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>Snowflake Method →</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

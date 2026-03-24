import Link from 'next/link'

export const metadata = {
  title: "Michael Hauge's Six-Stage Plot Structure —Eve",
  description: "Michael Hauge's Six-Stage Plot Structure maps outer journey (plot) against inner journey (transformation) with precise percentage markers. Essential for character-driven stories.",
}

export default function LessonHauge() {
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Michael Hauge's Six-Stage Plot Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Michael Hauge
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge">Frameworks</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Michael Hauge&#39;s Six-Stage Plot Structure
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          Hollywood story consultant Michael Hauge maps the outer journey (what happens) against the inner journey (who the protagonist becomes). His key insight: a character begins hiding behind an identity (false self) and must reach their essence (true self). The story is that journey.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The two journeys</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Outer Journey', desc: 'The external goal —visible, concrete, measurable. What the protagonist is trying to accomplish.', color: 'var(--green-pale)', border: 'var(--green-border)', text: 'var(--green)' },
            { label: 'Inner Journey', desc: 'Identity → Essence. The character moves from their false self (who they pretend to be) to their true self (who they are).', color: '#EFF6FF', border: '#BFDBFE', text: '#1D4ED8' },
          ].map(j => (
            <div key={j.label} style={{ background: j.color, border: `1px solid ${j.border}`, borderRadius: '10px', padding: '16px' }}>
              <p style={{ fontSize: '13px', fontWeight: '700', color: j.text, marginBottom: '6px' }}>{j.label}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{j.desc}</p>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The six stages with percentages</h2>
        {[
          { pct: '0–10%', stage: 'Setup', turn: 'Opportunity', desc: "Everyday life. Protagonist's outer motivation and inner wound established." },
          { pct: '10–25%', stage: 'New Situation', turn: 'Change of Plans', desc: 'Response to opportunity. Outer goal defined. Protagonist adapts to new world.' },
          { pct: '25–50%', stage: 'Progress', turn: 'Point of No Return', desc: 'Things go well. Relationships form. Protagonist commits fully —no retreat.' },
          { pct: '50–75%', stage: 'Complications & Higher Stakes', turn: 'Major Setback', desc: 'Everything goes wrong. Antagonist escalates. Identity is stripped away.' },
          { pct: '75–90%', stage: 'Final Push', turn: 'Climax', desc: 'Acting from essence, not identity. Final attempt from the true self.' },
          { pct: '90–100%', stage: 'Aftermath', turn: 'End', desc: 'Consequences shown. New state confirmed. Both journeys complete.' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: '14px', paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid var(--border)', alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: '52px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700', color: 'var(--green)', background: 'var(--green-pale)', padding: '3px 6px', borderRadius: '4px', display: 'inline-block' }}>{s.pct}</span>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>{s.stage} <span style={{ fontSize: '12px', fontWeight: '400', color: 'var(--text-soft)' }}>→ {s.turn}</span></p>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          </div>
        ))}
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Map both journeys in parallel columns.</strong> Left: the six external events. Right: where the protagonist sits on the identity-to-essence scale. The two should feel causally connected —external events forcing internal transformation, not running alongside it.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/snowflake-method" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Snowflake Method</Link>
          <Link href="/learn/save-the-cat" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>Save the Cat →</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

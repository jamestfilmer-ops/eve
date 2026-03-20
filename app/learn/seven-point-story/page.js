import Link from 'next/link'

export const metadata = {
  title: "Dan Wells' Seven-Point Story Structure —Eve",
  description: "Dan Wells' Seven-Point Story Structure: Hook, Plot Turn 1, Pinch Points, Midpoint, Plot Turn 2, Resolution. Build from the ending backward for tighter plots.",
}

export default function LessonSevenPoint() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Dan Wells' Seven-Point Story Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Dan Wells
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
          Dan Wells&#39; Seven-Point Story Structure
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          Dan Wells, fantasy author and co-host of the Writing Excuses podcast, built this structure for novelists who need to plot complex stories. The key insight: build from the end backward. Start with your resolution, then find the hook as its mirror opposite.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The seven points</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          {[
            { n: '1', label: 'Hook', desc: 'Who the protagonist is at the start —the mirror opposite of the Resolution. The further apart, the more arc you have.' },
            { n: '2', label: 'Plot Turn 1', desc: 'The inciting incident. Pulls the protagonist out of their ordinary world and into the story.' },
            { n: '3', label: 'Pinch Point 1', desc: 'The antagonistic force shows its power. Not a plot event —a demonstration of the threat.' },
            { n: '4', label: 'Midpoint', desc: 'The protagonist shifts from reacting to acting. They choose to engage rather than survive.' },
            { n: '5', label: 'Pinch Point 2', desc: 'The darkest moment. The antagonistic force delivers its strongest blow. Something is lost.' },
            { n: '6', label: 'Plot Turn 2', desc: 'The protagonist gains the key —insight, tool, or decision —that comes from their internal transformation.' },
            { n: '7', label: 'Resolution', desc: 'Final confrontation and its aftermath. The mirror of the Hook, proving transformation is real.' },
          ].map(p => (
            <div key={p.n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--green-pale)', border: '1px solid var(--green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)' }}>{p.n}</div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '3px' }}>{p.label}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Build backward.</strong> Write your Resolution first —who is your protagonist at the end? Then write the Hook as its exact opposite. Work inward from both ends until the seven points connect causally.
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/fichtean-curve" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Fichtean Curve</Link>
          <Link href="/learn/freytags-pyramid" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>Freytag&#39;s Pyramid →</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

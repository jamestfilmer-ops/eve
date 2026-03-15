import Link from 'next/link'

export const metadata = {
  title: "Dan Wells' Seven-Point Story Structure — Eve",
  description: "Dan Wells' Seven-Point Story Structure: Hook, Plot Turn 1, Pinch Points, Midpoint, Plot Turn 2, Resolution. Build from the ending backward for tighter plots.",
}

export default function LessonSevenPoint() {
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
            { n: '1', label: 'Hook', desc: 'Who the protagonist is at the start — the mirror opposite of the Resolution. The further apart, the more arc you have.' },
            { n: '2', label: 'Plot Turn 1', desc: 'The inciting incident. Pulls the protagonist out of their ordinary world and into the story.' },
            { n: '3', label: 'Pinch Point 1', desc: 'The antagonistic force shows its power. Not a plot event — a demonstration of the threat.' },
            { n: '4', label: 'Midpoint', desc: 'The protagonist shifts from reacting to acting. They choose to engage rather than survive.' },
            { n: '5', label: 'Pinch Point 2', desc: 'The darkest moment. The antagonistic force delivers its strongest blow. Something is lost.' },
            { n: '6', label: 'Plot Turn 2', desc: 'The protagonist gains the key — insight, tool, or decision — that comes from their internal transformation.' },
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
          <strong>Build backward.</strong> Write your Resolution first — who is your protagonist at the end? Then write the Hook as its exact opposite. Work inward from both ends until the seven points connect causally.
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/fichtean-curve" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Fichtean Curve</Link>
          <Link href="/learn/freytags-pyramid" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>Freytag&#39;s Pyramid →</Link>
        </div>
      </div>
    </div>
  )
}

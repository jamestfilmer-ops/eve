import Link from 'next/link'

export const metadata = {
  title: "Save the Cat: Blake Snyder's 15-Beat Structure —Eve",
  description: "Blake Snyder's Save the Cat breaks every Hollywood film into 15 specific beats at precise page numbers. The most widely used story structure framework in professional screenwriting.",
}

export default function LessonSaveTheCat() {
  const beats = [
    { act: 1, beat: 'Opening Image', page: '1', desc: 'A snapshot of your protagonist\'s world before anything changes. Should be the visual opposite of the Final Image.' },
    { act: 1, beat: 'Theme Stated', page: '5', desc: 'Someone says something to your protagonist that they don\'t yet understand. This is your theme. They\'ll only understand it at the end.' },
    { act: 1, beat: 'Set-Up', page: '1–10', desc: 'Introduce the world, the characters, and the flaws and circumstances that will need to change. Plant everything that pays off later.' },
    { act: 1, beat: 'Catalyst', page: '12', desc: 'The event that disrupts the protagonist\'s world. Done TO them, not by them. Forces a response.' },
    { act: 1, beat: 'Debate', page: '12–25', desc: 'The protagonist hesitates. Should they accept the challenge? This is their last chance to choose safety.' },
    { act: '1→2', beat: 'Break into Two', page: '25', desc: 'The protagonist actively CHOOSES to enter Act 2. This is the most important beat —it cannot happen to them. They must choose it.' },
    { act: 2, beat: 'B Story', page: '30', desc: 'A secondary story, usually a relationship, that carries the theme. The B Story character is the one who will help the protagonist change.' },
    { act: 2, beat: 'Fun and Games', page: '30–55', desc: 'The "promise of the premise." The audience gets what they came for. Things are going relatively well.' },
    { act: 2, beat: 'Midpoint', page: '55', desc: 'False victory (things seem great) or false defeat (things seem terrible). After this, the stakes raise and the protagonist becomes fully active.' },
    { act: 2, beat: 'Bad Guys Close In', page: '55–75', desc: 'External and internal forces dismantle what the protagonist built in Fun and Games. The antagonist\'s plan accelerates.' },
    { act: 2, beat: 'All Is Lost', page: '75', desc: 'The lowest point. Something must die here —literal or symbolic. The protagonist loses everything they were fighting for.' },
    { act: 2, beat: 'Dark Night of the Soul', page: '75–85', desc: 'The protagonist sits in the wreckage. The solution must come from inside them —not from external help.' },
    { act: '2→3', beat: 'Break into Three', page: '85', desc: 'The A and B stories merge. The protagonist has a new idea —and it comes from what they learned in the B Story.' },
    { act: 3, beat: 'Finale', page: '85–110', desc: 'Execute the plan. Mirror the setup. Use characters, locations, and objects from Act 1 in new, meaningful ways. The protagonist proves they\'ve changed.' },
    { act: 3, beat: 'Final Image', page: '110', desc: 'The mirror of the Opening Image. Proof that change is real and permanent.' },
  ]

  const actColor = { 1: { bg: '#EBF5E4', border: '#6AAF3D', text: '#2D5016' }, '1→2': { bg: '#FEF9EE', border: '#D4A017', text: '#92400E' }, 2: { bg: '#FFF7ED', border: '#B5700A', text: '#78350F' }, '2→3': { bg: '#FEF9EE', border: '#D4A017', text: '#92400E' }, 3: { bg: '#EEF2FF', border: '#6366F1', text: '#4338CA' } }

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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>9 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Save the Cat: Blake Snyder's 15-Beat Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Blake Snyder
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Frameworks</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
          <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px', background: '#EBF5E4', color: '#2D5016', border: '1px solid #C3D9A8', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Beginner</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '16px' }}>
          Save the Cat: Blake Snyder&#39;s 15-beat structure
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          In 2005, screenwriter Blake Snyder published <em>Save the Cat!</em> —a book that mapped every successful Hollywood film to exactly fifteen beats at precise page numbers. It became the most widely used story structure framework in professional screenwriting, not because it is the only way to tell a story, but because it works with unusual reliability.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The title comes from Snyder&#39;s observation that the audience needs to like the protagonist before anything else happens. The cheapest way to make someone likeable is to show them doing something generous —saving a cat. It is a simple, almost embarrassingly mechanical insight. Like most of Snyder&#39;s insights, it works.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>The 15 beats</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          {beats.map((b, i) => {
            const col = actColor[b.act] || actColor[1]
            return (
              <div key={i} style={{ display: 'flex', gap: '0', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: '64px', flexShrink: 0, background: col.bg, borderRight: `1px solid ${col.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12px 6px', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: '700', color: col.text, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', lineHeight: '1.3' }}>Act {b.act}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: col.text, opacity: 0.7 }}>p.{b.page}</span>
                </div>
                <div style={{ padding: '12px 16px', flex: 1 }}>
                  <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px', fontFamily: 'var(--font-ui)' }}>{b.beat}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0, fontFamily: 'var(--font-ui)' }}>{b.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>How to use it.</strong> Don&#39;t start at Beat 1. Start at Break into Two (p.25) —who is your protagonist and what do they choose? Then work backwards to find the Catalyst that forced the choice, and the Opening Image that shows who they were before it.
        </div>
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px', marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Further reading</p>
          <a href="https://www.amazon.com/Save-Cat-Last-Screenwriting-Book/dp/1932907009" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', fontWeight: '600', textDecoration: 'none' }}>Save the Cat! —Blake Snyder →</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/hauge-six-stage" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Hauge&#39;s Six-Stage</Link>
          <Link href="/learn/heros-journey" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>The Hero&#39;s Journey →</Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: "The Story Circle: Dan Harmon's 8-Step Structure —Eve",
  description: "Dan Harmon's Story Circle distills Joseph Campbell's monomyth to 8 steps arranged in a circle. The framework that built Community, Rick and Morty, and modern episodic television.",
}

export default function LessonStoryCircle() {
  const steps = [
    { n: 1, label: 'A character is in a zone of comfort', short: 'You', desc: 'Establish who the protagonist is and where they live. The comfort zone is not necessarily happy —it is simply familiar. This is what they have to lose.' },
    { n: 2, label: 'But they want something', short: 'Need', desc: 'The character has a desire —conscious or unconscious. This want drives the story. Without want, nothing moves.' },
    { n: 3, label: 'They enter an unfamiliar situation', short: 'Go', desc: 'Crossing the threshold into a new world, a new relationship, a new responsibility. The comfort zone is left behind.' },
    { n: 4, label: 'Adapt to it', short: 'Search', desc: 'The character struggles to operate in the unfamiliar. They try, fail, try again. This is the bulk of the story —the messy middle.' },
    { n: 5, label: 'Get what they wanted', short: 'Find', desc: 'The character achieves the goal they set out for. This is the midpoint, not the ending. Getting what you want is never enough.' },
    { n: 6, label: 'Pay a heavy price for it', short: 'Take', desc: 'Getting what you wanted costs something. The price is often the revelation that what you wanted was not what you needed. Everything falls apart.' },
    { n: 7, label: 'Return to where they started', short: 'Return', desc: 'The character makes their way back —physically or emotionally. The road back is different from the road out, because the character has changed.' },
    { n: 8, label: 'Having changed', short: 'Change', desc: 'The character is not the same. The change can be positive, negative, or ambiguous —but it must be real and earned by what happened in the circle.' },
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1B3A4B 0%, var(--green) 55%, #3A7070 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Dan Harmon's Story Circle
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Dan Harmon
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Frameworks</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>4 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '16px' }}>
          The Story Circle
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          Dan Harmon, creator of <em>Community</em> and <em>Rick and Morty</em>, spent years studying Joseph Campbell&#39;s monomyth and Dramatica theory before distilling what he found into an eight-step circle. His goal was a framework simple enough to use in a writers&#39; room on deadline —something that could be drawn on a whiteboard and checked against any story in a few minutes.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The circle is drawn as a clock face divided into eight positions. The top half is the conscious world —the familiar, the comfortable, the known. The bottom half is the unconscious world —the unfamiliar, the dangerous, the transformative. Every story worth telling requires a descent and a return.
        </p>

        {/* Visual circle diagram */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px', marginBottom: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <svg viewBox="0 0 280 280" width="220" height="220" style={{ display: 'block' }}>
            {/* Circle */}
            <circle cx="140" cy="140" r="100" fill="none" stroke="var(--border)" strokeWidth="1.5"/>
            {/* Dividing line */}
            <line x1="40" y1="140" x2="240" y2="140" stroke="var(--border)" strokeWidth="1" strokeDasharray="4,4"/>
            {/* Labels */}
            <text x="140" y="28" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--green)" fontWeight="700">CONSCIOUS / FAMILIAR</text>
            <text x="140" y="264" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#7C3AED">UNCONSCIOUS / UNFAMILIAR</text>
            {/* 8 steps around circle */}
            {[
              { n:1, x:140, y:46,  label:'YOU' },
              { n:2, x:214, y:74,  label:'NEED' },
              { n:3, x:241, y:148, label:'GO' },
              { n:4, x:214, y:214, label:'SEARCH' },
              { n:5, x:140, y:242, label:'FIND' },
              { n:6, x:66,  y:214, label:'TAKE' },
              { n:7, x:40,  y:148, label:'RETURN' },
              { n:8, x:66,  y:74,  label:'CHANGE' },
            ].map(s => (
              <g key={s.n}>
                <circle cx={s.x} cy={s.y} r="14" fill={s.n <= 2 || s.n === 8 ? 'var(--green-pale)' : s.n >= 5 ? '#F3E8FF' : '#FFF7ED'} stroke={s.n <= 2 || s.n === 8 ? 'var(--green-border)' : s.n >= 5 ? '#DDD6FE' : '#F5C57A'} strokeWidth="1"/>
                <text x={s.x} y={s.y - 2} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill={s.n <= 2 || s.n === 8 ? 'var(--green)' : s.n >= 5 ? '#7C3AED' : '#8BA5A0'}>{s.n}</text>
                <text x={s.x} y={s.y + 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-soft)">{s.label}</text>
              </g>
            ))}
          </svg>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', margin: 0, letterSpacing: '0.05em' }}>Top = comfort zone · Bottom = unfamiliar world</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The 8 steps</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          {steps.map(s => (
            <div key={s.n} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, background: s.n <= 2 || s.n === 8 ? 'var(--green-pale)' : s.n >= 5 ? '#F3E8FF' : '#FFF7ED', border: `1px solid ${s.n <= 2 || s.n === 8 ? 'var(--green-border)' : s.n >= 5 ? '#DDD6FE' : '#F5C57A'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: s.n <= 2 || s.n === 8 ? 'var(--green)' : s.n >= 5 ? '#7C3AED' : '#8BA5A0' }}>{s.n}</span>
              </div>
              <div style={{ paddingTop: '4px' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '3px', fontFamily: 'var(--font-ui)' }}>{s.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0, fontFamily: 'var(--font-ui)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The circle is recursive.</strong> Harmon used it for every episode of Community, every act, sometimes every scene. Any unit of story —a sequence, an episode, a film —can be mapped to the circle. The power is in its scalability: what works for a season arc works for a five-minute short.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/heros-journey" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>← Hero&#39;s Journey</Link>
          <Link href="/learn/sequence-approach" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>Sequence Approach →</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

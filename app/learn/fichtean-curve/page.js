import Link from 'next/link'

export const metadata = {
  title: 'The Fichtean Curve: Start in Crisis | Eve',
  description: 'The Fichtean Curve begins in rising action. No setup, no ordinary world. You start at the first complication and escalate through crises to the climax.',
}

const sections = [
  {
    heading: 'No setup allowed',
    body: "Most story structures begin before the story begins. The ordinary world, the establishing shots, the pre-conflict equilibrium—all of it exists to give the disruption meaning. The Fichtean Curve rejects this entirely. You start in crisis. Not the inciting incident, not the first act break—the first crisis. The audience is already in the middle of something urgent when the story opens. Everything they need to understand about who the protagonist is and what they stand to lose must be communicated through the rising action itself, not before it. The result is a story with no slow opening—which means no slow opening to survive."
  },
  {
    heading: 'How the curve works',
    body: "The Fichtean Curve is named after the ascending curve on a graph it resembles. The story opens in rising action and escalates through a series of crises, each one raising the stakes, each one forcing the protagonist to act with incomplete information and insufficient resources. Backstory is delivered through the crises rather than before them—we learn who a character is by watching them fail or succeed under pressure, not by being told who they were before the pressure arrived. The climax arrives at the peak of the curve when all crises converge simultaneously. There is no falling action of significance; the story ends quickly after the climax. Denouement is brief or absent."
  },
  {
    heading: 'Crisis versus complication',
    body: "The key distinction in building a Fichtean Curve is between a crisis and a complication. A complication makes the protagonist's situation more difficult. A crisis forces an irreversible decision under pressure. The Fichtean Curve is built on crises—moments where the protagonist must act, must choose, must commit to something they cannot take back. Each crisis must genuinely raise the stakes of the next. If the second crisis is no worse than the first, the curve is flat. If the third crisis is survivable with the same skills the protagonist used in the first, the structure is not working. Each crisis must require the protagonist to be more exposed, more committed, more at risk than the last."
  },
  {
    heading: 'Memento as example',
    body: "Christopher Nolan's Memento is a Fichtean Curve run in reverse—the film begins at the climax and moves backward through the crises that led to it. The effect is to place the audience in the position of Leonard Shelby: we know the end before we understand how we got there, and understanding arrives in pieces, through crises, without the comfort of chronological order. The film works because every scene is a crisis. Nothing in Memento is setup. Every moment is consequence and urgency. The backstory—what happened to Leonard's wife, who Teddy actually is—arrives through the action itself. The structure demonstrates the Fichtean Curve's central argument: backstory is more powerful when delivered through crisis than before it."
  },
  {
    heading: 'What it is best for',
    body: "The Fichtean Curve is most naturally suited to thrillers, horror, and any story where pace and tension are the primary experience. It is particularly useful for short fiction, where the structural cost of an ordinary-world setup is higher relative to the total length. For feature screenplays, it works best when the protagonist is already an expert in the world of the story—when there is no learning curve that requires an establishing period. A spy thriller can open in the middle of a failed mission because we expect spies to know their world. A story about a person encountering an unfamiliar situation for the first time may need more establishment before crisis is earned."
  },
  {
    heading: 'The ending problem',
    body: "The Fichtean Curve has one structural vulnerability: the ending. Because the structure builds exclusively through escalation, the climax must be genuinely final. There is no room for a false climax followed by a real one—the escalation logic of the curve makes any continuation after what appears to be the peak feel like an anticlimax. This means the Fichtean Curve requires the writer to identify their true climax precisely and stop there. Many writers using this structure continue past their actual ending because they have not committed to where the curve peaks. Find your peak, land the climax at it, and end. The curve does not accommodate second thoughts."
  },
]

export default function Lesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#FEF3E2', color: '#B5700A' }}>Frameworks</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>6 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            The Fichtean Curve: Start in Crisis
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            No setup. No ordinary world. The story opens in the middle of a crisis and escalates through more crises until the climax resolves everything at once.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Shape diagram */}
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', marginBottom: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '12px' }}>The Shape</p>
          <svg viewBox="0 0 480 100" style={{ width: '100%', display: 'block' }}>
            <path d="M 20 90 Q 120 75 160 60 Q 220 40 260 30 Q 320 18 360 8 L 360 8 L 390 55 L 420 80 L 460 90" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"/>
            {[
              [160, 60, 'Crisis 1'],
              [260, 30, 'Crisis 2'],
              [360, 8, 'Climax'],
            ].map(([x, y, label]) => (
              <g key={label}>
                <circle cx={x} cy={y} r="4" fill="var(--green)"/>
                <text x={x} y={y - 8} textAnchor="middle" style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', fill: 'var(--text-soft)' }}>{label}</text>
              </g>
            ))}
            <text x="20" y="98" style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', fill: 'var(--text-soft)' }}>START IN CRISIS</text>
            <text x="380" y="98" textAnchor="middle" style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', fill: 'var(--text-soft)' }}>END</text>
          </svg>
        </div>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', marginTop: i === 0 ? 0 : '8px' }}>{s.heading}</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'var(--text-mid)', margin: 0 }}>{s.body}</p>
          </div>
        ))}

        <div className="tip-box" style={{ marginTop: '16px' }}>
          <strong>Try this:</strong> Identify your story's first crisis. Not the inciting incident—the first moment of genuine urgency and irreversibility. Now write your first scene as if you are starting there. Cut everything before it. See what the story needs to provide through action and dialogue to make that opening crisis land.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid var(--border)', marginTop: '16px' }}>
          <Link href="/learn/kishotenketsu" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Kishōtenketsu</p>
            </div>
          </Link>
          <Link href="/learn/seven-point-story" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Seven-Point Structure</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

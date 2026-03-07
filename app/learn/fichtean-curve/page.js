import Link from 'next/link'

export const metadata = {
  title: 'The Fichtean Curve: crisis first — Eve',
}

export default function LessonFichteanCurve() {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 20px' }}>
      <Link href="/learn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-soft)', fontSize: '13px', marginBottom: '32px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All lessons
      </Link>

      <div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Framework</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Fichtean Curve: crisis first, backstory woven in
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Most story structures begin with setup: establish the world, establish the character, then introduce the conflict. The Fichtean Curve inverts this. It opens in the middle of crisis, drops the audience directly into rising action, and reveals backstory only as it becomes necessary. The result is a story that never loses momentum because it never stops to catch its breath.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The structure</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Named for the German philosopher Johann Gottlieb Fichte and codified as a narrative tool by fiction theorist Janet Burroway, the Fichtean Curve describes a story shape that looks like a steep, jagged incline followed by a sharp drop.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          {[
            { phase: 'Opening Crisis', desc: 'The story begins in the middle of a problem. Not setup — action. The protagonist is already in trouble, already making consequential decisions. The audience must catch up, and catching up keeps them engaged.' },
            { phase: 'Rising Action with Crises', desc: 'Unlike conventional rising action, the Fichtean Curve does not build steadily toward a single climax. It moves through a series of smaller crises — each one more serious than the last. Every time the protagonist escapes one problem, a worse one arrives. The line rises jaggedly, not smoothly.' },
            { phase: 'Backstory Woven In', desc: 'The information the audience needs to understand the protagonist — their wound, their history, what is at stake — is revealed through the crises rather than before them. We learn who someone is by watching how they respond to pressure, not through summary.' },
            { phase: 'Climax', desc: 'The crises converge into a single overwhelming confrontation. Everything the protagonist has been running from or toward arrives at once. The climax is not a new event — it is the sum of all the previous crises demanding resolution simultaneously.' },
            { phase: 'Resolution (brief)', desc: 'The resolution is short — sometimes a single scene. The Fichtean Curve does not reward long denouements. Once the climax breaks, the story ends quickly. What matters has already happened.' },
          ].map(({ phase, desc }) => (
            <div key={phase} style={{ padding: '18px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--white)' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)', marginBottom: '6px' }}>{phase}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The backstory problem — solved</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The most common mistake in conventional structure is front-loading backstory: establishing who a character is and what happened to them before the story begins, and only then starting the action. This kills momentum. The audience is being asked to care about context before they care about the character.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Fichtean Curve solves this by placing the audience in crisis first. Now they are engaged — they want to know what happens. When backstory arrives in fragments — revealed through a crisis, triggered by a decision, surfaced by a confrontation — the audience receives it with hunger rather than patience.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The rule of earned backstory:</strong> Backstory is not setup. It is a reward. The audience earns the right to understand a character&apos;s history by first caring what happens to them. Plant the crisis. Then, when the audience is leaning forward, give them the why.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>When to use it</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Fichtean Curve is ideal for thrillers, mysteries, horror, and any story where momentum is the primary concern. It is also powerful for character studies where the protagonist&apos;s history is complicated — rather than explaining that history upfront, the Curve lets the character reveal themselves under pressure.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Films that open <em>in medias res</em> — in the middle of the action — are often operating on something like the Fichtean Curve. <em>Memento</em>, <em>Arrival</em>, <em>Mad Max: Fury Road</em>, and many others open in crisis or near-crisis and use the journey to reveal what the audience needs to understand why.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Be cautious with stories that require significant world-building. If the audience needs substantial context to understand even the opening crisis, the Fichtean Curve will disorient rather than engage. In those cases, a brief conventional setup may be necessary before the curve begins.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>How to use this in Session mode</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            In session, you will define your opening crisis, map your series of escalating crises, and identify what backstory belongs to each one. The key question for each crisis: what does the protagonist do that reveals who they are — and what history does that decision require the audience to understand?
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/kishotenketsu" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Kishōtenketsu</p>
            </div>
          </Link>
          <Link href="/learn" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Back to</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Craft Library</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

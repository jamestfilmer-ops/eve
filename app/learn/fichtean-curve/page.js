import Link from 'next/link'

export const metadata = {
  title: 'The Fichtean Curve: crisis first, backstory woven in  -- Eve',
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
          <span className="badge badge-green">Structure</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Fichtean Curve: crisis first, backstory woven in
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Most structure frameworks tell you to establish, then complicate, then resolve. The Fichtean Curve disagrees. It begins in crisis  -- the story opens with the protagonist already in rising action  -- and weaves in backstory only as the escalating crises demand it. For writers whose stories feel slow to start, this framework is a controlled demolition of everything that is not necessary.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The shape of the curve</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Named after Johann Gottlieb Fichte&apos;s philosophical concept of thesis-antithesis-synthesis, the Fichtean Curve describes a story that begins not at the origin of the protagonist&apos;s problem but in the middle of it. The curve rises through a series of crises  -- each one more serious than the last  -- toward a climax, then falls quickly to a brief resolution.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          There is no traditional Act 1 setup. There is no expository introduction to the world. The story opens on a moment of pressure, and the audience must piece together context from what they observe as the crises escalate. The backstory arrives when the story needs it  -- when a specific crisis requires the audience to understand something about the protagonist&apos;s past to feel the full weight of the present.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
          <div style={{ padding: '16px', background: 'var(--off-white)', borderRadius: '8px', borderTop: '3px solid var(--text-soft)' }}>
            <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Traditional structure</p>
            <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Setup &rarr; Rising action &rarr; Crisis &rarr; Climax &rarr; Falling action</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '8px', fontStyle: 'italic' }}>Backstory in Act 1</p>
          </div>
          <div style={{ padding: '16px', background: 'var(--green-pale)', borderRadius: '8px', borderTop: '3px solid var(--green)' }}>
            <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--green)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Fichtean Curve</p>
            <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Crisis &rarr; Crisis &rarr; Crisis &rarr; Climax &rarr; Brief resolution</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '8px', fontStyle: 'italic' }}>Backstory woven through crises</p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The backstory rule</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In a Fichtean Curve structure, backstory is never delivered as exposition. It is revealed only when the story demands it. A crisis arrives, and the protagonist&apos;s reaction to that crisis is incomprehensible without understanding something from their past  -- so the past is revealed, in that moment, as the minimum necessary context for the present to make sense.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This creates a double effect: the backstory lands with more emotional force because it arrives in a context that immediately makes it meaningful, and the crisis itself lands harder because the backstory has suddenly made the stakes personal.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The test:</strong> Any backstory that can be cut without making the present crisis confusing or emotionally hollow should be cut. In Fichtean structure, backstory is not context  -- it is crisis fuel. If it does not intensify what is happening right now, it does not belong.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Who this framework is for</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Fichtean Curve suits stories where the central dramatic question is already established before the story begins  -- where the protagonist arrives in the story already in motion, already defined by choices they made before page one. Crime narratives, thrillers, and certain kinds of character studies work especially well with this shape.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          It is also a useful diagnostic tool for any story that feels slow to start. Ask yourself: where is the first real crisis? If it is not in the first two pages, why? Every scene before the first crisis is setup that the Fichtean model would cut or merge into the crisis itself. Sometimes that audit saves thirty pages.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Stories that should probably not use this model: coming-of-age stories where the ordinariness of the starting world is essential to feeling the change. Those need the contrast between before and after  -- which requires the before to be established. The Fichtean Curve erases the before.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Take the first act of a story you are working on and apply Fichtean surgery:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Identify the first scene where the protagonist is under genuine pressure  -- a real crisis, not a hint of one.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Move that scene to page one. Cut everything before it.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Go through the cut material and find every piece of backstory. Ask: at which crisis does this backstory land hardest? Move it there.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Read the result. Does the story feel faster? Does the backstory feel more meaningful in its new context?</li>
          </ol>
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

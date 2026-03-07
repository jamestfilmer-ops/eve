import Link from 'next/link'

export const metadata = {
  title: 'The All Is Lost beat — Eve',
}

export default function LessonAllIsLost() {
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
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>3 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The All Is Lost beat
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Before your hero can win, they must lose everything. Not stumble. Not be discouraged. Lose everything — including, for a moment, their belief that winning is possible.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Why the low point is structural, not emotional</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Beginning writers often think the All Is Lost beat is about making the audience sad. It is not. It is a structural necessity: the hero can only enter Act Three transformed if Act Two ended with their old approach completely exhausted.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          If your hero can recover without changing — without surrendering something, without truly failing — then the climax will feel unearned. The audience will sense, even if they cannot name it, that the hero got off easy.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The test:</strong> After your All Is Lost moment, ask yourself: &ldquo;Does my hero have anything left to try with the approach they have been using?&rdquo; If yes, the beat is not working yet.
        </div>

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The whiff of death</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Blake Snyder called this beat the &ldquo;whiff of death.&rdquo; Not always literal — though sometimes it is. The point is that something dies here. It might be a relationship, a belief, a version of the self. The hero&apos;s old way of moving through the world must die so something new can emerge.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>Rocky</em>, he tells Adrian before the fight that he does not expect to win. He has accepted that he cannot beat Apollo Creed. His old dream — winning — has to die before he can discover what he actually wants: to go the distance, to still be standing at the end. That reframe is only possible because the first dream failed.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          In <em>Toy Story</em>, Woody and Buzz are trapped, estranged, and the moving truck is pulling away. Woody&apos;s belief that Buzz can be his friend — let alone that they will make it home — has collapsed entirely. That is the bottom. Everything after it is recovery, not strategy.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The false resolution trap</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          One of the most common mistakes at this beat is the false resolution: the hero hits a low point, feels bad for a page or two, then rallies with no internal change. The audience senses the manipulation. Nothing was actually lost; everything was merely paused.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The other trap is the external low point with no internal consequence. The villain wins a battle. The hero loses a resource. These can matter — but only if they close a door inside the hero, not just outside of them.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The question to ask:</strong> What does your hero believe at the end of Act Two that they did not believe at the beginning? If the answer is &ldquo;nothing,&rdquo; your All Is Lost beat needs to go deeper.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            Find the lowest point in a story you are working on. Write one sentence describing what your hero has lost — not what has happened to them externally, but what has died inside them. If you cannot write that sentence, the beat is not complete.
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/act-breaks" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Act breaks</p>
            </div>
          </Link>
          <Link href="/learn/want-vs-need" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Related</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Want vs. Need</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
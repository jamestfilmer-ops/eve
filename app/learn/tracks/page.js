import Link from 'next/link'

export const metadata = {
  title: 'Act breaks: what they are and why they matter — Eve',
}

export default function LessonActBreaks() {
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
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>5 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Act breaks: what they are and why they matter
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Most writers know their stories have acts. Most cannot tell you exactly where one act ends and another begins. That gap — between knowing acts exist and knowing when they turn — is where most stories go soft.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What an act break actually is</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          An act break is not a page number. It is not a structural formality. An act break is a point of no return — a moment after which your story can never return to what it was before.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In a three-act story: Act One ends when your protagonist commits to a new world or problem — not just when one is thrust upon them, but when they step toward it. Act Two ends when everything they have tried has failed and they face their lowest point. Act Three is the aftermath of that collapse: the final push that emerges from change, not strategy.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The diagnostic question:</strong> Ask &ldquo;Could the character go back to who they were before this moment?&rdquo; If yes, you have not found your act break yet.
        </div>

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What the first act break does</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The end of Act One is sometimes called the &ldquo;lock-in.&rdquo; The hero either chooses to enter a new world — or has the choice taken from them in a way that closes the door on the old one.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>The Wizard of Oz</em>, Dorothy is not trapped in Oz the moment the tornado lands. She is locked in when her house falls on the witch and the Munchkins celebrate. There is no going back — she has inadvertently become a figure in this world&apos;s story. The door closed.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>The Godfather</em>, Michael Corleone&apos;s Act One break is not when his father is shot. It is when Michael volunteers to kill Sollozzo and McCluskey. He is not a victim being swept along — he steps through the door himself. That choice cannot be undone.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What the second act break does</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The end of Act Two is the low point — the All Is Lost moment — followed immediately by the decision that creates Act Three. The hero, having tried everything and lost, finally discovers what they actually need to do. This is not a new plan. It is a new understanding.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The second act break works only if the failure is genuine. If the hero can dust themselves off and try again without changing, Act Two has not ended. It has stalled.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The failure test:</strong> Your Act Two break lands properly when the audience genuinely believes the hero cannot win. Not that they are having a hard time. That they have lost.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The act break as a commitment device</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          One way to think about act breaks: they are places where the protagonist commits to something irrevocable. Not where things happen to them — where they decide, or where a decision is made so irreversible that it functions as their own.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Passive protagonists create act breaks that feel inert. The hero gets arrested. The hero is fired. The hero finds out their partner is leaving. These can work — but only if the hero&apos;s response to each event is active, and if their active response is what makes return impossible.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The strongest act breaks happen when a character does something — says something, burns something, crosses a line — that they cannot undo. That is when audiences lean forward.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Take a project you are working on and identify where you believe your Act One break occurs. Then ask three questions:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Could your protagonist go back to their Act One life after this moment?</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Does your protagonist make a choice here, or does something simply happen to them?</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Does this moment raise a clear dramatic question that your story will spend Act Two trying to answer?</li>
          </ol>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginTop: '12px' }}>
            If any of these fail, your break may be a beat, not a turn.
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/midpoint" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The midpoint is the spine</p>
            </div>
          </Link>
          <Link href="/learn/all-is-lost" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The All Is Lost beat</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
import Link from 'next/link'

export const metadata = {
  title: 'The Sequence Approach — Eve',
}

export default function LessonSequenceApproach() {
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
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>8 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Sequence Approach
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Three-act structure tells you where the big turns are. It does not tell you what to put between them. The Sequence Approach solves this problem by dividing a feature screenplay into eight sequences of roughly ten to fifteen pages each — each sequence functioning as a miniature film with its own tension, rising action, and resolution.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Where it comes from</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Sequence Approach was developed by Frank Daniel, a screenwriting teacher at USC and Columbia whose students included Milos Forman and many others. Daniel observed that classical Hollywood films were structured around sequences — inherited from the silent era when films were distributed on reels of roughly ten minutes each. The transition to sound kept the psychological pattern even as the technical necessity disappeared.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Paul Joseph Gulino popularized the method in his book <em>Screenwriting: The Sequence Approach</em>, analyzing dozens of classic films through this lens. What becomes clear is that the sequence structure is not a prescription — it is a description of how effective screenplays already work.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The core insight:</strong> Audiences can sustain tension and engagement through a mini-story of roughly twelve minutes. Long before the feature film resolves, viewers need intermediate resolutions — small answers that reward attention while opening new questions.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The eight sequences</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '16px' }}>
          A standard feature divides roughly as follows:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {[
            { seq: 'Sequence 1', act: 'Act 1', pages: 'pp. 1–15', desc: 'Establish the world, introduce the protagonist, and plant the central dramatic question. Ends with the inciting incident or the moment before it.' },
            { seq: 'Sequence 2', act: 'Act 1', pages: 'pp. 15–30', desc: 'The protagonist responds to the inciting incident and moves toward a decision. Ends with the Act 1 break — the point of no return.' },
            { seq: 'Sequence 3', act: 'Act 2A', pages: 'pp. 30–45', desc: 'The protagonist enters the new world and attempts to achieve their goal using old methods. Those methods fail.' },
            { seq: 'Sequence 4', act: 'Act 2A', pages: 'pp. 45–60', desc: 'Complications deepen. The protagonist adapts and makes progress — leading to the midpoint false victory or false defeat.' },
            { seq: 'Sequence 5', act: 'Act 2B', pages: 'pp. 60–75', desc: 'The midpoint reversal takes hold. The situation worsens. The protagonist loses resources, allies, or advantages.' },
            { seq: 'Sequence 6', act: 'Act 2B', pages: 'pp. 75–90', desc: 'The lowest point. The All Is Lost moment. The protagonist must make a fundamental choice about who they are.' },
            { seq: 'Sequence 7', act: 'Act 3', pages: 'pp. 90–105', desc: 'The protagonist acts on their choice with new conviction. The climax builds — the final confrontation begins.' },
            { seq: 'Sequence 8', act: 'Act 3', pages: 'pp. 105–120', desc: 'The climax resolves. The protagonist demonstrates their transformation. The world is in a new state.' },
          ].map(({ seq, act, pages, desc }) => (
            <div key={seq} style={{ padding: '16px 18px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--white)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)' }}>{seq}</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{act}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{pages}</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Why it works as a writing tool</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Sequence Approach solves the second act problem. Most writers lose momentum in the second act because it is too large and formless. Sixty pages with no structural anchor is a grind to write and a grind to read. Breaking it into four sequences of fifteen pages each gives you four miniature problems to solve, each with a beginning, middle, and end.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Each sequence should have what Daniel called a &ldquo;sequence question&rdquo; — a specific dramatic question that opens at the start and resolves (positively or negatively) at the end. The feature film&apos;s central question stays open throughout; the sequence questions are the stations along the way.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Use this framework when you have a strong premise and strong acts but are struggling to fill the space between them with momentum. It gives you a scaffolding fine enough to write toward without being so rigid it removes creative choice.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>How to use this in Session mode</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            When you select the Sequence Approach in a session, you will work through all eight sequences. For each one, write the sequence question — the specific dramatic problem that opens and closes that fifteen-page block. The beats are your scaffold; your story fills the space.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/kishotenketsu" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Kishōtenketsu</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'How to write an argument — Eve',
}

export default function LessonArguments() {
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
          <span className="badge badge-green">Dialogue</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>7 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          How to write an argument
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Most written arguments are fake arguments. Two characters trade insults. Volume increases. Someone storms out. Nothing changes. A real argument is one of the most structurally demanding scenes you can write — because it has to do two things at once: escalate and reveal.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Arguments are not about what they&apos;re about</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The surface of an argument — the dishes, the money, who forgot to call — is almost never what the argument is actually about. The real argument is underneath: who has power, who feels unseen, what each person is afraid to lose.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>Marriage Story</em>, the central argument begins as a disagreement about logistics — where they&apos;ll live, how custody will work. Within minutes it has stripped down to the real thing: years of resentment, unexpressed need, the accumulated grief of two people who failed each other slowly. The surface issue is a door. The real issue is a marriage.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Before you write the argument:</strong> Name the surface issue and the buried issue separately. If you can&apos;t name the buried one, the argument has no engine.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The argument must escalate through revelation</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A good argument doesn&apos;t just get louder. It gets more honest — often cruelly so. Each beat escalates because something new is admitted, or revealed, or said that cannot be unsaid. The characters aren&apos;t just attacking each other. They&apos;re peeling away the protection they normally maintain around themselves.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The structure of escalation: each character starts with what they&apos;re allowed to say. Then says something they&apos;ve been holding. Then says something they swore they would never say. By the end, both characters are more exposed than they&apos;ve been at any point in the story.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          That exposure is the scene&apos;s purpose. Not the resolution — the exposure.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Both characters must have a point</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The most common mistake in written arguments is the straw man: one character is clearly right and one character is clearly unreasonable. This produces a scene where the audience waits for the unreasonable person to stop talking, rather than a scene where the audience is genuinely torn.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Both characters need to be making a legitimate point. Both need to have real grievances. Both need to be somewhat right and somewhat wrong. When the audience can&apos;t comfortably side with either person, the argument becomes genuinely uncomfortable — which is where arguments need to live.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The fairness test:</strong> After drafting the argument, read only one character&apos;s lines. Do they sound like a reasonable person? Now read only the other&apos;s. Do they also sound reasonable? If one side sounds like a villain&apos;s monologue, the argument is not working yet.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The line that can&apos;t be taken back</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Every argument worth writing has at least one moment where someone says the thing they can&apos;t unsay. The thing that&apos;s true, and that both characters know is true, and that changes the relationship permanently by being said out loud.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This moment usually comes after the false climax — the point where it seems like the argument is over, someone backs down slightly, and then something happens that rips it back open. That second escalation is where the real line gets crossed.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The scene isn&apos;t over when the argument stops. It&apos;s over when the characters — and the audience — absorb what was just said. Give that moment room.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Write a one-page argument between two characters who love each other. Follow these rules:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>The argument must be about something mundane on the surface.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Both characters must be making a legitimate point.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>One line — just one — must be the thing that cannot be unsaid. Mark it.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>End the scene in silence, not resolution.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/subtext" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Subtext</p>
            </div>
          </Link>
          <Link href="/learn/secondary-characters" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Secondary characters</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

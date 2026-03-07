import Link from 'next/link'

export const metadata = {
  title: 'Plant and payoff: the architecture of inevitability — Eve',
}

export default function LessonPlantPayoff() {
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
          Plant and payoff: the architecture of inevitability
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          When a story&apos;s ending feels inevitable — not predictable, but <em>right</em> — it&apos;s almost always because something was planted early and paid off late. Plant and payoff is the invisible architecture underneath every satisfying story. When it works, you don&apos;t notice it. When it&apos;s missing, you feel cheated.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What a plant is — and isn&apos;t</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A plant is information introduced early that will become significant later. It can be an object, a piece of dialogue, a character&apos;s habit, a detail of setting. It is not a clue that screams &ldquo;remember this.&rdquo; A plant that announces itself is a spoiler. A plant that works is one the audience absorbs without registering as significant — until the payoff makes them see it differently.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>Jurassic Park</em>, the shot of the water glass vibrating before the T-Rex appears is a plant. It teaches the audience what to watch for before they understand why. When it reappears in the climax, in the kitchen, it doesn&apos;t need explanation. The audience has already learned the language.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The camouflage rule:</strong> A plant should be hidden in plain sight. Introduce it in a moment of action or dialogue where the audience is focused on something else. The detail registers but doesn&apos;t seem important. That&apos;s the whole trick.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The three-distance rule</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The further the payoff is from the plant, the more powerful it lands — up to a point. A plant in scene three that pays off in scene four is not a plant; it&apos;s a setup. A plant in Act One that pays off in Act Three is architecture.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The classic rule is three: plant something, echo it once in the middle (reinforcing it without making it obvious), and pay it off at the end. The middle echo is often what writers miss. It keeps the planted detail alive in the audience&apos;s unconscious memory while still not flagging it as significant.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>The Silence of the Lambs</em>, Clarice&apos;s memory of the lambs screaming is planted in conversation with Lecter early on. It resurfaces at the climax — not just as backstory, but as the psychological key to why she does what she does. The detail wasn&apos;t decoration. It was load-bearing.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Payoff without plant is a cheat</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          When something important happens in Act Three that was never set up in Act One, audiences feel cheated — even if they can&apos;t articulate why. The feeling is: &ldquo;where did that come from?&rdquo; A character produces a skill they never demonstrated. A relationship suddenly matters when it was barely established. An object becomes significant with no prior introduction.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This is sometimes called a <em>deus ex machina</em> — a resolution that arrives from outside the story&apos;s established logic. The antidote is always a plant: if something will matter later, introduce it early, casually, without fanfare.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Plant without payoff is clutter</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The other failure: setting something up and never paying it off. Chekhov&apos;s gun — if you show a gun in Act One, it must fire by Act Three — is not just about guns. It&apos;s about audience attention. Audiences track what you show them. If you introduce something with apparent significance and it goes nowhere, the audience feels misled.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Every significant plant requires a payoff. This doesn&apos;t mean every detail must pay off — background is background. But anything that receives narrative emphasis, anything the camera or the narration lingers on, anything a character mentions more than once: that&apos;s a promise to the audience that you are committing to keep.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Take a project you&apos;re working on and do a plant audit:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>List every significant payoff in Act Three. For each one, find where it was planted. If you can&apos;t find the plant, you need to add one to Act One.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>List every detail in Act One that receives narrative emphasis. For each one, find the payoff. If there isn&apos;t one, cut the detail or plant it more quietly.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Identify one detail that could carry more weight — something you mention once and forget. Find where in Act Two or Three it could echo or resolve.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/secondary-characters" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Secondary characters</p>
            </div>
          </Link>
          <Link href="/learn/motifs" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Motifs</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

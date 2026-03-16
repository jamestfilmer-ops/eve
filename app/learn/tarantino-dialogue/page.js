import Link from 'next/link'

export const metadata = {
  title: 'The Tarantino method: dialogue as character —Eve',
}

export default function LessonTarantinoDialogue() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Header breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#FEF3E2', color: '#B5700A' }}>Craft</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>9 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Advanced</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            The Tarantino Method: Dialogue as Character
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            A craft lesson for serious writers.
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Dialogue</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Tarantino method: dialogue as character
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Quentin Tarantino&apos;s characters talk about everything except what they are about to do. They argue about fast food. They debate the etiquette of tipping. They riff on TV pilots and superhero origin stories. And somehow, in all that apparent digression, you learn exactly who these people are and what they are capable of. That is not an accident. It is a precise technique.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Pop culture as a window into character</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          When Jules and Vincent debate the metric system and the names of fast food items in Pulp Fiction, they are not wasting time. In two minutes of conversation, Tarantino establishes their relationship (comfortable, peer-level), their worldview (curious, comparative, self-regarding), and their moral framework (these are men who notice small things and assign large opinions to them —the same cognitive pattern that will apply to their murder work later).
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The key insight: a character&apos;s opinions about inconsequential things reveal their personality far more honestly than their opinions about important things. When the stakes are low, people tell the truth about who they are. A man who has a strong, considered position on tipping will have a strong, considered position on everything —including violence, loyalty, and betrayal.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The specificity rule:</strong> Tarantino never lets characters have vague tastes. They do not just like movies —they have a specific opinion about a specific film for a specific reason. Specificity is what makes pop culture references feel like character rather than noise. Generic opinions reveal nothing. Specific ones reveal everything.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Subtext through obsessive specificity</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Tarantino&apos;s dialogue runs on a principle most writers underuse: the content of what characters say is almost never the point. The point is what the content reveals about how they think.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In Inglourious Basterds, Hans Landa&apos;s famous opening monologue about rats and squirrels is ostensibly about vermin. But the real content is his mind —its precision, its pleasure in analogy, its willingness to take a circuitous route to a point while never losing control of the conversation. By the time he says anything directly threatening, we already understand who we are dealing with. The small talk was the threat.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This is the master class: when a character talks about something irrelevant with total commitment and specificity, the audience reads the commitment itself as character. The man who cares deeply about the correct preparation of a steak is telling you something about his standards, his precision, his relationship to pleasure and control —all of which will matter when the story gets serious.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Rhythm and the long scene</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Most writers are afraid of long dialogue scenes. Tarantino built a career on them. The reason they work is rhythm —not pace. Pace is how fast dialogue moves. Rhythm is the pattern of tension and release within it.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Tarantino structures his long scenes like music: establish a relaxed baseline, introduce a note of tension, release it with humor or digression, reintroduce the tension at a slightly higher register, release again —until the tension can no longer be released, and the scene arrives at its crisis. The audience is never bored because the rhythm keeps them calibrated: relax, tighten, relax, tighten, until the release is no longer possible.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The basement bar scene in Inglourious Basterds runs nearly fifteen minutes. It is almost entirely conversation. But the rhythm of tension —the game of who knows what, the escalating danger of the accent, the card game —keeps the audience in a state of sustained dread that never releases until the violence. Every moment of apparent relaxation only tightens what comes next.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What this means for your writing</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          You do not need to write Tarantino-style dialogue to use his principles. The lessons are transferable across genres and tones:
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Give your characters strong, specific opinions about small things. The opinions should feel consistent with their larger worldview. A character who is meticulous about coffee order precision will be meticulous about other things. A character who shrugs off the small stuff will shrug off larger things too —until something finally pierces the indifference.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Let characters talk past the point where you think the scene should end. The overhang —the moment after the apparent conclusion —is often where the real scene lives. Tarantino almost always finds his best material in what happens after the obvious stopping point.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Write a two-page scene where two characters discuss something completely inconsequential —a food preference, a minor cultural disagreement, a shared memory about something trivial. Rules:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Neither character can discuss the plot or their situation directly.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Both characters must have a specific, non-generic opinion. No vague tastes allowed.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>By the end of the scene, the reader should know something important about both characters that was never stated.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Keep going two exchanges past where you think the scene is finished. Find what lives in the overhang.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/color-psychology" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Color as storytelling</p>
            </div>
          </Link>
          <Link href="/learn/sopranos-drama" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Sopranos method</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

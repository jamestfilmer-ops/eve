import Link from 'next/link'

export const metadata = {
  title: 'How The Sopranos builds dread — Eve',
}

export default function LessonSopranossDrama() {
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
          <span className="badge badge-green">Drama</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>8 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          How <em>The Sopranos</em> builds dread
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          <em>The Sopranos</em> is not a show about violence. It is a show about the domestication of violence — about a man who orders murders and then goes home to argue with his wife about the college application essay. David Chase understood something most crime writers miss: dread is not created by showing terrible things. It is created by the gap between terrible things and the mundane life that surrounds them.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Therapy as confession booth</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The structural innovation of <em>The Sopranos</em> is the therapy scenes. Tony&apos;s sessions with Dr. Melfi give the show access to his interiority in a way that would otherwise require voiceover narration — a device that would have worked against the show&apos;s naturalistic tone. More importantly, the therapy scenes create irony: Tony is trying to understand himself in an institution designed for people who want to change, while the show makes clear he cannot or will not.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          What Chase understood is that the therapy scenes are not really about psychological insight. They are about the gap between the language of therapy — self-understanding, growth, accountability — and the life Tony actually lives. Tony can articulate his emotional damage clearly. He cannot stop enacting it. This gap between self-knowledge and behavior is the show&apos;s central irony and one of its most durable insights about human nature.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The self-aware villain:</strong> Characters who can describe their own flaws without being able to change them are more unsettling than characters who lack self-awareness. Tony Soprano is frightening precisely because he understands what he is. Understanding has not helped him.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The slow accumulation of consequence</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Most crime dramas operate on a model of immediate consequence: action leads quickly to reaction. <em>The Sopranos</em> understands that in real life, consequences arrive slowly and from unexpected directions. Tony does something terrible in episode three. The consequence arrives in episode eleven — and it arrives not as punishment but as a shift in the texture of his life, a barely perceptible decay.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This slow accumulation is what creates dread rather than suspense. Suspense asks: what will happen? Dread asks: when will the weight of what has already happened become impossible to carry? The audience carries the knowledge of what Tony has done. They wait for the world to catch up.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Chase also understood that consequences in human life are rarely proportional or just. The show resists the satisfying moral calculus of most crime narratives. People die who should live. People live who should die. This randomness — this absence of narrative justice — is itself a source of dread.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Domesticity and violence as collision</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The show&apos;s signature structural move is the hard cut between violence and domesticity — or, more subtly, the placement of domestic scenes directly after acts of violence. Tony orders a murder. We then watch him coaching his son&apos;s soccer team. No reaction, no transition, no music to tell us how to feel. The juxtaposition is the point.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This technique implicates the domestic world. The house in North Caldwell, New Jersey — the pool, the ducks, the breakfast table — is not a refuge from the violence. It is built on it, maintained by it, and slowly contaminated by it. The show makes the comfortable world feel wrong because we know what funds it.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          For writers, the lesson is: do not keep your worlds separate. The contamination of one world by another — the professional bleeding into the personal, the past bleeding into the present — is a source of ongoing dramatic tension that does not require constant plot escalation.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What the finale understood</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The cut to black ending of <em>The Sopranos</em> is the show&apos;s final argument. It does not tell the audience what happened to Tony. It places the audience in the same position as Tony — the same anxiety, the same alertness to every person who walks through the door, the same inability to know whether the next moment will be ordinary or annihilating.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The ending is not ambiguous about Tony&apos;s fate to avoid making a choice. It is ambiguous because the show&apos;s central argument is that Tony&apos;s fate — and the fate of anyone who lives as Tony lives — is a permanent condition of unresolvable dread. There is no ending to that. There is only the cut.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The lesson for writers: the most powerful endings are not the ones that resolve everything, but the ones that make the audience feel the full weight of the story&apos;s central condition. A good ending is not a conclusion. It is a recognition.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Choose a character in your current project who does something morally compromised:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Write one scene where they demonstrate self-awareness about their behavior — they know exactly what they are. Do not let them change or apologize. Just let them see themselves clearly.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Write the domestic scene that follows their worst action in the story. No transition. No music direction. No acknowledgment of what just happened.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Identify one consequence from early in your story that has not arrived yet — and place it three scenes later than feels comfortable.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/tarantino-dialogue" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Tarantino method</p>
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

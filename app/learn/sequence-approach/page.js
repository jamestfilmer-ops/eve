import Link from 'next/link'

export const metadata = {
  title: 'The Sequence Approach: Eight Mini-Films | Eve',
  description: "Frank Daniel divided the screenplay into eight sequences of 10-15 pages each. This solves the Act 2 sag problem by making every section of your story accountable.",
}

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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F8E890', color: '#e8a800' }}>Structure</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>5 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #a07010 0%, var(--green) 55%, #c08010 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            The Sequence Approach: Eight Mini-Films
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            Three-act structure tells you where the pivots are. It does not tell you what to put between them. Frank Daniel solved the Act 2 problem by dividing the screenplay into eight sequences, each with its own dramatic question and resolution.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Why three acts are not enough</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            Three-act structure gives you the skeleton: inciting incident, midpoint, climax. It does not give you the musculature. Most first drafts fail not at the act breaks but between them&mdash;the sixty pages of Act 2 where the writer knows the major landmarks but not the landscape.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Frank Daniel, who taught at Columbia and later at USC, solved this problem by subdividing the screenplay into eight sequences, each roughly ten to fifteen pages long, each with its own dramatic question, rising tension, and resolution. Three-act structure is the skeleton. The Sequence Approach puts meat on the bones.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>The eight sequences</h2>
          {[
            { seq: '1', act: 'Act 1', label: 'Establish & Incite', desc: 'Introduce the protagonist in their world. Plant the dramatic problem. End with the inciting incident.' },
            { seq: '2', act: 'Act 1 → 2', label: 'Decision Point', desc: 'The protagonist hesitates, then commits to entering the new world. This is the Act 1 break.' },
            { seq: '3', act: 'Act 2A', label: 'Engage the New World', desc: 'First attempts to navigate the unfamiliar situation. Initial setbacks and small victories.' },
            { seq: '4', act: 'Act 2A', label: 'False Peak', desc: 'Things appear to be going well. The midpoint arrives and changes the stakes permanently.' },
            { seq: '5', act: 'Act 2B', label: 'Pressure Builds', desc: 'Complications intensify. The protagonist&apos;s approach is failing. Stakes become personal.' },
            { seq: '6', act: 'Act 2 → 3', label: 'All Is Lost', desc: 'The protagonist is at their lowest. Something must die before the story can turn. Act 2 break.' },
            { seq: '7', act: 'Act 3', label: 'New Approach', desc: 'The protagonist finds a new way forward using what they have learned. The climax executes.' },
            { seq: '8', act: 'Act 3', label: 'Resolution', desc: 'The world after the story. What changed? What was earned? What did it cost?' },
          ].map((s) => (
            <div key={s.seq} style={{ display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--green-pale)', border: '1px solid var(--green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)' }}>{s.seq}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '3px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>{s.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.04em' }}>{s.act}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', lineHeight: '1.6', color: 'var(--text-mid)', margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>The key insight</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Each sequence needs its own dramatic question that gets answered by the end of that sequence. &ldquo;Will Tony survive the ambush?&rdquo; is a sequence question. If you cannot state the dramatic question for each sequence, that section of your script does not have enough shape.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>How to use it diagnostically</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            The Sequence Approach is most useful as a diagnostic tool on an existing draft. Divide your script into eight roughly equal sections. For each section, write one sentence: &ldquo;The dramatic question of this sequence is _____ and it is answered when _____.&rdquo;
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            If you cannot complete that sentence for a section, that section is the problem. Something is missing: a clear question, a clear answer, or both. The Sequence Approach does not tell you what to write. It tells you where the structure is failing.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Try this</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Take a film you know well. Divide it into eight sequences. Write the dramatic question for each one. You will find that every strong film has clear sequence questions&mdash;and that the sequences where the film loses you are the ones where the question is vague or absent.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/story-circle" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/kishotenketsu" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

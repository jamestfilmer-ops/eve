import Link from 'next/link'

export const metadata = {
  title: 'Kishōtenketsu: conflict-free structure —Eve',
}

export default function LessonKishotenketsu() {
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Kishotenketsu: Structure Without Conflict
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
          <span className="badge badge-green">Structure</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Kishōtenketsu: structure without conflict
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Western narrative structure is built on conflict: a protagonist wants something, something opposes them, the opposition is overcome or defeats them. Kishōtenketsu —a classical East Asian four-act structure used in Chinese poetry, Japanese manga, and Nintendo game design —works on an entirely different principle. The engine is not conflict but revelation.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The four acts</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          {[
            {
              kanji: '起', romaji: 'Ki', label: 'Introduction',
              desc: 'Establish the world and its characters without introducing any problem. This is purely setup —lay the ground carefully, because everything that follows depends on it.',
              note: 'Resist the urge to introduce conflict here. Western writers find this uncomfortable. The discomfort is the point.'
            },
            {
              kanji: '承', romaji: 'Shō', label: 'Development',
              desc: 'Continue developing the world introduced in Ki. Deepen the characters, add texture, introduce a second element —but still no conflict. The story is simply becoming more itself.',
              note: 'The second element you introduce in Shō will seem unrelated to Ki. That apparent unrelatedness is load-bearing.'
            },
            {
              kanji: '転', romaji: 'Ten', label: 'Twist',
              desc: 'The most important act. An unexpected development recontextualizes everything established in Ki and Shō. The twist does not create conflict —it creates a new way of seeing what was already there.',
              note: 'The Ten is not a plot twist in the thriller sense. It is a pivot that makes the audience suddenly understand the relationship between two things they thought were separate.'
            },
            {
              kanji: '結', romaji: 'Ketsu', label: 'Conclusion',
              desc: 'Reconcile the elements of Ki, Shō, and Ten. The ending reveals the meaning of the twist —how the world of Ki and the development of Shō are unified by what the Ten revealed.',
              note: 'A good Ketsu should feel both surprising and inevitable. The connection was always there. The story showed you how to see it.'
            },
          ].map((act) => (
            <div key={act.kanji} style={{ padding: '18px 20px', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '24px', fontFamily: 'var(--font-display)', color: 'var(--green)', lineHeight: '1' }}>{act.kanji}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>{act.romaji}</div>
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px' }}>{act.label}</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7' }}>{act.desc}</p>
                </div>
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--off-white)', borderRadius: '6px', borderLeft: '3px solid var(--green)' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.6', fontStyle: 'italic' }}>{act.note}</p>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Why this matters for Western writers</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Kishōtenketsu does not replace conflict-based structure for most Western stories. But it solves problems that conflict-based structure cannot. Specifically: stories where the point is not to overcome an obstacle but to perceive something that was already true.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Slice-of-life stories, certain kinds of literary drama, films like Lost in Translation or Paterson —these resist the conflict-resolution model because their emotional effect depends on accumulation and revelation rather than obstacle and victory. Kishōtenketsu gives these stories a structural logic that makes them coherent rather than merely atmospheric.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The structure also has a specific use in scenes within conflict-based stories: when you want a scene to shift the audience&apos;s understanding without advancing a plot, the four beats of Kishōtenketsu can give that scene internal architecture that makes it feel earned rather than indulgent.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The Nintendo example:</strong> Shigeru Miyamoto has credited Kishōtenketsu as a structural influence on Super Mario level design —establish a mechanic, develop it, introduce a variation that recontextualizes it, and then present the mastery challenge. The same four moves, applied to interactive design.
        </div>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Write a one-page scene using Kishōtenketsu structure, with no conflict:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Ki: A person doing something ordinary in a specific place. Two to three beats of pure establishment.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Shō: Introduce a second, apparently unrelated element —a detail, another person, a memory. Develop it without connecting it.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Ten: A single line or image that makes the connection between Ki and Shō suddenly visible. Do not explain it.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Ketsu: A final beat that allows the connection to land. The reader should feel something shift in their understanding.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/sequence-approach" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Sequence Approach</p>
            </div>
          </Link>
          <Link href="/learn/fichtean-curve" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Fichtean Curve</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

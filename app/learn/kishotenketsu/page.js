import Link from 'next/link'

export const metadata = {
  title: 'Kishōtenketsu: four acts without conflict — Eve',
}

export default function LessonKishotenketsu() {
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
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>7 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Kishōtenketsu: four acts without conflict
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Western storytelling assumes conflict. The protagonist wants something, something stands in the way, and the story is the struggle between them. Kishōtenketsu is a classical Chinese, Japanese, and Korean narrative structure that organizes story around something different: surprise, juxtaposition, and the revelation of unexpected connection. There is no antagonist. There is no obstacle. There is a twist — and then a world seen differently.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The four movements</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          {[
            {
              jp: '起', romaji: 'Ki', label: 'Introduction',
              desc: 'Establish the world. Introduce the characters, setting, and situation without conflict or complication. The goal is to make the audience fully at home in a specific, clearly defined reality.'
            },
            {
              jp: '承', romaji: 'Shō', label: 'Development',
              desc: 'Continue and develop what was established. Introduce a second element — a character, a situation, a thread — that seems unrelated or loosely related to the first. Both threads are developed naturally without forcing connection between them.'
            },
            {
              jp: '転', romaji: 'Ten', label: 'Twist',
              desc: 'The pivot. A surprising development — the Ten — recontextualizes everything. The two seemingly separate threads are brought into unexpected contact. The audience sees the relationship between things they did not know were related. This is not a plot twist in the Western sense; it is a perceptual shift.'
            },
            {
              jp: '結', romaji: 'Ketsu', label: 'Reconciliation',
              desc: 'The world is seen in its new configuration. The tension created by the twist is not resolved through conflict — it is absorbed. The story ends not with victory or defeat but with a new understanding of what was always true.'
            },
          ].map(({ jp, romaji, label, desc }) => (
            <div key={romaji} style={{ padding: '20px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--white)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '10px' }}>
                <span style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: 'var(--green)', lineHeight: 1 }}>{jp}</span>
                <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>{romaji} — {label}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The Ten is not a plot twist</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Western audiences often misread the Ten as a plot reversal — a shock designed to subvert expectations. This misses the point. The Ten is not a deception revealed; it is a connection discovered. The audience is not fooled and then corrected. They are shown something they could not have seen from where they were standing, and the world becomes larger as a result.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The filmmaker Hayao Miyazaki often works in ways consistent with Kishōtenketsu — <em>My Neighbor Totoro</em> is a canonical example. There is no villain. There is no obstacle in the Western sense. There are two worlds — the domestic reality of the family and the spirit world of the forest — that come into unexpected, transformative contact. The resolution is not a victory. It is a reconciliation with what the world is.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>What conflict-free drama requires:</strong> Without a villain driving the story forward, your world must be vivid and specific enough to generate interest on its own. Kishōtenketsu demands stronger world-building and more precise observation than conflict-driven narrative. The story earns attention through what it notices, not through what it threatens.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>When to use it</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Kishōtenketsu is not a universal replacement for conflict-driven structure. It works best for stories where the point is perception rather than plot: a character who learns to see something they had always looked past; a relationship between two worlds, people, or ideas that the audience does not initially understand; a meditation on a theme that rewards contemplation rather than resolution.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Short films, animated films, slice-of-life dramas, and literary adaptations are natural homes for this structure. Feature-length genre films are harder — but not impossible. The key question: does your story need an antagonist, or does it need a revelation?
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>How to use this in Session mode</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            In session, you will work through all four movements. The most important beat is the Ten — your twist or revelation. Write that one first, then work backward: what two threads must be established in Ki and Sh&#x14d; so that the Ten feels inevitable in retrospect?
          </p>
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
  )
}

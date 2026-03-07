import Link from 'next/link'

export const metadata = {
  title: 'Motifs: the recurring images that carry meaning — Eve',
}

export default function LessonMotifs() {
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
          <span className="badge badge-green">Craft</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Motifs: the recurring images that carry meaning
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Theme tells an audience what a story is about. Motifs show them — over and over, in different registers, without stating it. A motif is any recurring element — image, object, phrase, sound, gesture — that accumulates meaning each time it reappears.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What a motif does that dialogue can&apos;t</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Dialogue communicates consciously. A motif communicates underneath the conscious level — through repetition, association, and the way images lodge in the mind. By the third time an audience sees a specific image, they are emotionally trained to feel its weight before they understand why.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>No Country for Old Men</em>, the recurring imagery of coin flips — of chance, of arbitrary fate — does more to communicate the film&apos;s theme than any line of dialogue. By the time Anton Chigurh&apos;s final coin flip happens, the audience carries the full weight of every previous flip. The image has been loaded. It arrives with meaning it didn&apos;t begin with.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The accumulation principle:</strong> A motif&apos;s power is not in what it means on first appearance. It&apos;s in what it has accumulated by the last one. Each repetition adds a layer. The final instance lands with the weight of all the previous ones combined.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Motifs vs. symbols</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A symbol appears once and represents something. A motif recurs and evolves. The distinction matters: a symbol is static meaning assigned to an image. A motif is meaning that develops through repetition.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The green light at the end of Daisy&apos;s dock in <em>The Great Gatsby</em> functions as both: it&apos;s introduced as a symbol of Gatsby&apos;s desire, but it becomes a motif as it recurs throughout the novel, its meaning shifting — from desire, to the American dream broadly, to the tragedy of chasing what you can see but never reach.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          When a symbol recurs and transforms, it becomes a motif. That transformation is what gives it depth.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>How to build a motif intentionally</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Start with your theme. What is your story fundamentally about — not in terms of plot, but in terms of human truth? Then find a concrete, physical image that can carry that theme without stating it.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A story about the impossibility of going home might use doors — opening, closing, locked, ajar — throughout. A story about the weight of inherited obligation might use objects passed from hand to hand: a ring, a watch, a letter. A story about performance and authenticity might use mirrors, or stages, or costumes.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The motif should be concrete and visual. Abstract motifs — the word &ldquo;freedom,&rdquo; recurring dialogue about justice — are harder to make land because they explain rather than evoke. The best motifs are things you can see.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Let the motif transform</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A motif that appears identically each time is a tic, not a technique. The motif needs to evolve — to appear in different contexts, at different emotional registers, so that each appearance recontextualizes the others.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>Schindler&apos;s List</em>, the recurring image of the girl in the red coat moves from innocence, to horror, to grief, to the overwhelming weight of individual humanity within mass atrocity. The coat is the same. The meaning is entirely different each time. That transformation — same image, different weight — is the motif doing its work.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Design the motif&apos;s transformations deliberately. First appearance: neutral or positive. Middle appearances: complicated, troubled. Final appearance: the full weight of everything it has become.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            For a current project:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Write your theme in one sentence — not the plot, but the human truth the story is exploring.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Find one concrete, visual image that could carry that theme without stating it.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Place it in three scenes: once early with a neutral or positive charge, once in the middle with a complicated charge, once at the end with its full weight.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Make sure none of the three appearances explain what the image means. Let it carry the meaning without stating it.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/plant-payoff" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Plant and payoff</p>
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

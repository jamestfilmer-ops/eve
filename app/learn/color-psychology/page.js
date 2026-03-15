import Link from 'next/link'

export const metadata = {
  title: 'Color as a storytelling language  -- Eve',
}

export default function LessonColorPsychology() {
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
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>7 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Color as a storytelling language
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Most writers think in words. The directors who changed cinema think in color. Color is not decoration  -- it is a parallel language running underneath your story, shaping how the audience feels before a single line of dialogue is spoken.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Breaking Bad: yellow, blue, and the grammar of transformation</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Vince Gilligan and his team designed Breaking Bad&apos;s color palette as a character map. In the first season, Walt wears beige and khaki  -- the colors of a man who has faded into the background. Skyler wears blue, representing truth and loyalty. As Walt transforms into Heisenberg, the colors shift: Walt moves into darker greens and eventually black, while the blue is increasingly associated with the product  -- the pure meth that represents Walt&apos;s corrupted pride.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Yellow saturates the world of the drug trade  -- the hazmat suits, the lab equipment, even Saul Goodman&apos;s office. It is the color of moral contamination, of a world that poisons everything it touches. Red appears at moments of danger and violence. The palette is not incidental  -- it is a coded system the audience reads unconsciously, feeling the moral stakes of each scene before the plot explains them.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The system principle:</strong> Color psychology in film works best when it operates as a system  -- not a single meaningful color, but a grammar where specific colors carry specific meanings that interact and contradict as the story evolves.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The Godfather: amber warmth and cold blue threat</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Gordon Willis&apos;s cinematography for The Godfather built one of cinema&apos;s most sophisticated color grammars. The Corleone family&apos;s world is lit in warm amber and gold  -- firelight, candlelight, the warmth of family, power, and belonging. The world outside  -- the hospitals, the streets where threats come from, the spaces of danger  -- is cold blue and grey.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Watch what happens as the story progresses: the warm amber begins to appear in threatening contexts. The study where the Don conducts business is warm, but so is the room where Michael makes his most morally catastrophic decisions. By the end, warmth has been permanently associated with corruption and power  -- a sleight of hand that makes the family feel safe even as it destroys everything it touches.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The orange motif deserves its own mention: oranges appear before every significant death in the film. Don Corleone is shot while buying oranges. Sonny passes a fruit stand before his ambush. It is never explained. The audience feels it as dread before they consciously register the pattern.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Her: washed-out warmth as emotional isolation</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Spike Jonze&apos;s palette for Her strips the world of cool tones entirely. Every scene lives in warm pinks, reds, and oranges  -- a world that should feel cozy but instead feels airless. The warmth is artificial, the color of the screens Theodore stares into, of a future where human connection has been replaced by optimized emotional simulation.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The clothes are significant: Theodore wears high-waisted trousers and muted reds  -- a designed aesthetic that signals the studied retro-future of the world. But the crucial visual choice is what is absent: sharp contrasts, cool shadows, the visual language of unmediated reality. Everything in Her looks like it has been filtered through longing. The color tells us Theodore&apos;s emotional state without a word.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>How to use color as a writer, not a cinematographer</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Screenwriters do not control color  -- directors and cinematographers do. But writers shape color through description, through the objects they choose to make visible on the page, through the environments they construct. If you put a character in a yellow room, you are inviting the director into a conversation about what that means.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          More importantly, thinking in color trains you to think visually rather than verbally  -- which is the fundamental shift that separates good screenwriting from prose translated to page format. Ask yourself: if someone watched this scene with the sound off, what would they feel? The answer is almost always color and composition.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Choose a project you are working on and build a simple two-color system:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Assign one warm color to represent what your protagonist wants (safety, love, belonging, power).</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Assign one cool or contrasting color to represent the threat to that want.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Go through your three key scenes  -- opening, midpoint, finale  -- and note which color dominates each. Does the shift feel earned?</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Find one object that can carry your primary color across the whole story, appearing in each act with increasing weight.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/motifs" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>How motifs work</p>
            </div>
          </Link>
          <Link href="/learn/tarantino-dialogue" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Tarantino method</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

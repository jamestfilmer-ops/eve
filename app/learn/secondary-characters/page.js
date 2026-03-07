import Link from 'next/link'

export const metadata = {
  title: 'Secondary characters: mirrors, foils, and pressure — Eve',
}

export default function LessonSecondaryCharacters() {
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
          <span className="badge badge-green">Character</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>7 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Secondary characters: mirrors, foils, and pressure
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          A secondary character who exists only to help the protagonist move from scene to scene is furniture. A secondary character who exists to reveal something the protagonist cannot reveal about themselves — that&apos;s a story.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The three jobs of a secondary character</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>The mirror.</strong> A secondary character who reflects the protagonist back to themselves — who shows them who they are, or who they could become. Robin Williams in <em>Good Will Hunting</em> mirrors Will&apos;s potential. The taxi driver in <em>Collateral</em> mirrors Max&apos;s passivity — his willingness to let his life be driven by others.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>The foil.</strong> A character who contrasts the protagonist in a way that clarifies who the protagonist is. The foil doesn&apos;t need to be an antagonist. Hermione is Harry&apos;s foil: her rule-following precision defines Harry&apos;s instinct-driven recklessness. Laertes is Hamlet&apos;s foil: his willingness to act immediately throws Hamlet&apos;s paralysis into relief.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          <strong>The pressure source.</strong> A character whose needs, wants, or presence force the protagonist to make choices they&apos;d otherwise avoid. They create the conditions for the protagonist to change — or resist change. Often this is the love interest, the mentor, or the antagonist, but it can be a minor character who appears in one scene and shifts everything.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The diagnostic question:</strong> If you removed this character entirely, what would the protagonist lose — not in plot, but in terms of self-knowledge? If the answer is &ldquo;nothing,&rdquo; the character is furniture.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Secondary characters have their own wants</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The biggest mistake writers make with secondary characters is making them responsive rather than active. They react to the protagonist. They serve the protagonist&apos;s needs. They exist in the story only when the protagonist is in the room.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Strong secondary characters have their own agendas — sometimes aligned with the protagonist&apos;s, sometimes not. They want things. They pursue those things. Sometimes they pursue them through the protagonist, sometimes around them, sometimes despite them. Their existence doesn&apos;t depend on the protagonist noticing them.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Ask: what does this character want in each scene, independent of what the protagonist wants? If the answer is always &ldquo;to help the protagonist,&rdquo; the character isn&apos;t a person yet.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The character who changes without changing</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Not every secondary character needs an arc. Some of the most powerful are static — they remain exactly who they are throughout the story, and that consistency becomes its own kind of pressure.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>The Shawshank Redemption</em>, Red doesn&apos;t fundamentally change his worldview until nearly the end. His static resignation — &ldquo;hope is dangerous&rdquo; — is the resistance Andy pushes against for the entire film. Red&apos;s consistency is the dramatic foil that makes Andy&apos;s persistence meaningful. Without Red&apos;s refusal to hope, Andy&apos;s hope has no weight.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          A static secondary character who holds a position the protagonist challenges can be more dramatically useful than one who simply mirrors the protagonist&apos;s own journey.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Giving them a life outside the frame</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The quickest way to make a secondary character feel real is to imply a life you never show. A passing reference to a sister the audience never meets. A joke that assumes shared history. A habit or preference that has no narrative purpose but suggests a person with a past.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          This is economy. You can&apos;t give every secondary character a full arc. But you can give them the texture of a full life with one detail — chosen precisely.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Take your protagonist and identify their most significant secondary character. Then answer:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>What does this character want that has nothing to do with the protagonist?</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>What does this character reveal about the protagonist that the protagonist cannot reveal about themselves?</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>What is one detail about this character&apos;s life that never appears on screen?</li>
          </ol>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginTop: '12px' }}>
            If you can answer all three clearly, the character has a life. If you can&apos;t, build it before you write them.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/arguments" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>How to write an argument</p>
            </div>
          </Link>
          <Link href="/learn/plant-payoff" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Plant and payoff</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

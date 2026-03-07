import Link from 'next/link'

export const metadata = {
  title: 'The ghost: what happened before page one — Eve',
}

export default function LessonGhost() {
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
          <span className="badge" style={{ background: '#FDF4FF', color: '#6B21A8', border: '1px solid #E9D5FF' }}>Character</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>3 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The ghost: what happened before page one
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Every compelling character carries a wound from before the story starts. This wound — the ghost — shapes every decision they make, even when they do not know it. Especially when they do not know it.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What the ghost is</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Blake Snyder used the word &ldquo;ghost&rdquo; for this: a past experience that haunts the present. The ghost is not backstory. It is not a trauma dumped into exposition. It is the invisible weight your character carries into every room.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The ghost explains the Want. Your character&apos;s wound is why they pursue what they pursue. It is why they push people away when they need them. It is why they overcorrect, overprotect, and sometimes self-destruct in ways that seem irrational from the outside but are completely logical from inside the wound.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>Key insight:</strong> The Want is the ghost in disguise. Your character wants the thing they believe will finally fix what the ghost broke.
        </div>

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Why the ghost matters more than the backstory</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Backstory is information. The ghost is behavior. You can have rich backstory with no ghost — the character has a detailed past but it does not visibly shape how they move through the story. And you can imply a ghost without a single flashback — just through the way a character flinches at certain words, avoids certain rooms, falls into certain patterns.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The ghost is what makes a character&apos;s flaws feel earned rather than assigned. A character who &ldquo;has trust issues&rdquo; without a ghost is a stock type. A character whose mother left without a word when they were nine, and who now maintains surface warmth while never letting anyone close — that is a person.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>How the ghost drives the story</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The arc of most stories is this: the hero is haunted by the ghost, pursues the Want in an attempt to escape it, fails, and finally confronts the ghost directly. Either they reconcile with it — and grow — or they are destroyed by it.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>Good Will Hunting</em>, Will Hunting&apos;s ghost is childhood abandonment and abuse. His Want is to be seen as intelligent — to be unreachable, self-sufficient, indifferent. He pushes away everyone who tries to get close because that is what the ghost taught him to do. The story ends when he finally lets someone in. Not because the ghost disappears. Because he chooses to act against it.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          You do not need to explain the ghost to your audience. You just need to know it yourself, and write from it.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            For your protagonist, write one sentence that completes this:
          </p>
          <p style={{ fontSize: '14px', color: 'var(--green)', fontFamily: 'var(--font-display)', fontStyle: 'italic', marginBottom: '12px', paddingLeft: '14px', borderLeft: '3px solid var(--green-border)' }}>
            &ldquo;Before this story began, [character] was broken by ___. That is why they spend the story trying to ___.&rdquo;
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            If the two blanks feel disconnected — if the wound does not obviously explain the pursuit — keep digging.
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/want-vs-need" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Want vs. Need</p>
            </div>
          </Link>
          <Link href="/learn/antagonist" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Making a strong antagonist</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
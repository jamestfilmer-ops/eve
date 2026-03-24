import Link from 'next/link'

export const metadata = {
  title: 'The Rewrite: How to Fix What You Have Written | Eve',
  description: 'The first draft is not writing. The first draft is finding out what you are trying to write. The rewrite is where the actual writing happens',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#FEF3E2', color: '#C3D9A8' }}>
              Craft
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            The Rewrite: How to Fix What You Have Written
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            The first draft is not writing. The first draft is finding out what you are trying to write. The rewrite is where the actual writing happens.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Let it sit
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The single most important thing you can do before revising is wait. The longer the better. A week minimum for a short piece, six months minimum for a novel. The reason is that revision requires a different relationship to the material than writing—you need to be able to read what is actually on the page, not what you intended to put there. When the work is fresh, you cannot see what is missing because you supply the missing information from memory. Distance creates the necessary estrangement.
          </p>
        </div>
        <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The diagnostic questions
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Before revising line by line, read the whole piece and ask: What is this actually about? Who is the most interesting character? What is the clearest moment—and why does it work? What is the most confusing moment—and why does it not? Where did you stop caring? These questions locate the structural problems before you fix the sentence-level problems. There is no point polishing prose in a scene that should be cut.
          </p>
        </div>
        <div className="reveal reveal-delay-3" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Cut first
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The first pass of revision should be about what to remove, not what to add. Most first drafts are too long. They contain the warm-up before the scene starts, the explanation after the scene has already made its point, the transitions that are not needed, the backstory that was necessary for the writer but not for the reader. Find the first moment the scene is actually alive and cut everything before it. Find the moment the scene has finished its work and cut everything after it.
          </p>
        </div>
        <div className="reveal reveal-delay-4" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Reading aloud
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Read your work aloud before you consider it finished. The ear catches what the eye misses. The sentence that looked fine on the page reads as awkward when spoken. The dialogue that seemed natural looks stilted when said aloud. The rhythm that seemed right turns out to have a hitch in the third beat. Read slowly. If you stumble over a phrase, rewrite it. If you find yourself speeding through a passage, the prose may be too easy—may be saying less than you think it is.
          </p>
        </div>
        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Cut the best sentence
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The last pass of revision should include a question about every sentence you are especially proud of: does this need to be here? The most beloved sentences are often the most dangerous—they call attention to themselves, they slow down the scene, they are evidence of the writer's presence in the prose. Chekhov cut the first and last paragraphs of everything he wrote, believing the writer took the longest to get started and the longest to know they were done. Find your equivalent of the first and last paragraph.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Key takeaway</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Let it sit before revising. Diagnose structure before fixing sentences. Cut first, add later. Read aloud. Then cut the sentence you are most proud of.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/pacing-rhythm" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: "600", color: "var(--text-mid)", textDecoration: "none" }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Previous</Link>
          <Link href="/learn/show-dont-tell" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: "600", color: "var(--green)", textDecoration: "none" }}>Next<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
        </div>
      </div>
    </div>
  )
}

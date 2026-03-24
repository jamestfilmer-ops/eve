import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'

export const metadata = {
  title: 'Flash Fiction—Writing Stories Under 1000 Words | Eve',
  description: 'How flash fiction works. The single moment, the compression, the ending that carries everything. Writing and publishing stories under 1000 words.',
}

export default function LessonFlashFiction() {
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F5F0FF', color: '#7C3AED' }}>Short Story</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>5 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Flash Fiction: Stories Under 1,000 Words
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            How flash fiction works. The single moment, the compression, the ending that carries everything. Writing and publishing stories under 1000 words.
          </p>
        </div>
      </section>

      {/* Content */}
      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Short Fiction</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>5 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '16px' }}>
          Flash fiction
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          Flash fiction—stories under 1,000 words, sometimes under 500—is not a lesser form than the full short story. It is a different discipline, one that isolates and intensifies the craft problems that longer fiction allows writers to dilute across more pages.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          If a short story is a compression of a novel, flash fiction is a compression of a short story. The same principles apply—one character, one problem, one moment of change—but with no room for setup, backstory, or development that is not also doing something else simultaneously.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What flash demands</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In flash fiction, every sentence must carry at least two things simultaneously—character and atmosphere, action and subtext, present and implication of past. A sentence that carries only one thing is a sentence that cannot afford to exist.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The opening line does the work that a short story's first page does: establishes voice, situation, stakes, and world. If the opening line of your flash piece only introduces the character or only sets the scene, it has not yet done its job.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The ending carries proportionally more weight in flash than in any other form. In a 700-word story, the last 50 words represent more than 7% of the total. Those words recontextualize everything. The reader leaves the story from the ending and the ending is what they carry. Write the ending before the beginning if you need to—knowing where you are going is the only way to make every sentence point toward it.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The iceberg principle at full compression</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Hemingway's iceberg theory—that the dignity of movement comes from what is left out—is not optional in flash fiction. It is the only way flash works. The story you show is the surface. The story the reader infers is the iceberg.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The writer of flash fiction has to know the full story—the history, the context, the before and after—and then show almost none of it. The specific detail that is included creates the impression of the whole. One exact detail is worth ten paragraphs of explanation. "She left her wedding ring on the kitchen counter" tells you a marriage, a decision, and a morning without explaining any of them.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The question to ask about every sentence in flash: what does the reader infer from this that I have not stated? If the sentence only conveys what it explicitly says, cut it or rewrite it so it implies something beyond its surface.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Structure in 700 words</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Flash fiction still requires structure—but structure in flash is not acts and midpoints. It is the movement from one state to another. Something must be different at the end of the story than at the beginning. The change can be small. It can be entirely internal. It can be a change in the reader's understanding rather than in the character. But something must move.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A useful flash structure: enter the story at the moment of maximum pressure. Do not set up context—the context arrives through the action. End at the moment of change, not after it. The reader does not need the aftermath; the aftermath is theirs to construct.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Micro-fiction—stories under 100 words—extends this further. At that length, the story is almost entirely implication. One scene, one image, one sentence that contains a world. These are closer to prose poems than to conventional stories, and the line between the two is productively blurry.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Flash markets worth knowing</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Flash fiction has developed a robust publication ecosystem. Acceptance rates at dedicated flash markets are meaningfully higher than literary fiction journals, and response times are faster—weeks rather than months. They are a genuine entry point.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {[
            { name: 'SmokeLong Quarterly', url: 'https://smokelong.submittable.com/submit', note: 'The flagship flash journal. Under 1,000 words. Read the archive before submitting.' },
            { name: 'Flash Fiction Online', url: 'https://flashfictiononline.com/submissions/', note: 'Under 1,000 words. Pays professional rates. Accepts SF, fantasy, and literary.' },
            { name: 'Fractured Lit', url: 'https://fracturedlit.submittable.com/submit', note: 'Flash and short fiction. Strong aesthetic. Worth reading before you submit.' },
            { name: '100 Word Story', url: 'https://100wordstory.org/submissions/', note: 'Exactly 100 words. The constraint is the point.' },
            { name: 'The Journal of Compressed Creative Arts', url: 'https://www.compressedcreativearts.com/submit', note: 'Flash and micro-fiction. Experimental welcome.' },
          ].map((m) => (
            <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '14px 18px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: 'var(--green)', display: 'block', marginBottom: '3px' }}>{m.name}</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)' }}>{m.note}</span>
            </a>
          ))}
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Flash as training</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Flash fiction is one of the best training disciplines available to writers at any level. The constraint forces clarity of intention: you cannot have a story about two things, a character who feels many ways, or a scene that does more than one job. You have to decide what the story is about and commit to it.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Many serious short story writers write flash regularly not because they publish it but because it disciplines their attention. A flash exercise: take any scene from a longer work and rewrite it as a 300-word story. What you are forced to cut tells you what was not essential. What survives tells you what the scene was actually about.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)' }} className="lesson-nav-grid">
          <Link href="/learn/short-story-craft" style={{ flex: 1, display: 'block', padding: '16px 20px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', textDecoration: 'none' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '6px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Previous</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--text-dark)', fontWeight: '600' }}>Writing short stories</div>
          </Link>
          <Link href="/learn/short-story-markets" style={{ flex: 1, display: 'block', padding: '16px 20px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', textDecoration: 'none', textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '6px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Next</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--text-dark)', fontWeight: '600' }}>Short story markets</div>
          </Link>
        </div>
      </div>
    </div>
    </PaywallBlur>
    </div>
  )
}

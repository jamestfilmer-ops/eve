import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'How to End a Story | Eve',
  description: 'Endings are hard not because you need a brilliant idea but because you need precision. The ending is the last thing in the room after everything else leaves.',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#FEF3E2', color: '#C3D9A8' }}>Craft</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
            <LessonProgress slug="the-ending" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            How to End a Story
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Most writers get stuck at the ending because they&apos;re waiting for something brilliant to arrive. The ending doesn&apos;t need to be brilliant. It needs to be true — the only honest answer to the question your story has been asking.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Your story has been asking a question
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Every story sets up a central question early — will she get out? will they find each other? can he become someone different? — and the ending is where that question gets answered. Not necessarily the way the character hoped, but completely. The answer has to land.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            When an ending feels wrong, it&apos;s usually one of two things: the question was never clearly set up, or the ending dodges the real answer. Find the question your story is actually asking. Then answer it. That&apos;s most of the work.
          </p>
        </div>

        <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Two kinds of endings
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            The character changes, or the character doesn&apos;t. Both are valid. Most mainstream stories end with the character transformed — they got what they needed, even if not what they wanted. Tragedy ends with the character refusing to change until the story destroys them for it.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The Sopranos ends with Tony Soprano unchanged — he had six seasons of chances and took none of them. That&apos;s the point. The Wire ends with the systems unchanged and the individuals ground up inside them. Both are honest endings because the whole story was building toward exactly that. Your ending doesn&apos;t have to be happy. It has to be true to what the story was saying.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>Worth writing down</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            An ending needs to feel inevitable and slightly surprising at the same time. Not telegraphed — earned. The reader shouldn&apos;t see it coming, but once it arrives they shouldn&apos;t be able to imagine anything else.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            End one beat after the climax
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Most writers end too late. The climax lands, then they keep going — wrapping up side plots, showing us what each character is doing six months later, writing an extra scene to make sure we understood the theme. Stop earlier than you think you should.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Chekhov cut the first and last paragraphs of everything he wrote. He believed writers always took too long to start and too long to stop. Apply that to your draft. Find where the story actually ends. It&apos;s usually earlier than the last page you wrote.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The circular ending
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            One of the most satisfying moves in fiction: end where you started, but changed. Same place, same words, same situation — but the story has shifted what it means. The image that opened the story returns at the close, and now it carries everything that happened in between.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            It works because it asks the reader to hold both versions at once — who this person was, who they are now — and feel the distance between them. It only works when the change is real. A circular ending with no actual transformation is just a cheap echo.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The last line
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            The last line is doing more work than any other sentence in the story. It&apos;s the note that lingers. It&apos;s what the reader carries with them when they close the book or leave the theatre.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The best last lines contain something slightly unresolved — not the ending undone, but a small complication in it. If the ending is hopeful, let the last line carry a trace of what it cost. If it&apos;s a loss, let there be one thing that didn&apos;t get destroyed. The last line is not where you summarize the story. It&apos;s where you leave the reader slightly off-balance, in the best possible way.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Before you move on</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Find the question your story is asking. Answer it honestly. End one beat after the climax. Write the last line as the note you want to leave ringing.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/show-dont-tell" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/writing-villains" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}

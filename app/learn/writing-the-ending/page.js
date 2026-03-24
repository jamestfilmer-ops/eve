import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'

export const metadata = {
  title: 'Writing the Ending: How to Finish What You Started | Eve',
  description: "An ending doesn't need to be happy or surprising. It needs to be inevitable — the one true answer to the question the story has been asking. Here's how to find it.",
}

export default function Lesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)', padding: '3px 8px', borderRadius: '4px' }}>Craft</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Writing the Ending
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            How to finish what you started — and why the best endings feel inevitable.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          A good ending doesn't need to be happy. It doesn't need to be surprising. It needs to feel like the only possible way this story could have ended — like everything before it was leading here, and you just didn't know it until now.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          That feeling of inevitability is the goal. When an audience reaches the end of a story and thinks "of course" — not "I predicted it" but "of course, it couldn't have ended any other way" — the ending has done its job.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          The ending answers a question
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Every story asks a central question. Not necessarily explicitly — but it's there. Will he save his daughter? Will she let herself be loved? Will they find out the truth before it destroys them? The ending is the answer to that question. The rest of the story is the asking.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          If you don't know what question your story is asking, you don't know how to end it. This is why so many writers get stuck near the end — not because they've run out of story, but because they never clearly established what the story was trying to resolve.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Go back and find the question. Usually it's introduced near the end of Act One. Once you can state it clearly, you know what the ending has to address.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Two kinds of endings
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Most stories end in one of two ways: the character gets what they want, or they don't. But there's a more useful distinction: does the character change?
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          A positive ending: the character changes in a way that allows them to succeed or accept. They overcome the internal flaw, meet the internal need, and the world reflects that growth. A negative ending: the character fails to change, and the world reflects that failure. A tragedy is a character who could have changed, who had every opportunity to change, and who didn't.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Both kinds can be profound. What doesn't work is a random ending — one that doesn't follow from who the character is, or that resolves the plot without resolving the character's internal journey.
        </p>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px', margin: '28px 0 32px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Endings that don't work</p>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', marginBottom: '10px' }}><strong>The unearned happy ending.</strong> The character gets what they want without changing or paying a real price. Everything works out. Audiences feel cheated because the drama was false.</li>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', marginBottom: '10px' }}><strong>The deus ex machina.</strong> The solution comes from outside — a character we've never seen, a piece of information that wasn't available, luck. The character doesn't solve their own problem.</li>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', marginBottom: '10px' }}><strong>The non-ending.</strong> Things just stop. No question is answered. This is sometimes mistaken for ambiguity, but ambiguity requires the story to have asked a clear question and left the answer genuinely open. Stopping without resolving anything is not ambiguity — it's abandonment.</li>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}><strong>The twist that changes everything.</strong> A late revelation that reframes the entire story. These can work, but only if the earlier story still works when reread with the new information. The twist has to clarify, not just surprise.</li>
          </ul>
        </div>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>How to find your ending</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', marginBottom: '10px' }}>
            Ask: what is the worst thing that could happen to my character? What is the best thing? Now ask: which of these is true to who they are?
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            The ending should feel earned — the natural result of who this character is and what they did. If the ending requires the character to do something out of character, or for the world to suddenly behave differently, the ending isn't right yet.
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          End one beat after the climax
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Most stories end too late. After the climactic moment — the confrontation, the decision, the revelation — there's a tendency to keep going, to show the aftermath, to make sure the audience understands what happened. Usually this is unnecessary. The audience understood. Trust them and stop.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px' }}>
          The last image of a film, the last line of a story — these are what the audience carries with them. Make sure yours is doing something intentional. Not explanatory. Not summarizing. Just the one true final note.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/the-rewrite" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            The rewrite
          </Link>
          <Link href="/learn/the-ending" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            The ending (advanced)
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}

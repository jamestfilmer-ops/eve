import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'

export const metadata = {
  title: 'How to Write Dialogue: The Basics That Actually Matter | Eve',
  description: 'Characters who say exactly what they mean kill scenes. Learn the five fundamentals of dialogue that works: subtext, specificity, rhythm, silence, behavior.'t say what they mean. How to write subtext, rhythm, and voice—five fundamentals every writer needs.',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)', padding: '3px 8px', borderRadius: '4px' }}>Dialogue</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            How to Write Dialogue
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            The basics that actually matter — starting with why characters should almost never say what they mean.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          The most common dialogue mistake is characters who say exactly what they mean. "I'm angry at you." "I love you and I'm scared you don't feel the same." "I'm leaving because you never make me feel like I matter." Real people almost never say these things directly. They say something else instead.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          That gap — between what someone means and what they actually say — is where dialogue lives. When characters say too much, too directly, the scene goes flat. When they say something adjacent to what they mean, and the reader has to do a little work to understand why, the scene crackles.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Dialogue is behavior, not information delivery
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Every line of dialogue is an action. A character says something to achieve something — to deflect, to wound, to charm, to delay, to test, to confess sideways. Ask for every line: what is this person trying to do right now? Not what are they saying — what are they doing?
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          When you know the action behind the line, you can usually find a better line. "I'm not hungry" when a character is too proud to admit they need help is more interesting than "I don't need your charity." Both communicate the same thing. But one is what people actually say when pride is strangling them.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Five things that make dialogue work
        </h2>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px', margin: '0 0 32px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>1. Characters who don't listen to each other</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Real conversations aren't tennis matches where each person responds to what the other said. People talk past each other, change the subject, answer the question they wished they'd been asked. Let your characters do this.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>2. Specificity</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Generic dialogue sounds like anyone. Specific dialogue sounds like this person. "You always do this" is generic. "You did it at Mom's birthday, you did it at Tom's wedding, and you're doing it right now" is specific. Specific lines reveal character without telling us anything directly.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>3. What isn't said</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>The most powerful moment in a conversation is often the one where a character almost says something important and then doesn't. The beat where they open their mouth and close it again. The pause before an answer that takes too long. Write around the thing.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>4. Different voices</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Cover the character names and read the dialogue aloud. Can you tell who's speaking? If not, the voices aren't differentiated. Vocabulary, rhythm, sentence length, what someone notices, what they don't — all of it characterizes. Give each person their own verbal fingerprint.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>5. Short. Almost always short.</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Long speeches kill scenes. People don't monologue in real life — they get interrupted, they trail off, they change their mind mid-sentence. When you find a long speech in your draft, ask: can this be broken up? Can it be cut in half? Often the speech can become one sharp sentence and the rest can be cut entirely.</p>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Read it out loud
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          This isn't optional advice. It's the main diagnostic tool for dialogue. If you can't speak the line naturally, the character can't either. Awkward rhythms, sentences that are hard to say, words that don't fit the character's register — all of it becomes immediately obvious when spoken.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Even better: read it with someone else. Alternate lines. The dynamic between two people reading a scene reveals whether the exchange feels like a real conversation or a transcript of two people taking turns making points.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>The oblique test</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            Take the most direct line of dialogue in your scene — the line where a character says exactly what they mean — and rewrite it so they say something else instead. Something that conveys the same feeling but from the side. Often this version is better. Try it and see.
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px', marginTop: '28px' }}>
          Good dialogue takes practice. The goal is to build an ear — for how people actually talk, for the difference between a line that sounds true and a line that sounds written. That ear develops slowly, by reading great dialogue, writing bad dialogue, and listening more carefully to the conversations around you.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/dialogue-subtext" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Dialogue and subtext
          </Link>
          <Link href="/learn/subtext" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            Subtext
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}

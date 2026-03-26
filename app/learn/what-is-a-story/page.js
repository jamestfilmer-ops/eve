import Link from 'next/link'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'What Is a Story? The Simplest Honest Answer | Eve',
  description: 'Before structure, before character, before any of it — this is what a story actually is. The shortest explanation that actually holds up.',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)', padding: '3px 8px', borderRadius: '4px' }}>
              Start Here
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>5 min</span>
                      <LessonProgress slug="what-is-a-story" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            What Is a Story?
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            Before structure, before character, before any of it — the shortest honest answer.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          A story is a person who wants something, and the difficulty of getting it.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          That's it. Every story you've ever loved — every film that wrecked you, every book you couldn't put down — reduces to that sentence. A person. A want. Something in the way.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The want doesn't have to be big. It doesn't have to be noble. Someone trying to ask a coworker to lunch is a story. Someone trying to apologize to their kid before it's too late is a story. Someone trying to leave a town that keeps pulling them back is a story. The size of the want doesn't determine whether something works — the honesty of it does.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Why does this matter?
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Because most first drafts fail at this level. Not at the sentence level. Not at the structure level. At the wanting level. The character is going through the motions. Things happen to them. But they aren't <em>driving</em> — they aren't in pursuit of anything that costs them anything.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          When someone asks "why should I care about this character?" — this is what they're asking. They can't find what the character wants. Or what the character wants is too vague. Or the character gets it too easily, so there's no friction, no story.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>The test</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            For whatever you're working on, finish these sentences: <em>"My character wants ___. What stands in the way is ___."</em> If you can't finish both clearly, you don't have a story yet. You have a situation. That's okay — but knowing the difference is how you fix it.
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          The want has to cost something
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          There's a second part that most definitions leave out: the thing standing in the way has to actually threaten something the character cares about. If your character wants to get across town and the traffic is bad — that's inconvenience, not story. If your character needs to get across town before her father dies and the traffic is bad — now the traffic means something.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The obstacle doesn't create the stakes. The <em>cost of failure</em> does. What does the character lose if they don't get what they want? When you can answer that clearly, you have stakes. Stakes are what make the reader stay.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Internal and external wants
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The best stories have two layers of wanting. The <strong>external want</strong> is the plot — get the job, win the case, survive the night, reach the summit. The <strong>internal want</strong> is what the character actually needs at a deeper level — to forgive themselves, to accept that they can't control everything, to stop hiding from the people who love them.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The external want drives the plot. The internal want is what the story is actually about. In <em>Whiplash</em>, Fletcher is the external obstacle — but the story is about whether Andrew will trade his humanity for greatness. In <em>Toy Story</em>, Woody wants to get home (external). But the story is about whether he can stop defining his worth by being Andy's favorite (internal).
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px' }}>
          You don't have to nail both on your first draft. But if you're wondering why your story feels thin — this is usually why. The external plot is there, but there's nothing underneath it.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/how-to-start" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            How to start
          </Link>
          <Link href="/learn/want-vs-need" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            Want vs. Need
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

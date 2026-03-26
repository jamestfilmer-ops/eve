import Link from 'next/link'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Character Before Plot: Why It Has to Come First | Eve',
  description: 'Plot is what happens. Character is why it matters. Get this order wrong and nothing works — no matter how clever the story is.',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
                      <LessonProgress slug="character-before-plot" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Character Before Plot
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            Plot is what happens. Character is why it matters. Get this order wrong and nothing works.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          Most beginning writers think about plot first. What happens? What's the twist? How does it end? That's the wrong starting place — and it's why so many first drafts feel like they're going through the motions.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Plot is furniture. It holds things up and gives the story shape. But character is the person sitting in the room. Without them, all you have is a nicely arranged set.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          When a story doesn't work — when you read a draft and think "I don't care what happens" — it's almost never a plot problem. It's a character problem. You're not invested in the person, so the things happening to them don't land.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          What "character first" actually means
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          It doesn't mean you have to write a 20-page character backstory before you start. It means you need to know three things before plot matters:
        </p>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px', margin: '28px 0' }}>
          <ol style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', marginBottom: '14px' }}>
              <strong>What do they want?</strong> — The concrete, external thing they're after. The goal. This drives the plot.
            </li>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', marginBottom: '14px' }}>
              <strong>What do they need?</strong> — The deeper thing they're missing. Often something they don't know they need, or are actively avoiding. This is what the story is really about.
            </li>
            <li style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
              <strong>What are they afraid of?</strong> — Fear is the engine. It's what creates resistance, bad choices, interesting behavior. Characters who aren't afraid of anything aren't interesting.
            </li>
          </ol>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Once you know those three things, plot starts to write itself. Because plot is just: your character pursues what they want, their fear keeps getting in the way, and eventually they're forced to confront what they actually need.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          The problem with plot-first thinking
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          When you start with plot, characters tend to become servants of the story. They do things because the plot requires it, not because of who they are. Readers feel this. They can't articulate it, but they feel it — the character making a choice that doesn't ring true, the scene that exists to move pieces around rather than reveal anything.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The goal is for plot to feel like the <em>inevitable consequence</em> of who your character is. When Walter White builds a meth empire, it doesn't feel random — it feels like the exact thing that particular ego, fear, and frustration would produce. The plot grows out of him. That's character-first.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>Try this</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            Take your main character. Ask: what's the worst version of themselves they could become? What fear, unchecked, would turn them into that person? That fear — and the story of whether it wins or loses — is your story.
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Plot serves character, not the other way around
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Every plot event should do one of two things: reveal who the character is, or force the character to change. If a scene does neither of those things, it probably doesn't need to be there — no matter how exciting it is on its own.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The car chase is great. But if it doesn't tell us something new about the person in the car — their decision under pressure, what they're willing to do, what they're still holding onto — it's just a car chase. Entertaining, maybe. Forgettable, probably.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px' }}>
          The stories that last are the ones where you can't separate the character from the plot. They're the same thing. <em>This</em> person, facing <em>this</em> situation — and no other combination would produce the same story.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/what-is-a-story" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            What is a story?
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

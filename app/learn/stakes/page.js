import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Stakes: Why the Reader Has to Care What Happens | Eve',
  description: 'Stakes are not explosions or death threats. They are what the character loses if they fail. How to build personal, emotional stakes that make readers care.',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)', padding: '3px 8px', borderRadius: '4px' }}>Structure</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
                      <LessonProgress slug="stakes" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Stakes
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            Why the reader has to care what happens — and how to make them.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          Stakes are not explosions. They are not death threats or ticking bombs or the fate of the world. Stakes are simply: what does the character lose if they fail?
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          That loss can be enormous — a life, a family, a future. Or it can be small — a relationship, a job, a chance to tell someone the truth before it is too late. Size doesn't determine whether stakes work. Clarity does. The reader needs to understand exactly what is on the line and why it matters to this specific person.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Most stories that feel flat have stakes that are vague. Something bad might happen. Things might go wrong. This isn't a stake — it's a mood. A stake is specific: if she doesn't make this call before midnight, her father goes to prison. If he can't fix the engine before the storm hits, everyone on the boat dies. If she doesn't say this to her daughter today, she may never get another chance.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>Three kinds of stakes</h2>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px', margin: '0 0 32px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>Physical stakes</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Life, safety, health, freedom. The clearest kind. Survival stories run almost entirely on these. They're effective but not inherently more powerful than the other kinds.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>Emotional stakes</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Love, connection, belonging, self-respect. The most durable kind. An audience will sit through almost anything if they're invested in whether two people end up together, or whether a character finally forgives themselves.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>Professional/social stakes</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Career, reputation, status, legacy. Often underrated. Legal dramas and workplace stories run on these entirely. They work because we recognize the fear of professional failure and public humiliation as deeply real.</p>
          </div>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The best stories layer all three. In <em>Spotlight</em>, the reporters are chasing a story that could expose institutional child abuse (physical and moral stakes for victims), while also risking their careers and the paper's existence (professional stakes), while wrestling with their own complicity in not catching it sooner (emotional stakes). No single layer would sustain a two-hour film. Combined, they become overwhelming.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>Stakes have to be personal</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          World-ending stakes only work if we care about the specific person who has to stop the world from ending. Audiences did not cry at the end of <em>Toy Story 3</em> because the toys might get burned. They cried because Woody and Buzz had been Andy's companions for his entire childhood, and now he was leaving, and that specific loss was the loss of a particular childhood and a particular kind of love that does not come back.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The stakes have to grow out of who the character is and what they specifically cannot afford to lose. A detective who has already lost everything has different stakes than a detective with a family they're trying to protect. Same plot pressure, completely different emotional weight.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>The stakes question</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            For every major scene, ask: what does the character stand to lose right now? Not eventually — right now, in this scene. If the answer is "nothing in particular," the scene has no stakes. Either raise them or cut it.
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>Raising stakes without escalation</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Escalation — making things bigger, louder, more explosive — is the lazy version of raising stakes. You can raise stakes by making the cost of failure clearer, not larger. A small moment can have enormous stakes if you've done the work to make the reader understand what it would mean for this character to fail here.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px' }}>
          The conversation where a father finally tells his son he's proud of him — that can have higher stakes than any car chase, if we've spent two hours understanding why that sentence has been unsayable for thirty years.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/what-is-a-story" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            What is a story?
          </Link>
          <Link href="/learn/tension-without-action" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            Tension without action
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}

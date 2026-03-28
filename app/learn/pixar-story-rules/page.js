import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: "Pixar's Story Rules | Eve",
  description: "In 2011, a Pixar story artist tweeted 22 rules that had been drilled into her over years. A handful of them are worth tattooing on your hand.",
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>Essentials</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
            <LessonProgress slug="pixar-story-rules" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Pixar&apos;s Story Rules
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            In 2011 a Pixar story artist named Emma Coats tweeted 22 rules that had been drilled into her over years in the story department. They went everywhere. Not all 22 hold up equally — but the ones that do are worth reading slowly.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            You admire the trying, not the succeeding
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Rule 1 says: you admire a character for trying more than for their successes. Think about why that&apos;s true. Competence doesn&apos;t make us care — effort does, especially effort that fails. The character who keeps going anyway, who tries again after it falls apart, is the one we attach to.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Wall-E can&apos;t speak. He has one expression. He&apos;s been alone for 700 years sorting garbage. We love him within five minutes. Not because he&apos;s impressive — because he keeps trying to connect with something in a world that has nothing left to connect with.
          </p>
        </div>

        <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The story spine
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            This is the most practical tool in the list. Fill in these blanks and you have a story:
          </p>
          <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '18px 20px', marginBottom: '14px', border: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '2', color: 'var(--text-dark)', margin: 0 }}>
              Once upon a time ___.<br/>
              Every day ___.<br/>
              One day ___.<br/>
              Because of that ___.<br/>
              Because of that ___.<br/>
              Until finally ___.<br/>
              Ever since then ___.
            </p>
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            &ldquo;One day&rdquo; is your inciting incident. &ldquo;Because of that, because of that&rdquo; — repeated — is your plot. Each consequence leads causally to the next. That&apos;s the whole trick. Stories fall apart when scenes happen rather than cause each other. This structure forces causality.
          </p>
        </div>

        <div className="reveal reveal-delay-3" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Figure out your ending before you figure out your middle
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            This is rule 7, and it&apos;s the one most writers argue with. You don&apos;t have to know every beat before you start — but Pixar is saying: know where you&apos;re going. Because if you don&apos;t, you can&apos;t plant anything. You can&apos;t foreshadow. You can&apos;t build toward a payoff that doesn&apos;t exist yet.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Even if you&apos;re a pantser who discovers the story as you write — write a bad ending first. A placeholder. Something to write toward. You can change it later. A wrong destination is still more useful than no destination at all.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>The try-fail cycle</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Give your character a goal. Then make them fail. Then make them fail differently. The sequence of try-fail-try again is how character gets revealed under pressure. It&apos;s also how the audience stays invested — each failure raises the question of whether they&apos;ll ever break through.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Your first idea is probably not your best one
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Rule 11: putting it on paper lets you start fixing it. If it stays in your head, perfect, you&apos;ll never share it with anyone. But the surrounding rule is about your first idea being the obvious one — the one anyone would think of. Push past it. What&apos;s the second idea? The third?
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Up starts with an old man who lost his wife and turns his house into a balloon-powered aircraft to fulfill a childhood promise. That is not someone&apos;s first idea. That is someone&apos;s twelfth idea. The first idea was probably &ldquo;old man goes on an adventure.&rdquo; The work is in the narrowing.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Before you move on</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Try the story spine on your current project. Fill in all seven blanks. If you can&apos;t fill in &ldquo;because of that&rdquo; twice — you don&apos;t have causality yet. Start there.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/leonard-on-craft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/what-a-scene-does" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}

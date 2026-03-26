import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Story Structure: What It Is and Why You Need It | Eve',
  description: "Structure is not a formula. It's a description of how stories work — and understanding it gives you the ability to diagnose and fix what isn't working in your own.",
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
                      <LessonProgress slug="structure-basics" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Story Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            What it actually is, why it matters, and how to use it without letting it use you.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          Structure gets a bad reputation because people confuse it with formula. A formula tells you what to write. Structure describes what tends to happen in stories that work — and understanding the description gives you something much more valuable than a template.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Every story has a structure. Even the ones that feel formless. Even experimental fiction that deliberately breaks rules is in a structural conversation with those rules. The question isn't whether to have structure — it's whether yours is working.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          The simplest version
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Every story — every one, no matter how complex — has three parts: something changes that sets the story in motion, a long middle where the character struggles with the consequences, and an ending where the central question gets answered one way or another.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          That's it. Beginning, middle, end — except that description is too vague to be useful. What actually matters is understanding what each section needs to accomplish and why.
        </p>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px', margin: '0 0 32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>Act One: Set up the world and the problem</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Introduce the character in their normal world. Then something happens that disrupts that world — an inciting incident that forces a choice or creates a problem the character can't ignore. By the end of Act One, the central question of the story should be clear: will she get the job? Will he escape? Will they find each other? Roughly the first 25% of the story.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginBottom: '24px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>Act Two: Complicate everything</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>The character pursues their goal and things keep getting harder. Every apparent solution creates new problems. The character's flaws and fears keep sabotaging them. Somewhere in the middle (the midpoint), something shifts that changes the nature of the pursuit. Near the end of Act Two, everything falls apart — the "all is lost" moment where it seems like the goal is definitively out of reach. Roughly the middle 50%.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>Act Three: Answer the question</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>The character finds a way forward — usually by applying what they've learned or by confronting what they've been avoiding. The central question gets answered, for better or worse. The story ends. The last 25%.</p>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Why Act Two keeps failing
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Most structural problems live in Act Two. It's the longest section, and the hardest to sustain. A common failure: the character keeps failing at the same thing over and over, without escalation or change. That's not structure — that's repetition.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          A functioning Act Two has two things: escalating pressure (each obstacle is harder than the last), and character change (the character is not the same person at the end of Act Two as they were at the beginning). The midpoint is usually where the character's approach shifts — they stop reacting and start acting, or they commit to something they'd been avoiding.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>Structure as diagnosis</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            When a story feels wrong but you can't identify why, structure is the first place to look. Ask: Is there a clear inciting incident? Does Act One set up the central question? Does Act Two escalate? Is there an "all is lost" moment? Does the ending actually answer the question the story raised? One missing piece is usually the culprit.
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Structure is not a cage
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Knowing structure doesn't mean every story has to hit the same beats in the same order. It means you understand what the beats are doing, which gives you the ability to subvert them deliberately. You can't break rules effectively until you know why the rules exist.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px' }}>
          The most formally unconventional films — <em>Memento</em>, <em>Pulp Fiction</em>, <em>Dunkirk</em> — are made by directors who understand three-act structure completely. They're not ignoring it. They're playing with it. That's only possible if you know what you're playing with.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/what-a-scene-does" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            What a scene does
          </Link>
          <Link href="/learn/act-breaks" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            Act breaks
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}

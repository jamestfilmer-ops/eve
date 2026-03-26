import Link from 'next/link'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Finding Your Story: Where Ideas Actually Come From | Eve',
  description: 'Where ideas actually come from and how to find yours. Paying attention differently, following obsession, and building the habit of noticing story fragments.',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>Start Here</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>6 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
                      <LessonProgress slug="finding-your-story" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Finding Your Story: Where Ideas Actually Come From
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            You do not need a better idea. You probably already have one&mdash;you just have not learned to recognize it yet. That is what this lesson is about.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Ideas do not arrive whole
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            The question &ldquo;where do you get your ideas?&rdquo; is hard to answer honestly because it assumes ideas arrive as complete packages&mdash;a story, a character, a plot. They almost never do. What actually arrives is smaller and stranger: a feeling you cannot shake, an image that surfaces at odd moments, a question you cannot stop turning over, something someone said that did not add up.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The writer&apos;s job is not to wait for a complete idea. It is to develop the habit of noticing these fragments&mdash;and trusting that they are enough to start with. You do not need more than a fragment. You need to learn to take it seriously.
          </p>
        </div>

        <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Specificity is where the feeling lives
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            Writers who generate strong material consistently are almost always close, slow observers of specific things. Not &ldquo;grief is universal&rdquo; but the particular way a particular person went quiet at a particular moment. Not &ldquo;cities are lonely&rdquo; but the exact quality of light in a specific kitchen at six in the morning.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Specificity is not just a stylistic choice. It is where emotional truth actually lives. You cannot manufacture the specific detail from imagination alone&mdash;you have to observe it. Which means the most important writing practice is not always at a desk. Sometimes it is just paying closer attention to what is already in front of you.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>Something to try today</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Write down one thing you noticed this week that you have not been able to stop thinking about. It does not have to be dramatic. It just has to be true and specific. That is a story fragment. Keep it somewhere.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Start with a question you genuinely cannot answer
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            The strongest stories often begin not with a character or a plot but with a question the writer is actually trying to work out. Not a rhetorical question, and not one with an obvious answer&mdash;a real one that keeps you up at night. What would you do if someone you loved asked you to do something you believed was wrong? What does it feel like to realize you have become someone you would not have recognized at twenty?
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            These questions generate story because the writer is genuinely trying to find an answer. The reader can feel that. A story written to explore a real question has a different quality than a story written to deliver a conclusion you already had.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Follow what you cannot leave alone
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            The most reliable source of good material is what you are already obsessed with&mdash;not what you think readers will find interesting, not what seems commercially viable, but the thing you keep returning to without being able to explain why. Stephen King writes horror because he is genuinely frightened by the things in his books. Toni Morrison returned to the trauma of slavery because it was the unresolved truth she needed to examine. The obsession is the signal.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            You already have an obsession. Most writers know what it is and spend a lot of energy trying to write something else instead, because the obsession feels too personal, too small, too strange. Write the strange thing. The personal thing is always more universal than it feels from the inside.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Keep a file of fragments
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            Keep somewhere&mdash;a notebook, a phone note, a folder&mdash;where you collect fragments as they arrive. Images. Lines of dialogue that came to you on a walk. A situation you witnessed that does not make sense yet. A feeling you cannot name.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Do not try to develop each fragment immediately. Let them accumulate. Come back to the file from time to time and read through it. When two fragments connect that did not seem related, or when something dormant for months suddenly opens up&mdash;that is your story announcing itself. You will recognize it when it happens.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Before you move on</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            You do not need a better idea. Notice what you cannot stop thinking about. Write the question you cannot answer. Follow the obsession. Keep a file. That is the whole practice.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/fear-and-writing" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/vonnegut-craft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

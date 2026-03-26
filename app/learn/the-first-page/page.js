import Link from 'next/link'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'The First Page: What Your Opening Actually Has to Do | Eve',
  description: "Your opening page doesn't need a hook. It needs a world. Here's what the first page is actually for — and what kills most of them.",
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>6 min</span>
                      <LessonProgress slug="the-first-page" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            The First Page
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            What your opening actually has to do — and what kills most of them.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px', fontFamily: 'var(--font-ui)' }}>
          You've been told you need a hook. An opening that grabs. Something that makes the reader keep going. That advice isn't wrong — but it's so vague it usually leads writers in the wrong direction.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Most "hooks" that writers create are explosions in the first paragraph that have nothing to do with the actual story. They grab attention and then immediately lose it because the world underneath them isn't real yet.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The first page has one real job: make the reader believe the world exists. Everything else follows from that.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          What the first page is actually doing
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          On the first page, the reader is deciding three things simultaneously: Do I believe this world? Do I want to spend time with this person? Does this writer know what they're doing?
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Notice that "is this exciting?" isn't on the list. Excitement comes from stakes, and stakes come from caring, and caring comes from believing in the world and the person. You can't shortcut to excitement. You have to earn it.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The best opening pages feel like you've dropped into a world that has been going on long before you arrived. You're not being introduced to it. You're catching it in the middle of itself.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          The five things that kill first pages
        </h2>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px', margin: '0 0 32px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>1. Weather</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Opening with weather is the cliché it is for a reason — it signals that the writer doesn't know where to start. Skip the atmospheric stage-setting. Start with a person doing something.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>2. Backstory</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>The reader doesn't care about where the character came from yet. They care about what's happening right now. Backstory is earned, not given. Save it.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>3. Dreams and waking up</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Starting with a character waking up or dreaming is so overused it's become a signal of amateur writing. The reader needs to trust that what they're reading is real. Dreams undercut that immediately.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>4. World-building dumps</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>In genre fiction especially: don't front-load the rules of your world. Introduce context as it becomes relevant. The reader doesn't need a manual — they need a door in.</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>5. Starting too early</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>Most stories start two scenes before they should. Where does the story actually begin? Usually later than you think. The inciting incident — the thing that sets the story in motion — should arrive within the first 10-15% of a screenplay, earlier in short fiction.</p>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          What works instead
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Start in the middle of something. A conversation already in progress. A decision being made. A moment of tension that exists between people. You're not setting up the story — you're already in it.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          The opening of <em>Chinatown</em> is a man looking at photos of a woman with another man. We don't know who anyone is. We don't know what the job is. But we're in a world — office, detective, client, photographs, devastation — and we believe it completely. Everything else builds from there.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px', margin: '36px 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>The question to ask</p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-dark)', margin: 0 }}>
            Read your first page and ask: if I removed everything except this page, would someone believe this world exists? Would they want to know what happens to this person? If the answer is no — rewrite. The entire rest of the story depends on getting this right.
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '44px', marginTop: '28px' }}>
          Your first page will probably be the last thing you actually get right. That's normal. Most writers rewrite their openings after finishing the first draft — because you don't know what the story is until you've written it. Start somewhere, finish the draft, then come back and write the opening it deserves.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/learn/finding-your-story" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Finding your story
          </Link>
          <Link href="/learn/what-a-scene-does" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            What a scene does
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

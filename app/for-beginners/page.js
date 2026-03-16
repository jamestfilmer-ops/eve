import Link from 'next/link'

export const metadata = {
  title: "How to Start Writing  -- A Guide for Beginners | Eve",
  description: "Everything a beginning writer needs to know before they start. How to find story ideas, how to get through a first draft, what the masters say about fear and finishing  -- distilled into a practical guide for writers at the start of the journey.",
  keywords: "how to start writing, beginner writing guide, how to write a story for beginners, first draft advice, writing tips beginners, how to find story ideas, Stephen King writing advice, overcome writer's block, how to finish a story",
  openGraph: {
    title: "How to Start Writing  -- A Beginner's Guide",
    description: "What the masters say, what the research shows, and what actually helps. For writers who are just starting out.",
    url: "https://eve-screenwriting.vercel.app/for-beginners",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/for-beginners",
  },
}

const truths = [
  {
    number: "01",
    title: "You do not need a great idea to start",
    body: "Every working writer has a hundred ideas they abandoned for every one they developed. The quality of the initial idea matters far less than your ability to develop it. Start with any idea that genuinely interests you  -- not the idea you think sounds impressive, but the one you actually want to spend time with. The story will reveal itself through the writing.",
  },
  {
    number: "02",
    title: "The first draft is supposed to be bad",
    body: "Anne Lamott calls it the shitty first draft. Stephen King calls it writing with the door closed. Every professional writer who has ever spoken honestly about their process describes the same thing: a first draft that is worse than they expected, full of wrong turns and weak scenes. This is not a sign that you are a bad writer. It is the normal experience of writing a first draft. The draft is not the story  -- it is the material from which the story is made.",
  },
  {
    number: "03",
    title: "Finishing matters more than quality",
    body: "A finished bad story is more valuable than an abandoned good one. Finishing a draft teaches you things that cannot be learned any other way: that you can recover from bad scenes, that the ending changes the meaning of the beginning, that the story you set out to write is never exactly the story you write. Finish something. Then finish something else. Quality comes from the accumulation of finished things.",
  },
  {
    number: "04",
    title: "Fear produces safe writing, and safe writing is boring",
    body: "King says fear is at the root of most bad writing. Writers are afraid their story is too strange, too dark, too personal, or not good enough. These fears produce writing that hedges and explains and avoids the scenes that are hardest to write. The scenes you most want to protect your characters from are usually the scenes that most need to be written.",
  },
  {
    number: "05",
    title: "Every character must want something",
    body: "Vonnegut's rule: every character should want something, even if it is only a glass of water. Want creates action. Action creates conflict. Conflict creates story. A character who does not want anything cannot drive a scene. Begin every scene by asking: what does each person here want right now? The answer determines what happens next.",
  },
  {
    number: "06",
    title: "Reading is half the work",
    body: "King reads 70 to 80 books a year. He does not do this to study craft  -- he does it because he loves to read. The effect is the same: you cannot hear language that you have not encountered. You cannot feel the rhythm of a good sentence without having read thousands of good sentences. Read widely, read outside your comfort zone, and read as a reader first  -- let the student come second.",
  },
]

const firstSteps = [
  {
    step: "1",
    title: "Pick the smallest possible story",
    desc: "Do not begin with the epic trilogy. Begin with a single scene. One character who wants something and cannot have it. One moment of conflict or decision. A story that can be finished in a week will teach you more than an unfinished novel you worked on for a year.",
    link: "/learn/how-to-start",
    linkLabel: "Read: How to start",
  },
  {
    step: "2",
    title: "Use the story spine",
    desc: "Once upon a time there was ___. Every day, ___. One day ___. Because of that, ___. Because of that, ___. Until finally ___. If you can fill in all six blanks in a way that makes causal sense, you have a story. If you cannot, you have a premise  -- which can become a story once you find the causal chain.",
    link: "/learn/pixar-story-rules",
    linkLabel: "Read: Pixar on story",
  },
  {
    step: "3",
    title: "Know what your character wants and cannot have",
    desc: "This is the engine of every story. Your protagonist must want something badly enough to act, and there must be a reason they cannot simply have it. The gap between want and obstacle is where the story lives. Everything else follows from this.",
    link: "/learn/want-vs-need",
    linkLabel: "Read: Want vs. need",
  },
  {
    step: "4",
    title: "Write the scene, not the summary",
    desc: "Beginning writers often summarize events that should be scenes. A scene happens in real time, with dialogue and action, with something changing from beginning to end. A summary tells you what happened. A scene makes you feel it. Write scenes.",
    link: "/learn/what-a-scene-does",
    linkLabel: "Read: What a scene does",
  },
  {
    step: "5",
    title: "Finish the draft before you fix it",
    desc: "When your inner critic says the scene is wrong, bracket it with [FIX THIS] and keep going. The goal of the first draft is to reach the end. Every revision note is a gift to your future self  -- but stopping mid-draft to revise is one of the most reliable ways to never finish.",
    link: "/learn/the-rewrite",
    linkLabel: "Read: The rewrite",
  },
]

const masterQuotes = [
  {
    quote: "The scariest moment is always just before you start. After that, things can only get better.",
    person: "Stephen King",
    source: "On Writing",
    link: "/learn/king-on-writing",
  },
  {
    quote: "Every character should want something, even if it is only a glass of water.",
    person: "Kurt Vonnegut",
    source: "Bagombo Snuff Box",
    link: "/learn/vonnegut-craft",
  },
  {
    quote: "If it sounds like writing, I rewrite it.",
    person: "Elmore Leonard",
    source: "10 Rules of Writing",
    link: "/learn/leonard-on-craft",
  },
  {
    quote: "You admire a character more for trying than for their successes.",
    person: "Emma Coats",
    source: "Pixar Story Rules",
    link: "/learn/pixar-story-rules",
  },
  {
    quote: "Good fiction always begins with story and progresses to theme; it almost never begins with theme and progresses to story.",
    person: "Stephen King",
    source: "On Writing",
    link: "/learn/king-on-writing",
  },
  {
    quote: "Every sentence must do one of two things  -- reveal character or advance the action.",
    person: "Kurt Vonnegut",
    source: "Bagombo Snuff Box",
    link: "/learn/vonnegut-craft",
  },
]

const beginnerLessons = [
  { slug: 'how-to-start', title: 'How to start', time: '7 min' },
  { slug: 'fear-and-writing', title: 'Fear and writing', time: '6 min' },
  { slug: 'finding-your-story', title: 'Finding your story', time: '6 min' },
  { slug: 'vonnegut-craft', title: 'Vonnegut on craft', time: '6 min' },
  { slug: 'king-on-writing', title: 'King on writing', time: '7 min' },
  { slug: 'what-a-scene-does', title: 'What a scene does', time: '6 min' },
  { slug: 'want-vs-need', title: 'Want vs. need', time: '7 min' },
  { slug: 'the-lie', title: 'The lie your character believes', time: '4 min' },
  { slug: 'dialogue-subtext', title: 'Dialogue and subtext', time: '7 min' },
  { slug: 'the-rewrite', title: 'The rewrite', time: '6 min' },
]

export default function ForBeginners() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '88px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '5px 14px', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Start Here</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '24px' }}>
            How to start writing.<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>What nobody tells you first.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.72)', maxWidth: '560px', margin: '0 auto 36px' }}>
            Every writer starts somewhere. This is where Eve starts you  -- with the things that actually matter before anything else: finishing, fear, story, and the wisdom of the writers who figured it out before you.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/learn/how-to-start" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Start the first lesson
            </Link>
            <Link href="/auth" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Begin your story  -- free
            </Link>
          </div>
        </div>
      </section>

      {/* Six truths */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '72px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Six things every beginning writer needs to know
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-soft)', lineHeight: '1.6', maxWidth: '560px', marginBottom: '40px' }}>
          These are not platitudes. Each one is grounded in what professional writers  -- from King to Vonnegut to the Pixar story team  -- have said about the craft from the inside.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '16px' }}>
          {truths.map(t => (
            <div key={t.number} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px 28px 24px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '12px' }}>{t.number}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: '1.3' }}>{t.title}</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75' }}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First five steps */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '72px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Your first five steps
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-soft)', lineHeight: '1.6', maxWidth: '560px', marginBottom: '40px' }}>
          Not a complete education  -- a way in. Five things you can do right now that will move you from the blank page to a story in progress.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
          {firstSteps.map((step, i) => (
            <div key={step.step} style={{ background: '#fff', padding: '24px 28px', borderBottom: i < firstSteps.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--green-pale)', border: '1px solid var(--green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: 'var(--green)' }}>{step.step}</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '10px' }}>{step.desc}</p>
                <Link href={step.link} style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {step.linkLabel}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Master quotes */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '72px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
          What the masters say
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-soft)', lineHeight: '1.6', maxWidth: '560px', marginBottom: '40px' }}>
          The condensed wisdom. Each quote links to a full lesson that unpacks the idea in depth.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '14px' }}>
          {masterQuotes.map((q, i) => (
            <Link key={i} href={q.link} style={{ display: 'block', textDecoration: 'none', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '22px 24px', transition: 'border-color 0.2s' }}
              onMouseEnter={undefined} onMouseLeave={undefined}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.65', marginBottom: '14px', fontStyle: 'italic' }}>
                "{q.quote}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)' }}>{q.person}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-soft)', marginLeft: '8px' }}>{q.source}</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Beginner lesson list */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '72px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Your beginner reading list
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-soft)', lineHeight: '1.6', maxWidth: '560px', marginBottom: '32px' }}>
          Ten lessons, in a recommended order. Read them once, then go write something.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
          {beginnerLessons.map((l, i) => (
            <Link key={l.slug} href={`/learn/${l.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 16px', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)', minWidth: '20px' }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '500', color: 'var(--text-dark)', display: 'block', lineHeight: '1.4' }}>{l.title}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{l.time} read</span>
              </div>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="var(--text-soft)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green)', margin: '72px 0 0', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>
            The best time to start was yesterday.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.75', marginBottom: '32px' }}>
            Eve gives you a workspace built around the same frameworks the masters use  -- free, without AI, without shortcuts. Start your first project today.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none' }}>
            Start writing  -- free
          </Link>
        </div>
      </section>

    </div>
  )
}

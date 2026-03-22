import Link from 'next/link'

export const metadata = {
  title: 'About Eve —The Story Behind the Tool',
  description: 'Eve is a screenwriting craft platform built for writers who believe structure serves the work. No AI. No shortcuts. Just the fundamentals that professionals have used for decades.',
  openGraph: {
    title: 'About Eve —The Story Behind the Tool',
    description: 'Eve is a screenwriting craft platform built for writers who believe structure serves the work. No AI. No shortcuts.',
    url: 'https://eve-screenwriting.vercel.app/about',
  },
}

const tracks = [
  {
    level: 'New to screenwriting',
    color: '#589D62',
    bg: '#C6DC93',
    border: '#B0D2BE',
    headline: 'Start with the fundamentals',
    description: 'Every professional writer learned the same foundations. Three things before anything else.',
    steps: [
      { label: 'What a scene actually does', href: '/learn/what-a-scene-does', note: '6 min —the most important thing to understand first' },
      { label: 'Want vs. Need', href: '/learn/want-vs-need', note: '7 min —the engine of every character worth watching' },
      { label: 'Save the Cat framework', href: '/learn/save-the-cat', note: 'The most beginner-friendly structure in the craft' },
    ],
    cta: 'Start the beginner track',
    ctaHref: '/learn/tracks',
  },
  {
    level: 'Writing but stuck',
    color: '#B0D2BE',
    bg: '#E4F0E8',
    border: '#F5C57A',
    headline: 'Diagnose what is not working',
    description: 'Most stuck writers have the same three problems. These lessons identify them.',
    steps: [
      { label: 'The midpoint is the spine', href: '/learn/midpoint', note: '6 min —why your Act 2 feels like it is going nowhere' },
      { label: 'The ghost', href: '/learn/ghost', note: '6 min —why your protagonist feels thin' },
      { label: 'Subtext', href: '/learn/subtext', note: '6 min —why your dialogue feels on-the-nose' },
    ],
    cta: 'Read the intermediate lessons',
    ctaHref: '/learn/tracks',
  },
  {
    level: 'Experienced writer',
    color: '#1A140F',
    bg: '#F7F5F0',
    border: '#E8E2D9',
    headline: 'The academic voice',
    description: 'Every lesson has an Academic mode. Aristotle, McKee, Brecht, Bordwell. The theoretical underpinning of what you already do by instinct.',
    steps: [
      { label: 'Theme —Aristotle vs. Brecht on thematic transparency', href: '/learn/theme', note: 'Toggle Academic mode on any lesson page' },
      { label: 'Act breaks —Syd Field\'s plot point formalized', href: '/learn/act-breaks', note: 'With full source citations' },
      { label: 'The Fichtean Curve', href: '/learn/fichtean-curve', note: 'For writers who feel constrained by Save the Cat' },
    ],
    cta: 'Explore advanced lessons',
    ctaHref: '/learn/tracks',
  },
]

const values = [
  {
    title: 'No AI. Ever.',
    body: 'Every word in the Craft Library was written by a human. Every lesson takes a position. AI-generated craft advice is average by design —it reflects the statistical center of every mediocre screenplay ever written. Eve does not do that.',
  },
  {
    title: 'Structure serves the work.',
    body: 'Eve is not prescriptive. The frameworks are tools, not rules. Save the Cat is useful. So is the Fichtean Curve. So is freeform. The goal is always a story that works. The path is yours.',
  },
  {
    title: 'The fundamentals do not change.',
    body: 'Aristotle described dramatic reversal and recognition in 335 BC. Blake Snyder described the same thing in 2005 with different names. Good craft is not new. It just needs to be explained clearly.',
  },
  {
    title: 'Education is always free.',
    body: 'The entire Craft Library —every lesson, the glossary, the frameworks —is free forever. The tools are what the Studio tier funds. You should never have to pay to learn.',
  },
]

const books = [
  { title: 'Story', author: 'Robert McKee', year: '1997', note: 'The most thorough treatment of story structure in existence. Dense and worth every page.', url: 'https://www.amazon.com/Story-Substance-Structure-Principles-Screenwriting/dp/0060391685' },
  { title: 'Save the Cat', author: 'Blake Snyder', year: '2005', note: 'The most practical screenwriting book written. Opinionated and correct about most things.', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Book/dp/1932907009' },
  { title: 'Screenplay', author: 'Syd Field', year: '1979', note: 'The book that codified three-act structure for Hollywood. Start here before McKee.', url: 'https://www.amazon.com/Screenplay-Foundations-Screenwriting-Syd-Field/dp/0385339038' },
  { title: "The Writer's Journey", author: 'Christopher Vogler', year: '1992', note: "Campbell's Hero's Journey applied to screenwriting. Essential for understanding mythic structure.", url: 'https://www.amazon.com/Writers-Journey-Mythic-Structure-Storytellers/dp/1615932283' },
  { title: 'The Anatomy of Story', author: 'John Truby', year: '2007', note: 'The most rigorous alternative to three-act structure. 22 steps instead of three acts.', url: 'https://www.amazon.com/Anatomy-Story-Steps-Becoming-Master/dp/086547800X' },
  { title: 'Creating Character Arcs', author: 'K.M. Weiland', year: '2016', note: 'The clearest explanation of want vs. need and the lie the character believes ever written.', url: 'https://www.amazon.com/Creating-Character-Arcs-Masterful-Compelling/dp/0985780401' },
  { title: 'Techniques of the Selling Writer', author: 'Dwight Swain', year: '1965', note: 'Where the scene-sequel model comes from. Old, underread, and more useful than most modern books.', url: 'https://www.amazon.com/Techniques-Selling-Writer-Dwight-Swain/dp/0806111917' },
  { title: 'Making a Good Script Great', author: 'Linda Seger', year: '1987', note: 'Practical script analysis. Better on scenes and subplots than almost anything written since.', url: 'https://www.amazon.com/Making-Good-Script-Great-Linda/dp/0935296417' },
]

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'var(--text-dark)', padding: '44px 24px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '24px' }}>About Eve</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 6vw, 58px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '28px' }}>
            Built for writers who couldn&apos;t afford film school
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: '1.75', color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto 36px' }}>
            Eve is a craft platform and story workspace. The lessons are free. The tools are worth paying for. There is no AI anywhere in the product.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ display: 'inline-block', background: 'linear-gradient(160deg, #1A512E 0%, var(--green) 55%, #62A81E 100%)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none' }}>Browse the Craft Library</Link>
            <Link href="/auth" style={{ display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>Create free account</Link>
          </div>
        </div>
      </section>

      {/* Three tracks */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Where to start</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--text-mid)', maxWidth: '460px', margin: '0 auto', lineHeight: '1.7' }}>
            Different writers need different things. Pick the track that matches where you are right now.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {tracks.map((track, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: track.bg, border: `1px solid ${track.border}`, borderRadius: '20px', padding: '5px 14px', marginBottom: '20px', width: 'fit-content' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: track.color, flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: track.color, letterSpacing: '0.02em' }}>{track.level}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: '1.3' }}>{track.headline}</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '20px' }}>{track.description}</p>
              <div style={{ flex: 1 }}>
                {track.steps.map((step, j) => (
                  <Link key={j} href={step.href} style={{ display: 'block', padding: '12px 0', borderTop: '1px solid var(--border)', textDecoration: 'none' }}>
                    <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', color: 'var(--text-dark)', marginBottom: '3px' }}>{step.label}</div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)' }}>{step.note}</div>
                  </Link>
                ))}
              </div>
              <Link href={track.ctaHref} style={{ display: 'block', marginTop: '20px', padding: '11px 20px', background: track.bg, border: `1px solid ${track.border}`, borderRadius: '8px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '13px', color: track.color, textDecoration: 'none', textAlign: 'center' }}>{track.cta} →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* What Eve believes */}
      <section style={{ padding: '72px 24px', background: 'var(--off-white)', borderTop: '1px solid var(--green-border)', borderBottom: '1px solid var(--green-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '48px', textAlign: 'center' }}>What Eve believes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '36px' }}>
            {values.map((v, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-mid)' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading list */}
      <section style={{ padding: '80px 24px', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>The reading list</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-mid)', maxWidth: '540px' }}>
            The books the Craft Library draws from. When a lesson cites McKee or Aristotle, this is where to go deeper. No affiliate links.
          </p>
        </div>
        <div>
          {books.map((book, i) => (
            <a key={i} href={book.url} target="_blank" rel="noopener noreferrer" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start', padding: '20px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text-dark)' }}>{book.title}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em' }}>{book.author} · {book.year}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0 }}>{book.note}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)', whiteSpace: 'nowrap', paddingTop: '4px' }}>
                Amazon
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 24px', background: 'var(--text-dark)', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>Start writing. For free.</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '32px' }}>
            One project, the full Craft Library, all the fundamentals. No credit card.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none' }}>Create your free account</Link>
        </div>
      </section>
    </div>
  )
}

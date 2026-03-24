import Link from 'next/link'

const books = [
  {
    category: 'Structure',
    items: [
      { title: 'Save the Cat!', author: 'Blake Snyder', year: '2005', level: 'Beginner', description: 'The most accessible and widely used story structure book in Hollywood. Snyder maps 15 specific beats to exact page numbers. Prescriptive, practical, and effective. Start here if you are new to structure.', verdict: 'Read first.' },
      { title: 'Story', author: 'Robert McKee', year: '1997', level: 'Intermediate', description: 'The most thorough and philosophically serious book on story structure ever written. McKee goes deeper than anyone else on the mechanics of dramatic tension, scene construction, and the relationship between structure and meaning. Dense but essential.', verdict: 'Read second.' },
      { title: 'The Anatomy of Story', author: 'John Truby', year: '2007', level: 'Advanced', description: 'Twenty-two steps of story structure, more granular than anyone else. Truby argues against three-act structure and offers a character-based alternative. Challenging but rewarding for writers who want to go beyond formula.', verdict: 'Read when you\'re ready.' },
      { title: 'Screenplay', author: 'Syd Field', year: '1979', level: 'Beginner', description: 'The book that defined three-act structure for Hollywood. Field introduced the concept of the plot point —the turn at the end of each act. Foundational reading even if later writers have refined his ideas significantly.', verdict: 'Read for context.' },
    ],
  },
  {
    category: 'Character',
    items: [
      { title: 'The Hero with a Thousand Faces', author: 'Joseph Campbell', year: '1949', level: 'Intermediate', description: 'The mythologist\'s original identification of the monomyth —the pattern of departure, initiation, and return found in stories across all cultures and centuries. Not a writing manual, but the source of everything that came after.', verdict: 'Read for depth.' },
      { title: 'Writing Fiction', author: 'Janet Burroway', year: '1982', level: 'Beginner', description: 'The most widely used university fiction writing textbook. Covers character, dialogue, scene, point of view, and revision with exercises throughout. Excellent for writers coming from a literary rather than screenplay background.', verdict: 'Read for fiction craft.' },
      { title: 'The Art of Fiction', author: 'John Gardner', year: '1983', level: 'Intermediate', description: 'A serious, demanding account of what fiction is trying to do and how it does it. Gardner\'s concept of the "fictional dream" —the unbroken imaginative spell good writing creates —is one of the most useful ideas in all of craft writing.', verdict: 'Read for philosophy.' },
    ],
  },
  {
    category: 'Process & Voice',
    items: [
      { title: 'Bird by Bird', author: 'Anne Lamott', year: '1994', level: 'Beginner', description: 'On the experience of writing —the fear, the bad first drafts, the small victories. Lamott\'s concept of the "shitty first draft" is the single most liberating idea in all writing education. Read this when you are stuck or afraid.', verdict: 'Read when stuck.' },
      { title: 'On Writing', author: 'Stephen King', year: '2000', level: 'Beginner', description: 'Half memoir, half craft manual. King is blunt, funny, and genuinely useful on the mechanics of prose. His core argument —that writing is telepathy, the transfer of a mental image from one mind to another —is beautiful and true.', verdict: 'Read for inspiration.' },
      { title: 'The War of Art', author: 'Steven Pressfield', year: '2002', level: 'Beginner', description: 'The shortest and most honest book about why writers do not write. Pressfield names "Resistance" —the internal force that opposes all creative work —and gives a framework for fighting it. Read it in an afternoon.', verdict: 'Read when avoiding writing.' },
    ],
  },
  {
    category: 'Dialogue & Scene',
    items: [
      { title: 'Dialogue', author: 'Robert McKee', year: '2016', level: 'Intermediate', description: 'McKee\'s deep study of how characters speak and why. Covers the mechanics of subtext, the difference between on-the-nose and layered dialogue, and how silence functions dramatically. The best book specifically on dialogue.', verdict: 'Read for dialogue work.' },
      { title: 'The Scene Book', author: 'Sandra Scofield', year: '2007', level: 'Intermediate', description: 'A detailed, practical guide to constructing scenes —the fundamental unit of fiction. Covers scene purpose, tension, interiority, and sequencing. Useful for writers who understand story structure but struggle with scene-level craft.', verdict: 'Read for scene work.' },
    ],
  },
]

const podcasts = [
  { name: 'Scriptnotes', hosts: 'John August & Craig Mazin', description: 'Two working Hollywood screenwriters discuss the craft and business of screenwriting. Hundreds of episodes covering everything from structure to contracts. Essential listening.' },
  { name: 'The Secrets of Story', hosts: 'Matt Bird', description: 'Based on Bird\'s book of the same name. Deep dives into story structure, character, and the mechanics of what makes stories work or fail.' },
  { name: 'Writing Excuses', hosts: 'Brandon Sanderson, Mary Robinette Kowal & others', description: 'Genre fiction focused. Short episodes (15 minutes) covering specific craft topics. Excellent for novel writers.' },
  { name: 'The Tim Ferriss Show', hosts: 'Tim Ferriss', description: 'Not writing-specific, but Ferriss regularly interviews novelists, screenwriters, and playwrights about their process. Useful for writers who want to understand process at a high level.' },
]

export default function ResourcesPage() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 24px' }}>

      <div className="fade-up" style={{ marginBottom: '48px' }}>
        <div className="badge" style={{ marginBottom: '14px' }}>Resources</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>Reading List & Resources</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75', maxWidth: '620px' }}>
          The books, podcasts, and reference material worth your time. Curated for writers who are serious about the craft —whether you are writing your first short story or your third screenplay.
        </p>
      </div>

      <div className="tip-box fade-up fade-up-delay-1" style={{ marginBottom: '48px', maxWidth: '680px' }}>
        <strong>Where to start:</strong> Read Save the Cat! and Bird by Bird before anything else. One gives you structure. One gives you permission. Together they are enough to start and finish a first draft.
      </div>

      {/* Books */}
      {books.map((cat, ci) => (
        <div key={ci} className={`fade-up fade-up-delay-${Math.min(ci + 1, 4)}`} style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '24px', background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', borderRadius: '2px' }} />
            <h2 style={{ fontSize: '20px' }}>{cat.category}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {cat.items.map((book, i) => (
              <div key={i} className="card" style={{ padding: '22px 26px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-display)', marginBottom: '3px' }}>{book.title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>{book.author} &middot; {book.year}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    <span className="badge" style={{ fontSize: '10px' }}>{book.level}</span>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '12px' }}>{book.description}</p>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)', fontStyle: 'italic' }}>{book.verdict}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Podcasts */}
      <div className="fade-up" style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '4px', height: '24px', background: 'var(--green)', borderRadius: '2px' }} />
          <h2 style={{ fontSize: '20px' }}>Podcasts</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {podcasts.map((p, i) => (
            <div key={i} className="card" style={{ padding: '18px 22px' }}>
              <h3 style={{ fontSize: '15px', fontFamily: 'var(--font-display)', marginBottom: '4px' }}>{p.name}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '8px' }}>{p.hosts}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65' }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div style={{ background: 'var(--green)', borderRadius: '14px', padding: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '22px', marginBottom: '10px' }}>Keep learning inside Eve</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.7' }}>
            The Craft Library and Story Glossary are built around the same books and frameworks listed here.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { label: 'Craft Library', href: '/learn', desc: '13 lessons on structure, character, dialogue, and theme' },
            { label: 'Story Glossary', href: '/glossary', desc: '25+ terms defined for working writers' },
            { label: 'Session Mode', href: '/session', desc: 'Work through your story beat by beat' },
          ].map((l, i) => (
            <Link key={i} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.15)', transition: 'background 0.15s ease' }}>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>{l.label} &rarr;</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>{l.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
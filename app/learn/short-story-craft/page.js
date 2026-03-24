import Link from 'next/link'

export const metadata = {
  title: 'Writing Short Stories—Craft, Form, and Getting Published | Eve',
  description: 'How short stories work. The compressed form, the single effect, the ending that recontextualizes everything. A guide to writing and publishing short fiction.',
}

export default function LessonShortStoryCraft() {
  const masters = [
    { name: 'Anton Chekhov', note: 'The standard for compression and emotional truth without sentimentality' },
    { name: 'Alice Munro', note: 'Nobel laureate—entire lives compressed into 30 pages without losing complexity' },
    { name: 'Raymond Carver', note: 'Minimalism as method—what is left out is as important as what is included' },
    { name: "Flannery O'Connor", note: 'Violence as revelation—the moment of grace arrives through shock' },
    { name: 'Jorge Luis Borges', note: 'Idea as story—concept and narrative as inseparable elements' },
    { name: 'Lorrie Moore', note: "Voice as structure—the narrator's way of speaking IS the story's meaning" },
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Header breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F5F0FF', color: '#7C3AED' }}>Short Story</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Writing Short Stories
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            How short stories work. The compressed form, the single effect, the ending that recontextualizes everything. A guide to writing and publishing short fiction.
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Short Fiction</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>8 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '16px' }}>
          Writing short stories
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
          The short story is not a small novel. It is a different form entirely, with different demands, different tools, and a different relationship with the reader. Most writers who struggle with short stories are trying to do novel things in story space. The form does not permit it.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Edgar Allan Poe, who invented the modern short story as a critical concept in 1842, argued that a story should be short enough to read in a single sitting and every element should contribute to a single unified effect. He was describing a form that demands compression as its primary value. Nothing in a short story exists for its own sake. Every sentence is load-bearing.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What the form requires</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A short story enters at the last possible moment. Unlike a novel, which can afford to establish a world before disturbing it, a story begins in the disturbance itself—or just before it. Chekhov enters at the moment something is about to change. Carver enters in the middle of a situation already under pressure.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The story ends shortly after the change—or the refusal of change. The ending does not need to resolve the situation. It needs to shift the meaning of everything that came before it. The best endings recontextualize the opening. When you reach the last line, you understand the first line differently.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Character in short fiction works differently than in novels. You do not have space to build a full biography. What you have is space for a single precise detail that makes a person real. Not a description—a revelation. One gesture, one choice, one thing someone says that could only be said by this person.
        </p>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The compression test.</strong> After drafting, read each sentence and ask: does this earn its place? Not is it good writing—does it serve the single effect the story is building toward? Short fiction cannot carry passengers.
        </div>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The iceberg principle</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Hemingway described what he called the iceberg theory: the dignity of movement of an iceberg is due to only one-eighth of it being above water. A story works when the writer knows everything and shows only the fraction that is necessary. The reader feels the weight of what is not shown.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In "Hills Like White Elephants," Hemingway never names what the couple is discussing. The reader knows. The story works because of that gap. Applied practically: write the backstory, then cut it. Write the emotional statement, then cut it and replace it with the action or image that would cause that emotion in the reader.
        </p>
        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The one-thing rule.</strong> A short story can do one thing well. One character who changes, or one relationship that shifts, or one revelation that reframes everything. If you are trying to do two things, you have two stories or a novella. Choose.
        </div>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Voice</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          More than any other form, the short story depends on voice. In a novel, the reader has hundreds of pages to warm to a narrator. In a story, you have a paragraph—sometimes a sentence. The voice must be immediate, specific, and distinctly itself from the first line.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Read your first line aloud. Does it sound like anyone else's first line? If it could have been written by a different writer in a different story, it is not specific enough yet.
        </p>
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px', marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>Writers who mastered the form</p>
          {masters.map((w, i) => (
            <div key={i} style={{ paddingBottom: '10px', marginBottom: '10px', borderBottom: i < masters.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>{w.name}</p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.5', margin: 0 }}>{w.note}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/learn/the-rewrite" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            &larr; The rewrite
          </Link>
          <Link href="/learn/short-story-markets" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            Where to publish short stories &rarr;
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

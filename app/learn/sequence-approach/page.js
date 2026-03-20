import Link from 'next/link'

export const metadata = {
  title: 'The Sequence Approach: Eight Mini-Films | Eve',
  description: 'Frank Daniel divided the screenplay into eight sequences of 10-15 pages each. This solves the Act 2 sag problem by making every section accountable.',
}

const sections = [
  {
    heading: 'Why three acts are not enough',
    body: "Three-act structure tells you where the major pivots of a screenplay are. It does not tell you what to put between them. This is the Act 2 problem that plagues most first drafts: the writer knows their inciting incident, their midpoint, and their climax, but the sixty pages between those beats feel formless. Characters wander. Subplots drift. The plot marks time. Frank Daniel, who taught screenwriting at Columbia and later at USC, solved this problem by subdividing the screenplay into eight sequences, each roughly ten to fifteen pages long, each with its own dramatic question, rising tension, and resolution. Three-act structure is the skeleton. The Sequence Approach is the musculature."
  },
  {
    heading: 'The eight sequences',
    body: "The eight sequences divide roughly into three acts, but the granularity changes everything. Sequences 1 and 2 cover Act 1: establish the protagonist in their world, then launch the story with the inciting incident and end of Act 1 break. Sequences 3 and 4 cover the first half of Act 2: the protagonist engages the new world and reaches the false peak of the midpoint. Sequences 5 and 6 cover the second half of Act 2: complications intensify, the protagonist is pushed toward their lowest point, and Act 2 ends in the All Is Lost moment. Sequences 7 and 8 cover Act 3: the protagonist finds a new approach and executes the climax, followed by resolution. Each sequence has its own internal arc."
  },
  {
    heading: 'The dramatic question as unit',
    body: "The key to the Sequence Approach is that each sequence must be organized around a specific dramatic question. Sequence 1 might ask: what kind of person is our protagonist and what is their world? Sequence 3 might ask: can the protagonist survive in this new situation using their existing skills? Each question should be answerable by the end of the sequence, and the answer should raise a new question or complicate the one that follows. This creates forward momentum not through plot mechanics but through genuine dramatic interest. The audience is always asking a specific question, and the sequence is organized to answer it—just not in the way they expected."
  },
  {
    heading: 'The mini-film model',
    body: "Daniel described each sequence as a mini-film: it has its own setup, conflict, and resolution. The protagonist enters a sequence with a specific goal; something stands in the way; the sequence ends with a partial resolution that is either a small victory leading to a larger complication, or a defeat that forces the protagonist to change strategy. This is what makes the Sequence Approach so useful for writers who feel lost in the middle of a screenplay. Instead of writing Act 2, you are writing eight separate short films that happen to connect. The problem of the empty page becomes eight smaller, more manageable problems. Solve each mini-film, and the feature solves itself."
  },
  {
    heading: 'How it differs from Save the Cat',
    body: "Save the Cat gives you fifteen specific beats with approximate page numbers. The Sequence Approach gives you eight containers and asks you to fill them. The difference matters. Save the Cat is a prescription; the Sequence Approach is a structure. A writer following Save the Cat knows where every beat should fall. A writer using the Sequence Approach knows that each section needs a dramatic question, rising tension, and a resolution—but how those elements are arranged is entirely their own. For complex plots with multiple storylines, the Sequence Approach is more flexible: each subplot can have its own sequence, and the interweaving of sequences becomes a storytelling tool rather than an obstacle."
  },
  {
    heading: 'Using it diagnostically',
    body: "The most valuable use of the Sequence Approach may be diagnostic. If your screenplay is not working, map it against the eight sequences. Identify what the dramatic question of each ten-to-fifteen-page section is. If you cannot articulate the dramatic question, that section does not have one—and that is why it is not working. If the question is clear but the resolution is absent or unsatisfying, that is where the work is. The Sequence Approach makes structural problems visible and specific. It turns the vague feeling that Act 2 is not working into a precise observation about which sequence lacks a clear dramatic question and why."
  },
]

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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#FEF3E2', color: '#B5700A' }}>Frameworks</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            The Sequence Approach: Eight Mini-Films
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            Frank Daniel solved the Act 2 problem by making Act 2 into four separate films. Each sequence has its own dramatic question. Answer them all and the screenplay answers itself.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Sequence map */}
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', marginBottom: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>The Eight Sequences</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['1', 'Act 1', 'Status quo — establish world and protagonist'],
              ['2', 'Act 1', 'Inciting incident — the world is disrupted, Act 1 break'],
              ['3', 'Act 2a', 'New world — protagonist attempts old skills in new situation'],
              ['4', 'Act 2a', 'Midpoint — false peak, everything seems to work or collapse'],
              ['5', 'Act 2b', 'Complications — pressure intensifies, stakes clarify'],
              ['6', 'Act 2b', 'All Is Lost — protagonist at their lowest point, Act 2 break'],
              ['7', 'Act 3', 'New approach — protagonist finds what they truly need'],
              ['8', 'Act 3', 'Climax and resolution'],
            ].map(([num, act, desc]) => (
              <div key={num} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', minWidth: '18px' }}>{num}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', minWidth: '48px', paddingTop: '1px' }}>{act}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.5' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', marginTop: i === 0 ? 0 : '8px' }}>{s.heading}</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'var(--text-mid)', margin: 0 }}>{s.body}</p>
          </div>
        ))}

        <div className="tip-box" style={{ marginTop: '16px' }}>
          <strong>Try this:</strong> Write one sentence for each of the eight sequences of your current project: what is the dramatic question of this section, and how is it answered? If any sequence does not have a clear answer, that is where your story is stuck.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid var(--border)', marginTop: '16px' }}>
          <Link href="/learn/story-circle" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Story Circle</p>
            </div>
          </Link>
          <Link href="/learn/kishotenketsu" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Kishōtenketsu</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

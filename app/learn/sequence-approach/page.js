import Link from 'next/link'

export const metadata = {
  title: 'The Sequence Approach: eight acts in disguise —Eve',
}

export default function LessonSequenceApproach() {
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>9 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            The Sequence Approach: Eight Acts in Disguise
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            A craft lesson for serious writers.
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px' }}>
<div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Structure</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>7 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Sequence Approach: eight acts in disguise
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Three-act structure tells you where the big breaks are. The Sequence Approach tells you what goes in between them. Developed by Frank Daniel and popularized by Paul Gulino, it divides a screenplay into eight sequences of roughly 10–15 minutes each —a practical tool that solves the most common structural problem writers face: sagging middles.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What a sequence is</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          A sequence is a mini-story within the larger story. It has its own inciting incident, its own tension that builds, and its own climax that resolves something —but creates or raises a new question that drives the next sequence. Think of each sequence as a short film embedded in your feature, complete with its own beginning, middle, and end.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The key requirement: each sequence must end with a scene that closes one question and opens another. If your sequence ends with a scene that simply advances the plot without resolving a tension and raising a new one, the sequence has no architecture —it is just scenes in a row.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The question mechanism:</strong> At the start of each sequence, the audience should have a clear question. By the end, that question is answered —but the answer generates a new, more urgent question. The momentum of a well-structured screenplay is the momentum of questions resolving into new questions.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The eight sequences</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '12px' }}>
          The classic template, mapped loosely to three-act structure:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {[
            { num: '1', label: 'Status quo and inciting incident', desc: 'Establish the world, introduce the protagonist, deliver the event that makes the story necessary.' },
            { num: '2', label: 'Protagonist reacts and stakes are set', desc: 'The protagonist responds to the inciting incident. The central dramatic question is locked in.' },
            { num: '3', label: 'First attempt and first failure', desc: 'The protagonist pursues their goal using their existing tools. Those tools are insufficient —the first approach fails.' },
            { num: '4', label: 'Complications deepen', desc: 'The midpoint arrives. Something appears to change everything —a revelation, a reversal, a new obstacle that raises the stakes completely.' },
            { num: '5', label: 'Pressure intensifies', desc: 'The second half of Act 2 begins. The protagonist is deeper in, more committed, and the cost of failure is clearer than ever.' },
            { num: '6', label: 'All is lost', desc: 'The worst has happened. The protagonist has failed, been betrayed, or lost what mattered most. This is the dark night of the soul.' },
            { num: '7', label: 'Resolution of A story', desc: 'The protagonist makes their final approach with new understanding. The central conflict reaches its climax.' },
            { num: '8', label: 'New equilibrium', desc: 'The aftermath. The world has changed. The protagonist has changed. The question posed in sequence one has been definitively answered.' },
          ].map((s) => (
            <div key={s.num} style={{ display: 'flex', gap: '14px', padding: '14px 16px', background: 'var(--off-white)', borderRadius: '8px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '12px', color: '#fff', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>{s.num}</span>
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '3px' }}>{s.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Why this solves the sagging middle</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The conventional three-act model gives you one structural obligation for the entire middle of your script: arrive at the All Is Lost beat. That is a long way to travel with no intermediate checkpoints. The sequence approach gives you five obligatory mini-climaxes within the same territory. Every twelve pages, something must resolve and something new must open. That pressure keeps the middle alive.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The practical test: can you write one sentence for each sequence that captures its central tension? If you cannot state the tension for a given sequence, that section of your script has no architecture —and the audience will feel it as drift.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            For a film you admire, try to identify the eight sequences:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Watch with a notepad and mark every scene that feels like a meaningful resolution —tension discharged.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Group the scenes between those resolution points into sequences.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>For each sequence, write: the opening question, the closing answer, and the new question that emerges.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Apply the same analysis to your own script. Where are the sequences with no question? That is where your rewrite begins.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Back to</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Craft Library</p>
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
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Kishōtenketsu: Story Without Conflict | Eve',
  description: 'Kishōtenketsu is a four-act East Asian narrative structure that generates drama through surprise and resonance rather than opposition.',
}

const sections = [
  {
    heading: 'The structure that does not need a villain',
    body: "Western story theory has largely assumed that conflict is the engine of narrative. A character wants something; something stands in the way; the story is the struggle between them. Kishōtenketsu, the four-part structure that underlies much of classical Chinese and Japanese narrative—and which Studio Ghibli uses more consistently than any Western studio—operates on a completely different assumption. Drama does not require opposition. It requires surprise and resonance. In kishōtenketsu, a story can be entirely about the way two unrelated things turn out to be connected. The discovery of that connection is the drama."
  },
  {
    heading: 'The four parts',
    body: "Kishōtenketsu divides into four movements: ki, shō, ten, and ketsu. Ki introduces the subject—the characters, the world, the situation. There is no conflict established here; the opening is purely presentational. Shō develops what was introduced: the world deepens, the characters act within it, the situation elaborates. Ten is the pivot—the twist, the unexpected development that recontextualizes everything before it. Not a conflict, but a new angle of vision. Something is introduced that does not obviously connect to what came before. Ketsu is the reconciliation: the twist and the setup are brought together in a resolution that feels both surprising and inevitable. The connection, once revealed, seems as if it could not have been otherwise."
  },
  {
    heading: 'My Neighbor Totoro as example',
    body: "My Neighbor Totoro has almost no conflict in the Western sense. Satsuki and Mei move to a new house. They encounter forest spirits. Their mother is ill in a hospital. The story does not present the forest spirits as a threat to be overcome, nor does it set the family against an antagonist. The ten—the pivot—comes when Mei goes missing while trying to find her mother. This is not a conflict; it is a complication that arises from the emotional situation already established. The resolution comes when Totoro helps Satsuki find Mei and deliver corn to their mother. The corn connects the story's beginning (Mei's pride in the garden) to its ending (the mother's recovery) without a single scene of opposition. The structure produces genuine emotional release without a single villain."
  },
  {
    heading: 'The ten must be genuinely surprising',
    body: "The most important element in kishōtenketsu is the ten—the twist—and it must be genuinely unexpected. Not a reversal of what was established, but something new that changes the meaning of what was established. In Japanese haiku, the ten appears as a kireji—a cutting word that pivots the poem onto an unexpected image. In narrative, the ten works the same way: it introduces a new element that the reader or viewer did not anticipate and could not have predicted from what came before. The challenge is that the ten must also be prepared. When the ketsu arrives and the turn is reconciled with the setup, the audience should feel: of course. It was always going to be this way. The surprise and the inevitability must coexist."
  },
  {
    heading: 'What it is useful for',
    body: "Kishōtenketsu is not a replacement for conflict-driven narrative in Western commercial contexts. It will not help you structure a thriller or a hero's journey. What it offers is an alternative vocabulary for stories that are not fundamentally about opposition. Literary fiction about observation, discovery, or the passage of time often benefits from thinking in terms of ki-shō-ten-ketsu rather than three-act structure. Short stories about a moment of recognition—the kind of story that Alice Munro or Lydia Davis writes—frequently follow this structure without naming it. If your story is not about a protagonist trying to overcome an obstacle, kishōtenketsu may describe what it actually is about."
  },
  {
    heading: 'The practical question',
    body: "To use kishōtenketsu deliberately, ask four questions. What am I establishing? (Ki) How does it develop? (Shō) What unexpected element will arrive that changes the meaning of everything before it? (Ten) How do the setup and the twist connect in a way that feels both surprising and inevitable? (Ketsu) The hardest question is always the ten. It must come from outside the logic of what was established—not a complication of the situation but a new angle of vision on it. When you find the ten, the story knows where it is going. When you cannot find it, the story does not yet have a reason to exist."
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
            Kishōtenketsu: Story Without Conflict
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            A four-part East Asian narrative structure that generates drama through surprise and resonance rather than opposition. No villain required.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Four parts visual */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '8px' }}>
          {[
            { jp: '起', rom: 'Ki', eng: 'Introduction', desc: 'Establish the world and characters' },
            { jp: '承', rom: 'Shō', eng: 'Development', desc: 'Deepen and elaborate what was introduced' },
            { jp: '転', rom: 'Ten', eng: 'Twist', desc: 'Unexpected element recontextualizes everything' },
            { jp: '結', rom: 'Ketsu', eng: 'Resolution', desc: 'Twist and setup reconciled' },
          ].map(({ jp, rom, eng, desc }) => (
            <div key={rom} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 12px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--green)', lineHeight: 1, marginBottom: '4px' }}>{jp}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: 'var(--green)', marginBottom: '4px' }}>{rom}</div>
              <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '4px' }}>{eng}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-soft)', lineHeight: '1.4' }}>{desc}</div>
            </div>
          ))}
        </div>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', marginTop: i === 0 ? 0 : '8px' }}>{s.heading}</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'var(--text-mid)', margin: 0 }}>{s.body}</p>
          </div>
        ))}

        <div className="tip-box" style={{ marginTop: '16px' }}>
          <strong>Try this:</strong> Think of a story you want to tell that does not have a clear antagonist. Write your ten first. What is the unexpected element that will arrive and change the meaning of everything before it? Once you have the ten, work backward to find the ki and shō that make it land.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid var(--border)', marginTop: '16px' }}>
          <Link href="/learn/sequence-approach" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Sequence Approach</p>
            </div>
          </Link>
          <Link href="/learn/fichtean-curve" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Fichtean Curve</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

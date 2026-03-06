import Link from 'next/link'

const terms = [
  {
    term: 'Act',
    definition: 'A major division of a story defined by a shift in dramatic circumstances. Most stories have three acts. Act 1 establishes the world and the problem. Act 2 escalates the conflict. Act 3 resolves it. The act breaks — the transitions between acts — are the most structurally important moments in the story.',
    related: ['Act Break', 'Structure', 'Midpoint'],
  },
  {
    term: 'Act Break',
    definition: 'The event that ends one act and begins another. An act break is not a pause — it is a point of no return. Something must change so completely that the story can never return to what it was. In a screenplay, Act 1 ends around page 25–30. Act 2 ends around page 85–90.',
    related: ['Act', 'Break into Two', 'Break into Three'],
  },
  {
    term: 'Antagonist',
    definition: 'The primary force that opposes the protagonist. An antagonist is not a villain — it can be a person, a system, a natural force, or the protagonist themselves. The best antagonists are the heroes of their own stories. They have a worldview, a motivation, and a method — and they believe they are right.',
    related: ['Protagonist', 'Conflict', 'Opposition'],
  },
  {
    term: 'Arc',
    definition: 'The internal change a character undergoes over the course of a story. A character arc moves from one state of being to another — from closed to open, from cowardly to brave, from isolated to connected. Not all characters have arcs. A flat arc is a character who changes the world rather than being changed by it.',
    related: ['Character', 'Want vs. Need', 'Ghost'],
  },
  {
    term: 'B Story',
    definition: 'The secondary storyline, usually a relationship (often romantic or a friendship) that carries the theme of the story. In Save the Cat, the B story begins around page 30 and is introduced as relief from the main A story tension. The B story character often delivers the thematic argument and helps the protagonist solve the A story problem.',
    related: ['Theme Stated', 'Save the Cat', 'A Story'],
  },
  {
    term: 'Beat',
    definition: 'The smallest unit of story structure — a single moment where something changes. A beat can be a line of dialogue that shifts the power dynamic, a decision, a revelation, or a physical action. A scene is made of beats. An act is made of scenes. A story is made of acts.',
    related: ['Scene', 'Act', 'Structure'],
  },
  {
    term: 'Catalyst',
    definition: 'The event that disrupts the protagonist\'s ordinary world and sets the story in motion. Also called the inciting incident. The catalyst happens to the protagonist — it is not caused by them. In a screenplay, it arrives around page 12. It is the knock on the door that cannot be ignored.',
    related: ['Inciting Incident', 'Debate', 'Ordinary World'],
  },
  {
    term: 'Character',
    definition: 'In dramatic terms, a character is defined by what they do under pressure, not who they claim to be. Character is revealed in choice — specifically in choices made when there is something to lose. The best characters surprise us while also feeling inevitable.',
    related: ['Arc', 'Want vs. Need', 'Ghost'],
  },
  {
    term: 'Conflict',
    definition: 'The engine of all drama. Conflict is not fighting — it is any situation where two forces want incompatible things. Internal conflict is a character at war with themselves. Interpersonal conflict is between characters. Societal conflict is a character vs. a system. Cosmic conflict is a character vs. nature, fate, or God.',
    related: ['Antagonist', 'Stakes', 'Tension'],
  },
  {
    term: 'Dark Night of the Soul',
    definition: 'In Save the Cat, the beat that follows the All Is Lost moment. The protagonist has lost everything and sits in the wreckage. This is the moment of deepest despair — and crucially, the moment when the internal solution must emerge from within the hero, not be handed to them.',
    related: ['All Is Lost', 'Save the Cat', 'Break into Three'],
  },
  {
    term: 'Dialogue',
    definition: 'The words characters speak to each other. Good dialogue is not realistic speech — it is the illusion of realistic speech, shaped by a writer who knows exactly what every exchange is doing. People in stories talk to get things: to impress, to wound, to delay, to seduce, to forgive. Every line is a transaction.',
    related: ['Subtext', 'Scene', 'Character'],
  },
  {
    term: 'Exposition',
    definition: 'Information the audience needs to understand the story. The great challenge of exposition is delivering it without the audience noticing. Bad exposition is a character explaining things they already know to another character who also knows them. Good exposition is hidden inside conflict, action, and character revelation.',
    related: ['Dialogue', 'Scene', 'Setup'],
  },
  {
    term: 'Ghost',
    definition: 'The wound a character carries from before the story begins. Often a traumatic event, a failure, or a loss that the character has not processed. The ghost drives behavior even when the character is unaware of it. It is not backstory for its own sake — it is the source of the character\'s flaw and the engine of their arc.',
    related: ['Arc', 'Want vs. Need', 'Character'],
  },
  {
    term: 'Inciting Incident',
    definition: 'See Catalyst. The event that disrupts the protagonist\'s ordinary world and makes the story necessary. Without it, there is no story — only a description of a life.',
    related: ['Catalyst', 'Ordinary World', 'Debate'],
  },
  {
    term: 'Logline',
    definition: 'A one-sentence description of a story that answers three questions: Who is the protagonist? What do they want? What stands in the way? A good logline contains irony, a clear sense of the world, and a hint of the emotional stakes. "A shark hunter who is afraid of the water must protect a beach town from a great white" is a logline.',
    related: ['Premise', 'Protagonist', 'Antagonist'],
  },
  {
    term: 'Midpoint',
    definition: 'The event at the exact center of a story that raises the stakes and shifts the direction of the narrative. The midpoint is either a false victory (things seem great, then collapse) or a false defeat (things seem terrible, then rally). After the midpoint, the protagonist becomes active rather than reactive. Remove it and the story collapses.',
    related: ['Act', 'Structure', 'Save the Cat'],
  },
  {
    term: 'Motif',
    definition: 'A recurring image, object, phrase, or idea that accumulates meaning as a story progresses. A motif is not a symbol (which stands for something outside itself) — it is a pattern that resonates with the theme. A red coat. A ticking clock. The smell of rain. Used with intention, a motif can carry the entire weight of a story\'s meaning.',
    related: ['Theme', 'Symbol', 'Imagery'],
  },
  {
    term: 'Ordinary World',
    definition: 'In the Hero\'s Journey, the familiar world the protagonist inhabits before the adventure begins. The ordinary world establishes what the hero stands to lose. It should be specific, lived-in, and worth returning to — otherwise the journey has no emotional stakes.',
    related: ["Hero's Journey", 'Catalyst', 'Threshold'],
  },
  {
    term: 'Protagonist',
    definition: 'The character the audience follows through the story. Not necessarily likeable — but always compelling. The protagonist must want something, face opposition, make choices, and change (or refuse to change in ways that matter). The story is defined by their arc.',
    related: ['Antagonist', 'Arc', 'Want vs. Need'],
  },
  {
    term: 'Scene',
    definition: 'A unit of dramatic action set in one time and place. A scene must do at least two things simultaneously: advance the plot and reveal character, or raise stakes and establish theme. A scene that only does one thing is a candidate for the cutting room floor. Every scene ends differently than it began.',
    related: ['Beat', 'Sequence', 'Act'],
  },
  {
    term: 'Stakes',
    definition: 'What the protagonist stands to lose if they fail. Without stakes, there is no tension. Stakes operate on three levels: physical (life and death), emotional (love, connection, identity), and philosophical (the meaning of the protagonist\'s world). The strongest stories operate on all three simultaneously.',
    related: ['Conflict', 'Tension', 'Character'],
  },
  {
    term: 'Structure',
    definition: 'The arrangement of events in a story. Structure is not a formula — it is the shape that emerges when a story is working. Three-act structure, the Hero\'s Journey, Save the Cat, and the Story Circle are different languages for describing the same underlying reality: stories move from equilibrium through disruption to a new equilibrium.',
    related: ['Act', 'Beat', 'Midpoint'],
  },
  {
    term: 'Subtext',
    definition: 'What is not being said. The meaning beneath the surface of a line of dialogue, a gesture, or a scene. "I\'m fine" can mean a thousand things depending on who says it and when. Subtext is the space between what characters say and what they mean — and it is where the best performances and the best writing live.',
    related: ['Dialogue', 'Character', 'Theme'],
  },
  {
    term: 'Theme',
    definition: 'The central question or argument a story makes about human experience. Theme is not a message (which implies an answer) — it is a question the story dramatizes with honesty and complexity. The best themes do not resolve cleanly. They linger. "What does justice cost the people who pursue it?" is a theme.',
    related: ['Motif', 'Subtext', 'B Story'],
  },
  {
    term: 'Want vs. Need',
    definition: 'The distinction between what a protagonist consciously pursues (want) and what they actually require to grow or survive (need). The want is external and visible. The need is internal and often invisible to the character. The tension between want and need drives the arc. Getting the want without satisfying the need is tragedy. Satisfying the need by surrendering the want is growth.',
    related: ['Arc', 'Ghost', 'Character'],
  },
]

export default function GlossaryPage() {
  const letters = [...new Set(terms.map(t => t.term[0]))].sort()

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>

      <div className="fade-up" style={{ marginBottom: '48px' }}>
        <div className="badge" style={{ marginBottom: '14px' }}>Reference</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>Story Glossary</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75', maxWidth: '600px' }}>
          The vocabulary of craft. Every term a working writer encounters — defined plainly, with context, and linked to related concepts.
        </p>
      </div>

      {/* Letter index */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '48px', padding: '16px 20px', background: 'var(--off-white)', borderRadius: '10px', border: '1px solid var(--border)' }}>
        {letters.map(l => (
          <a key={l} href={`#letter-${l}`} style={{
            fontSize: '13px', fontWeight: '600', color: 'var(--green)',
            padding: '4px 10px', borderRadius: '5px',
            background: 'var(--green-pale)', border: '1px solid var(--green-border)',
            textDecoration: 'none', fontFamily: 'Source Sans 3, sans-serif',
          }}>{l}</a>
        ))}
      </div>

      {/* Terms */}
      <div className="fade-up fade-up-delay-2">
        {letters.map(letter => (
          <div key={letter} id={`letter-${letter}`} style={{ marginBottom: '48px' }}>
            <div className="divider-label" style={{ marginBottom: '20px' }}>{letter}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {terms.filter(t => t.term[0] === letter).map((t, i) => (
                <div key={i} style={{ paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '18px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', marginBottom: '8px' }}>{t.term}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.75', marginBottom: '12px' }}>{t.definition}</p>
                  {t.related && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>See also:</span>
                      {t.related.map((r, j) => (
                        <span key={j} className="badge" style={{ fontSize: '10px', cursor: 'default' }}>{r}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tip-box" style={{ marginTop: '16px' }}>
        <strong>Using the glossary:</strong> Terms are more useful in context than in isolation. When you encounter a term in Session Mode or the Craft Library, look it up here — then go back and apply it to your own story.
      </div>

    </div>
  )
}
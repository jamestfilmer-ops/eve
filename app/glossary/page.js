import Link from 'next/link'

const terms = [
  // A
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
  // B
  {
    term: 'B Story',
    definition: 'The secondary storyline, usually a relationship (often romantic or a friendship) that carries the theme of the story. In Save the Cat, the B story begins around page 30 and is introduced as relief from the main A story tension. The B story character often delivers the thematic argument and helps the protagonist solve the A story problem.',
    related: ['Theme Stated', 'Save the Cat', 'A Story'],
  },
  {
    term: 'Backstory',
    definition: 'Events that occurred before the story begins that are relevant to understanding character behavior and plot. Good backstory is never included for its own sake — it is only revealed when the present moment demands it, and only as much as the scene requires. The rest should stay invisible.',
    related: ['Ghost', 'Exposition', 'Character'],
  },
  {
    term: 'Beat',
    definition: 'The smallest unit of story structure — a single moment where something changes. A beat can be a line of dialogue that shifts the power dynamic, a decision, a revelation, or a physical action. A scene is made of beats. An act is made of scenes. A story is made of acts.',
    related: ['Scene', 'Act', 'Structure'],
  },
  {
    term: 'Break into Three',
    definition: 'In Save the Cat, the moment that ends Act 2 and begins Act 3. The protagonist has a new idea — a synthesis of everything they have learned. Crucially, this solution usually comes from the B story: a relationship, a value, or a perspective that the protagonist gained during their journey.',
    related: ['Save the Cat', 'All Is Lost', 'Finale'],
  },
  {
    term: 'Break into Two',
    definition: 'In Save the Cat, the end of Act 1 — the moment the protagonist actively chooses to enter Act 2. This is the single most important beat in the structure. The hero cannot be pushed into Act 2 — they must walk in with purpose. It should feel like a conscious, irreversible choice.',
    related: ['Save the Cat', 'Catalyst', 'Debate'],
  },
  // C
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
  // D
  {
    term: 'Dark Night of the Soul',
    definition: 'In Save the Cat, the beat that follows the All Is Lost moment. The protagonist has lost everything and sits in the wreckage. This is the moment of deepest despair — and crucially, the moment when the internal solution must emerge from within the hero, not be handed to them.',
    related: ['All Is Lost', 'Save the Cat', 'Break into Three'],
  },
  {
    term: 'Debate',
    definition: 'In Save the Cat, the beat that follows the Catalyst. The protagonist hesitates before committing to the journey. They weigh the cost. The debate beat is important because it shows the audience the stakes — this is not an easy choice, and the hero knows it.',
    related: ['Catalyst', 'Break into Two', 'Stakes'],
  },
  {
    term: 'Dialogue',
    definition: 'The words characters speak to each other. Good dialogue is not realistic speech — it is the illusion of realistic speech, shaped by a writer who knows exactly what every exchange is doing. People in stories talk to get things: to impress, to wound, to delay, to seduce, to forgive. Every line is a transaction.',
    related: ['Subtext', 'Scene', 'Character'],
  },
  // E
  {
    term: 'Elixir',
    definition: 'In the Hero\'s Journey, what the hero brings back from their adventure — wisdom, love, a solution, or a freedom that can heal the Ordinary World. The elixir is not always literal. It is the gift of transformation: something the hero could not have carried before the journey.',
    related: ["Hero's Journey", 'Return', 'Arc'],
  },
  {
    term: 'Exposition',
    definition: 'Information the audience needs to understand the story. The great challenge of exposition is delivering it without the audience noticing. Bad exposition is a character explaining things they already know to another character who also knows them. Good exposition is hidden inside conflict, action, and character revelation.',
    related: ['Dialogue', 'Scene', 'Setup'],
  },
  // F
  {
    term: 'False Defeat',
    definition: 'A midpoint type in which things appear to be going catastrophically wrong — but actually contain the seeds of eventual victory. The protagonist is at their most vulnerable, but the audience senses a turning point coming. Contrast with a False Victory.',
    related: ['Midpoint', 'False Victory', 'Stakes'],
  },
  {
    term: 'False Victory',
    definition: 'A midpoint type in which things appear to be going wonderfully — but the ground is about to shift. The protagonist feels they have won, but the real pressure has not yet arrived. Contrast with a False Defeat.',
    related: ['Midpoint', 'False Defeat', 'Stakes'],
  },
  {
    term: 'Flat Arc',
    definition: 'A character arc in which the protagonist does not change internally — instead, they change the world around them. The flat arc hero has already found the truth; the story is about them holding onto it in the face of a world that wants to break it. Think: Atticus Finch. James Bond.',
    related: ['Arc', 'Positive Arc', 'Negative Arc'],
  },
  {
    term: 'Foreshadowing',
    definition: 'A hint or signal of a future event, planted early so the payoff feels earned rather than arbitrary. Good foreshadowing is only visible in retrospect. On first viewing, it reads as ordinary detail. On second viewing, it reads as inevitability.',
    related: ['Plant and Payoff', 'Setup', 'Motif'],
  },
  {
    term: 'Fun and Games',
    definition: 'In Save the Cat, the section between the Break into Two and the Midpoint. This is the "promise of the premise" — the audience gets what they came for. If the movie is about a spy, this is where the spy does spy things. It is the most entertaining section of the story, and the least concerned with plot mechanics.',
    related: ['Save the Cat', 'Midpoint', 'Break into Two'],
  },
  // G
  {
    term: 'Ghost',
    definition: 'The wound a character carries from before the story begins. Often a traumatic event, a failure, or a loss that the character has not processed. The ghost drives behavior even when the character is unaware of it. It is not backstory for its own sake — it is the source of the character\'s flaw and the engine of their arc.',
    related: ['Arc', 'Want vs. Need', 'Character'],
  },
  // I
  {
    term: 'Inciting Incident',
    definition: 'See Catalyst. The event that disrupts the protagonist\'s ordinary world and makes the story necessary. Without it, there is no story — only a description of a life.',
    related: ['Catalyst', 'Ordinary World', 'Debate'],
  },
  {
    term: 'Irony',
    definition: 'The gap between what a character believes and what the audience knows — or between what a character wants and what they need. Structural irony is when the protagonist pursues the wrong goal for the right reasons. Dramatic irony is when the audience knows something the character does not. Both create unbearable tension.',
    related: ['Subtext', 'Theme', 'Stakes'],
  },
  // K
  {
    term: 'Kishōtenketsu',
    definition: 'A four-act East Asian narrative structure (Japanese: 起承転結) that does not rely on conflict to generate drama. Ki introduces; Shō develops; Ten introduces an unexpected twist or turn; Ketsu reconciles. The power is in the Ten — an unexpected juxtaposition that recontextualizes everything that came before.',
    related: ['Structure', 'Sequence Approach', 'Fichtean Curve'],
  },
  // L
  {
    term: 'Lie the Character Believes',
    definition: 'The false belief a protagonist holds at the start of the story — a misunderstanding about themselves, the world, or what they deserve. The arc of the story is the process of confronting and dismantling this lie. The character who refuses to surrender the lie ends in tragedy.',
    related: ['Ghost', 'Want vs. Need', 'Arc'],
  },
  {
    term: 'Logline',
    definition: 'A one-sentence description of a story that answers three questions: Who is the protagonist? What do they want? What stands in the way? A good logline contains irony, a clear sense of the world, and a hint of the emotional stakes. "A shark hunter who is afraid of the water must protect a beach town from a great white" is a logline.',
    related: ['Premise', 'Protagonist', 'Antagonist'],
  },
  // M
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
  // N
  {
    term: 'Negative Arc',
    definition: 'A character arc in which the protagonist moves from a functional state to a broken one — choosing the lie over the truth, embracing the wound, or becoming what they feared. Tragedy is a negative arc executed with inevitability. It does not feel like failure; it feels like the only possible ending.',
    related: ['Arc', 'Flat Arc', 'Positive Arc'],
  },
  // O
  {
    term: 'Ordinary World',
    definition: 'In the Hero\'s Journey, the familiar world the protagonist inhabits before the adventure begins. The ordinary world establishes what the hero stands to lose. It should be specific, lived-in, and worth returning to — otherwise the journey has no emotional stakes.',
    related: ["Hero's Journey", 'Catalyst', 'Threshold'],
  },
  // P
  {
    term: 'Plant and Payoff',
    definition: 'The structural technique of placing a detail, object, or piece of information early in a story (the plant) so it can be used meaningfully later (the payoff). A payoff without a plant feels like cheating. A plant without a payoff is dead weight. The best plants are invisible until the payoff reveals them.',
    related: ['Foreshadowing', 'Setup', 'Motif'],
  },
  {
    term: 'Positive Arc',
    definition: 'A character arc in which the protagonist moves from a broken or incomplete state to a fuller one — surrendering the lie, accepting the truth, and growing into who they need to be. Most mainstream narratives follow a positive arc. It is not the only valid arc, but it is the most instinctively satisfying.',
    related: ['Arc', 'Flat Arc', 'Negative Arc'],
  },
  {
    term: 'Premise',
    definition: 'The foundational "what if" of a story. Not a plot — a premise is the situation that makes the plot possible. "What if a shark terrorized a beach town?" is a premise. Premise contains dramatic potential: irony, conflict, and a world that demands exploration.',
    related: ['Logline', 'Theme', 'Concept'],
  },
  {
    term: 'Protagonist',
    definition: 'The character the audience follows through the story. Not necessarily likeable — but always compelling. The protagonist must want something, face opposition, make choices, and change (or refuse to change in ways that matter). The story is defined by their arc.',
    related: ['Antagonist', 'Arc', 'Want vs. Need'],
  },
  // S
  {
    term: 'Scene',
    definition: 'A unit of dramatic action set in one time and place. A scene must do at least two things simultaneously: advance the plot and reveal character, or raise stakes and establish theme. A scene that only does one thing is a candidate for the cutting room floor. Every scene ends differently than it began.',
    related: ['Beat', 'Sequence', 'Act'],
  },
  {
    term: 'Scene Turn',
    definition: 'The shift in value that occurs within a scene — a change from positive to negative or negative to positive (or a change in degree). A scene without a turn is not a scene; it is description. The turn is what makes an audience lean forward instead of checking their watch.',
    related: ['Scene', 'Beat', 'Conflict'],
  },
  {
    term: 'Sequence',
    definition: 'A series of scenes unified by a single dramatic question or sub-objective. A sequence has its own beginning, middle, and end. In the Sequence Approach (Gulino), a feature film contains roughly eight sequences of 10–15 minutes each. Each sequence builds toward the next, escalating the central conflict.',
    related: ['Act', 'Scene', 'Sequence Approach'],
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
    term: 'Symbol',
    definition: 'An object, image, or event that stands for something beyond itself — a concept, an emotion, or a theme. Unlike a motif (which accumulates meaning through repetition), a symbol often arrives once and carries its meaning in a single charged moment. The difference between a symbol and a cliché is specificity.',
    related: ['Motif', 'Theme', 'Imagery'],
  },
  // T
  {
    term: 'Tension',
    definition: 'The experience of uncertainty in the audience — a sustained sense that something important is unresolved. Tension is not action or shock. It can live in a quiet conversation where two people want incompatible things. Tension is the distance between the audience knowing the stakes and not knowing the outcome.',
    related: ['Conflict', 'Stakes', 'Suspense'],
  },
  {
    term: 'Theme',
    definition: 'The central question or argument a story makes about human experience. Theme is not a message (which implies an answer) — it is a question the story dramatizes with honesty and complexity. The best themes do not resolve cleanly. They linger. "What does justice cost the people who pursue it?" is a theme.',
    related: ['Motif', 'Subtext', 'B Story'],
  },
  {
    term: 'Theme Stated',
    definition: 'In Save the Cat, a beat in Act 1 where the theme is spoken aloud to the protagonist — usually by a secondary character, and usually in a way the protagonist does not yet understand. It is the story\'s question, posed early. The answer arrives at the end.',
    related: ['Theme', 'Save the Cat', 'B Story'],
  },
  {
    term: 'Threshold',
    definition: 'In the Hero\'s Journey, the boundary between the Ordinary World and the Special World. Crossing it is the point of no return. After the threshold, the old life is inaccessible — not physically, perhaps, but psychologically. The hero cannot un-know what they now know.',
    related: ["Hero's Journey", 'Ordinary World', 'Special World'],
  },
  // U
  {
    term: 'Unity of Opposites',
    definition: 'A structural principle in which two forces in a story want mutually exclusive things — meaning only one can prevail. The dramatic question only sustains if the opposition is irreconcilable. Two characters who could simply talk it out do not generate unity of opposites. Two characters whose desires make coexistence impossible do.',
    related: ['Conflict', 'Antagonist', 'Stakes'],
  },
  // V
  {
    term: 'Visual Storytelling',
    definition: 'The practice of communicating character, emotion, and theme through image and action rather than words. Film is a visual medium; what can be shown should rarely be spoken. A character\'s loneliness is more powerful in a single shot than in three lines of dialogue explaining it.',
    related: ['Scene', 'Motif', 'Subtext'],
  },
  // W
  {
    term: 'Want vs. Need',
    definition: 'The distinction between what a protagonist consciously pursues (want) and what they actually require to grow or survive (need). The want is external and visible. The need is internal and often invisible to the character. The tension between want and need drives the arc. Getting the want without satisfying the need is tragedy. Satisfying the need by surrendering the want is growth.',
    related: ['Arc', 'Ghost', 'Character'],
  },
  {
    term: 'World Building',
    definition: 'The construction of the rules, atmosphere, and logic of a story\'s setting. World building is not decoration — it shapes what is possible in the narrative. The world must have consistent internal logic that characters cannot break without consequence. Great world building reveals theme: the world of The Wire is built to argue something about institutions and the people inside them.',
    related: ['Setup', 'Premise', 'Visual Storytelling'],
  },
]

export const metadata = {
  title: 'Story Glossary — Eve',
  description: 'The vocabulary of craft. Every story term a working screenwriter encounters — defined precisely, with context, and linked to related concepts.',
}

export default function GlossaryPage() {
  const letters = [...new Set(terms.map(t => t.term[0]))].sort()

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>

      <div className="fade-up" style={{ marginBottom: '48px' }}>
        <div className="badge" style={{ marginBottom: '14px' }}>Reference</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>Story Glossary</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75', maxWidth: '600px' }}>
          The vocabulary of craft. {terms.length} terms every working writer encounters — defined precisely, with context, and linked to related concepts.
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

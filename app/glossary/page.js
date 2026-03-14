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
  // A (additions)
  {
    term: 'Active Voice',
    definition: 'Sentence construction in which the subject performs the action: "He broke the window" rather than "The window was broken." In screenwriting and prose, active voice creates urgency and clarity. Passive voice diffuses agency — useful occasionally for specific effect, but the default should be active.',
    related: ['Scene Craft', 'Visual Storytelling'],
  },
  {
    term: 'Advance (Publishing)',
    definition: 'Money paid by a publisher to an author before the book is published, against future royalty earnings. The advance must be "earned out" — covered by royalty income — before the author receives additional payments. Advances vary enormously, from a few thousand dollars for debut literary fiction to seven figures for commercial properties with auction bidding.',
    related: ['Query Letter', 'Literary Agent', 'Royalties'],
  },
  // C (additions)
  {
    term: 'Close Third Person',
    definition: 'A point of view in which the narrator is technically outside the protagonist but stays tightly bound to their consciousness — reporting their thoughts, perceptions, and feelings as they experience them, without access to other characters\'s interior. The dominant POV of contemporary literary fiction. Allows deep interiority while maintaining narrative flexibility.',
    related: ['Point of View', 'First Person', 'Omniscient Narrator', 'Free Indirect Discourse'],
  },
  {
    term: 'Comps (Comparable Titles)',
    definition: 'Books published in the last three to five years that are similar in tone, subject matter, or readership to the manuscript being pitched. Agents and editors use comps to understand the market position of a project. The standard format: "X meets Y" or "For fans of X." Choose comps that are recent, well-known enough to be recognizable, but not so huge that the comparison seems grandiose.',
    related: ['Query Letter', 'Literary Agent', 'Synopsis'],
  },
  // F (additions)
  {
    term: 'First Person',
    definition: 'Narrative perspective in which the protagonist narrates their own story using "I." Creates immediacy and intimacy but limits the reader to what the narrator knows, perceives, and chooses to share. First person is structurally unreliable — the narrator has a perspective, biases, and blind spots. This limitation is also its greatest strength: the gap between what the narrator tells us and what we can infer is where psychological depth lives.',
    related: ['Point of View', 'Close Third Person', 'Unreliable Narrator'],
  },
  {
    term: 'Free Indirect Discourse',
    definition: 'A narrative technique that blends third-person narration with first-person interiority — reporting a character\'s thoughts in the narrative voice without using "she thought" or quotation marks. "She looked at the house. It had not changed. Of course it had not changed." The italicized sentence is hers, but the prose does not announce the shift. Jane Austen pioneered it. Most literary fiction relies on it heavily.',
    related: ['Close Third Person', 'Point of View', 'Interiority'],
  },
  // I (additions)
  {
    term: 'Inciting Incident',
    definition: 'The event that launches the main story — the disruption to the protagonist\'s ordinary world that sets the central conflict in motion. Distinct from the opening image (which establishes the before) and the first act break (which commits the protagonist to the journey). The inciting incident creates the question the story must answer. In Save the Cat, this falls around page 12. In most novels, within the first 50 pages.',
    related: ['Act Breaks', 'Opening Image', 'Save the Cat'],
  },
  {
    term: 'Interiority',
    definition: 'The representation of a character\'s inner life — thoughts, feelings, perceptions, and memories — as rendered in prose. The primary advantage prose fiction has over film. Interiority can be rendered directly ("She thought of her father") or through free indirect discourse. The challenge is balancing interiority with external action: too much and the story stalls; too little and the reader cannot feel the stakes.',
    related: ['Free Indirect Discourse', 'Point of View', 'Subtext'],
  },
  // L (additions)
  {
    term: 'Literary Agent',
    definition: 'A professional who represents authors in negotiations with publishers, typically taking 15% commission on domestic sales and 20% on foreign rights. In traditional publishing, a literary agent is the gatekeeper to major publishers — most do not accept unagented submissions. Agents also provide editorial guidance, manage subsidiary rights, and advise on career strategy. Finding an agent requires querying.',
    related: ['Query Letter', 'Comps', 'Advance'],
  },
  {
    term: 'Logline',
    definition: 'A one or two-sentence summary of a story that conveys the protagonist, their goal, the central conflict, and the stakes. Used in film pitching and increasingly in book proposals. A strong logline contains an implicit question — the dramatic irony that makes the story worth telling. "A shark attacks a beach town and the sheriff who is afraid of water must kill it" is a logline. The best loglines are about character under pressure, not about plot.',
    related: ['Premise', 'Pitch', 'High Concept'],
  },
  // N (additions)
  {
    term: 'Narrative Distance',
    definition: 'How close or far the narrator is from the character\'s experience at any given moment. High distance: "During the summer of his fortieth year, John came to understand that he had wasted his life." Low distance: "Forty years. Forty wasted years. God, what had he done." Narrative distance is a dial, not a switch. The best prose writers modulate it fluidly — pulling close for emotional weight, pulling back for context and perspective.',
    related: ['Point of View', 'Free Indirect Discourse', 'Interiority'],
  },
  // O (additions)
  {
    term: 'Omniscient Narrator',
    definition: 'A narrative perspective in which the narrator has access to all characters\'s thoughts, all places, and all times in the story world. The dominant mode of nineteenth-century fiction (Tolstoy, Dickens, Eliot). Less common in contemporary fiction, where close third person has largely replaced it. True omniscience is rarer than it seems: most "omniscient" novels limit themselves to a small number of POV characters and move between them in structured ways.',
    related: ['Point of View', 'Close Third Person', 'Free Indirect Discourse'],
  },
  // P (additions)
  {
    term: 'Partial Manuscript',
    definition: 'The first chapters of a novel submitted alongside a query letter or proposal when an agent requests more material. For fiction, agents typically request 10-50 pages or 3 chapters. The partial must begin with the first page of the manuscript — agents read in order and will not skip ahead. The partial is the writing sample; it must be the best-written portion of the book.',
    related: ['Query Letter', 'Literary Agent', 'Synopsis'],
  },
  {
    term: 'Point of View',
    definition: 'The perspective from which a story is told — who is telling it, what they can know, and how they relate to the events being narrated. The four primary POVs: first person (I), second person (you, rare), close third person (she, but bound tightly to her consciousness), and omniscient (the narrator moves freely). POV is not a technical choice — it is a decision about where consciousness lives in the story, and every other craft decision is downstream of it.',
    related: ['First Person', 'Close Third Person', 'Omniscient Narrator', 'Unreliable Narrator'],
  },
  // Q (additions)
  {
    term: 'Query Letter',
    definition: 'A one-page letter sent to literary agents to pitch a novel for representation. Contains: a hook sentence or logline, a 250-300 word description of the book (similar to back cover copy), comparable titles (comps), a brief author bio, and word count and genre. The query is the first writing sample — its prose quality signals the manuscript\'s quality. Research each agent\'s specific submission requirements before querying.',
    related: ['Literary Agent', 'Comps', 'Partial Manuscript', 'Synopsis'],
  },
  // R (additions)
  {
    term: 'Royalties',
    definition: 'The percentage of book sales paid to an author by a publisher, typically ranging from 8 to 15 percent of cover price for print and 25 percent for ebooks in traditional publishing. Royalties are applied against the advance until it is earned out — after which the author receives ongoing royalty checks. Self-published authors receive higher royalties (typically 35-70 percent on ebook platforms) but are responsible for all production costs.',
    related: ['Advance', 'Literary Agent'],
  },
  // S (additions)
  {
    term: 'Scene vs. Summary',
    definition: 'The two fundamental modes of prose narrative. Scene renders events in real time — with dialogue, sensory detail, and moment-to-moment action. Summary compresses time — "Three months passed" or "She had done this every morning for forty years." The balance between scene and summary is one of the core pacing decisions in fiction. Important events deserve scene. Everything else can be summary. Beginning writers over-scene and under-summarize.',
    related: ['Pacing', 'Compression', 'Interiority'],
  },
  {
    term: 'Show vs. Tell',
    definition: 'The directive to dramatize rather than report — to render a character\'s anger through what they say and do rather than "She was angry." Useful as a starting point but widely misunderstood. Telling is not always wrong: summary, interiority, and authorial commentary are all forms of telling and all have legitimate uses. The real principle: show what the reader needs to see; tell what the reader can be trusted to absorb quickly.',
    related: ['Interiority', 'Scene vs. Summary', 'Visual Storytelling'],
  },
  {
    term: 'Story Bible',
    definition: 'A reference document, usually internal, containing all established facts about a story world — character backstory, timeline, setting details, rules of magic systems, and anything else that needs to remain consistent across a long work. Essential for series novels and television writing. The story bible prevents continuity errors and serves as a resource when returning to a project after time away.',
    related: ['World Building', 'Character Arc'],
  },
  {
    term: 'Synopsis',
    definition: 'A prose summary of a complete novel, typically one to three pages, requested by literary agents alongside or after a query letter. Unlike jacket copy, a synopsis reveals the ending. It must convey the emotional journey of the protagonist, the key turning points, and the resolution. Writing a synopsis forces clarity about what the story is actually doing — many writers discover structural problems when they cannot summarize what happens and why it matters.',
    related: ['Query Letter', 'Literary Agent', 'Partial Manuscript'],
  },
  // T (additions)
  {
    term: 'Tense',
    definition: 'The grammatical time frame of a narrative: past tense ("she ran") or present tense ("she runs"). Past tense is the traditional default in fiction — it implies retrospective narration and allows the narrator distance from events. Present tense creates immediacy but can feel relentless over a full novel. The choice of tense should be conscious, not default: present tense works well for thrillers and stories focused on real-time sensation; past tense works well for reflection, memory, and complex interiority.',
    related: ['Point of View', 'Narrative Distance'],
  },
  // U (additions)
  {
    term: 'Unreliable Narrator',
    definition: 'A first-person (or close third-person) narrator whose account of events the reader cannot fully trust — due to self-deception, incomplete knowledge, mental instability, or deliberate deception. The reader must read between the lines, inferring what actually happened from what the narrator fails to notice or consciously suppresses. Steven in The Remains of the Day, Nick in Gone Girl, Humbert in Lolita. The gap between what the narrator claims and what the reader perceives is the story.',
    related: ['First Person', 'Point of View', 'Subtext'],
  },
]

export const metadata = {
  title: "Story Glossary — Screenwriting & Novel Writing Terms Defined",
  description: "75+ screenwriting and novel writing terms defined precisely — from three-act structure and character arc to query letters, POV, free indirect discourse, and narrative distance. For screenwriters and novelists at every level.",
  keywords: "screenwriting terms glossary, screenplay terminology, novel writing terms, story structure vocabulary, query letter definition, literary agent terms, point of view types, unreliable narrator, free indirect discourse, narrative distance, story craft glossary",
  openGraph: {
    title: "Story Craft Glossary — Screenwriting & Novel Writing Terms",
    description: "75+ craft terms defined — from act breaks and subtext to query letters, POV types, and free indirect discourse.",
    url: "https://eve-screenwriting.vercel.app/glossary",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/glossary",
  },
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

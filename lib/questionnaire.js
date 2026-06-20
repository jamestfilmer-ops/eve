// lib/questionnaire.js
// All 150 story development questions across 21 sections.
// `seeds` flags tell DevelopTab which answers to offer for auto-population
// into Characters, Themes Map, and World tabs.

export const SECTIONS = [
  // ─── PHASE 1: WRITER'S LAYER ─────────────────────────────────────────────
  {
    id: 'seed', number: 1, title: 'The Seed', phase: 1,
    note: 'Before you build anything, understand what you actually have.',
    questions: [
      { id: 'q1',  text: 'In one sentence, what happens in your story? (External plot)' },
      { id: 'q2',  text: 'In one sentence, what is your story actually about? (Theme — not plot)' },
      { id: 'q3',  text: 'What was the original spark — an image, a feeling, a "what if," a headline, a person?' },
      { id: 'q4',  text: 'Who is this story for? Who in the audience will feel genuinely seen by it?' },
      { id: 'q5',  text: 'Why do you need to be the one to tell this story?' },
    ],
  },
  {
    id: 'genre', number: 2, title: 'Genre & Tone', phase: 1,
    note: "Genre is a contract with the audience. Know what you're promising.",
    questions: [
      { id: 'q6',  text: 'What is the primary genre?' },
      { id: 'q7',  text: "Is there a secondary genre? What's the blend — and where do the two genres most interestingly collide?" },
      { id: 'q8',  text: 'Name 3 films this shares DNA with. For each one, identify one specific thing you\'re borrowing.' },
      { id: 'q9',  text: 'Where does your story sit on the comedy-drama spectrum?' },
      { id: 'q10', text: 'What is the dominant tone? (Satirical / earnest / bleak / hopeful / feverish / elegiac)' },
      { id: 'q11', text: 'What single emotion do you want the audience to leave with?' },
      { id: 'q12', text: 'What emotion should they feel in the first five minutes — before they know what the film is?' },
    ],
  },
  {
    id: 'theme', number: 3, title: 'Theme & Message', phase: 1,
    note: 'Theme is not a topic. Theme is an argument.',
    questions: [
      { id: 'q13', text: 'What is the central theme in a single phrase? (e.g., "Grief isolates us from the people who could save us")', seeds: 'theme_phrase' },
      { id: 'q14', text: 'What is the central question the story asks — but never fully, cleanly answers?', seeds: 'theme_question' },
      { id: 'q15', text: "What lie does your protagonist believe at the story's opening?" },
      { id: 'q16', text: 'What truth do they discover — or tragically fail to discover — by the end?' },
      { id: 'q17', text: "What is the story's thematic argument? What are you asserting is true about human nature?", seeds: 'theme_argument' },
      { id: 'q18', text: 'What is the opposing argument — what does your antagonist, or the world itself, argue back?' },
      { id: 'q19', text: 'What existing belief in the audience do you want to disturb?' },
      { id: 'q20', text: 'If your story were a piece of advice carved into a wall, what would it say?' },
    ],
  },
  {
    id: 'world', number: 4, title: 'World & Setting', phase: 1,
    note: "Your world should put pressure on your protagonist. If it doesn't, change it.",
    questions: [
      { id: 'q21', text: 'Where does this story take place? (Be specific — city, neighborhood, building)', seeds: 'world_location' },
      { id: 'q22', text: 'When does this story take place? (Exact era, season, decade — even time of day matters)', seeds: 'world_time' },
      { id: 'q23', text: 'What rules govern this world that differ from our own?', seeds: 'world_rules' },
      { id: 'q24', text: 'Describe this world sensorially — what does it smell, sound, and feel like underfoot?' },
      { id: 'q25', text: 'What is the social power structure of this world? (Class, government, religion, economy)', seeds: 'world_power' },
      { id: 'q26', text: "What is the biggest lie this world tells itself?", seeds: 'world_lie' },
      { id: 'q27', text: 'How does the setting directly trap or pressure your protagonist?' },
      { id: 'q28', text: 'What would be permanently lost if this world remains unchanged?' },
      { id: 'q29', text: 'What does your world look like to someone arriving for the first time?' },
    ],
  },
  {
    id: 'protagonist', number: 5, title: 'Protagonist', phase: 1,
    note: 'Know them better than they know themselves.',
    questions: [
      { id: 'q30', text: 'Who is your protagonist? (Name, age, occupation, living situation)', seeds: 'character_protagonist' },
      { id: 'q31', text: 'What do they want? (External goal — concrete, measurable, specific)' },
      { id: 'q32', text: 'What do they need? (Internal goal — psychological, emotional)' },
      { id: 'q33', text: 'Why are they the right and only person to tell this particular story?' },
      { id: 'q34', text: 'What makes them immediately compelling in the first scene — before we know their backstory?' },
      { id: 'q35', text: 'What is their greatest strength?' },
      { id: 'q36', text: "What is their fatal flaw — the thing that will drive the plot's problems?" },
      { id: 'q37', text: 'What wound from the past is still bleeding into their present behavior?' },
      { id: 'q38', text: 'What do they believe about themselves that is not true?' },
      { id: 'q39', text: "What do they refuse to do at the story's opening that they must do by the end?" },
      { id: 'q40', text: 'How do they speak? (Formal/casual, verbose/spare, literal/metaphorical, guarded/open)' },
      { id: 'q41', text: 'What does their appearance communicate — and is that communication accurate or a disguise?' },
      { id: 'q42', text: 'What are they most afraid of?' },
      { id: 'q43', text: 'What would they die for?' },
      { id: 'q44', text: 'What would they betray someone for?' },
      { id: 'q45', text: 'What would breaking their own moral code look like — and when does the story push them toward it?' },
    ],
  },
  {
    id: 'antagonist', number: 6, title: 'Antagonist / Opposition', phase: 1,
    note: "Your antagonist is right. That's what makes them dangerous.",
    questions: [
      { id: 'q46', text: 'Who or what is the primary source of opposition?', seeds: 'character_antagonist' },
      { id: 'q47', text: 'What does the antagonist want — in concrete, specific terms?' },
      { id: 'q48', text: 'Why does the antagonist believe they are right?' },
      { id: 'q49', text: 'In what way is the antagonist a mirror of the protagonist — same wound, different response?' },
      { id: 'q50', text: "What is the antagonist's justification for every harmful thing they do?" },
      { id: 'q51', text: "Could the antagonist be the hero of their own version of this story? Describe it in two sentences." },
      { id: 'q52', text: 'What would the antagonist sacrifice to win?' },
      { id: 'q53', text: 'Is the opposition a person, a system, a force, or internal? (It can be all four simultaneously)' },
      { id: 'q54', text: 'At what point does the antagonist come closest to being sympathetic?' },
    ],
  },
  {
    id: 'supporting', number: 7, title: 'Supporting Characters', phase: 1,
    note: "Every character is a version of your protagonist's possible futures.",
    questions: [
      { id: 'q55', text: "Who is the protagonist's closest ally — and what aspect of the theme do they embody?", seeds: 'character_ally' },
      { id: 'q56', text: "Who most directly challenges the protagonist's worldview?" },
      { id: 'q57', text: 'Who does the protagonist love or protect — and what does that relationship cost them?' },
      { id: 'q58', text: 'Who represents what the protagonist becomes if they fail?' },
      { id: 'q59', text: 'Who represents what the protagonist becomes if they succeed?' },
      { id: 'q60', text: 'Which functional roles are currently missing from your ensemble? (Mentor, skeptic, comic mirror, voice of truth)' },
      { id: 'q61', text: "Does any supporting character have a want that directly contradicts the protagonist's? How does that generate friction?" },
    ],
  },
  {
    id: 'structure', number: 8, title: 'Structural Beats', phase: 1,
    note: 'Beat by beat. No vague answers allowed. (Mapped to Save the Cat — adapt to your chosen framework.)',
    questions: [
      { id: 'q62', text: 'Opening Image — What single image opens the film, establishes tone, and shows the status quo?' },
      { id: 'q63', text: 'Theme Stated — Where is the thematic question posed — often without the protagonist realizing it?' },
      { id: 'q64', text: 'Setup — What world, character, and relationship elements must be established before the story begins?' },
      { id: 'q65', text: 'Catalyst — What specific event shatters the status quo? (~p.12 in a screenplay)' },
      { id: 'q66', text: 'Debate — What does the protagonist wrestle with before committing? What are the stakes of saying yes?' },
      { id: 'q67', text: 'Break into Two — What decision moves them into the new world?' },
      { id: 'q68', text: 'B Story — Who or what carries the emotional/thematic subplot? How does it comment on the A story?' },
      { id: 'q69', text: 'Fun and Games — What is the "promise of the premise" — the core concept being delivered?' },
      { id: 'q70', text: 'Midpoint — What false victory or false defeat resets the stakes?' },
      { id: 'q71', text: 'Bad Guys Close In — How does external pressure and internal doubt both intensify after the midpoint?' },
      { id: 'q72', text: "All Is Lost — What is the protagonist's lowest moment? What do they lose that cannot be recovered?" },
      { id: 'q73', text: 'Dark Night of the Soul — What do they confront in themselves in the silence after losing?' },
      { id: 'q74', text: 'Break into Three — What new idea or information sparks the path forward?' },
      { id: 'q75', text: "Finale — How does the protagonist apply what they've learned — doing what they never could have done in Act 1?" },
      { id: 'q76', text: 'Final Image — What image closes the film? How does it echo or invert the Opening Image?' },
    ],
  },
  {
    id: 'visual', number: 9, title: 'Visual Language', phase: 1,
    note: "Film is a visual medium. What your camera chooses to look at is the story.",
    questions: [
      { id: 'q77', text: 'What is the dominant color palette — and what does each primary color communicate emotionally?' },
      { id: 'q78', text: 'How does the palette shift across the three acts? What colors gain or lose prominence?' },
      { id: 'q79', text: 'What visual motif repeats throughout — an object, shape, architectural feature, piece of clothing?' },
      { id: 'q80', text: 'What does frame composition communicate about power? Who is centered, who is cut off, who is small?' },
      { id: 'q81', text: "How does light versus dark function symbolically? Who lives in shadow, who in light — and does it change?" },
      { id: 'q82', text: 'What weather or natural elements carry meaning in this world?' },
      { id: 'q83', text: "What is the visual metaphor for the protagonist's internal state at the low point?" },
      { id: 'q84', text: "If you stripped every scene to one still photograph, which would appear on the poster — and why?" },
    ],
  },
  {
    id: 'power', number: 10, title: 'Power Dynamics', phase: 1,
    note: "Power is the engine under every scene.",
    questions: [
      { id: 'q85', text: 'Who holds the most power at the start?' },
      { id: 'q86', text: 'Who holds the most power at the end — and is that good, bad, or ambiguous?' },
      { id: 'q87', text: 'What does power look like in your world? (Money, knowledge, violence, love, information, social standing)' },
      { id: 'q88', text: 'Who is being exploited — and who is doing the exploiting?' },
      { id: 'q89', text: "How does the protagonist's access to power change across the three acts?" },
      { id: 'q90', text: 'What system benefits from the protagonist remaining powerless?' },
      { id: 'q91', text: 'Does power corrupt any character? At what specific moment does it happen?' },
      { id: 'q92', text: 'What does the power shift in the climax look like — and who witnesses it?' },
    ],
  },
  {
    id: 'conflict', number: 11, title: 'Conflict Architecture', phase: 1,
    note: "Conflict is not argument. Conflict is two incompatible needs occupying the same space.",
    questions: [
      { id: 'q93', text: 'What is the primary conflict type? (Person vs. Person / Society / Nature / Self / Technology / Fate)' },
      { id: 'q94', text: 'What are the 2–3 secondary conflicts and how do they escalate the primary?' },
      { id: 'q95', text: 'At what point is the conflict most unwinnable — and why?' },
      { id: 'q96', text: 'What does the protagonist have to give up to resolve the conflict?' },
      { id: 'q97', text: 'Is the resolution earned or received? (Earned = protagonist changes and acts. Received = the world changes for them.)' },
    ],
  },
  {
    id: 'emotional', number: 12, title: 'Emotional Architecture', phase: 1,
    note: "Map how the audience feels. Their experience is your responsibility.",
    questions: [
      { id: 'q98',  text: "What is the audience's emotional state in the very first scene?" },
      { id: 'q99',  text: 'What is the first moment of genuine surprise — the first beat that subverts an expectation?' },
      { id: 'q100', text: "Where is the story's biggest laugh (if any)?" },
      { id: 'q101', text: "Where is the story's biggest gut-punch?" },
      { id: 'q102', text: 'What moment will make the audience disagree with each other on the drive home?' },
      { id: 'q103', text: 'What is the last image or line the audience carries out of the theater?' },
      { id: 'q104', text: 'If the audience cries, when — and why at that specific moment and not another?' },
    ],
  },
  {
    id: 'motifs', number: 13, title: 'Motifs & Symbolism', phase: 1,
    note: "Repetition with variation is how films speak in subtext.",
    questions: [
      { id: 'q105', text: 'What recurring object, phrase, or image carries meaning across all three acts?', seeds: 'theme_motif' },
      { id: 'q106', text: 'If any of these appear in your story, what do they represent: water, fire, blood, earth, mirrors, windows, doors, stairs?' },
      { id: 'q107', text: 'Do any character names carry etymological or symbolic meaning? Should they?' },
      { id: 'q108', text: 'What does silence represent in your story — and when is it most powerful?' },
      { id: 'q109', text: 'What does your protagonist physically do with their hands when nervous, thinking, or lying? Does that gesture reappear?' },
    ],
  },
  {
    id: 'research', number: 14, title: 'Authenticity & Research', phase: 1,
    note: "You owe the audience your homework.",
    questions: [
      { id: 'q110', text: 'What aspects of this world do you need to research before writing a word?' },
      { id: 'q111', text: 'Who has lived experience in this world that you could consult before getting it wrong?' },
      { id: 'q112', text: 'What is the most common cliché of this genre — and how are you actively dismantling it?' },
      { id: 'q113', text: "What assumption about your protagonist's world have you not yet challenged?" },
      { id: 'q114', text: "What is the hardest scene to write in this story — and why haven't you solved it yet?" },
    ],
  },
  {
    id: 'irreplaceable', number: 15, title: 'What Makes This Irreplaceable', phase: 1,
    note: "If you can't answer these, you're not ready to write yet.",
    questions: [
      { id: 'q115', text: 'What is the one thing in this story no one has ever done in quite this way before?' },
      { id: 'q116', text: 'If someone asked "why this story, why right now, why you?" — what is your 30-second answer?' },
      { id: 'q117', text: 'What does this story give the audience that they cannot get anywhere else?' },
      { id: 'q118', text: 'What are you most afraid of getting wrong — and what are you doing about it?' },
    ],
  },

  // ─── PHASE 2: DIRECTOR'S LAYER ────────────────────────────────────────────
  {
    id: 'vision', number: 16, title: "Director's Vision", phase: 2,
    note: "Before briefing a single department head, a director knows their own film cold.",
    questions: [
      { id: 'q119', text: 'What is your single guiding metaphor for the visual language of this film?' },
      { id: 'q120', text: "If you had to describe this film's look in one sentence to your Director of Photography — what would you say?" },
      { id: 'q121', text: "What 3 existing films would you show your DP as visual reference — and what specific element are you borrowing from each?" },
      { id: 'q122', text: 'What 3 films would you show your Production Designer — and for what reason?' },
      { id: 'q123', text: "What is the camera's relationship to the protagonist? (Intimate/distant? Handheld/locked? Does it lead them or follow them?)" },
      { id: 'q124', text: 'Does the camera have a point of view — or is it an invisible observer?' },
      { id: 'q125', text: 'At what moments does the camera language change — and what does that change communicate?' },
    ],
  },
  {
    id: 'sound', number: 17, title: 'Sound & Music', phase: 2,
    note: 'Half of what an audience "sees" is what they hear.',
    questions: [
      { id: 'q126', text: 'What does this film sound like before a single note of score is played? (Ambient sound, silence, industrial noise, nature)' },
      { id: 'q127', text: 'What genre or texture of score does this film demand? (Orchestral? Electronic? Silence? Diegetic only? Jazz? Folk?)' },
      { id: 'q128', text: 'Name 3 existing pieces of music that live in the emotional world of your film.' },
      { id: 'q129', text: 'Is there a song or piece of music that lives inside the story itself — heard by the characters? What does it mean to them?' },
      { id: 'q130', text: 'What does silence accomplish that music cannot — and where does your story need it most?' },
      { id: 'q131', text: 'Are there any sound motifs — a recurring noise, voice, effect — that carry symbolic weight across the film?' },
    ],
  },
  {
    id: 'casting', number: 18, title: 'Casting & Performance', phase: 2,
    note: "Casting is 75% of directing. The right actor solves problems you haven't found yet.",
    questions: [
      { id: 'q132', text: 'What does your protagonist feel like — not described, but felt? What quality does the actor need to carry in their eyes?' },
      { id: 'q133', text: 'What type of actor process does this role require? (Methodical interiority? Spontaneity? Physical transformation? Stillness?)' },
      { id: 'q134', text: 'What is the one scene you would use as an audition scene — and what specifically are you looking for?' },
      { id: 'q135', text: "Is there a real person whose physicality or energy informs your protagonist's casting?" },
      { id: 'q136', text: "What conversation would you have with your lead actor before rehearsals begin — what do you need them to understand that isn't on the page?" },
      { id: 'q137', text: 'What rehearsal process does this film require? (Table reads? Physical? No rehearsal — first-take rawness?)' },
    ],
  },
  {
    id: 'scene', number: 19, title: 'Scene-Level Questions', phase: 2,
    note: "Every scene must earn its place. Ask these about each individual scene as you write.",
    questions: [
      { id: 'q138', text: "What is this scene's single dramatic function? (Establish / Complicate / Reverse / Reveal / Escalate / Resolve)" },
      { id: 'q139', text: 'What does each character want in this scene — and are those wants in conflict?' },
      { id: 'q140', text: 'What is the scene\'s subtext — what is being said beneath what is being spoken?' },
      { id: 'q141', text: 'What is the visual action of this scene? (Not dialogue — what is the camera actually looking at?)' },
      { id: 'q142', text: "How does this scene end differently than it begins? (If the scene doesn't shift something, cut it.)" },
      { id: 'q143', text: 'Could this scene be told without dialogue? If yes, should it be?' },
    ],
  },
  {
    id: 'departments', number: 20, title: 'Department Briefings', phase: 2,
    note: "What you tell each department head determines what appears on screen.",
    questions: [
      { id: 'q144', text: "What do you tell your Costume Designer about each character's arc? (Costumes should track transformation.)" },
      { id: 'q145', text: 'What do you tell your Production Designer about the physical world? (How do locations reflect psychological state?)' },
      { id: 'q146', text: 'What do you tell your Editor before the first frame is cut? (Rhythm, pace, the emotional target of each sequence)' },
      { id: 'q147', text: 'What do you tell your VFX or Special Effects supervisor — and which effects serve story vs. spectacle?' },
    ],
  },
  {
    id: 'pitch', number: 21, title: 'The Pitch', phase: 2,
    note: "This film exists in your head. To get it made, you must put it in someone else's head in 2 minutes.",
    questions: [
      { id: 'q148', text: 'What is your logline? (One sentence: protagonist + want + obstacle + stakes. No more.)' },
      { id: 'q149', text: 'What is your elevator pitch? (Two sentences that make someone say "I need to see that.")' },
      { id: 'q150', text: 'What is the comparable title formula? (e.g., "Arrival meets Ordinary People" — concept + emotional register)' },
    ],
  },
]

// All 150 question IDs in order (for progress counting)
export const ALL_QUESTION_IDS = SECTIONS.flatMap(s => s.questions.map(q => q.id))

// Questions tagged for seeding other tabs
export const SEED_QUESTIONS = {
  theme_phrase:          'q13',
  theme_question:        'q14',
  theme_argument:        'q17',
  theme_motif:           'q105',
  world_location:        'q21',
  world_time:            'q22',
  world_rules:           'q23',
  world_power:           'q25',
  world_lie:             'q26',
  character_protagonist: 'q30',
  character_antagonist:  'q46',
  character_ally:        'q55',
}

export const CLOSING_QUESTION = 'If this film gets made exactly as you envision it — what will it have put into the world that wasn\'t there before?'

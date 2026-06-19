export const metadata = {
  title: 'The 150-Question Story Development Questionnaire — Eve',
  description: 'The complete framework writers and directors use to develop a story before a single word is written. 150 questions across 21 sections, from loose idea to production-ready vision.',
  openGraph: {
    title: 'The 150-Question Story Development Questionnaire',
    description: 'From loose idea to locked vision. Every question a writer and director must answer before a camera rolls.',
    url: 'https://eve-screenwriting.vercel.app/questionnaire',
  },
}

const PHASE_ONE = [
  {
    id: 'seed',
    number: 1,
    title: 'The Seed',
    range: '1–5',
    note: 'Before you build anything, understand what you actually have.',
    questions: [
      'In one sentence, what happens in your story? (External plot)',
      'In one sentence, what is your story actually about? (Theme — not plot)',
      'What was the original spark — an image, a feeling, a "what if," a headline, a person?',
      'Who is this story for? Who in the audience will feel genuinely seen by it?',
      'Why do you need to be the one to tell this story?',
    ],
  },
  {
    id: 'genre',
    number: 2,
    title: 'Genre & Tone',
    range: '6–12',
    note: 'Genre is a contract with the audience. Know what you\'re promising.',
    questions: [
      'What is the primary genre?',
      'Is there a secondary genre? What\'s the blend — and where do the two genres most interestingly collide?',
      'Name 3 films this shares DNA with. For each one, identify one specific thing you\'re borrowing.',
      'Where does your story sit on the comedy-drama spectrum?',
      'What is the dominant tone? (Satirical / earnest / bleak / hopeful / feverish / elegiac)',
      'What single emotion do you want the audience to leave with?',
      'What emotion should they feel in the first five minutes — before they know what the film is?',
    ],
  },
  {
    id: 'theme',
    number: 3,
    title: 'Theme & Message',
    range: '13–20',
    note: 'Theme is not a topic. Theme is an argument.',
    questions: [
      'What is the central theme in a single phrase? (e.g., "Grief isolates us from the people who could save us")',
      'What is the central question the story asks — but never fully, cleanly answers?',
      'What lie does your protagonist believe at the story\'s opening?',
      'What truth do they discover — or tragically fail to discover — by the end?',
      'What is the story\'s thematic argument? What are you asserting is true about human nature?',
      'What is the opposing argument — what does your antagonist, or the world itself, argue back?',
      'What existing belief in the audience do you want to disturb?',
      'If your story were a piece of advice carved into a wall, what would it say?',
    ],
  },
  {
    id: 'world',
    number: 4,
    title: 'World & Setting',
    range: '21–29',
    note: 'Your world should put pressure on your protagonist. If it doesn\'t, change it.',
    questions: [
      'Where does this story take place? (Be specific — city, neighborhood, building)',
      'When does this story take place? (Exact era, season, decade — even time of day matters)',
      'What rules govern this world that differ from our own?',
      'Describe this world sensorially — what does it smell, sound, and feel like underfoot?',
      'What is the social power structure of this world? (Class, government, religion, economy)',
      'What is the biggest lie this world tells itself?',
      'How does the setting directly trap or pressure your protagonist?',
      'What would be permanently lost if this world remains unchanged?',
      'What does your world look like to someone arriving for the first time?',
    ],
  },
  {
    id: 'protagonist',
    number: 5,
    title: 'Protagonist',
    range: '30–45',
    note: 'Know them better than they know themselves.',
    questions: [
      'Who is your protagonist? (Name, age, occupation, living situation)',
      'What do they want? (External goal — concrete, measurable, specific)',
      'What do they need? (Internal goal — psychological, emotional)',
      'Why are they the right and only person to tell this particular story?',
      'What makes them immediately compelling in the first scene — before we know their backstory?',
      'What is their greatest strength?',
      'What is their fatal flaw — the thing that will drive the plot\'s problems?',
      'What wound from the past is still bleeding into their present behavior?',
      'What do they believe about themselves that is not true?',
      'What do they refuse to do at the story\'s opening that they must do by the end?',
      'How do they speak? (Formal/casual, verbose/spare, literal/metaphorical, guarded/open)',
      'What does their appearance communicate — and is that communication accurate or a disguise?',
      'What are they most afraid of?',
      'What would they die for?',
      'What would they betray someone for?',
      'What would breaking their own moral code look like — and when does the story push them toward it?',
    ],
  },
  {
    id: 'antagonist',
    number: 6,
    title: 'Antagonist / Opposition',
    range: '46–54',
    note: 'Your antagonist is right. That\'s what makes them dangerous.',
    questions: [
      'Who or what is the primary source of opposition?',
      'What does the antagonist want — in concrete, specific terms?',
      'Why does the antagonist believe they are right?',
      'In what way is the antagonist a mirror of the protagonist — same wound, different response?',
      'What is the antagonist\'s justification for every harmful thing they do?',
      'Could the antagonist be the hero of their own version of this story? Describe it in two sentences.',
      'What would the antagonist sacrifice to win?',
      'Is the opposition a person, a system, a force, or internal? (It can be all four simultaneously)',
      'At what point does the antagonist come closest to being sympathetic?',
    ],
  },
  {
    id: 'supporting',
    number: 7,
    title: 'Supporting Characters',
    range: '55–61',
    note: 'Every character is a version of your protagonist\'s possible futures.',
    questions: [
      'Who is the protagonist\'s closest ally — and what aspect of the theme do they embody?',
      'Who most directly challenges the protagonist\'s worldview?',
      'Who does the protagonist love or protect — and what does that relationship cost them?',
      'Who represents what the protagonist becomes if they fail?',
      'Who represents what the protagonist becomes if they succeed?',
      'Which functional roles are currently missing from your ensemble? (Mentor, skeptic, comic mirror, voice of truth)',
      'Does any supporting character have a want that directly contradicts the protagonist\'s? How does that generate friction?',
    ],
  },
  {
    id: 'structure',
    number: 8,
    title: 'Structural Beats (Save the Cat)',
    range: '62–76',
    note: 'Beat by beat. No vague answers allowed.',
    questions: [
      'Opening Image — What single image opens the film, establishes tone, and shows the status quo?',
      'Theme Stated — Where is the thematic question posed — often without the protagonist realizing it?',
      'Setup — What world, character, and relationship elements must be established before the story begins?',
      'Catalyst — What specific event shatters the status quo? (Screenplay: ~p.12)',
      'Debate — What does the protagonist wrestle with before committing? What are the stakes of saying yes?',
      'Break into Two — What decision moves them into the new world?',
      'B Story — Who or what carries the emotional/thematic subplot? How does it comment on the A story?',
      'Fun and Games — What is the "promise of the premise" — the core concept being delivered?',
      'Midpoint — What false victory or false defeat resets the stakes?',
      'Bad Guys Close In — How does external pressure and internal doubt both intensify after the midpoint?',
      'All Is Lost — What is the protagonist\'s lowest moment? What do they lose that cannot be recovered?',
      'Dark Night of the Soul — What do they confront in themselves in the silence after losing?',
      'Break into Three — What new idea or information sparks the path forward?',
      'Finale — How does the protagonist apply what they\'ve learned — doing what they never could have done in Act 1?',
      'Final Image — What image closes the film? How does it echo or invert the Opening Image?',
    ],
  },
  {
    id: 'visual',
    number: 9,
    title: 'Visual Language',
    range: '77–84',
    note: 'Film is a visual medium. What your camera chooses to look at is the story.',
    questions: [
      'What is the dominant color palette — and what does each primary color communicate emotionally?',
      'How does the palette shift across the three acts? What colors gain or lose prominence?',
      'What visual motif repeats throughout — an object, shape, architectural feature, piece of clothing?',
      'What does frame composition communicate about power? Who is centered, who is cut off, who is small?',
      'How does light versus dark function symbolically? Who lives in shadow, who in light — and does it change?',
      'What weather or natural elements carry meaning in this world?',
      'What is the visual metaphor for the protagonist\'s internal state at the low point?',
      'If you stripped every scene to one still photograph, which would appear on the poster — and why?',
    ],
  },
  {
    id: 'power',
    number: 10,
    title: 'Power Dynamics',
    range: '85–92',
    note: 'Power is the engine under every scene. Who has it, who wants it, who\'s afraid of it.',
    questions: [
      'Who holds the most power at the start?',
      'Who holds the most power at the end — and is that good, bad, or ambiguous?',
      'What does power look like in your world? (Money, knowledge, violence, love, information, social standing)',
      'Who is being exploited — and who is doing the exploiting?',
      'How does the protagonist\'s access to power change across the three acts?',
      'What system benefits from the protagonist remaining powerless?',
      'Does power corrupt any character? At what specific moment does it happen?',
      'What does the power shift in the climax look like — and who witnesses it?',
    ],
  },
  {
    id: 'conflict',
    number: 11,
    title: 'Conflict Architecture',
    range: '93–97',
    note: 'Conflict is not argument. Conflict is two incompatible needs occupying the same space.',
    questions: [
      'What is the primary conflict type? (Person vs. Person / Society / Nature / Self / Technology / Fate)',
      'What are the 2–3 secondary conflicts and how do they escalate the primary?',
      'At what point is the conflict most unwinnable — and why?',
      'What does the protagonist have to give up to resolve the conflict?',
      'Is the resolution earned or received? (Earned = protagonist changes and acts. Received = the world changes for them.)',
    ],
  },
  {
    id: 'emotional',
    number: 12,
    title: 'Emotional Architecture',
    range: '98–104',
    note: 'Map how the audience feels. Their experience is your responsibility.',
    questions: [
      'What is the audience\'s emotional state in the very first scene?',
      'What is the first moment of genuine surprise — the first beat that subverts an expectation?',
      'Where is the story\'s biggest laugh (if any)?',
      'Where is the story\'s biggest gut-punch?',
      'What moment will make the audience disagree with each other on the drive home?',
      'What is the last image or line the audience carries out of the theater?',
      'If the audience cries, when — and why at that specific moment and not another?',
    ],
  },
  {
    id: 'motifs',
    number: 13,
    title: 'Motifs & Symbolism',
    range: '105–109',
    note: 'Repetition with variation is how films speak in subtext.',
    questions: [
      'What recurring object, phrase, or image carries meaning across all three acts?',
      'If any of these appear in your story, what do they represent: water, fire, blood, earth, mirrors, windows, doors, stairs?',
      'Do any character names carry etymological or symbolic meaning? Should they?',
      'What does silence represent in your story — and when is it most powerful?',
      'What does your protagonist physically do with their hands when nervous, thinking, or lying? Does that gesture reappear?',
    ],
  },
  {
    id: 'research',
    number: 14,
    title: 'Authenticity & Research',
    range: '110–114',
    note: 'You owe the audience your homework.',
    questions: [
      'What aspects of this world do you need to research before writing a word?',
      'Who has lived experience in this world that you could consult before getting it wrong?',
      'What is the most common cliché of this genre — and how are you actively dismantling it?',
      'What assumption about your protagonist\'s world have you not yet challenged?',
      'What is the hardest scene to write in this story — and why haven\'t you solved it yet?',
    ],
  },
  {
    id: 'irreplaceable',
    number: 15,
    title: 'What Makes This Irreplaceable',
    range: '115–118',
    note: 'If you can\'t answer these, you\'re not ready to write yet.',
    questions: [
      'What is the one thing in this story no one has ever done in quite this way before?',
      'If someone asked "why this story, why right now, why you?" — what is your 30-second answer?',
      'What does this story give the audience that they cannot get anywhere else?',
      'What are you most afraid of getting wrong — and what are you doing about it?',
    ],
  },
]

const PHASE_TWO = [
  {
    id: 'vision',
    number: 16,
    title: 'The Director\'s Vision Document',
    range: '119–125',
    note: 'Before briefing a single department head, a director knows their own film cold.',
    questions: [
      'What is your single guiding metaphor for the visual language of this film? (Fincher on Zodiac: "a procedural drowning in its own paperwork" — every visual choice followed that metaphor.)',
      'If you had to describe this film\'s look in one sentence to your Director of Photography — what would you say?',
      'What 3 existing films would you show your DP as visual reference — and what specific element are you borrowing from each?',
      'What 3 films would you show your Production Designer — and for what reason?',
      'What is the camera\'s relationship to the protagonist? (Intimate/distant? Handheld/locked? Does it lead them or follow them?)',
      'Does the camera have a point of view — or is it an invisible observer?',
      'At what moments does the camera language change — and what does that change communicate?',
    ],
  },
  {
    id: 'sound',
    number: 17,
    title: 'Sound & Music',
    range: '126–131',
    note: 'Half of what an audience "sees" is what they hear. Most writers never think about this.',
    questions: [
      'What does this film sound like before a single note of score is played? (Ambient sound, silence, industrial noise, nature — what is the sonic world?)',
      'What genre or texture of score does this film demand? (Orchestral? Electronic? Silence? Diegetic music only? Jazz? Folk?)',
      'Name 3 existing pieces of music — score, song, anything — that live in the emotional world of your film.',
      'Is there a song or piece of music that lives inside the story itself — heard by the characters? What does it mean to them?',
      'What does silence accomplish that music cannot — and where does your story need it most?',
      'Are there any sound motifs — a recurring noise, voice, effect — that carry symbolic weight across the film?',
    ],
  },
  {
    id: 'casting',
    number: 18,
    title: 'Casting & Performance Direction',
    range: '132–137',
    note: 'Casting is 75% of directing. The right actor solves problems you haven\'t found yet.',
    questions: [
      'What does your protagonist feel like — not described, but felt? What quality does the actor need to carry in their eyes?',
      'What type of actor process does this role require? (Methodical interiority? Spontaneity? Physical transformation? Stillness?)',
      'What is the one scene you would use as an audition scene — and what specifically are you looking for in it?',
      'Is there a real person (living or historical) whose physicality or energy informs your protagonist\'s casting?',
      'What conversation would you have with your lead actor before rehearsals begin — what do you need them to understand that isn\'t on the page?',
      'What rehearsal process does this film require? (Table reads? Physical rehearsal? No rehearsal — some directors prefer first-take rawness.)',
    ],
  },
  {
    id: 'scene',
    number: 19,
    title: 'Scene-Level Questions',
    range: '138–143',
    note: 'Every scene must earn its place. Ask these about each individual scene.',
    questions: [
      'What is this scene\'s single dramatic function? (Establish / Complicate / Reverse / Reveal / Escalate / Resolve)',
      'What does each character want in this scene — and are those wants in conflict?',
      'What is the scene\'s subtext — what is being said beneath what is being spoken?',
      'What is the visual action of this scene? (Not dialogue — what is the camera actually looking at?)',
      'How does this scene end differently than it begins? (If the scene doesn\'t shift something, cut it.)',
      'Could this scene be told without dialogue? If yes, should it be?',
    ],
  },
  {
    id: 'departments',
    number: 20,
    title: 'Department Briefings',
    range: '144–147',
    note: 'What you tell each department head determines what appears on screen.',
    questions: [
      'What do you tell your Costume Designer about each character\'s arc? (Costumes should track transformation — what does the protagonist wear at the start vs. the end, and why?)',
      'What do you tell your Production Designer about the physical world? (How do locations reflect the psychological state of your characters? What does the space do to them?)',
      'What do you tell your Editor before the first frame is cut? (Rhythm, pace, the emotional target of each sequence — what feeling should each cut create?)',
      'What do you tell your VFX or Special Effects supervisor — and which effects serve story vs. which are spectacle for its own sake?',
    ],
  },
  {
    id: 'pitch',
    number: 21,
    title: 'The Pitch Layer',
    range: '148–150',
    note: 'This film exists in your head. To get it made, you must put it in someone else\'s head in 2 minutes.',
    questions: [
      'What is your logline? (One sentence: protagonist + want + obstacle + stakes. No more.)',
      'What is your elevator pitch? (Two sentences that make someone say "I need to see that.")',
      'What is the comparable title formula? (e.g., "Arrival meets Ordinary People" — one film for the concept, one for the emotional register)',
    ],
  },
]

function QuestionItem({ number, text }) {
  return (
    <div style={{ display:'flex',gap:'16px',padding:'14px 0',borderBottom:'1px solid var(--border)' }}>
      <span style={{
        flexShrink:0,
        fontFamily:'var(--font-mono)',
        fontSize:'11px',
        color:'var(--text-soft)',
        lineHeight:'1.6',
        minWidth:'28px',
        paddingTop:'2px',
      }}>{number}</span>
      <p style={{ margin:0,fontSize:'15px',lineHeight:'1.65',color:'var(--text-dark)',fontFamily:'var(--font-ui)' }}>{text}</p>
    </div>
  )
}

function SectionBlock({ section, startNum, phaseColor }) {
  return (
    <div id={section.id} style={{ marginBottom:'52px' }}>
      <div style={{ display:'flex',alignItems:'baseline',gap:'12px',marginBottom:'6px' }}>
        <span style={{
          fontFamily:'var(--font-mono)',
          fontSize:'10px',
          fontWeight:'600',
          letterSpacing:'0.12em',
          textTransform:'uppercase',
          color: phaseColor,
          background: phaseColor + '18',
          padding:'3px 9px',
          borderRadius:'100px',
          flexShrink:0,
        }}>
          Section {section.number}
        </span>
        <span style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--text-soft)',letterSpacing:'0.04em' }}>
          Q{section.range}
        </span>
      </div>

      <h2 style={{
        fontFamily:'var(--font-display)',
        fontSize:'22px',
        fontWeight:'700',
        color:'var(--text-dark)',
        margin:'0 0 6px',
        letterSpacing:'-0.02em',
      }}>{section.title}</h2>

      <p style={{
        fontFamily:'var(--font-ui)',
        fontSize:'13.5px',
        color:'var(--text-mid)',
        fontStyle:'italic',
        margin:'0 0 20px',
        lineHeight:'1.5',
      }}>{section.note}</p>

      <div style={{ borderTop:'1px solid var(--border)' }}>
        {section.questions.map((q, i) => (
          <QuestionItem key={i} number={startNum + i} text={q} />
        ))}
      </div>
    </div>
  )
}

export default function QuestionnairePage() {
  let p1Counter = 1
  let p2Counter = 119

  return (
    <div style={{ minHeight:'100vh',background:'var(--off-white)' }}>

      {/* Hero */}
      <div style={{ background:'var(--warm-white)',borderBottom:'1px solid var(--border)',padding:'52px 24px 44px' }}>
        <div style={{ maxWidth:'780px',margin:'0 auto' }}>
          <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px' }}>
            <span style={{
              fontFamily:'var(--font-mono)',
              fontSize:'10px',
              fontWeight:'600',
              letterSpacing:'0.12em',
              textTransform:'uppercase',
              color:'var(--green)',
              background:'var(--green-pale)',
              padding:'4px 10px',
              borderRadius:'100px',
            }}>
              Reference
            </span>
            <span style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--text-soft)' }}>150 questions — 21 sections</span>
          </div>

          <h1 style={{
            fontFamily:'var(--font-display)',
            fontSize:'clamp(28px, 4vw, 40px)',
            fontWeight:'800',
            color:'var(--text-dark)',
            letterSpacing:'-0.03em',
            lineHeight:'1.15',
            margin:'0 0 16px',
          }}>
            The Story Development Questionnaire
          </h1>

          <p style={{ fontFamily:'var(--font-ui)',fontSize:'17px',color:'var(--text-mid)',lineHeight:'1.65',margin:'0 0 28px',maxWidth:'640px' }}>
            Every question a writer and director must answer before a camera rolls.
            From loose idea to locked vision — the complete pre-production interrogation.
          </p>

          <div style={{ display:'flex',flexWrap:'wrap',gap:'12px' }}>
            {[
              { label:'Average development time in Hollywood', value:'800 days' },
              { label:'Principal photography (actual filming)', value:'30–90 days' },
              { label:'Questions in this document', value:'150' },
            ].map((stat, i) => (
              <div key={i} style={{
                background:'var(--off-white)',
                border:'1px solid var(--border)',
                borderRadius:'10px',
                padding:'14px 20px',
              }}>
                <div style={{ fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:'800',color:'var(--green)',letterSpacing:'-0.02em' }}>{stat.value}</div>
                <div style={{ fontFamily:'var(--font-ui)',fontSize:'12px',color:'var(--text-soft)',marginTop:'3px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:'780px',margin:'0 auto',padding:'48px 24px 80px' }}>

        {/* Phase 1 Banner */}
        <div style={{
          background:'var(--green-pale)',
          border:'1px solid var(--green-border)',
          borderRadius:'12px',
          padding:'20px 24px',
          marginBottom:'44px',
        }}>
          <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px' }}>
            <div style={{ width:'8px',height:'8px',borderRadius:'50%',background:'var(--green)',flexShrink:0 }}/>
            <span style={{ fontFamily:'var(--font-mono)',fontSize:'10px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--green)' }}>
              Phase 1 — The Writer's Layer
            </span>
          </div>
          <p style={{ fontFamily:'var(--font-ui)',fontSize:'14px',color:'var(--text-mid)',margin:0,lineHeight:'1.6' }}>
            Questions 1–118. This is where the story is invented, argued over, and pressure-tested.
            In Hollywood, this phase averages 800 days before cameras roll.
            Writers who also direct (Nolan, Tarantino, Kubrick) live in this layer for years before anyone else touches the project.
          </p>
        </div>

        {/* Phase 1 Sections */}
        {PHASE_ONE.map(section => {
          const start = p1Counter
          p1Counter += section.questions.length
          return <SectionBlock key={section.id} section={section} startNum={start} phaseColor="var(--green)" />
        })}

        {/* Divider */}
        <div style={{ margin:'16px 0 44px',height:'1px',background:'var(--border)' }}/>

        {/* Phase 2 Banner */}
        <div style={{
          background:'#f5f0ff',
          border:'1px solid #d4c6f0',
          borderRadius:'12px',
          padding:'20px 24px',
          marginBottom:'44px',
        }}>
          <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px' }}>
            <div style={{ width:'8px',height:'8px',borderRadius:'50%',background:'#7c3aed',flexShrink:0 }}/>
            <span style={{ fontFamily:'var(--font-mono)',fontSize:'10px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',color:'#7c3aed' }}>
              Phase 2 — The Director's Layer
            </span>
          </div>
          <p style={{ fontFamily:'var(--font-ui)',fontSize:'14px',color:'var(--text-mid)',margin:0,lineHeight:'1.6' }}>
            Questions 119–150. Pre-production: where the story becomes a film.
            A director translates every story decision into a visual, auditory, physical, and logistical plan.
            This phase typically runs 3–6 months — but meticulous directors have spent years here.
          </p>
        </div>

        {/* Phase 2 Sections */}
        {PHASE_TWO.map(section => {
          const start = p2Counter
          p2Counter += section.questions.length
          return <SectionBlock key={section.id} section={section} startNum={start} phaseColor="#7c3aed" />
        })}

        {/* Closing Note */}
        <div style={{
          marginTop:'20px',
          padding:'28px 32px',
          background:'var(--warm-white)',
          border:'1px solid var(--border)',
          borderRadius:'14px',
          textAlign:'center',
        }}>
          <p style={{ fontFamily:'var(--font-display)',fontSize:'18px',fontWeight:'700',color:'var(--text-dark)',margin:'0 0 10px',letterSpacing:'-0.01em' }}>
            The Closing Question
          </p>
          <p style={{ fontFamily:'var(--font-ui)',fontSize:'15px',color:'var(--text-mid)',lineHeight:'1.65',margin:'0 0 16px',fontStyle:'italic' }}>
            This one goes at the end because most writers can't answer it honestly until they've answered everything above.
          </p>
          <p style={{ fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:'600',color:'var(--text-dark)',margin:0,lineHeight:'1.5' }}>
            If this film gets made exactly as you envision it — what will it have put into the world that wasn't there before?
          </p>
        </div>

        <p style={{ fontFamily:'var(--font-mono)',fontSize:'12px',color:'var(--text-soft)',textAlign:'center',marginTop:'32px',letterSpacing:'0.04em' }}>
          150 questions — answer them all — the ones that stump you are the load-bearing walls
        </p>
      </div>
    </div>
  )
}

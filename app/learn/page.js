import Link from 'next/link'

export const metadata = {
  title: "Free Screenwriting & Story Craft Lessons — Structure, Character, Dialogue",
  description: "Free lessons on screenwriting craft, novel writing, and story structure. Covers three-act structure, character arc, dialogue subtext, theme, point of view, adaptation, and Shakespeare. Written by humans. No AI. Grounded in McKee, Aristotle, Truby, and Weiland.",
  keywords: "free screenwriting lessons, how to write a screenplay, story structure lessons, character arc, dialogue writing, how to write a novel, point of view fiction, adaptation screenwriting, save the cat beats, hero journey steps, screenwriting course free, film school alternative online",
  openGraph: {
    title: "Free Screenwriting & Story Craft Lessons",
    description: "35+ lessons on structure, character, dialogue, theme, POV, and adaptation. For screenwriters and novelists. Free forever.",
    url: "https://eve-screenwriting.vercel.app/learn",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/learn",
  },
}


const lessons = [
  {
    category: 'Structure',
    badge: 'Structure',
    items: [
      { title: 'What a scene actually does', slug: 'what-a-scene-does', time: '6 min', level: 'Beginner', preview: 'Every scene must do at least two things simultaneously. If it only does one, it is a candidate for the cutting room floor.' },
      { title: 'The midpoint is the spine', slug: 'midpoint', time: '6 min', level: 'Intermediate', preview: 'Remove your midpoint and your story collapses. It is not a scene in the middle — it is the event that divides your story into a before and an after.' },
      { title: 'Act breaks: what they are and why they matter', slug: 'act-breaks', time: '7 min', level: 'Beginner', preview: 'An act break is a point of no return. Something must change so completely that your story can never go back to what it was.' },
      { title: 'The All Is Lost beat', slug: 'all-is-lost', time: '6 min', level: 'Beginner', preview: 'Before your hero can win, they must lose everything. If your hero can recover without changing, the beat is not working.' },
      { title: 'The opening image: first impressions that last', slug: 'opening-image', time: '5 min', level: 'Beginner', preview: 'The opening image is not decoration. It is a thesis statement — a compressed version of the entire story that the audience will only understand in retrospect.' },
    ],
  },
  {
    category: 'Scene Craft',
    badge: 'Scene',
    items: [
      { title: 'Enter late, leave early', slug: 'enter-late-leave-early', time: '3 min', level: 'Beginner', preview: 'Every scene has a moment before the real thing starts and a moment after it ends. You do not need either of them.' },
      { title: 'The scene turn', slug: 'scene-turn', time: '4 min', level: 'Beginner', preview: 'A scene without a turn is a scene without a point. Something must shift — in power, in knowledge, in relationship — before the scene ends.' },
      { title: 'Writing tension without action', slug: 'tension-without-action', time: '4 min', level: 'Intermediate', preview: 'The most tense scenes are often the quietest. Tension is not what happens — it is the gap between what could happen and what the audience is afraid will.' },
      { title: 'The location is never just a location', slug: 'location-as-character', time: '3 min', level: 'Beginner', preview: 'Where a scene happens shapes what can happen in it. The best locations externalize the interior state of the scene.' },
      { title: 'How to end a scene so the next one cannot wait', slug: 'scene-endings', time: '4 min', level: 'Intermediate', preview: 'The way a scene ends determines whether the audience stays. The last beat of every scene is a promise about what comes next.' },
    ],
  },
  {
    category: 'Character',
    badge: 'Character',
    items: [
      { title: 'Want vs. Need: the engine of every great character', slug: 'want-vs-need', time: '7 min', level: 'Beginner', preview: 'Your protagonist wants something they can name. They need something they cannot see yet. The gap between those two things is where your story lives.' },
      { title: 'The ghost: what happened before page one', slug: 'ghost', time: '6 min', level: 'Beginner', preview: 'Every compelling character carries a wound from before the story starts. This ghost shapes every decision they make — even when they do not know it.' },
      { title: 'Writing villains that work', slug: 'writing-villains', time: '6 min', level: 'Intermediate', preview: 'Weak villains are evil because the plot requires it. Great villains have a worldview. They believe they are right.' },
      { title: 'Making your antagonist as strong as your hero', slug: 'antagonist', time: '7 min', level: 'Intermediate', preview: 'A weak antagonist makes a weak story. Your antagonist should be the hero of their own story — with a worldview that is internally consistent, even if it is wrong.' },
      { title: 'Secondary characters who earn their place', slug: 'secondary-characters', time: '4 min', level: 'Intermediate', preview: 'The best secondary characters challenge the hero. Every person in your story should want something, even if it is just a glass of water.' },
      { title: 'The lie your character believes', slug: 'the-lie', time: '4 min', level: 'Beginner', preview: 'Every great protagonist believes something false — a deep, organizing lie they have built their life around. The story is the process of dismantling it.' },
      { title: 'How a character arc actually works', slug: 'character-arc', time: '5 min', level: 'Intermediate', preview: 'A character arc is not personal growth. It is a forced transformation in how a character understands themselves — resisted until the last possible moment.' },
      { title: 'Flaw vs. wound: why the difference matters', slug: 'flaw-vs-wound', time: '4 min', level: 'Intermediate', preview: 'A flaw without a wound is just a bad habit. The wound is what makes the audience forgive the flaw — because they can see exactly how a person would arrive at it.' },
      { title: 'Why every character needs a different voice', slug: 'character-voice', time: '4 min', level: 'Beginner', preview: 'Cover the names in your script and read a page of dialogue. Can you tell who is speaking? If not, your characters are sharing a voice — usually yours.' },
      { title: 'How two characters define each other', slug: 'relationship-pairs', time: '4 min', level: 'Intermediate', preview: 'A relationship is not a backdrop. It is a pressure system. The right pairing reveals things about a character that could not be revealed any other way.' },
    ],
  },
  {
    category: 'Dialogue',
    badge: 'Dialogue',
    items: [
      { title: 'Nobody talks to have a conversation', slug: 'dialogue-subtext', time: '7 min', level: 'Beginner', preview: 'Real people talk to get something. Every line of dialogue is a transaction. If no one wants anything, the scene is dead.' },
      { title: 'Subtext: what is not being said', slug: 'subtext', time: '6 min', level: 'Beginner', preview: 'The best dialogue is an iceberg. What is spoken is ten percent. Two people talking about the weather can break your heart.' },
      { title: 'How to write an argument that feels real', slug: 'arguments', time: '7 min', level: 'Intermediate', preview: 'Real arguments are not about what people are arguing about. They are about what people are afraid of. Write the fear, not the fight.' },
    ],
  },
  {
    category: 'Theme',
    badge: 'Theme',
    items: [
      { title: "Theme isn't a message — it's a question", slug: 'theme', time: '6 min', level: 'Beginner', preview: 'The moment your story has a clear answer, it has become a lecture. The best stories ask a question and let the audience wrestle with it.' },
      { title: 'Planting and payoff', slug: 'plant-payoff', time: '6 min', level: 'Beginner', preview: 'A payoff without a plant feels cheap. A plant without a payoff is dead weight. The art is burying the plant so the payoff feels inevitable.' },
      { title: 'How motifs work', slug: 'motifs', time: '6 min', level: 'Intermediate', preview: 'A motif is a recurring image or idea that accumulates meaning as your story progresses. Used right, a single object can carry your entire theme.' },
    ],
  },
  {
    category: 'Visual',
    badge: 'Visual',
    items: [
      { title: 'Color psychology in visual storytelling', slug: 'color-psychology', time: '7 min', level: 'Intermediate', preview: 'The colors in a frame do not decorate the story. They are the story — communicating mood, power, and character before a single word is spoken.' },
    ],
  },
  {
    category: 'Craft',
    badge: 'Craft',
    items: [
      { title: "Tarantino's dialogue: how specificity creates character", slug: 'tarantino-dialogue', time: '7 min', level: 'Advanced', preview: 'Tarantino does not write small talk. His characters talk about pop culture, food, and the mundane — because that specificity is who they are.' },
      { title: "The Sopranos and the dramatic pause", slug: 'sopranos-drama', time: '8 min', level: 'Advanced', preview: 'The Sopranos is a masterclass in what not to rush. Silence, domesticity, and the space between scenes — that is where the show lives.' },
      { title: 'Pacing and rhythm: how stories breathe', slug: 'pacing-rhythm', time: '6 min', level: 'Intermediate', preview: 'Pacing is not the speed at which things happen. It is the relationship between speed and weight. The allocation of space is meaning.' },
      { title: 'The rewrite: what first drafts are actually for', slug: 'the-rewrite', time: '6 min', level: 'Intermediate', preview: 'The first draft is not the work. It is the material from which the work is made. Most writers only learn this by writing a bad first draft and discovering the story hiding inside it.' },,
      { title: "Show, don\'t tell", slug: 'show-dont-tell', time: '6 min', level: 'Beginner', preview: 'The most repeated instruction in writing and the least understood. What it actually means: let the reader do the work.' },
      { title: 'How to end a story', slug: 'the-ending', time: '7 min', level: 'Intermediate', preview: 'Endings prove what the story was about. Resolution wraps the plot. Conclusion answers the question.' }
    ],
  },
  {
    category: 'Frameworks',
    badge: 'Framework',
    items: [
      { title: 'Save the Cat: the 15 beats', slug: 'save-the-cat', time: '6 min', level: 'Beginner', preview: "Blake Snyder's 15-beat structure is the most-used framework in Hollywood. Not because it's the only way — because it works." },
      { title: "The Hero's Journey", slug: 'heros-journey', time: '5 min', level: 'Beginner', preview: "Joseph Campbell's monomyth underpins thousands of stories. Understanding it helps you know when to follow it — and when to break it." },
      { title: "The Story Circle", slug: 'story-circle', time: '4 min', level: 'Beginner', preview: "Dan Harmon's 8-step circle distills story structure to its essence. Simple enough to use in a session. Powerful enough to build a series around." },
      { title: "The Sequence Approach", slug: 'sequence-approach', time: '5 min', level: 'Intermediate', preview: "Eight sequences, each with its own tension arc. The approach used at USC Film School — and how many working screenwriters actually think." },
      { title: "Kishōtenketsu: story without conflict", slug: 'kishotenketsu', time: '5 min', level: 'Advanced', preview: "The classical East Asian structure that drives stories forward without traditional conflict. Understanding it will change how you see Western storytelling." },
      { title: "The Fichtean Curve", slug: 'fichtean-curve', time: '4 min', level: 'Intermediate', preview: "Start in crisis. Layer crises. End in resolution. The Fichtean Curve throws you into the action immediately — and never lets up." },
      { title: "Dan Wells' Seven-Point Structure", slug: 'seven-point-story', time: '6 min', level: 'Beginner', preview: "Build from the ending backward. The hook is the mirror opposite of the resolution — and everything between them is designed to bridge that distance." },
      { title: "Freytag's Pyramid", slug: 'freytags-pyramid', time: '5 min', level: 'Beginner', preview: "The 1863 five-stage arc that every modern framework descended from. Exposition, Rising Action, Climax, Falling Action, Denouement. Use it to diagnose structural problems." },
      { title: "The Snowflake Method", slug: 'snowflake-method', time: '6 min', level: 'Intermediate', preview: "Randy Ingermanson's system for novelists: expand from one sentence outward to a full blueprint. Best for plotters writing complex fiction across many scenes." },
      { title: "Hauge's Six-Stage Structure", slug: 'hauge-six-stage', time: '6 min', level: 'Intermediate', preview: "Hollywood consultant Michael Hauge maps plot against character transformation with percentage markers. The structure that makes emotional arcs precise." },
    ],
  },
  {
    category: 'Start Here',
    badge: 'Beginner',
    items: [
      { title: 'How to start: the first thing every beginner needs to know', slug: 'how-to-start', time: '7 min', level: 'Beginner', preview: 'Most beginning writers never finish anything — not because they lack talent, but because they start wrong. Here is how to actually begin.' },
      { title: 'Fear and writing: why most writers stop and how not to', slug: 'fear-and-writing', time: '6 min', level: 'Beginner', preview: 'Fear is at the root of most bad writing. Here is what writers are actually afraid of — and how to write through it instead of around it.' },
      { title: 'Finding your story: where ideas actually come from', slug: 'finding-your-story', time: '6 min', level: 'Beginner', preview: 'The question every writer gets asked. The honest answer is: everywhere and nowhere. Here is how to develop the habit of noticing.' },
    ],
  },
  {
    category: 'Masters on Craft',
    badge: 'Essentials',
    items: [
      { title: 'What Kurt Vonnegut knew that every beginner needs to hear', slug: 'vonnegut-craft', time: '6 min', level: 'Beginner', preview: 'Eight rules from Bagombo Snuff Box — the most useful craft checklist ever written, examined rule by rule.' },
      { title: 'Stephen King on writing: the lessons that matter for beginners', slug: 'king-on-writing', time: '7 min', level: 'Beginner', preview: 'From On Writing: the toolbox, the closed door, the daily practice, and why story always precedes theme.' },
      { title: 'Elmore Leonard and the art of invisible writing', slug: 'leonard-on-craft', time: '6 min', level: 'Intermediate', preview: 'Ten rules that add up to one: if it sounds like writing, rewrite it. The case for prose that gets out of the way.' },
      { title: 'What Pixar teaches about story that applies to everything', slug: 'pixar-story-rules', time: '6 min', level: 'Beginner', preview: 'The 22 story rules that circulated inside Pixar — the ones that actually matter, examined from a writer\'s angle.' },
    ],
  },
  {
    category: 'Literary Craft',
    badge: 'Literary',
    items: [
      { title: 'What Shakespeare knew about story that Hollywood relearned', slug: 'shakespeare-structure', time: '8 min', level: 'Intermediate', preview: 'Shakespeare did not invent dramatic structure — he refined it into something so practically useful that four hundred years later it still underlies almost every story told in any medium.' },
      { title: 'How adaptation works: from source to screen (and page)', slug: 'adaptation', time: '8 min', level: 'Intermediate', preview: 'Adaptation is translation, not transcription. The adapter\'s job is not to preserve the source — it is to find what the story essentially is and rebuild it from scratch in the new medium.' },
    ],
  },
  {
    category: 'Novel Writing',
    badge: 'Novel',
    items: [
      { title: 'Point of view: the decision that controls everything else', slug: 'point-of-view', time: '7 min', level: 'Beginner', preview: 'POV is not a technical choice about pronouns. It is a decision about where consciousness lives in your story — and every other craft decision is downstream of it.' },
      { title: 'How to structure a novel chapter', slug: 'chapter-structure', time: '7 min', level: 'Beginner', preview: 'A chapter is not a unit of time or a unit of plot. It is a unit of experience. If a chapter ends and nothing has shifted, the chapter has not done its job.' },
    ],
  },
]

const LEVEL_COLORS = {
  'Beginner':     { bg: '#EBF5E4', color: '#2D5016' },
  'Intermediate': { bg: '#FFF7ED', color: '#7A4C07' },
  'Advanced':     { bg: '#EEF2FF', color: '#3730A3' },
}

const readingList = [
  { title: 'Save the Cat!', author: 'Blake Snyder', note: 'The most practical story structure book ever written.' },
  { title: 'Story', author: 'Robert McKee', note: 'Dense, thorough, and worth every page.' },
  { title: 'The Hero with a Thousand Faces', author: 'Joseph Campbell', note: 'The mythic source of all story.' },
  { title: 'Bird by Bird', author: 'Anne Lamott', note: 'On writing badly — and why that is the only way to start.' },
  { title: 'Screenplay', author: 'Syd Field', note: 'The book that defined three-act structure for Hollywood.' },
  { title: 'The Anatomy of Story', author: 'John Truby', note: 'Twenty-two steps of story structure. More granular than anyone else.' },
]

const writtenSlugs = [
  'what-a-scene-does', 'midpoint', 'want-vs-need', 'dialogue-subtext', 'theme',
  'act-breaks', 'all-is-lost', 'ghost', 'antagonist', 'subtext', 'arguments',
  'plant-payoff', 'motifs', 'secondary-characters', 'the-lie', 'character-arc',
  'flaw-vs-wound', 'character-voice', 'relationship-pairs',
  'color-psychology', 'tarantino-dialogue', 'sopranos-drama',
  'sequence-approach', 'kishotenketsu', 'fichtean-curve',
  'enter-late-leave-early', 'scene-turn', 'tension-without-action',
  'location-as-character', 'scene-endings',
]

const totalLessons = lessons.reduce((sum, cat) => sum + cat.items.length, 0)
const writtenCount = writtenSlugs.length

export default function LearnPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '40px', maxWidth: '640px' }}>
        <div className="badge" style={{ marginBottom: '14px' }}>Craft library</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '14px', lineHeight: '1.2' }}>Learn the craft.</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
          Short lessons drawn from screenwriting courses, master classes, and the writers who figured this out before us. Read one before a session. Read all of them on a slow afternoon.
        </p>
      </div>

      {/* Stats bar */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', gap: '32px', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--green)', lineHeight: 1 }}>{writtenCount}</p>
          <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '4px' }}>lessons written</p>
        </div>
        <div>
          <p style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--text-mid)', lineHeight: 1 }}>{totalLessons}</p>
          <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '4px' }}>total planned</p>
        </div>
        <div>
          <p style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--text-mid)', lineHeight: 1 }}>8</p>
          <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '4px' }}>categories</p>
        </div>
        <div style={{ flex: 1, minWidth: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>library progress</span>
            <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{Math.round(writtenCount / totalLessons * 100)}%</span>
          </div>
          <div style={{ height: '6px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: '3px', background: 'var(--green)', width: `${(writtenCount / totalLessons) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Start here tip */}
      <div className="tip-box fade-up fade-up-delay-1" style={{ marginBottom: '48px', maxWidth: '700px' }}>
        <strong>New to writing?</strong> Start with &ldquo;Want vs. Need&rdquo; under Character and &ldquo;What a scene actually does&rdquo; under Structure. Those two lessons will change how you read and write everything else.
      </div>

      {/* Level key */}
      <div className="fade-up" style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {Object.entries(LEVEL_COLORS).map(([level, c]) => (
          <div key={level} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-soft)' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: c.bg, border: `1px solid ${c.color}` }} />
            {level}
          </div>
        ))}
      </div>

      {/* Lesson categories */}
      {lessons.map((cat, ci) => {
        const writtenInCat = cat.items.filter(i => writtenSlugs.includes(i.slug)).length
        return (
          <div key={ci} className={`fade-up fade-up-delay-${Math.min(ci + 1, 4)}`} style={{ marginBottom: '52px' }}>
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '4px', height: '22px', background: 'var(--green)', borderRadius: '2px', flexShrink: 0 }} />
              <h2 style={{ fontSize: '18px', color: 'var(--green)', margin: 0 }}>{cat.category}</h2>
              <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                {writtenInCat}/{cat.items.length}
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>

            {/* Cards grid */}
            <div className="card-grid" style={{}}>
              {cat.items.map((item, i) => {
                const isWritten = writtenSlugs.includes(item.slug)
                const levelStyle = LEVEL_COLORS[item.level] || LEVEL_COLORS['Beginner']

                return isWritten ? (
                  <Link key={i} href={`/learn/${item.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ padding: '18px 20px', height: '100%', display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {/* Top row: level pill + time */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{
                          fontSize: '10px', fontWeight: '600', fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                          padding: '2px 8px', borderRadius: '4px',
                          background: levelStyle.bg, color: levelStyle.color,
                        }}>
                          {item.level}
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-soft)' }}>{item.time}</span>
                      </div>

                      <h3 style={{
                        fontSize: '14px', fontFamily: 'var(--font-display)',
                        color: 'var(--text-dark)', lineHeight: '1.45',
                        marginBottom: '8px', flex: 0,
                      }}>
                        {item.title}
                      </h3>

                      <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.6', flex: 1, margin: 0 }}>
                        {item.preview}
                      </p>

                      <p style={{ fontSize: '12px', color: 'var(--green)', marginTop: '14px', fontWeight: '600', margin: '14px 0 0' }}>
                        Read &rarr;
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div key={i} style={{
                    padding: '18px 20px', height: '100%', display: 'flex', flexDirection: 'column',
                    border: '1px solid var(--border)', borderRadius: '12px',
                    background: 'var(--off-white)', opacity: 0.5,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{
                        fontSize: '10px', fontWeight: '600', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        padding: '2px 8px', borderRadius: '4px',
                        background: levelStyle.bg, color: levelStyle.color,
                      }}>
                        {item.level}
                      </span>
                      <span style={{ fontSize: '10px', color: 'var(--text-soft)', fontStyle: 'italic' }}>Coming soon</span>
                    </div>
                    <h3 style={{
                      fontSize: '14px', fontFamily: 'var(--font-display)',
                      color: 'var(--text-dark)', lineHeight: '1.45', marginBottom: '8px',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.6', flex: 1, margin: 0 }}>
                      {item.preview}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Go Deeper — reading list */}
      <div className="fade-up" style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '4px', height: '22px', background: 'var(--green)', borderRadius: '2px' }} />
          <h2 style={{ fontSize: '18px', color: 'var(--green)', margin: 0 }}>Go deeper</h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '24px', maxWidth: '600px' }}>
          These are the books worth reading. Not all of them agree with each other — that is the point. Read two with conflicting views and form your own.
        </p>

        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
          {readingList.map((b, i) => (
            <div key={i} className="card-static" style={{ padding: '16px 18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '3px', minHeight: '36px', background: 'var(--green-light)', borderRadius: '2px', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '2px' }}>
                  {b.title}
                  <span style={{ fontWeight: '400', color: 'var(--text-soft)', marginLeft: '6px' }}>— {b.author}</span>
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.55', margin: 0 }}>{b.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

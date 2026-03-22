import Link from 'next/link'
import CategoryList from './CategoryList'

export const metadata = {
  title: "Free Screenwriting & Story Craft Lessons —Structure, Character, Dialogue",
  description: "Free craft lessons for screenwriters, novelists, and short story writers. Structure, character arc, dialogue, theme, scene work, frameworks, and short fiction publication.",
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
    category: 'Start Here',
    badge: 'Beginner',
    items: [
      { title: 'How to start: the first thing every beginner needs to know', slug: 'how-to-start', time: '7 min', level: 'Beginner', preview: 'Most beginning writers never finish anything —not because they lack talent, but because they start wrong. Here is how to actually begin.' },
      { title: 'Fear and writing: why most writers stop and how not to', slug: 'fear-and-writing', time: '6 min', level: 'Beginner', preview: 'Fear is at the root of most bad writing. Here is what writers are actually afraid of —and how to write through it instead of around it.' },
      { title: 'Finding your story: where ideas actually come from', slug: 'finding-your-story', time: '6 min', level: 'Beginner', preview: 'The question every writer gets asked. The honest answer is: everywhere and nowhere. Here is how to develop the habit of noticing.' },
    ],
  },
  {
    category: 'Masters on Craft',
    badge: 'Essentials',
    items: [
      { title: 'What Kurt Vonnegut knew that every beginner needs to hear', slug: 'vonnegut-craft', time: '6 min', level: 'Beginner', preview: 'Eight rules from Bagombo Snuff Box —the most useful craft checklist ever written, examined rule by rule.' },
      { title: 'Stephen King on writing: the lessons that matter for beginners', slug: 'king-on-writing', time: '7 min', level: 'Beginner', preview: 'From On Writing: the toolbox, the closed door, the daily practice, and why story always precedes theme.' },
      { title: 'Elmore Leonard and the art of invisible writing', slug: 'leonard-on-craft', time: '6 min', level: 'Intermediate', preview: 'Ten rules that add up to one: if it sounds like writing, rewrite it. The case for prose that gets out of the way.' },
      { title: 'What Pixar teaches about story that applies to everything', slug: 'pixar-story-rules', time: '6 min', level: 'Beginner', preview: "The 22 story rules that circulated inside Pixar —the ones that actually matter, examined from a writer's angle." },
    ],
  },
  {
    category: 'Short Fiction',
    badge: 'Short Story',
    items: [
      { title: 'Writing short stories: compression, iceberg, and form', slug: 'short-story-craft', time: '8 min', level: 'Intermediate', preview: 'The short story is not a compressed novel. It is a form with its own logic—one character, one change, one precisely loaded moment. Everything else is negotiable.' },
      { title: 'Short story markets: where to submit and how to get read', slug: 'short-story-markets', time: '6 min', level: 'Intermediate', preview: 'The New Yorker, Ploughshares, SmokeLong, Clarkesworld —19 serious markets with direct submission links and honest notes on what each one actually wants.' },
      { title: 'Flash fiction: writing stories under 1000 words', slug: 'flash-fiction', time: '5 min', level: 'Beginner', preview: 'Flash forces every craft principle into a single page. Constraint is the teacher. What makes flash fiction work is the same thing that makes all fiction work —only with no room to hide.' },
    ],
  },
  {
    category: 'Structure',
    badge: 'Structure',
    items: [
      { title: 'What a scene actually does', slug: 'what-a-scene-does', time: '6 min', level: 'Beginner', preview: 'Every scene must do at least two things simultaneously. If it only does one, it is a candidate for the cutting room floor.' },
      { title: 'The midpoint is the spine', slug: 'midpoint', time: '6 min', level: 'Intermediate', preview: 'Remove your midpoint and your story collapses. It is not a scene in the middle —it is the event that divides your story into a before and an after.' },
      { title: 'Act breaks: what they are and why they matter', slug: 'act-breaks', time: '7 min', level: 'Beginner', preview: 'An act break is a point of no return. Something must change so completely that your story can never go back to what it was.' },
      { title: 'The All Is Lost beat', slug: 'all-is-lost', time: '6 min', level: 'Beginner', preview: 'Before your hero can win, they must lose everything. If your hero can recover without changing, the beat is not working.' },
      { title: 'The opening image: first impressions that last', slug: 'opening-image', time: '5 min', level: 'Beginner', preview: 'The opening image is not decoration. It is a thesis statement —a compressed version of the entire story that the audience will only understand in retrospect.' },
    ],
  },
  {
    category: 'Scene Craft',
    badge: 'Scene',
    items: [
      { title: 'Enter late, leave early', slug: 'enter-late-leave-early', time: '3 min', level: 'Beginner', preview: 'Every scene has a moment before the real thing starts and a moment after it ends. You do not need either of them.' },
      { title: 'The scene turn', slug: 'scene-turn', time: '4 min', level: 'Beginner', preview: 'A scene without a turn is a scene without a point. Something must shift —in power, in knowledge, in relationship —before the scene ends.' },
      { title: 'Writing tension without action', slug: 'tension-without-action', time: '4 min', level: 'Intermediate', preview: 'The most tense scenes are often the quietest. Tension is not what happens —it is the gap between what could happen and what the audience is afraid will.' },
      { title: 'The location is never just a location', slug: 'location-as-character', time: '3 min', level: 'Beginner', preview: 'Where a scene happens shapes what can happen in it. The best locations externalize the interior state of the scene.' },
      { title: 'How to end a scene so the next one cannot wait', slug: 'scene-endings', time: '4 min', level: 'Intermediate', preview: 'The way a scene ends determines whether the audience stays. The last beat of every scene is a promise about what comes next.' },
    ],
  },
  {
    category: 'Character',
    badge: 'Character',
    items: [
      { title: 'Want vs. Need: the engine of every great character', slug: 'want-vs-need', time: '7 min', level: 'Beginner', preview: 'Your protagonist wants something they can name. They need something they cannot see yet. The gap between those two things is where your story lives.' },
      { title: 'The ghost: what happened before page one', slug: 'ghost', time: '6 min', level: 'Beginner', preview: 'Every compelling character carries a wound from before the story starts. This ghost shapes every decision they make —even when they do not know it.' },
      { title: 'Writing villains that work', slug: 'writing-villains', time: '6 min', level: 'Intermediate', preview: 'Weak villains are evil because the plot requires it. Great villains have a worldview. They believe they are right.' },
      { title: 'Making your antagonist as strong as your hero', slug: 'antagonist', time: '7 min', level: 'Intermediate', preview: 'A weak antagonist makes a weak story. Your antagonist should be the hero of their own story —with a worldview that is internally consistent, even if it is wrong.' },
      { title: 'Secondary characters who earn their place', slug: 'secondary-characters', time: '4 min', level: 'Intermediate', preview: 'The best secondary characters challenge the hero. Every person in your story should want something, even if it is just a glass of water.' },
      { title: 'The lie your character believes', slug: 'the-lie', time: '4 min', level: 'Beginner', preview: 'Every great protagonist believes something false —a deep, organizing lie they have built their life around. The story is the process of dismantling it.' },
      { title: 'How a character arc actually works', slug: 'character-arc', time: '5 min', level: 'Intermediate', preview: 'A character arc is not personal growth. It is a forced transformation in how a character understands themselves —resisted until the last possible moment.' },
      { title: 'Flaw vs. wound: why the difference matters', slug: 'flaw-vs-wound', time: '4 min', level: 'Intermediate', preview: 'A flaw without a wound is just a bad habit. The wound is what makes the audience forgive the flaw —because they can see exactly how a person would arrive at it.' },
      { title: 'Why every character needs a different voice', slug: 'character-voice', time: '4 min', level: 'Beginner', preview: 'Cover the names in your script and read a page of dialogue. Can you tell who is speaking? If not, your characters are sharing a voice —usually yours.' },
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
      { title: "Theme isn't a message —it's a question", slug: 'theme', time: '6 min', level: 'Beginner', preview: 'The moment your story has a clear answer, it has become a lecture. The best stories ask a question and let the audience wrestle with it.' },
      { title: 'Planting and payoff', slug: 'plant-payoff', time: '6 min', level: 'Beginner', preview: 'A payoff without a plant feels cheap. A plant without a payoff is dead weight. The art is burying the plant so the payoff feels inevitable.' },
      { title: 'How motifs work', slug: 'motifs', time: '6 min', level: 'Intermediate', preview: 'A motif is a recurring image or idea that accumulates meaning as your story progresses. Used right, a single object can carry your entire theme.' },
    ],
  },
  {
    category: 'Visual',
    badge: 'Visual',
    items: [
      { title: 'Color psychology in visual storytelling', slug: 'color-psychology', time: '7 min', level: 'Intermediate', preview: 'The colors in a frame do not decorate the story. They are the story —communicating mood, power, and character before a single word is spoken.' },
      { title: 'Color theory in film and fiction', slug: 'color-theory', time: '12 min', level: 'Intermediate', preview: 'Red, blue, yellow, green, white, black—what each color communicates, how filmmakers use contrast and restraint, and how to write for color without directing on the page.' },
      { title: 'Cinematography: shot types, angles, and movement', slug: 'cinematography', time: '14 min', level: 'Beginner', preview: 'Every framing decision is a storytelling decision. The complete vocabulary of shot types, camera angles, and movement—with examples from the films that defined each technique.' },
      { title: 'Camera angles and power dynamics', slug: 'camera-angles', time: '10 min', level: 'Beginner', preview: "Eye level, low angle, high angle, Dutch angle, bird's eye—what each angle communicates about power, vulnerability, and psychological state." },
      { title: 'Camera movement and emotional meaning', slug: 'camera-movement', time: '12 min', level: 'Intermediate', preview: 'Static, dolly, handheld, steadicam, crane—how the camera moves, or refuses to move, is an argument about what the story feels like from inside.' },
      { title: 'Lighting as storytelling', slug: 'lighting-and-story', time: '13 min', level: 'Intermediate', preview: 'Hard light, soft light, chiaroscuro, motivated sources, practical lights—lighting is emotional weather. It tells you how to feel before an actor speaks.' },
      { title: 'Color contrast as dramatic tension', slug: 'color-contrast', time: '9 min', level: 'Intermediate', preview: 'Warm vs cool, saturated vs desaturated, complementary contrast—the mechanics of visual conflict and the emotional arguments they make.' },
      { title: 'Composition: the frame as argument', slug: 'composition-and-meaning', time: '10 min', level: 'Beginner', preview: 'Rule of thirds, headroom, negative space, symmetry—where a character sits in the frame is always a statement about their world.' },
      { title: 'Mise-en-scene: the frame as total argument', slug: 'mise-en-scene', time: '15 min', level: 'Advanced', preview: 'Set, costume, light, performance, composition—everything visible working as one system. The directors who master it cannot be imitated.' },
    ],
  },
  {
    category: 'Craft',
    badge: 'Craft',
    items: [
      { title: "Tarantino's dialogue: how specificity creates character", slug: 'tarantino-dialogue', time: '7 min', level: 'Advanced', preview: 'Tarantino does not write small talk. His characters talk about pop culture, food, and the mundane —because that specificity is who they are.' },
      { title: "The Sopranos and the dramatic pause", slug: 'sopranos-drama', time: '8 min', level: 'Advanced', preview: 'The Sopranos is a masterclass in what not to rush. Silence, domesticity, and the space between scenes —that is where the show lives.' },
      { title: 'Pacing and rhythm: how stories breathe', slug: 'pacing-rhythm', time: '6 min', level: 'Intermediate', preview: 'Pacing is not the speed at which things happen. It is the relationship between speed and weight. The allocation of space is meaning.' },
      { title: 'The rewrite: what first drafts are actually for', slug: 'the-rewrite', time: '6 min', level: 'Intermediate', preview: 'The first draft is not the work. It is the material from which the work is made. Most writers only learn this by writing a bad first draft and discovering the story hiding inside it.' },
      { title: "Show, don't tell", slug: 'show-dont-tell', time: '6 min', level: 'Beginner', preview: 'The most repeated instruction in writing and the least understood. What it actually means: let the reader do the work.' },
      { title: 'How to end a story', slug: 'the-ending', time: '7 min', level: 'Intermediate', preview: 'Endings prove what the story was about. Resolution wraps the plot. Conclusion answers the question.' }
    ],
  },
  {
    category: 'Frameworks',
    badge: 'Framework',
    items: [
      { title: 'Save the Cat: the 15 beats', slug: 'save-the-cat', time: '6 min', level: 'Beginner', preview: "Blake Snyder's 15-beat structure is the most-used framework in Hollywood. Not because it's the only way —because it works." },
      { title: "The Hero's Journey", slug: 'heros-journey', time: '5 min', level: 'Beginner', preview: "Joseph Campbell's monomyth underpins thousands of stories. Understanding it helps you know when to follow it —and when to break it." },
      { title: "The Story Circle", slug: 'story-circle', time: '4 min', level: 'Beginner', preview: "Dan Harmon's 8-step circle distills story structure to its essence. Simple enough to use in a session. Powerful enough to build a series around." },
      { title: "The Sequence Approach", slug: 'sequence-approach', time: '5 min', level: 'Intermediate', preview: "Eight sequences, each with its own tension arc. The approach used at USC Film School —and how many working screenwriters actually think." },
      { title: "Kishōtenketsu: story without conflict", slug: 'kishotenketsu', time: '5 min', level: 'Advanced', preview: "The classical East Asian structure that drives stories forward without traditional conflict. Understanding it will change how you see Western storytelling." },
      { title: "The Fichtean Curve", slug: 'fichtean-curve', time: '4 min', level: 'Intermediate', preview: "Start in crisis. Layer crises. End in resolution. The Fichtean Curve throws you into the action immediately —and never lets up." },
      { title: "Dan Wells' Seven-Point Structure", slug: 'seven-point-story', time: '6 min', level: 'Beginner', preview: "Build from the ending backward. The hook is the mirror opposite of the resolution —and everything between them is designed to bridge that distance." },
      { title: "Freytag's Pyramid", slug: 'freytags-pyramid', time: '5 min', level: 'Beginner', preview: "The 1863 five-stage arc that every modern framework descended from. Exposition, Rising Action, Climax, Falling Action, Denouement. Use it to diagnose structural problems." },
      { title: "The Snowflake Method", slug: 'snowflake-method', time: '6 min', level: 'Intermediate', preview: "Randy Ingermanson's system for novelists: expand from one sentence outward to a full blueprint. Best for plotters writing complex fiction across many scenes." },
      { title: "Hauge's Six-Stage Structure", slug: 'hauge-six-stage', time: '6 min', level: 'Intermediate', preview: "Hollywood consultant Michael Hauge maps plot against character transformation with percentage markers. The structure that makes emotional arcs precise." },
    ],
  },
  {
    category: 'Literary Craft',
    badge: 'Literary',
    items: [
      { title: 'What Shakespeare knew about story that Hollywood relearned', slug: 'shakespeare-structure', time: '8 min', level: 'Intermediate', preview: 'Shakespeare did not invent dramatic structure —he refined it into something so practically useful that four hundred years later it still underlies almost every story told in any medium.' },
      { title: 'How adaptation works: from source to screen (and page)', slug: 'adaptation', time: '8 min', level: 'Intermediate', preview: 'Adaptation is translation, not transcription. The adapters job is not to preserve the source —it is to find what the story essentially is and rebuild it from scratch in the new medium.' },
    ],
  },
  {
    category: 'Novel Writing',
    badge: 'Novel',
    items: [
      { title: 'Point of view: the decision that controls everything else', slug: 'point-of-view', time: '7 min', level: 'Beginner', preview: 'POV is not a technical choice about pronouns. It is a decision about where consciousness lives in your story —and every other craft decision is downstream of it.' },
      { title: 'How to structure a novel chapter', slug: 'chapter-structure', time: '7 min', level: 'Beginner', preview: 'A chapter is not a unit of time or a unit of plot. It is a unit of experience. If a chapter ends and nothing has shifted, the chapter has not done its job.' },
    ],
  },

]

const LEVEL_COLORS = {
  'Beginner':     { bg: '#C6DC93', color: '#589D62' },
  'Intermediate': { bg: '#FFF7ED', color: '#7A4C07' },
  'Advanced':     { bg: '#EEF2FF', color: '#3730A3' },
}

const readingList = [
  { title: 'Save the Cat!', author: 'Blake Snyder', note: 'The most practical story structure book ever written.' },
  { title: 'Story', author: 'Robert McKee', note: 'Dense, thorough, and worth every page.' },
  { title: 'The Hero with a Thousand Faces', author: 'Joseph Campbell', note: 'The mythic source of all story.' },
  { title: 'Bird by Bird', author: 'Anne Lamott', note: 'On writing badly —and why that is the only way to start.' },
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
  'short-story-craft', 'short-story-markets', 'flash-fiction',
  'color-theory', 'cinematography',
  'camera-angles', 'camera-movement', 'lighting-and-story',
  'color-palettes',
  'color-contrast', 'color-symbolism', 'color-grading', 'writing-for-color',
  'lenses-and-depth', 'composition-and-meaning', 'mise-en-scene',
  'tracks', 'story-circle', 'save-the-cat', 'hauge-six-stage',
  'snowflake-method', 'heros-journey', 'seven-point-story', 'freytags-pyramid',
]

const totalLessons = lessons.reduce((sum, cat) => sum + cat.items.length, 0)
const writtenCount = writtenSlugs.length

export default function LearnPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #1A512E 0%, var(--green) 55%, #62A81E 100%)',
        padding: '44px 24px 40px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '12px', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Craft Library</div>
          <h1 style={{
            fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '12px',
            lineHeight: '1.15', color: '#fff',
            textShadow: '0 2px 12px rgba(0,0,0,0.25)',
          }}>
            Everything you need to know<br/>before you write a word.
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.7', maxWidth: '520px', marginBottom: '24px' }}>
            Short, honest lessons on screenwriting, novels, and short fiction. Drawn from the writers who already figured this out. Read here, then go write.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span className="stat-pill">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5L8 5h3.5L9 7.5l1 3.5-3.5-2L3 11l1-3.5L1.5 5H5z" fill="currentColor"/></svg>
              {writtenCount} lessons available
            </span>
            <span className="stat-pill">{totalLessons} total planned</span>
            <span className="stat-pill">{lessons.length} categories</span>
          </div>
        </div>
      </section>

      {/* Category accordions */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 72px' }}>
        <CategoryList lessons={lessons} writtenSlugs={writtenSlugs} />
      </div>
    </div>
  )
}

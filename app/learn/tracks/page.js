import Link from 'next/link'
import TracksClient from './TracksClient'

export const metadata = {
  title: "Learning Paths —Eve Craft Library",
  description: "Structured learning paths for screenwriters, novelists, and beginning writers. Follow a curated sequence of lessons from intro to advanced —or build your own path through the craft library.",
  keywords: "screenwriting learning path, how to learn screenwriting, novel writing course free, story structure course, beginner writer lessons, screenplay structure tutorial",
  openGraph: {
    title: "Learning Paths —Eve Craft Library",
    description: "Curated lesson sequences from beginner to advanced. Follow the path or build your own.",
    url: "https://eve-screenwriting.vercel.app/learn/tracks",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/learn/tracks",
  },
}

const tracks = [
  {
    id: 'absolute-beginner',
    level: 'Start Here',
    levelColor: 'var(--green)',
    title: "I've never written a story before",
    description: "The foundations. What story is, how it works, why it's hard, and how to actually start. Read these before anything else.",
    time: '55 min total',
    lessons: [
      { slug: 'how-to-start', title: 'How to start', time: '7 min', note: 'The most important lesson on this site. Read first.' },
      { slug: 'fear-and-writing', title: 'Fear and writing', time: '6 min', note: 'Why most writers stop —and how not to.' },
      { slug: 'finding-your-story', title: 'Finding your story', time: '6 min', note: 'Where ideas actually come from.' },
      { slug: 'vonnegut-craft', title: 'Vonnegut on craft', time: '6 min', note: 'Eight rules that cover most of what matters.' },
      { slug: 'what-a-scene-does', title: 'What a scene actually does', time: '6 min', note: 'The atomic unit of story.' },
      { slug: 'want-vs-need', title: 'Want vs. need', time: '7 min', note: 'The engine of every good character.' },
      { slug: 'the-lie', title: 'The lie your character believes', time: '4 min', note: 'What drives character arcs.' },
      { slug: 'dialogue-subtext', title: 'Nobody talks to have a conversation', time: '7 min', note: 'How dialogue actually works.' },
      { slug: 'the-rewrite', title: 'The rewrite', time: '6 min', note: 'What first drafts are actually for.' },
    ],
  },
  {
    id: 'screenwriting',
    level: 'Screenwriting',
    levelColor: '#1D4ED8',
    title: "I want to write a screenplay",
    description: "Structure, scene craft, and the specific demands of writing for the screen. Grounded in the frameworks that professional writers actually use.",
    time: '90 min total',
    lessons: [
      { slug: 'act-breaks', title: 'Act breaks', time: '7 min', note: 'Where the story pivots —and why.' },
      { slug: 'midpoint', title: 'The midpoint', time: '6 min', note: 'The spine of your screenplay.' },
      { slug: 'all-is-lost', title: 'The All Is Lost beat', time: '6 min', note: 'Before your hero can win, they must lose everything.' },
      { slug: 'opening-image', title: 'The opening image', time: '5 min', note: 'First impressions are the whole story compressed.' },
      { slug: 'enter-late-leave-early', title: 'Enter late, leave early', time: '3 min', note: 'The core rule of scene economy.' },
      { slug: 'scene-turn', title: 'The scene turn', time: '4 min', note: 'Something must shift in every scene.' },
      { slug: 'tension-without-action', title: 'Writing tension without action', time: '4 min', note: 'Quiet scenes can be the most tense.' },
      { slug: 'location-as-character', title: 'Location as character', time: '3 min', note: 'Where a scene happens shapes what happens in it.' },
      { slug: 'scene-endings', title: 'How to end a scene', time: '4 min', note: 'The last beat of every scene is a promise.' },
      { slug: 'ghost', title: 'The ghost', time: '6 min', note: 'What happened before page one.' },
      { slug: 'antagonist', title: 'The antagonist', time: '7 min', note: 'Your antagonist must be as strong as your hero.' },
      { slug: 'tarantino-dialogue', title: 'Tarantino on dialogue', time: '7 min', note: 'Specificity as character.' },
      { slug: 'color-psychology', title: 'Color psychology', time: '7 min', note: 'Visual storytelling at the scene level.' },
      { slug: 'save-the-cat', title: 'Save the Cat: 15 beats', time: '6 min', note: 'The most-used structure in Hollywood.' },
      { slug: 'sequence-approach', title: 'The Sequence Approach', time: '5 min', note: 'How USC Film School teaches structure.' },
    ],
  },
  {
    id: 'novel-writing',
    level: 'Novel Writing',
    levelColor: '#7C3AED',
    title: "I want to write a novel",
    description: "POV, chapter structure, character voice, and the long-form demands of prose fiction. Includes lessons specific to the novel and adaptable from screenwriting.",
    time: '75 min total',
    lessons: [
      { slug: 'point-of-view', title: 'Point of view', time: '7 min', note: 'The decision that controls everything else in prose.' },
      { slug: 'chapter-structure', title: 'How to structure a chapter', time: '7 min', note: 'A chapter is a unit of experience, not time.' },
      { slug: 'king-on-writing', title: 'King on writing', time: '7 min', note: 'On Writing distilled for novelists.' },
      { slug: 'leonard-on-craft', title: 'Leonard on invisible writing', time: '6 min', note: 'Prose that gets out of the reader\'s way.' },
      { slug: 'character-arc', title: 'How a character arc works', time: '5 min', note: 'Transformation, not just growth.' },
      { slug: 'flaw-vs-wound', title: 'Flaw vs. wound', time: '4 min', note: 'The difference between surface and source.' },
      { slug: 'character-voice', title: 'Character voice', time: '4 min', note: 'Cover the names. Can you tell who\'s speaking?' },
      { slug: 'relationship-pairs', title: 'Relationship pairs', time: '4 min', note: 'Characters define each other.' },
      { slug: 'theme', title: 'Theme', time: '6 min', note: 'Good fiction asks —it never answers.' },
      { slug: 'motifs', title: 'Motifs', time: '6 min', note: 'Recurring images that accumulate meaning.' },
      { slug: 'pacing-rhythm', title: 'Pacing and rhythm', time: '6 min', note: 'Length implies importance.' },
      { slug: 'adaptation', title: 'Adaptation', time: '8 min', note: 'Moving between mediums.' },
    ],
  },
  {
    id: 'craft-masters',
    level: 'Deep Craft',
    levelColor: '#B45309',
    title: "I want to go deeper on craft",
    description: "Advanced lessons on structure, theme, style, and the craft principles that separate competent writing from memorable writing.",
    time: '85 min total',
    lessons: [
      { slug: 'subtext', title: 'Subtext', time: '6 min', note: 'What is not being said is the story.' },
      { slug: 'arguments', title: 'Writing an argument that feels real', time: '7 min', note: 'Arguments are about fear, not the subject.' },
      { slug: 'plant-payoff', title: 'Plant and payoff', time: '6 min', note: 'The art of burying the plant.' },
      { slug: 'secondary-characters', title: 'Secondary characters', time: '4 min', note: 'Everyone wants something.' },
      { slug: 'shakespeare-structure', title: 'What Shakespeare knew', time: '8 min', note: 'Structure refined over four hundred years.' },
      { slug: 'sopranos-drama', title: 'The Sopranos and the pause', time: '8 min', note: 'What not to rush.' },
      { slug: 'pixar-story-rules', title: 'Pixar on story', time: '6 min', note: 'The rules that built a studio.' },
      { slug: 'kishotenketsu', title: 'Kishōtenketsu', time: '5 min', note: 'Story without conflict.' },
      { slug: 'fichtean-curve',   title: 'The Fichtean Curve',              time: '4 min', note: 'Start in crisis. Layer crises.' },
      { slug: 'seven-point-story', title: "Dan Wells\' Seven-Point Structure",   time: '6 min', note: 'Build from the resolution backward to the hook' },
      { slug: 'freytags-pyramid',  title: "Freytag\'s Pyramid",                 time: '5 min', note: 'The 1863 original —diagnose any structural problem' },
      { slug: 'snowflake-method',  title: 'The Snowflake Method',               time: '6 min', note: 'Ingermanson\'s novel outlining system —expand from core outward' },
      { slug: 'hauge-six-stage',   title: "Hauge\'s Six-Stage Structure",       time: '6 min', note: 'Maps outer journey against inner transformation' },
      { slug: 'opening-image', title: 'The opening image', time: '5 min', note: 'The whole story in miniature.' },
    ],
  },
  {
    id: 'frameworks',
    level: 'Frameworks',
    levelColor: '#0891B2',
    title: "I want to understand story frameworks",
    description: "Every major structural framework in one track. Learn them all, then pick the one that fits how you think. No framework is the only right one —but knowing several is better than knowing one.",
    time: '35 min total',
    lessons: [
      { slug: 'save-the-cat', title: 'Save the Cat', time: '6 min', note: 'Blake Snyder\'s 15 beats. Start here.' },
      { slug: 'heros-journey', title: "The Hero's Journey", time: '5 min', note: 'Campbell\'s monomyth. All story in twelve stages.' },
      { slug: 'story-circle', title: 'The Story Circle', time: '4 min', note: 'Dan Harmon\'s 8-step loop.' },
      { slug: 'sequence-approach', title: 'The Sequence Approach', time: '5 min', note: 'How USC Film School actually teaches structure.' },
      { slug: 'kishotenketsu', title: 'Kishōtenketsu', time: '5 min', note: 'Four-act structure without conflict.' },
      { slug: 'fichtean-curve', title: 'The Fichtean Curve', time: '4 min', note: 'Start in crisis.' },
    ],
  },
]

export default function TracksPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '4px 13px', marginBottom: '14px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Learning Paths</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '12px', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
            Pick your path. Start where you are.
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', maxWidth: '500px', marginBottom: '20px' }}>
            Five curated sequences through the craft library. Each lesson builds on the last. Follow a path or browse freely — either works.
          </p>
          <Link href="/learn" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', padding: '8px 18px', borderRadius: '8px', textDecoration: 'none' }}>
            Browse the full library →
          </Link>
        </div>
      </section>

      {/* Tracks — client component for progress bars */}
      <main className="tracks-main" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px 72px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <TracksClient tracks={tracks} />
      </main>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--green)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', color: '#fff', marginBottom: '10px', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            Now put it to work.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.7', marginBottom: '20px', maxWidth: '440px' }}>
            The lessons only matter when they meet a real project. Eve is the workspace between the lesson and the first draft.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none' }}>
            Start a project — free
          </Link>
        </div>
      </section>

    </div>
  )
}

// app/sitemap.js — auto-generated sitemap for Google indexing
// Covers every lesson, framework, and static page with accurate priorities

const BASE = 'https://eve-screenwriting.vercel.app'

const lessonSlugs = [
  'what-a-scene-does', 'midpoint', 'act-breaks', 'all-is-lost',
  'enter-late-leave-early', 'scene-turn', 'tension-without-action',
  'location-as-character', 'scene-endings',
  'want-vs-need', 'ghost', 'antagonist', 'secondary-characters',
  'the-lie', 'character-arc', 'flaw-vs-wound', 'character-voice',
  'relationship-pairs', 'dialogue-subtext', 'subtext', 'arguments',
  'theme', 'motifs', 'plant-payoff', 'color-psychology',
  'tarantino-dialogue', 'sopranos-drama',
  'shakespeare-structure', 'point-of-view', 'chapter-structure', 'adaptation',
  'fichtean-curve', 'kishotenketsu', 'sequence-approach',
  'seven-point-story', 'freytags-pyramid', 'snowflake-method', 'hauge-six-stage',
  'save-the-cat', 'heros-journey', 'story-circle',
  'show-dont-tell', 'the-ending', 'writing-villains',
  'opening-image', 'pacing-rhythm', 'the-rewrite',
  'how-to-start', 'fear-and-writing', 'finding-your-story',
  'vonnegut-craft', 'king-on-writing', 'leonard-on-craft', 'pixar-story-rules',
]

const frameworkSlugs = [
  'save-the-cat', 'heros-journey', 'story-circle',
  'sequence-approach', 'kishotenketsu', 'fichtean-curve', 'freeform',
]

export default function sitemap() {
  const now = new Date().toISOString()

  const staticPages = [
    { url: BASE,                          priority: 1.0,  changeFrequency: 'weekly' },
    { url: `${BASE}/learn`,               priority: 0.95, changeFrequency: 'weekly' },
    { url: `${BASE}/frameworks`,          priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/road-to-hollywood`,   priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/road-to-publishing`,  priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/for-beginners`,       priority: 0.95, changeFrequency: 'monthly' },
    { url: `${BASE}/scripts`,             priority: 0.85, changeFrequency: 'monthly' },
    { url: `${BASE}/glossary`,            priority: 0.85, changeFrequency: 'monthly' },
    { url: `${BASE}/learn/tracks`,        priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${BASE}/pricing`,             priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE}/about`,               priority: 0.6,  changeFrequency: 'yearly' },
  ]

  const lessonPages = lessonSlugs.map(slug => ({
    url: `${BASE}/learn/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: now,
  }))

  return [
    ...staticPages.map(p => ({ ...p, lastModified: now })),
    ...lessonPages,
  ]
}

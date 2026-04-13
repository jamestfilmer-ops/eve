// ─── Plan utilities — single source of truth for free/paid logic ───────────────
// Free tier: 10 "Start Here" lessons only. Everything else requires Pro.
// Pro tier: $8/mo or $60/yr

export const FREE_SLUGS = [
  'what-is-a-story',
  'character-before-plot',
  'the-first-page',
  'how-to-start',
  'fear-and-writing',
  'want-vs-need',
  'finding-your-story',
  'vonnegut-craft',
  'what-a-scene-does',
  'structure-basics',
]

// Workspace tabs that require Pro
export const PRO_TABS = ['Plot Holes', 'Timeline', 'Themes Map', 'Story Map', 'World']

// Check if a slug is free for all users
export function isFreelesson(slug) {
  return FREE_SLUGS.includes(slug)
}

// ⚠️  TESTING MODE — all users treated as Pro. Re-enable before Stripe launch.
export function getPlan(profile) {
  return 'pro'
}

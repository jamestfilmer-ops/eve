import CategoryList from './CategoryList'
import { LESSONS as lessons, WRITTEN_SLUGS as writtenSlugs } from '@/lib/lessons'

export const metadata = {
  title: "Free Screenwriting & Story Craft Lessons —Structure, Character, Dialogue",
  description: "Free craft lessons for screenwriters, novelists, and short story writers. Structure, character arc, dialogue, theme, scene work, frameworks, and short fiction publication.",
  keywords: "free screenwriting lessons, how to write a screenplay, story structure lessons, character arc, dialogue writing, how to write a novel, point of view fiction, adaptation screenwriting, save the cat beats, hero journey steps, screenwriting course free, film school alternative online",
  openGraph: {
    title: "Free Screenwriting & Story Craft Lessons",
    description: "100+ lessons on structure, character, dialogue, theme, directors on craft, visual storytelling, and frameworks. For screenwriters, novelists, and short story writers. Free to start.",
    url: "https://eve-screenwriting.vercel.app/learn",
  },
  alternates: {
    canonical: "https://eve-screenwriting.vercel.app/learn",
  },
}


const totalLessons = lessons.reduce((sum, cat) => sum + cat.items.length, 0)
const writtenCount = writtenSlugs.length

export default function LearnPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)',
        padding: '44px 24px 40px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '12px', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Craft Library</div>
          <h1 style={{
            fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '12px',
            lineHeight: '1.15', color: '#fff',
            textShadow: '0 2px 12px rgba(0,0,0,0.25)',
          }}>
            The craft library.
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.7', maxWidth: '520px', marginBottom: '24px' }}>
            100+ lessons on structure, character, dialogue, directors on craft, and everything else that separates a story that works from one that doesn&apos;t. Written from first principles. No AI. No filler.
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

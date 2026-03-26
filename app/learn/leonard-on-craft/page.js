import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'Elmore Leonard and the Art of Invisible Writing | Eve',
  description: 'Ten rules that add up to one: if it sounds like writing, rewrite it. Leonard wrote 45 novels across six decades, and his prose is the most t',
}

export default function Lesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>
              Essentials
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>6 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
                      <LessonProgress slug="leonard-on-craft" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Elmore Leonard and the Art of Invisible Writing
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Ten rules that add up to one: if it sounds like writing, rewrite it. Leonard wrote 45 novels across six decades, and his prose is the most technically accomplished invisible writing in American fiction.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The cardinal rule
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Leonard's 10 rules all point to a single principle: the prose should not call attention to itself. Not because style is unimportant—Leonard's style is extremely distinctive—but because the moment a reader notices the prose as prose, they are no longer inside the story. The writer's presence in the sentence pulls the reader out. Leonard's goal was always to remove the evidence of the writer from the page.
          </p>
        </div>
        <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            On adverbs and said
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Never use an adverb to modify the verb said. He said quietly, she said enthusiastically—these are signs that the dialogue itself is not doing what you want it to do. Said is nearly invisible. The reader's eye passes through it. Any other dialogue attribution—whispered, exclaimed, declared—makes the reader aware of the machinery. Use said. Cut the adverb. Fix the dialogue if it needs fixing.
          </p>
        </div>
        <div className="reveal reveal-delay-3" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            On weather and exclamation
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Never open a book with weather, Leonard said, unless the weather is doing something unusual. This rule is actually about throat-clearing—starting a scene before the scene has started, filling the air with neutral material while you work up to the actual subject. The same goes for exclamation points: you are allowed one per 100,000 words of prose. Exclamation points signal that the writer is doing the work the sentence should be doing itself.
          </p>
        </div>
        <div className="reveal reveal-delay-4" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            On regional dialect
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Never use regional dialect phonetically. Writing wuz for was, gonna for going to, capturing speech in spelling—this calls attention to itself and makes reading laborious. Leonard's dialogue carries voice through word choice and rhythm, not spelling. The reader should hear the character's regional identity through the words they choose and the way they arrange them, not through the way those words are misspelled.
          </p>
        </div>
        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Leave out the boring parts
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            If it sounds like writing, I rewrite it. This is Leonard's summary statement. The test is simple: does this passage read like writing rather than experience? If it does, something is wrong. The part you are most proud of—the beautiful descriptive passage, the elaborate simile, the sentence you reread and admire—is often the part that needs to go. Good prose is invisible. When you can see it, that is a problem.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Key takeaway</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Invisible prose. Never modify said with an adverb. Do not open with weather unless it is doing something. Leave out the boring parts. If it sounds like writing, rewrite it.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/king-on-writing" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: "600", color: "var(--text-mid)", textDecoration: "none" }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Previous</Link>
          <Link href="/learn/pixar-story-rules" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: "600", color: "var(--green)", textDecoration: "none" }}>Next<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
        </div>
      </div>
    </PaywallBlur>
    </div>
  )
}

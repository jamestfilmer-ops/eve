import Link from 'next/link'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: "Michael Hauge's Six-Stage Plot Structure | Eve",
  description: "Michael Hauge's Six-Stage Structure maps outer journey against inner journey with precise percentage markers. Essential for character-driven stories where transformation is the point.",
}

export default function Lesson() {
  const stages = [
    { num: 1, name: 'Setup', pct: '0–10%', outer: 'Introduce the hero in their ordinary world. Establish who they are before the story begins.', inner: 'The hero is living inside their wound — a false belief about themselves or the world, formed from past pain, that limits how they see themselves.' },
    { num: 2, name: 'New Situation', pct: '10%', outer: 'An opportunity, a challenge, or a change arrives. The hero is pulled toward a new world.', inner: 'The wound is threatened. The new situation could expose what the hero most fears about themselves. They want to engage but are afraid.' },
    { num: 3, name: 'Progress', pct: '10–50%', outer: 'The hero pursues their outer goal. Things go well, then less well. The world of the story unfolds.', inner: 'Glimpses of the hero\'s true identity — who they could be without the wound — appear and disappear. They are making progress outwardly, regressing inwardly.' },
    { num: 4, name: 'Complications and Higher Stakes', pct: '50–75%', outer: 'The outer goal becomes harder. Opposition increases. Everything the hero built is threatened.', inner: 'The wound tightens. The hero retreats. They double down on the false belief because abandoning it feels too dangerous. The gap between outer success and inner emptiness grows.' },
    { num: 5, name: 'Final Push', pct: '75–100%', outer: 'The hero commits fully to the outer goal. The climax approaches. Stakes are at their highest.', inner: 'The wound must be confronted directly. The hero must choose: cling to the false belief and lose, or release it and become their true self. This is the essence of character arc.' },
    { num: 6, name: 'Aftermath', pct: '100%', outer: 'The outer conflict is resolved. The new world is established.', inner: 'The hero has shed the wound or accepted it. They are living as their true identity — or have permanently retreated from it. Either constitutes a complete arc.' },
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
                      <LessonProgress slug="hauge-six-stage" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Michael Hauge&apos;s Six-Stage Plot Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Six-Stage runs two parallel tracks — outer journey and inner journey — with precise percentage markers. It is the clearest framework for writers whose stories are fundamentally about transformation rather than plot.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Two journeys, one story</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Michael Hauge, a Hollywood story consultant, observed that every successful film tells two stories simultaneously: the outer journey (what the protagonist is trying to do) and the inner journey (who the protagonist is trying to become). Most structural frameworks describe the outer journey well. Hauge&apos;s framework insists that both tracks are equally important — and maps them against each other precisely.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The key concept is the wound — a false belief the hero holds about themselves, formed from past pain, that prevents them from living as their true identity. The outer journey forces the inner journey: pursuing the outer goal puts the hero in situations where the wound is exposed, tested, and ultimately confronted. The story ends when both journeys resolve.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>The core distinction</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Identity is who the hero truly is. The wound prevents them from living as that person. The arc of the story is the journey from wound to identity. Every other element — plot, antagonist, romance — exists to force that journey.
          </p>
        </div>

        {/* Two-column stage table */}
        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>The six stages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px', padding: '8px 0' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', paddingLeft: '84px' }}>Outer journey</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>Inner journey</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stages.map((s, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', background: i % 2 === 0 ? '#fafaf8' : '#fff', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: '700', color: 'var(--green)', width: '24px', flexShrink: 0 }}>{s.num}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', flex: 1 }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>{s.pct}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                  <div style={{ padding: '12px 16px', borderRight: '1px solid var(--border)' }}>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.6', margin: 0 }}>{s.outer}</p>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#faf9f6' }}>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>{s.inner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>The wound and the identity</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            The wound is not a backstory detail. It is an active belief system that shapes every choice the hero makes. In <em>Good Will Hunting</em>, Will&apos;s wound is the belief that he is unworthy of love — formed by abuse and abandonment. His identity is a man capable of deep connection and extraordinary contribution. The entire film is the gap between those two.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            To use Hauge&apos;s framework, you need to know both clearly before you outline anything else. What does the hero falsely believe about themselves? Who would they be without that belief? The outer journey is the mechanism that forces the gap between wound and identity to close — or fail to close.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Try this</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Write two sentences about your protagonist. First: what false belief do they hold about themselves — the wound? Second: who would they be if that belief were gone — the identity? If both answers are clear, you have the engine of your story. If either is fuzzy, that is where to start.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/snowflake-method" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/sequence-approach" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

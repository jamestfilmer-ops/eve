import Link from 'next/link'

export const metadata = {
  title: "Kishōtenketsu: Story Without Conflict | Eve",
  description: "Kishōtenketsu is a four-act East Asian narrative structure that generates drama through surprise and resonance rather than opposition. No villain required.",
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>Structure</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>5 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Advanced</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            Kishōtenketsu: Story Without Conflict
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            Western story theory assumes conflict is the engine of narrative. Kishōtenketsu operates on a different assumption: drama requires surprise and resonance, not opposition. A story can be entirely about the moment two unrelated things turn out to be connected.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>The structure that does not need a villain</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            Western story theory has largely assumed that conflict is the engine of narrative. A character wants something; something stands in the way; the story is the struggle between them. This assumption is so deep it is rarely questioned&mdash;but it is not universal.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Kishōtenketsu, which underlies much of classical Chinese and Japanese narrative&mdash;and which Studio Ghibli uses more consistently than any Western studio&mdash;operates on a completely different assumption. Drama does not require opposition. It requires surprise and resonance. The discovery that two unrelated things are secretly connected: that is the drama.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '18px' }}>The four movements</h2>
          {[
            { kanji: '起', roman: 'Ki', title: 'Introduction', desc: 'Introduce the subject: the characters, the world, the situation. No conflict is established. The opening is purely presentational. Let the audience inhabit the world before anything disrupts it.' },
            { kanji: '承', roman: 'Shō', title: 'Development', desc: 'Develop what was introduced. The world deepens, characters act within it, the situation elaborates. Still no antagonist, still no conflict. The development builds the foundation the twist needs.' },
            { kanji: '転', roman: 'Ten', title: 'The Twist', desc: 'The pivot. An unexpected development that recontextualizes everything before it. Not a conflict&mdash;a new angle of vision. Something is introduced that does not obviously connect to what came before. This is the engine of the entire structure.' },
            { kanji: '結', roman: 'Ketsu', title: 'Reconciliation', desc: 'The twist and the setup are brought together. The connection, once revealed, seems as if it could not have been otherwise. Surprise plus inevitability: the feeling of something snapping into place.' },
          ].map((m) => (
            <div key={m.kanji} style={{ display: 'flex', gap: '18px', marginBottom: '20px', alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--green)', fontWeight: '700', lineHeight: 1 }}>{m.kanji}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.06em', marginTop: '3px' }}>{m.roman}</div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 5px' }}>{m.title}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>The key insight</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            The ten (twist) must feel both surprising and inevitable. If it is only surprising, it feels arbitrary. If it is only inevitable, it is not a twist. The craft is in hiding the connection until the exact right moment.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>How Ghibli uses it</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            My Neighbor Totoro is the clearest example. There is no villain. There is no antagonist in any Western sense. The drama comes from the unexpected relationship between two girls, a forest spirit, and the anxiety of a mother&apos;s illness&mdash;things that do not obviously connect but turn out to be deeply, quietly intertwined.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Spirited Away follows the same logic: Chihiro&apos;s journey through the spirit world is about transformation and discovery, not opposition and victory. The obstacles exist to reveal who she is, not to be defeated. The resolution is reconciliation, not triumph.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>When to reach for it</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 16px' }}>
            Kishōtenketsu works best for stories about discovery, observation, or quiet transformation. Stories about grief, aging, memory, or the way small things accumulate meaning. Stories where &ldquo;what happens&rdquo; is less interesting than &ldquo;what it reveals.&rdquo;
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            It is difficult to pitch in commercial Western contexts because executives ask &ldquo;what does the protagonist want?&rdquo; and &ldquo;what stands in the way?&rdquo; If those are the only questions you know how to ask, you will miss the form entirely. But the writers who understand it have a whole vocabulary of dramatic possibility that conflict-only thinkers do not.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Try this</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Write a two-page story using kishōtenketsu. Ki: introduce a person in their ordinary routine. Shō: deepen that routine, let a second unrelated thing enter the world. Ten: reveal an unexpected connection between the two. Ketsu: let the connection settle and mean something. No conflict. No antagonist. Just resonance.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/sequence-approach" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/fichtean-curve" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

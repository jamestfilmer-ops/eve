import Link from 'next/link'

export const metadata = {
  title: "Dan Wells' Seven-Point Story Structure | Eve",
  description: "Dan Wells' Seven-Point Story Structure builds plots from the ending backward. Hook, plot turns, pinch points, midpoint, and resolution — designed for genre fiction with tight cause and effect.",
}

export default function Lesson() {
  const points = [
    { num: 1, name: 'Hook', position: 'Start', color: '#EFF6E7', border: '#6AAF3D', text: '#2D5016',
      desc: 'The starting state — the opposite of the resolution. If your character ends the story confident and connected, they begin isolated and afraid. The hook establishes what needs to change, without yet suggesting that it will.',
      note: 'Write your resolution first, then write the hook as its mirror image.' },
    { num: 2, name: 'Plot Turn 1', position: '25%', color: '#F0F2FF', border: '#6366F1', text: '#4338CA',
      desc: 'The protagonist is called to change — and resists. Something enters their world that will eventually force them toward the resolution, but at this point they want nothing to do with it. The call arrives; the answer is not yet yes.',
      note: 'This is not the inciting incident. It is the moment the story\'s central pressure first appears.' },
    { num: 3, name: 'Pinch Point 1', position: '37%', color: '#FEF2F2', border: '#F87171', text: '#991B1B',
      desc: 'The antagonistic force shows its full strength. This is a demonstration, not a confrontation — the protagonist sees clearly what they are up against. The purpose is to establish the true scale of the opposition.',
      note: 'Villains, forces, systems. Whatever opposes your protagonist must be shown at its most powerful here.' },
    { num: 4, name: 'Midpoint', position: '50%', color: '#FFF7ED', border: '#F59E0B', text: '#92400E',
      desc: 'The protagonist stops reacting and starts acting. They commit. Before the midpoint, they were responding to events. After it, they are driving them. This is the shift from passive to active protagonist — the spine of the structure.',
      note: 'The midpoint is not a reversal. It is a commitment. The protagonist chooses to fight.' },
    { num: 5, name: 'Pinch Point 2', position: '62%', color: '#FEF2F2', border: '#F87171', text: '#991B1B',
      desc: 'The antagonistic force strikes again — this time directly at the protagonist. Unlike Pinch Point 1 (which showed the threat), this one lands. Everything the protagonist has built is in danger. The situation reaches its darkest point.',
      note: 'This is the All Is Lost beat. Something must break here — a plan, a relationship, a belief.' },
    { num: 6, name: 'Plot Turn 2', position: '75%', color: '#F0F2FF', border: '#6366F1', text: '#4338CA',
      desc: 'The protagonist gains the final piece they need to reach the resolution — information, an object, an ally, an internal shift. This is not victory. It is the thing that makes victory possible. The climax can now be fought.',
      note: 'Plant this in Act 1. It should feel inevitable in retrospect.' },
    { num: 7, name: 'Resolution', position: 'End', color: '#EFF6E7', border: '#6AAF3D', text: '#2D5016',
      desc: 'The opposite of the hook. The protagonist has become what they needed to become. The conflict is resolved — not necessarily happily, but completely. Everything that was established in the hook has been answered.',
      note: 'Write this before anything else. The resolution is the compass point the entire structure navigates toward.' },
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Dan Wells&apos; Seven-Point Story Structure
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Seven-Point is built backwards. You write the ending first, then engineer every preceding beat as a causal step toward it. Tight, purposeful, and particularly powerful for genre fiction with complex plots.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Start at the end</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Dan Wells, a fantasy and thriller novelist, developed this framework because he found that outlining forward from the beginning led to meandering middles. His solution: write the resolution first, then write the hook as its opposite, then fill in the five beats between them.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The logic is that every scene in a story exists to move the protagonist from the hook to the resolution. If you know both ends of the journey, every beat between them has a job: to be a necessary step from one to the other. This prevents the most common outlining failure — scenes that exist because something needs to happen, not because this specific thing needs to happen here.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>The central principle</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Hook and resolution are opposites. Every other beat is a step between them. If a beat does not move the protagonist from hook toward resolution, it does not belong.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '20px' }}>The seven points</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {points.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '0', border: `1px solid ${p.border}`, borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: '64px', flexShrink: 0, background: p.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '14px 6px', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: '700', color: p.text, lineHeight: '1' }}>{p.num}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', fontWeight: '600', color: p.text, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{p.position}</span>
                </div>
                <div style={{ padding: '14px 18px', flex: 1, borderLeft: `1px solid ${p.border}` }}>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '5px' }}>{p.name}</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: '0 0 6px' }}>{p.desc}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', margin: 0, fontStyle: 'italic' }}>{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>What the pinch points are actually doing</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Pinch points are the most distinctive feature of this framework and the most frequently misunderstood. They are not where the antagonist attacks the protagonist. They are where the antagonist is shown at full strength — demonstrations of the opposition&apos;s power, not confrontations with it.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Pinch Point 1 reminds the audience why the stakes are real. Pinch Point 2 delivers the blow that forces the final turn. Together they bracket the midpoint — establishing the threat before the protagonist commits, then making good on it after. Without them, the midpoint commitment and the Plot Turn 2 discovery both feel unmotivated.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Best for</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Seven-Point works best for genre fiction — fantasy, thriller, mystery, sci-fi — where plot architecture matters and the cause-effect chain must be tight. It is less useful for character-driven literary fiction where the &ldquo;resolution&rdquo; is internal and the &ldquo;antagonist&rdquo; is not a force but a condition. For those stories, the Fichtean Curve or Kishōtenketsu may be a better fit. For stories with clear external conflict and a protagonist who needs to visibly change, Seven-Point is excellent.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Try this</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Write your resolution in one sentence. Then write the hook as its opposite. Now fill in five beats between them — two plot turns, two pinch points, one midpoint. Every beat should be a necessary step. If you can remove any beat without the others failing, it does not belong.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/freytags-pyramid" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/snowflake-method" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

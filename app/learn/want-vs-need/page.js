import Link from 'next/link'

export const metadata = {
  title: 'Want vs Need: The Engine of Character Arc | Eve',
  description: 'Every compelling protagonist wants one thing and needs something different. The gap between wanting and needing is where character arc lives.',
}

const sections = [
  {
    heading: 'The difference',
    body: "Want is external -- the conscious goal the character is pursuing. Need is internal -- the psychological or emotional truth the character must confront to become whole. Most beginning writers write stories where the protagonist wants something and either gets it or does not. The best stories are about a protagonist who wants one thing and discovers they needed something else entirely. In Casablanca, Rick wants to stay uninvolved. He needs to stop hiding from the world behind cynicism. In The Silence of the Lambs, Clarice wants to catch Buffalo Bill. She needs to silence the lambs -- to stop running from her own history of powerlessness. Want is the plot. Need is the story."
  },
  {
    heading: 'Why the gap matters',
    body: "The gap between want and need creates the dramatic tension that sustains a narrative. If the protagonist simply wanted the thing they needed, they would go get it directly and the story would be short. The want is almost always a misdirection -- it points the character toward a goal that will force them to confront the need they have been avoiding. This is not a formula; it is an observation about how personal change actually works. People do not change by deciding to change. They change because pursuing something they want puts them in a situation where change is the only way through."
  },
  {
    heading: 'The lie the character believes',
    body: "Connected to want vs need is what some writers call the character's lie -- the false belief the character holds about themselves or the world that prevents them from getting what they need. The lie is the emotional root of the gap. In Toy Story, Woody believes his worth depends entirely on being Andy's favorite toy. This lie drives every bad decision he makes. His want is to remain number one. His need is to understand that love is not finite and that helping Buzz does not diminish him. The story ends when Woody finally releases the lie -- and in doing so, gets something better than what he wanted."
  },
  {
    heading: 'Designing the want and need',
    body: "Start with need. What wound, false belief, or emotional deficit does your character carry into the story? What are they missing that, if they found it, would make them whole? This is need. Then design a want that is the opposite or the deflection of the need. A character who needs intimacy will often want independence. A character who needs to accept failure will often want perfection. A character who needs community will often want to be left alone. The want must be strong enough to drive the plot forward -- the character must really want it, and the obstacles to getting it must be real. But the want must also be wrong in a way that the story can reveal."
  },
  {
    heading: 'When want and need align',
    body: "In the third act, want and need must converge. The character arrives at a moment where they can have the thing they want -- but only by becoming the person who can accept what they need. Or they must choose between them. The story's emotional resolution is this convergence: the character who wanted freedom but needed connection finally accepts that the two are not mutually exclusive. The character who wanted success but needed self-worth realizes that success without self-worth is hollow. When want and need align, the character arc is complete. The story has done its work."
  },
]

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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#FEF3E2', color: '#B5700A' }}>Structure</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Want vs Need: The Engine of Character Arc
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            Every compelling protagonist wants one thing and needs something different. The gap between wanting and needing is where character arc lives -- and where stories become about something.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {sections.map((s, i) => (
          <div key={i} className={`reveal reveal-delay-${Math.min(i+1,4)}`} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '24px 28px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>{s.heading}</h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>{s.body}</p>
          </div>
        ))}

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: 'var(--radius-md)', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Key takeaway</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Want is the external goal that drives the plot. Need is the internal truth the character must accept to change. Design want and need as opposites. The story ends when they converge.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <Link href="/learn/act-breaks" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Act breaks
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

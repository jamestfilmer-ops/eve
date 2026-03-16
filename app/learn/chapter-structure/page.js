import Link from 'next/link'

export const metadata = {
  title: 'Chapter Structure: How to Begin, End, and Build a Chapter | Eve',
  description: 'A chapter is not an arbitrary unit. It is a structural container that manages pacing, controls reader commitment, and breaks the novel\'s co',
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F5F0FF', color: '#7C3AED' }}>
              Novel Writing
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '64px 24px 52px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Chapter Structure: How to Begin, End, and Build a Chapter
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            A chapter is not an arbitrary unit. It is a structural container that manages pacing, controls reader commitment, and breaks the novel's continuous pressure into manageable, satisfying increments.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            What a chapter does
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            A chapter does several things simultaneously: it provides a unit of commitment for the reader, it manages narrative pace by providing natural stopping and starting points, and it groups related story material into a single experience. The chapter structure is one of the novel's most powerful pacing tools because it controls the rhythm of the reader's experience at the macro level. Chapter length sends a signal: short chapters create urgency; long chapters create immersion and depth.
          </p>
        </div>
        <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The chapter opening
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Every chapter needs to immediately establish: where we are, when we are, who we are following, and what the pressure is. Not necessarily in that order, and not necessarily explicitly -- but the reader should be oriented within the first paragraph. The chapter opening also needs to create a reason to continue: a question raised, a situation that demands resolution, an image that is intriguing without being confusing. The chapter opening is a smaller version of the story's opening: it must give the reader a reason to stay.
          </p>
        </div>
        <div className="reveal reveal-delay-3" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            The chapter ending
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            The chapter ending is the craft writer's most powerful tool for controlling pace. An ending that resolves nothing keeps the reader in the story -- they must start the next chapter to find out what happens. An ending that provides resolution invites the reader to stop. This is not a simple formula: too many unresolved chapter endings produce the sensation of being propelled forward without satisfaction. The balance between resolution and irresolution within chapter structure is what generates sustainable reading pace.
          </p>
        </div>
        <div className="reveal reveal-delay-4" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Chapter length and what it communicates
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            There is no right chapter length, but every chapter length communicates something. Short chapters (1-5 pages) create urgency. Medium chapters (10-20 pages) are the norm for contemporary literary fiction. Long chapters (30+ pages) create immersion -- the reader is being asked to commit to an extended experience. When a novel's chapter lengths are inconsistent, it should be because the variation is communicating something, not because the writer lost track.
          </p>
        </div>
        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Multi-POV chapter structure
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Novels with multiple point-of-view characters must make decisions about when to switch perspective and what each switch accomplishes. The most common error is to switch perspectives at the moment of maximum tension in the current POV -- cutting away just when the reader is most invested. The more sophisticated move is to make the perspective switch itself an argument: to move to a different character at the moment when their perspective adds something essential that the current POV cannot provide.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Key takeaway</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            A chapter is a unit of reader commitment. The opening creates a reason to stay. The ending controls whether readers stop. Chapter length is a pacing signal. In multi-POV novels, perspective switches should be arguments.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/point-of-view" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: "600", color: "var(--text-mid)", textDecoration: "none" }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Previous</Link>
          <Link href="/learn" style={{{{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: "600", color: "var(--green)", textDecoration: "none" }}}}>All lessons<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
        </div>
      </div>
    </div>
  )
}

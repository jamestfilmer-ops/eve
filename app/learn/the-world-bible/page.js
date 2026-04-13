import Link from 'next/link'

export const metadata = {
  title: 'The World Bible | Eve',
  description: 'What a world bible is, what belongs in it, and how professional writers use it — as a living document, not a finished product.',
}

export default function TheWorldBible() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Hero */}
      <div style={{ background: 'var(--green)', padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ color: 'var(--green-pale)', fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Learn</Link>
            <span style={{ color: 'var(--green-pale)', opacity: 0.5, fontSize: '13px' }}>/</span>
            <Link href="/learn/world-building-foundations" style={{ color: 'var(--green-pale)', fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-ui)', opacity: 0.8 }}>World-Building</Link>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>World-Building</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Advanced</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>8 min</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 42px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
            The World Bible
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
            What a world bible is, what belongs in it, and how professional writers use it — as a living document, not a finished product.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>What it actually is</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            A world bible is a reference document — not a piece of fiction, not a sales pitch, not a creative exercise for its own sake. It is the canonical record of everything true about your world: the rules of how it works, the factions in it, the key locations, the cultural logic, the history that shapes the present. It exists so that you, and anyone else working on the project, can answer the question &ldquo;can this happen in this world?&rdquo; quickly and consistently.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            In television, a show bible (or series bible) serves this exact purpose — it is handed to directors, writers&apos; room members, costume designers, and production designers so that everyone is working from the same set of ground rules. On a feature film, it may be less formal, but the best productions have something equivalent: a shared understanding of the world&apos;s internal logic that everyone who touches the project has absorbed.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>What belongs in it</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>
            A world bible should answer six categories of questions. Not exhaustively — the goal is the minimum information needed to make consistent decisions, not the maximum information possible to compile.
          </p>
          <div style={{ display: 'grid', gap: '14px' }}>
            {[
              { label: 'The Setup', note: 'What kind of world is this, when does it take place, and what is the single most important thing that is different from our own world? One paragraph. If you cannot write it in one paragraph, you do not yet know your world.' },
              { label: 'The Factions', note: 'Who holds power, who wants it, and who is excluded from it. Each faction gets: a name, a core goal, a core fear, and one line explaining how they relate to the protagonist.' },
              { label: 'The Rules', note: 'What can and cannot happen in this world — physically, socially, politically. The rules are not just for magic systems. Every world has rules. Write yours down so you do not accidentally break them.' },
              { label: 'Key Locations', note: 'The places where the story actually takes place, plus the places that matter to the world\'s history or political logic. One specific detail per location.' },
              { label: 'The Culture', note: 'How do people in this world talk, what do they value, what are the taboos? Not a sociology textbook — three to five observations that capture the world\'s texture.' },
              { label: 'The History', note: 'Only the history that shapes the present conflict. If it does not affect what your protagonist has to do in the story, it does not belong in the bible.' },
            ].map(({ label, note }) => (
              <div key={label} style={{ borderLeft: '3px solid var(--green)', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>{label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.65', fontFamily: 'var(--font-body)' }}>{note}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>A living document, not a finished one</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            The biggest mistake writers make with a world bible is treating it like something that needs to be completed before writing begins. This is backwards. The bible begins with what you know, and you add to it as you discover more through the actual act of writing. The story teaches you things about your world that no amount of pre-planning will reveal. The bible exists to capture those discoveries and make them available the next time you need them.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            A useful practice: every time you make a decision in the script that has world-building implications — a character uses a specific phrase, a custom is referenced, a political structure is implied — add a note to the bible. Not a paragraph, a note. Over the course of a draft, those notes accumulate into a working reference document that reflects the actual world of the actual story, rather than the world you thought you were writing before you started.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            When the story is finished, the bible is finished too — and what you have is not just a reference document but a record of how the world came to be what it is. That record is what you hand to the director, the production designer, and the writers&apos; room. It is also what you hand to yourself when you come back to this world in five years for the sequel.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The professional use case</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            In a professional context, the world bible is also a pitch document — a way of communicating to collaborators, producers, and networks that you have thought rigorously about the world of your story and that it can sustain multiple seasons, multiple writers, and multiple directors without losing internal consistency. A strong world bible signals craft and foresight. A weak one — or the absence of one — signals that the writer has not yet done the foundational work.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            The world bibles of great television series — <em>The Wire</em>, <em>Breaking Bad</em>, <em>Succession</em> — are working documents, not academic treatises. They are direct, specific, and useful. They communicate the world&apos;s logic without performing the world&apos;s lore. That distinction — between communicating and performing — is the mark of a professional writer&apos;s approach to world-building.
          </p>
        </div>

        {/* Try This */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Try This</div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Write the one-paragraph setup for your world&apos;s bible. It should contain: the type of world, the time period or era, the one thing most different from our own world, and the political or social tension that the story will explore. No more than 150 words. If it runs longer, cut it until the essential argument of the world remains. What is left when you strip away everything optional is your world&apos;s spine.
          </p>
        </div>

        {/* CTA to World Builder */}
        <div style={{ background: 'var(--green)', borderRadius: '12px', padding: '28px', marginBottom: '24px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Build your world bible inside Eve</div>
          <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', marginBottom: '20px', maxWidth: '480px', margin: '0 auto 20px' }}>
            Open any project and use the World tab to capture factions, locations, political systems, cultural quirks, and more — then export a formatted World Bible PDF.
          </p>
          <Link href="/projects" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', padding: '10px 24px', borderRadius: '8px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
            Open My Projects
          </Link>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/language-and-culture" style={{ fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Language and Culture</Link>
          <Link href="/learn" style={{ fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>Back to Learn →</Link>
        </div>
      </div>
    </main>
  )
}

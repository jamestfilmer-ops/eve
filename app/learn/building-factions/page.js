import Link from 'next/link'

export const metadata = {
  title: 'Building Factions | Eve',
  description: 'Factions are not decoration. They are the machinery of conflict. How to build groups that drive story rather than fill a wiki.',
}

export default function BuildingFactions() {
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
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Intermediate</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>8 min</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 42px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
            Building Factions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
            Factions are not decoration. They are the machinery of conflict. How to build groups that drive story rather than fill a wiki.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>What a faction actually is</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            A faction is a group of people who share a goal and are willing to take coordinated action to achieve it. That definition is deceptively simple. Notice what it includes: a goal (not just a belief), and action (not just an identity). A faction is defined by what it wants and what it does about wanting it. Everything else — the symbols, the customs, the uniforms, the mythology — exists to serve those two things.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            In <em>Dune</em>, the Bene Gesserit are not primarily defined by their robes or their mystery — they are defined by their centuries-long breeding program. Their goal (the Kwisatz Haderach) shapes every action they take. In <em>The Wire</em>, the Barksdale organization is not primarily defined by its territory — it is defined by its business model. Take away the goal and the action, and you have a costume party, not a faction.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The four questions</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>
            For every faction in your world, you need answers to four questions. Not paragraph answers — one-sentence answers. If you can&apos;t answer these in a sentence, the faction is not yet clearly imagined.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { q: 'What does this faction want?', note: 'The specific, concrete thing. Not "justice" — justice as measured by what? Not "power" — over whom, and to do what?' },
              { q: 'What does this faction fear losing?', note: 'This is usually more useful than what they want. Fear is a better engine than desire because it produces defensive, irrational, revealing behavior.' },
              { q: 'What would this faction never do?', note: 'The hard limit reveals the faction\'s actual values — not the ones they claim, but the ones they would die to protect. When a faction crosses that line, you have a story.' },
              { q: 'Who does this faction need to destroy or absorb?', note: 'Every faction has a natural enemy. If it does not, it is a club, not a faction. The enemy is where your conflict lives.' },
            ].map(({ q, note }) => (
              <div key={q} style={{ borderLeft: '3px solid var(--green)', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>{q}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.65', fontFamily: 'var(--font-body)' }}>{note}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Faction conflict is character conflict</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            The most useful thing a faction does in a story is put your protagonist in an impossible position. The best faction systems are designed so that your protagonist is caught between them — loyal to one, born into another, owing a debt to a third. Every faction your protagonist is connected to should be pulling them in a different direction.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            In <em>Game of Thrones</em>, Ned Stark is simultaneously a northern lord (House Stark), a Hand of the King (the Crown), a husband and father (family), and a man of personal honor (his own code). These four factions have incompatible demands on him. He cannot satisfy them all. The story is what happens when he is forced to choose.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            This is the structural principle: design your factions around your protagonist&apos;s specific divided loyalties. The factions are not interesting in the abstract. They are interesting because your character belongs to multiple ones that are now in conflict.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Visible identity vs. actual ideology</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Factions present themselves one way and behave another. This gap between self-presentation and actual behavior is one of the richest sources of story material available to a writer. Every faction has a public mythology — what it claims to be about — and a private reality — what it actually does and why.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            The Gilead of <em>The Handmaid&apos;s Tale</em> claims to honor women as sacred vessels. What it actually does is strip them of autonomy and use them as property. The gap between the claim and the reality is the story&apos;s entire political argument. Build that gap deliberately into your factions. The most dangerous faction in any story is one that believes its own mythology.
          </p>
        </div>

        {/* Try This */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Try This</div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>
            List every faction your protagonist belongs to or owes allegiance to — family, profession, ideology, nation, religion, any group with a claim on their loyalty. Then pick two of those factions and write the moment where their demands directly contradict each other. Your protagonist cannot satisfy both. What do they do? That scene is probably somewhere in your second act.
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/world-building-foundations" style={{ fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← World-Building Foundations</Link>
          <Link href="/learn/political-systems-in-story" style={{ fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>Next: Political Systems →</Link>
        </div>
      </div>
    </main>
  )
}

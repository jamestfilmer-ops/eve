import Link from 'next/link'

export const metadata = {
  title: 'World Geography and Location | Eve',
  description: 'Terrain is character. How the physical world shapes the people who live in it — and how to use geography as a storytelling tool.',
}

export default function WorldGeographyAndLocation() {
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
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Beginner</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>6 min</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 42px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
            World Geography and Location
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
            Terrain is character. How the physical world shapes the people who live in it — and how to use geography as a storytelling tool.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Geography as the original constraint</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Before there were political systems, there was geography. The land determined where people could live, what they could eat, how easily they could move, and who their neighbors were. Everything that followed — culture, trade, war, religion — was in some sense a response to the land. This is not just history. It is still the deepest logic of how worlds work.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            Desert cultures are not like island cultures. Mountain people are not like plains people. A coastal city thinks differently about trade and war than a landlocked fortress does. When you design your world&apos;s geography, you are not drawing a map — you are making decisions about what kind of people your world produces, what they value, and what they fear.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The John Ford principle</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            John Ford built his entire body of work around one specific place: Monument Valley. He returned to it again and again across decades, not because it was convenient but because the landscape — vast red mesas, infinite sky, human figures tiny against ancient stone — was the argument of his films made visible. The West as Ford saw it was a place where civilization and wilderness were in permanent tension. The landscape proved it every frame.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            The principle applies to any kind of world. Pick the landscape that is most true to what your story is arguing, and build everything else around it. <em>Blade Runner</em>&apos;s endless rain and neon-soaked darkness argues that the future is overwhelming human scale. <em>Children of Men</em>&apos;s collapsed, overgrown England argues that civilization is thinner than we think. The landscape is not setting — it is thesis.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Centers and margins</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Every world has a center — the place where power lives, where decisions are made, where culture radiates outward from. And it has margins — the edges, the borderlands, the places the center ignores or exploits or is afraid of. The relationship between center and margin is one of the most productive geographic questions you can ask, because most compelling stories happen at the margin, or involve a journey between them.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            The Capitol and the districts in <em>The Hunger Games</em>. The Shire and everything beyond it. The inner city and the suburbs in <em>The Wire</em>. Center and margin are always in a relationship of extraction — the center takes something from the margin, usually labor or resources or obedience. When the margin stops giving, you have your inciting incident.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            Map your world&apos;s center and margins explicitly. Then ask: where does your protagonist live? If they are in the center, what do they have to lose? If they are in the margin, what do they have to gain? The answer to that question is your story&apos;s engine.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>Specific locations over generic ones</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Generic locations kill immersion. &ldquo;A tavern&rdquo; is invisible. &ldquo;The Broken Wheel — a tavern where the ceiling is so low that the barkeep has spent thirty years crouched, and where you pay in grain because no one here trusts coin&rdquo; is a world. The specificity signals that the writer has been to this place in their imagination, and the reader or viewer can follow.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            Every key location in your world should have one specific, strange, particular detail that only exists there. Not three details — one. One detail that is true enough to unlock the whole space. When you find that detail, you will know it, because suddenly the location will feel inhabited.
          </p>
        </div>

        {/* Try This */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Try This</div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Identify the single most important location in your story — the place where the climax happens, or where your protagonist feels most at home, or most trapped. Now write one sentence describing the specific physical detail of that place that no other place in your world shares. If you cannot find that detail yet, you have not imagined the place fully. Keep looking until it arrives.
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/political-systems-in-story" style={{ fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Political Systems</Link>
          <Link href="/learn/language-and-culture" style={{ fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>Next: Language and Culture →</Link>
        </div>
      </div>
    </main>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'World-Building Foundations | Eve',
  description: 'What world-building actually means for screenwriters and story writers — and why the novelist\'s approach will sink your script.',
}

export default function WorldBuildingFoundations() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Hero */}
      <div style={{ background: 'var(--green)', padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link href="/learn" style={{ color: 'var(--green-pale)', fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Learn</Link>
            <span style={{ color: 'var(--green-pale)', opacity: 0.5, fontSize: '13px' }}>/</span>
            <span style={{ color: 'var(--green-pale)', fontSize: '13px', fontFamily: 'var(--font-ui)', opacity: 0.8 }}>World-Building</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>World-Building</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Intermediate</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>7 min</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 42px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
            World-Building Foundations
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
            What world-building actually means for screenwriters — and why the novelist&apos;s approach will sink your script.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The wrong way to think about this</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Most writers learn world-building from fantasy novels — Tolkien, Le Guin, Jordan. Those books have appendices. Maps. Constructed languages. Etymology. Hundreds of pages of lore that never appears in the story itself. That is the novelist&apos;s toolkit, and it works beautifully in prose, where a narrator can describe the political history of a kingdom across three chapters.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            A screenplay does not have a narrator. A screenplay has images, behavior, and dialogue. The audience sees the world for roughly two hours through a camera lens, and nobody pauses the film to read you a footnote. So when a screenwriter builds a world the way a novelist does — in exhaustive, pre-written lore documents — they create a beautiful archive that the audience will never experience. They have also, usually, avoided the harder question: <em>how does the world show up in the story?</em>
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            The right question in screenwriting is not &ldquo;what is true about this world?&rdquo; It is &ldquo;what does the world <em>do</em> to the characters?&rdquo; That is the shift that separates useful world-building from expensive procrastination.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>World as pressure system</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Think of your world as a pressure system. The world applies pressure to the characters. That pressure forces them to make choices. Those choices reveal who they are. This is the only part of world-building that the audience actually experiences — not the pressure system itself, but what it forces the characters to do.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            In <em>The Handmaid&apos;s Tale</em>, the world&apos;s political structure is never explained in a lecture. We understand Gilead through what Offred is allowed to wear, where she is allowed to walk, what words she is allowed to say, and who she is allowed to look at. The ideology is communicated entirely through behavioral restriction. The world is not described — it is <em>felt</em>, through the character&apos;s constraint.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            In <em>Mad Max: Fury Road</em>, we understand the scarcity of water and fuel not through a history lesson but through the way characters fight over them with their bodies. Resource politics become action. The world is its conflict.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The six elements worth building</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            There are six world elements that consistently do useful story work. Build all six for any project and you will have more than enough to write from. Try to build everything — language families, mythological genealogies, the agricultural calendar — and you will have a lot to show at a party and nothing to write about.
          </p>
          <div style={{ display: 'grid', gap: '12px', marginTop: '8px' }}>
            {[
              { label: 'Factions', note: 'Who has power, who wants power, and who is excluded from it. Conflict is almost always faction conflict at its root.' },
              { label: 'Locations', note: 'Where does the story take place, and what does the geography say about the people who live there? Terrain is character.' },
              { label: 'Politics', note: 'What are the rules of the game? Who enforces them, who bends them, and what happens to people who break them?' },
              { label: 'Era and Technology', note: 'When does this take place, and what can people do? Technology determines what threats exist and what solutions are possible.' },
              { label: 'Language and Culture', note: 'How do people talk, what do they value, what are the taboos? Culture is the invisible hand shaping every conversation.' },
              { label: 'Quirks and Rituals', note: 'The specific, strange, particular details that make a world feel real rather than generic. One good quirk is worth ten pages of lore.' },
            ].map(({ label, note }) => (
              <div key={label} style={{ borderLeft: '3px solid var(--green)', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', color: 'var(--text)', marginBottom: '3px' }}>{label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-soft)', lineHeight: '1.6', fontFamily: 'var(--font-body)' }}>{note}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '16px' }}>The iceberg rule</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
            Hemingway&apos;s iceberg theory applies to world-building with full force. You need to know more than you show. The writer&apos;s understanding of the world gives the story density, texture, and confidence — but most of what you know never appears on screen. The audience feels the weight of the iceberg below the waterline without needing to see it.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
            George Miller designed an entire mythology for the world of Mad Max before he shot a frame. Virtually none of it is explained in the film. But every character&apos;s behavior, every costume choice, every vehicle modification is consistent with that mythology — and the audience senses it, even without being told. The world feels <em>earned</em>. That is the goal.
          </p>
        </div>

        {/* Try This */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Try This</div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Take your current project and ask: what does the world <em>forbid</em> your protagonist from doing that they desperately want to do? That single restriction is probably more useful story material than twenty pages of world history. Write it down. Then ask what they have to risk to do it anyway.
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn" style={{ fontSize: '14px', color: 'var(--text-soft)', textDecoration: 'none', fontFamily: 'var(--font-ui)' }}>← Back to Learn</Link>
          <Link href="/learn/building-factions" style={{ fontSize: '14px', color: 'var(--green)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>Next: Building Factions →</Link>
        </div>
      </div>
    </main>
  )
}

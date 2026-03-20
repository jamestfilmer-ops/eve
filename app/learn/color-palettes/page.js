import Link from 'next/link'

export const metadata = {
  title: 'Color Palettes and Emotional Arcs in Film | Eve',
  description: 'How a film\'s color palette shifts as the story shifts. Color arcs, monochromatic scenes, palette as character, and how the greatest films use color as a structural tool.',
  keywords: 'color palette film storytelling, color arc film, film color scheme meaning, warm cool palette film, Parasite color palette, Her color palette, color grading meaning',
}

const paletteStudies = [
  {
    film: 'Parasite (2019)',
    director: 'Bong Joon-ho',
    dp: 'Hong Kyung-pyo',
    thesis: 'Class hierarchy rendered in warm vs. cool palette—the same color means different things depending on who inhabits it.',
    palette: [
      { zone: 'The Kim basement', color: '#7B6A55', colorName: 'Warm amber, dirty', meaning: 'Cramped warmth. Life lived in proximity, in smell, in noise. The Kim family\'s warmth is biological and involuntary.' },
      { zone: 'The Park house (exterior)', color: '#B8C4B8', colorName: 'Cool grey-green', meaning: 'Antiseptic privilege. The architecture is white and glass; the palette is the architecture. The Parks\' coolness is designed.' },
      { zone: 'The underground bunker', color: '#3D3530', colorName: 'Deep brown-black', meaning: 'The secret below the secret. The warmth of the Kim basement exists above this further darkness.' },
      { zone: 'The flooding sequence', color: '#4A6741', colorName: 'Grey-green water', meaning: 'The literal submersion of the warm world in the cold system. The flood is the class argument made physical.' },
    ],
    craftNote: 'Bong uses palette to argue that class is not just economic but environmental—you carry it in the light around you. The Kims in the Park house look wrong partly because the cool palette does not suit their warmth. Watch for the moments when a warm person enters a cool space and how the visual dissonance communicates the social dissonance.',
  },
  {
    film: 'Her (2013)',
    director: 'Spike Jonze',
    dp: 'Hoyte van Hoytema',
    thesis: 'A world saturated in warmth to communicate what Theodore is seeking—before the film makes the argument that warmth is insufficient.',
    palette: [
      { zone: 'Theodore\'s wardrobe', color: '#C4593A', colorName: 'Reds, oranges, warm earth', meaning: 'Longing made visible. Theodore literally wears his emotional need.' },
      { zone: 'The future LA', color: '#F0D9B5', colorName: 'Warm cream and amber', meaning: 'A designed future that has prioritized human comfort—and may have over-corrected.' },
      { zone: 'Theodore and Samantha (interior)', color: '#E8A87C', colorName: 'Deep warm amber', meaning: 'The relationship is lit as romance—the color does not distinguish between human and AI love.' },
      { zone: 'The ending', color: '#B8C8D8', colorName: 'Cooler, open blue-grey', meaning: 'After Samantha\'s departure, the palette opens to something cooler and emptier—and more real.' },
    ],
    craftNote: 'Jonze and van Hoytema discuss wanting the future to feel emotionally warm but slightly over-designed—a world that has solved comfort but may have created a different problem. The red-and-amber palette is literally the warmth Theodore needs surrounding him before he understands what warmth requires.',
  },
  {
    film: 'Three Colors: Blue (1993)',
    director: 'Krzysztof Kieslowski',
    dp: 'Slawomir Idziak',
    thesis: 'A single color so systematically deployed that it becomes the film\'s argument rather than its atmosphere.',
    palette: [
      { zone: 'The entire film', color: '#1A4A6B', colorName: 'Pervasive deep blue', meaning: 'Julie\'s grief made environmental. She cannot escape it because it is everywhere.' },
      { zone: 'Blue glass objects', color: '#5B9FD4', colorName: 'Translucent sky blue', meaning: 'The specific objects that carry the film\'s emotional weight—a chandelier, a candy wrapper, a swimming pool.' },
      { zone: 'The warm intrusions', color: '#C47B3A', colorName: 'Amber interruptions', meaning: 'The moments of other people\'s lives that break through Julie\'s isolation—brief and temporary.' },
    ],
    craftNote: 'This film demonstrates the most extreme use of a monochromatic palette in serious cinema. Blue is not used symbolically here—it IS the film. Kieslowski does not use blue to mean grief; he makes blue the medium in which grief exists. The difference is crucial: symbol can be decoded, medium cannot be escaped.',
  },
  {
    film: 'Mad Max: Fury Road (2015)',
    director: 'George Miller',
    dp: 'John Seale',
    thesis: 'Day-for-night shooting and digital grading used to create a world that exists outside normal time—the teal-and-orange pushed to mythological extremes.',
    palette: [
      { zone: 'The Citadel and wasteland (day)', color: '#C28B3A', colorName: 'Burning orange-gold', meaning: 'The hostile sun, the rust of the world, the color of power and domination.' },
      { zone: 'Night sequences', color: '#1A3A5C', colorName: 'Deep blue-teal', meaning: 'The brief respite of darkness—the world is less hostile when it cannot see.' },
      { zone: 'The green oasis (recalled)', color: '#3A7A3A', colorName: 'Remembered green', meaning: 'The Many Mothers\' green place is remembered in a desaturated, dream-like palette—something that existed before the world broke.' },
      { zone: 'The Wives\' white', color: '#F5F0E8', colorName: 'Pure worn white', meaning: 'The Wives\' white clothing in the orange desert is the film\'s central visual argument: these are people trying to stay clean in a world designed to dirty them.' },
    ],
    craftNote: 'Miller and Seale had discussions about whether the film should be "day for night" throughout—the decision to shoot in actual daylight and grade it into a hyper-real orange gave the film its mythological quality. It does not look like any place on Earth, which is the argument: this is mythology, not prediction.',
  },
  {
    film: 'Amélie (2001)',
    director: 'Jean-Pierre Jeunet',
    dp: 'Bruno Delbonnel',
    thesis: 'A hyper-saturated palette that communicates the protagonist\'s way of seeing the world—and makes her isolation feel like enchantment rather than pathology.',
    palette: [
      { zone: 'Paris (Amélie\'s version)', color: '#D4913A', colorName: 'Warm amber-gold', meaning: 'The city as it exists in a romantic imagination—every surface warm, every shadow soft.' },
      { zone: 'Red and green accents', color: '#C43A3A', colorName: 'Saturated red', meaning: 'The film uses red and green as complementary accents throughout—the colors of traditional French street signs and markets, but pushed to a fairy-tale intensity.' },
      { zone: 'Nino\'s world', color: '#8B6545', colorName: 'Slightly cooler, more real', meaning: 'The person Amélie is trying to reach is slightly less saturated than her fantasy world—he exists in a more real register.' },
    ],
    craftNote: 'Delbonnel and Jeunet removed the blues and whites from the film\'s palette in post-production, leaving only the warm spectrum. This is one of the most discussed color decisions in recent European cinema—it creates a Paris that never existed, which is exactly the point. Amélie\'s world is how she sees it, not how it is.',
  },
  {
    film: 'The Godfather trilogy (1972-90)',
    director: 'Francis Ford Coppola',
    dp: 'Gordon Willis',
    thesis: 'A palette that darkens across three films as the family\'s moral world darkens—corruption rendered in shadow.',
    palette: [
      { zone: 'The Godfather Part I', color: '#8B6A3A', colorName: 'Warm amber, deep shadow', meaning: 'The first film\'s warmth is the warmth of a functioning (if corrupt) family. The light is amber, the shadows are deep but not total.' },
      { zone: 'The Godfather Part II', color: '#5A4A35', colorName: 'Cooler, darker amber', meaning: 'Michael\'s world has cooled. The warmth of Part I is draining from the family.' },
      { zone: 'The Godfather Part III', color: '#3A3530', colorName: 'Almost monochrome', meaning: 'The third film is nearly drained of color—the world has gone cold. The final shot is a study in grey.' },
      { zone: 'The Sicily flashbacks (Part II)', color: '#C4A070', colorName: 'Golden-warm', meaning: 'The past is always warmer in this trilogy. Vito\'s world is amber; Michael\'s is shadow.' },
    ],
    craftNote: 'This is the most extended color arc in American cinema. Gordon Willis\'s deliberate darkening across the three films tracks the moral arc of the Corleone family more precisely than any dialogue. You can watch the trilogy with the sound off and understand what is happening to Michael by watching the color temperature.',
  },
]

const howToReadPalette = [
  {
    principle: 'A palette is not a color scheme',
    body: 'A color scheme is a set of colors that look good together. A palette is a set of colors that mean something together. The difference is intentionality and argument. Amélie\'s warm-amber palette would not work for a film about clinical depression. Mad Max\'s burning orange would be wrong for a film about domestic intimacy. The palette should be designed around the story\'s emotional argument, not around what looks beautiful in isolation.',
  },
  {
    principle: 'Warm and cool are not good and evil',
    body: 'The most common error in thinking about film palettes is reading warm as positive and cool as negative. Her uses warmth to communicate longing that is ultimately insufficient. Three Colors: Blue uses cool for grief that the protagonist will eventually work through. Parasite uses the contrast between warm and cool as a class argument, not a moral one. Palette communicates register and temperature—what those mean depends on the specific film.',
  },
  {
    principle: 'The palette break is a plot event',
    body: 'When a film\'s consistent palette suddenly shifts—a warm film going cold, a desaturated film suddenly saturated—this is a structural event equivalent to a plot turn. The moment in Parasite when the flood takes over, the palette shifts. The moment in Her when Theodore processes Samantha\'s departure, the palette opens to cooler tones. The filmmaker who understands palette uses these breaks deliberately, not as grading decisions made in post-production.',
  },
  {
    principle: 'Desaturation is not the same as no palette',
    body: 'A desaturated film still has a palette—it has chosen grey, blue-grey, or brown-grey as its register. The desaturated palette communicates a world drained of vitality, fantasy, or warmth. Schindler\'s List (mostly black-and-white with a single color exception) uses its desaturation to place historical horror in a register that feels documentary rather than cinematic. No Country for Old Men\'s slightly desaturated natural palette communicates that this is a world without beauty to spare.',
  },
]

export default function ColorPalettesLesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/visual-craft" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Visual Craft
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Color Palettes</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>10 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Color Palettes and Emotional Arcs
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            The palette of act one should not match the palette of act three. A film\'s color temperature tracks its emotional temperature—when the story changes, the palette changes with it. These are six films that use palette as a structural tool, not decoration.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Film palette studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '60px' }}>
          {paletteStudies.map((study, i) => (
            <div key={study.film} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>

              {/* Film header */}
              <div style={{ padding: '22px 26px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>{study.film}</h2>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
                  Dir. {study.director} / DP: {study.dp}
                </p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>
                  {study.thesis}
                </p>
              </div>

              {/* Color swatches */}
              <div style={{ padding: '20px 26px', borderBottom: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '12px' }}>Palette breakdown</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {study.palette.map((zone) => (
                    <div key={zone.zone} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '6px', background: zone.color, border: '1px solid rgba(0,0,0,0.1)', marginTop: '2px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '2px' }}>
                          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>{zone.zone}</span>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>{zone.colorName}</span>
                        </div>
                        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', margin: 0, lineHeight: '1.6' }}>{zone.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Craft note */}
              <div style={{ padding: '18px 26px', background: 'var(--green-pale)' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Craft note</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{study.craftNote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How to read palette */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', paddingBottom: '16px', borderBottom: '2px solid var(--green)' }}>
            Four principles for reading and designing palettes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            {howToReadPalette.map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 8px' }}>{item.principle}</h3>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/color-theory" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Color Theory
          </Link>
          <Link href="/visual-craft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Visual Craft home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

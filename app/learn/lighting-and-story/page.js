import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import { WikiImage, ImagePair } from '../../components/CraftImage'

export const metadata = {
  title: 'Lighting as Storytelling—Hard Light, Soft Light, Shadow | Eve',
  description: 'How lighting communicates character and emotional truth. Hard light, soft light, high-key, low-key, and practical lighting as storytelling tools.',
  keywords: 'film lighting storytelling, hard light soft light film, chiaroscuro cinema, Rembrandt lighting film, motivated light film, noir lighting, cinematography lighting meaning',
}

const lightingConcepts = [
  {
    name: 'Hard Light vs Soft Light',
    photo: { type: 'pair', hard: { type: 'wiki', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Nosferatu_Orlok.jpg/480px-Nosferatu_Orlok.jpg', alt: 'Nosferatu (1922) hard expressionist light', caption: 'Hard light in Nosferatu (1922): every shadow has a knife edge, creating a world where threat is geometrically visible' }, soft: { type: 'wiki', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Buster_Keaton_in_The_General_%281926%29.jpg/480px-Buster_Keaton_in_The_General_%281926%29.jpg', alt: 'The General (1926) natural location light', caption: 'The General (1926): open, natural light that does not dramatize — the world simply exists in even illumination' } },
    category: 'Foundational',
    description: 'The quality of light—whether its edge is sharp or diffused—is the most fundamental lighting choice in cinematography.',
    detail: 'Hard light comes from a small, direct source (a bare bulb, the midday sun, a spotlight). It creates crisp, defined shadows with sharp edges. Hard light reveals—it shows every pore, every crease, every line. It is honest, harsh, and unforgiving. Soft light comes from a large, diffused source (an overcast sky, a light bounced through a silk, a window on a grey day). It wraps around surfaces, creating gradual shadow transitions. Soft light flatters—it makes skin look smooth, rooms look comfortable, the world look kinder than it is. The choice between hard and soft light is a choice about the emotional temperature of the world. Noir lives in hard light. Romantic comedies live in soft light. The horror film that uses soft light is making an argument: this world looks safe, and that appearance is a lie.',
    examples: [
      { film: 'Double Indemnity (1944)', note: "John Seitz uses hard light slashed through Venetian blinds to create the shadow-bars that trap Neff and Phyllis before they have committed any crime. The hard light is the genre's visual argument: you are already caught." },
      { film: 'La La Land (2016)', note: "Linus Sandgren uses soft, warm, diffused light throughout—the world of the film is wrapped in a golden softness that communicates nostalgia for something that has not yet been lost. The soft light is the emotional register of the ending: what was beautiful was also unreliable." },
      { film: 'Zodiac (2007)', note: "Harris Savides and David Fincher use hard fluorescent light for the newsroom and police procedural scenes—a cold, unforgiving light that makes the work feel exhausting and unresolvable." },
    ],
  },
  {
    name: 'Motivated vs Unmotivated Light',
    category: 'Foundational',
    description: 'Whether the audience can identify a plausible source for the light in the scene.',
    detail: 'Motivated lighting has a source the audience can see or infer—a window, a lamp, a fire, a screen. The light appears to come from somewhere real. Unmotivated lighting comes from no visible source—the character is simply lit, often from an angle that no real light in the scene could produce. Both are valid choices, but they communicate different things. Motivated lighting creates realism—this is a world that obeys physical laws. Unmotivated lighting creates theatricality—this is a world that has been arranged for you to watch. The golden age Hollywood film used both simultaneously: motivated light established the scene\'s believability, while additional fill and kicker lights were added for beauty and clarity that no real room could produce. Contemporary naturalistic cinematography (Roger Deakins, Emmanuel Lubezki) works hard to make every light source motivated, which creates a specific quality of physical truth.',
    examples: [
      { film: 'Barry Lyndon (1975)', note: "Kubrick shot the candlelit scenes with NASA lenses that could film by candlelight alone—every frame of the period scenes is lit entirely by motivated sources. The light is both historically accurate and painterly." },
      { film: 'Children of Men (2006)', note: "Lubezki used natural light as the baseline for the film's motivated approach—the result is that the dystopian world looks exactly like the real world, making it more horrifying." },
      { film: 'Eyes Wide Shut (1999)', note: "Kubrick used practical Christmas lights as the motivated source throughout—the warm, slightly gaudy light of domestic display becomes the visual grammar of the film\'s world of surfaces and deception." },
    ],
  },
  {
    name: 'Chiaroscuro',
    photo: { type: 'single', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/M_1931_film.jpg/900px-M_1931_film.jpg', alt: 'M (1931) Fritz Lang chiaroscuro', caption: 'M (1931), dir. Fritz Lang: chiaroscuro used to externalize guilt — half the face in light, half in shadow, neither wholly innocent nor wholly condemned' },
    category: 'Style',
    description: 'The dramatic use of contrasting light and dark—deep shadow and bright highlight in the same frame.',
    detail: 'Chiaroscuro (Italian: "light-dark") originated in Renaissance painting—Caravaggio and Rembrandt are its masters. In cinema, it is the defining visual grammar of film noir and horror. A chiaroscuro frame does not describe the whole scene: it selects what to reveal and what to hide. The characters exist at the edge of darkness; what they are doing can only be partially seen. This is not just atmosphere—it is information management. A face half in shadow is a face with secrets. A room where the source of danger cannot be seen is a room that is more threatening than one where everything is visible. The darkest shadow in a frame is not emptiness—it is potential. Something could be there.',
    examples: [
      { film: 'The Third Man (1949)', note: "Robert Krasker\'s cinematography is the standard against which all film noir lighting is measured. Orson Welles\'s introduction—a foot in a doorway, a face in shadow, a flash of light—is chiaroscuro as character revelation." },
      { film: 'Touch of Evil (1958)', note: "Welles as director uses extreme chiaroscuro for Quinlan—the deep shadows that swallow half his face communicate his moral corruption as clearly as his dialogue." },
      { film: 'Blade Runner (1982)', note: "Jordan Cronenweth and Ridley Scott use chiaroscuro throughout the rain-slicked Los Angeles of 2019—shafts of light cutting through permanent darkness. The visual grammar argues that clarity is impossible in this world." },
    ],
  },
  {
    name: 'Rembrandt Lighting',
    category: 'Setup',
    description: 'A specific lighting pattern placing a small triangle of light on the shadow side of the face.',
    detail: 'Named for the Dutch master who used it throughout his portraiture, Rembrandt lighting creates the sense of inner complexity—a face that is partly revealed and partly private. The key light (the main source) comes from above and to one side at roughly a 45-degree angle. The shadow falls across the other side of the face, but a small triangle of light—formed by the cheekbone and nose catching the key light—appears on the shadow side. The effect is to give a face simultaneously revelation and mystery. Hollywood used Rembrandt lighting as a standard beauty setup for decades because it creates depth without harshness. But it also communicates: this person has an interior life the camera can only partially access.',
    examples: [
      { film: 'Citizen Kane (1941)', note: "Gregg Toland uses Rembrandt lighting for Kane throughout—the most revealing and the most mysterious portrait of a man in American cinema. The lighting embodies the film\'s argument: you cannot fully know him." },
      { film: 'The Godfather (1972)', note: "Gordon Willis\'s lighting for Vito Corleone—deep shadows, eyes often invisible—creates a patriarch whose full face is never seen. His face is always partly private, partly withheld." },
      { film: 'Portrait of a Lady on Fire (2019)', note: "Claire Mathon uses candlelight in the film\'s interior scenes to create naturally occurring Rembrandt patterns—the faces are beautiful and unknowable in the same moment." },
    ],
  },
  {
    name: 'The Fill Light and Its Absence',
    category: 'Setup',
    description: 'The secondary light that fills in shadows created by the key light. Its absence creates darkness; its presence determines how much of the shadow world is revealed.',
    detail: 'In a standard three-point lighting setup, the fill light softens and partially fills the shadows that the key light creates. Adjusting the ratio between key and fill is one of the most expressive tools in cinematography. A high fill ratio (fill nearly as bright as key) creates a flat, democratic light—nothing is hidden, everything is equally visible. This is the light of hospitals, police procedurals, and comedies that want to imply transparency. A low fill ratio (fill much dimmer than key, or absent entirely) creates deep, dramatic shadows. The face becomes half light, half dark. This is the light of tragedy, mystery, and moral complexity. Gordon Willis was notorious for his low fill ratios—he filled very little, let the shadows be dark, and was called "The Prince of Darkness" because his images dared to be genuinely black.',
    examples: [
      { film: 'The Godfather (1972)', note: "Gordon Willis almost never used fill light for Marlon Brando as Vito—the shadows on his face are genuine black, not filled-in grey. This was controversial at the time. The result is a face that is partly present and partly absent: a man who controls from the darkness." },
      { film: 'All the President\'s Men (1976)', note: "Gordon Willis again—the newsroom scenes are brightly lit with fill to create transparency and efficiency. The garage meetings are deeply shadowed, almost no fill. Light communicates what can and cannot be known." },
    ],
  },
  {
    name: 'Practical Lights',
    category: 'Source',
    description: 'Lights that are visible within the frame and part of the scene\'s world—lamps, screens, candles, neon signs, car headlights.',
    detail: 'A practical light is any light source the audience can see in the frame. It might or might not be the actual source of the scene\'s illumination—often cinematographers supplement practical sources with additional hidden lighting to achieve the look they want while maintaining the illusion of a motivated source. The choice to use practicals and make them visible is a realism argument: the world of this film is lit by real things. But practical lights also carry their own visual vocabulary. A single lamp in an otherwise dark room creates one emotional environment. The blue light of a television screen creates another. Neon signs through rain-streaked windows is the grammar of every noir since Double Indemnity. The candle that could go out at any moment is the grammar of intimacy and fragility.',
    examples: [
      { film: 'Prisoners (2013)', note: "Roger Deakins uses the practical lights of the interiors—lamps, flashlights, overhead fluorescents—as the primary source throughout. The result is a world where every room has a different emotional temperature determined by what sources exist in it." },
      { film: 'Heat (1995)', note: "Dante Spinotti uses the ambient light of Los Angeles at night—neon, headlights, fluorescents—as practical sources for the film\'s exterior scenes. The city itself is the lighting rig." },
      { film: 'Dunkirk (2017)', note: "Hoyte van Hoytema uses practical sunlight—sometimes overcast, sometimes direct—as the dominant source throughout. The changing weather is the changing emotional temperature of the siege." },
    ],
  },
  {
    name: 'Colored Light',
    photo: { type: 'single', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/The_Cabinet_of_Dr_Caligari_1920.jpg/900px-The_Cabinet_of_Dr_Caligari_1920.jpg', alt: 'The Cabinet of Dr. Caligari (1920) expressionist lighting', caption: 'The Cabinet of Dr. Caligari (1920): light painted onto the set itself — psychological state made literal, interiority externalized through illumination' },
    category: 'Expression',
    description: 'Light with a distinct color cast, either from the source itself or from gels placed over lights.',
    detail: 'Colored light in film is almost always expressionistic—it says "this is not how things look, but this is how things feel." The blue light of a cold, empty bedroom. The red light of danger or passion. The green-yellow of sickness or the uncanny. The golden light of memory and warmth. When a filmmaker uses colored light, they are adding a second layer of emotional information—the scene is not just happening, it is happening in a particular emotional key. The risk is that colored light can feel like obvious emotional instruction. The skill is using it with enough restraint and specificity that it feels earned rather than imposed.',
    examples: [
      { film: 'Suspiria (1977)', note: "Dario Argento and Luciano Tovoli use saturated primary colors—deep red, electric blue, vivid green—as the film\'s primary visual language. The colors are not realistic and are not trying to be: they create a fairy tale of dread." },
      { film: 'Drive (2011)', note: "Newton Thomas Sigel uses pink and magenta for the Driver\'s interior world—romantic, slightly unreal. The moment the Driver shifts to violence, the palette shifts with him." },
      { film: 'Her (2013)', note: "Hoyte van Hoytema bathes the film in warm ambers and reds—every scene is lit to communicate the comfort and warmth Theodore is seeking, before making the argument that comfort is insufficient." },
    ],
  },
  {
    name: 'Available Light / Natural Light',
    category: 'Philosophy',
    description: 'Shooting without artificial supplemental lighting, using only what naturally exists in the location.',
    detail: 'Available light shooting is both a practical constraint and a philosophical position. The practical constraint: smaller crews, faster shooting, less control. The philosophical position: the world will light itself if you find the right moment, the right location, the right angle to the window. The Dogme 95 movement made available light a formal rule. Emmanuel Lubezki made it an art form. The result of available light, when used well, is that the film looks like it is happening rather than being staged—the light has the quality of the specific time and place, which no artificial rig can fully replicate. The disadvantage is that the cinematographer must submit to the light rather than control it.',
    examples: [
      { film: 'The Revenant (2015)', note: "Lubezki and Inarritu shot the entire film in natural light—often waiting hours for the right quality of winter light. The film\'s visual beauty is inseparable from its physical reality: this is what that light looked like in those temperatures." },
      { film: 'Beasts of the Southern Wild (2012)', note: "Ben Richardson shot in available light throughout—the result is that the bayou feels genuinely present, its quality of light indistinguishable from documentation." },
    ],
  },
]

export default function LightingAndStoryLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Lighting</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>13 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Lighting as Storytelling
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            Lighting is emotional weather. Noir lives in hard shadow. Romance lives in diffused warmth. Horror uses a single motivated source to make the ordinary threatening. Before an actor speaks, the light has already told you how to feel—and whether to trust what you are seeing.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Category filter display */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {['Foundational', 'Style', 'Setup', 'Source', 'Expression', 'Philosophy'].map(cat => (
            <span key={cat} style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '500', color: 'var(--text-mid)', background: '#fff', border: '1px solid var(--border)', padding: '4px 12px', borderRadius: '20px' }}>
              {cat}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '52px' }}>
          {lightingConcepts.map((concept, i) => (
            <div key={concept.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '26px 28px' }}>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px', flexWrap: 'wrap' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: '700', color: 'var(--text-dark)', margin: 0, flex: 1 }}>
                  {concept.name}
                </h2>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--green)', background: 'var(--green-pale)', border: '1px solid var(--green-border)', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>
                  {concept.category}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', margin: '0 0 14px', fontStyle: 'italic', lineHeight: '1.5' }}>
                {concept.description}
              </p>

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 16px' }}>
                {concept.detail}
              </p>

              {concept.photo && concept.photo.type === 'single' && (
                <div style={{ marginBottom: '16px' }}>
                  <WikiImage src={concept.photo.src} alt={concept.photo.caption}  caption={concept.photo.caption} aspectRatio="16/9" />
                </div>
              )}
              {concept.photo && concept.photo.type === 'pair' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                  <WikiImage src={concept.photo.hard.src} alt={concept.photo.hard.caption}  caption={concept.photo.hard.caption} aspectRatio="4/3" />
                  <WikiImage src={concept.photo.soft.src} alt={concept.photo.soft.caption}  caption={concept.photo.soft.caption} aspectRatio="4/3" />
                </div>
              )}

              <div>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Examples</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {concept.examples.map((ex) => (
                    <div key={ex.film} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'var(--off-white)', borderRadius: '6px', padding: '10px 12px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', flexShrink: 0, minWidth: '160px' }}>{ex.film}</span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{ex.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Writers note */}
        <section style={{ background: 'var(--off-white)', border: '1px solid var(--green-border)', borderRadius: '14px', padding: '28px 28px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            How to write light in prose
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '12px' }}>
            You cannot write "light this scene with Rembrandt lighting." But you can write the physical conditions that imply it. "The single lamp cast half her face into shadow" is Rembrandt lighting described as environment rather than instruction. "The morning light came through the blinds in thin bars across the floor" is chiaroscuro as observation.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '12px' }}>
            The quality of light in prose—whether a scene is bright and shadowless or half-dark, warm or cold, flickering or steady—determines the emotional temperature of the scene before anything happens in it. A scene described in cold fluorescent light has a different emotional register than the same scene in candlelight. The writer who understands lighting understands this not as a technical note but as a compositional tool: they are setting the emotional context before the characters speak.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: 0 }}>
            Study the specific quality of the light in your favorite fiction—not the atmosphere in general, but the light specifically. Where is it coming from? Is it hard or soft? Warm or cool? What does it reveal and what does it hide? The best writers are precise about light without making light the subject.
          </p>
        </section>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/camera-movement" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Camera Movement
          </Link>
          <Link href="/visual-craft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Visual Craft home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </PaywallBlur>
    </div>
  )
}

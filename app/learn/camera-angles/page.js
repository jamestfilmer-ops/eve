import Link from 'next/link'
import { AngleDiagram, DutchAngleDiagram } from '../../components/ShotDiagram'
import { WikiImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Camera Angles and Power—Visual Storytelling | Eve',
  description: 'How camera angle communicates power, vulnerability, and psychological state. High angle, low angle, Dutch angle, bird\'s eye—what each tells the audience before a character speaks.',
  keywords: 'camera angles storytelling, low angle meaning, high angle film, Dutch angle, bird\'s eye view film, eye level shot, camera angle power dynamics',
}

const angles = [
  {
    name: 'Eye Level',
    icon: '-- --',
    description: 'Camera positioned at the subject\'s eye height, horizontal.',
    powerDynamic: 'Neutral. No power differential communicated.',
    emotionalQuality: 'Democratic, observational, matter-of-fact. The audience is an equal to the character—not above them, not below. Eye-level is the baseline that makes every other angle readable as a deviation.',
    whenFilmmakersUseIt: 'As the default for dialogue and scene coverage. For characters the film wants to treat without judgment. For documentary-realist films that want to imply objectivity. Deliberately as contrast after a sustained sequence of loaded angles.',
    craft: 'Eye-level\'s power is what it withholds. A film that uses only eye-level feels flat—not because the angle is wrong but because the audience has no angle-grammar to decode. But a film that returns to eye-level after a sequence of low or high angles produces a specific relief: the world is normal again. Or seems to be.',
    examples: [
      { film: 'Boyhood (2014)', note: 'Richard Linklater shoots almost exclusively at eye level throughout the twelve-year span—creating the sense of a documentary record, of time passing without drama. The angle is itself the argument: this is just life, unexceptional.' },
      { film: 'Manchester by the Sea (2016)', note: "Kenneth Lonergan's flat, eye-level coverage refuses to editorialize about Lee's grief. The camera watches as a neighbor would watch—present but not presuming to understand." },
      { film: 'The 400 Blows (1959)', note: "Truffaut uses eye-level throughout Antoine Doinel's story to refuse the condescension a high-angle view of childhood would imply. The camera is at Antoine's level—his world is as real and as valid as any adult's." },
    ],
  },
  {
    name: 'Low Angle',
    icon: '/ --',
    description: 'Camera below the subject\'s eye level, tilting upward.',
    powerDynamic: 'Subject appears dominant, powerful, threatening, heroic, or mythological.',
    emotionalQuality: 'The character towers. The sky or ceiling behind them makes them seem larger than the world. The low angle makes the audience small—they are looking up at someone who is above them, and the body responds to visual hierarchy even in fiction.',
    whenFilmmakersUseIt: 'For villain introductions to establish threat. For hero moments to create mythological register. For objects that carry danger or significance. For authority figures when the film is asking the audience to feel their power.',
    craft: 'The low angle is the most abused angle in cinema because filmmakers confuse it with "dramatic." A dramatic scene shot at eye level reads as intimate and human. A dramatic scene shot at low angle reads as mythological and remote. They are not the same thing. Reserve the low angle for moments when the character genuinely needs to feel larger than human scale.',
    examples: [
      { film: 'Citizen Kane (1941)', note: "Welles uses low angles throughout to establish Kane's dominance—and crucially, the angles become less extreme as Kane loses power. The angle history of the film is the arc of his rise and fall." },
      { film: 'The Dark Knight (2008)', note: "Christopher Nolan shoots the Joker from low angles to make him seem genuinely threatening even when he is physically still. The angle does the work the performance does not need to." },
      { film: 'No Country for Old Men (2007)', note: 'Anton Chigurh is repeatedly shot from low angles that make him feel less like a man than a force. The angle codes him as elemental rather than human.' },
      { film: 'Triumph of the Will (1935)', note: 'Riefenstahl systematically used low angles on Hitler to create the visual grammar of fascist power—the definitive (and most disturbing) example of what the low angle communicates when deployed without restraint.' },
    ],
  },
  {
    name: 'High Angle',
    icon: 'down',
    description: 'Camera above the subject\'s eye level, tilting downward.',
    powerDynamic: 'Subject appears small, vulnerable, observed, controlled, or overwhelmed.',
    emotionalQuality: 'The character is diminished by being seen from above. The ground they stand on becomes visible—they are not elevated but grounded, earthbound. High angles are also surveillance angles: the camera as authority watching from above.',
    whenFilmmakersUseIt: 'To establish a character\'s powerlessness at the beginning of their story. For moments when a character is trapped, cornered, or under observation. For crowd scenes where individuals are dissolved into patterns. For horror sequences where the camera acts as a watching presence.',
    craft: 'The high angle communicates vulnerability so effectively that it can paradoxically make an already-sympathetic character more sympathetic. The audience responds to smallness with protectiveness. Use this deliberately: a high angle on a character the audience loves creates anxiety; a high angle on a character the audience fears creates satisfaction. Both are manipulations the filmmaker earns or wastes.',
    examples: [
      { film: 'Psycho (1960)', note: "Hitchcock cranes to a high angle for the reveal of Mother's room—the camera\'s sudden elevation withholds information while placing the audience in a God-like position that Hitchcock will immediately subvert." },
      { film: 'The Silence of the Lambs (1991)', note: "The FBI training sequence opens with a high angle on Clarice running—she is small, observed, not yet defined. The angle introduces her as someone being evaluated before she has spoken a word." },
      { film: 'Schindler\'s List (1993)', note: "Spielberg uses high angles on the Jews being processed through the camp to show their transformation into bureaucratic objects—individuals dissolved into columns and lists from above." },
      { film: 'The Shining (1980)', note: "The maze sequence uses overhead and high-angle shots on Jack to make him simultaneously threatening (he is hunting) and ridiculous (he is lost, running in circles). The high angle is ironic here." },
    ],
  },
  {
    name: 'Bird\'s Eye View',
    icon: '| v',
    description: 'Camera directly overhead, pointing straight down. A 90-degree tilt from horizontal.',
    powerDynamic: 'Total surveillance. God-like or systemic perspective. Characters become diagrams.',
    emotionalQuality: 'At a true overhead angle, human figures become abstract shapes—their individuality is lost and they become elements in a pattern. This has two uses: the choreographic (showing a spatial relationship or movement that is only legible from above) and the dehumanizing (showing how the system sees individuals—as data, as pieces, as things to be managed).',
    whenFilmmakersUseIt: 'Musical and dance sequences where the pattern is the point. War and disaster sequences where the scale of human loss must be shown. Surveillance or bureaucratic sequences where characters are reduced to objects. Horror sequences establishing that something is watching from above.',
    craft: 'The bird\'s eye view is the most alienating angle in standard cinema vocabulary because it removes the face—the thing the audience uses to locate empathy. A crowd shot from directly overhead has no individual faces. This can be used to create horror (the individual is gone) or beauty (the pattern that emerges when individuals are seen as part of a larger system). The filmmaker must know which they are making.',
    examples: [
      { film: 'Rear Window (1954)', note: "Hitchcock\'s overhead shots of the apartment courtyard establish the surveilling structure of the film—Jefferies watches, and we watch Jefferies watching, from above." },
      { film: 'Busby Berkeley musicals (1930s)', note: "Berkeley\'s overhead shots of dancers forming kaleidoscopic patterns were the definitive use of bird\'s eye view—the dancers become flowers, geometric shapes, abstract patterns rather than people." },
      { film: 'Goodfellas (1990)', note: "Scorsese uses overhead shots of violence to create aesthetic distance—the choreography of murder seen from above is disturbing precisely because it is beautiful." },
      { film: 'Moonlight (2016)', note: "Barry Jenkins uses a slow overhead crane on Chiron as a child lying in the grass—the angle is protective rather than surveilling, a God that is watching over rather than watching." },
    ],
  },
  {
    name: 'Dutch Angle',
    icon: 'tilt',
    description: 'Camera tilted on its horizontal axis (the "roll" axis), so the frame itself is skewed.',
    powerDynamic: 'Neutral in terms of height—this is about psychological state, not power.',
    emotionalQuality: 'Unease, disorientation, moral disorder, psychological instability, the world tilting. The Dutch angle communicates that something is wrong with the world or the character\'s perception of it. Because horizontal is the baseline of normal visual experience (the horizon), tilting the camera away from it registers subconsciously as wrong.',
    whenFilmmakersUseIt: 'For moments of psychological crisis or revelation. In horror sequences when the supernatural distorts reality. For characters who are morally compromised or whose view of the world is distorted. Occasionally for comedy when the distortion is ironic.',
    craft: 'The Dutch angle is the most over-used and most misunderstood angle in contemporary cinema. It does not mean "this is dramatic." It means "the world is tilted." Used for every villain in an action film, it becomes wallpaper. Reserved for the specific moment when a character\'s reality shifts—a betrayal revealed, a delusion broken, a threat that is genuinely wrong rather than merely dangerous—it recovers its power.',
    examples: [
      { film: 'The Third Man (1949)', note: "Carol Reed uses Dutch angles throughout to place post-war Vienna as a morally tilted world—one where occupation, corruption, and complicity have made normal reality impossible. Every angle is a moral statement." },
      { film: 'Batman (1966 TV series)', note: "Adam West\'s Batman deployed Dutch angles for every villain scene—satirically, as a visual shorthand that the show knew it was camp. The angle became self-parody." },
      { film: 'Oldboy (2003)', note: "Park Chan-wook uses canted frames at moments of maximum psychological vertigo—the angle becomes the physical expression of a mind trying to make sense of something that cannot be made sense of." },
      { film: 'Requiem for a Dream (2000)', note: "Aronofsky uses Dutch angles as part of a whole visual grammar of addiction—the tilted frames register the characters\' distorted perception of their own reality." },
    ],
  },
  {
    name: 'Over-the-Shoulder (OTS)',
    icon: '( --)',
    description: 'Camera placed behind and to the side of one character, looking past them at another. Technically a shot-scale/position choice, but functions as an angle.',
    powerDynamic: 'The character whose shoulder occupies the foreground holds visual dominance—they are literally larger and closer to the audience.',
    emotionalQuality: 'Intimacy with asymmetry. The OTS shot is the standard grammar of dialogue—it gives the audience a position within the conversation, behind one character, seeing the other. The choice of which character\'s shoulder to favor, and how much, communicates the power balance of the scene.',
    whenFilmmakersUseIt: 'For almost all dialogue coverage. For interrogation scenes where the power differential must be visible. For scenes where the audience needs to feel they are inside the conversation rather than observing it.',
    craft: 'The most important OTS decision is shoulder size. A narrow OTS (the foreground shoulder barely present) emphasizes the character being looked at. A wide OTS (the foreground character occupying 30-40% of the frame) emphasizes the character doing the looking. Directors who understand this shift the shoulder size within a conversation as the power shifts—an incredibly precise tool that most audiences never consciously register.',
    examples: [
      { film: 'The Social Network (2010)', note: "The deposition scenes are all tight OTS shots—whoever is in the foreground is making an accusation. The angle is always an accuser looking at someone being accused." },
      { film: 'When Harry Met Sally (1989)', note: "Rob Reiner and Ephron use OTS coverage that equalizes Harry and Sally throughout most of the film—the shoulder size is balanced because the film argues they are equals until the ending." },
      { film: 'Silence of the Lambs (1991)', note: "Jonathan Demme breaks the OTS convention entirely for the Lecter conversations, shooting both characters in direct address—looking straight into camera. The effect is to place the audience in the position of both Clarice and Lecter simultaneously." },
    ],
  },
  {
    name: 'Point of View (POV)',
    icon: '[ >',
    description: 'Camera positioned to represent exactly what a specific character sees.',
    powerDynamic: 'The audience becomes the character. Whatever power or vulnerability they have, the audience shares.',
    emotionalEffect: 'Total subjective identification. The most immersive angle available—the audience is not watching someone experience something, they are experiencing it. Also the most limiting: POV only works when the audience is willing to fully inhabit the character. Used carelessly, it can feel like a video game. Used precisely, it is the most intimate angle in cinema.',
    whenFilmmakersUseIt: 'For horror sequences where the audience must share the character\'s fear. For moments of revelation that need full subjective weight. For establishing obsession (see the subject through the obsessive\'s eyes). For action sequences where disorientation is the point.',
    craft: 'The POV shot is almost always a fragment—a brief incursion into pure subjectivity before the camera returns to a more neutral position. A sustained POV sequence (like Hardcore, 1979, or many VR experiments) often produces discomfort rather than identification because the audience cannot maintain pure first-person identification for long. The power of POV comes partly from its contrast with the surrounding shots.',
    examples: [
      { film: 'Halloween (1978)', note: "John Carpenter opens the film with a sustained POV of the killer—the audience is inside Michael Myers before they know who he is. The terror comes from identification: this is how murder feels from the inside." },
      { film: 'The Lady in the Lake (1947)', note: "Robert Montgomery shot the entire film in first-person POV—and demonstrated its limits. The audience could not maintain identification for 100 minutes. The experiment proved the shot works as fragment, not sustained perspective." },
      { film: 'Enter the Void (2009)', note: "Gaspar Noe sustains a near-POV perspective for most of the film's running time, creating a genuinely hallucinatory experience that works precisely because the character is dead and the POV is therefore already strange." },
    ],
  },
]

const thePrincipleOfDeviation = [
  'Camera angle only communicates when it deviates from the baseline. A film shot entirely in low angles is not a film about powerful people—it is a film where the low angle means nothing because there is no eye-level to deviate from.',
  'The most effective angle work in cinema uses a consistent baseline and reserves loaded angles for specific moments of maximum significance. Study how Kubrick, Welles, and Lean establish their visual grammar in the first act—and how each deviation from that grammar carries weight.',
  'Angle and lens work together. A low angle with a wide lens exaggerates the subject\'s dominance—the wide lens distorts perspective, making the near parts of the subject larger relative to the far parts. A low angle with a long lens is more compressed and less expressionistic. These are different statements.',
  'In prose writing, angle is viewpoint. A character described from below (looking up at them) is powerful. Described from above (looking down) is diminished. The camera angle of prose is the implied physical position of the narrator—where they are standing relative to what they are describing.',
]

export default function CameraAnglesLesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Lesson header */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/visual-craft" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Visual Craft
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Camera Angles</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>10 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1B3A4B 0%, var(--green) 55%, #3A7070 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Camera Angles and Power
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            The angle of the camera is always a point of view about who has power. A character shot from below appears dominant. Shot from above, they are diminished. Shot at eye level, they are human. This is not metaphor—it is the grammar of the medium, operating before any word is spoken.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* The 7 angles */}
        <AngleDiagram />
        <DutchAngleDiagram />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '60px' }}>
          {angles.map((angle, i) => (
            <div key={angle.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '26px 28px' }}>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '8px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: '700' }}>{i + 1}</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 4px' }}>
                    {angle.name}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: 0, fontStyle: 'italic' }}>
                    {angle.description}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Power dynamic</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{angle.powerDynamic}</p>
                </div>
                <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Emotional quality</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{angle.emotionalQuality}</p>
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px 16px', marginBottom: '14px' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>Craft note</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{angle.craft}</p>
              </div>

              <div>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Examples</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {angle.examples.map((ex) => (
                    <div key={ex.film} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'var(--off-white)', borderRadius: '6px', padding: '10px 12px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', flexShrink: 0, minWidth: '180px' }}>{ex.film}</span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{ex.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Principle of Deviation */}
        <section style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '14px', padding: '32px 30px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--green)', marginBottom: '16px' }}>
            The principle of deviation: why angle only works in context
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {thePrincipleOfDeviation.map((point, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.75', margin: 0 }}>{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Public domain examples */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', paddingBottom: '14px', borderBottom: '2px solid var(--green)' }}>
            Camera angles in the public domain
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '20px' }}>
            These pre-1928 films are fully in the public domain. They are also where many of cinema's angle conventions were invented. Study them as primary sources.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            <WikiImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Nosferatu_Orlok.jpg/480px-Nosferatu_Orlok.jpg"
              alt="Nosferatu 1922 - extreme Dutch angle and shadow"
              caption="Nosferatu (1922)—F.W. Murnau. German Expressionism invented the horror film's visual grammar: deep shadows, extreme angles, distorted sets."
              credit={true}
              aspectRatio="4/5"
            />
            <WikiImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/440px-Metropolis_movie_image.jpg"
              alt="Metropolis 1927 - low angle industrial scale"
              caption="Metropolis (1927)—Fritz Lang. Low angles and extreme wide shots established visual language for depicting systems larger than individuals."
              credit={true}
              aspectRatio="4/5"
            />
            <WikiImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/The_Cabinet_of_Dr_Caligari_1920.jpg/480px-The_Cabinet_of_Dr_Caligari_1920.jpg"
              alt="Cabinet of Dr Caligari 1920 - expressionist angles"
              caption="The Cabinet of Dr. Caligari (1920)—painted sets with built-in angular distortion. The Dutch angle is the world, not the camera."
              credit={true}
              aspectRatio="4/5"
            />
          </div>
        </section>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/cinematography" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Shot Types
          </Link>
          <Link href="/learn/camera-movement" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Camera Movement
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

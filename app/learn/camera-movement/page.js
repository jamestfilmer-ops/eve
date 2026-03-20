import Link from 'next/link'

export const metadata = {
  title: 'Camera Movement and Emotional Meaning | Eve',
  description: 'What dolly, zoom, handheld, steadicam, pan, tilt, and crane shots communicate emotionally. How camera movement creates meaning before any actor speaks.',
  keywords: 'camera movement film meaning, dolly shot emotion, handheld camera effect, steadicam storytelling, zoom shot meaning, tracking shot film',
}

const movements = [
  {
    name: 'Static / Locked-Off',
    technical: 'Camera mounted on a fixed tripod. Zero movement.',
    emotionalRegister: 'Control. Formality. Dread. Observation without intervention.',
    deepDive: 'A locked camera is not a neutral camera—it is a camera that has decided not to follow, not to approach, not to retreat. That refusal is itself a statement. When a locked camera watches a character in distress, it implies the film does not feel the obligation to comfort them. When a locked camera watches something threatening approach, the inability to escape creates claustrophobia. The static frame says: the world is fixed, and you must watch what happens inside it.',
    mastersWhoUseIt: 'Michael Haneke almost never moves the camera—the locked frame is his primary tool for implicating the audience in what they are watching. You cannot look away, and the camera will not help you by cutting. Wes Anderson uses locked symmetrical frames to create his storybook world of controlled perfection. Kubrick uses it in combination with his characteristic slow zooms to create unease that is almost imperceptible.',
    examples: [
      { film: 'Funny Games (1997)', note: "Haneke's locked camera during the family's torture refuses the kinetic relief of moving coverage. The audience must sit still and watch—which is, the film argues, what they came to do." },
      { film: 'The Grand Budapest Hotel (2014)', note: "Anderson's locked, perfectly symmetrical frames create a world of enforced order—a world that is beautiful precisely because it is completely controlled." },
      { film: 'Jeanne Dielman (1975)', note: "Chantal Akerman shoots Jeanne's housework in locked frames of exact duration—the three-hour film is a formal argument about what women's labor actually looks like when represented without cinematic shorthand." },
    ],
  },
  {
    name: 'Pan',
    technical: 'Camera rotates horizontally on a fixed axis (left to right or right to left). The camera itself does not move through space.',
    emotionalRegister: 'Revelation. Connection. Survey. Following movement across a horizontal plane.',
    deepDive: 'The pan reveals. Moving left to right follows the Western reading direction and feels like natural discovery. Moving right to left feels slightly against the grain, creating mild unease. A slow pan across a landscape is contemplative—the world is being offered for appreciation. A fast pan (a whip pan) is disorienting or punchy, used for transitions or comic timing. The pan that connects two subjects creates a visual argument that they are related—that the space between them matters.',
    mastersWhoUseIt: 'Sergio Leone uses slow pans across the West Texas and Italian landscape to give it mythological scale. Edgar Wright uses whip pans as punctuation—they are not transitions but exclamation marks.',
    examples: [
      { film: 'Once Upon a Time in the West (1968)', note: "Leone's opening-sequence pan across the faces of the three gunmen—three slow close-ups connected by the pan—gives them monumental weight before they have spoken or moved." },
      { film: 'Shaun of the Dead (2004)', note: "Edgar Wright uses whip pans to cut between related moments with comic velocity—the cuts are gags, not just transitions." },
      { film: 'The Searchers (1956)', note: "Ford pans across the Monument Valley landscape as if the landscape itself is the protagonist—the space between the characters and the horizon is always the subject." },
    ],
  },
  {
    name: 'Tilt',
    technical: 'Camera rotates vertically on a fixed axis (up to down or down to up).',
    emotionalRegister: 'Revelation of scale. Establishing power through height. Revealing what is above or below.',
    deepDive: 'The tilt up reveals height—and height in cinema almost always codes as power, significance, or threat. Tilting up a building communicates its dominance before you have seen who is inside. Tilting up a character from feet to face is a classic introduction that moves from the particular (their shoes, their posture, how they stand) to the general (their face, their expression). The tilt down reveals what is beneath—danger, a body, a depth—and typically carries unease.',
    mastersWhoUseIt: 'Used by every cinematographer as a practical tool, but the deliberate tilt for effect rather than coverage is a Lean, Ford, or Leone move—they tilt to give landscapes and figures their full vertical dimension.',
    examples: [
      { film: 'The Good, the Bad and the Ugly (1966)', note: "Leone tilts up from Clint Eastwood's boots to his face in multiple shots throughout the trilogy—the feet-to-face reveal is his signature character introduction." },
      { film: 'Metropolis (1927)', note: "Lang tilts up the buildings of the future city to communicate inhuman scale—the workers are dwarfed by the vertical world above them." },
      { film: 'Vertigo (1958)', note: "Hitchcock uses a combination tilt-and-zoom (the prototype for the dolly-zoom) to communicate Scottie's fear of heights—the tilt down the staircase while the zoom extends creates impossible spatial distortion." },
    ],
  },
  {
    name: 'Dolly / Track',
    technical: 'Camera physically moves through space on a wheeled track or dolly. The camera itself travels—not just rotates.',
    emotionalRegister: 'Approach. Intimacy building. Revelation through movement. The world unfolding.',
    deepDive: 'The dolly move is the most emotionally precise camera movement because it mirrors how we actually move toward things we care about. A dolly-in builds intensity—the audience is brought closer to the subject, sharing the experience of approach. A dolly-out creates revelation (pulling back to show what surrounds the subject) or withdrawal (the camera leaving as something ends). A lateral dolly track follows a character, keeping pace with them—the most neutral movement, used when the world should unfold rather than the subject be approached. The specific magic of a dolly move (vs a zoom) is that it changes the spatial relationship of all objects in the frame—foreground elements pass, the perspective shifts. This creates a three-dimensional, lived-in quality that a zoom cannot replicate.',
    mastersWhoUseIt: 'Scorsese\'s tracking shots (often combined with a crane) are the most celebrated in American cinema. Spielberg uses the dolly-in for maximum emotional impact at key plot points. Kubrick uses slow dollies in wide corridors to create the crawling dread of The Shining.',
    examples: [
      { film: 'Goodfellas (1990)', note: "The Copacabana sequence is a 3-minute unbroken tracking shot following Henry Hill through the club's back corridors and into the main floor. The continuous movement communicates his ease and access—the world opens for him." },
      { film: 'Jaws (1975)', note: "The dolly-zoom on Brody\'s face at the beach is the first use of the \"Vertigo effect\" in a major commercial film. The camera dollies backward as the zoom lens extends—the subject stays the same size while the background appears to collapse. Brody\'s psychological vertigo becomes spatial." },
      { film: 'The Shining (1980)', note: "Kubrick's slow dollies down the Overlook's corridors—almost always from behind Danny or Jack—create the sensation of being followed at a constant, unhurried pace. The pace is more frightening than a fast move would be." },
    ],
  },
  {
    name: 'Dolly Zoom (Vertigo Effect)',
    technical: 'The camera dollies in one direction while the zoom lens adjusts in the opposite direction. The subject stays the same size while the background appears to expand or collapse.',
    emotionalRegister: 'Psychological vertigo. The ground shifting. Revelation that destabilizes reality.',
    deepDive: 'The dolly zoom is one of cinema\'s most specific tools—it communicates one thing: that the character\'s reality has just shifted beneath them. Because the subject stays stationary while the world around them moves, the viewer experiences a spatial impossibility that registers as psychological. It is the feeling of the floor dropping, the walls closing in, the world rearranging itself around a fixed point. Discovered by Irmin Roberts for Hitchcock\'s Vertigo, it has been used in virtually every thriller and horror film since—and consequently, like all overused techniques, has lost some of its power. But deployed with restraint, for the specific moment when a character\'s reality collapses, it remains one of the most precise emotional tools in the medium.',
    mastersWhoUseIt: 'Hitchcock (inventor). Spielberg (popularized it for commercial cinema with Jaws). Scorsese (used it in Goodfellas for paranoia).',
    examples: [
      { film: 'Vertigo (1958)', note: "The original. Scotties fear of heights is rendered as spatial impossibility—the staircase simultaneously elongating and compressing. The technique carries the film's central argument about obsession distorting reality." },
      { film: 'Jaws (1975)', note: "Brody on the beach when he realizes the shark has taken another victim. Spielberg said he wanted to show \"the world falling away\" from Brody without moving him. The technique was the solution." },
      { film: 'Goodfellas (1990)', note: "Henry\'s paranoid spiral near the end uses a brief dolly zoom to register his psychological state without dialogue—the technique communicates what words cannot." },
    ],
  },
  {
    name: 'Handheld',
    technical: 'Camera held or shoulder-mounted by the operator. Movement is organic and contains micro-tremor.',
    emotionalRegister: 'Immediacy. Raw presence. Documentary truth. Chaos. Being inside the experience.',
    deepDive: 'Handheld says: I am here. It is the camera of journalism, of the eyewitness, of the person who could not stay still because what they were filming would not allow stillness. The micro-tremor of handheld coverage creates a sense of biological presence—a human is holding this camera, breathing, adjusting. This is why handheld feels more "real" than tripod coverage, even in fictional films. The tremble is the trace of a body. When deployed in contrast with otherwise stable camera work, handheld becomes a signal: something has shifted from controlled to chaotic, from observed to experienced, from fictional distance to present-tense emergency.',
    mastersWhoUseIt: 'Emmanuel Lubezki (Children of Men, The Revenant) uses handheld in conjunction with natural light to create immersive tactility. The Dardenne brothers use only handheld, creating the feeling that their fictional stories are happening as they are filmed.',
    examples: [
      { film: 'Children of Men (2006)', note: "The Bexhill battle sequence is sustained handheld—the camera moves through the combat with the characters, getting dirty and crowded. The effect is of being inside a disaster, not watching one." },
      { film: 'Saving Private Ryan (1998)', note: "Spielberg and Kaminski used handheld for Omaha Beach to create the disorientation of combat—the camera does not know where the threat is coming from, just as the soldiers do not." },
      { film: 'The Battle of Algiers (1966)', note: "Pontecorvo used handheld to create documentary authenticity for a staged narrative film—at the time, many audiences believed it was a real documentary." },
    ],
  },
  {
    name: 'Steadicam',
    technical: 'A gyroscopically stabilized rig worn by the camera operator, allowing smooth movement through space without the tremor of handheld.',
    emotionalRegister: 'Fluid. Gliding. Slightly uncanny. The sensation of controlled dreamlike movement.',
    deepDive: 'Steadicam occupies the uncanny valley between handheld and dolly. It moves through space as a person does—navigating corners, crossing uneven terrain—but with a smoothness that no person achieves. This creates a specific quality: natural in trajectory but supernatural in fluidity. In horror, steadicam following a character creates the feeling of something moving perfectly behind them. In celebratory sequences (a character arriving at a party, moving through a crowd), it creates a sense of frictionless social ease. The steadicam is the camera of characters who are at home in their world—until the film inverts that and makes the gliding movement threatening.',
    mastersWhoUseIt: 'Kubrick was one of the first to use steadicam extensively (The Shining, 1980—the same year the rig was invented). Scorsese used it for the Copacabana shot in Goodfellas. The tool was invented by Garrett Brown.',
    examples: [
      { film: 'The Shining (1980)', note: "Kubrick\'s steadicam follows Danny on his tricycle through the Overlook\'s corridors—the smooth gliding movement is comfortable until the camera turns a corner and shows the Grady girls. The horror is partly in the contrast between the smoothness of the movement and what it reveals." },
      { film: 'Rocky (1976)', note: "The training montage uses steadicam to follow Rocky through Philadelphia—the first major use of the technique in popular cinema. The freedom of movement created the sense of possibility the montage needed." },
      { film: 'Boogie Nights (1997)', note: "Paul Thomas Anderson opens the film with a 3-minute steadicam shot that introduces the entire cast—the camera glides through a nightclub as if it is a participant, not an observer." },
    ],
  },
  {
    name: 'Crane / Aerial',
    technical: 'Camera mounted on an extending crane arm or drone, capable of large vertical and horizontal arcs.',
    emotionalRegister: 'Grandeur. God\'s perspective. Revelation of scale. Fate arriving from above.',
    deepDive: 'The crane shot that rises from a close-up to a wide shot is one of cinema\'s most powerful moves—it is the gesture of perspective itself, the withdrawal from the particular to the universal. What looked like one story becomes part of a larger story. What felt urgent becomes a small thing in a large world. Descending crane shots do the opposite: the abstract becomes specific, the universal becomes particular. Fate arrives. This is also why the crane shot is the grammar of endings—it lifts the audience out of the story and returns them to the world.',
    mastersWhoUseIt: 'David Lean used crane shots for the grandeur of historical epics. PTA and Scorsese use crane-and-steadicam combinations. Spielberg uses the crane reveal as a plot tool.',
    examples: [
      { film: 'Gone with the Wind (1939)', note: "The crane that pulls back from Scarlett to reveal the full field of Confederate wounded is one of cinema\'s most celebrated reveals—the camera widens from an individual to a catastrophe." },
      { film: 'Magnolia (1999)', note: "Paul Thomas Anderson\'s descending crane shots create the sense of fate arriving from above—the camera descends on each character as if chosen by something larger than themselves." },
      { film: 'The Revenant (2015)', note: "Lubezki uses aerial shots of the wilderness not as establishing shots but as statements—the landscape is indifferent to the human story happening within it." },
    ],
  },
]

export default function CameraMovementLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Camera Movement</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>12 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Camera Movement and Emotional Meaning
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            How the camera moves—or refuses to move—is an argument about what the story feels like from inside. A locked camera creates dread. Handheld creates presence. Steadicam creates something between the two: fluid movement with uncanny smoothness. Each technique communicates before a character speaks.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '52px' }}>
          {movements.map((move, i) => (
            <div key={move.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '26px 28px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '8px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: '700' }}>{i + 1}</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 4px' }}>{move.name}</h2>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: 0, fontStyle: 'italic' }}>{move.technical}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Emotional register</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{move.emotionalRegister}</p>
                </div>
                {move.mastersWhoUseIt && (
                  <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Masters</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{move.mastersWhoUseIt}</p>
                  </div>
                )}
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px 16px', marginBottom: '14px' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>How it works</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{move.deepDive}</p>
              </div>

              <div>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Examples</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {move.examples.map((ex) => (
                    <div key={ex.film} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'var(--off-white)', borderRadius: '6px', padding: '10px 12px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', flexShrink: 0, minWidth: '170px' }}>{ex.film}</span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{ex.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/camera-angles" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Camera Angles
          </Link>
          <Link href="/learn/lighting-and-story" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Lighting
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

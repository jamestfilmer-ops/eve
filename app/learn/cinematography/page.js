import Link from 'next/link'
import { ShotScaleDiagram } from '../../components/ShotDiagram'
import { WikiImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Cinematography: Shot Types, Angles and Camera Movement | Eve',
  description: 'A complete guide to shot types, camera angles, camera movement, and what each communicates emotionally. For screenwriters, novelists, and anyone who wants to understand how cinema works.',
  keywords: 'shot types film, camera angles storytelling, close up meaning film, wide shot meaning, cinematography for writers, camera movement emotion, film grammar',
}

const shotTypes = [
  {
    name: 'Extreme Wide Shot (EWS)',
    aka: 'Extreme Long Shot',
    description: 'The subject is tiny or invisible in the frame—the landscape or environment dominates completely.',
    emotionalEffect: 'Establishes scale and insignificance. The character is overwhelmed by their environment, or the environment itself is the subject. Used to establish alien or hostile landscapes, to show the beginning of a journey, or to end a film by returning the character to their smallness.',
    whenToUse: 'Opening shots that establish a world before the character. Moments of crisis when human action is dwarfed by the scale of the problem. Endings that resolve the character back into the world.',
    examples: [
      { film: 'Lawrence of Arabia (1962)', note: "David Lean uses extreme wide shots of the desert to make Lawrence seem both heroic and deluded—a tiny figure who believes he controls a world that will simply continue without him." },
      { film: 'The Revenant (2015)', note: "Lubezki's vast landscapes make the frontier feel genuinely inhospitable—the wilderness is not a backdrop but a force. The wide shots argue that survival is unlikely before a bear appears." },
      { film: 'Mad Max: Fury Road (2015)', note: "The post-apocalyptic Australian landscape in EWS communicates the scale of civilization's collapse. The Citadel and the caravan are insect-small against the waste." },
    ],
  },
  {
    name: 'Wide Shot (WS)',
    aka: 'Long Shot, Establishing Shot',
    description: 'The character is visible full-length but the environment still has significant presence. Classic establishing shot.',
    emotionalEffect: 'Locates the character in their world. Shows their relationship to their environment and to other characters. At the start of a scene, it establishes geography. Used as a re-establishing shot after close work to orient the audience.',
    whenToUse: 'Beginning of scenes to establish location. Moments of confrontation where the audience needs to see both characters and the space between them. Action sequences that would be incomprehensible without spatial orientation.',
    examples: [
      { film: 'Once Upon a Time in the West (1968)', note: "Leone's wide shots of the railroad and the landscape are arguments about the West as a place of collision—industrial capitalism arriving in an anarchic wilderness. The space between characters in these shots IS the tension." },
      { film: 'The Shining (1980)', note: "Kubrick uses wide shots of the Overlook's corridors to make them feel like the camera itself is stalking the characters—the wide, perfectly symmetrical hallways create dread through their indifferent scale." },
      { film: 'Brokeback Mountain (2005)', note: "Ang Lee's wide shots of the Wyoming mountains dwarf Ennis and Jack, coding their relationship as both vast and impossibly fragile—small against a landscape that has no category for them." },
    ],
  },
  {
    name: 'Medium Shot (MS)',
    aka: 'Mid Shot',
    description: 'Frames the character from roughly the waist up. The workhorse of dialogue scenes and character-focused storytelling.',
    emotionalEffect: 'Neutral engagement—the audience has access to the character without the intensity of a close-up or the distance of a wide. Shows body language and facial expression simultaneously. The default shot for scenes where multiple characters interact.',
    whenToUse: 'Dialogue scenes where emotional temperature is moderate. Character introductions that need to convey both face and posture. Any scene where what the character does with their hands or body matters.',
    examples: [
      { film: 'Network (1976)', note: "Lumet and Chayefsky use medium shots for the business negotiations—keeping the camera at a comfortable news-magazine distance that mirrors the media world\'s comfortable relationship to catastrophe." },
      { film: 'Marriage Story (2019)', note: "Baumbach uses medium shots for most of the domestic scenes—a deliberate choice to keep intimacy modest until the argument scene, where the camera finally crashes into close-up." },
    ],
  },
  {
    name: 'Medium Close-Up (MCU)',
    aka: 'Cowboy Shot (when wider)',
    description: 'From chest or shoulder to just above the head. Closer than a medium shot but not at full close-up intensity.',
    emotionalEffect: 'Heightened engagement. The audience is drawn in without full intimacy. Standard for emotional dialogue and reaction shots. Conveys facial expression clearly while preserving some physical context.',
    whenToUse: 'Emotional conversations where the audience needs to read the character\'s face. Moments of dramatic decision. Interview and interrogation scenes. Any scene where the character\'s internal state must be readable.',
    examples: [
      { film: 'The Silence of the Lambs (1991)', note: "Jonathan Demme famously shot Lecter and Clarice\'s conversations at medium close-up—and directed his actors to look directly into camera, breaking the fourth wall. The audience is being examined, not Clarice." },
    ],
  },
  {
    name: 'Close-Up (CU)',
    aka: 'Full Close-Up',
    description: 'The face fills the frame. Everything is expression and interiority. One of the most powerful shots in cinema.',
    emotionalEffect: 'Maximum intimacy and emotional access. The audience is inside the character\'s experience. Faces become landscapes at this scale—a slight tremor of the lip, a glance to the left, the eyes filling with water. The close-up was the invention that made cinema capable of psychological complexity.',
    whenToUse: 'Peak emotional moments—the decision, the loss, the revelation. The moment of a character\'s internal shift that the plot depends on. Any moment where the story lives in the face rather than the action.',
    examples: [
      { film: 'The Passion of Joan of Arc (1928)', note: "Carl Dreyer\'s entire film is close-ups of Maria Falconetti\'s face. Nothing else. The film is considered one of the greatest ever made. The face is the whole world." },
      { film: 'Gravity (2013)', note: "Cuaron and Lubezki use extreme close-ups of Sandra Bullock\'s face inside the space helmet to create claustrophobic intimacy against the vastness of the extreme wide shots. The film lives in the oscillation between the two." },
      { film: 'No Country for Old Men (2007)', note: "The Coens use close-ups of Chigurh\'s face with extraordinary restraint—almost none in the first half of the film. When they finally arrive, they have accumulated enormous weight." },
    ],
  },
  {
    name: 'Extreme Close-Up (ECU)',
    aka: 'Insert Shot (when on objects)',
    description: 'Part of the face—an eye, a mouth, a hand—fills the entire frame.',
    emotionalEffect: 'Disorientation and intensity. At this scale, faces become abstract and bodies become objects. The extreme close-up creates unease even in calm scenes because it violates the social boundary of personal space. Used for moments of maximum psychological pressure, or to force the audience to focus on a single detail with absolute precision.',
    whenToUse: 'Horror and thriller sequences where the audience needs to feel trapped or disoriented. Moments of violence where the abstract quality of ECU creates distance while maintaining impact. Objects that carry specific narrative weight—a gun, a letter, a hand trembling.',
    examples: [
      { film: 'Psycho (1960)', note: "The shower scene\'s editing cuts between extreme close-ups of the knife, the drain, the mouth, the eye. Individual images are not violent—the accumulation and the rhythm are. Hitchcock never shows the knife entering flesh." },
      { film: 'The Good, the Bad and the Ugly (1966)', note: "Leone\'s finale uses extreme close-ups of eyes and gun hands, cut faster and faster to build an unbearable tension before a single shot is fired. The ECU rhythm IS the action." },
      { film: 'Black Swan (2010)', note: "Aronofsky uses extreme close-ups of Nina\'s body transforming—a nail pulling away, a spine emerging—to make the horror personal and physical rather than supernatural." },
    ],
  },
  {
    name: 'Two-Shot',
    aka: 'Over-the-Shoulder (when one character is partially in frame)',
    description: 'Two characters share the frame, usually in conversation.',
    emotionalEffect: 'Establishes relationship. The spatial relationship between the two characters—how close, how equal in frame size, which direction each faces—carries enormous information about their dynamic. An over-the-shoulder shot (where one character occupies the foreground) gives the character in focus more power.',
    whenToUse: 'Dialogue scenes where the relationship between the characters is the subject. Moments of conflict where the visual equality or inequality of the two-shot makes an argument. Scenes where the audience must understand both perspectives simultaneously.',
    examples: [
      { film: 'When Harry Met Sally (1989)', note: "Ephron and Rob Reiner use two-shots throughout the film to show the evolving distance and proximity of Harry and Sally. By the end, they share the frame comfortably—the two-shot history is the romantic arc." },
      { film: 'The Social Network (2010)', note: "The deposition scenes are all over-the-shoulder—a visual argument about guilt and accusation. The character in the foreground literally looms over the one being examined." },
    ],
  },
]

const cameraAngles = [
  {
    name: 'Eye Level',
    description: 'Camera at the subject\'s eye height. Neutral, democratic, observational.',
    effect: 'The most neutral angle—the audience and character are equals, neither superior nor subordinate. Eye-level shooting says "here is a person." It is the baseline against which all other angles are measured.',
    examples: 'The default angle for most dramatic films. Bresson used it almost exclusively. Its neutrality becomes expressionistic in his films because everything else is stripped away.',
  },
  {
    name: 'Low Angle',
    description: 'Camera below eye level, shooting up at the subject.',
    effect: 'The subject appears powerful, threatening, dominant, or heroic. The world shrinks beneath them. Low angles on villains make them monstrous; on heroes, they make them mythological. Low angles on objects make them seem significant or dangerous.',
    examples: 'Citizen Kane (1941)—Welles uses low angles throughout to make Kane appear to dominate his world until he no longer does. The angle history of the film tracks his power. The Dark Knight (2008)—low angles on the Joker make him genuinely threatening even when he is doing nothing.',
  },
  {
    name: 'High Angle',
    description: 'Camera above eye level, shooting down at the subject.',
    effect: 'The subject appears small, vulnerable, observed, or overwhelmed. High angles diminish characters, make them seem controlled by forces above them, or suggest surveillance. A character viewed from directly above—a God\'s-eye or bird\'s-eye view—is reduced to an object in a system.',
    examples: 'Psycho (1960)—Hitchcock cranes up to a high angle for the reveal of Mrs. Bates\'s room as a deliberate withholding. The Shining (1980)—the maze is shot from above in the finale, making Jack a rat in a trap. The Silence of the Lambs (1991)—the FBI training sequence opens with a high angle that makes Clarice look small and observed from the start.',
  },
  {
    name: 'Dutch Angle',
    description: 'Camera tilted on its horizontal axis so the frame is skewed.',
    effect: 'Psychological unease, disorientation, wrongness. The Dutch angle communicates that something is off about the world or the character\'s perception. Overused in contemporary horror, but powerful when deployed sparingly for a specific moment of cognitive or moral disorder.',
    examples: 'The Third Man (1949)—Carol Reed uses Dutch angles throughout to place the post-war Vienna world as morally tilted. Batman (the 1966 TV series)—used satirically for every villain scene, becoming self-parody. Used well in horror and noir to signal the character\'s perception is distorted.',
  },
  {
    name: 'Bird\'s Eye View',
    description: 'Directly overhead—the camera looks straight down at the subject.',
    effect: 'God-like or surveilling. The character is reduced to a diagram of their movement. Used for choreographed action to reveal spatial relationships invisible from the ground. In horror, it signals a watching presence. In dance sequences and musicals, it allows the full pattern to become visible.',
    examples: 'Rear Window (1954)—Hitchcock\'s overhead shot of the courtyard gives the audience the surveilling perspective they share with Jefferies. Goodfellas (1990)—Scorsese\'s overhead shots of violence abstract it into choreography.',
  },
  {
    name: 'Canted Frame / Oblique Angle',
    description: 'Frame is not quite Dutch—a slight tilt that creates unease without full disorientation.',
    effect: 'Subtle wrongness. Used when the filmmaker wants the audience to feel that something is slightly off without the full expressionism of the Dutch angle. Common in films about characters who have a slightly distorted relationship with reality.',
    examples: 'Used throughout Vertigo (1958) to suggest Scottie\'s skewed perception. The Lighthouse (2019) uses slight canting to build dread incrementally.',
  },
]

const cameraMovement = [
  {
    name: 'Static / Locked-Off Camera',
    description: 'The camera does not move. The frame is fixed.',
    effect: 'Control, formality, observation, dread. A static camera says the world is ordered and being observed. When used in horror or dread sequences, the static camera\'s refusal to move toward the threat creates unbearable tension. Kubrick, Haneke, and Tati all use the locked-off camera as a primary tool.',
    examples: 'Funny Games (1997)—Haneke\'s static camera forces the audience to watch violence without the merciful distraction of editing. The Shining (1980)—the Overlook\'s wide corridors in fixed frames make the space feel surveilled. Any Wes Anderson film—locked frames with characters moving within them creates his controlled, storybook world.',
  },
  {
    name: 'Pan',
    description: 'Camera rotates horizontally on a fixed axis (left-right).',
    effect: 'Reveals space along a horizontal plane. Follows movement across a scene. Can be used to connect two objects or characters that are spatially separate, creating a visual argument about their relationship. A slow pan across a landscape is contemplative; a fast pan (a "whip pan") is disorienting or comic.',
    examples: 'Once Upon a Time in the West (1968)—Leone\'s slow pans across the landscape give the desert mythological scale. Whip pans in Edgar Wright\'s films create kinetic energy and comedy.',
  },
  {
    name: 'Tilt',
    description: 'Camera rotates vertically on a fixed axis (up-down).',
    effect: 'Reveals height. Tilting up from a character\'s feet to their face can be threatening or reverent (depending on context). Tilting up a building or landscape communicates scale and dominance. Tilting down from a height communicates danger or the perspective of something watching from above.',
    examples: 'The reveal of imposing characters through a tilt from feet to face is a Western convention. Tilt-downs to reveal bodies, threats, or spatial drops are common in horror and thriller.',
  },
  {
    name: 'Dolly / Track',
    description: 'The camera physically moves toward, away from, or parallel to the subject on a wheeled track.',
    effect: 'The dolly-in builds intensity and intimacy—the audience is moving toward the subject with intention. The dolly-out creates distance, revelation (pulling back to reveal the wider context), or emotional withdrawal. A tracking shot that follows a character is immersive; one that keeps pace with a character in profile is observational.',
    examples: 'Goodfellas (1990)—Scorsese\'s Copacabana sequence is a single tracking shot that follows Henry Hill through the club, using the movement to convey his social ease and power. Jaws (1975)—the "dolly zoom" (dolly out, zoom in simultaneously) for Brody on the beach creates the most famous sense of vertigo in cinema history.',
  },
  {
    name: 'Dolly Zoom (Vertigo Effect)',
    description: 'The camera dollies in one direction while the zoom moves in the opposite direction, keeping the subject the same size while distorting the background.',
    effect: 'Psychological disorientation—the world around the subject appears to collapse or expand while the subject stays still. Creates the feeling of the ground shifting underfoot, of vertigo, of sudden revelation. Used specifically for moments of profound psychological disruption.',
    examples: 'Vertigo (1958)—Hitchcock and Alec Mills created the effect; it has been used in virtually every significant thriller since. Jaws (1975)—Brody on the beach. Goodfellas (1990)—Henry\'s paranoid spiral. Any moment in film where reality shifts for a character.',
  },
  {
    name: 'Handheld',
    description: 'The camera is held or shoulder-mounted by the operator, creating organic movement and micro-tremor.',
    effect: 'Immediacy, instability, rawness, documentary truth. Handheld says "this is what it actually felt like to be there." It is the camera of war journalism, of the Dogme movement, of contemporary action. When used in contrast with otherwise stable camera work, it can signal a shift into chaos or subjective experience.',
    examples: 'Children of Men (2006)—Lubezki\'s handheld work in the battle sequences creates an unprecedented sense of being inside the catastrophe. The Battle of Algiers (1966)—Pontecorvo used handheld to create documentary authenticity for a staged film. Saving Private Ryan (1998)—the Omaha Beach sequence.',
  },
  {
    name: 'Steadicam',
    description: 'A gyroscopically stabilized camera rig that allows smooth movement through space while the operator walks or moves freely.',
    effect: 'Fluid, gliding, slightly uncanny. The steadicam creates a quality of movement that feels both natural and dreamlike—it moves through space as a person does, but too smoothly. In horror, this creates the feeling of being followed by something. In epic or lyrical sequences, it creates the sensation of flight.',
    examples: 'The Shining (1980)—Kubrick used the steadicam for every tracking shot through the Overlook, creating the film\'s defining quality of being followed by something that moves perfectly. Goodfellas (1990)—the Copacabana shot. Rocky (1976)—the first film to use steadicam for the training run.',
  },
  {
    name: 'Crane / Aerial',
    description: 'Camera mounted on a crane arm or aircraft, moving through large vertical and horizontal arcs.',
    effect: 'Grandeur, revelation, God\'s-eye perspective. The crane shot that rises from a close-up to a wide shot pulls the audience out of the character\'s experience and places them in a position of greater knowledge. Descending crane shots do the opposite—moving from the abstract to the intimate, or from safety into danger.',
    examples: 'Gone with the Wind (1939)—the crane pulls back from Scarlett to reveal the full field of Confederate wounded, one of cinema\'s most celebrated reveals. Magnolia (1999)—Anderson\'s descending crane shots create the sense of fate arriving from above.',
  },
]

export default function CinematographyLesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Lesson header */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Link href="/visual-craft" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Visual Craft
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Cinematography</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>14 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #a07010 0%, var(--green) 55%, #c08010 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Cinematography: Shot Types, Angles, and Movement
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            The camera is never neutral. Every shot type, angle, and movement is a conscious argument about what the audience should feel, who has power, and what the story is actually about. This is the complete vocabulary.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Shot types */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ paddingBottom: '16px', borderBottom: '2px solid var(--green)', marginBottom: '28px' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Part 1</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 8px' }}>
              Shot Types and Scale
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>
              Shot scale—how much of the world the frame contains—is the most fundamental visual decision. The relationship between the character and the space around them determines whether the audience feels intimate, distant, powerful, or overwhelmed. Every scene makes this choice with every shot.
            </p>
          </div>

          <ShotScaleDiagram />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {shotTypes.map((shot, i) => (
              <div key={shot.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '22px 26px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '6px', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 3px' }}>{shot.name}</h3>
                    {shot.aka && <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', margin: 0, fontStyle: 'italic' }}>Also: {shot.aka}</p>}
                  </div>
                </div>

                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', margin: '0 0 12px', lineHeight: '1.65', fontStyle: 'italic' }}>{shot.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', padding: '12px 14px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>Emotional effect</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.65' }}>{shot.emotionalEffect}</p>
                  </div>
                  <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>When to use it</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.65' }}>{shot.whenToUse}</p>
                  </div>
                </div>

                <div>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Examples</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {shot.examples.map((ex) => (
                      <div key={ex.film} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', minWidth: '180px' }}>{ex.film}</span>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{ex.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Camera angles */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ paddingBottom: '16px', borderBottom: '2px solid var(--green)', marginBottom: '28px' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Part 2</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 8px' }}>
              Camera Angles and Power
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>
              The angle of the camera is always a point of view—about who has power, who is being observed, and who controls the world of the story. A character shot from below appears powerful; from above, diminished. Understanding angles means understanding how films encode power before the characters speak.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '12px' }}>
            {cameraAngles.map((angle) => (
              <div key={angle.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 6px' }}>{angle.name}</h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: '0 0 10px', fontStyle: 'italic', lineHeight: '1.5' }}>{angle.description}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: '0 0 10px', lineHeight: '1.7' }}>{angle.effect}</p>
                <div style={{ background: 'var(--off-white)', borderRadius: '6px', padding: '10px 12px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Examples</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', margin: 0, lineHeight: '1.65' }}>{angle.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Camera movement */}
        <section style={{ marginBottom: '52px' }}>
          <div style={{ paddingBottom: '16px', borderBottom: '2px solid var(--green)', marginBottom: '28px' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Part 3</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 8px' }}>
              Camera Movement and Emotional Meaning
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>
              How the camera moves—or refuses to move—is an argument about the story\'s emotional register. A locked-off camera creates control and dread. A handheld camera creates immediacy and chaos. A steadicam creates something uncanny—fluid like a dream, present like a threat.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cameraMovement.map((move, i) => (
              <div key={move.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 4px' }}>{move.name}</h3>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: '0 0 8px', fontStyle: 'italic' }}>{move.description}</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: '0 0 10px', lineHeight: '1.75' }}>{move.effect}</p>
                    <div style={{ background: 'var(--off-white)', borderRadius: '6px', padding: '10px 12px' }}>
                      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Key examples</p>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', margin: 0, lineHeight: '1.65' }}>{move.examples}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* For writers note */}
        <section style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '14px', padding: '32px 30px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--green)', marginBottom: '16px' }}>
            How to apply this if you are a writer
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              "You cannot write 'use a low angle here.' But you can write a character whose physical presence fills a space, whose entrance causes other characters to step back, whose dialogue arrives from a position of unchallenged authority. You are writing the conditions that demand a low angle.",
              "Understanding shot grammar helps you know which scenes are dialogue scenes and which are image scenes. If the scene's meaning lives in what a character does with their face, you write for the close-up. If it lives in the physical relationship between characters and their environment, you write for the wide shot. This affects every word you put on the page.",
              "Camera movement translates directly to narrative prose. The dolly-in has a prose equivalent: progressive narrowing of focus, the world shrinking to a face, a hand, a single detail. The tracking shot has a prose equivalent: moving through space with a character, the world unfolding around them in a particular rhythm. You are not using a camera—but you are making exactly the same choice about where attention goes and how it moves.",
              "The most useful thing visual grammar gives a writer is a vocabulary for specificity. Instead of 'she felt small,' you write the physical conditions that create smallness. Instead of 'the room felt threatening,' you write the specific elements of the room that make it so. You are writing for the camera that will or will not exist.",
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.75', margin: 0 }}>{point}</p>
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

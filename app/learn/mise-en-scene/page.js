import Link from 'next/link'
import { UnsplashImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Mise-en-Scene: The Frame as Total Argument | Eve',
  description: 'Mise-en-scene is everything visible in the frame working together -- costume, set, light, performance, composition, camera. How the greatest directors use the whole frame as a single controlled argument.',
}

const elements = [
  {
    name: 'Setting and Production Design',
    role: 'The world the characters inhabit',
    detail: 'The set is never neutral. Every production design decision -- the color of the walls, the objects on the table, the state of repair or disrepair of a building -- communicates the social and psychological world the characters live in. The Overlook Hotel in The Shining has been designed with a specific carpet pattern, a specific wallpaper, a specific color palette: all of it communicates that this is a world of surfaces containing rot. The Park family\'s house in Parasite has been designed to communicate wealth as transparency and control: glass walls, clean surfaces, expensive objects. The Kim family\'s basement apartment communicates compression and proximity: low ceilings, small windows, things stacked on top of other things. Neither family\'s home could be the other\'s. The design is the class argument.',
    examples: 'The Shining (Overlook), Parasite (Park house vs Kim basement), Grand Budapest Hotel (the hotel itself), Alien (the Nostromo vs the alien ship)',
  },
  {
    name: 'Costume and Wardrobe',
    role: 'The body as visual argument',
    detail: 'Costume communicates character, status, psychology, and arc. A character\'s wardrobe in the first act should be visually different from their wardrobe in the third -- if their arc is genuine, their clothes will show it. Color psychology applies to costume as much as to lighting: the character who enters in red is not the same as the character who enters in grey. Beyond color: fabric communicates. Heavy, structured clothing communicates armor and control. Loose, soft clothing communicates vulnerability or ease. Damaged or ill-fitting clothing communicates someone who does not belong where they are, or someone who has lost what they had. The best costume designers make these choices invisible: the audience should feel the character without noticing the clothes.',
    examples: 'The red dress in Schindler\'s List, Joker\'s purple suit (Batman, 1989), the Wives\' white in Mad Max: Fury Road, Mad Men\'s period wardrobe as character revelation',
  },
  {
    name: 'Lighting',
    role: 'The emotional weather of the frame',
    detail: "Lighting is the most adjustable element of mise-en-scene and the most powerful for creating emotional atmosphere. The same room, the same actors, the same costumes -- in hard light from above, it is a place of revelation and judgment; in warm candlelight, it is intimate; in cold fluorescent light, it is institutional and draining. The cinematographer's job is to choose not just where the light comes from but what it means that it comes from there. See the Lighting lesson for a full breakdown of individual techniques -- here the point is that lighting is always in dialogue with every other element in the frame. The same costume reads differently in different light. The same face is different people depending on whether the fill is warm or cool.",
    examples: 'The entire film noir tradition, Barry Lyndon (candlelight as historical argument), The Godfather (shadow as moral argument)',
  },
  {
    name: 'Performance and Blocking',
    role: 'The body in space',
    detail: 'Where actors stand relative to each other, to the camera, and to the environment is blocking -- and blocking is as much a visual argument as any other element of mise-en-scene. A director who places an actor at the center of the frame in full-body framing is making a different argument than one who places them to the side in a medium close-up with their back partially to the camera. The physical relationship between two characters -- their proximity, their facing, which one is seated and which is standing -- encodes the power structure of the scene before a word is spoken. Kubrick rehearsed blocking exhaustively because he understood that the spatial argument of the frame was as important as the dialogue argument.',
    examples: '12 Angry Men (entire film communicates power shifts through blocking in a single room), The Social Network (Sorkin and Fincher\'s dialogue-blocking relationship), Children of Men (blocking around the baby)',
  },
  {
    name: 'Camera and Composition',
    role: 'The argument about what to see',
    detail: 'In strict mise-en-scene analysis, the camera itself is excluded -- mise-en-scene refers to what is placed in front of the camera, not the camera\'s angle or movement. But in practice, every director who thinks about mise-en-scene thinks about how the camera will see it. The elements placed in the frame only exist in relation to how the camera frames them. A performance that looks one way in a wide shot looks entirely different in a close-up. The production design of the Overlook Hotel is visible only because of Kubrick\'s specific camera choices. Mise-en-scene as a concept is most useful when understood as the total visual argument of a frame: everything that goes into creating the image, with the camera as the final editorial decision about which parts of that argument to show.',
    examples: 'Any Kubrick film for the relationship between design and camera, Tati\'s Playtime for the total visual argument of every frame',
  },
]

const directors = [
  {
    name: 'Stanley Kubrick',
    approach: 'Control as total argument',
    note: 'Kubrick is the canonical master of mise-en-scene precisely because he controlled every element simultaneously. He supervised costume, production design, lighting, and performance as a single integrated system. The Overlook Hotel in The Shining is not a backdrop -- it is a character whose visual logic is as carefully constructed as Jack Nicholson\'s performance. Every shot in Barry Lyndon required natural or period-accurate light; every costume was historically researched; every location was chosen for visual argument. The result is films where no element is accidental.',
  },
  {
    name: 'Jacques Tati',
    approach: 'The total frame as comedy',
    note: 'In Playtime, Tati builds entire city blocks as a set and fills them with action at every level of the frame simultaneously. The comedy is always happening in multiple places at once -- you cannot watch it once and see everything. The mise-en-scene is the joke: a world so perfectly designed that being human in it becomes absurd. Tati proves that mise-en-scene is not just for drama -- the visual argument can be comic.',
  },
  {
    name: 'Bong Joon-ho',
    approach: 'Social argument through spatial design',
    note: "Bong designs his films around spatial hierarchy. In Parasite, above and below ground are moral states before they are physical ones -- the architecture of the film IS the class argument. In Snowpiercer, the train\'s cars move from back to front in a literal journey from poverty to power. The mise-en-scene is always structural: the space the characters inhabit determines what they can know and what they can do.",
  },
  {
    name: 'Wes Anderson',
    approach: 'The controlled frame as emotional argument',
    note: "Anderson's mise-en-scene is the most visually distinctive in contemporary cinema precisely because every element -- costume color, set design, prop placement, actor position -- is coordinated into a total aesthetic system. This makes his films divisive: some find the control beautiful, others find it airless. But Anderson's defense is that the visual control communicates something specific about his characters: they are trying to impose order on a world that will not be ordered, and the beauty of their effort is exactly as moving as its futility.",
  },
]

export default function MiseEnSceneLesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/visual-craft" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Visual Craft
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Mise-en-Scene</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>15 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Advanced</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--green)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Mise-en-Scene: The Frame as Total Argument
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            Mise-en-scene is everything placed in front of the camera working as one system: set, costume, performance, blocking, lighting, composition. The directors who master it cannot be imitated because every element is inseparable from every other. This is the most complete visual thinking in cinema.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        <section style={{ marginBottom: '52px' }}>
          <div style={{ paddingBottom: '16px', borderBottom: '2px solid var(--green)', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>The elements</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {elements.map((el, i) => (
              <div key={el.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '22px 24px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text-dark)', margin: 0, flex: 1 }}>{el.name}</h3>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--green)', background: 'var(--green-pale)', border: '1px solid var(--green-border)', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>{el.role}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 10px' }}>{el.detail}</p>
                <div style={{ background: 'var(--off-white)', borderRadius: '6px', padding: '10px 12px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Examples</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', margin: 0, lineHeight: '1.6' }}>{el.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '52px' }}>
          <div style={{ paddingBottom: '16px', borderBottom: '2px solid var(--green)', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>Four directors who think in mise-en-scene</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {directors.map((d) => (
              <div key={d.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>{d.name}</h3>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', fontStyle: 'italic' }}>{d.approach}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{d.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '14px', padding: '28px 28px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--green)', marginBottom: '14px' }}>
            What mise-en-scene means for writers
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '12px' }}>
            You cannot control mise-en-scene as a writer -- that is the director and production designer\'s domain. But understanding it changes how you write the worlds your characters inhabit. A scene described in precise physical detail -- the specific objects on a table, the quality of the light through a window, what the character is wearing and whether it fits them -- generates mise-en-scene rather than requiring the director to invent it from nothing.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: 0 }}>
            The best screenwriters write worlds, not locations. The Coens do not write "INT. MOTEL ROOM -- NIGHT." They write the specific, weighted, particular details of a motel room that communicates the emotional and social world their characters inhabit. That specificity is mise-en-scene on the page -- it is not describing what the camera sees, it is building the world that demands a particular visual treatment.
          </p>
        </section>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/composition-and-meaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Composition
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

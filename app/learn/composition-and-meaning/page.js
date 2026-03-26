import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import { UnsplashImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Composition and Meaning—Framing, Rule of Thirds, Negative Space | Eve',
  description: 'How framing communicates power, isolation, and longing. Rule of thirds, headroom, lead room, and the compositions that give scenes meaning without dialogue.',
}

const principles = [
  {
    name: 'Rule of Thirds',
    description: 'Place subjects on the intersections of a 3x3 grid, not at the center.',
    explanation: 'The rule of thirds divides the frame into a 3x3 grid with four intersection points. Subjects placed at these intersections create tension and interest; subjects at the center feel static and expected. A character placed at the left third of a frame with empty space to their right is looking into possibility, into the future. Placed at the right third with space to their left, they are moving away from something, or trapped against an edge. The rule is not rigid—it is a starting point that teaches you to think about where weight falls in a frame.',
    filmApplication: 'Placing a character off-center creates psychological unease or interest that centered composition cannot. The Coen Brothers frequently use off-center composition to make characters seem slightly wrong in their environment—slightly misaligned with the world they inhabit.',
    photo: { id: 'photo-1477959858617-67f85cf4f1df', credit: 'Benjamin Davies', creditUrl: 'https://unsplash.com/@bendavisual', caption: 'Subject placed at the left third with lead space—composition communicates direction and possibility' },
  },
  {
    name: 'Headroom and Lead Room',
    description: 'The space above a character\'s head and in front of their gaze.',
    explanation: 'Headroom is the space between the top of the frame and the top of the subject\'s head. Too little headroom feels cramped and trapped; too much feels unmoored and unstable. Lead room (or nose room) is the space in front of a character\'s face in the direction they are looking. A character looking left needs space to the left of them—without it, they appear trapped or blocked. A character looking right with space to the right is open, moving forward, with something ahead. These are among the most powerful and least consciously noticed conventions in cinema: audiences feel the wrongness of a badly composed frame before they can articulate what is wrong.',
    filmApplication: 'Removing lead room deliberately creates claustrophobia. Hitchcock, in his close-up coverage of Psycho, repeatedly removes lead room from both Marion and Norman—neither has anywhere to look. The frame boxes them in. The composition is the psychology.',
    photo: null,
  },
  {
    name: 'Symmetry and Asymmetry',
    description: 'Balanced vs unbalanced frames—control vs chaos, comfort vs unease.',
    explanation: 'Perfect symmetry in a frame communicates control, order, formality, and often a degree of coldness. The symmetrical frame is the frame of institutions, of systems, of things that have been arranged. Wes Anderson uses symmetry to create his storybook worlds of enforced order. Kubrick uses symmetry in the Overlook Hotel to make the corridors feel wrong—too perfectly ordered, inhuman. Asymmetrical composition is the natural world: organic, alive, slightly unpredictable. The asymmetrical frame is how things actually look. The choice between them is a choice about what kind of world the film inhabits.',
    filmApplication: 'A single asymmetrical element in an otherwise symmetrical frame (a character standing off-center in a perfectly symmetric corridor) creates maximum visual tension at minimum cost. The perfection makes the deviation worse.',
    photo: { id: 'photo-1486325212027-8081e485255e', credit: 'Sean Pollock', creditUrl: 'https://unsplash.com/@seanpollock', caption: 'Symmetry creates order—buildings and corridors that have been designed, not grown' },
  },
  {
    name: 'Negative Space',
    description: 'The empty space around a subject—as significant as the subject itself.',
    explanation: 'Negative space is the empty area surrounding the subject of a composition. In cinema, negative space is not emptiness—it is potential, isolation, possibility, or threat. A character surrounded by negative space is alone, exposed, or overwhelmed. A character who fills the entire frame has power but also nowhere to go. The most emotionally precise compositions use negative space deliberately: the lone figure in a vast landscape (insignificance and freedom simultaneously), the face with a dark void behind it (something the audience is waiting to fill), the character with negative space to one side and a wall to the other (trapped, with only one direction to go).',
    filmApplication: 'Negative space in a close-up functions differently than negative space in a wide shot. A face with large areas of empty dark around it is isolated and ominous. The same empty space around a landscape is grandeur. The subject\'s scale relative to the space changes the emotion entirely.',
    photo: { id: 'photo-1519619091416-f5d458c7c5b0', credit: 'Sasha • Stories', creditUrl: 'https://unsplash.com/@sashastories', caption: 'Negative space—the empty areas are as meaningful as the subject they surround' },
  },
  {
    name: 'Foreground and Depth',
    description: 'Layering the frame with near and far elements creates a three-dimensional visual argument.',
    explanation: 'Film is a two-dimensional medium presenting a three-dimensional world. Foreground elements—objects or people in the near portion of the frame—create depth, context, and relationship. A character in the background of a frame filled by a foreground object is being observed, contextualized, or diminished by what is in front of them. A character who moves from background to foreground is gaining power or presence. The two most historically significant uses of foreground depth in cinema are Gregg Toland\'s deep-focus work for Orson Welles in Citizen Kane (entire scenes in sharp focus from foreground to background, making every element equally present and equally accusatory) and Kubrick\'s wide-angle perspectives that stretch space.',
    filmApplication: 'Shooting through a foreground object (a plant, a doorframe, a crowd) to a character in the background creates the sense that the character is being watched without knowing it—surveillance without a POV shot.',
    photo: null,
  },
  {
    name: 'Lines and Vectors',
    description: 'Diagonal, horizontal, and vertical lines in the frame direct the eye and communicate stability or dynamism.',
    explanation: 'Horizontal lines communicate calm, stability, and rest—the horizon, the bed, the table. Vertical lines communicate power and permanence—pillars, trees, standing figures. Diagonal lines are the most dynamic: they create movement, instability, and energy. A frame full of diagonals is kinetic and potentially chaotic. A frame of horizontals is at peace. A single diagonal cutting across a field of horizontals is an intrusion. Great cinematographers design their frames around these directional forces: the converging lines of a railroad track or corridor create a powerful central vector that pulls the eye to a vanishing point, and placing a figure at that point makes them the destiny of the composition.',
    filmApplication: 'The key insight: lines do not need to be drawn explicitly. Sight lines (where characters look), movement paths, architectural elements, and even the implied lines between objects all create vectors that the eye follows. A character looking at another character creates a line between them that the eye traces.',
    photo: null,
  },
]

export default function CompositionLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Composition</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>10 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Beginner</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Composition: The Frame as Argument
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            Where a character sits in the frame is always a statement about their relationship to their world. Rule of thirds, headroom, negative space, symmetry—these are not technical guidelines but a vocabulary for saying something specific before anyone speaks.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '52px' }}>
          {principles.map((p, i) => (
            <div key={p.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 26px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: '700', color: 'var(--text-dark)', margin: 0, flex: 1 }}>{p.name}</h2>
              </div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: '0 0 12px', fontStyle: 'italic' }}>{p.description}</p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 12px' }}>{p.explanation}</p>
              {p.photo && (
                <div style={{ marginBottom: '12px' }}>
                  <UnsplashImage id={p.photo.id} alt={p.photo.caption} credit={p.photo.credit} creditUrl={p.photo.creditUrl} caption={p.photo.caption} aspectRatio="16/9" />
                </div>
              )}
              <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', padding: '12px 14px' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Film application</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.65' }}>{p.filmApplication}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/lenses-and-depth" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Lenses and Depth
          </Link>
          <Link href="/learn/mise-en-scene" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Mise-en-Scene
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </PaywallBlur>
    </div>
  )
}

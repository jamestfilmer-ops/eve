import Link from 'next/link'
import { UnsplashImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Lenses, Depth of Field, and Character | Eve',
  description: 'How focal length and depth of field communicate psychological states. Wide lenses exaggerate distance, long lenses compress and isolate, shallow depth separates characters from their world.',
}

const lensTypes = [
  {
    name: 'Wide Angle (14mm—35mm)',
    properties: 'Exaggerates perspective. Near objects appear much larger relative to far objects. Deep depth of field—most of the frame is in focus. Creates a sense of expansive, sometimes distorted space.',
    emotionalEffect: "Wide lenses make environments feel larger, more overwhelming. A character shot on a wide lens in a corridor looks smaller relative to the corridor—the space is exaggerated, the figure diminished. At extreme widths, facial features at the edge of frame are distorted. The wide lens is the lens of environments that have power over characters—urban landscapes, institutional spaces, wilderness. It is also the lens of action and immediacy: handheld wide lens work brings the audience inside the physical experience of movement.",
    craftUse: "Orson Welles used wide lenses extensively in Citizen Kane—he and Gregg Toland wanted a deep focus look that kept both foreground and background sharp simultaneously. The wide lens achieves this naturally. The result is that Kane is simultaneously present in the foreground and contextualized by his environment: both close and far, both intimate and diminished.",
    examples: [
      { film: 'Citizen Kane (1941)', note: "Toland's deep focus wide-angle cinematography shows Kane in the foreground while the full environment behind him remains sharp. He is never free of his context." },
      { film: 'Children of Men (2006)', note: "Lubezki uses wide lenses for the combat and chaos sequences—being inside the physical experience, the distortion of space during crisis." },
    ],
    photo: { id: 'photo-1486325212027-8081e485255e', credit: 'Scott Webb', creditUrl: 'https://unsplash.com/@scottwebb', caption: 'Wide angle—exaggerated perspective, expansive space, small figures dominated by environment' },
  },
  {
    name: 'Normal (40mm—60mm)',
    properties: 'Approximates the natural perspective of the human eye. Objects appear roughly the correct size relative to each other. This is the lens of neutral observation.',
    emotionalEffect: "The normal lens makes no argument about space or perspective—it simply shows what is there, in roughly the proportions we would see it with our own eyes. This makes it the lens of documentary truth, of observation, of the film that does not want the lens itself to be a statement. It is also the lens of theatrical and procedural filmmaking: the normal focal length is what you reach for when you want the audience to read the scene rather than feel the lens.",
    craftUse: "The normal lens is most powerful by contrast: in a film that has been using wide or long lenses for expressive effect, a return to normal focal length produces a specific relief—the world is being shown as it is, not as it feels. Bresson used normal lenses almost exclusively, refusing the exaggeration of wide or long for a flat, observational neutrality.",
    examples: [
      { film: 'Au Hasard Balthazar (1966)', note: "Bresson's normal lenses create a flat, observational distance. The camera refuses to editorialize about what it shows—making the audience do the emotional work." },
    ],
    photo: { id: 'photo-1508214751196-bcfd4ca60f91', credit: 'Christian Ferrer', creditUrl: 'https://unsplash.com/@christianferrer', caption: 'Normal focal length—neutral perspective, the world as it appears to the eye, no spatial exaggeration' },
  },
  {
    name: 'Telephoto / Long (85mm—400mm+)',
    properties: 'Compresses perspective. Near and far objects appear closer to the same size. Shallow depth of field—only a narrow plane of focus. Creates intimacy and isolation simultaneously.',
    emotionalEffect: "Long lenses compress space—the distance between a figure and their background collapses, making the background feel closer, more present, more oppressive. Simultaneously, the shallow depth of field separates the subject sharply from their environment, creating a specific kind of isolation: the character is in focus while the world blurs around them. This is the lens of surveillance (the telephoto paparazzi look), of psychological isolation, and of beauty extracted from its context. A face shot on a 200mm lens with shallow depth of field appears to float—separated from the world, intensely present, vulnerable.",
    craftUse: "Terrence Malick films use long lenses extensively—characters shot in isolation from their environments, faces in sharp focus while the world behind them becomes impressionistic wash of color. The effect is profoundly private: the lens is stealing something intimate. Alfonso Cuaron uses telephoto compression in the distance sequences of Gravity to make the void feel closer and more threatening.",
    examples: [
      { film: 'The Tree of Life (2011)', note: "Lubezki and Malick use long lenses for the intimate domestic scenes—faces in close focus, the world behind them blurred into color. Privacy, isolation, the interior world." },
      { film: 'Zodiac (2007)', note: "Harris Savides uses long telephoto compression for surveillance sequences—the killer is always seen at a distance that makes him feel simultaneously close and untouchable." },
    ],
    photo: { id: 'photo-1542204165-65bf26472b9b', credit: 'Roberto Nickson', creditUrl: 'https://unsplash.com/@rpnickson', caption: 'Long lens—shallow depth of field separates subject from world, creates isolation and the feeling of stolen intimacy' },
  },
]

const depthOfField = [
  {
    type: 'Deep Focus',
    description: 'Both foreground and background are sharp simultaneously.',
    meaning: 'The world is implicated in everything that happens in it. The character cannot escape their context. Every element in the frame is equally available for the audience to read. Deep focus is the lens choice of directors who want the environment to be a character: Welles, Renoir, Kubrick. It is also the look of documentary and observational cinema.',
  },
  {
    type: 'Shallow Focus',
    description: 'Only a narrow plane is sharp—the subject in focus, the world behind blurred.',
    meaning: 'The subject is separated from their world. The blur says: the world does not matter right now—only this person, only this moment. Shallow focus creates intimacy but also isolation. The blurred background is not absent—it is present but unreadable, threatening through its indistinctness.',
  },
  {
    type: 'Rack Focus',
    description: 'The point of focus shifts during the shot—from foreground to background or vice versa.',
    meaning: 'A structural change in attention. When focus shifts from a character to an object or another character behind them, it is the film telling you where the meaning has moved. Rack focus is one of the most precise tools for directing attention without cutting.',
  },
]

export default function LensesAndDepthLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Lenses and Depth</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>11 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Advanced</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Lenses, Depth of Field, and Character
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            Focal length determines how a character relates to their world. Wide lenses exaggerate the space that surrounds them. Long lenses compress it and isolate them within it. Depth of field determines whether the world behind them is present or blurred away—and that choice is always an argument about whether context matters.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', paddingBottom: '14px', borderBottom: '2px solid var(--green)' }}>
            Focal Length
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            {lensTypes.map((lens, i) => (
              <div key={lens.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '22px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 6px' }}>{lens.name}</h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: '0 0 12px', fontStyle: 'italic' }}>{lens.properties}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 12px' }}>{lens.emotionalEffect}</p>
                {lens.photo && (
                  <div style={{ marginBottom: '12px' }}>
                    <UnsplashImage id={lens.photo.id} alt={lens.photo.caption} credit={lens.photo.credit} creditUrl={lens.photo.creditUrl} caption={lens.photo.caption} aspectRatio="16/9" />
                  </div>
                )}
                <div style={{ background: 'var(--off-white)', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Craft note</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: 0 }}>{lens.craftUse}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {lens.examples.map((ex) => (
                    <div key={ex.film} style={{ display: 'flex', gap: '10px', background: 'var(--green-pale)', borderRadius: '6px', padding: '8px 12px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: '700', color: 'var(--text-dark)', flexShrink: 0 }}>{ex.film}</span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.55' }}>{ex.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', paddingBottom: '14px', borderBottom: '2px solid var(--green)' }}>
            Depth of Field
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            {depthOfField.map((dof) => (
              <div key={dof.type} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 4px' }}>{dof.type}</h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', fontStyle: 'italic', margin: '0 0 8px' }}>{dof.description}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0 }}>{dof.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/camera-movement" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Camera Movement
          </Link>
          <Link href="/learn/composition-and-meaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', textDecoration: 'none' }}>
            Next: Composition
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

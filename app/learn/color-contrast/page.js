import Link from 'next/link'
import { UnsplashImage, ImagePair } from '../../components/CraftImage'

export const metadata = {
  title: 'Color Contrast in Film—Warm vs Cool, Saturated vs Desaturated | Eve',
  description: 'How color contrast creates dramatic tension. Warm vs cool, saturated vs desaturated, complementary colors—the mechanics of visual conflict and what they communicate emotionally.',
}

const contrastTypes = [
  {
    name: 'Warm vs Cool',
    tagline: 'The most fundamental contrast in cinema—fire against ice, life against death, safety against threat.',
    explanation: 'Warm colors (reds, oranges, ambers) advance toward the viewer and register as energetic, alive, immediate. Cool colors (blues, greens, grey-blues) recede and register as distant, controlled, or cold. When a filmmaker places a warm subject against a cool environment—or vice versa—the contrast does emotional work before the narrative does. The warm figure in a cool world is isolated, defiant, or alive against something that is trying to extinguish them. The cool figure in a warm world is calculating, alien, or removed from the emotional life around them.',
    examples: [
      { film: 'Blade Runner 2049 (2017)', note: 'Roger Deakins places Officer K—shot in warmer skin tones and amber earth tones—against the blue-grey industrial wastelands of a system that sees him as disposable. The contrast is the character argument: human warmth in an inhuman cold.' },
      { film: 'Parasite (2019)', note: "The Kim family's cramped apartment: warm amber and dirty yellow. The Park family's glass house: cool grey-green and clinical white. Every scene where a Kim character enters Park space is warm vs cool on screen, class made visible." },
      { film: 'Mad Max: Fury Road (2015)', note: "The burning orange desert against the cool blue night sequences. The color contrast encodes day as hostile and active, night as respite. The Wives in white are the only cool elements in the daytime scenes—marking them as different, as something the world wants to consume." },
    ],
    photo: { id: 'photo-1506905925346-21bda4d32df4', credit: 'Samuel Ferrara', creditUrl: 'https://unsplash.com/@samuelferrara', caption: 'Warm golden light against cool blue shadow—the fundamental contrast of cinema' },
  },
  {
    name: 'Saturated vs Desaturated',
    tagline: 'How much color the world contains—vivid and present versus drained and distant.',
    explanation: 'Saturation is the intensity of a color—how much of it there is relative to grey. A highly saturated frame is vivid, immediate, emotionally present. A desaturated frame (grey, washed out, approaching monochrome) is distant, cold, or drained of vitality. Filmmakers use desaturation in two opposite ways: to signal documentary realism (desaturated naturalism, as in many contemporary war films) or to signal emotional depletion (the world losing its color as a character loses their grip on it). The key craft decision is not whether to saturate but when to shift the saturation level—because the shift itself is the story event.',
    examples: [
      { film: 'Schindler\'s List (1993)', note: "Spielberg shoots entirely in desaturated black-and-white except for the red coat of one child—the most famous use of the saturated vs desaturated contrast in cinema. The desaturation of the whole film makes the Holocaust a historical record; the single color makes one person's death personal. The contrast is the argument." },
      { film: 'Traffic (2000)', note: "Soderbergh desaturates the Mexico sequences (bleached, yellow-orange) and fully saturates the Cincinnati sequences (normal color) to create a visual grammar for the different moral worlds of the drug war. The color treatment tells you where you are before a character speaks." },
      { film: 'The Road (2009)', note: "John Hillcoat and DP Javier Aguirresarobe desaturate the entire post-apocalyptic world—a grey, ash-covered palette that makes every scene feel like it is happening inside a cataract. When the boy finds a can of Coca-Cola, its red is shocking." },
    ],
    photo: null,
  },
  {
    name: 'Complementary Color Contrast',
    tagline: 'Colors opposite each other on the color wheel create maximum visual vibration—and maximum tension.',
    explanation: "Complementary colors are color wheel opposites: red-green, blue-orange, yellow-purple. When placed adjacent, they create visual tension—each makes the other appear more intense. The teal-orange grade that dominated blockbuster cinema from roughly 2005-2020 exploits this: actors' skin tones are orange, the shadows are graded to teal, and the contrast makes everything pop. But complementary contrast can be used more subtly and more meaningfully than the teal-orange grade: a red figure in a green environment, a blue character in an amber room. The contrast isn't just visually arresting—it signals that the subject and their environment are in opposition.",
    examples: [
      { film: 'Pan\'s Labyrinth (2006)', note: "Del Toro uses amber-orange for the fascist real world and blue-green for the fairy tale world. They are complementary colors, creating maximum visual separation between the two worlds the film occupies. The choice makes the fairy tale world look genuinely different, not just different in content but in physics." },
      { film: 'Drive (2011)', note: "Nicolas Winding Refn uses the neon pink-magenta of Los Angeles nightlife against blue-green shadows. The Driver himself is often in amber tones against cool backgrounds. The complementary contrasts give the film its hypnotic, artificial beauty—a real city made to look like a fever dream." },
      { film: 'The Matrix (1999)', note: "The teal-green Matrix against the warm, desaturated real world is a complementary contrast that encodes the artificial versus the real. The Matrix looks like the inside of a computer terminal; the real world looks like the inside of a bruise." },
    ],
    photo: { id: 'photo-1518611012118-696072aa579a', credit: 'Oladimeji Ajegbile', creditUrl: 'https://unsplash.com/@diimejii', caption: 'Complementary contrast—the subject pops against a complementary background' },
  },
  {
    name: 'Light vs Dark (Value Contrast)',
    tagline: 'The oldest contrast—the ratio of light to dark determines how much the world reveals.',
    explanation: 'Value contrast—the difference between the lightest and darkest areas of a frame—is the foundation of all visual drama. High value contrast (bright lights against deep shadows) creates tension, mystery, and moral complexity. Low value contrast (a uniformly lit frame, neither very bright nor very dark) creates a flat, democratic world where everything is equally visible and equally available. Film noir exists in high value contrast. The comedies of Preston Sturges exist in low value contrast. The choice is a genre and moral argument before it is an aesthetic one.',
    examples: [
      { film: 'The Godfather (1972)', note: "Gordon Willis, called 'The Prince of Darkness,' kept his fill light extremely low—often just a key light and nothing else. The result is that characters exist partly in shadow, partly withheld. The visual argument is that this world does not fully reveal itself." },
      { film: 'La La Land (2016)', note: "Low value contrast throughout—soft, diffused, uniformly lit. The world of the film is gentle, accessible, and warm. When the final fantasy sequence arrives in its highest value contrast—deep shadows and vivid spotlights—it signals that we have crossed from the real into the imagined." },
    ],
    photo: { id: 'photo-1507003211169-0a1dd7228f2d', credit: 'Drew Hays', creditUrl: 'https://unsplash.com/@drew_hays', caption: 'High value contrast—the light-dark ratio determines what is revealed and what is withheld' },
  },
  {
    name: 'Simultaneous Contrast',
    tagline: 'The same color looks different depending on what surrounds it—context changes meaning.',
    explanation: 'Simultaneous contrast is the optical phenomenon whereby a color appears to shift in hue, saturation, and brightness depending on its surrounding colors. A grey square looks warm against blue and cool against orange. A red looks more vivid against green than against orange. Filmmakers use this not just technically but narratively: the same character\'s costume can read differently in different environments. A character in beige who moves from a cool blue corridor to a warm amber room appears to change. The environment is telling the audience how to read them.',
    examples: [
      { film: 'Wes Anderson films (generally)', note: "Anderson uses this constantly—his pastel costumes are designed to interact with specific environments. The same cream coat will read differently against the deep red of the Grand Budapest Hotel lobby than against the muted blue of the Darjeeling train. He designs the whole palette together." },
      { film: 'Carol (2015)', note: "Phyllis Nagy and Todd Haynes use the green of Carol's costumes against the warm reds of 1950s New York department stores. The contrast makes Carol seem simultaneously part of the world and separate from it—visible against a background that is trying to blend her in." },
    ],
    photo: null,
  },
]

export default function ColorContrastLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Color Contrast</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>9 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Color Contrast as Dramatic Tension
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            Color contrast is not decoration—it is visual argument. Warm against cool, saturated against desaturated, light against dark: each contrast communicates a relationship before any dialogue does. The frame itself is always making a claim.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '52px' }}>
          {contrastTypes.map((type, i) => (
            <div key={type.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '26px 28px' }}>
              <div style={{ marginBottom: '14px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 4px' }}>{type.name}</h2>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', margin: 0, fontStyle: 'italic' }}>{type.tagline}</p>
              </div>

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 16px' }}>{type.explanation}</p>

              {type.photo && (
                <div style={{ marginBottom: '16px' }}>
                  <UnsplashImage id={type.photo.id} alt={type.photo.caption} credit={type.photo.credit} creditUrl={type.photo.creditUrl} caption={type.photo.caption} aspectRatio="16/9" />
                </div>
              )}

              <div>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Examples</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {type.examples.map((ex) => (
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

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/color-palettes" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Color Palettes
          </Link>
          <Link href="/learn/color-symbolism" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Color Symbolism
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import { WikiImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Color Grading as Storytelling | Eve',
  description: 'How color grading shapes mood, genre, and character in film. The teal-orange look, desaturation, bleach bypass, and what each grade communicates to audiences.',
}

const gradingStyles = [
  {
    name: 'Teal-Orange (The Blockbuster Look)',
    period: '2008—2022, now fading',
    description: 'Push shadows toward teal, push skin tones toward orange. The complementary contrast maximizes the pop of human faces against backgrounds.',
    howItWorks: "The teal-orange grade exploits the complementary color relationship between orange (warm skin tones) and teal (cool shadows). By pushing these in opposite directions in post, the colorist creates maximum contrast between the human figure and the world around them—faces literally glow against environments. Every Marvel film, most major action releases, and a significant proportion of studio drama from 2008-2020 use this look to some degree. The look became so ubiquitous that audiences began registering it as 'cinematic'—which is exactly when it stopped being a stylistic choice and became default wallpaper. The best recent films actively push back against it.",
    arguments: [
      'Makes faces more vivid and commercially appealing',
      'Creates consistent visual grammar across a franchise or studio slate',
      'Exploits the hardwired human attention to faces against contrasting backgrounds',
    ],
    counter: "The teal-orange look makes every film feel like every other film. Roger Deakins and Emmanuel Lubezki both actively resist it—their films have natural, specific palettes that belong to the specific story. The problem with the blockbuster look is not that it is wrong but that it is generic: it optimizes for face-popping at the cost of a specific visual argument.",
    examples: [
      { film: 'Most MCU films (2008-2022)', note: 'The house style. Each film is individually graded but the teal-orange signature is consistent across the franchise—a visual brand rather than a story-specific choice.' },
      { film: 'The Dark Knight (2008)', note: "Wally Pfister uses a desaturated, naturalistic palette—explicitly resisting the teal-orange trend for a more grounded look. Nolan's insistence on practical effects extended to refusing the standard digital grade." },
    ],
    photo: { type: 'wiki', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Citizen_Kane_trailer2.jpg/900px-Citizen_Kane_trailer2.jpg', alt: 'Citizen Kane (1941) — deep focus cinematography by Gregg Toland', caption: "Citizen Kane (1941): Gregg Toland's deep focus keeps every plane sharp simultaneously, making spatial relationships carry meaning", credit: 'RKO Radio Pictures / Public domain' },
  },
  {
    name: 'Bleach Bypass / Silver Retention',
    period: 'Developed in the 1990s, still used',
    description: 'A process (originally photochemical, now digital) that retains the silver in the film, creating desaturated, high-contrast images with crushed blacks and bleached highlights.',
    howItWorks: "Bleach bypass was originally a darkroom technique where the bleach step of film processing is skipped, leaving silver deposits in the emulsion alongside the color dyes. The result is a desaturated, gritty, high-contrast image that feels simultaneously overexposed and underexposed. Digitally, it is replicated by desaturating, increasing contrast, crushing blacks, and lifting shadows simultaneously. The look communicates: harshness, war, reality, the opposite of cinematic beauty. It says this is what things actually look like—stripped of color's glamorizing effect.",
    arguments: [
      'Creates a specific photographic quality that reads as documentary truth',
      'Removes color saturation that might make violence or suffering visually beautiful',
      'Produces a distinctive look that immediately signals genre (war, thriller)',
    ],
    counter: "Bleach bypass has become a war film cliche. The moment you desaturate and crunch the contrast, the audience thinks 'war film.' Used for its own sake rather than for a specific argument, it is as much a default as teal-orange.",
    examples: [
      { film: 'Saving Private Ryan (1998)', note: "Janusz Kaminski used a modified bleach bypass on the Omaha Beach sequence—the desaturation and harsh contrast strip the combat of its cinematic beauty, making it feel more like newsreel footage." },
      { film: 'Se7en (1995)', note: "Darius Khondji's bleach bypass for the rainy, oppressive city. The crushed blacks and bleached skin tones give the film its specific grimy texture." },
      { film: '1917 (2019)', note: "Roger Deakins uses a naturalistic palette rather than bleach bypass for the WWI film—a deliberate choice to make the beauty of the landscape visible alongside its horror." },
    ],
    photo: { type: 'wiki', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/M_1931_film.jpg/900px-M_1931_film.jpg', alt: 'M (1931) Fritz Lang — expressionist low-key lighting', caption: "M (1931), dir. Fritz Lang: desaturated, high-contrast cinematography creates the look of moral ambiguity and urban dread", credit: 'Nero-Film AG / Public domain' },
  },
  {
    name: 'Hyper-Saturation',
    period: 'Associated with specific auteurs—Wes Anderson, Park Chan-wook, Baz Luhrmann',
    description: 'Pushing saturation beyond naturalistic levels to create a heightened, artificial, emotionally intensified world.',
    howItWorks: "Hyper-saturation says: this world is more vivid than the real world. The colors are brighter, more primary, more themselves. This is the visual register of fairy tales, childhood memory, intensified desire, and sometimes horror—because the hyper-saturated world is also a world that has been arranged too carefully, controlled too completely. Wes Anderson's hyper-saturation creates the feeling of a diorama—a world preserved in glass. Park Chan-wook's lush palette places extreme violence inside extreme beauty, making both more disturbing by contrast. The technique is the opposite of bleach bypass: where bypass strips color to signal reality, hyper-saturation adds color to signal the departure from it.",
    arguments: [
      'Creates immediately distinctive visual identity',
      'Establishes emotional register before any dialogue',
      'Places the film in a specific relationship to reality (fairy tale, memory, fantasy)',
    ],
    counter: "Hyper-saturation can feel like a substitute for content—if everything is beautiful, nothing is urgent. The filmmakers who use it best (Anderson, Park) have iron control over every other element; the look is one instrument in a fully orchestrated system. Used carelessly, it produces Instagram aesthetics: color as decoration rather than argument.",
    examples: [
      { film: 'The Grand Budapest Hotel (2014)', note: "Anderson pushes saturation and uses flat, primary colors to create a storybook world—the visual intensity matches the film's argument about beauty as a form of resistance against historical catastrophe." },
      { film: 'Oldboy (2003)', note: "Park Chan-wook's lush palette places graphic violence inside gorgeous compositions. The beauty does not soften the violence—it makes both elements more disturbing." },
      { film: 'Amélie (2001)', note: "Bruno Delbonnel and Jeunet removed blues and whites, leaving only the warm spectrum. The result is a Paris that exists in Amélie's imagination rather than reality—hyper-saturation as the visualization of a specific interior world." },
    ],
    photo: { type: 'wiki', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Metropolis_movie_image.jpg/900px-Metropolis_movie_image.jpg', alt: 'Metropolis (1927) Fritz Lang — hyper-stylized visual world', caption: "Metropolis (1927), dir. Fritz Lang: every visual element is pushed beyond naturalism — architecture, light, and crowd become pure expressionist argument", credit: 'UFA / Public domain' },
  },
  {
    name: 'Naturalistic / Available Light Grade',
    period: 'Always current—the rejection of all the above',
    description: 'Minimal grade, preserving the look of the actual light that existed on set or location.',
    howItWorks: "The naturalistic grade is not the absence of color decisions—it is a specific decision to resist the gravitational pull toward the standardized looks above. The colorist works to preserve the specific quality of the actual light: the blue of the overcast English sky, the amber of the afternoon in New Mexico, the green-grey of winter. Each location and each scene has its own light, and the naturalistic grade works to honor that specificity rather than imposing a consistent palette over it. This is Deakins's approach: each of his films has a distinct look because each film's world has a distinct light. No Country for Old Men looks like West Texas. The Revenant looks like the Canadian wilderness in winter. The look is the place.",
    arguments: [
      'Creates visual specificity—each scene looks like itself rather than like a grade',
      'Preserves the documentary quality of real locations',
      'Allows the palette to shift naturally as environments and times of day shift',
    ],
    counter: "Naturalistic grading requires shooting in genuinely specific locations with genuinely specific light—it cannot be applied in post to footage shot on a soundstage under fluorescent practicals. The approach demands production design, location scouting, and cinematographic discipline that the other approaches can bypass.",
    examples: [
      { film: 'No Country for Old Men (2007)', note: "Deakins's West Texas palette is parched, slightly desaturated, bleached by the actual sun. The grade is minimal—what you see is what the landscape actually looks like at that time of year." },
      { film: 'The Revenant (2015)', note: "Shot entirely in natural light. The winter palette shifts with the actual weather. The beauty is earned by waiting for the right light." },
      { film: 'Moonlight (2016)', note: "James Laxton and Jody Lee Lipes use naturalistic, warm Miami light throughout—the warmth is the actual warmth of that climate. The grade honors the specific quality of light in the specific place." },
    ],
    photo: { type: 'wiki', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Buster_Keaton_in_The_General_%281926%29.jpg/900px-Buster_Keaton_in_The_General_%281926%29.jpg', alt: 'Buster Keaton in The General (1926) — naturalistic location photography', caption: "The General (1926), dir. Buster Keaton: location photography at actual scale — no studio artifice, the world as found", credit: 'United Artists / Public domain' },
  },
]

export default function ColorGradingLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Color Grading</span>
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
            Color Grading as Storytelling
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            Color grading is post-production rewriting. The digital intermediate suite can transform a film shot in natural light into a genre statement, a historical document, or a dream. Understanding what grading choices communicate—and what they have become cliched—makes you a more literate viewer and a more deliberate writer.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {gradingStyles.map((style) => (
            <div key={style.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 26px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '6px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: '700', color: 'var(--text-dark)', margin: 0, flex: 1 }}>{style.name}</h2>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-soft)', whiteSpace: 'nowrap', marginTop: '4px' }}>{style.period}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', fontStyle: 'italic', margin: '0 0 14px' }}>{style.description}</p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 14px' }}>{style.howItWorks}</p>

              {style.photo && (
                <div style={{ marginBottom: '14px' }}>
                  <WikiImage src={style.photo.src} alt={style.photo.alt}  caption={style.photo.caption} aspectRatio="16/9" />
                </div>
              )}

              <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '12px 16px', marginBottom: '14px' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '6px' }}>The counter-argument</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>{style.counter}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {style.examples.map((ex) => (
                  <div key={ex.film} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'var(--green-pale)', borderRadius: '6px', padding: '10px 14px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', flexShrink: 0 }}>{ex.film}</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6' }}>{ex.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/color-symbolism" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Color Symbolism
          </Link>
          <Link href="/learn/writing-for-color" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Writing for Color
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </PaywallBlur>
    </div>
  )
}

import Link from 'next/link'
import { UnsplashImage } from '../../components/CraftImage'

export const metadata = {
  title: 'Color Symbolism Across Cultures | Eve',
  description: 'White is not always pure. Red is not always danger. How color meanings shift across cultures and how filmmakers exploit, subvert, or collide these systems.',
}

const colorSystems = [
  {
    color: 'White',
    western: 'Purity, innocence, bridal, blank slate, clinical sterility',
    eastern: 'Death, mourning, ghosts, the supernatural (East Asian traditions)',
    collision: "The collision of white-as-purity and white-as-death is one of the most productive tensions in contemporary cinema. Japanese horror films (Ring, The Grudge) use white—pallid skin, white burial clothing, bleached sets—as the visual language of the supernatural precisely because Western audiences read it as innocence, making the horror more disorienting. Wong Kar-wai uses white against the Eastern mourning tradition. Sofia Coppola's use of white in The Virgin Suicides draws from both: purity and death are the same thing for the Lisbon girls.",
    examples: [
      { film: 'The Ring (2002)', note: 'Verbinski translates Japanese horror conventions for Western audiences—the white ghostly pallor codes as death in both systems, but the mechanism is different.' },
      { film: 'Black Swan (2010)', note: 'The white Swan is coded as purity and innocence in Western ballet tradition—which is exactly why its corruption is so disturbing. The white must be violated for the black to emerge.' },
    ],
    photo: { id: 'photo-1555529771-7888783a18d3', credit: 'Pawel Czerwinski', creditUrl: 'https://unsplash.com/@pawel_czerwinski', caption: 'White carries opposite meanings across cultures—purity in the West, mourning and the supernatural in East Asian traditions' },
  },
  {
    color: 'Red',
    western: 'Danger, passion, violence, love, warning, blood',
    eastern: 'Luck, prosperity, celebration, marriage, joy (Chinese tradition); danger and blood (shared)',
    collision: "Red as luck and celebration is entirely absent from Western cinema's default coding. This creates a specific problem and opportunity for cross-cultural filmmaking. A red wedding dress in a Western film reads as wrong, transgressive, dangerous. In a Chinese cultural context it reads as auspicious. Zhang Yimou's films (Raise the Red Lantern, Red Sorghum) use red's dual coding deliberately—the celebratory red of Chinese tradition is always undercut by the danger and violence the Western symbolic layer adds. The color communicates simultaneously in both registers.",
    examples: [
      { film: 'Raise the Red Lantern (1991)', note: "Zhang Yimou uses the red lanterns as symbols of desire, privilege, and doom simultaneously—both the celebratory Chinese red and the blood-danger Western red." },
      { film: 'Crouching Tiger Hidden Dragon (2000)', note: 'The red of the wedding sequences codes as both Chinese celebration and Western danger. The film exists in both registers at once.' },
    ],
    photo: { id: 'photo-1518611012118-696072aa579a', credit: 'Oladimeji Ajegbile', creditUrl: 'https://unsplash.com/@diimejii', caption: 'Red is danger and passion in the West; luck and celebration in East Asian traditions—films exploit both registers' },
  },
  {
    color: 'Black',
    western: 'Death, evil, authority, elegance, nihilism, mourning',
    eastern: 'Varying—in some East Asian traditions black is associated with water and the north rather than death; mourning clothes in many cultures are white rather than black',
    collision: "The global dominance of Western cinema has spread Western color symbolism into global film culture—black villains, white brides, grey moral ambiguity. But filmmakers who work within non-Western traditions find that these imported conventions sit uneasily over their own symbolic systems. The Japanese horror tradition uses white, not black, for supernatural dread. Chinese cinema uses white for mourning. The filmmaker who understands both systems can use the collision itself as a subject.",
    examples: [
      { film: 'Black Panther (2018)', note: "Ryan Coogler uses black as power and pride rather than menace—the suit, the nation, the identity. The film recodes black's Western symbolism within an Afrofuturist framework." },
      { film: 'The Handmaiden (2016)', note: "Park Chan-wook uses black against white in ways that collide Western elegance/death associations with Korean cultural contexts around mourning and corruption." },
    ],
    photo: { id: 'photo-1507003211169-0a1dd7228f2d', credit: 'Drew Hays', creditUrl: 'https://unsplash.com/@drew_hays', caption: 'Black carries different symbolic weights across cultures—death in some traditions, neutrality or water in others' },
  },
  {
    color: 'Yellow / Gold',
    western: 'Cowardice (yellow-belly), caution, sickness, but also gold, value, sunlight, royalty',
    eastern: 'Imperial authority, sacred (Buddhism—saffron and gold), prosperity, but also pornography (Chinese slang)',
    collision: "Yellow's split between cowardice and imperial authority is one of the most culturally divided color meanings. The Emperor's yellow, the Buddhist saffron robe, and the yellow warning sign come from entirely different symbolic systems that happen to share a color. Contemporary Asian cinema often uses gold to signal both sacred authority and corruption—the two registers exist simultaneously, which Western color theory cannot accommodate.",
    examples: [
      { film: 'Hero (2002)', note: "Zhang Yimou uses yellow for the flashback kingdom scenes—imperial authority, also the color of desert and the eternal. The yellow segments are both the most visually spectacular and the most morally ambiguous." },
      { film: 'Kill Bill (2003)', note: "Tarantino dresses the Bride in yellow—simultaneously cowardice/warning and the yellow of Bruce Lee's tracksuit (homage/strength). He is deliberately colliding both Western associations." },
    ],
    photo: { id: 'photo-1506905925346-21bda4d32df4', credit: 'Samuel Ferrara', creditUrl: 'https://unsplash.com/@samuelferrara', caption: 'Yellow and gold—cowardice in Western tradition, imperial and sacred authority in East Asian contexts' },
  },
]

const principleForWriters = "Color symbolism is not a code to be memorized but a conversation to be understood. The writer who wants to use color symbolically must know which tradition they are working in—and must know when their character or reader might be working in a different one. The most interesting color work happens in the collision zone: the immigrant daughter who chooses a red wedding dress, the ghost who wears white, the emperor who is afraid of yellow. The symbol works hardest when it means two things at once."

export default function ColorSymbolismLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Color Symbolism</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>9 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Color Symbolism Across Cultures
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            White is not always pure. Red is not always danger. The symbolic meaning of color is not fixed—it shifts across traditions, and the filmmaker who understands both systems can use that collision as the argument itself.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {colorSystems.map((cs) => (
            <div key={cs.color} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 26px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 14px' }}>{cs.color}</h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>Western</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{cs.western}</p>
                </div>
                <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '5px' }}>East Asian / Other</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', margin: 0, lineHeight: '1.6' }}>{cs.eastern}</p>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 14px' }}>{cs.collision}</p>

              {cs.photo && (
                <div style={{ marginBottom: '14px' }}>
                  <UnsplashImage id={cs.photo.id} alt={cs.photo.caption} credit={cs.photo.credit} creditUrl={cs.photo.creditUrl} caption={cs.photo.caption} aspectRatio="16/9" />
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {cs.examples.map((ex) => (
                  <div key={ex.film} style={{ background: 'var(--off-white)', borderRadius: '6px', padding: '10px 14px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', color: 'var(--green)' }}>{ex.film} </span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65' }}>{ex.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 26px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>The principle</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: 0 }}>{principleForWriters}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/color-contrast" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Color Contrast
          </Link>
          <Link href="/learn/color-grading" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next: Color Grading
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

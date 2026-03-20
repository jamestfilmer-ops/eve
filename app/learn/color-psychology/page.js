import Link from 'next/link'

export const metadata = {
  title: 'Color Psychology in Film and Fiction | Eve',
  description: 'Color is not decoration. Every deliberate color choice in a story communicates meaning before a single word is spoken.',
}

const sections = [
  {
    heading: 'Color is argument, not decoration',
    body: "Most writers think of color as something that belongs to cinematographers and production designers. That instinct is wrong—and it costs them. Color is one of the fastest communicators in storytelling. Before dialogue, before action, before a character opens their mouth, color has already told the audience how to feel. When you understand how color works, you stop describing what things look like and start describing what they mean. The difference is the difference between a script that reads like a shopping list and one that reads like a film already playing in the reader's head."
  },
  {
    heading: 'How Breaking Bad uses color as character',
    body: "Vince Gilligan's Breaking Bad is the most studied example of deliberate color coding in recent television. Walter White moves through a carefully designed color progression across five seasons—from muted earth tones in his defeated life as a chemistry teacher, through yellow when he enters the drug trade, toward black as he becomes Heisenberg. Jesse Pinkman wears red throughout—passion, danger, life force. Skyler moves from blue (loyalty, the law-abiding world) to the same black as Walter as she becomes complicit. The color choices are not subtle, and they are not accidental. They function as a second storyline running beneath the spoken one. A character's color rarely changes in a scene. It changes between seasons, marking transformation."
  },
  {
    heading: 'Warm and cool as moral language',
    body: "The most fundamental color opposition in film and fiction is warm versus cool. Warm colors—red, orange, amber, yellow—read as passionate, dangerous, alive, and present. Cool colors—blue, green, grey—read as controlled, distant, melancholic, or dead. This opposition is not arbitrary. It maps onto physical experience: fire is warm and dangerous; ice is cold and still. When a director moves a character from a warm interior into a cold exterior, the temperature shift does moral and emotional work. In The Godfather, Gordon Willis bathes the Corleone family in deep amber interiors. The world of crime is warm, intimate, familial. The legitimate world is always colder, more exposed. The film uses color to argue that the criminal world offers something the straight world cannot."
  },
  {
    heading: 'Color and character psychology',
    body: "Spike Jonze's Her uses color to build a world defined by warmth and longing. The film strips cool colors almost entirely from its palette. Theodore's apartment, his office, the city streets—all live in pinks, reds, and warm oranges. The effect is a world so saturated in warmth that it feels simultaneously inviting and suffocating. The color tells you what the story is about before Theodore says a word: this is a film about a man drowning in desire for connection. When Samantha's operating system begins to evolve beyond Theodore, cooler tones begin to appear at the edges of frame. The temperature of the film changes as the relationship changes. Color and character psychology run in parallel."
  },
  {
    heading: 'Writing for color without directing',
    body: "Screenwriters face a specific challenge: color is a visual medium tool, and overloading a script with production design instructions reads as amateur. The solution is not to ignore color but to embed it in what your characters notice. A character who is afraid notices the red exit sign. A character falling in love notices the blue of the sky. What a character perceives tells us their emotional state—and gives the director and cinematographer material to work with without dictating to them. In prose fiction, color is description in the service of psychology. Do not describe what a room looks like. Describe what the character sees in the room, and make what they see tell us who they are."
  },
  {
    heading: 'The color break',
    body: "One of the most powerful color tools is the deliberate break—a single color appearing in a field of its opposite. Schindler's List is shot almost entirely in black and white. The girl in the red coat is the only color in the film. The choice is devastating: in a film that depicts the systematic dehumanization of millions, the red coat makes one child particular, individual, impossible to look away from. When that coat appears again later in the film, the audience's response is involuntary. The color break works because it signals meaning. When everything is one color and something different appears, the audience knows to pay attention. Use it rarely, and use it intentionally."
  },
]

export default function Lesson() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>Visual Craft</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            Color Psychology in Film and Fiction
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            Color is not decoration. Every deliberate color choice communicates meaning before a word is spoken. Here is how the best storytellers use it.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sections.map((s, i) => (
          <div key={i}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', marginTop: i === 0 ? 0 : '8px' }}>{s.heading}</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'var(--text-mid)', margin: 0 }}>{s.body}</p>
          </div>
        ))}

        <div className="tip-box" style={{ marginTop: '16px' }}>
          <strong>Try this:</strong> Pick three scenes from a film you admire. Write down the dominant color in each scene, then write one sentence about what emotion that color carries. You will find the color is doing work you had not consciously noticed.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid var(--border)', marginTop: '16px' }}>
          <Link href="/learn/motifs" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>How motifs work</p>
            </div>
          </Link>
          <Link href="/learn/tarantino-dialogue" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Tarantino on dialogue</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

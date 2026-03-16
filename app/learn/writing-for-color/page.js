import Link from 'next/link'

export const metadata = {
  title: 'Writing for Color—How to Indicate Visual Intent Without Directing | Eve',
  description: 'How to write a world that demands specific color choices without writing a shooting script. The techniques screenwriters and novelists use to embed visual intent in prose.',
}

const techniques = [
  {
    number: '01',
    title: 'Write the light source, not the color',
    body: "You cannot write 'this scene should be blue.' You can write 'the only light is a television in the corner, its screen casting a cold pulse across the room.' The cinematographer who reads that will light it blue, because that is what a television looks like at night. You have specified the condition that produces the color without specifying the color. This is how screenwriters communicate visual intent without directing on the page. Write the source, the time of day, the weather, the specific objects that carry light or color. The cinematographer supplies the rest.",
    example: "WRONG: The cold blue hospital room made everything feel clinical and sterile.\nRIGHT: Fluorescent overheads. A window onto the parking lot. The smell of something antiseptic that has tried and failed to cover something worse.",
  },
  {
    number: '02',
    title: 'Plant specific objects that carry color',
    body: "A red door. A yellow lampshade. A blue dress worn exactly once. The objects you plant in a scene are instructions to the production designer and cinematographer. They will respect and amplify the colors you specify for significant objects because those objects are clearly significant. But you must make clear through narrative weight, not through color-adjective overuse, that the object matters. The red door matters because the protagonist stands outside it for a beat before entering. The yellow lampshade matters because a character turns it off at the precise moment the argument ends.",
    example: "The bottle of wine was the same one they had opened on their first anniversary. It was still half full. He put it back in the cabinet without a word.",
  },
  {
    number: '03',
    title: 'Use temperature, not color names',
    body: "The vocabulary of temperature maps almost perfectly onto the vocabulary of warm and cool color. A cold room, a warm kitchen, the chill of a hospital corridor, the heat of an argument in July—these temperature references direct the cinematographer's palette choices without locking them to specific colors. Temperature language also communicates emotional register in a way that color adjectives do not. 'Cold' carries connotation that 'blue' does not. 'Warm' carries safety that 'orange' does not. Use the emotional vocabulary of temperature to set the register and let the color follow.",
    example: "The kitchen was the only warm room in the house. Everything else—the hallway, the front bedroom, the study where her father worked—had the particular chill of rooms that are heated but not inhabited.",
  },
  {
    number: '04',
    title: 'Specify season and time of day precisely',
    body: "Every season has a palette. Every time of day has a light. A scene set in January at 4pm in a northern city will be blue-grey and failing. A scene set in late July at 7pm will be golden and horizontal. These are not decorative choices—they are structural ones. The season and time of day you choose for a scene determines the light that falls on your characters and the visual temperature of the world they inhabit. Screenplay writers often underspecify these because they seem like production details. They are not. They are palette choices.",
    example: "INT. KITCHEN—FEBRUARY MORNING\nNot the grey, grudging light of February at 7am. The kind of morning that tells you the next three months will be exactly like this one.",
  },
  {
    number: '05',
    title: 'Track your color as you would track a motif',
    body: "If red appears in your story—a red coat, a red door, a red wine stain that never quite came out—plant it early and let it accumulate. The first appearance should be unremarkable. The second, slightly more noted. By the third, the audience has learned to pay attention. Color works best as a system, not as a single moment. The screenwriter who plants a red object in act one and pays it off in act three is using color the way a musician uses a motif—a recognizable element that returns transformed.",
    example: "ACT ONE: The child in the red coat, barely glimpsed in the crowd.\nACT TWO: The red coat on a chair. Nobody home.\nACT THREE: The red coat in the police report photograph.",
  },
  {
    number: '06',
    title: 'For novelists: color lives in the specific object',
    body: "Prose that names colors directly is usually weaker than prose that names specific objects whose colors the reader already knows. 'A green car' is visual shorthand. 'A bottle-green Triumph Spitfire, the paint starting to flake at the wheel arches' is specific. The specificity of the object carries the color more vividly than the adjective does, and it does additional work—it tells you something about the owner, the decade, the class register of the world. In prose, color is almost always best delivered through specific nouns rather than color adjectives.",
    example: "WEAK: The red carpet was faded and worn.\nSTRONG: The carpet had been red once. Now it was the color of something that had tried for a long time and given up.",
  },
]

export default function WritingForColorLesson() {
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
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', fontWeight: '600' }}>Writing for Color</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="badge">Visual</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Advanced</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '72px 24px 60px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Writing for Color
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: 0 }}>
            You cannot write "shoot this in blue." But you can write a world that makes blue inevitable. Six techniques for embedding visual color intent in prose—for screenwriters who want to suggest without directing, and novelists who want to use color as a structural tool.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '52px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {techniques.map((t) => (
            <div key={t.number} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 26px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', fontWeight: '700', color: 'var(--green)', flexShrink: 0, marginTop: '2px' }}>{t.number}</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>{t.title}</h2>
              </div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.8', color: 'var(--text-dark)', margin: '0 0 16px' }}>{t.body}</p>
              <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '14px 16px', borderLeft: '3px solid var(--green)' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Example</p>
                <pre style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--text-dark)', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{t.example}</pre>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/color-grading" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Color Grading
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

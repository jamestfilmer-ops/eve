import Link from 'next/link'

export const metadata = {
  title: 'Visual Craft—Color Theory and Cinematography for Writers | Eve',
  description: 'How color and camera work tell stories. Lessons on color psychology, color grading, shot types, camera angles, lens choice, and lighting for screenwriters and visual storytellers.',
  keywords: 'color theory film, cinematography for writers, shot types storytelling, camera angles meaning, color psychology narrative, visual storytelling, film color grading',
  openGraph: {
    title: 'Visual Craft—Color and Cinematography for Storytellers',
    description: 'Every color choice and camera angle is a storytelling decision. Learn how visual language works.',
    url: 'https://eve-screenwriting.vercel.app/visual-craft',
  },
}

const colorLessons = [
  {
    slug: 'color-theory',
    title: 'Color Theory in Film and Fiction',
    sub: 'What every color communicates—and how filmmakers use it deliberately',
    time: '12 min',
    level: 'Intermediate',
    status: 'live',
    preview: 'Red is danger, blue is cold, yellow is unease—but only when the filmmaker earns it. Study how the greatest films use color as a second layer of storytelling running beneath the dialogue.',
  },
  {
    slug: 'color-palettes',
    title: 'Color Palettes and Emotional Arcs',
    sub: 'How a film\'s palette shifts as the story shifts',
    time: '10 min',
    level: 'Intermediate',
    status: 'live',
    preview: 'The palette of act one should not match the palette of act three. Study how color arcs work in Parasite, Schindler\'s List, and Her.',
  },
  {
    slug: 'color-contrast',
    title: 'Color Contrast as Dramatic Tension',
    sub: 'Warm vs. cool, saturated vs. desaturated',
    time: '8 min',
    level: 'Beginner',
    status: 'live',
    preview: 'The most powerful color choices in film are often contrasts—a warm figure in a cold world, a desaturated past against a saturated present.',
  },
  {
    slug: 'color-symbolism',
    title: 'Color Symbolism Across Cultures',
    sub: 'White is not always pure, red is not always danger',
    time: '9 min',
    level: 'Intermediate',
    status: 'live',
    preview: 'Western color symbolism is not universal. Study how non-Western cinema uses color differently—and how contemporary filmmakers exploit the collision of both systems.',
  },
  {
    slug: 'color-grading',
    title: 'Color Grading as Storytelling',
    sub: 'What the DI suite does to meaning',
    time: '11 min',
    level: 'Advanced',
    status: 'live',
    preview: 'Color grading is post-production rewriting. Study how the teal-orange blockbuster look, the bleach-bypass of war films, and the hyper-saturation of Wes Anderson all communicate before a word is spoken.',
  },
  {
    slug: 'writing-for-color',
    title: 'Writing Color into Your Script',
    sub: 'How to indicate visual intent without directing on the page',
    time: '7 min',
    level: 'Advanced',
    status: 'live',
    preview: 'You cannot write "shoot this in blue." But you can write a world that demands it. Study how the best screenwriters indicate visual language through description, not direction.',
  },
]

const cinematographyLessons = [
  {
    slug: 'cinematography',
    title: 'Shot Types and What They Mean',
    sub: 'Every framing decision is a storytelling decision',
    time: '14 min',
    level: 'Beginner',
    status: 'live',
    preview: 'The wide shot establishes power. The close-up creates intimacy. The extreme close-up creates unease. Study the full vocabulary of shot types and the emotional work each one does.',
  },
  {
    slug: 'camera-angles',
    title: 'Camera Angles and Power',
    sub: 'High, low, Dutch, eye-level—what each says about who has control',
    time: '10 min',
    level: 'Beginner',
    status: 'live',
    preview: 'The camera angle is always a point of view. A character shot from below is powerful. Shot from above, they are diminished. The angle tells the audience how to feel before the actor speaks.',
  },
  {
    slug: 'camera-movement',
    title: 'Camera Movement and Emotional Meaning',
    sub: 'Dolly, zoom, handheld, steadicam—what each communicates',
    time: '12 min',
    level: 'Intermediate',
    status: 'live',
    preview: 'A dolly-in builds tension. A zoom-in is paranoid. A handheld camera is raw and present. A locked-off camera creates dread. The camera\'s movement—or stillness—is always a choice.',
  },
  {
    slug: 'lenses-and-depth',
    title: 'Lenses, Depth of Field, and Character',
    sub: 'What focal length communicates psychologically',
    time: '11 min',
    level: 'Advanced',
    status: 'live',
    preview: 'Wide lenses exaggerate space and distance. Long lenses compress and isolate. Shallow depth of field separates a character from their world. Deep focus implicates the whole frame in the story.',
  },
  {
    slug: 'lighting-and-story',
    title: 'Lighting as Storytelling',
    sub: 'Hard light, soft light, motivated sources, shadow',
    time: '13 min',
    level: 'Intermediate',
    status: 'live',
    preview: 'Noir lives in shadow. Horror uses a single motivated source to make the ordinary threatening. Romantic comedies use soft diffused light to make everything feel safe. Lighting is emotional weather.',
  },
  {
    slug: 'composition-and-meaning',
    title: 'Composition: Rule of Thirds and Beyond',
    sub: 'Why where a character sits in the frame tells a story',
    time: '10 min',
    level: 'Beginner',
    status: 'live',
    preview: 'A character at the center of the frame is in control. At the edge, they are marginalized. Headroom and lead room, symmetry and asymmetry—all of it means something.',
  },
  {
    slug: 'mise-en-scene',
    title: 'Mise-en-Scene: The Frame as Total Argument',
    sub: 'How everything visible in a shot works together',
    time: '15 min',
    level: 'Advanced',
    status: 'live',
    preview: 'Mise-en-scene is the total visual argument of a frame: set, costume, performance, lighting, composition, camera. The directors who master it—Kubrick, Tati, Kubrick, Wes Anderson—cannot be imitated because every element is inseparable.',
  },
]

const featuredFilmmakers = [
  {
    name: 'Roger Deakins',
    role: 'Director of Photography',
    known: 'Blade Runner 2049, 1917, No Country for Old Men, Skyfall',
    note: 'Deakins uses natural light sources as foundations—every artificial light in his frames is motivated by something that would plausibly exist in the scene. Study how he uses a single window, a single lamp, or a single flame to build an entire scene\'s light logic.',
  },
  {
    name: 'Wes Anderson',
    role: 'Director',
    known: 'The Grand Budapest Hotel, Moonrise Kingdom, The Royal Tenenbaums',
    note: 'Anderson\'s symmetrical compositions and pastel palettes are not decorative—they create a specific emotional world of order that barely contains disorder. The color palette shifts as the emotional temperature shifts. Every frame is a controlled argument about beauty and loss.',
  },
  {
    name: 'Emmanuel Lubezki',
    role: 'Director of Photography',
    known: 'Gravity, The Revenant, Children of Men, Birdman',
    note: 'Lubezki pioneered naturalistic digital cinematography—shooting in actual daylight, using unbroken takes, keeping the camera inside the action. The result is a visceral presence that studio-lit films cannot achieve. Study Children of Men for how unbroken takes build catastrophic dread.',
  },
  {
    name: 'Stanley Kubrick',
    role: 'Director',
    known: 'The Shining, 2001, Barry Lyndon, Full Metal Jacket',
    note: 'Kubrick shot Barry Lyndon with NASA lenses capable of filming by candlelight—giving every frame the look of an 18th-century oil painting. In The Shining, the tracking shot through hotel corridors creates unease without cutting. Kubrick uses the camera as a controlling intelligence that makes the audience feel watched.',
  },
  {
    name: 'Park Chan-wook',
    role: 'Director',
    known: 'Oldboy, The Handmaiden, Decision to Leave',
    note: "Park's color palette is deliberately lush and saturated—a beautiful surface over morally rotten content. The tension between the visual pleasure his films offer and the horror of what they show is itself the argument. Study The Handmaiden for how color codes the difference between deception and truth.",
  },
]

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '10px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--green)',
        background: 'var(--green-pale)',
        border: '1px solid var(--green-border)',
        padding: '2px 8px',
        borderRadius: '4px',
      }}>Live</span>
    )
  }
  return (
    <span style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '10px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-soft)',
      background: 'var(--off-white)',
      border: '1px solid var(--border)',
      padding: '2px 8px',
      borderRadius: '4px',
    }}>Soon</span>
  )
}

function LessonCard({ lesson, section }) {
  const isLive = lesson.status === 'live'
  const content = (
    <div style={{
      background: '#fff',
      border: `1px solid ${isLive ? 'var(--border)' : 'var(--border)'}`,
      borderRadius: '10px',
      padding: '18px 20px',
      opacity: isLive ? 1 : 0.72,
      transition: 'border-color 0.15s, box-shadow 0.15s',
    }}
    className={isLive ? 'lesson-card-hover' : ''}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '6px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '16px',
          fontWeight: '700',
          color: isLive ? 'var(--text-dark)' : 'var(--text-mid)',
          margin: 0,
          lineHeight: '1.3',
        }}>
          {lesson.title}
        </h3>
        <StatusBadge status={lesson.status} />
      </div>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', margin: '0 0 8px', fontStyle: 'italic' }}>
        {lesson.sub}
      </p>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: '0 0 10px' }}>
        {lesson.preview}
      </p>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-soft)' }}>{lesson.time}</span>
        <span style={{ color: 'var(--border)' }}>|</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)' }}>{lesson.level}</span>
        {isLive && (
          <>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)' }}>Read lesson</span>
          </>
        )}
      </div>
    </div>
  )

  if (isLive) {
    return <Link href={`/learn/${lesson.slug}`} style={{ textDecoration: 'none', display: 'block' }}>{content}</Link>
  }
  return <div>{content}</div>
}

export default function VisualCraftPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
            Visual Craft
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: '700', color: '#fff', lineHeight: '1.12', marginBottom: '20px', maxWidth: '700px' }}>
            Color and Camera as Storytelling Language
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.72)', maxWidth: '580px', marginBottom: '36px' }}>
            Every color choice and every camera angle is a storytelling decision. Not decoration—argument. This section breaks down the visual vocabulary of film and teaches you to use it deliberately, whether you are writing for the screen or trying to understand why certain films feel the way they do.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/learn/color-theory" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
              Start: Color Theory
            </Link>
            <Link href="/learn/cinematography" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>
              Start: Cinematography
            </Link>
          </div>
        </div>
      </section>

      {/* What this section is */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '36px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '28px' }}>
          {[
            { label: 'Color Theory', count: colorLessons.length + ' lessons', desc: 'How color communicates before a word is spoken' },
            { label: 'Cinematography', count: cinematographyLessons.length + ' lessons', desc: 'Shot types, angles, movement, lighting, and composition' },
            { label: 'Master Filmmakers', count: featuredFilmmakers.length + ' profiles', desc: 'The cinematographers and directors who defined visual storytelling' },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '4px' }}>{item.count}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Color Theory */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '8px', paddingBottom: '16px', borderBottom: '2px solid var(--green)' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Course 1</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>
                Color Theory in Storytelling
              </h2>
            </div>
            <Link href="/learn/color-theory" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Start course
            </Link>
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '24px' }}>
            Color is not mood board decoration—it is a second layer of narrative running below the dialogue. Every deliberate film uses color to reinforce, contradict, or complicate what the characters are saying. These lessons move from fundamental color psychology to the practical craft of writing for color and understanding the choices directors make.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {colorLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} section="color" />
            ))}
          </div>
        </section>

        {/* Cinematography */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '8px', paddingBottom: '16px', borderBottom: '2px solid var(--green)' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Course 2</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>
                Cinematography: The Grammar of Film
              </h2>
            </div>
            <Link href="/learn/cinematography" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Start course
            </Link>
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '24px' }}>
            The camera is not a neutral recorder. Every shot type, angle, movement, and lens choice is a conscious argument about what the audience should feel. Understanding cinematography makes you a better screenwriter—you stop writing directions and start writing worlds that demand specific visual choices.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cinematographyLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} section="cinematography" />
            ))}
          </div>
        </section>

        {/* Featured Filmmakers */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ paddingBottom: '16px', borderBottom: '2px solid var(--green)', marginBottom: '24px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Reference</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>
              Visual Masters to Study
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '24px' }}>
            The best education in visual storytelling is watching the right films with the right questions. These directors and cinematographers have built the most coherent visual languages in cinema—study them not to imitate but to understand what deliberate visual thinking looks like.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {featuredFilmmakers.map((person) => (
              <div key={person.name} className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>
                    {person.name}
                  </h3>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--green)', background: 'var(--green-pale)', border: '1px solid var(--green-border)', padding: '2px 8px', borderRadius: '4px' }}>
                    {person.role}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', margin: '0 0 8px', fontStyle: 'italic' }}>
                  {person.known}
                </p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.7', margin: 0 }}>
                  {person.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to use this as a writer */}
        <section style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '14px', padding: '36px 32px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--green)', marginBottom: '16px' }}>
            How to use visual craft if you are a writer, not a director
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Understanding color psychology makes your scene descriptions richer—you stop writing "it was dark and ominous" and start writing a world whose physical details create the feeling without the adjective.',
              'Understanding shot grammar helps you know what your dialogue must carry and what the camera can be trusted to do. A scene you write as two people talking at a table reads differently if you understand that a standard coverage setup cannot create dread—that requires a specific visual choice.',
              'For novelists: cinematography is a precise vocabulary for the choices you make about narrative distance, perspective, and where to put attention. The close-up, the long shot, the cut—all have prose equivalents.',
              'The best screenwriters think visually before they write words. They know which scenes are dialogue scenes and which are image scenes. These lessons will help you tell the difference.',
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

        {/* CTA */}
        <section style={{ background: 'var(--green)', borderRadius: '16px', padding: '44px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 27px)', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
            See how your story looks on the page
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', maxWidth: '440px', margin: '0 auto 24px' }}>
            Use Eve to build the scene structure, character arcs, and visual cues into your project. Free to start.
          </p>
          <Link href="/auth?signup=true" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', padding: '13px 30px', borderRadius: '8px', textDecoration: 'none' }}>
            Start writing—free
          </Link>
        </section>

      </div>
    </div>
  )
}

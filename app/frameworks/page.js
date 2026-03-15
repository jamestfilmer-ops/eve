import Link from 'next/link'

export const metadata = {
  title: 'Screenwriting Frameworks Compared  -- Save the Cat vs Hero\'s Journey vs Story Circle',
  description: 'A complete comparison of 7 screenwriting frameworks: Save the Cat, Hero\'s Journey, Story Circle, Sequence Approach, Kishōtenketsu, Fichtean Curve, and Freeform. What each is best for, who created it, and when to use it.',
  keywords: 'screenwriting frameworks, Save the Cat vs Hero\'s Journey, story structure, three-act structure, Story Circle Dan Harmon, Fichtean Curve, Sequence Approach, Kishotenketsu',
  openGraph: {
    title: 'Screenwriting Frameworks Compared  -- 7 Structures Side by Side',
    description: 'Save the Cat, Hero\'s Journey, Story Circle and 4 more  -- compared honestly. What each is best for and when to use it.',
    url: 'https://eve-screenwriting.vercel.app/frameworks',
  },
}

const frameworks = [
  {
    slug: 'save-the-cat',
    name: 'Save the Cat',
    creator: 'Blake Snyder',
    year: '2005',
    acts: 3,
    beats: 15,
    difficulty: 'Beginner',
    diffColor: '#2D5016',
    diffBg: '#EFF6E7',
    diffBorder: '#C5DFA8',
    bestFor: 'Feature films, genre films, first screenplays',
    notFor: 'Experimental work, non-Western stories, literary drama',
    summary: 'The most popular and most criticized framework in Hollywood. Snyder mapped 15 specific beats with precise page numbers onto three-act structure. Formulaic  -- and useful precisely because it is formulaic. Knowing the formula is how you break it intelligently.',
    strengths: ['Highly specific beat placement makes story problems easy to locate', 'Works for almost every mainstream genre', 'The best diagnostic tool for a screenplay that is not working'],
    limitations: ['Can produce mechanical, predictable stories if followed rigidly', 'Page number precision does not translate to television or short film', 'Culturally specific to Hollywood commercial cinema'],
    films: ['Toy Story', 'Die Hard', 'Miss Congeniality'],
    bookUrl: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Book/dp/1932907009',
    bookTitle: 'Save the Cat (2005)',
  },
  {
    slug: 'heros-journey',
    name: "Hero's Journey",
    creator: 'Joseph Campbell',
    year: '1949',
    acts: 3,
    beats: 12,
    difficulty: 'Intermediate',
    diffColor: '#B5700A',
    diffBg: '#FEF3E2',
    diffBorder: '#F5C57A',
    bestFor: 'Myth-driven narratives, fantasy, adventure, coming-of-age',
    notFor: 'Intimate character studies, ensemble films, non-hero-centered stories',
    summary: "Campbell's monomyth  -- the pattern he identified in myths across every culture  -- was adapted for screenwriting by Christopher Vogler in 1992. Broader and more archetypal than Save the Cat. Less prescriptive about structure, more prescriptive about psychological depth. The framework that explains why Star Wars works.",
    strengths: ['Rooted in universal psychological archetypes  -- stories built on it resonate deeply', 'Flexible enough to accommodate very different genres', 'Excellent framework for character transformation'],
    limitations: ['Less specific than Save the Cat  -- harder to use as a diagnostic', 'Assumes a single hero, which limits ensemble stories', "Vogler's adaptation is better for film than Campbell's original"],
    films: ['Star Wars', 'The Lion King', 'The Matrix'],
    bookUrl: 'https://www.amazon.com/Writers-Journey-Mythic-Structure-Storytellers/dp/1615932283',
    bookTitle: "The Writer's Journey  -- Vogler (1992)",
  },
  {
    slug: 'story-circle',
    name: 'Story Circle',
    creator: 'Dan Harmon',
    year: '2000s',
    acts: 2,
    beats: 8,
    difficulty: 'Beginner',
    diffColor: '#2D5016',
    diffBg: '#EFF6E7',
    diffBorder: '#C5DFA8',
    bestFor: 'Television episodes, short stories, contained narratives',
    notFor: 'Epic narratives, multiple protagonist stories',
    summary: "Harmon's distillation of Campbell into 8 steps arranged in a circle  -- you go around once per episode. Community was built on it. Rick and Morty uses it almost mechanically. The Story Circle is the fastest framework to learn and the most useful for episodic television. Each episode is its own complete circle.",
    strengths: ['The fastest to learn and apply', 'Natural fit for episodic TV structure', 'The circle shape makes character return to origin feel inevitable rather than arbitrary'],
    limitations: ['Too compressed for feature-length complexity', 'The 8 steps can feel rigid for writers who think in longer arcs', 'Works best when you believe every episode should be a complete story'],
    films: ['Community (TV)', 'Rick and Morty (TV)', 'Used across most of Harmon\'s work'],
    bookUrl: null,
    bookTitle: null,
  },
  {
    slug: 'sequence-approach',
    name: 'Sequence Approach',
    creator: 'Frank Daniel',
    year: '1950s',
    acts: 3,
    beats: 8,
    difficulty: 'Intermediate',
    diffColor: '#B5700A',
    diffBg: '#FEF3E2',
    diffBorder: '#F5C57A',
    bestFor: 'Writers who find three-act structure too broad, complex plots',
    notFor: 'Simple narratives, writers new to structure',
    summary: 'Daniel divided the traditional three-act screenplay into eight sequences of roughly 10-15 pages each, each with its own tension arc, mini-climax, and resolution. The Sequence Approach is three-act structure made granular. It answers the question Save the Cat leaves unanswered: what happens between the beats?',
    strengths: ['Solves the Act 2 sag problem by creating eight distinct mini-acts', 'Excellent for complex plots with multiple storylines', 'Every sequence has a clear dramatic question  -- easy to test'],
    limitations: ['More complex to learn than Save the Cat', 'The 10-15 page sequence length is an approximation, not a rule  -- easy to misapply', 'Less established  -- fewer examples and resources'],
    films: ['Used extensively in USC and AFI film school curricula'],
    bookUrl: 'https://www.amazon.com/Sequence-Approach-Paul-Gulino/dp/0826415407',
    bookTitle: 'Screenwriting: The Sequence Approach  -- Gulino (2004)',
  },
  {
    slug: 'fichtean-curve',
    name: 'Fichtean Curve',
    creator: 'Johann Gottlieb Fichte',
    year: '1800s',
    acts: 1,
    beats: 6,
    difficulty: 'Advanced',
    diffColor: '#1A140F',
    diffBg: '#F7F5F0',
    diffBorder: '#E8E2D9',
    bestFor: 'Thriller, horror, intense drama, writers who hate slow openings',
    notFor: 'Character-driven slow builds, stories that need extensive setup',
    summary: 'The Fichtean Curve begins in crisis. No setup, no ordinary world, no threshold crossing  -- you start at the first major complication and escalate through rising crises to the climax. Everything the audience needs to know is revealed through action, not setup. The result is a story that starts fast and never slows.',
    strengths: ['Eliminates the slow first act problem entirely', 'Naturally creates momentum and propulsion', 'Backstory delivered through action rather than exposition'],
    limitations: ['Difficult to build deep character empathy without setup time', 'Not suited to stories that depend on establishing a world before disrupting it', 'The constant escalation can exhaust the audience if not calibrated carefully'],
    films: ['Memento', 'Gone Girl', 'No Country for Old Men'],
    bookUrl: null,
    bookTitle: null,
  },
  {
    slug: 'kishotenketsu',
    name: 'Kishōtenketsu',
    creator: 'Chinese/Japanese tradition',
    year: 'Ancient',
    acts: 4,
    beats: 4,
    difficulty: 'Advanced',
    diffColor: '#1A140F',
    diffBg: '#F7F5F0',
    diffBorder: '#E8E2D9',
    bestFor: 'Non-Western narratives, experimental stories, writers tired of conflict-driven structure',
    notFor: 'Genre films, Western commercial cinema, stories centered on antagonism',
    summary: 'Kishōtenketsu is a four-part structure with no antagonist and no conflict in the Western sense. The third act (ten) introduces a twist that recontextualizes everything before it  -- not because conflict escalated, but because a new perspective reveals something already present. Used in Japanese manga, Chinese poetry, and Studio Ghibli films.',
    strengths: ['Produces stories with a fundamentally different feel from Western structure', 'The twist in the third section can be more surprising than conflict-based escalation', 'Natural for stories about discovery, observation, or transformation without opposition'],
    limitations: ['Deeply counterintuitive for writers trained in Western narrative', 'Difficult to pitch in commercial Hollywood contexts', 'Requires significant relearning of what "drama" means'],
    films: ["My Neighbor Totoro (Ghibli)", "Spirited Away (Ghibli)", "Many Studio Ghibli films"],
    bookUrl: null,
    bookTitle: null,
  },
  {
    slug: 'freeform',
    name: 'Freeform',
    creator: ' --',
    year: ' --',
    acts: null,
    beats: null,
    difficulty: 'Any level',
    diffColor: '#5C4A3A',
    diffBg: '#F7F5F0',
    diffBorder: '#E8E2D9',
    bestFor: 'Writers who know what they are doing or writers who want to discover the structure in the draft',
    notFor: 'Writers who need a framework to stay on track',
    summary: "Freeform is not a framework  -- it is the intentional absence of one. Some writers need to discover their structure in the draft rather than plan it. Eve's Freeform mode gives you all the workspace tools (beat sheets, scene tracking, character builder) without imposing a structure. You define your own acts and beats.",
    strengths: ['No structural constraints to fight against', 'Works for any genre, length, or narrative approach', 'Useful for writers who know another framework well enough to internalize it'],
    limitations: ['No guardrails  -- easier to lose track of where you are', 'Requires more structural self-awareness than frameworks provide', 'Not recommended as a first screenplay'],
    films: ['Depends entirely on the writer'],
    bookUrl: null,
    bookTitle: null,
  },
  {
    id: 'seven-point-story',
    name: "Dan Wells' Seven-Point",
    difficulty: 'Beginner',
    creator: 'Dan Wells',
    acts: '3',
    beats: '7',
    bestFor: 'Novelists struggling with second acts',
    summary: "Build from the ending backward. The Hook is the mirror opposite of the Resolution. Two Plot Turns move the protagonist in and out of the unfamiliar world. Two Pinch Points demonstrate the antagonistic force. Write your Resolution first  -- then find the Hook.",
    strengths: ['Backward-build method clarifies structure fast', 'Pinch Points give the antagonist a structural role', 'Midpoint explicitly marks the reaction-to-action shift'],
    limitations: ['Less granular than Save the Cat for scene-level work', 'Requires knowing your ending before you can plot', 'Seven beats may feel sparse for complex long-form stories'],
    films: ['Used in fantasy and genre novel writing  -- less common in produced screenplays'],
    bookUrl: null,
    bookTitle: null,
  },
  {
    id: 'freytags-pyramid',
    name: "Freytag's Pyramid",
    difficulty: 'Beginner',
    creator: 'Gustav Freytag',
    acts: '5',
    beats: '5',
    bestFor: 'Diagnosing structural problems in existing drafts',
    summary: "The 1863 five-stage arc  -- Exposition, Rising Action, Climax, Falling Action, Denouement  -- that underpins every Western story structure since. Most useful as a diagnostic lens rather than an active planning tool. Draw the pyramid for any story to see where your structural problems are.",
    strengths: ['Universal  -- applies to any story in any medium', 'Excellent diagnostic tool for finished or in-progress drafts', 'Simple enough to apply in minutes', 'Makes climax-placement problems immediately visible'],
    limitations: ['Too broad for active scene-level plotting', 'No character arc guidance built in', 'Does not distinguish between types of climax or midpoints'],
    films: ['All classical drama', 'Most films  -- it describes rather than prescribes'],
    bookUrl: null,
    bookTitle: null,
  },
  {
    id: 'snowflake-method',
    name: 'Snowflake Method',
    difficulty: 'Intermediate',
    creator: 'Randy Ingermanson',
    acts: 'Design-first',
    beats: '10 steps',
    bestFor: 'Novelists who need scaffolding before they write',
    summary: "Design outward from the core: one sentence, then a paragraph, then character summaries, then a full scene list. Ingermanson's system front-loads every hard structural decision so the actual writing is clean. Stop at Step 3 and you already have enough to begin.",
    strengths: ['Eliminates the blank-page problem', 'Character and plot developed simultaneously', 'Scalable  -- use only the steps you need', 'Produces a detailed blueprint before the first draft'],
    limitations: ['Time-intensive pre-writing phase', 'Can produce over-plotted drafts', 'Not suited for discovery writers or experimental work'],
    films: ['Not a screenplay tool  -- designed specifically for novelists and genre fiction'],
    bookUrl: null,
    bookTitle: null,
  },
  {
    id: 'hauge-six-stage',
    name: "Hauge's Six-Stage",
    difficulty: 'Intermediate',
    creator: 'Michael Hauge',
    acts: '6',
    beats: '6 + 5 turning points',
    bestFor: 'Character-driven stories where transformation is the whole point',
    summary: "Maps the outer journey (what happens) against the inner journey (who the protagonist becomes) with precise percentage markers. Every protagonist hides behind an Identity  -- a false self  -- and must reach their Essence. The story is the mechanism that forces that movement.",
    strengths: ['Identity vs. Essence is a precise diagnostic for hollow characters', 'Percentage markers make pacing problems visible immediately', 'Forces plot and character arc to connect causally rather than run in parallel'],
    limitations: ['Less beat-granular than Save the Cat', 'Requires a strong pre-existing character concept to work with', 'Less useful for action-driven stories without deep character transformation'],
    films: ['Good Will Hunting', 'Forrest Gump', 'Legally Blonde', 'Most romantic dramas and coming-of-age films'],
    bookUrl: 'https://www.amazon.com/Writing-Screenplays-That-Sell-Anniversary/dp/0062071017',
    bookTitle: 'Writing Screenplays That Sell',
  },
]

const comparisonRows = [
  { label: 'Best for', key: 'bestFor' },
  { label: 'Acts', key: 'acts', fmt: v => v ? `${v}` : ' --' },
  { label: 'Named beats', key: 'beats', fmt: v => v ? `${v}` : ' --' },
  { label: 'Difficulty', key: 'difficulty' },
  { label: 'Creator', key: 'creator' },
]

export default function FrameworksPage() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'var(--green)', padding: '88px 24px 72px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '20px' }}>Story Structure</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 54px)', fontWeight: '700', color: '#fff', lineHeight: '1.15', marginBottom: '24px' }}>
            11 screenwriting frameworks, compared honestly
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', margin: '0 auto 32px' }}>
            Save the Cat or Hero&apos;s Journey? Story Circle or Sequence Approach? What each framework actually does, what it is best for, and when to use something else.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#fff', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Try all 7 frameworks in Eve  -- free
          </Link>
        </div>
      </section>

      {/* Quick nav */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px', position: 'sticky', top: '60px', zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {frameworks.map(f => (
            <a key={f.slug} href={`#${f.slug}`} style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '6px 14px', borderRadius: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
              {f.name}
            </a>
          ))}
        </div>
      </section>

      {/* Framework cards */}
      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {frameworks.map((f, i) => (
            <div key={f.slug} id={f.slug} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '32px 36px 24px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>{f.name}</h2>
                      <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', background: 'var(--green-pale)', border: '1px solid var(--green-border)', fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--green)' }}>{f.difficulty}</span>
                    </div>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--text-soft)', letterSpacing: '0.04em' }}>
                      {f.creator} · {f.year}{f.acts ? ` · ${f.acts} acts` : ''}{f.beats ? ` · ${f.beats} beats` : ''}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Link href={`/learn/${f.slug}`} style={{ display: 'inline-block', padding: '9px 18px', background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', textDecoration: 'none' }}>
                      Read the lesson →
                    </Link>
                    {f.bookUrl && (
                      <a href={f.bookUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '9px 18px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
                        {f.bookTitle} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="framework-card-grid" style={{ padding: '28px 36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-mid)', marginBottom: '20px' }}>{f.summary}</p>
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Best for</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', fontWeight: '600' }}>{f.bestFor}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Not ideal for</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)' }}>{f.notFor}</p>
                  </div>
                </div>
                <div>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>Strengths</p>
                    {f.strengths.map((s, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--green)', marginTop: '7px', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0 }}>{s}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>Limitations</p>
                    {f.limitations.map((l, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--text-soft)', marginTop: '7px', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0 }}>{l}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Examples</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)' }}>{f.films.join(' · ')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 24px', background: 'var(--green-pale)', borderTop: '1px solid var(--green-border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Try all 7 frameworks in your next project
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '28px' }}>
            Eve lets you pick your framework when you create a project  -- or switch anytime. Beat auto-fill, scene tracking, PDF export. Free to start.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none' }}>Create free account</Link>
        </div>
      </section>

    </div>
  )
}

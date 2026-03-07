import Link from 'next/link'

const lessons = [
  {
    category: 'Structure',
    items: [
      {
        title: 'What a scene actually does',
        slug: 'what-a-scene-does',
        time: '3 min',
        preview: 'Every scene must do at least two things simultaneously. If it only does one, it is a candidate for the cutting room floor.',
      },
      {
        title: 'The midpoint is the spine',
        slug: 'midpoint',
        time: '4 min',
        preview: 'Remove your midpoint and your story collapses. It is not a scene in the middle — it is the event that divides your story into a before and an after.',
      },
      {
        title: 'Act breaks: what they are and why they matter',
        slug: 'act-breaks',
        time: '5 min',
        preview: 'An act break is a point of no return. Something must change so completely that your story can never go back to what it was.',
      },
      {
        title: 'The All Is Lost beat',
        slug: 'all-is-lost',
        time: '3 min',
        preview: 'Before your hero can win, they must lose everything. If your hero can recover without changing, the beat is not working.',
      },
    ],
  },
  {
    category: 'Character',
    items: [
      {
        title: 'Want vs. Need: the engine of every great character',
        slug: 'want-vs-need',
        time: '4 min',
        preview: 'Your protagonist wants something they can name. They need something they cannot see yet. The gap between those two things is where your story lives.',
      },
      {
        title: 'The ghost: what happened before page one',
        slug: 'ghost',
        time: '3 min',
        preview: 'Every compelling character carries a wound from before the story starts. This ghost shapes every decision they make — even when they do not know it.',
      },
      {
        title: 'Making your antagonist as strong as your hero',
        slug: 'antagonist',
        time: '5 min',
        preview: 'A weak antagonist makes a weak story. Your antagonist should be the hero of their own story — with a worldview that is internally consistent, even if it is wrong.',
      },
      {
        title: 'Secondary characters who earn their place',
        slug: 'secondary-characters',
        time: '4 min',
        preview: 'The best secondary characters challenge the hero. Every person in your story should want something, even if it is just a glass of water.',
      },
    ],
  },
  {
    category: 'Dialogue',
    items: [
      {
        title: 'Nobody talks to have a conversation',
        slug: 'dialogue-subtext',
        time: '4 min',
        preview: 'Real people talk to get something. Every line of dialogue is a transaction. If no one wants anything, the scene is dead.',
      },
      {
        title: 'Subtext: what is not being said',
        slug: 'subtext',
        time: '5 min',
        preview: 'The best dialogue is an iceberg. What is spoken is ten percent. Two people talking about the weather can break your heart.',
      },
      {
        title: 'How to write an argument that feels real',
        slug: 'arguments',
        time: '3 min',
        preview: 'Real arguments are not about what people are arguing about. They are about what people are afraid of. Write the fear, not the fight.',
      },
    ],
  },
  {
    category: 'Theme',
    items: [
      {
        title: "Theme isn't a message — it's a question",
        slug: 'theme',
        time: '4 min',
        preview: 'The moment your story has a clear answer, it has become a lecture. The best stories ask a question and let the audience wrestle with it.',
      },
      {
        title: 'Planting and payoff',
        slug: 'plant-payoff',
        time: '3 min',
        preview: 'A payoff without a plant feels cheap. A plant without a payoff is dead weight. The art is burying the plant so the payoff feels inevitable.',
      },
      {
        title: 'How motifs work',
        slug: 'motifs',
        time: '3 min',
        preview: 'A motif is a recurring image or idea that accumulates meaning as your story progresses. Used right, a single object can carry your entire theme.',
      },
    ],
  },
  {
    category: 'Visual',
    items: [
      {
        title: 'Color as a storytelling tool',
        slug: 'color-psychology',
        time: '7 min',
        preview: 'Color is not decoration. In the hands of a deliberate filmmaker, it is a language that works on the viewer before a word of dialogue is spoken.',
      },
    ],
  },
  {
    category: 'Craft',
    items: [
      {
        title: 'The Tarantino method: pop culture, specificity, and character',
        slug: 'tarantino-dialogue',
        time: '7 min',
        preview: 'Tarantino is the most imitated screenwriter of thirty years. Most imitators miss the point. Every digression works twice: once on the surface, once underneath.',
      },
      {
        title: 'How The Sopranos builds dread',
        slug: 'sopranos-drama',
        time: '8 min',
        preview: 'The show is not about violence — it is about the domestication of it. Dread is not created by showing terrible things. It is the gap between violence and the mundane.',
      },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      {
        title: 'The Sequence Approach',
        slug: 'sequence-approach',
        time: '8 min',
        preview: 'Divide your screenplay into eight sequences of fifteen pages each. Solve eight miniature problems instead of one enormous one.',
      },
      {
        title: 'Kishōtenketsu: four acts without conflict',
        slug: 'kishotenketsu',
        time: '7 min',
        preview: 'A classical East Asian structure with no antagonist and no obstacle. Story organized around surprise and revelation rather than conflict and resolution.',
      },
      {
        title: 'The Fichtean Curve: crisis first',
        slug: 'fichtean-curve',
        time: '6 min',
        preview: 'Open in crisis. Weave backstory in through pressure. The audience earns the right to understand your character by first caring what happens to them.',
      },
    ],
  },
]

const readingList = [
  { title: 'Save the Cat!', author: 'Blake Snyder', note: 'The most practical story structure book ever written.' },
  { title: 'Story', author: 'Robert McKee', note: 'Dense, thorough, and worth every page.' },
  { title: 'The Hero with a Thousand Faces', author: 'Joseph Campbell', note: 'The mythic source of all story.' },
  { title: 'Bird by Bird', author: 'Anne Lamott', note: 'On writing badly — and why that is the only way to start.' },
  { title: 'Screenplay', author: 'Syd Field', note: 'The book that defined three-act structure for Hollywood.' },
  { title: 'The Anatomy of Story', author: 'John Truby', note: 'Twenty-two steps of story structure. More granular than anyone else.' },
]

// All fully-written lesson slugs
const writtenSlugs = [
  'what-a-scene-does',
  'midpoint',
  'act-breaks',
  'all-is-lost',
  'want-vs-need',
  'ghost',
  'antagonist',
  'dialogue-subtext',
  'theme',
  'subtext',
  'arguments',
  'secondary-characters',
  'plant-payoff',
  'motifs',
  'color-psychology',
  'tarantino-dialogue',
  'sopranos-drama',
  'sequence-approach',
  'kishotenketsu',
  'fichtean-curve',
]

export default function LearnPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 20px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '36px', maxWidth: '640px' }}>
        <div className="badge badge-green" style={{ marginBottom: '16px' }}>Craft library</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '14px', lineHeight: '1.2' }}>Learn the craft.</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
          Short lessons drawn from screenwriting courses, master classes, and the writers who figured this out before us. Read one before a session. Read all of them on a slow afternoon.
        </p>
      </div>

      {/* Learning paths CTA */}
      <div className="fade-up" style={{ marginBottom: '36px' }}>
        <Link href="/learn/tracks" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'var(--green-pale)', border: '1px solid var(--green-border)',
            borderRadius: '12px', padding: '18px 22px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
            cursor: 'pointer', transition: 'box-shadow 0.2s',
          }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--green)', marginBottom: '3px' }}>Not sure where to start?</p>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)' }}>Browse the Learning Paths — curated tracks for Beginner, Intermediate, and Advanced writers.</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, color: 'var(--green)' }}>
              <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>

      {/* Beginner tip */}
      <div className="tip-box fade-up fade-up-delay-1" style={{ marginBottom: '48px', maxWidth: '700px' }}>
        <strong>New to writing?</strong> Start with &ldquo;Want vs. Need&rdquo; under Character and &ldquo;What a scene actually does&rdquo; under Structure. Those two lessons will change how you read and write everything else.
      </div>

      {/* Lessons */}
      {lessons.map((cat, ci) => (
        <div key={ci} className={`fade-up fade-up-delay-${Math.min(ci + 1, 4)}`} style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '24px', background: 'var(--green)', borderRadius: '2px' }} />
            <h2 style={{ fontSize: '20px', color: 'var(--green)' }}>{cat.category}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
            {cat.items.map((item, i) => {
              const isWritten = writtenSlugs.includes(item.slug)
              return isWritten ? (
                <Link key={i} href={`/learn/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '20px 22px', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span className="badge badge-green" style={{ fontSize: '10px' }}>{cat.category}</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{item.time}</span>
                    </div>
                    <h3 style={{ fontSize: '15px', fontFamily: 'var(--font-display)', marginBottom: '8px', lineHeight: '1.4', color: 'var(--green)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', flex: 1 }}>{item.preview}</p>
                    <p style={{ fontSize: '12px', color: 'var(--green-light)', marginTop: '14px', fontWeight: '600' }}>Read &rarr;</p>
                  </div>
                </Link>
              ) : (
                <div key={i} className="card" style={{ padding: '20px 22px', height: '100%', display: 'flex', flexDirection: 'column', opacity: 0.55 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="badge" style={{ fontSize: '10px', background: 'var(--off-white)', color: 'var(--text-soft)', border: '1px solid var(--border)' }}>{cat.category}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontStyle: 'italic' }}>Coming soon</span>
                  </div>
                  <h3 style={{ fontSize: '15px', fontFamily: 'var(--font-display)', marginBottom: '8px', lineHeight: '1.4', color: 'var(--text-dark)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', flex: 1 }}>{item.preview}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Reading list */}
      <div style={{
        background: 'var(--green)', borderRadius: '14px', padding: '40px 32px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px',
      }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '22px', marginBottom: '12px' }}>Go deeper</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.75' }}>
            These are the books worth reading. Not all of them agree with each other — that is the point. Read two with conflicting views and form your own.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {readingList.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', paddingBottom: '14px', borderBottom: i < readingList.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ width: '3px', height: '36px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                  {b.title} <span style={{ fontWeight: '400', color: 'rgba(255,255,255,0.6)' }}>— {b.author}</span>
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>{b.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
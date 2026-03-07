import Link from 'next/link'

const lessons = [
  {
    category: 'Structure',
    items: [
      { title: 'What a scene actually does', slug: 'what-a-scene-does', time: '3 min', preview: 'Every scene must do at least two things simultaneously. If it only does one, it is a candidate for the cutting room floor.' },
      { title: 'The midpoint is the spine', slug: 'midpoint', time: '4 min', preview: 'Remove your midpoint and your story collapses. It is not a scene in the middle — it is the event that divides your story into a before and an after.' },
      { title: 'Act breaks: what they are and why they matter', slug: 'act-breaks', time: '5 min', preview: 'An act break is a point of no return. Something must change so completely that your story can never go back to what it was.' },
      { title: 'The All Is Lost beat', slug: 'all-is-lost', time: '3 min', preview: 'Before your hero can win, they must lose everything. If your hero can recover without changing, the beat is not working.' },
    ],
  },
  {
    category: 'Character',
    items: [
      { title: 'Want vs. Need: the engine of every great character', slug: 'want-vs-need', time: '4 min', preview: 'Your protagonist wants something they can name. They need something they cannot see yet. The gap between those two things is where your story lives.' },
      { title: 'The ghost: what happened before page one', slug: 'ghost', time: '3 min', preview: 'Every compelling character carries a wound from before the story starts. This ghost shapes every decision they make — even when they do not know it.' },
      { title: 'Making your antagonist as strong as your hero', slug: 'antagonist', time: '5 min', preview: 'A weak antagonist makes a weak story. Your antagonist should be the hero of their own story — with a worldview that is internally consistent, even if it is wrong.' },
      { title: 'Secondary characters who earn their place', slug: 'secondary-characters', time: '4 min', preview: 'The best secondary characters challenge the hero. Every person in your story should want something, even if it is just a glass of water.' },
      { title: 'The lie your character believes', slug: 'the-lie', time: '4 min', preview: 'Every great protagonist believes something false — a deep, organizing lie they have built their life around. The story is the process of dismantling it.' },
      { title: 'How a character arc actually works', slug: 'character-arc', time: '5 min', preview: 'A character arc is not personal growth. It is a forced transformation in how a character understands themselves — resisted until the last possible moment.' },
      { title: 'Flaw vs. wound: why the difference matters', slug: 'flaw-vs-wound', time: '4 min', preview: 'A flaw without a wound is just a bad habit. The wound is what makes the audience forgive the flaw — because they can see exactly how a person would arrive at it.' },
      { title: 'Why every character needs a different voice', slug: 'character-voice', time: '4 min', preview: 'Cover the names in your script and read a page of dialogue. Can you tell who is speaking? If not, your characters are sharing a voice — usually yours.' },
      { title: 'How two characters define each other', slug: 'relationship-pairs', time: '4 min', preview: 'A relationship is not a backdrop. It is a pressure system. The right pairing reveals things about a character that could not be revealed any other way.' },
    ],
  },
  {
    category: 'Dialogue',
    items: [
      { title: 'Nobody talks to have a conversation', slug: 'dialogue-subtext', time: '4 min', preview: 'Real people talk to get something. Every line of dialogue is a transaction. If no one wants anything, the scene is dead.' },
      { title: 'Subtext: what is not being said', slug: 'subtext', time: '5 min', preview: 'The best dialogue is an iceberg. What is spoken is ten percent. Two people talking about the weather can break your heart.' },
      { title: 'How to write an argument that feels real', slug: 'arguments', time: '3 min', preview: 'Real arguments are not about what people are arguing about. They are about what people are afraid of. Write the fear, not the fight.' },
    ],
  },
  {
    category: 'Theme',
    items: [
      { title: "Theme isn't a message — it's a question", slug: 'theme', time: '4 min', preview: 'The moment your story has a clear answer, it has become a lecture. The best stories ask a question and let the audience wrestle with it.' },
      { title: 'Planting and payoff', slug: 'plant-payoff', time: '3 min', preview: 'A payoff without a plant feels cheap. A plant without a payoff is dead weight. The art is burying the plant so the payoff feels inevitable.' },
      { title: 'How motifs work', slug: 'motifs', time: '3 min', preview: 'A motif is a recurring image or idea that accumulates meaning as your story progresses. Used right, a single object can carry your entire theme.' },
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

// Lessons that are fully written
const writtenSlugs = ['what-a-scene-does', 'midpoint', 'want-vs-need', 'dialogue-subtext', 'theme', 'act-breaks', 'all-is-lost', 'ghost', 'antagonist', 'subtext', 'arguments', 'plant-payoff', 'motifs', 'secondary-characters', 'the-lie', 'character-arc', 'flaw-vs-wound', 'character-voice', 'relationship-pairs']

export default function LearnPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '48px', maxWidth: '640px' }}>
        <div className="badge" style={{ marginBottom: '16px' }}>Craft library</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '14px', lineHeight: '1.2' }}>Learn the craft.</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
          Short lessons drawn from screenwriting courses, master classes, and the writers who figured this out before us. Read one before a session. Read all of them on a slow afternoon.
        </p>
      </div>

      {/* Beginner tip */}
      <div className="tip-box fade-up fade-up-delay-1" style={{ marginBottom: '48px', maxWidth: '700px' }}>
        <strong>New to writing?</strong> Start with "Want vs. Need" under Character and "What a scene actually does" under Structure. Those two lessons will change how you read and write everything else.
      </div>

      {/* Lessons */}
      {lessons.map((cat, ci) => (
        <div key={ci} className={`fade-up fade-up-delay-${Math.min(ci + 1, 4)}`} style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '24px', background: 'var(--green)', borderRadius: '2px' }} />
            <h2 style={{ fontSize: '20px', color: 'var(--green)' }}>{cat.category}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {cat.items.map((item, i) => {
              const isWritten = writtenSlugs.includes(item.slug)
              return isWritten ? (
                <Link key={i} href={`/learn/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '20px 22px', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span className="badge" style={{ fontSize: '10px' }}>{cat.category}</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{item.time}</span>
                    </div>
                    <h3 style={{ fontSize: '15px', fontFamily: 'Playfair Display, serif', marginBottom: '8px', lineHeight: '1.4', color: 'var(--green)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', flex: 1 }}>
                      {item.preview}
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--green-light)', marginTop: '14px', fontWeight: '600' }}>Read &rarr;</p>
                  </div>
                </Link>
              ) : (
                <div key={i} className="card" style={{ padding: '20px 22px', height: '100%', display: 'flex', flexDirection: 'column', opacity: 0.55 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="badge" style={{ fontSize: '10px' }}>{cat.category}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontStyle: 'italic' }}>Coming soon</span>
                  </div>
                  <h3 style={{ fontSize: '15px', fontFamily: 'Playfair Display, serif', marginBottom: '8px', lineHeight: '1.4', color: 'var(--green)' }}>
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
      <div style={{ background: 'var(--green)', borderRadius: '14px', padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#fff', fontSize: '22px', marginBottom: '12px' }}>Go deeper</h2>
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
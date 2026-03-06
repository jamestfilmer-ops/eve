'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const lessons = {
  'what-a-scene-does': {
    title: "What a scene actually does",
    category: "Structure",
    time: "3 min",
    body: [
      {
        type: 'p',
        text: "Most beginning writers think a scene's job is to advance the plot. Get the character from A to B. Have the conversation that needs to happen. Reveal the information the audience needs.",
      },
      {
        type: 'p',
        text: "That is the minimum. A scene that only does that is dead weight — technically necessary but dramatically inert.",
      },
      {
        type: 'rule',
        text: "Every scene must do at least two things simultaneously.",
      },
      {
        type: 'p',
        text: "It advances the plot AND reveals character. It raises stakes AND establishes theme. It creates tension AND deepens relationship. If you can only identify one thing a scene is doing, it needs work — or it needs to go.",
      },
      {
        type: 'h3',
        text: "The scene test",
      },
      {
        type: 'p',
        text: "Ask yourself three questions about every scene you write:",
      },
      {
        type: 'list',
        items: [
          "What does my protagonist want in this scene — specifically, right now, not in the larger story?",
          "What stands in the way of them getting it?",
          "What changes by the end of this scene that cannot be unchanged?",
        ],
      },
      {
        type: 'p',
        text: "If your protagonist wants nothing, there is no scene — there is only exposition wearing a costume. If nothing changes, the scene is stalling.",
      },
      {
        type: 'h3',
        text: "Scene vs. sequel",
      },
      {
        type: 'p',
        text: "Dwight Swain identified two units of fiction: the scene and the sequel. A scene ends in disaster — the character fails to get what they want. A sequel is the emotional aftermath — the character reacts, thinks, and makes a new decision.",
      },
      {
        type: 'p',
        text: "Most writers write too many sequels and not enough scenes. If your character is thinking and processing for pages at a time, you have left the story. Get back into action.",
      },
      {
        type: 'tip',
        text: "Go through your last three scenes. Write one sentence for each: what changed? If you cannot answer in one sentence, the scene may not be earning its place.",
      },
    ],
  },
  'want-vs-need': {
    title: "Want vs. Need: the engine of every great character",
    category: "Character",
    time: "4 min",
    body: [
      {
        type: 'p',
        text: "Every compelling protagonist has two things: what they want and what they need. These are almost never the same thing. The gap between them is where your story lives.",
      },
      {
        type: 'rule',
        text: "Want is external. Need is internal. The character can name the want. They rarely know the need.",
      },
      {
        type: 'h3',
        text: "Examples from film",
      },
      {
        type: 'p',
        text: "In Chinatown, Jake Gittes wants to solve the case. He needs to accept that he cannot save everyone. In The Godfather, Michael Corleone wants to stay out of the family business. He needs to confront who he actually is. In Almost Famous, William wants to write the defining rock article of the decade. He needs to learn that honesty is more important than access.",
      },
      {
        type: 'p',
        text: "Notice: in all three cases, the want and need are in direct conflict. Getting the want often requires abandoning the need — or vice versa. That conflict is the engine of the story.",
      },
      {
        type: 'h3',
        text: "Why this matters structurally",
      },
      {
        type: 'p',
        text: "Your protagonist's want drives the plot. Their need drives the theme. At the end of a well-constructed story, the protagonist must choose between the two — and whichever they choose tells the audience what the story is actually about.",
      },
      {
        type: 'p',
        text: "A character who gets both the want and the need is wish fulfillment. A character who gets neither is tragedy. A character who sacrifices the want to satisfy the need — or vice versa — is drama.",
      },
      {
        type: 'tip',
        text: "Write your protagonist's want in one sentence starting with 'He/she/they wants to...' Then write their need starting with 'He/she/they needs to learn that...' If both sentences feel the same, keep digging.",
      },
    ],
  },
  'midpoint': {
    title: "The midpoint is the spine",
    category: "Structure",
    time: "4 min",
    body: [
      {
        type: 'p',
        text: "The midpoint is the most underrated beat in story structure. Beginning writers often treat it as the middle of Act 2 — a vague zone somewhere between the setup and the climax. It is not. It is the hinge on which your entire story turns.",
      },
      {
        type: 'rule',
        text: "Remove your midpoint and your story collapses. It does not slow — it collapses.",
      },
      {
        type: 'h3',
        text: "Two types of midpoint",
      },
      {
        type: 'p',
        text: "Blake Snyder identified two kinds. The false victory: things appear to be going well, the protagonist seems to have what they want — then everything gets worse. The false defeat: things appear to be at their worst — then the protagonist finds a way to push forward. Both work. The key is that something must change irreversibly.",
      },
      {
        type: 'h3',
        text: "What the midpoint does",
      },
      {
        type: 'list',
        items: [
          "It raises the stakes from personal to public — the hero is no longer just fighting for themselves.",
          "It introduces or intensifies the antagonist's presence.",
          "It marks the moment when the protagonist becomes active rather than reactive.",
          "It creates a 'before' and 'after' — the story cannot return to what it was.",
        ],
      },
      {
        type: 'p',
        text: "In Save the Cat terms, the midpoint sits at page 55 of a 110-page screenplay. In a novel, it is the center of your narrative. In a short story, it is the turn.",
      },
      {
        type: 'tip',
        text: "Write this sentence about your story: 'Before the midpoint, my protagonist is ____. After the midpoint, they are ____.' If both blanks feel similar, your midpoint is not working hard enough.",
      },
    ],
  },
  'dialogue-subtext': {
    title: "Nobody talks to have a conversation",
    category: "Dialogue",
    time: "4 min",
    body: [
      {
        type: 'p',
        text: "Real people do not talk to exchange information. They talk to get something. To impress, to wound, to forgive, to delay, to seduce, to escape. Every line of dialogue is a transaction — someone wants something and is using language to try to get it.",
      },
      {
        type: 'rule',
        text: "If no one wants anything in your scene, no one should be talking.",
      },
      {
        type: 'h3',
        text: "The four functions of dialogue",
      },
      {
        type: 'list',
        items: [
          "To reveal character — how someone speaks tells us who they are.",
          "To advance conflict — dialogue is where characters collide.",
          "To deliver information — but always in service of something, never as a data dump.",
          "To establish relationship — how two people talk to each other tells us everything about their history.",
        ],
      },
      {
        type: 'h3',
        text: "What to cut",
      },
      {
        type: 'p',
        text: "Cut pleasantries unless they reveal character. Cut agreement — characters agreeing creates no conflict. Cut on-the-nose dialogue — characters who say exactly what they mean are rarely interesting. And cut exposition disguised as conversation: 'As you know, Bob, we've been partners for fifteen years...' No one talks like that.",
      },
      {
        type: 'p',
        text: "Read your dialogue aloud. If it sounds like a screenplay, it's too polished. If it sounds like a transcript, it's too loose. You are looking for the third thing — the sound of real speech, with its hesitations and evasions, shaped by a writer who knows exactly what the scene is doing.",
      },
      {
        type: 'tip',
        text: "Take your last page of dialogue and ask: what does each character want in this exchange? Write it in the margin. If you cannot identify the want, the line may not belong in the scene.",
      },
    ],
  },
  'theme': {
    title: "Theme isn't a message — it's a question",
    category: "Theme",
    time: "4 min",
    body: [
      {
        type: 'p',
        text: "Beginning writers confuse theme with message. A message is what you want to tell the audience. A theme is what the story asks them to consider. The moment your story has a clear, unambiguous answer — it has become a lecture.",
      },
      {
        type: 'rule',
        text: "Theme is not 'crime doesn't pay.' Theme is 'what does justice cost the people who pursue it?'",
      },
      {
        type: 'p',
        text: "The best stories sit with the question. They do not resolve it. They dramatize it from multiple angles, give the best arguments to multiple characters, and let the audience wrestle with the weight of it.",
      },
      {
        type: 'h3',
        text: "How theme surfaces",
      },
      {
        type: 'p',
        text: "Theme is rarely announced. It surfaces through pattern — through what keeps recurring in your story, through what your protagonist loses or gains, through what the antagonist represents. In Save the Cat, Snyder argued that theme is almost always stated early in the story by a minor character, and the protagonist ignores it. By the end, they finally understand what was being said.",
      },
      {
        type: 'h3',
        text: "Finding your theme",
      },
      {
        type: 'p',
        text: "Ask: what is my story really about, beneath the plot? A story about a detective solving a murder might really be about whether the truth is always worth knowing. A story about a family reunion might really be about whether the past can be forgiven or only managed.",
      },
      {
        type: 'tip',
        text: "Write your theme as a question, not a statement. 'Is loyalty worth its cost?' is a theme. 'Loyalty is worth any cost' is a message. Stories that ask questions last longer than stories that answer them.",
      },
    ],
  },
}

function renderBody(body) {
  return body.map((block, i) => {
    if (block.type === 'p') return (
      <p key={i} style={{ fontSize: '16px', color: 'var(--text-dark)', lineHeight: '1.8', marginBottom: '20px' }}>{block.text}</p>
    )
    if (block.type === 'h3') return (
      <h3 key={i} style={{ fontSize: '18px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', marginTop: '32px', marginBottom: '12px' }}>{block.text}</h3>
    )
    if (block.type === 'rule') return (
      <div key={i} style={{
        margin: '28px 0', padding: '18px 24px',
        borderLeft: '4px solid var(--green)',
        background: 'var(--green-pale)',
        borderRadius: '0 8px 8px 0',
      }}>
        <p style={{ fontSize: '17px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', lineHeight: '1.6', fontStyle: 'italic' }}>{block.text}</p>
      </div>
    )
    if (block.type === 'list') return (
      <ul key={i} style={{ margin: '0 0 20px 0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {block.items.map((item, j) => (
          <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green-light)', flexShrink: 0, marginTop: '9px' }} />
            <span style={{ fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.7' }}>{item}</span>
          </li>
        ))}
      </ul>
    )
    if (block.type === 'tip') return (
      <div key={i} className="tip-box" style={{ marginTop: '32px' }}>
        <strong>Try this:</strong> {block.text}
      </div>
    )
    return null
  })
}

export default function LessonPage() {
  const params = useParams()
  const slug = params?.slug
  const lesson = lessons[slug]

  if (!lesson) return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>Lesson not found</h1>
      <p style={{ color: 'var(--text-soft)', marginBottom: '24px' }}>This lesson hasn't been written yet.</p>
      <Link href="/learn" style={{ textDecoration: 'none' }}>
        <button className="btn-primary">Back to craft library</button>
      </Link>
    </div>
  )

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px' }}>

      <Link href="/learn" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>
        &larr; Craft library
      </Link>

      <div className="fade-up" style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <span className="badge">{lesson.category}</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', display: 'flex', alignItems: 'center' }}>{lesson.time} read</span>
        </div>
        <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: '1.2', marginBottom: '0' }}>{lesson.title}</h1>
      </div>

      <div className="fade-up fade-up-delay-1">
        {renderBody(lesson.body)}
      </div>

      {/* Navigation to other lessons */}
      <div style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '600' }}>Continue reading</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {Object.entries(lessons).filter(([s]) => s !== slug).slice(0, 2).map(([s, l]) => (
            <Link key={s} href={`/learn/${s}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '16px 18px' }}>
                <span className="badge" style={{ marginBottom: '8px', display: 'inline-flex' }}>{l.category}</span>
                <p style={{ fontSize: '14px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', lineHeight: '1.4' }}>{l.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
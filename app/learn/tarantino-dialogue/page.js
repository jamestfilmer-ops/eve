import Link from 'next/link'

export const metadata = {
  title: 'Tarantino on Dialogue: Specificity as Character | Eve',
  description: 'Tarantino dialogue is not realistic speech. It is the illusion of a very particular person talking—and the specificity is what makes it work.',
}

const sections = [
  {
    heading: 'The misunderstanding about Tarantino dialogue',
    body: "Most writers who try to imitate Tarantino focus on the wrong things. They write characters who talk too much, who go on tangents, who swear casually and discuss pop culture. What they produce is noise. Tarantino dialogue sounds the way it does not because of its surface features but because every character in a Tarantino film has a completely specific relationship to language. Jules Winnfield does not talk like Vincent Vega. Mr. Blonde does not talk like Mr. Pink. Hans Landa does not talk like anyone else in cinema. The specificity is the point. Tarantino dialogue is character made audible."
  },
  {
    heading: 'Specificity is the engine',
    body: "The central lesson of Tarantino as a dialogue writer is this: specificity is character. When Jules recites Ezekiel 25:17 before an execution, we learn everything about who he is—his theatricality, his intelligence, his need to ritualize violence. When Vincent and Jules argue about whether a foot massage crosses a line, we learn their relationship, their worldview, and their code of ethics without a single line of exposition. When the Bride lists the names on her kill list, the silence between them tells us more than any backstory could. None of this works because the characters talk a lot. It works because what they say is exactly what only they would say."
  },
  {
    heading: 'Digression as revelation',
    body: "Tarantino's characters frequently go on long digressions that appear to have nothing to do with the plot. Vincent's speech about European McDonald's, Hans Landa's monologue about rats and squirrels, the opening conversation about tipping in Reservoir Dogs. These digressions are not filler. They are the fastest route to character. We learn more about Vincent Vega in three minutes of European fast food monologue than we could from a scene of him executing someone. The digression reveals how a character thinks, what they notice, what they value, and how they see themselves. Use digression to show character. But only if the digression is specific enough to only belong to that character."
  },
  {
    heading: 'Tension through subtext',
    body: "The diner scene that opens Pulp Fiction is a masterclass in subtext. Pumpkin and Honey Bunny are discussing their relationship and their professional future. They are also mid-conversation about armed robbery. Nothing they say is what they mean, and everything they say is exactly what they mean. This is the central technique of Tarantino's best scenes: characters discussing one thing while the real conversation runs beneath. The basement scene in Inglourious Basterds is the most technically impressive example. Landa and Shosanna are having a polite conversation about a strudel and whipped cream. Underneath that, a interrogation; underneath that, a death threat; underneath that, a survivor confronting her family's murderer. Three separate conversations running simultaneously, none of them spoken aloud."
  },
  {
    heading: 'Rhythm and music',
    body: "Tarantino has said that he writes dialogue the way musicians write songs—with attention to rhythm, repetition, and the pause. His characters often repeat words and phrases in patterns that feel almost musical. The repetition is not redundancy; it is emphasis. When Jules says 'What does Marsellus Wallace look like?' and then asks it again, the repetition creates terror through rhythm. The character is not asking for information; they are performing power. Listen to Tarantino dialogue without watching and you will hear it: the way a sentence is built to land on a specific word, the way silence is written into the rhythm, the way two characters can talk over each other and the meaning survives. Write dialogue out loud. If it does not sound right in your mouth, it is not right."
  },
  {
    heading: 'What to steal',
    body: "The technique worth stealing from Tarantino is not his surface vocabulary but his discipline of specificity. Before writing dialogue, ask: what is this character's specific relationship to language? Are they precise or imprecise? Do they perform for their audience or do they talk to think? Are they comfortable with silence or do they fill it? Do they lie fluently or poorly? The answers to these questions determine how a character speaks before you write a single line. Then, in the scene itself, ask: is this line specific enough that only this character could say it? If another character in your story could speak the line without it feeling wrong, the line is not doing its job."
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>Dialogue</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>7 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            Tarantino on Dialogue: Specificity as Character
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            Tarantino dialogue sounds the way it does not because of surface features but because every character has a completely specific relationship to language. That specificity is the whole lesson.
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
          <strong>Try this:</strong> Take two characters from your current project. Write the same scene—a disagreement about something small—twice, once from each character as the point-of-view speaker. The way they each frame the same argument should be completely different. If the speeches feel interchangeable, you do not yet know these characters well enough.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid var(--border)', marginTop: '16px' }}>
          <Link href="/learn/color-psychology" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Color psychology</p>
            </div>
          </Link>
          <Link href="/learn/sopranos-drama" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Sopranos and the pause</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

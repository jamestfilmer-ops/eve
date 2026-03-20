import Link from 'next/link'

export const metadata = {
  title: 'The Sopranos and the Pause: What Not to Rush | Eve',
  description: 'The Sopranos taught television that silence, hesitation, and the unspoken carry more dramatic weight than anything said aloud.',
}

const sections = [
  {
    heading: 'Television that learned to be still',
    body: "The Sopranos arrived at a moment when television drama was built on momentum. Plot moved forward. Characters explained themselves. Conflict resolved. David Chase did something different: he made a show comfortable with stillness. Episodes would pause on a character's face for seconds longer than any network drama allowed. Scenes would end without resolution—sometimes without even a clear dramatic point. The show trusted its audience to sit with discomfort rather than resolving it. The result was television that felt, for the first time, genuinely novelistic—interested in psychology over plot, in what people cannot say over what they do say."
  },
  {
    heading: 'The function of the pause',
    body: "The pause in The Sopranos is not empty space. It is the place where the real scene lives. When Tony Soprano falls silent after his therapist says something true, the silence tells us everything about a man who has spent his life refusing self-knowledge. When Carmela hesitates before answering a direct question about her marriage, the hesitation is the answer. Chase discovered what the best novelists have always known: the moment a character stops speaking is often the moment they start revealing. In drama, we are trained to fill silence with action or dialogue. The Sopranos argues that what a character cannot bring themselves to say is usually more interesting than what they do."
  },
  {
    heading: 'Restraint as technique',
    body: "One of the defining technical decisions of The Sopranos is what Chase chose not to show. Violence in the show is sudden, unglamorous, and quickly over. The camera does not linger on it. The emotional consequence of violence—the silence after, the awkward resumption of ordinary life, the face of the person who has to live with what just happened—gets all the screen time. This is dramatic restraint in practice. The thing the audience expects to be the scene is handled quickly. The aftermath, which the audience does not expect to care about, becomes the actual scene. The technique is applicable everywhere: identify what your audience expects to be the dramatic moment, handle it quickly, and spend your time on the unexpected thing that matters more."
  },
  {
    heading: 'The unsaid as subtext engine',
    body: "Chase has spoken about his aversion to what he calls 'on the nose' writing—scenes where characters say exactly what they mean and feel. Almost no scene in The Sopranos is on the nose. Tony and his mother discuss ordinary family matters while conducting a negotiation about power and resentment that neither of them can name directly. Tony and Dr. Melfi circle the truth of his psychology for years without ever quite arriving at it—and the circling is the drama. This is the Sopranos model for subtext: build scenes between characters who have something they cannot say, and let the gap between the surface conversation and the real one generate the tension. The audience feels the pressure of the unspoken even when they cannot articulate it."
  },
  {
    heading: 'The therapy scenes as structural device',
    body: "The sessions between Tony and Dr. Melfi are among the most technically interesting scenes in American television. They function as a structural device that allows Chase to access Tony's psychology directly without the artificiality of voiceover or soliloquy. But more importantly, they demonstrate the value of the resistant character. Tony is almost always unwilling to understand himself. He deflects, changes the subject, tells stories instead of examining them, gets angry, leaves. His resistance is not a flaw in the drama—it is the drama. A character's refusal to change or see is as interesting as their eventual change or vision. The Sopranos built six seasons on a man who mostly refused to learn anything. The tragedy is that the refusal itself taught us everything."
  },
  {
    heading: 'What to take into your own work',
    body: "The lesson of The Sopranos for writers is this: slow down at the wrong moments and the right ones will find their weight. Identify the scene your reader or viewer is waiting for, and resist arriving at it too quickly or too completely. Let the moment before the moment do work. Let the moment after the moment do work. Trust that what your characters cannot bring themselves to say is more dramatically interesting than what they can. And when you have written a scene that feels finished, look at where the characters are saying exactly what they mean. That is usually where the real scene is hiding, underneath the words."
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#EFF6E7', color: '#2D5016' }}>Craft</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>8 min</span>
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #1e3a0c 0%, var(--green) 55%, #3a6b1c 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
            The Sopranos and the Pause
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: 0 }}>
            What not to rush. The Sopranos built six seasons on a man who mostly refused to learn anything. The restraint was the argument.
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
          <strong>Try this:</strong> Find a scene you have written where a character says exactly what they feel. Rewrite it so they say something else entirely—something adjacent, something deflecting, something that allows them to avoid the real thing. The gap between what they say and what they mean is now the scene.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid var(--border)', marginTop: '16px' }}>
          <Link href="/learn/tarantino-dialogue" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Tarantino on dialogue</p>
            </div>
          </Link>
          <Link href="/learn/subtext" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Subtext</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

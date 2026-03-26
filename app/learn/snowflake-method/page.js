import Link from 'next/link'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: "The Snowflake Method: Novel Outlining from Core Outward | Eve",
  description: "Randy Ingermanson's Snowflake Method expands a one-sentence summary into a full novel blueprint across 10 steps. Best for plotters writing complex genre fiction who need structure before drafting.",
}

export default function Lesson() {
  const steps = [
    { num: 1, time: '1 hour', label: 'One-sentence summary', desc: 'Write the story in one sentence — under 15 words. This is your premise, your compass, and your pitch. It must contain: a protagonist, a goal, and what is at stake. Everything else grows from this.' },
    { num: 2, time: '1 hour', label: 'One-paragraph summary', desc: 'Expand to one paragraph with roughly five sentences: the setup, three major disasters (acts 1-2-3 turning points), and the ending. This is the spine of the novel. Each disaster escalates from the last.' },
    { num: 3, time: '1 hour', label: 'Character summaries', desc: 'Write a one-page summary for each major character: name, motivation (what they want), goal (concrete desire), conflict (what prevents the goal), and epiphany (what they learn). Include how the story ends for each.' },
    { num: 4, time: '1 hour', label: 'Expand the summary', desc: 'Expand the one-paragraph summary to a full page. Each of the five original sentences becomes a full paragraph. This gives you a four- or five-page synopsis of the novel that you can actually pitch.' },
    { num: 5, time: '1 day', label: 'Expand character sketches', desc: 'Write a full one-page character sketch for each major character. Include backstory, how the story looks from their point of view, and how they change. Let characters object to your plot — their resistance reveals the real story.' },
    { num: 6, time: '1 week', label: 'Scene list', desc: 'Expand the four-page synopsis into a list of scenes. Each scene gets one line: which character has the point of view, what happens, and what changes. This is your first full structural pass at the novel.' },
    { num: 7, time: '1 week', label: 'Expand scene list to narratives', desc: 'Take each scene in the list and expand it to a narrative description — a paragraph or more that captures what happens and why it matters. You are not writing prose yet. You are thinking through each scene in detail.' },
    { num: 8, time: 'Varies', label: 'Character charts', desc: 'Return to your characters. Now that you know the full story, write complete character charts — everything about them that affects the novel. This step is optional for some writers and essential for others.' },
    { num: 9, time: 'Varies', label: 'Scene list with details', desc: 'Expand the scene list further — add notes, dialogue fragments, emotional beats, questions you need to answer. Some writers make this very detailed; others keep it lean. The goal is to know what each scene must accomplish.' },
    { num: 10, time: 'Months', label: 'Write the first draft', desc: 'Draft the novel. Because you have done all the outlining work, you can focus on prose — on the sentences themselves, on texture, on dialogue, on the moment-to-moment experience of the scenes. The outline is your safety net.' },
  ]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: '#F0F2FF', color: '#3D52C4' }}>Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)' }}>9 min</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>Intermediate</span>
                      <LessonProgress slug="snowflake-method" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            The Snowflake Method
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: 0 }}>
            A snowflake starts as a simple geometric shape and adds complexity outward in layers. Randy Ingermanson&apos;s method does the same for novels: begin with one sentence, expand to a paragraph, then to pages, then to a full blueprint — before writing a single scene.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>Who this is for</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            The Snowflake Method is for plotters — writers who need to know the shape of the story before they can write it comfortably. If you have started multiple novels and abandoned them in the middle because you lost the thread, this method is worth trying. It is also particularly well-suited to complex genre fiction: fantasy, science fiction, thriller, mystery — any story with multiple plot lines, a large cast, or a world that needs to be internally consistent.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            Pantsers — writers who discover the story by writing it — will find this method constraining. That is fine. No framework is right for everyone. The Snowflake Method&apos;s value is precision: when you reach Step 10, you know exactly what you are writing and why every scene exists.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '18px 22px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px', fontWeight: '600' }}>The core logic</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-dark)', margin: 0, fontWeight: '500' }}>
            Each step builds on the last. Nothing is wasted — the one-sentence summary from Step 1 is still the heart of the novel in Step 10. You are adding detail, not starting over.
          </p>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '20px' }}>The 10 steps</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '0', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: '56px', flexShrink: 0, background: i < 3 ? '#EFF6E7' : i < 6 ? '#FFF7ED' : i < 9 ? '#F0F2FF' : '#EFF6E7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12px 4px', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: '700', color: 'var(--green)', lineHeight: '1' }}>{s.num}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--text-soft)', textAlign: 'center', lineHeight: '1.2' }}>{s.time}</span>
                </div>
                <div style={{ padding: '14px 18px', flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '5px' }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>The step most writers skip — and why they shouldn&apos;t</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: '0 0 14px' }}>
            Step 5 — expanding character sketches after you know the full plot — is where the Snowflake Method reveals something most outlining processes miss. Your characters will object to your plot. They will have reasons not to do what you need them to do. They will want different things than you assigned them in Step 3.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.85', color: 'var(--text-dark)', margin: 0 }}>
            This is not a problem. This is the process working. When a character resists your plot, the resistance usually reveals a better version of the plot — one where the character&apos;s actions feel inevitable rather than convenient. Ingermanson calls this &ldquo;character-driven plotting&rdquo; — letting character psychology reshape the structure after you&apos;ve established it.
          </p>
        </div>

        <div className="reveal" style={{ background: 'var(--green)', borderRadius: '12px', padding: '24px 28px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>Start here</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', lineHeight: '1.75', color: '#fff', margin: 0, fontWeight: '500' }}>
            Do Step 1 right now. Write your novel in one sentence — under 15 words. Include a protagonist, a goal, and what is at stake. If you cannot do it in 15 words, you do not yet know what your novel is about. That is the most useful thing the Snowflake Method can tell you.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/seven-point-story" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-mid)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </Link>
          <Link href="/learn/hauge-six-stage" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--green)', textDecoration: 'none' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Subtext: what characters mean but never say — Eve',
}

export default function LessonSubtext() {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 20px' }}>
      <Link href="/learn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-soft)', fontSize: '13px', marginBottom: '32px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All lessons
      </Link>

      <div className="fade-up">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge badge-green">Dialogue</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>6 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          Subtext: what characters mean but never say
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The most powerful line in a scene is usually the one that isn&apos;t there. Subtext is the gap between what a character says and what they mean — and audiences read that gap more closely than anything on the surface.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Why characters don&apos;t say what they mean</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Real people almost never say exactly what they feel. They deflect, hedge, pivot, overexplain, go quiet. They talk about the weather when they mean they&apos;re lonely. They say &ldquo;I&apos;m fine&rdquo; when they mean &ldquo;I need you to ask again.&rdquo; They say &ldquo;you should go&rdquo; when they mean &ldquo;please stay.&rdquo;
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Characters behave the same way — for the same reasons. Pride. Fear. Shame. Social convention. The habit of protecting yourself. When you write characters who say exactly what they feel in every scene, they stop feeling like people and start feeling like plot delivery systems.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The rule:</strong> A character who can say what they want directly doesn&apos;t need a scene. The scene exists because they can&apos;t — or won&apos;t.
        </div>

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The iceberg model</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Think of every conversation as an iceberg. The dialogue is the tenth above water. The subtext — what the character actually wants, fears, or is hiding — is the ninety percent below. The audience doesn&apos;t see the subtext directly. They feel it pressing up against the surface.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          In <em>Eternal Sunshine of the Spotless Mind</em>, when Joel and Clementine first meet on the train, the entire conversation is about mundane things — her dyed hair, his shyness, the frozen lake. But underneath: two lonely people reaching toward each other, terrified of being rejected. The surface dialogue is almost awkward. The subtext is devastating.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          None of that emotion is stated. It&apos;s felt through what they almost say, what they pull back from, what they circle around.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Three ways subtext operates</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>Displacement.</strong> The character talks about one thing while meaning another. In <em>Good Will Hunting</em>, the final therapy session is nominally about Will&apos;s childhood files. But what&apos;s really happening is Robin Williams telling Will he was not responsible for what was done to him. &ldquo;It&apos;s not your fault&rdquo; is repeated. The power comes from Will deflecting each time — until he can&apos;t anymore.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '12px' }}>
          <strong>Contradiction.</strong> The character says one thing but does another. A character who insists &ldquo;I don&apos;t care about her&rdquo; while finding ways to mention her every few minutes. The contradiction is the subtext.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          <strong>The unsaid response.</strong> A character is asked a direct question and answers something else entirely — or goes quiet. The evasion itself tells us everything.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The rewrite test:</strong> Take any scene where a character explains how they feel. Cross out the explanation. What&apos;s left? If the scene still works — or works better — the explanation was killing the subtext.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>What kills subtext</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The fastest way to destroy subtext is to explain it. If a character says &ldquo;I&apos;m angry because you never showed up for me,&rdquo; you have text, not subtext. The feeling is named. The audience is told what to think. The scene is over before it starts.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The second killer is the other character who perfectly understands. Real conversations are full of misreadings and two people talking past each other. When Character A expresses a buried need and Character B responds to it perfectly, you&apos;ve lost the texture of real human communication — and the tension that lives inside miscommunication.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          Let your characters misread each other. Let them answer the wrong question. That gap — between what was said and what was heard — is where subtext breathes.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Write a two-person scene with these constraints:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>One character wants something from the other and cannot ask for it directly.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>The scene must be about something else entirely — a mundane task, a practical problem, a change of plans.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>The real want must never be named. But it must be felt by the end of the scene.</li>
          </ol>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginTop: '12px' }}>
            If a reader can identify what the character actually wanted without you telling them, the subtext is working.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/dialogue-subtext" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Dialogue &amp; subtext</p>
            </div>
          </Link>
          <Link href="/learn/arguments" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Next</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>How to write an argument</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

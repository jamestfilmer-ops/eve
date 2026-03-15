import Link from 'next/link'

export const metadata = {
  title: 'The Sopranos method: how to write slow drama  -- Eve',
}

export default function LessonSopranosDrama() {
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
          <span className="badge badge-green">Character</span>
          <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>8 min</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '1.2', marginBottom: '28px' }}>
          The Sopranos method: how to write slow drama
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The Sopranos changed what television drama could be. But the techniques David Chase perfected  -- therapy as confession, consequences that arrive slowly, the collision of domesticity and violence  -- are not limited to prestige TV. They are tools for any writer trying to build sustained, psychologically honest drama.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Therapy as confession booth</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Chase&apos;s central structural innovation was using Tony&apos;s therapy sessions as a recurring scene type that served multiple functions simultaneously. On the surface: Tony talks to Dr. Melfi. Underneath: the audience receives psychological exposition that would be impossible to dramatize any other way. And underneath that: Tony lies, deflects, and reveals himself precisely through what he refuses to say.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The therapy sessions are confessionals in the Catholic sense  -- spaces where truth is theoretically possible, but where the confessant cannot quite bring themselves to say what they know. Tony almost reaches self-knowledge in these scenes. He circles it, approaches it, and then retreats. That near-miss is what makes them dramatically alive: the audience sees the truth Tony is avoiding, and the gap between what Tony says and what Tony means is the space where the show lives.
        </p>

        <div className="tip-box" style={{ marginBottom: '28px' }}>
          <strong>The confession principle:</strong> Any scene where a character is supposed to be honest but cannot quite manage it is more dramatically interesting than a scene where they tell the truth directly. Build scenes around the gap between what characters could say and what they actually say.
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Slow consequences</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Most drama works on an accelerated timeline: cause, then effect, usually within the same episode or sequence. The Sopranos works on the timeline of real psychological life, where consequences arrive months or years after their causes  -- sometimes so late that the character has forgotten what they caused.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          This is not just a formal choice  -- it is a moral one. The show argues that the damage people do is real and permanent, even when the doer has moved on. Tony orders something terrible and spends three episodes barely thinking about it, and then  -- in a scene about something else entirely  -- the consequence arrives, wearing a different face than expected.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The structural challenge this creates for the writer is significant: you must plant consequences long before they pay off, in scenes that do not signal their own importance. A conversation in episode four becomes the fulcrum of episode nine. The audience does not know they are watching the cause when it happens  -- only in retrospect does it acquire its weight.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Domesticity as counterweight to violence</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Sopranos spends enormous amounts of screen time on the ordinary textures of family life  -- breakfast, school runs, arguments about contractors, birthday parties. This is not padding. It is the engine of the show&apos;s emotional effect.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The violence in The Sopranos is shocking not because it is graphic  -- though it sometimes is  -- but because of its juxtaposition with the domestic. When Tony comes home for dinner after committing something terrible, the horror is not in the terrible thing itself but in the contrast: the same hands that did that are now helping Meadow with her homework. The domesticity makes the violence real in a way that pure action drama never can.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          Chase borrowed this technique directly from life: most people who do terrible things have ordinary lives around them. The ordinariness is not a mask for the violence  -- it coexists with it, which is far more disturbing. To write this well, you must resist the urge to use the ordinary scenes as relief. Let them carry the weight of everything the audience knows about what surrounds them.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />

        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>The show that refuses to resolve</h2>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          The Sopranos consistently refuses what audiences expect from drama: catharsis, transformation, justice. Tony does not change. The consequences never quite catch him. The therapy does not work. This is not nihilism  -- it is realism about the nature of deep character, and about how rarely dramatic internal transformation actually occurs in human beings.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '20px' }}>
          For writers, this is permission to write characters who do not learn. Not every story needs a character arc in the traditional sense. Some of the most powerful stories are about characters whose inability to change is the point  -- where the tragedy is not what happens to them, but the gap between who they could be and who they insist on remaining.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '28px' }}>
          The structural principle: if your character is going to fail to change, build the story around moments where change was possible and did not happen. The near-miss is more painful than the obstacle. Show the door Tony could walk through, show his hand on the knob, and then show him turning away. That is where the drama lives.
        </p>

        <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '22px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Exercise</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '12px' }}>
            Write two scenes back-to-back that use the domesticity-violence contrast:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Scene one: your protagonist does something they cannot take back  -- a betrayal, a lie, a harm. Write it plainly, without commentary.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>Scene two, set immediately after: the same protagonist in a completely ordinary domestic context  -- a meal, a phone call with family, feeding a pet. Do not reference scene one.</li>
            <li style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65' }}>The reader&apos;s discomfort should come entirely from juxtaposition. If you feel the urge to add a guilt beat or a meaningful look, cut it. Trust the contrast.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <Link href="/learn/tarantino-dialogue" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Previous</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>The Tarantino method</p>
            </div>
          </Link>
          <Link href="/learn" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', textAlign: 'right' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Back to</p>
              <p style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: '500' }}>Craft Library</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

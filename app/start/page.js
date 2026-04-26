'use client'
export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'
import { useToast } from '../components/Toast'
import { FRAMEWORK_GUIDED_PROMPTS, UNIVERSAL_PREMISE_QUESTIONS } from '../../lib/storyStarterPrompts'

// ─── Framework selector data ─────────────────────────────────────────────────
const FRAMEWORKS = [
  { id: 'save-the-cat',       label: 'Save the Cat',        acts: '15 beats',   best: 'Screenplays, commercial' },
  { id: 'heros-journey',      label: "Hero's Journey",       acts: '12 stages',  best: 'Epic, transformation' },
  { id: 'story-circle',       label: 'Story Circle',         acts: '8 steps',    best: 'TV, short stories' },
  { id: 'sequence-approach',  label: 'Sequence Approach',    acts: '8 sequences', best: 'Complex plots' },
  { id: 'seven-point-story',  label: 'Seven-Point',          acts: '7 beats',    best: 'Genre fiction, novels' },
  { id: 'fichtean',           label: 'Fichtean Curve',       acts: 'Rising crises', best: 'Thrillers, shorts' },
  { id: 'kishotenketsu',      label: 'Kishōtenketsu',        acts: '4 acts',     best: 'Literary, no-conflict' },
  { id: 'freytags-pyramid',   label: "Freytag's Pyramid",    acts: '5 stages',   best: 'Classical drama' },
  { id: 'snowflake-method',   label: 'Snowflake Method',     acts: '6 steps',    best: 'Novelists' },
  { id: 'hauge-six-stage',    label: "Hauge's Six-Stage",    acts: '6 stages',   best: 'Character arcs' },
  { id: 'heroines-journey',   label: "Heroine's Journey",    acts: '10 stages',  best: 'Feminine arc' },
  { id: 'story-spine',        label: 'Story Spine',          acts: '7 beats',    best: 'Improv, fast drafts' },
  { id: 'five-act',           label: 'Five-Act',             acts: '5 acts',     best: 'Stage drama' },
  { id: 'romancing-the-beat', label: 'Romancing the Beat',   acts: '13 beats',   best: 'Romance' },
  { id: 'virgins-promise',    label: "Virgin's Promise",     acts: '13 stages',  best: 'Transformation arc' },
  { id: 'mice-quotient',      label: 'MICE Quotient',        acts: 'Nested types', best: 'Complex novels' },
  { id: 'w-plot',             label: 'W-Plot',               acts: 'Dual track', best: 'Emotional + plot' },
  { id: 'harmon-pixar-hybrid',label: 'Harmon / Pixar Hybrid',acts: '10 aligned', best: 'Animation, hybrid' },
  { id: 'freeform',           label: 'Freeform',             acts: 'No template', best: 'Literary, experimental' },
]

const STEP_LABELS = ['Seed', 'Framework', 'Premise', 'Beats', 'Launch']
const BEAT_COUNT = 5 // show 5 key beats in the wizard

function pickKeyBeats(beats) {
  if (!beats || beats.length === 0) return []
  if (beats.length <= BEAT_COUNT) return beats
  // Pick beats distributed across the arc
  const indices = [
    0,
    Math.floor(beats.length * 0.25),
    Math.floor(beats.length * 0.5),
    Math.floor(beats.length * 0.75),
    beats.length - 1,
  ]
  return indices.map(i => beats[i])
}

// ─── Step progress bar ───────────────────────────────────────────────────────
function StepBar({ step }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '40px' }}>
      {STEP_LABELS.map((label, i) => {
        const done = i < step
        const active = i === step
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < STEP_LABELS.length - 1 ? 1 : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: done ? 'var(--green)' : active ? 'var(--green)' : 'var(--off-white)',
                border: `2px solid ${done || active ? 'var(--green)' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: active ? '0 0 0 4px var(--green-pale)' : 'none',
                transition: 'all 0.2s ease',
              }}>
                {done
                  ? <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  : <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700', color: active ? '#fff' : 'var(--text-soft)' }}>{i + 1}</span>
                }
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.06em', textTransform: 'uppercase', color: active ? 'var(--green)' : done ? 'var(--text-mid)' : 'var(--text-soft)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div style={{ flex: 1, height: '2px', background: done ? 'var(--green)' : 'var(--border)', margin: '0 4px', marginBottom: '22px', transition: 'background 0.3s ease' }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Textarea with hint ──────────────────────────────────────────────────────
function GuidedTextarea({ prompt, hint, placeholder, value, onChange, minHeight = 90 }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.4' }}>
        {prompt}
      </label>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', lineHeight: '1.65', marginBottom: '10px' }}>
        {hint}
      </p>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%', minHeight: `${minHeight}px`, padding: '12px 14px',
          fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.7',
          border: '1.5px solid var(--border)', borderRadius: '8px',
          background: '#fff', color: 'var(--text-dark)', resize: 'vertical',
          outline: 'none', boxSizing: 'border-box',
          transition: 'border-color 0.15s ease',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--green)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function StoryStarter() {
  const router = useRouter()
  const toast = useToast()

  const [step, setStep] = useState(0)
  const [user, setUser] = useState(null)
  const [saving, setSaving] = useState(false)

  // Step 0 — seed
  const [title, setTitle] = useState('')
  const [oneLiner, setOneLiner] = useState('')

  // Step 1 — framework
  const [framework, setFramework] = useState('')

  // Step 2 — premise
  const [premiseAnswers, setPremiseAnswers] = useState({})

  // Step 3 — beats
  const [beatAnswers, setBeatAnswers] = useState({})

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null))
  }, [])

  const fw = FRAMEWORK_GUIDED_PROMPTS[framework] || null
  const keyBeats = fw ? pickKeyBeats(fw.beats) : []

  // ── Nav helpers ─────────────────────────────────────────────────────────────
  function canAdvance() {
    if (step === 0) return title.trim().length > 2 && oneLiner.trim().length > 10
    if (step === 1) return framework !== ''
    if (step === 2) return true // premise is optional depth
    if (step === 3) return true // beat answers optional depth
    return false
  }

  function next() { if (canAdvance()) setStep(s => s + 1) }
  function back() { setStep(s => Math.max(0, s - 1)) }

  // ── Create project ───────────────────────────────────────────────────────────
  async function createProject() {
    if (!user) { router.push('/auth?redirect=/start'); return }
    setSaving(true)

    // Build logline: oneLiner + premise answers
    const premiseNote = Object.entries(premiseAnswers)
      .filter(([, v]) => v.trim())
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')

    const logline = oneLiner.trim()

    // 1. Insert project
    let project
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert({
          user_id:   user.id,
          title:     title.trim(),
          type:      'screenplay',
          logline:   logline || null,
          framework: framework,
          status:    'seed',
        })
        .select()
        .single()
      if (error) throw error
      project = data
    } catch (e) {
      toast.error('Could not create project.')
      setSaving(false)
      return
    }

    // 2. Insert beat stubs into scenes — all beats, not just the 5 shown
    const allBeats = fw ? fw.beats : []
    if (allBeats.length > 0) {
      const scenes = allBeats.map((b, i) => {
        const wizardAnswer = beatAnswers[b.beat]
        return {
          project_id:  project.id,
          title:       b.beat,
          act_number:  b.act,
          beat_label:  b.beat,
          notes:       wizardAnswer
            ? `${wizardAnswer}\n\n—\n${b.hint}`
            : b.hint,
          order_index: i,
          status:      wizardAnswer ? 'in_progress' : 'draft',
        }
      })
      await supabase.from('scenes').insert(scenes)
    }

    // 3. Save premise notes as a session_beat
    if (premiseNote) {
      await supabase.from('session_beats').insert({
        project_id:  project.id,
        beat_label:  'Premise Notes',
        content:     `One-liner: ${oneLiner}\n\n${premiseNote}`,
      })
    }

    toast.success('Story started. Let\'s build it.')
    router.push(`/projects/${project.id}`)
  }

  // ─── Step renders ────────────────────────────────────────────────────────────

  // Step 0: Seed
  const renderSeed = () => (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)' }}>Step 1 of 5</span>
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>
        What&apos;s the seed?
      </h2>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '520px' }}>
        Every story starts somewhere. Give it a working title and a one-liner — rough is fine. You can refine everything later.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Working title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="e.g. The Long Way Home"
          style={{
            width: '100%', padding: '12px 14px', fontFamily: 'var(--font-ui)', fontSize: '15px',
            border: '1.5px solid var(--border)', borderRadius: '8px', background: '#fff',
            color: 'var(--text-dark)', outline: 'none', boxSizing: 'border-box',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--green)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      <GuidedTextarea
        prompt="Your one-liner"
        hint="Who is your protagonist, what do they want, and what is the central obstacle? One sentence. No character names required."
        placeholder="A burned-out detective discovers her missing sister is running the cartel she's investigating."
        value={oneLiner}
        onChange={setOneLiner}
        minHeight={80}
      />
    </div>
  )

  // Step 1: Framework
  const renderFramework = () => (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)' }}>Step 2 of 5</span>
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>
        Pick a framework
      </h2>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '28px' }}>
        Your framework shapes how Eve guides you through the beats. You can switch it later from the project settings.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {FRAMEWORKS.map(f => (
          <button
            key={f.id}
            onClick={() => setFramework(f.id)}
            style={{
              padding: '14px 16px', borderRadius: '10px', textAlign: 'left', cursor: 'pointer',
              border: framework === f.id ? '2px solid var(--green)' : '1.5px solid var(--border)',
              background: framework === f.id ? 'var(--green-pale)' : '#fff',
              transition: 'all 0.15s ease',
              boxShadow: framework === f.id ? '0 0 0 3px var(--green-pale)' : 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: framework === f.id ? 'var(--green)' : 'var(--text-dark)', marginBottom: '3px' }}>{f.label}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', marginBottom: '4px' }}>{f.acts}</div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--text-soft)' }}>{f.best}</div>
          </button>
        ))}
      </div>

      {framework && (
        <div style={{ marginTop: '20px', padding: '14px 16px', background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--green)" opacity="0.15"/><path d="M5 8l2 2 4-4" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--green)', fontWeight: '600' }}>
            {FRAMEWORKS.find(f => f.id === framework)?.label} selected
          </span>
        </div>
      )}
    </div>
  )

  // Step 2: Premise questions
  const renderPremise = () => {
    const premiseQs = fw?.premise || UNIVERSAL_PREMISE_QUESTIONS
    return (
      <div>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)' }}>Step 3 of 5</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>
          Dig into the premise
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '32px' }}>
          These questions are specific to <strong>{fw?.displayName || 'your framework'}</strong>. Answer as much or as little as you know right now.
        </p>

        {premiseQs.map(q => (
          <GuidedTextarea
            key={q.id}
            prompt={q.label}
            hint={q.hint}
            placeholder={q.placeholder}
            value={premiseAnswers[q.id] || ''}
            onChange={v => setPremiseAnswers(prev => ({ ...prev, [q.id]: v }))}
            minHeight={75}
          />
        ))}
      </div>
    )
  }

  // Step 3: Key beats
  const renderBeats = () => (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)' }}>Step 4 of 5</span>
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>
        Map the key beats
      </h2>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '8px' }}>
        Five structural beats distributed across your arc. Write a sentence or a paragraph — whatever you know. You&apos;ll develop every beat fully in your project.
      </p>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', marginBottom: '32px' }}>
        All {fw?.beats?.length || 0} {fw?.displayName} beats will be created in your project. These five are just your starting map.
      </p>

      {keyBeats.map((b, i) => (
        <div key={b.beat} style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700', color: '#fff' }}>{i + 1}</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>
              Act {b.act} · {b.beat}
            </span>
          </div>
          <GuidedTextarea
            prompt={b.prompt}
            hint={b.hint}
            placeholder={b.placeholder}
            value={beatAnswers[b.beat] || ''}
            onChange={v => setBeatAnswers(prev => ({ ...prev, [b.beat]: v }))}
            minHeight={80}
          />
        </div>
      ))}
    </div>
  )

  // Step 4: Launch
  const renderLaunch = () => {
    const answeredBeats = keyBeats.filter(b => (beatAnswers[b.beat] || '').trim()).length
    const answeredPremise = Object.values(premiseAnswers).filter(v => v.trim()).length
    const totalBeats = fw?.beats?.length || 0

    return (
      <div>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)' }}>Step 5 of 5</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>
          Ready to build
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '32px' }}>
          Here&apos;s what Eve will create in your project. Review and launch when you&apos;re ready.
        </p>

        {/* Summary card */}
        <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '28px', boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'var(--off-white)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>Your story</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>{title}</p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.6', fontStyle: 'italic' }}>{oneLiner}</p>
          </div>
          <div style={{ padding: '16px 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { label: 'Framework', value: fw?.displayName || framework },
              { label: 'Beats pre-filled', value: `${totalBeats} scenes` },
              { label: 'Beats you mapped', value: `${answeredBeats} of 5` },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '4px' }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What happens */}
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '10px', padding: '16px 20px', marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--green)', marginBottom: '8px' }}>What Eve will create</p>
          {[
            `A new project titled "${title}"`,
            `${totalBeats} scene stubs — one per ${fw?.displayName} beat — pre-filled with guidance`,
            answeredBeats > 0 ? `Your ${answeredBeats} key beat answers saved directly into those scenes` : null,
            answeredPremise > 0 ? 'Your premise notes saved as a reference beat' : null,
            'Beat Tracker, Characters, Plot Holes, Timeline, and Themes Map — all ready',
          ].filter(Boolean).map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M2.5 7l3 3 6-6" stroke="var(--green)" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.5' }}>{item}</span>
            </div>
          ))}
        </div>

        {!user && (
          <div style={{ background: '#FFF8ED', border: '1px solid #F6C87A', borderRadius: '10px', padding: '14px 18px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: '#92400E', lineHeight: '1.6' }}>
              You&apos;ll need to sign in to save your project. Your answers are held in memory — signing in won&apos;t clear them.
            </p>
          </div>
        )}

        <button
          onClick={createProject}
          disabled={saving}
          style={{
            width: '100%', padding: '16px', borderRadius: '10px', border: 'none',
            background: saving ? 'var(--text-soft)' : 'linear-gradient(135deg, #3a6b1e 0%, var(--green) 100%)',
            color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '16px',
            cursor: saving ? 'not-allowed' : 'pointer',
            boxShadow: saving ? 'none' : '0 4px 16px rgba(74,138,36,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
            transition: 'all 0.2s ease',
          }}
        >
          {saving ? 'Creating project…' : 'Create my story →'}
        </button>
      </div>
    )
  }

  const stepContent = [renderSeed, renderFramework, renderPremise, renderBeats, renderLaunch]

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/dashboard" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Dashboard
        </Link>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)' }}>Story Starter</span>
        <div style={{ width: '80px' }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '44px 24px 80px' }}>
        <StepBar step={step} />
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
          {stepContent[step]()}

          {/* Nav buttons */}
          {step < 4 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              <button
                onClick={back}
                disabled={step === 0}
                style={{ padding: '10px 20px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: step === 0 ? 'var(--text-soft)' : 'var(--text-dark)', cursor: step === 0 ? 'not-allowed' : 'pointer' }}
              >
                ← Back
              </button>
              <button
                onClick={next}
                disabled={!canAdvance()}
                style={{
                  padding: '10px 28px', borderRadius: '8px', border: 'none',
                  background: canAdvance() ? 'var(--green)' : 'var(--border)',
                  color: canAdvance() ? '#fff' : 'var(--text-soft)',
                  fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700',
                  cursor: canAdvance() ? 'pointer' : 'not-allowed',
                  boxShadow: canAdvance() ? '0 2px 8px rgba(74,138,36,0.25)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                Continue →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

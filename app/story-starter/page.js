'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'
import { useToast } from '../components/Toast'
import { FRAMEWORK_GUIDED_PROMPTS, UNIVERSAL_PREMISE_QUESTIONS } from '../../lib/storyStarterPrompts'

// ─── Which beats to feature per framework (5 spine beats) ───────────────────
const KEY_BEAT_INDICES = {
  'save-the-cat':        [0, 3, 5, 8, 10],   // Opening Image, Catalyst, B2Two, Midpoint, AIL
  'heros-journey':       [0, 1, 7, 8, 11],   // Ordinary World, Call, Ordeal, Reward, Return
  'story-circle':        [0, 1, 4, 5, 7],    // You, Need, Find, Take, Change
  'sequence-approach':   [0, 1, 3, 5, 7],    // Seq1, Seq2, Seq4, Seq6, Seq8
  'fichtean':            [0, 1, 2, 4, 5],    // Opening, C1, C2, Climax, Resolution
  'kishotenketsu':       [0, 1, 2, 3],       // All 4
  'seven-point-story':   [0, 1, 3, 5, 6],    // Hook, PT1, Midpoint, PT2, Resolution
  'freytags-pyramid':    [0, 1, 2, 3, 4],    // All 5
  'snowflake-method':    [0, 1, 2, 3, 4],    // Steps 1-5
  'hauge-six-stage':     [0, 1, 2, 4, 5],    // S1, S2, S3, S5, S6
  'heroines-journey':    [0, 1, 5, 7, 9],    // Separation, Masculine ID, Descent, Healing, Integration
  'story-spine':         [0, 1, 2, 3, 5],    // Once, Every, Until, Because, Finally
  'five-act':            [0, 1, 2, 3, 4],    // All 5
  'romancing-the-beat':  [0, 1, 7, 10, 12],  // Meet, Wanting, Swoon, Dark Moment, HEA
  'virgins-promise':     [0, 2, 4, 9, 11],   // Dependent, Opportunity, Secret World, Wilderness, Kingdom Brighter
  'mice-quotient':       [0, 2, 3, 4, 6],    // Story Type, Inquiry, Character, Event, Closing
  'w-plot':              [0, 2, 5, 7, 9],    // Opening, Crossing1, Midpoint, Internal Res, Resolution
  'harmon-pixar-hybrid': [0, 1, 2, 7, 9],    // Circle Map, Structure Map, Opening/You, AIL/Take, Final/Change
  'freeform':            [0, 1, 2, 3, 5],    // Opening, Protagonist, Stakes, Turn, Resolution
}

// ─── Framework icon SVGs ─────────────────────────────────────────────────────
const FIcon = ({ id, size = 20 }) => {
  const s = { width: size, height: size, flexShrink: 0 }
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (id === 'save-the-cat')       return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
  if (id === 'heros-journey')      return <svg style={s} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
  if (id === 'story-circle')       return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
  if (id === 'sequence-approach')  return <svg style={s} viewBox="0 0 24 24" {...p}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
  if (id === 'kishotenketsu')      return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v8M8 12h8"/></svg>
  if (id === 'fichtean')           return <svg style={s} viewBox="0 0 24 24" {...p}><polyline points="2 20 6 12 10 16 14 6 18 10 22 2"/></svg>
  if (id === 'seven-point-story')  return <svg style={s} viewBox="0 0 24 24" {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  if (id === 'freytags-pyramid')   return <svg style={s} viewBox="0 0 24 24" {...p}><polyline points="2 20 12 4 22 20"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
  if (id === 'snowflake-method')   return <svg style={s} viewBox="0 0 24 24" {...p}><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M5 5l14 14M19 5 5 19"/></svg>
  if (id === 'hauge-six-stage')    return <svg style={s} viewBox="0 0 24 24" {...p}><polyline points="2 17 6 7 10 13 14 9 18 15 22 5"/></svg>
  if (id === 'heroines-journey')   return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/><path d="M5.5 20a7 7 0 0 1 13 0"/><path d="M12 14v4M9 18h6"/></svg>
  if (id === 'story-spine')        return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
  if (id === 'five-act')           return <svg style={s} viewBox="0 0 24 24" {...p}><polyline points="2 18 6 6 10 14 14 10 18 16 22 4"/></svg>
  if (id === 'romancing-the-beat') return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  if (id === 'virgins-promise')    return <svg style={s} viewBox="0 0 24 24" {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  if (id === 'mice-quotient')      return <svg style={s} viewBox="0 0 24 24" {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
  if (id === 'w-plot')             return <svg style={s} viewBox="0 0 24 24" {...p}><polyline points="2 4 6 18 10 8 14 18 18 8 22 4"/></svg>
  if (id === 'harmon-pixar-hybrid')return <svg style={s} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/></svg>
  return <svg style={s} viewBox="0 0 24 24" {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
}

// ─── Framework list (for picker) ─────────────────────────────────────────────
const FRAMEWORK_LIST = Object.entries(FRAMEWORK_GUIDED_PROMPTS).map(([id, f]) => ({
  id,
  name: f.displayName,
  tagline: f.tagline,
}))

// ─── Progress indicator ───────────────────────────────────────────────────────
function Progress({ step }) {
  const labels = ['Framework', 'Premise', 'Key Beats', 'Launch']
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '48px', justifyContent: 'center' }}>
      {labels.map((label, i) => {
        const num = i + 1
        const active = num === step
        const done = num < step
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: done ? 'var(--green)' : active ? 'var(--green)' : 'var(--off-white)',
                border: done || active ? 'none' : '1.5px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}>
                {done
                  ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '700', color: active ? '#fff' : 'var(--text-soft)' }}>{num}</span>
                }
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', color: active ? 'var(--green)' : 'var(--text-soft)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
            {i < labels.length - 1 && (
              <div style={{ width: '60px', height: '1.5px', background: done ? 'var(--green)' : 'var(--border)', margin: '0 8px', marginBottom: '22px', transition: 'background 0.3s ease', flexShrink: 0 }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Main wizard component ────────────────────────────────────────────────────
export default function StoryStarter() {
  const router = useRouter()
  const { toast } = useToast()

  const [step, setStep]               = useState(1)
  const [framework, setFramework]     = useState('')
  const [premiseAnswers, setPremise]  = useState({})
  const [beatAnswers, setBeats]       = useState({})
  const [title, setTitle]             = useState('')
  const [saving, setSaving]           = useState(false)
  const [error, setError]             = useState('')

  // ── Derived ──────────────────────────────────────────────────────────────
  const fData       = framework ? FRAMEWORK_GUIDED_PROMPTS[framework] : null
  const keyIndices  = framework ? (KEY_BEAT_INDICES[framework] || [0, 1, 2, 3, 4]) : []
  const keyBeats    = fData ? keyIndices.map(i => fData.beats[i]).filter(Boolean) : []
  const premiseQs   = fData ? fData.premise : []

  // ── Handlers ──────────────────────────────────────────────────────────────
  function handlePremise(id, val) {
    setPremise(prev => ({ ...prev, [id]: val }))
    if (!title && id === 'one_liner' && val.length > 10) {
      setTitle(val.slice(0, 80))
    }
  }

  function handleBeat(beatLabel, val) {
    setBeats(prev => ({ ...prev, [beatLabel]: val }))
  }

  async function handleLaunch() {
    if (!title.trim()) { setError('Give your project a title.'); return }
    if (!framework)    { setError('Choose a framework.'); return }
    setSaving(true)
    setError('')

    try {
      const { data: { user }, error: authErr } = await supabase.auth.getUser()
      if (authErr || !user) { setError('Sign in to create a project.'); setSaving(false); return }

      // Insert project
      const { data: project, error: projErr } = await supabase
        .from('projects')
        .insert({
          user_id:   user.id,
          title:     title.trim(),
          type:      'screenplay',
          logline:   (premiseAnswers.one_liner || '').trim() || null,
          framework,
          status:    'seed',
        })
        .select()
        .single()

      if (projErr) { setError('Could not create project. Try again.'); setSaving(false); return }

      // Batch insert filled beat answers
      const beatRows = []

      // Premise answers as special beats
      UNIVERSAL_PREMISE_QUESTIONS.forEach(q => {
        if (premiseAnswers[q.id]?.trim()) {
          beatRows.push({ project_id: project.id, beat_label: `premise:${q.id}`, notes: premiseAnswers[q.id].trim() })
        }
      })
      premiseQs.forEach(q => {
        if (premiseAnswers[q.id]?.trim()) {
          beatRows.push({ project_id: project.id, beat_label: `premise:${q.id}`, notes: premiseAnswers[q.id].trim() })
        }
      })

      // Key beat answers
      Object.entries(beatAnswers).forEach(([label, val]) => {
        if (val?.trim()) {
          beatRows.push({ project_id: project.id, beat_label: label, notes: val.trim() })
        }
      })

      if (beatRows.length > 0) {
        await supabase.from('session_beats').insert(beatRows)
      }

      toast.success('Story started. Your project is ready.')
      router.push(`/projects/${project.id}`)
    } catch (e) {
      setError('Something went wrong. Try again.')
      setSaving(false)
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/projects" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            My projects
          </Link>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>Story Starter</span>
        </div>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '52px 24px 100px' }}>

        {/* Hero text */}
        {step === 1 && (
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: '1.2' }}>
              Start from a seed.
            </h1>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--text-mid)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
              Pick a framework. Answer a few questions. Walk away with a mapped story and a project ready to write into.
            </p>
          </div>
        )}

        <Progress step={step} />

        {/* ─── Step 1: Framework ──────────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', marginBottom: '20px', textAlign: 'center' }}>
              Read the taglines. Pick the one that fits where you are with this story.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px', marginBottom: '32px' }}>
              {FRAMEWORK_LIST.map(f => (
                <button
                  key={f.id}
                  onClick={() => setFramework(f.id)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '14px',
                    padding: '18px 20px', borderRadius: '12px', textAlign: 'left', cursor: 'pointer',
                    background: framework === f.id ? 'var(--green-pale)' : '#fff',
                    border: framework === f.id ? '1.5px solid var(--green)' : '1.5px solid var(--border)',
                    boxShadow: framework === f.id ? 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)' : 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ color: framework === f.id ? 'var(--green)' : 'var(--text-soft)', marginTop: '2px', flexShrink: 0 }}>
                    <FIcon id={f.id} size={20} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: framework === f.id ? 'var(--green)' : 'var(--text-dark)', marginBottom: '4px', lineHeight: '1.3' }}>{f.name}</p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.5', margin: 0 }}>{f.tagline}</p>
                  </div>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => { if (framework) setStep(2); else setError('Pick a framework to continue.') }}
                style={{ padding: '12px 28px', borderRadius: '8px', border: 'none', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', cursor: 'pointer', opacity: framework ? 1 : 0.5 }}
              >
                Continue
              </button>
            </div>
            {error && <p style={{ color: 'var(--red)', fontSize: '13px', textAlign: 'right', marginTop: '8px' }}>{error}</p>}
          </div>
        )}

        {/* ─── Step 2: Premise ────────────────────────────────────────────── */}
        {step === 2 && fData && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ color: 'var(--green)' }}><FIcon id={framework} size={22} /></div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)' }}>{fData.displayName}</h2>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '32px' }}>
              Answer what you know. Leave blank what you are still figuring out. You can always fill in the rest later.
            </p>

            {/* Universal questions */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '16px' }}>Foundation</p>
              {UNIVERSAL_PREMISE_QUESTIONS.map(q => (
                <PremiseField key={q.id} q={q} value={premiseAnswers[q.id] || ''} onChange={v => handlePremise(q.id, v)} />
              ))}
            </div>

            {/* Framework-specific premise questions */}
            {premiseQs.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '16px' }}>{fData.displayName} — specific</p>
                {premiseQs.map(q => (
                  <PremiseField key={q.id} q={q} value={premiseAnswers[q.id] || ''} onChange={v => handlePremise(q.id, v)} />
                ))}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <button onClick={() => { setStep(1); setError('') }} style={{ padding: '12px 20px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', cursor: 'pointer' }}>
                Back
              </button>
              <button onClick={() => { setStep(3); setError('') }} style={{ padding: '12px 28px', borderRadius: '8px', border: 'none', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                Continue to Key Beats
              </button>
            </div>
          </div>
        )}

        {/* ─── Step 3: Key Beats ──────────────────────────────────────────── */}
        {step === 3 && fData && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ color: 'var(--green)' }}><FIcon id={framework} size={22} /></div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)' }}>
                {keyBeats.length} key beats
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '32px' }}>
              These are the structural spine of your story. Write a sentence or a paragraph for each. Blank ones are fine.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {keyBeats.map((beat, i) => (
                <BeatCard
                  key={beat.beat}
                  beat={beat}
                  index={i + 1}
                  total={keyBeats.length}
                  value={beatAnswers[beat.beat] || ''}
                  onChange={v => handleBeat(beat.beat, v)}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <button onClick={() => { setStep(2); setError('') }} style={{ padding: '12px 20px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', cursor: 'pointer' }}>
                Back
              </button>
              <button onClick={() => { setStep(4); setError('') }} style={{ padding: '12px 28px', borderRadius: '8px', border: 'none', background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                Review and Launch
              </button>
            </div>
          </div>
        )}

        {/* ─── Step 4: Launch ─────────────────────────────────────────────── */}
        {step === 4 && fData && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>Almost there.</h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '32px' }}>
              Name your project. Eve will create it pre-populated with everything you just mapped.
            </p>

            {/* Title input */}
            <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', display: 'block', marginBottom: '8px' }}>Project title</label>
              <input
                value={title}
                onChange={e => { setTitle(e.target.value); setError('') }}
                placeholder="What do you want to call this story?"
                style={{ width: '100%', border: 'none', outline: 'none', fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', background: 'transparent', padding: 0 }}
              />
            </div>

            {/* Summary of what was filled */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', marginBottom: '28px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>What will be pre-loaded</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <SummaryRow
                  icon="framework"
                  label="Framework"
                  value={fData.displayName}
                  filled
                />
                <SummaryRow
                  icon="premise"
                  label="Premise answers"
                  value={`${Object.values(premiseAnswers).filter(v => v?.trim()).length} of ${UNIVERSAL_PREMISE_QUESTIONS.length + premiseQs.length} filled`}
                  filled={Object.values(premiseAnswers).some(v => v?.trim())}
                />
                <SummaryRow
                  icon="beats"
                  label="Key beats mapped"
                  value={`${Object.values(beatAnswers).filter(v => v?.trim()).length} of ${keyBeats.length} written`}
                  filled={Object.values(beatAnswers).some(v => v?.trim())}
                />
                <SummaryRow
                  icon="next"
                  label="Next step"
                  value="Beat Tracker, Scenes, Characters — all open and ready"
                  filled
                />
              </div>
            </div>

            {error && <p style={{ color: 'var(--red)', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center' }}>
              <button onClick={() => { setStep(3); setError('') }} style={{ padding: '12px 20px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-mid)', cursor: 'pointer' }}>
                Back
              </button>
              <button
                onClick={handleLaunch}
                disabled={saving}
                style={{ padding: '14px 36px', borderRadius: '8px', border: 'none', background: saving ? 'var(--text-soft)' : 'var(--green)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', cursor: saving ? 'default' : 'pointer', boxShadow: saving ? 'none' : 'var(--shadow-green)', transition: 'all 0.15s ease' }}
              >
                {saving ? 'Creating project...' : 'Launch project'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

// ─── Premise field component ──────────────────────────────────────────────────
function PremiseField({ q, value, onChange }) {
  const [showHint, setShowHint] = useState(false)
  return (
    <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: '12px', padding: '20px 22px', marginBottom: '14px', boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '12px' }}>
        <label style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', lineHeight: '1.4', flex: 1 }}>{q.label}</label>
        <button
          onClick={() => setShowHint(h => !h)}
          style={{ flexShrink: 0, padding: '3px 8px', borderRadius: '5px', border: '1px solid var(--border)', background: showHint ? 'var(--green-pale)' : 'transparent', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', color: showHint ? 'var(--green)' : 'var(--text-soft)', cursor: 'pointer' }}
        >
          {showHint ? 'Hide hint' : 'Hint'}
        </button>
      </div>
      {showHint && (
        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', margin: 0 }}>{q.hint}</p>
        </div>
      )}
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={q.placeholder}
        rows={3}
        style={{ width: '100%', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px', fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.65', resize: 'vertical', outline: 'none', background: 'var(--off-white)', boxSizing: 'border-box' }}
      />
    </div>
  )
}

// ─── Beat card component ───────────────────────────────────────────────────────
function BeatCard({ beat, index, total, value, onChange }) {
  const [showHint, setShowHint] = useState(false)
  const actColors = { 1: { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' }, 2: { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE' }, 3: { bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' }, 4: { bg: '#F5F3FF', color: '#6D28D9', border: '#DDD6FE' }, 5: { bg: '#FFF1F2', color: '#BE123C', border: '#FECDD3' } }
  const ac = actColors[beat.act] || actColors[1]
  const filled = value.trim().length > 0

  return (
    <div style={{ background: '#fff', border: `1.5px solid ${filled ? 'var(--green-border)' : 'var(--border)'}`, borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.85)', transition: 'border-color 0.2s ease' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 20px', borderBottom: '1px solid var(--border)', background: filled ? 'var(--green-pale)' : 'var(--off-white)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)' }}>{index}/{total}</span>
        <span style={{ background: ac.bg, color: ac.color, border: `1px solid ${ac.border}`, fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px' }}>Act {beat.act}</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: filled ? 'var(--green)' : 'var(--text-dark)' }}>{beat.beat}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', alignItems: 'center' }}>
          {filled && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="var(--green)"/><path d="M4 7l2.5 2.5 3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
          <button
            onClick={() => setShowHint(h => !h)}
            style={{ padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border)', background: showHint ? 'var(--green-pale)' : 'transparent', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', color: showHint ? 'var(--green)' : 'var(--text-soft)', cursor: 'pointer' }}
          >
            {showHint ? 'Hide' : 'Why'}
          </button>
        </div>
      </div>

      <div style={{ padding: '18px 20px' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', fontWeight: '600', color: 'var(--text-dark)', lineHeight: '1.5', marginBottom: '10px' }}>{beat.prompt}</p>

        {showHint && (
          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', marginBottom: '14px' }}>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65', margin: 0 }}>{beat.hint}</p>
          </div>
        )}

        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={beat.placeholder}
          rows={4}
          style={{ width: '100%', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px', fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.65', resize: 'vertical', outline: 'none', background: 'var(--off-white)', boxSizing: 'border-box' }}
        />
      </div>
    </div>
  )
}

// ─── Summary row ──────────────────────────────────────────────────────────────
function SummaryRow({ label, value, filled }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: filled ? 'var(--green-pale)' : 'var(--off-white)', border: `1px solid ${filled ? 'var(--green-border)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
        {filled && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <div>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>{label}: </span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-mid)' }}>{value}</span>
      </div>
    </div>
  )
}

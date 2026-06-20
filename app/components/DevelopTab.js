'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { supabase } from '../../lib/supabase'
import { SECTIONS, ALL_QUESTION_IDS, SEED_QUESTIONS, CLOSING_QUESTION } from '../../lib/questionnaire'

export default function DevelopTab({ projectId, toast, characters, setCharacters, themes, setThemes }) {
  const [answers, setAnswers]         = useState({})
  const [activeSection, setActive]    = useState('seed')
  const [saveStatus, setSaveStatus]   = useState('saved') // 'saved' | 'saving' | 'unsaved'
  const [seeding, setSeeding]         = useState(false)
  const [loading, setLoading]         = useState(true)
  const saveTimer                     = useRef(null)

  // ── Load existing answers ─────────────────────────────────────────────────
  useEffect(() => {
    async function load() {
      setLoading(true)
      const { data } = await supabase
        .from('projects')
        .select('questionnaire_answers')
        .eq('id', projectId)
        .single()
      if (data?.questionnaire_answers) {
        setAnswers(data.questionnaire_answers)
      }
      setLoading(false)
    }
    load()
  }, [projectId])

  // ── Debounced auto-save ───────────────────────────────────────────────────
  const save = useCallback(async (nextAnswers) => {
    setSaveStatus('saving')
    const { error } = await supabase
      .from('projects')
      .update({ questionnaire_answers: nextAnswers })
      .eq('id', projectId)
    setSaveStatus(error ? 'unsaved' : 'saved')
  }, [projectId])

  function handleChange(qId, value) {
    const next = { ...answers, [qId]: value }
    setAnswers(next)
    setSaveStatus('unsaved')
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => save(next), 900)
  }

  // ── Progress ──────────────────────────────────────────────────────────────
  const answered     = ALL_QUESTION_IDS.filter(id => answers[id]?.trim()).length
  const pct          = Math.round((answered / ALL_QUESTION_IDS.length) * 100)
  const sectionPct   = (sec) => {
    const ids = sec.questions.map(q => q.id)
    const done = ids.filter(id => answers[id]?.trim()).length
    return Math.round((done / ids.length) * 100)
  }

  // ── Seed into other tabs ──────────────────────────────────────────────────
  async function seedFromAnswers() {
    setSeeding(true)
    let seededCount = 0

    try {
      // ── Characters ──────────────────────────────────────────────────────
      const charMap = [
        { key: 'character_protagonist', role: 'Protagonist' },
        { key: 'character_antagonist',  role: 'Antagonist' },
        { key: 'character_ally',        role: 'Supporting' },
      ]

      for (const { key, role } of charMap) {
        const qId  = SEED_QUESTIONS[key]
        const text = answers[qId]?.trim()
        if (!text) continue

        // Extract just the name (first part before comma or opening paren)
        const name = text.split(/[,(]/)[0].trim().slice(0, 60) || role

        // Don't duplicate if a character with this role already exists
        const exists = characters?.some(c => c.role === role)
        if (exists) continue

        const { data: newChar, error } = await supabase
          .from('characters')
          .insert({ project_id: projectId, name, role, notes: text })
          .select()
          .single()
        if (!error && newChar) {
          setCharacters(prev => [...(prev || []), newChar])
          seededCount++
        }
      }

      // ── Themes ──────────────────────────────────────────────────────────
      const themeSeeds = [
        { key: 'theme_phrase',    label: 'Central Theme' },
        { key: 'theme_question',  label: 'Thematic Question' },
        { key: 'theme_argument',  label: 'Thematic Argument' },
        { key: 'theme_motif',     label: 'Recurring Motif' },
      ]

      for (const { key, label } of themeSeeds) {
        const qId  = SEED_QUESTIONS[key]
        const text = answers[qId]?.trim()
        if (!text) continue

        const exists = themes?.some(t => t.name === label)
        if (exists) continue

        const { data: newTheme, error } = await supabase
          .from('themes')
          .insert({ project_id: projectId, name: label, description: text })
          .select()
          .single()
        if (!error && newTheme) {
          setThemes(prev => [...(prev || []), newTheme])
          seededCount++
        }
      }

      // ── World Elements ───────────────────────────────────────────────────
      const worldSeeds = [
        { key: 'world_location', category: 'locations', fieldKey: 'name',   label: 'Setting' },
        { key: 'world_time',     category: 'locations', fieldKey: 'role',    label: 'Time Period' },
        { key: 'world_rules',    category: 'rules',     fieldKey: 'name',    label: 'World Rules' },
        { key: 'world_power',    category: 'politics',  fieldKey: 'name',    label: 'Power Structure' },
        { key: 'world_lie',      category: 'rules',     fieldKey: 'name',    label: "The World's Lie" },
      ]

      for (const { key, category, fieldKey, label } of worldSeeds) {
        const qId  = SEED_QUESTIONS[key]
        const text = answers[qId]?.trim()
        if (!text) continue

        const { error } = await supabase
          .from('world_elements')
          .insert({
            project_id: projectId,
            category,
            name: label,
            fields: { [fieldKey]: text },
          })
        if (!error) seededCount++
      }

      if (seededCount > 0) {
        toast?.success(`Seeded ${seededCount} item${seededCount === 1 ? '' : 's'} into Characters, Themes, and World`)
      } else {
        toast?.success('Nothing new to seed — answers already applied or sections not filled yet')
      }
    } catch (err) {
      console.error('Seed error:', err)
      toast?.error('Seed failed — check console')
    }
    setSeeding(false)
  }

  // ── Derived ───────────────────────────────────────────────────────────────
  const activeSec    = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0]
  const phase1Done   = SECTIONS.filter(s => s.phase === 1).every(s => sectionPct(s) === 100)

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-soft)' }}>Loading answers...</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '0', minHeight: '600px' }}>

      {/* ── Left nav ─────────────────────────────────────────────────────── */}
      <div style={{
        borderRight: '1px solid var(--border)',
        paddingRight: '20px',
        overflowY: 'auto',
        maxHeight: '80vh',
        position: 'sticky',
        top: 0,
      }}>

        {/* Overall progress */}
        <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Progress</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--green)' }}>{pct}%</span>
          </div>
          <div style={{ height: '4px', background: 'var(--green-pale)', borderRadius: '2px' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: 'var(--green)', borderRadius: '2px', transition: 'width 0.4s var(--ease-out)' }} />
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', marginTop: '5px' }}>
            {answered} / {ALL_QUESTION_IDS.length} answered
          </p>
        </div>

        {/* Phase 1 */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '6px', fontWeight: '600' }}>
          Writer's Layer
        </p>
        {SECTIONS.filter(s => s.phase === 1).map(sec => {
          const sp = sectionPct(sec)
          return (
            <button
              key={sec.id}
              onClick={() => setActive(sec.id)}
              style={{
                width: '100%', textAlign: 'left', background: activeSection === sec.id ? 'var(--green-pale)' : 'transparent',
                border: 'none', borderRadius: '6px', padding: '7px 10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px',
                marginBottom: '2px',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '12px',
                color: activeSection === sec.id ? 'var(--green)' : 'var(--text-mid)',
                fontWeight: activeSection === sec.id ? '600' : '400',
                lineHeight: '1.3',
              }}>
                {sec.number}. {sec.title}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px', flexShrink: 0,
                color: sp === 100 ? 'var(--green)' : sp > 0 ? 'var(--text-soft)' : 'var(--border)',
              }}>
                {sp === 100 ? '✓' : sp > 0 ? `${sp}%` : '—'}
              </span>
            </button>
          )
        })}

        {/* Phase 2 */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '6px', fontWeight: '600', marginTop: '16px' }}>
          Director's Layer
        </p>
        {SECTIONS.filter(s => s.phase === 2).map(sec => {
          const sp = sectionPct(sec)
          return (
            <button
              key={sec.id}
              onClick={() => setActive(sec.id)}
              style={{
                width: '100%', textAlign: 'left',
                background: activeSection === sec.id ? '#f5f0ff' : 'transparent',
                border: 'none', borderRadius: '6px', padding: '7px 10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px',
                marginBottom: '2px',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '12px',
                color: activeSection === sec.id ? '#7c3aed' : 'var(--text-mid)',
                fontWeight: activeSection === sec.id ? '600' : '400',
                lineHeight: '1.3',
              }}>
                {sec.number}. {sec.title}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px', flexShrink: 0,
                color: sp === 100 ? '#7c3aed' : sp > 0 ? 'var(--text-soft)' : 'var(--border)',
              }}>
                {sp === 100 ? '✓' : sp > 0 ? `${sp}%` : '—'}
              </span>
            </button>
          )
        })}

        {/* Closing question */}
        <button
          onClick={() => setActive('closing')}
          style={{
            width: '100%', textAlign: 'left',
            background: activeSection === 'closing' ? '#f5f0ff' : 'transparent',
            border: 'none', borderRadius: '6px', padding: '7px 10px', cursor: 'pointer',
            marginBottom: '2px', marginTop: '4px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-ui)', fontSize: '12px', fontStyle: 'italic',
            color: activeSection === 'closing' ? '#7c3aed' : 'var(--text-soft)',
          }}>
            The Closing Question
          </span>
        </button>
      </div>

      {/* ── Right: questions ─────────────────────────────────────────────── */}
      <div style={{ paddingLeft: '28px', paddingBottom: '60px' }}>

        {/* Header */}
        <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            {activeSection !== 'closing' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '100px',
                  background: activeSec?.phase === 1 ? 'var(--green-pale)' : '#f0e8ff',
                  color: activeSec?.phase === 1 ? 'var(--green)' : '#7c3aed',
                }}>
                  {activeSec?.phase === 1 ? "Writer's Layer" : "Director's Layer"}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)' }}>
                  Section {activeSec?.number} — {activeSec?.questions.length} questions
                </span>
              </div>
            )}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
              {activeSection === 'closing' ? 'The Closing Question' : activeSec?.title}
            </h2>
            {activeSection !== 'closing' && activeSec?.note && (
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', fontStyle: 'italic', margin: 0 }}>
                {activeSec.note}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Save status */}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: saveStatus === 'saved' ? 'var(--green)' : saveStatus === 'saving' ? 'var(--text-soft)' : 'var(--amber)' }}>
              {saveStatus === 'saved' ? '✓ saved' : saveStatus === 'saving' ? 'saving...' : 'unsaved'}
            </span>

            {/* Seed button */}
            <button
              onClick={seedFromAnswers}
              disabled={seeding}
              style={{
                fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600',
                padding: '6px 14px', borderRadius: '8px', cursor: seeding ? 'not-allowed' : 'pointer',
                background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)',
                opacity: seeding ? 0.6 : 1, whiteSpace: 'nowrap',
              }}
            >
              {seeding ? 'Applying...' : 'Apply to project'}
            </button>
          </div>
        </div>

        {/* Closing question special case */}
        {activeSection === 'closing' ? (
          <div style={{ maxWidth: '640px' }}>
            <div style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-soft)', fontStyle: 'italic', lineHeight: '1.6', margin: '0 0 6px' }}>
                This one goes at the end because most writers can't answer it honestly until they've answered everything above.
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)', lineHeight: '1.5', marginBottom: '12px' }}>
              {CLOSING_QUESTION}
            </p>
            <textarea
              value={answers['closing'] || ''}
              onChange={e => handleChange('closing', e.target.value)}
              placeholder="Take your time with this one."
              style={{
                width: '100%', minHeight: '120px', resize: 'vertical',
                fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)',
                border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px',
                background: 'var(--warm-white)', lineHeight: '1.65', outline: 'none',
              }}
            />
          </div>
        ) : (
          /* Questions list */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '640px' }}>
            {activeSec?.questions.map((q, idx) => {
              const globalNum = ALL_QUESTION_IDS.indexOf(q.id) + 1
              const hasAnswer = !!answers[q.id]?.trim()
              return (
                <div key={q.id}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '7px', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px', color: hasAnswer ? 'var(--green)' : 'var(--text-soft)',
                      minWidth: '28px', paddingTop: '1px', fontWeight: '600',
                    }}>
                      {globalNum}
                    </span>
                    <label style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.55', fontWeight: '500' }}>
                      {q.text}
                      {q.seeds && (
                        <span style={{
                          marginLeft: '6px', fontSize: '9px', fontFamily: 'var(--font-mono)', fontWeight: '600',
                          color: 'var(--green)', background: 'var(--green-pale)', border: '1px solid var(--green-border)',
                          padding: '1px 5px', borderRadius: '4px', verticalAlign: 'middle', letterSpacing: '0.04em',
                        }}>
                          seeds project
                        </span>
                      )}
                    </label>
                  </div>
                  <textarea
                    value={answers[q.id] || ''}
                    onChange={e => handleChange(q.id, e.target.value)}
                    placeholder="Your answer..."
                    rows={3}
                    style={{
                      width: '100%', resize: 'vertical',
                      fontFamily: 'var(--font-ui)', fontSize: '13.5px', color: 'var(--text-dark)',
                      border: `1px solid ${hasAnswer ? 'var(--green-border)' : 'var(--border)'}`,
                      borderRadius: '8px', padding: '10px 12px',
                      background: hasAnswer ? 'var(--green-pale)' : 'var(--warm-white)',
                      lineHeight: '1.65', outline: 'none',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = '#fff' }}
                    onBlur={e => {
                      e.target.style.borderColor = hasAnswer ? 'var(--green-border)' : 'var(--border)'
                      e.target.style.background = hasAnswer ? 'var(--green-pale)' : 'var(--warm-white)'
                    }}
                  />
                </div>
              )
            })}

            {/* Section nav arrows */}
            <div style={{ display: 'flex', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border)', marginTop: '4px' }}>
              {(() => {
                const idx = SECTIONS.findIndex(s => s.id === activeSection)
                const prev = SECTIONS[idx - 1]
                const next = SECTIONS[idx + 1]
                return (
                  <>
                    {prev && (
                      <button onClick={() => setActive(prev.id)} style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', background: 'transparent', border: '1px solid var(--border)', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer' }}>
                        ← {prev.title}
                      </button>
                    )}
                    {next && (
                      <button onClick={() => setActive(next.id)} style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--green)', background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', marginLeft: 'auto' }}>
                        {next.title} →
                      </button>
                    )}
                    {!next && (
                      <button onClick={() => setActive('closing')} style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: '#7c3aed', background: '#f5f0ff', border: '1px solid #d4c6f0', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', marginLeft: 'auto' }}>
                        The Closing Question →
                      </button>
                    )}
                  </>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'
export const dynamic = 'force-dynamic'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '../../../lib/supabase'
import { useToast } from '../../components/Toast'
import { PRO_TABS } from '../../../lib/planUtils'

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS = ['Overview', 'Beat Tracker', 'Characters', 'Scenes', 'Plot Holes', 'Timeline', 'Themes Map', 'Story Map', 'World']

const frameworkLabel = {
  'save-the-cat':      'Save the Cat',
  'heros-journey':     "Hero's Journey",
  'story-circle':      'Story Circle',
  'freeform':          'Freeform',
  'sequence-approach': 'Sequence Approach',
  'kishotenketsu':     'Kishōtenketsu',
  'fichtean':          'Fichtean Curve',
  'seven-point-story': "Dan Wells' Seven-Point",
  'freytags-pyramid':  "Freytag's Pyramid",
  'snowflake-method':  'Snowflake Method',
  'hauge-six-stage':   "Hauge's Six-Stage",
  'heroines-journey':    "Heroine's Journey",
  'story-spine':         'Story Spine',
  'five-act':            'Five-Act Structure',
  'romancing-the-beat':  'Romancing the Beat',
  'virgins-promise':     "The Virgin's Promise",
  'mice-quotient':       'MICE Quotient',
  'w-plot':              'The W-Plot',
  'harmon-pixar-hybrid': 'Harmon / Pixar Hybrid',
}

// Framework beats master list (used by Beat Tracker tab)
const FRAMEWORK_BEATS = {
  'save-the-cat':      ['Opening Image','Theme Stated','Set-Up','Catalyst','Debate','Break into Two','B Story','Fun & Games','Midpoint','Bad Guys Close In','All Is Lost','Dark Night of the Soul','Break into Three','Finale','Final Image'],
  'heros-journey':     ['Ordinary World','Call to Adventure','Refusal of the Call','Meeting the Mentor','Crossing the Threshold','Tests, Allies, Enemies','Approach to the Inmost Cave','The Ordeal','Reward','The Road Back','Resurrection','Return with the Elixir'],
  'story-circle':      ['You (zone of comfort)','Need (want something)','Go (unfamiliar situation)','Search (adapt, struggle)','Find (get what they wanted)','Take (pay a price)','Return (back to familiar)','Change (different now)'],
  'sequence-approach': ['Sequence 1 (pp. 1–15)','Sequence 2 (pp. 15–30)','Sequence 3 (pp. 30–45)','Sequence 4 (pp. 45–60)','Sequence 5 (pp. 60–75)','Sequence 6 (pp. 75–90)','Sequence 7 (pp. 90–105)','Sequence 8 (pp. 105–120)'],
  'kishotenketsu':     ['Ki — Introduction','Shō — Development','Ten — The Twist','Ketsu — Reconciliation'],
  'fichtean':          ['Opening Crisis','Crisis 1 (escalating)','Crisis 2 (escalating)','Crisis 3 (optional)','Climax — all crises converge','Brief Resolution'],
  'seven-point-story': ['Hook','Plot Turn 1','Pinch Point 1','Midpoint (reaction → action)','Pinch Point 2','Plot Turn 2','Resolution'],
  'freytags-pyramid':  ['Exposition','Rising Action','Climax','Falling Action','Denouement'],
  'snowflake-method':  ['Step 1: One-sentence summary','Step 2: One-paragraph (5 sentences)','Step 3: Character summaries','Step 4: Expanded synopsis','Step 5: Scene list','Step 6: Draft'],
  'hauge-six-stage':   ['Stage 1: Setup (0–10%)','Stage 2: New Situation (10–25%)','Stage 3: Progress (25–50%)','Stage 4: Complications (50–75%)','Stage 5: Final Push (75–90%)','Stage 6: Aftermath (90–100%)'],
  'heroines-journey':  ['Separation from the Feminine','Identification with the Masculine','Road of Trials','Illusory Boon of Success','Spiritual Aridity / Awakening','Initiation and Descent to the Goddess','Urgent Yearning to Reconnect','Healing the Mother/Daughter Split','Healing the Wounded Masculine','Integration of Feminine and Masculine'],
  'story-spine':       ['Once upon a time...','Every day...','Until one day...','Because of that...','Because of that... (escalate)','Until finally...','Ever since then...'],
  'five-act':          ['Act I — Exposition','Act II — Rising Action','Act III — Climax / Turn','Act IV — Falling Action','Act V — Catastrophe or Denouement'],
  'romancing-the-beat':  ['The Meet','Wanting','Misbeliefs & Wounds','No Way This Is Going Anywhere','Humming Along','Shiny Hoo-Ha Moment','Resonance','The Swoon','Deepening','Commitment Freakout','The Dark Moment','Groveling / Grand Gesture','Happily Ever After'],
  'virgins-promise':     ['Dependent World','Price of Conformity','Opportunity to Shine','Dresses the Part','Secret World','No Longer Fitting In','Mentor Appears','Fully Shines','Kingdom in Chaos','Wanders in the Wilderness','Choice to be Taken or Reclaimed','The Kingdom is Brighter','Rescue of the Prince'],
  'mice-quotient':       ['Identify dominant story type (M/I/C/E)','Milieu — Enter the world; explore; leave or stay','Inquiry — Pose the question; investigate; answer it','Character — Show who they are; force the change; show who they become','Event — Establish order; disrupt it; restore or accept new order','Nest additional types inside the dominant frame','Open each nested type; close before the outer type closes'],
  'w-plot':              ['Opening State (plot + emotion established)','Downward — External complication begins','Crossing 1 — external pressure triggers internal shift','Upward — False hope or apparent success','Crossing 2 — internal wound surfaces in the plot','Downward — Midpoint reversal, both tracks worsen','Crossing 3 — darkest moment, tracks converge at crisis','Upward — Internal resolution enables external breakthrough','Crossing 4 — external victory reflects internal transformation','Resolution (both tracks land)'],
  'harmon-pixar-hybrid': ['Story Circle: map all 8 emotional beats first','Save the Cat: map 15 structural beats second','Align: Opening Image = You (zone of comfort)','Align: Catalyst = Need (want something)','Align: Break into Two = Go (unfamiliar situation)','Align: Fun & Games = Search (adapt, struggle)','Align: Midpoint = Find (get what they wanted)','Align: All Is Lost = Take (pay the price)','Align: Break into Three = Return (back to familiar)','Align: Final Image = Change (they are different)'],
}

const statusOptions = [
  { value: 'seed',        label: 'Seed' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'drafting',    label: 'Drafting' },
  { value: 'complete',    label: 'Complete' },
]

const statusStyle = {
  seed:        { bg: 'var(--amber-pale)',  color: 'var(--amber)',  border: 'var(--amber-border)' },
  in_progress: { bg: 'var(--green-pale)',  color: 'var(--green)',  border: 'var(--green-border)' },
  drafting:    { bg: '#EFF6FF',            color: '#1D4ED8',       border: '#BFDBFE' },
  complete:    { bg: '#F0FDF4',            color: '#15803D',       border: '#BBF7D0' },
}

function timeAgo(dateStr) {
  if (!dateStr) return ' --'
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins  = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days  = Math.floor(diff / 86400000)
  if (mins < 2)   return 'Just now'
  if (mins < 60)  return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days === 1) return 'Yesterday'
  if (days < 7)   return `${days} days ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ProjectPage() {
  const params  = useParams()
  const router  = useRouter()
  const id      = params.id
  const toast   = useToast()

  const [tab,        setTab]        = useState('Overview')
  const [project,    setProject]    = useState(null)
  const [characters, setCharacters] = useState([])
  const [scenes,     setScenes]     = useState([])
  const [plotHoles,  setPlotHoles]  = useState([])
  const [themes,     setThemes]     = useState([])
  const [loading,    setLoading]    = useState(true)
  const [error,      setError]      = useState(null)
  const [userPlan,   setUserPlan]   = useState('free')

  // ── Load project + all related data ──────────────────────────────────────
  const load = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Sign in to view this project.'); setLoading(false); return }

    const [projRes, charRes, sceneRes, holeRes, themeRes, profileRes] = await Promise.all([
      supabase.from('projects').select('*').eq('id', id).eq('user_id', user.id).single(),
      supabase.from('characters').select('*').eq('project_id', id).order('created_at'),
      supabase.from('scenes').select('*').eq('project_id', id).order('act_number').order('order_index'),
      supabase.from('plot_holes').select('*').eq('project_id', id).order('created_at'),
      supabase.from('themes').select('*').eq('project_id', id).order('created_at'),
      supabase.from('profiles').select('plan').eq('id', user.id).single(),
    ])

    if (projRes.error || !projRes.data) {
      setError('Project not found.')
      setLoading(false)
      return
    }
    // surface any partial errors
    if (charRes.error)  console.error('characters:', charRes.error)
    if (sceneRes.error) console.error('scenes:', sceneRes.error)
    if (holeRes.error)  console.error('plot holes:', holeRes.error)
    if (themeRes.error) console.error('themes:', themeRes.error)

    setProject(projRes.data)
    setCharacters(charRes.data || [])
    setScenes(sceneRes.data || [])
    setPlotHoles(holeRes.data || [])
    setThemes(themeRes.data || [])
    const plan = profileRes.data?.plan
    setUserPlan('pro') // ⚠️ TESTING MODE — revert to line below before Stripe launch
    // setUserPlan(plan && plan !== 'free' ? 'pro' : 'free')
    setLoading(false)
  }, [id])

  useEffect(() => { load() }, [load])

  // ── Update project field ──────────────────────────────────────────────────
  async function updateProject(fields) {
    const { data } = await supabase
      .from('projects')
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (data) setProject(data)
  }

  if (loading) return <LoadingState />
  if (error)   return <ErrorState message={error} />

  const fw    = frameworkLabel[project.framework] || project.framework
  const ss    = statusStyle[project.status] || statusStyle.seed
  const sLabel = statusOptions.find(s => s.value === project.status)?.label || 'Seed'

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>

      {/* ── Header ── */}
      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-soft)', cursor: 'pointer' }}>
              ← Dashboard
            </span>
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '30px' }}>{project.title}</h1>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '500',
                letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px',
                borderRadius: '4px', background: ss.bg, color: ss.color, border: `1px solid ${ss.border}`,
              }}>{sLabel}</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
              {project.type} &middot; {fw} &middot; Updated {timeAgo(project.updated_at)}
            </p>
            {project.logline && (
              <p style={{ fontSize: '14px', color: 'var(--text-mid)', marginTop: '8px', fontStyle: 'italic', maxWidth: '600px', lineHeight: '1.6' }}>
                "{project.logline}"
              </p>
            )}
          </div>

          {/* Status picker */}
          <select
            value={project.status || 'seed'}
            onChange={e => updateProject({ status: e.target.value })}
            className="input"
            style={{ width: 'auto', fontSize: '13px', padding: '7px 12px' }}
          >
            {statusOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="fade-up fade-up-delay-1" style={{
        display: 'flex', gap: '2px', borderBottom: '1px solid var(--border)',
        marginBottom: '32px', overflowX: 'auto',
      }}>
        {TABS.map(t => {
          const locked = userPlan === 'free' && PRO_TABS.includes(t)
          const isActive = tab === t
          return (
            <button key={t} onClick={() => setTab(t)} style={{
              background: 'none', border: 'none', cursor: locked ? 'default' : 'pointer',
              padding: '10px 16px', fontSize: '14px', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-ui)',
              fontWeight: isActive ? '600' : '400',
              color: locked ? 'var(--text-soft)' : isActive ? 'var(--green)' : 'var(--text-mid)',
              borderBottom: isActive ? '2px solid var(--green)' : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'color 0.15s',
              opacity: locked ? 0.55 : 1,
            }}>
              {t}
              {locked && (
                <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: '5px', verticalAlign: 'middle', opacity: 0.6 }}>
                  <rect x="2" y="4.5" width="6" height="5" rx="1" fill="currentColor"/>
                  <path d="M3.5 4.5V3a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                </svg>
              )}
              {t === 'Plot Holes' && !locked && plotHoles.filter(h => h.status === 'open').length > 0 && (
                <span style={{
                  marginLeft: '6px', fontSize: '10px', fontFamily: 'var(--font-mono)',
                  background: 'var(--amber-pale)', color: 'var(--amber)',
                  border: '1px solid var(--amber-border)', padding: '1px 6px', borderRadius: '10px',
                }}>
                  {plotHoles.filter(h => h.status === 'open').length}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* ── Tab content ── */}
      <div className="fade-up fade-up-delay-2">
        {tab === 'Overview'      && <OverviewTab    project={project} characters={characters} scenes={scenes} plotHoles={plotHoles} onUpdate={updateProject} />}
        {tab === 'Beat Tracker'  && <BeatTrackerTab project={project} toast={toast} scenes={scenes} setScenes={setScenes} />}
        {tab === 'Characters'    && <CharactersTab  projectId={id} characters={characters} setCharacters={setCharacters} toast={toast} />}
        {tab === 'Scenes'      && <ScenesTab      projectId={id} scenes={scenes} setScenes={setScenes} framework={project.framework} toast={toast} />}
        {tab === 'Plot Holes'  && (userPlan === 'pro'
          ? <PlotHolesTab projectId={id} plotHoles={plotHoles} setPlotHoles={setPlotHoles} toast={toast} />
          : <ProTabGate tabName="Plot Holes" />
        )}
        {tab === 'Timeline'    && (userPlan === 'pro'
          ? <TimelineTab scenes={scenes} setScenes={setScenes} toast={toast} projectId={id} />
          : <ProTabGate tabName="Timeline" />
        )}
        {tab === 'Themes Map'  && (userPlan === 'pro'
          ? <ThemesMapTab projectId={id} scenes={scenes} themes={themes} setThemes={setThemes} toast={toast} />
          : <ProTabGate tabName="Themes Map" />
        )}
        {tab === 'Story Map'   && (userPlan === 'pro'
          ? <StoryMapTab projectId={id} project={project} scenes={scenes} setScenes={setScenes} characters={characters} setCharacters={setCharacters} themes={themes} setThemes={setThemes} onUpdateProject={updateProject} toast={toast} />
          : <ProTabGate tabName="Story Map" />
        )}
        {tab === 'World'      && (userPlan === 'pro'
          ? <WorldTab projectId={id} project={project} toast={toast} />
          : <ProTabGate tabName="World" />
        )}
      </div>
    </div>
  )
}

// ─── Pro Tab Gate ──────────────────────────────────────────────────────────────

function ProTabGate({ tabName }) {
  const descriptions = {
    'Plot Holes':  'Track every unresolved story problem, continuity error, and logic gap in one place. Flag them by severity. Close them when fixed.',
    'Timeline':    'See your entire story on a vertical spine. Every scene in order, by act, with inline status and expandable notes.',
    'Themes Map':  'A visual canvas to map your themes, motifs, and symbols — and connect them to the scenes where they live.',
    'Story Map':   'Drag-and-drop your scenes, characters, and themes onto a single canvas. See the whole story at once.',
    'World':       'Build your world bible — factions, locations, political systems, cultural quirks, eras, and language. Export a formatted World Bible PDF to share with collaborators.',
  }
  return (
    <div style={{
      marginTop: '48px', padding: '56px 32px', textAlign: 'center',
      border: '1.5px dashed var(--border)', borderRadius: '16px',
      background: 'var(--white)',
    }}>
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: 'var(--green-pale)', border: '1px solid var(--green-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="8" width="12" height="9" rx="2" fill="none" stroke="var(--green)" strokeWidth="1.5"/>
          <path d="M6 8V5.5a3 3 0 016 0V8" stroke="var(--green)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '10px' }}>
        Pro feature
      </p>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px' }}>
        {tabName}
      </h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-mid)', maxWidth: '380px', margin: '0 auto 28px', lineHeight: '1.75' }}>
        {descriptions[tabName] || 'Upgrade to Pro to unlock this tool.'}
      </p>
      <Link href="/pricing" style={{ textDecoration: 'none' }}>
        <button style={{
          background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)',
          fontWeight: '700', fontSize: '14px', padding: '12px 32px',
          borderRadius: '8px', border: 'none', cursor: 'pointer',
        }}>
          Upgrade to Pro &rarr;
        </button>
      </Link>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-soft)', marginTop: '14px' }}>
        $4.99 / month &middot; Cancel anytime
      </p>
    </div>
  )
}

// ─── Overview Tab ──────────────────────────────────────────────────────────────

function OverviewTab({ project, characters, scenes, plotHoles, onUpdate }) {
  const openHoles   = plotHoles.filter(h => h.status === 'open').length
  const [exporting, setExporting] = useState(false)

  async function exportPDF() {
    setExporting(true)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const res = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ projectId: project.id }),
      })
      if (!res.ok) throw new Error('Export failed')
      const blob = await res.blob()
      const url  = URL.createObjectURL(blob)
      const a    = document.createElement('a')
      a.href     = url
      a.download = `${(project.title || 'project').replace(/[^a-z0-9]/gi,'-').toLowerCase()}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error(err)
      alert('Export failed. Try again.')
    }
    setExporting(false)
  }

  return (
    <div className="project-overview-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

      {/* Stats row */}
      {(() => {
        const done  = scenes.filter(s => s.status === 'complete').length
        const total = scenes.length
        const pct   = total > 0 ? Math.round((done / total) * 100) : 0
        const nextScene = scenes.find(s => s.status !== 'complete')
        return (
          <>
            <div className="project-stats-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
              {[
                { label: 'Characters', value: characters.length },
                { label: 'Scenes',     value: total },
                { label: 'Complete',   value: done },
                { label: 'Plot holes', value: openHoles, warn: openHoles > 0 },
              ].map((s, i) => (
                <div key={i} className="card-static" style={{ padding: '18px 20px' }}>
                  <p style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: s.warn ? 'var(--amber)' : 'var(--green)', fontWeight: '700', marginBottom: '4px' }}>{s.value}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</p>
                </div>
              ))}
            </div>

            {total > 0 && (
              <div className="card-static" style={{ gridColumn: '1 / -1', padding: '18px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Draft progress</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '13px', color: pct === 100 ? 'var(--green)' : 'var(--text-soft)' }}>{pct}%</span>
                </div>
                <div style={{ height: '7px', background: 'var(--off-white)', borderRadius: '4px', overflow: 'hidden', marginBottom: nextScene ? '14px' : '0' }}>
                  <div style={{ height: '100%', width: pct + '%', borderRadius: '4px', background: 'linear-gradient(90deg, #2D5016, var(--green))', transition: 'width 0.4s ease' }} />
                </div>
                {nextScene && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)' }}>Next up:</span>
                    {nextScene.beat_label && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '2px 7px', borderRadius: '4px', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)' }}>{nextScene.beat_label}</span>
                    )}
                    <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{nextScene.title}</span>
                  </div>
                )}
              </div>
            )}
          </>
        )
      })()}

      {/* Logline editor */}
      <div className="card-static" style={{ padding: '22px', gridColumn: '1 / -1' }}>
        <LoglineEditor project={project} onUpdate={onUpdate} />
      </div>

      {/* Recent characters */}
      <div className="card-static" style={{ padding: '22px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>Characters</p>
        {characters.length === 0
          ? <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>No characters yet.</p>
          : characters.slice(0, 4).map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--off-white)', fontSize: '14px' }}>
                <span style={{ fontWeight: '500' }}>{c.name}</span>
                <span style={{ color: 'var(--text-soft)', fontSize: '12px' }}>{c.role || ' --'}</span>
              </div>
            ))
        }
        {characters.length > 4 && <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginTop: '8px' }}>+{characters.length - 4} more</p>}
      </div>

      {/* Recent plot holes */}
      <div className="card-static" style={{ padding: '22px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>Open Plot Holes</p>
        {openHoles === 0
          ? <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>None open. Clean draft.</p>
          : plotHoles.filter(h => h.status === 'open').slice(0, 4).map(h => (
              <div key={h.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--off-white)', fontSize: '13px', color: 'var(--text-mid)' }}>
                {h.description}
              </div>
            ))
        }
      </div>
      {/* Export */}
      <div className="card-static" style={{ padding: '22px', gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Export</p>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Download your outline, scenes, and characters as a formatted PDF.</p>
        </div>
        <button
          onClick={exportPDF}
          disabled={exporting}
          className="btn-ghost"
          style={{ fontSize: '13px', padding: '9px 18px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', opacity: exporting ? 0.6 : 1 }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v9m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          {exporting ? 'Generating…' : 'Export PDF'}
        </button>
      </div>
    </div>
  )
}

function LoglineEditor({ project, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [val,     setVal]     = useState(project.logline || '')
  const [saving,  setSaving]  = useState(false)

  async function save() {
    setSaving(true)
    await onUpdate({ logline: val.trim() || null })
    setSaving(false)
    setEditing(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Logline</p>
        {!editing && (
          <button onClick={() => setEditing(true)} style={{ background: 'none', border: 'none', fontSize: '12px', color: 'var(--green)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            {val ? 'Edit' : 'Add logline'}
          </button>
        )}
      </div>
      {editing ? (
        <div>
          <textarea
            className="input"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Who wants what, and what stands in the way?"
            style={{ minHeight: '72px', marginBottom: '10px' }}
            autoFocus
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={save} disabled={saving} style={{ fontSize: '13px', padding: '7px 14px' }}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button className="btn-ghost" onClick={() => { setEditing(false); setVal(project.logline || '') }} style={{ fontSize: '13px', padding: '7px 14px' }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '14px', color: val ? 'var(--text-mid)' : 'var(--text-soft)', fontStyle: val ? 'italic' : 'normal', lineHeight: '1.65' }}>
          {val || 'No logline yet. A logline answers: who wants what, and what stands in the way?'}
        </p>
      )}
    </div>
  )
}

// ─── Characters Tab ────────────────────────────────────────────────────────────

// ─── Character section definitions ────────────────────────────────────────────

const CHAR_SECTIONS = [
  {
    key: 'identity',
    label: 'Identity',
    hint: 'Who they are in the world — the facts that shaped them before the story began.',
    fields: [
      { key: 'age',         label: 'Age',               placeholder: 'e.g. 34, or "late thirties"',          col: true },
      { key: 'gender',      label: 'Gender / Pronouns', placeholder: 'e.g. she/her, nonbinary, he/him',      col: true },
      { key: 'ethnicity',   label: 'Ethnicity',         placeholder: 'How they identify or are perceived',   col: true },
      { key: 'nationality', label: 'Nationality',       placeholder: 'Where they are from',                  col: true },
      { key: 'faith',       label: 'Faith / Religion',  placeholder: 'Belief system — or its absence',       col: true },
      { key: 'class',       label: 'Class / Income',    placeholder: 'Economic position, past or present',   col: true },
      { key: 'occupation',  label: 'Occupation',        placeholder: 'What they do for money or meaning',    col: true },
      { key: 'appearance',  label: 'Appearance',        placeholder: 'How others first read them physically', col: false },
    ],
  },
  {
    key: 'psychology',
    label: 'Psychology',
    hint: 'The inner machinery — what drives them, what they hide, and what the story will force to the surface.',
    fields: [
      { key: 'want',   label: 'Want',          placeholder: 'Conscious goal — what they believe they need',      col: true },
      { key: 'need',   label: 'Need',          placeholder: 'True need — what they actually need to grow',        col: true },
      { key: 'ghost',  label: 'Ghost / Wound', placeholder: 'The past event that still shapes everything',        col: true },
      { key: 'fear',   label: 'Core Fear',     placeholder: 'What they would do almost anything to avoid',        col: true },
      { key: 'mask',   label: 'Mask',          placeholder: 'How they present themselves to the world',           col: true },
      { key: 'desire', label: 'Deeper Desire', placeholder: 'What they secretly long for beneath the want',       col: true },
      { key: 'flaw',   label: 'Flaw',          placeholder: 'The behaviour pattern that gets them in trouble',    col: true },
      { key: 'arc',    label: 'Arc',           placeholder: 'How they change — or refuse to',                     col: true },
    ],
  },
  {
    key: 'background',
    label: 'Background',
    hint: 'The facts, relationships, and events that explain why they are the way they are.',
    fields: [
      { key: 'family',          label: 'Family',                  placeholder: 'Family structure, key relationships, losses',      col: false },
      { key: 'education',       label: 'Education',               placeholder: 'Formal or informal — how did they learn?',         col: true },
      { key: 'formative_event', label: 'Formative Event',         placeholder: 'The single event that made them who they are',     col: false },
      { key: 'secret',          label: 'Secret',                  placeholder: 'What they have never told anyone',                 col: false },
      { key: 'self_view',       label: 'How They See Themselves', placeholder: 'Their own narrative — accurate or not',            col: false },
      { key: 'other_view',      label: 'How Others See Them',     placeholder: 'What people assume about them on first read',      col: false },
    ],
  },
  {
    key: 'craft',
    label: 'Craft',
    hint: 'Story-level thinking — what this character does for the narrative, thematically and structurally.',
    fields: [
      { key: 'voice',          label: 'Voice',             placeholder: 'If you hid the names, how would you know it was them?',       col: false },
      { key: 'story_function', label: 'Story Function',    placeholder: 'What narrative job do they perform?',                        col: true },
      { key: 'thematic_role',  label: 'Thematic Role',     placeholder: "Which side of the story's argument do they represent?",     col: true },
      { key: 'relationships',  label: 'Key Relationships', placeholder: 'Who do they need, compete with, or change?',                 col: false },
      { key: 'notes',          label: 'Notes',             placeholder: 'Anything else worth knowing',                                col: false },
    ],
  },
]

function dGet(character, key) {
  if (character[key] !== undefined && character[key] !== null && character[key] !== '') return character[key]
  return character.details?.[key] || ''
}

function CharactersTab({ projectId, characters, setCharacters, toast }) {
  const [expanded, setExpanded] = useState(null)
  const [adding,   setAdding]   = useState(false)
  const [form,     setForm]     = useState({ name: '', role: '' })
  const [saving,   setSaving]   = useState(false)

  async function addCharacter() {
    if (!form.name.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('characters')
      .insert({ project_id: projectId, name: form.name.trim(), role: form.role.trim() })
      .select().single()
    if (data) {
      setCharacters(prev => [...prev, data])
      setForm({ name: '', role: '' })
      setAdding(false)
      setExpanded(data.id)
      toast.success('Character added — fill in their details below.')
    } else {
      toast.error('Could not add character.')
    }
    setSaving(false)
  }

  async function updateCharacter(charId, fields) {
    const { data } = await supabase.from('characters').update(fields).eq('id', charId).select().single()
    if (data) setCharacters(prev => prev.map(c => c.id === charId ? data : c))
  }

  async function deleteCharacter(charId) {
    const { error } = await supabase.from('characters').delete().eq('id', charId)
    if (error) { toast.error('Could not delete character.'); return }
    setCharacters(prev => prev.filter(c => c.id !== charId))
    if (expanded === charId) setExpanded(null)
    toast.success('Character deleted.')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)' }}>
          {characters.length} character{characters.length !== 1 ? 's' : ''}
        </p>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
          + Add character
        </button>
      </div>

      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--green-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>New Character</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '12px' }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input className="input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Character name" />
            </div>
            <div>
              <label style={labelStyle}>Role</label>
              <input className="input" value={form.role} onChange={e => setForm({...form, role: e.target.value})} placeholder="e.g. Protagonist, Antagonist, Mentor" />
            </div>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginBottom: '16px', lineHeight: '1.5' }}>
            Start with a name. Age, faith, psychology, background — all get filled in the expanded card.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addCharacter} disabled={!form.name.trim() || saving} style={{ fontSize: '13px', padding: '8px 16px', opacity: form.name.trim() ? 1 : 0.4 }}>
              {saving ? 'Saving...' : 'Add character'}
            </button>
            <button className="btn-ghost" onClick={() => setAdding(false)} style={{ fontSize: '13px', padding: '8px 16px' }}>Cancel</button>
          </div>
        </div>
      )}

      {characters.length === 0 && !adding && (
        <div className="empty-state">
          <h3>No characters yet</h3>
          <p>Structure without character is furniture. Add your first character before you decide what happens to them.</p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {characters.map(c => (
          <CharacterCard
            key={c.id}
            character={c}
            expanded={expanded === c.id}
            onToggle={() => setExpanded(expanded === c.id ? null : c.id)}
            onUpdate={(fields) => updateCharacter(c.id, fields)}
            onDelete={() => deleteCharacter(c.id)}
          />
        ))}
      </div>
    </div>
  )
}

function CharacterCard({ character, expanded, onToggle, onUpdate, onDelete }) {
  const [section, setSection] = useState('identity')
  const [editing, setEditing] = useState(false)
  const [form,    setForm]    = useState({})
  const [saving,  setSaving]  = useState(false)

  function startEdit() {
    const flat = { name: character.name || '', role: character.role || '' }
    CHAR_SECTIONS.forEach(sec => {
      sec.fields.forEach(f => { flat[f.key] = dGet(character, f.key) })
    })
    setForm(flat)
    setEditing(true)
  }

  function setField(key, val) {
    setForm(prev => ({ ...prev, [key]: val }))
  }

  async function save() {
    setSaving(true)
    const topLevel = { name: form.name, role: form.role, want: form.want, need: form.need, ghost: form.ghost, arc: form.arc, flaw: form.flaw, voice: form.voice }
    const detailKeys = ['age','gender','ethnicity','nationality','faith','class','occupation','appearance','fear','mask','desire','family','education','formative_event','secret','self_view','other_view','story_function','thematic_role','relationships','notes']
    const details = {}
    detailKeys.forEach(k => { if (form[k] !== undefined) details[k] = form[k] })
    await onUpdate({ ...topLevel, details })
    setSaving(false)
    setEditing(false)
  }

  const activeSec = CHAR_SECTIONS.find(s => s.key === section)

  const allFields = CHAR_SECTIONS.flatMap(s => s.fields)
  const filled = allFields.filter(f => { const v = dGet(character, f.key); return v && v.toString().trim() }).length
  const pct = Math.round((filled / allFields.length) * 100)

  const age        = dGet(character, 'age')
  const ethnicity  = dGet(character, 'ethnicity')
  const faith      = dGet(character, 'faith')
  const occupation = dGet(character, 'occupation')

  return (
    <div className="card" style={{ padding: '18px 22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={onToggle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
            background: 'var(--green-pale)', border: '1px solid var(--green-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '16px', color: 'var(--green)',
          }}>
            {character.name?.[0]?.toUpperCase() || '?'}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontWeight: '600', fontSize: '15px', marginBottom: '3px' }}>{character.name}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
              {character.role && <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)' }}>{character.role}</span>}
              {age        && <span style={{ fontSize: '11px', background: '#F3F4F6', color: '#374151', borderRadius: '4px', padding: '1px 6px', fontFamily: 'var(--font-ui)' }}>{age}</span>}
              {ethnicity  && <span style={{ fontSize: '11px', background: '#F3F4F6', color: '#374151', borderRadius: '4px', padding: '1px 6px', fontFamily: 'var(--font-ui)' }}>{ethnicity}</span>}
              {faith      && <span style={{ fontSize: '11px', background: 'var(--green-pale)', color: 'var(--green)', borderRadius: '4px', padding: '1px 6px', fontFamily: 'var(--font-ui)' }}>{faith}</span>}
              {occupation && <span style={{ fontSize: '11px', background: '#F3F4F6', color: '#374151', borderRadius: '4px', padding: '1px 6px', fontFamily: 'var(--font-ui)' }}>{occupation}</span>}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div title={pct + '% complete'} style={{ position: 'relative', width: '28px', height: '28px' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="14" cy="14" r="11" fill="none" stroke="var(--border)" strokeWidth="2.5" />
              <circle cx="14" cy="14" r="11" fill="none" stroke="var(--green)" strokeWidth="2.5"
                strokeDasharray={2 * Math.PI * 11}
                strokeDashoffset={2 * Math.PI * 11 * (1 - pct / 100)}
                strokeLinecap="round" />
            </svg>
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'var(--green)', fontFamily: 'var(--font-ui)' }}>
              {pct}
            </span>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-soft)' }}>
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {CHAR_SECTIONS.map(s => {
              const sectionFilled = s.fields.filter(f => { const v = dGet(character, f.key); return v && v.toString().trim() }).length
              const isActive = s.key === section
              return (
                <button key={s.key} onClick={() => { setSection(s.key); setEditing(false) }}
                  style={{
                    padding: '5px 13px', borderRadius: '16px', cursor: 'pointer', fontSize: '12px',
                    fontFamily: 'var(--font-ui)', fontWeight: isActive ? '700' : '500',
                    background: isActive ? 'var(--green)' : '#F9FAFB',
                    color: isActive ? '#fff' : 'var(--text-soft)',
                    border: isActive ? '1px solid var(--green)' : '1px solid var(--border)',
                    transition: 'all 0.15s',
                  }}>
                  {s.label}
                  {sectionFilled > 0 && !isActive && <span style={{ marginLeft: '5px', fontSize: '10px', color: 'var(--green)', fontWeight: '700' }}>·</span>}
                </button>
              )
            })}
          </div>

          <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginBottom: '16px', lineHeight: '1.55', fontStyle: 'italic' }}>
            {activeSec?.hint}
          </p>

          {editing ? (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                {section === 'identity' && (
                  <>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input className="input" value={form.name || ''} onChange={e => setField('name', e.target.value)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Role</label>
                      <input className="input" value={form.role || ''} onChange={e => setField('role', e.target.value)} />
                    </div>
                  </>
                )}
                {activeSec?.fields.filter(f => f.col).map(f => (
                  <div key={f.key}>
                    <label style={labelStyle}>{f.label}</label>
                    <input className="input" placeholder={f.placeholder} value={form[f.key] || ''} onChange={e => setField(f.key, e.target.value)} />
                  </div>
                ))}
                {activeSec?.fields.filter(f => !f.col).map(f => (
                  <div key={f.key} style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>{f.label}</label>
                    <textarea className="input" rows={2} placeholder={f.placeholder} value={form[f.key] || ''} onChange={e => setField(f.key, e.target.value)}
                      style={{ resize: 'vertical', fontFamily: 'var(--font-body)', lineHeight: '1.55', minHeight: '60px' }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-primary" onClick={save} disabled={saving} style={{ fontSize: '13px', padding: '7px 14px' }}>{saving ? 'Saving...' : 'Save'}</button>
                <button className="btn-ghost" onClick={() => setEditing(false)} style={{ fontSize: '13px', padding: '7px 14px' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                {activeSec?.fields.filter(f => f.col).map(f => {
                  const val = dGet(character, f.key)
                  return (
                    <div key={f.key}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{f.label}</p>
                      <p style={{ fontSize: '13px', color: val ? 'var(--text-mid)' : 'var(--text-soft)', fontStyle: val ? 'normal' : 'italic', lineHeight: '1.5' }}>{val || '—'}</p>
                    </div>
                  )
                })}
                {activeSec?.fields.filter(f => !f.col).map(f => {
                  const val = dGet(character, f.key)
                  return (
                    <div key={f.key} style={{ gridColumn: '1 / -1' }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{f.label}</p>
                      <p style={{ fontSize: '13px', color: val ? 'var(--text-mid)' : 'var(--text-soft)', fontStyle: val ? 'normal' : 'italic', lineHeight: '1.6' }}>{val || '—'}</p>
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-ghost" onClick={startEdit} style={{ fontSize: '12px', padding: '6px 12px' }}>Edit</button>
                <button onClick={onDelete} style={{ background: 'none', border: 'none', fontSize: '12px', color: '#991B1B', cursor: 'pointer', padding: '6px 12px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Delete</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Beat stubs for auto-fill ──────────────────────────────────────────────────

const frameworkBeatStubs = {
  'save-the-cat': [
    { title: 'Opening Image',     act_number: 1, beat_label: 'Opening Image',    notes: 'The very first image —a snapshot of your protagonist\'s problem before anything changes.' },
    { title: 'Theme Stated',      act_number: 1, beat_label: 'Theme Stated',     notes: 'Someone says something to your protagonist that they don\'t yet understand. This is your theme.' },
    { title: 'Set-Up',            act_number: 1, beat_label: 'Set-Up',           notes: 'Introduce all the people, flaws, and circumstances that need fixing by the end.' },
    { title: 'Catalyst',          act_number: 1, beat_label: 'Catalyst',         notes: 'The event around page 12 that disrupts the protagonist\'s world. Done TO them, not by them.' },
    { title: 'Debate',            act_number: 1, beat_label: 'Debate',           notes: 'The protagonist hesitates. What is the last question they ask before committing to Act 2?' },
    { title: 'Break into Two',    act_number: 1, beat_label: 'Break into Two',   notes: 'The protagonist CHOOSES to enter Act 2. This is the most important beat —it must be active.' },
    { title: 'B Story',           act_number: 2, beat_label: 'B Story',          notes: 'The secondary storyline (usually a relationship) that carries the theme.' },
    { title: 'Fun and Games',     act_number: 2, beat_label: 'Fun and Games',    notes: 'The "promise of the premise." The audience gets what they came for.' },
    { title: 'Midpoint',          act_number: 2, beat_label: 'Midpoint',         notes: 'False victory or false defeat. After this, the protagonist becomes fully active.' },
    { title: 'Bad Guys Close In', act_number: 2, beat_label: 'Bad Guys Close In', notes: 'External and internal forces dismantle what the protagonist built in Fun and Games.' },
    { title: 'All Is Lost',       act_number: 2, beat_label: 'All Is Lost',      notes: 'The lowest point. Something must die here —literal or symbolic.' },
    { title: 'Dark Night of the Soul', act_number: 2, beat_label: 'Dark Night',  notes: 'The protagonist sits in the wreckage. The solution must come from within them.' },
    { title: 'Break into Three',  act_number: 3, beat_label: 'Break into Three', notes: 'The A and B stories merge. The protagonist has a new idea —and it comes from the B story.' },
    { title: 'Finale',            act_number: 3, beat_label: 'Finale',           notes: 'Execute the plan using everything learned. Mirror the setup in new, meaningful ways.' },
    { title: 'Final Image',       act_number: 3, beat_label: 'Final Image',      notes: 'The opposite of the Opening Image. Proof that change is real and permanent.' },
  ],
  'heros-journey': [
    { title: 'Ordinary World',        act_number: 1, beat_label: 'Ordinary World',       notes: 'The hero\'s normal life —establish what they stand to lose.' },
    { title: 'Call to Adventure',     act_number: 1, beat_label: 'Call to Adventure',    notes: 'The disruption that presents the challenge ahead.' },
    { title: 'Refusal of the Call',   act_number: 1, beat_label: 'Refusal',              notes: 'The hero hesitates. What fear holds them back?' },
    { title: 'Meeting the Mentor',    act_number: 1, beat_label: 'Mentor',               notes: 'Who gives the hero wisdom or a tool to cross the threshold?' },
    { title: 'Crossing the Threshold',act_number: 1, beat_label: 'Threshold',            notes: 'Point of no return. The Ordinary World is left behind.' },
    { title: 'Tests, Allies, Enemies',act_number: 2, beat_label: 'Tests / Allies',       notes: 'The hero learns the rules of the Special World and builds relationships.' },
    { title: 'Approach the Inmost Cave', act_number: 2, beat_label: 'Approach',          notes: 'Preparation for the Ordeal. What is the hero\'s plan?' },
    { title: 'The Ordeal',            act_number: 2, beat_label: 'Ordeal',               notes: 'The central crisis. The hero must "die" to be reborn with new knowledge.' },
    { title: 'Reward (Seizing the Sword)', act_number: 2, beat_label: 'Reward',          notes: 'What does the hero claim after surviving the Ordeal?' },
    { title: 'The Road Back',         act_number: 3, beat_label: 'Road Back',            notes: 'What drives the hero back? What final obstacle appears?' },
    { title: 'Resurrection',          act_number: 3, beat_label: 'Resurrection',         notes: 'Final transformation. The climax proves the change is real.' },
    { title: 'Return with the Elixir',act_number: 3, beat_label: 'Return',               notes: 'The hero brings back wisdom, love, or freedom that heals the Ordinary World.' },
  ],
  'story-circle': [
    { title: 'You —Establish the character',   act_number: 1, beat_label: 'You',    notes: 'Who is the protagonist in their comfort zone?' },
    { title: 'Need —Establish the want',        act_number: 1, beat_label: 'Need',   notes: 'What does the character need or want that they can\'t scratch in their current world?' },
    { title: 'Go —Enter an unfamiliar world',   act_number: 1, beat_label: 'Go',     notes: 'What threshold do they cross into something new and unfamiliar?' },
    { title: 'Search —Road of trials',          act_number: 2, beat_label: 'Search', notes: 'What obstacles does the character face while searching for what they need?' },
    { title: 'Find —The thing they were seeking', act_number: 2, beat_label: 'Find', notes: 'Do they find it? At what cost or complication?' },
    { title: 'Take —Pay the price',             act_number: 2, beat_label: 'Take',   notes: 'What must the character sacrifice or lose for what they found?' },
    { title: 'Return —Back to the familiar',    act_number: 3, beat_label: 'Return', notes: 'How do they return to the familiar world, changed?' },
    { title: 'Change —Transformation complete', act_number: 3, beat_label: 'Change', notes: 'How has the character fundamentally changed? The circle closes.' },
  ],
  'sequence-approach': [
    { title: 'Sequence 1 —Establish & Incite',   act_number: 1, beat_label: 'Sequence 1', notes: 'Establish the world and protagonist. Land the inciting incident (pp. 1–15).' },
    { title: 'Sequence 2 —Decision & Threshold', act_number: 1, beat_label: 'Sequence 2', notes: 'The protagonist\'s response and the Act 1 decision they cannot unmake (pp. 15–30).' },
    { title: 'Sequence 3 —New World, Old Methods', act_number: 2, beat_label: 'Sequence 3', notes: 'First attempt. Old tools meet new problems. Ends in setback (pp. 30–45).' },
    { title: 'Sequence 4 —Progress & Midpoint',  act_number: 2, beat_label: 'Sequence 4', notes: 'Real progress, then the midpoint reversal (pp. 45–60).' },
    { title: 'Sequence 5 —Reversal & Escalation', act_number: 2, beat_label: 'Sequence 5', notes: 'Midpoint consequences arrive. Resources stripped away (pp. 60–75).' },
    { title: 'Sequence 6 —All Is Lost & Choice',  act_number: 2, beat_label: 'Sequence 6', notes: 'Lowest point. Something dies. The fundamental choice before Act 3 (pp. 75–90).' },
    { title: 'Sequence 7 —Climax Begins',         act_number: 3, beat_label: 'Sequence 7', notes: 'Final confrontation begins. Protagonist acts on their Act 2 choice (pp. 90–105).' },
    { title: 'Sequence 8 —Resolution',            act_number: 3, beat_label: 'Sequence 8', notes: 'Climax resolves. The new state of the world (pp. 105–120).' },
  ],
  'kishotenketsu': [
    { title: 'Ki —Introduction',   act_number: 1, beat_label: 'Ki',    notes: 'Establish the world, characters, and situation. No conflict. Pure immersion.' },
    { title: 'Shō —Development',   act_number: 1, beat_label: 'Shō',   notes: 'Introduce a second element that seems unrelated. Develop both threads independently.' },
    { title: 'Ten —Twist',         act_number: 2, beat_label: 'Ten',   notes: 'The unexpected connection between Ki and Shō. A shift in perception, not a plot twist.' },
    { title: 'Ketsu —Conclusion',  act_number: 3, beat_label: 'Ketsu', notes: 'Reconcile the elements. Let the meaning land without explaining it.' },
  ],
  'fichtean': [
    { title: 'Opening Crisis',         act_number: 1, beat_label: 'Opening Crisis',  notes: 'Drop in mid-action. No setup. The audience will catch up.' },
    { title: 'Crisis 1 —Escalation',  act_number: 1, beat_label: 'Crisis 1',        notes: 'First crisis after the opening. What does it cost? What backstory does it reveal?' },
    { title: 'Crisis 2 —Escalation',  act_number: 2, beat_label: 'Crisis 2',        notes: 'Second crisis. Worse than the first. Tighten the spiral.' },
    { title: 'Crisis 3 —Peak Pressure', act_number: 2, beat_label: 'Crisis 3',      notes: 'Optional. The backstory that unlocks the full weight of the present.' },
    { title: 'Climax —All Crises Converge', act_number: 3, beat_label: 'Climax',    notes: 'Everything arrives at once. Inevitable in retrospect.' },
    { title: 'Brief Resolution',       act_number: 3, beat_label: 'Resolution',      notes: 'Keep it short. What matters already happened. One final beat, then close.' },
  ],
  'freeform': [
    { title: 'Opening',       act_number: 1, beat_label: 'Opening',    notes: 'How does the story begin? Why here and not somewhere else?' },
    { title: 'Protagonist',   act_number: 1, beat_label: 'Protagonist', notes: 'Establish who this person is and what they carry into the story.' },
    { title: 'Stakes',        act_number: 1, beat_label: 'Stakes',     notes: 'What does the protagonist lose if they fail? Make it concrete.' },
    { title: 'Central Turn',  act_number: 2, beat_label: 'Turn',       notes: 'The moment everything changes and can\'t go back. What is lost or revealed?' },
    { title: 'Low Point',     act_number: 2, beat_label: 'Low Point',  notes: 'Darkest moment. What truth must now be faced?' },
    { title: 'Resolution',    act_number: 3, beat_label: 'Resolution', notes: 'What happens in the final scenes? What does the ending mean?' },
  ],

  'seven-point-story': [
    { title: 'Hook',            act_number: 1, beat_label: 'Hook',          notes: 'The starting state — who is the protagonist, and what is the mirror opposite of where they will end?' },
    { title: 'Plot Turn 1',     act_number: 1, beat_label: 'Plot Turn 1',   notes: 'The event that propels the protagonist into the main conflict. They are now moving.' },
    { title: 'Pinch Point 1',   act_number: 2, beat_label: 'Pinch Point 1', notes: 'The antagonist demonstrates its full power. A reminder of what the protagonist is up against.' },
    { title: 'Midpoint',        act_number: 2, beat_label: 'Midpoint',      notes: 'The shift from reaction to action. After this, the protagonist drives events rather than responding to them.' },
    { title: 'Pinch Point 2',   act_number: 2, beat_label: 'Pinch Point 2', notes: 'The antagonist escalates. Resources stripped. The protagonist is at maximum disadvantage.' },
    { title: 'Plot Turn 2',     act_number: 3, beat_label: 'Plot Turn 2',   notes: 'The final piece of information or insight that enables the Resolution. How does it arrive?' },
    { title: 'Resolution',      act_number: 3, beat_label: 'Resolution',    notes: 'The mirror of the Hook. The protagonist has become the opposite of who they were. Show it.' },
  ],

  'freytags-pyramid': [
    { title: 'Exposition',      act_number: 1, beat_label: 'Exposition',      notes: 'Establish world, protagonist, and the fault line running through the stable order.' },
    { title: 'Rising Action',   act_number: 2, beat_label: 'Rising Action',   notes: 'Escalating complications, each one closing an escape route and making the Climax more inevitable.' },
    { title: 'Climax',          act_number: 2, beat_label: 'Climax',          notes: 'The single turning point. After this, the direction of the story inverts. Name the exact moment.' },
    { title: 'Falling Action',  act_number: 3, beat_label: 'Falling Action',  notes: 'Consequences of the Climax unfold. Final attempts to recover or reconcile.' },
    { title: 'Denouement',      act_number: 3, beat_label: 'Denouement',      notes: 'The story\'s meaning settles. Not just what happened — what it means. The last breath.' },
  ],

  'snowflake-method': [
    { title: 'One-Sentence Summary',   act_number: 1, beat_label: 'Step 1', notes: 'One sentence: protagonist, conflict, stakes. 25 words maximum. No character names.' },
    { title: 'One-Paragraph Expansion', act_number: 1, beat_label: 'Step 2', notes: 'Five sentences: setup, three disasters, ending. No more. This is the skeleton of your novel.' },
    { title: 'Character Summaries',    act_number: 1, beat_label: 'Step 3', notes: 'One paragraph per major character: who they are at the start and who they are at the end.' },
    { title: 'Expanded Synopsis',      act_number: 2, beat_label: 'Step 4', notes: 'Expand each sentence of your paragraph into one full page. Five pages total.' },
    { title: 'Scene List',             act_number: 2, beat_label: 'Step 5', notes: 'Expand the synopsis into scenes. Each scene: POV, conflict, outcome, and how it moves the story.' },
    { title: 'First Draft',            act_number: 3, beat_label: 'Step 6', notes: 'Write. You have a scene list. Every scene knows what it is doing. Begin.' },
  ],

  'hauge-six-stage': [
    { title: 'Stage 1: Setup',          act_number: 1, beat_label: 'Stage 1',  notes: 'Establish the protagonist\'s Identity — the false self or defended self they present to the world. (0–10%)' },
    { title: 'Stage 2: New Situation',  act_number: 1, beat_label: 'Stage 2',  notes: 'A new situation disrupts the Identity and begins to crack it open. (10–25%)' },
    { title: 'Stage 3: Progress',       act_number: 2, beat_label: 'Stage 3',  notes: 'Real progress on the outer goal, with small movements toward Essence. The upside of Act 2. (25–50%)' },
    { title: 'Stage 4: Complications',  act_number: 2, beat_label: 'Stage 4',  notes: 'The Identity reasserts itself. The wound is touched. Progress becomes harder. (50–75%)' },
    { title: 'Stage 5: Final Push',     act_number: 3, beat_label: 'Stage 5',  notes: 'The protagonist sheds Identity and acts from Essence for the first time. The final effort. (75–90%)' },
    { title: 'Stage 6: Aftermath',      act_number: 3, beat_label: 'Stage 6',  notes: 'The new equilibrium. The protagonist is now living from Essence. Show it in action. (90–100%)' },
  ],

  'heroines-journey': [
    { title: 'Separation from the Feminine',          act_number: 1, beat_label: 'Separation',         notes: 'The heroine\'s rejection of the feminine world is established. Show the split in behavior.' },
    { title: 'Identification with the Masculine',     act_number: 1, beat_label: 'Masculine ID',        notes: 'Name the achievement. Name the cost. Both are real.' },
    { title: 'Road of Trials',                        act_number: 2, beat_label: 'Trials',              notes: 'The masculine-identified self encounters problems it cannot solve through competence alone.' },
    { title: 'Illusory Boon of Success',              act_number: 2, beat_label: 'Illusory Boon',       notes: 'Apparent success that reinforces the old strategy — just before it collapses.' },
    { title: 'Spiritual Aridity / Awakening',         act_number: 2, beat_label: 'Awakening',           notes: 'The moment of emptiness. Something is missing. Name it specifically.' },
    { title: 'Initiation and Descent to the Goddess', act_number: 2, beat_label: 'Descent',             notes: 'The crossing into the deep interior. Feeling, intuition, connection — what was buried.' },
    { title: 'Urgent Yearning to Reconnect',          act_number: 3, beat_label: 'Yearning',            notes: 'The desire to reconnect — with others, with herself — arises from the descent.' },
    { title: 'Healing the Mother/Daughter Split',     act_number: 3, beat_label: 'Healing M/D',         notes: 'A specific reconciliation, literal or internal, begins repairing the original separation.' },
    { title: 'Healing the Wounded Masculine',         act_number: 3, beat_label: 'Healing Masculine',   notes: 'The heroine reclaims healthy ambition and agency — without the wound driving it.' },
    { title: 'Integration of Feminine and Masculine', act_number: 3, beat_label: 'Integration',         notes: 'Both exist simultaneously. Not balance — wholeness. Show it in the final image.' },
  ],

  'story-spine': [
    { title: 'Once upon a time...',          act_number: 1, beat_label: 'Once upon a time',     notes: 'Establish the protagonist and their ordinary world. Who are they and what is stable?' },
    { title: 'Every day...',                 act_number: 1, beat_label: 'Every day',             notes: 'The rhythm of ordinary existence. The repeating pattern that makes the disruption land.' },
    { title: 'Until one day...',             act_number: 1, beat_label: 'Until one day',         notes: 'The single event that breaks the pattern. The inciting incident.' },
    { title: 'Because of that...',           act_number: 2, beat_label: 'Because of that (1)',   notes: 'First direct consequence. Must follow causally from the disruption.' },
    { title: 'Because of that... (escalate)', act_number: 2, beat_label: 'Because of that (2)', notes: 'Second consequence. Stakes rise. The domino effect escalates.' },
    { title: 'Until finally...',             act_number: 3, beat_label: 'Until finally',         notes: 'The climactic moment. The escalation ends and resolution begins.' },
    { title: 'Ever since then...',           act_number: 3, beat_label: 'Ever since then',       notes: 'The new ordinary. Not just aftermath — a changed equilibrium.' },
  ],

  'five-act': [
    { title: 'Act I — Exposition',                   act_number: 1, beat_label: 'Act I',    notes: 'Establish world, protagonist, and the fault line in the stable order.' },
    { title: 'Act II — Rising Action',               act_number: 2, beat_label: 'Act II',   notes: 'Escalating complications. Each step makes the Climax more inevitable.' },
    { title: 'Act III — Climax / Turn',              act_number: 3, beat_label: 'Act III',  notes: 'Maximum tension. The point of no return. The play\'s direction inverts here.' },
    { title: 'Act IV — Falling Action',              act_number: 4, beat_label: 'Act IV',   notes: 'Consequences of the Climax. Last attempts to recover. Threads pull taut.' },
    { title: 'Act V — Catastrophe or Denouement',   act_number: 5, beat_label: 'Act V',    notes: 'The final cost or resolution. What the play has been about, confirmed.' },
  ],

  'romancing-the-beat': [
    { title: 'The Meet',              act_number: 1, beat_label: 'Meet',               notes: 'How do the leads meet? What specific quality does each notice in the other?' },
    { title: 'Wanting',               act_number: 1, beat_label: 'Wanting',            notes: 'The first honest moment of wanting — however resisted, it\'s there.' },
    { title: 'Misbeliefs & Wounds',   act_number: 1, beat_label: 'Misbeliefs',         notes: 'What internal wound does each character carry? Show it in behavior.' },
    { title: 'No Way This Is Going Anywhere', act_number: 1, beat_label: 'No Way',     notes: 'The conscious decision that this is not happening — while it already is.' },
    { title: 'Humming Along',         act_number: 2, beat_label: 'Humming Along',      notes: 'Growing closeness, small vulnerabilities, guard coming down incrementally.' },
    { title: 'Shiny Hoo-Ha Moment',   act_number: 2, beat_label: 'Shiny Hoo-Ha',      notes: 'Peak connection — the false summit that makes the Dark Moment hit harder.' },
    { title: 'Resonance',             act_number: 2, beat_label: 'Resonance',          notes: 'True recognition. Not attraction — one person truly sees the other.' },
    { title: 'The Swoon',             act_number: 2, beat_label: 'Swoon',              notes: 'Maximum romantic escalation. Both characters are fully, undeniably in it.' },
    { title: 'Deepening',             act_number: 2, beat_label: 'Deepening',          notes: 'A vulnerability is shared. Something true is offered that isn\'t usually offered.' },
    { title: 'Commitment Freakout',   act_number: 2, beat_label: 'Freakout',           notes: 'The misbelief resurfaces at the worst possible moment. One or both pull back.' },
    { title: 'The Dark Moment',       act_number: 3, beat_label: 'Dark Moment',        notes: 'The relationship collapses. The misbeliefs are confirmed — or feel confirmed.' },
    { title: 'Groveling / Grand Gesture', act_number: 3, beat_label: 'Grand Gesture', notes: 'A gesture that costs something and proves transformation, not just feeling.' },
    { title: 'Happily Ever After',    act_number: 3, beat_label: 'HEA',               notes: 'Final moment. Must show the specific misbeliefs healed. Show receiving, not just giving.' },
  ],

  'virgins-promise': [
    { title: 'Dependent World',              act_number: 1, beat_label: 'Dependent World',  notes: 'The world that defines and constrains the Virgin. Show both the love and the constriction.' },
    { title: 'Price of Conformity',          act_number: 1, beat_label: 'Price',            notes: 'The specific cost of remaining acceptable. Show in behavior, not statement.' },
    { title: 'Opportunity to Shine',         act_number: 1, beat_label: 'Opportunity',      notes: 'A glimpse of her full potential. May be small. It is enough to ignite something.' },
    { title: 'Dresses the Part',             act_number: 1, beat_label: 'Dresses the Part', notes: 'Trying on the identity of who she could be — privately, tentatively.' },
    { title: 'Secret World',                 act_number: 2, beat_label: 'Secret World',     notes: 'Where she builds and inhabits a space to fully be herself without consequence.' },
    { title: 'No Longer Fitting In',         act_number: 2, beat_label: 'Not Fitting In',   notes: 'The double life creates friction. The Secret World leaks into the Dependent World.' },
    { title: 'Mentor Appears',               act_number: 2, beat_label: 'Mentor',           notes: 'Someone who believes in her potential — not to rescue her, but to witness it.' },
    { title: 'Fully Shines',                 act_number: 2, beat_label: 'Fully Shines',     notes: 'She fully expresses her potential. The world has not seen it yet. This is the zenith.' },
    { title: 'Kingdom in Chaos',             act_number: 3, beat_label: 'Chaos',            notes: 'The Secret World\'s existence destabilizes the Dependent World. Truth is out.' },
    { title: 'Wanders in the Wilderness',    act_number: 3, beat_label: 'Wilderness',       notes: 'Both worlds have collapsed. She doesn\'t know what she is yet. This is necessary.' },
    { title: 'Choice to be Taken or Reclaimed', act_number: 3, beat_label: 'Choice',       notes: 'The central crisis: Dependent World\'s terms vs. her fully shining self. Both options cost something.' },
    { title: 'The Kingdom is Brighter',      act_number: 3, beat_label: 'Kingdom Brighter', notes: 'Her choice transforms the world she came from, even if some of it falls away.' },
    { title: 'Rescue of the Prince',         act_number: 3, beat_label: 'Rescue Prince',   notes: 'Her transformation frees someone else who was also imprisoned in the old order.' },
  ],

  'mice-quotient': [
    { title: 'Dominant story type',                         act_number: 1, beat_label: 'Story Type',   notes: 'M, I, C, or E? Name the dominant thread and the contract it makes with the reader.' },
    { title: 'Milieu — Enter, explore, leave or stay',      act_number: 1, beat_label: 'Milieu',       notes: 'If present: when does the protagonist enter the Milieu thread, and what does the world require?' },
    { title: 'Inquiry — Pose, investigate, answer',         act_number: 1, beat_label: 'Inquiry',      notes: 'If present: what question is posed, and when will it be answered?' },
    { title: 'Character — Show, force change, show new',    act_number: 2, beat_label: 'Character',    notes: 'If present: who is the protagonist before and after? What forces the change?' },
    { title: 'Event — Establish order, disrupt, resolve',   act_number: 2, beat_label: 'Event',        notes: 'If present: what order is disrupted, and what new order is accepted at the end?' },
    { title: 'Nest additional types',                       act_number: 2, beat_label: 'Nesting',      notes: 'Every nested thread must open before any thread closes. Map the nesting order.' },
    { title: 'Close nested threads before dominant closes', act_number: 3, beat_label: 'Closing',      notes: 'Trace each thread to its close. The dominant type closes last.' },
  ],

  'w-plot': [
    { title: 'Opening State',                        act_number: 1, beat_label: 'Opening',        notes: 'Establish both the external plot and the internal emotional arc at baseline.' },
    { title: 'Downward — External complication',     act_number: 1, beat_label: 'Complication',   notes: 'External pressure begins. How does it interact with the emotional wound?' },
    { title: 'Crossing 1 — External triggers internal', act_number: 1, beat_label: 'Crossing 1',  notes: 'First crossing: external pressure triggers an internal shift, or resolve pushes plot upward.' },
    { title: 'Upward — False hope',                  act_number: 2, beat_label: 'False Hope',     notes: 'Apparent success on both tracks. The false summit before the collapse.' },
    { title: 'Crossing 2 — Wound surfaces in plot',  act_number: 2, beat_label: 'Crossing 2',     notes: 'The internal wound directly causes an external setback. The wound has plot consequences.' },
    { title: 'Downward — Midpoint reversal',         act_number: 2, beat_label: 'Midpoint',       notes: 'Both tracks hit bottom simultaneously. External failure and internal despair together.' },
    { title: 'Crossing 3 — Darkest convergence',     act_number: 3, beat_label: 'Crossing 3',     notes: 'External failure and internal despair meet at the All Is Lost point.' },
    { title: 'Upward — Internal resolution first',   act_number: 3, beat_label: 'Internal Res.',  notes: 'The internal track resolves first. This is what enables the external breakthrough.' },
    { title: 'Crossing 4 — Victory reflects transformation', act_number: 3, beat_label: 'Crossing 4', notes: 'Plot victory specifically embodies the emotional transformation. Both tracks confirm.' },
    { title: 'Resolution — Both tracks land',        act_number: 3, beat_label: 'Resolution',     notes: 'Final state of both tracks. The resolution is whole, not just external.' },
  ],

  'harmon-pixar-hybrid': [
    { title: 'Map Story Circle (8 emotional beats)',           act_number: 1, beat_label: 'Circle Map',         notes: 'Walk all 8 Story Circle beats first. You, Need, Go, Search, Find, Take, Return, Change.' },
    { title: 'Map Save the Cat (15 structural beats)',         act_number: 1, beat_label: 'Structure Map',      notes: 'Now map the structural beats over the emotional arc. Find the alignment.' },
    { title: 'Opening Image = You (zone of comfort)',          act_number: 1, beat_label: 'Opening/You',        notes: 'The Opening Image is also the You beat. Show comfort zone and visual thesis simultaneously.' },
    { title: 'Catalyst = Need (want something)',               act_number: 1, beat_label: 'Catalyst/Need',      notes: 'The Catalyst activates the character\'s Need. These are ideally the same event.' },
    { title: 'Break into Two = Go (unfamiliar situation)',     act_number: 1, beat_label: 'B2/Go',              notes: 'The protagonist enters both the new story world and the unfamiliar territory at once.' },
    { title: 'Fun & Games = Search (adapt, struggle)',         act_number: 2, beat_label: 'F&G/Search',         notes: 'The promise of the premise plays out while the protagonist adapts imperfectly.' },
    { title: 'Midpoint = Find (get what they wanted)',         act_number: 2, beat_label: 'Midpoint/Find',      notes: 'The Find arrives as a false summit. They have what they wanted — and it immediately costs them.' },
    { title: 'All Is Lost = Take (pay the price)',             act_number: 2, beat_label: 'AIL/Take',           notes: 'The most powerful alignment: structural low point and emotional cost are the same event.' },
    { title: 'Break into Three = Return (to familiar)',        act_number: 3, beat_label: 'B3/Return',          notes: 'The protagonist moves back with new knowledge. The B Story idea maps to the Return perspective.' },
    { title: 'Final Image = Change (they are different)',      act_number: 3, beat_label: 'FI/Change',          notes: 'Final Image must prove the Change beat. Transformation must be visible in the closing image.' },
  ],
}

// ─── Beat Tracker Tab ──────────────────────────────────────────────────────────

function BeatTrackerTab({ project, toast, scenes, setScenes }) {
  const beats    = FRAMEWORK_BEATS[project.framework] || []
  const fwName   = frameworkLabel[project.framework] || project.framework || 'Unknown'
  const [notes,      setNotes]      = useState({})
  const [saved,      setSaved]      = useState({})
  const [loading,    setLoading]    = useState(true)
  const [addingTo,   setAddingTo]   = useState(null)   // beat label currently adding scene to
  const [sceneForm,  setSceneForm]  = useState({ title: '', notes: '' })
  const [savingScene, setSavingScene] = useState(false)
  const saveTimers = useRef({})

  useEffect(() => {
    async function load() {
      if (!project.id) return
      const { data, error } = await supabase
        .from('session_beats')
        .select('beat_label, notes')
        .eq('project_id', project.id)
      if (!error && data) {
        const map = {}
        data.forEach(r => { map[r.beat_label] = r.notes || '' })
        setNotes(map)
      }
      setLoading(false)
    }
    load()
  }, [project.id])

  function handleChange(beatLabel, value) {
    setNotes(prev => ({ ...prev, [beatLabel]: value }))
    setSaved(prev => ({ ...prev, [beatLabel]: false }))
    clearTimeout(saveTimers.current[beatLabel])
    saveTimers.current[beatLabel] = setTimeout(() => saveBeat(beatLabel, value), 900)
  }

  async function saveBeat(beatLabel, value) {
    const { error } = await supabase
      .from('session_beats')
      .upsert({ project_id: project.id, beat_label: beatLabel, notes: value }, { onConflict: 'project_id,beat_label' })
    if (!error) setSaved(prev => ({ ...prev, [beatLabel]: true }))
    else toast.error('Could not save beat note.')
  }

  function openAddScene(beatLabel, actNumber) {
    setAddingTo(beatLabel)
    setSceneForm({ title: '', notes: '', act_number: actNumber })
  }

  async function addSceneForBeat() {
    if (!sceneForm.title.trim()) return
    setSavingScene(true)
    const { data, error } = await supabase
      .from('scenes')
      .insert({
        project_id:  project.id,
        title:       sceneForm.title.trim(),
        notes:       sceneForm.notes.trim() || null,
        beat_label:  addingTo,
        act_number:  sceneForm.act_number || 1,
        order_index: scenes.length,
        status:      'draft',
      })
      .select()
      .single()
    if (data) {
      setScenes(prev => [...prev, data])
      toast.success('Scene added.')
      setAddingTo(null)
      setSceneForm({ title: '', notes: '' })
    } else {
      toast.error('Could not add scene.')
      console.error(error)
    }
    setSavingScene(false)
  }

  if (project.framework === 'freeform' || !project.framework) {
    return (
      <div style={{ padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '440px', margin: '0 auto' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--amber-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-dark)' }}>Beat Tracker needs a framework</h3>
          <p style={{ color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.6 }}>
            This project is set to <strong>Freeform</strong>. To use Beat Tracker, edit the project and switch to a structured framework like Save the Cat or Hero&apos;s Journey.
          </p>
        </div>
      </div>
    )
  }

  const stubs = frameworkBeatStubs[project.framework] || []
  function getStubNote(beatLabel) {
    const stub = stubs.find(s => s.beat_label === beatLabel || s.title === beatLabel)
    return stub?.notes || null
  }

  const completed = beats.filter(b => (notes[b] || '').trim().length > 0).length
  const pct = beats.length > 0 ? Math.round((completed / beats.length) * 100) : 0
  const beatStubList = stubs.length > 0 ? stubs : beats.map((b) => ({ beat_label: b, title: b, act_number: 1 }))

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '4px' }}>Beat Tracker</h2>
          <p style={{ color: 'var(--text-soft)', fontSize: '14px' }}>
            {fwName} &middot; Map your beats, then add scenes under each one
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{completed}/{beats.length} beats</span>
          <div style={{ width: '120px', height: '6px', borderRadius: '99px', background: 'var(--border)' }}>
            <div style={{ width: `${pct}%`, height: '100%', borderRadius: '99px', background: 'var(--green)', transition: 'width 0.4s ease' }} />
          </div>
          <span style={{ fontSize: '13px', color: pct === 100 ? 'var(--green)' : 'var(--text-soft)', fontFamily: 'var(--font-mono)', fontWeight: pct === 100 ? '600' : '400' }}>{pct}%</span>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ height: '110px', borderRadius: '10px', background: 'linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)', backgroundSize: '200% 100%' }} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {beats.map((beat, idx) => {
            const stubData   = beatStubList.find(s => s.beat_label === beat || s.title === beat)
            const actNumber  = stubData?.act_number || 1
            const val        = notes[beat] || ''
            const isDone     = val.trim().length > 0
            const isSaved    = saved[beat]
            const beatScenes = scenes.filter(s => s.beat_label === beat)
            const isAdding   = addingTo === beat

            return (
              <div key={beat} style={{
                border: `1px solid ${isDone ? 'var(--green-border)' : 'var(--border)'}`,
                borderLeft: `4px solid ${isDone ? 'var(--green)' : 'var(--border)'}`,
                borderRadius: '12px',
                background: '#fff',
                overflow: 'hidden',
                boxShadow: isDone ? 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.9)' : 'var(--shadow-xs)',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}>
                <div style={{ padding: '16px 20px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                      background: isDone ? 'var(--green)' : 'var(--off-white)',
                      border: `2px solid ${isDone ? 'var(--green)' : 'var(--border)'}`,
                      color: isDone ? '#fff' : 'var(--text-soft)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700',
                      transition: 'all 0.2s ease',
                    }}>
                      {isDone
                        ? <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                        : idx + 1
                      }
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', fontFamily: 'var(--font-ui)', lineHeight: '1.3' }}>{beat}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {val.length > 0 && (
                            <span style={{ fontSize: '10px', color: isSaved ? 'var(--green)' : 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                              {isSaved ? 'Saved' : 'Saving…'}
                            </span>
                          )}
                          <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-soft)', background: 'var(--off-white)', padding: '2px 7px', borderRadius: '4px', border: '1px solid var(--border)' }}>
                            Act {actNumber}
                          </span>
                        </div>
                      </div>
                      {!isDone && getStubNote(beat) && (
                        <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: '1.55', marginBottom: '8px', fontStyle: 'italic' }}>
                          {getStubNote(beat)}
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ paddingLeft: '40px', marginBottom: '12px' }}>
                    <textarea
                      value={val}
                      onChange={e => handleChange(beat, e.target.value)}
                      placeholder={`What happens at "${beat}" in your story?`}
                      rows={2}
                      style={{
                        width: '100%', resize: 'vertical',
                        fontFamily: 'var(--font-ui)', fontSize: '14px',
                        color: 'var(--text-dark)', lineHeight: 1.55,
                        border: '1px solid var(--border)', borderRadius: '7px',
                        padding: '9px 12px', background: isDone ? 'var(--green-pale)' : '#fff',
                        outline: 'none', boxSizing: 'border-box',
                        transition: 'border-color 0.15s, background 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = '#fff' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = isDone ? 'var(--green-pale)' : '#fff' }}
                    />
                  </div>
                </div>

                {beatScenes.length > 0 && (
                  <div style={{ paddingLeft: '60px', paddingRight: '20px', paddingBottom: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {beatScenes.map(sc => (
                      <div key={sc.id} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '7px 12px', borderRadius: '7px',
                        background: 'var(--off-white)', border: '1px solid var(--border)',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                          <rect x="1" y="1" width="10" height="10" rx="2" stroke="var(--text-soft)" strokeWidth="1.2"/>
                          <path d="M4 4h4M4 6h4M4 8h2" stroke="var(--text-soft)" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                        <span style={{ fontSize: '13px', color: 'var(--text-dark)', fontFamily: 'var(--font-ui)', flex: 1 }}>{sc.title}</span>
                        <span style={{
                          fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em',
                          color: sc.status === 'complete' ? 'var(--green)' : 'var(--text-soft)',
                          background: sc.status === 'complete' ? 'var(--green-pale)' : 'var(--border)',
                          padding: '2px 6px', borderRadius: '4px',
                        }}>{sc.status || 'draft'}</span>
                      </div>
                    ))}
                  </div>
                )}

                {isAdding && (
                  <div style={{ margin: '0 20px 16px 60px', padding: '14px', background: 'var(--green-pale)', border: '1.5px solid var(--green-border)', borderRadius: '10px' }}>
                    <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--green)', marginBottom: '10px' }}>
                      New scene for &quot;{beat}&quot;
                    </p>
                    <input
                      autoFocus
                      value={sceneForm.title}
                      onChange={e => setSceneForm(f => ({ ...f, title: e.target.value }))}
                      placeholder="Scene title"
                      onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); addSceneForBeat() } if (e.key === 'Escape') setAddingTo(null) }}
                      style={{
                        width: '100%', padding: '8px 12px', borderRadius: '6px',
                        border: '1.5px solid var(--green-border)', background: '#fff',
                        fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--text-dark)',
                        outline: 'none', boxSizing: 'border-box', marginBottom: '8px',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--green)'}
                      onBlur={e => e.target.style.borderColor = 'var(--green-border)'}
                    />
                    <textarea
                      value={sceneForm.notes}
                      onChange={e => setSceneForm(f => ({ ...f, notes: e.target.value }))}
                      placeholder="Brief notes (optional)"
                      rows={2}
                      style={{
                        width: '100%', padding: '8px 12px', borderRadius: '6px',
                        border: '1.5px solid var(--green-border)', background: '#fff',
                        fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-dark)',
                        outline: 'none', boxSizing: 'border-box', resize: 'vertical', marginBottom: '10px',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--green)'}
                      onBlur={e => e.target.style.borderColor = 'var(--green-border)'}
                    />
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={addSceneForBeat}
                        disabled={savingScene || !sceneForm.title.trim()}
                        style={{
                          padding: '7px 16px', borderRadius: '6px', border: 'none',
                          background: sceneForm.title.trim() ? 'var(--green)' : 'var(--border)',
                          color: sceneForm.title.trim() ? '#fff' : 'var(--text-soft)',
                          fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600',
                          cursor: sceneForm.title.trim() ? 'pointer' : 'not-allowed',
                        }}
                      >
                        {savingScene ? 'Adding…' : 'Add scene'}
                      </button>
                      <button
                        onClick={() => setAddingTo(null)}
                        style={{ padding: '7px 14px', borderRadius: '6px', border: '1px solid var(--border)', background: '#fff', fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div style={{ paddingLeft: '60px', paddingRight: '20px', paddingBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {beatScenes.length > 0 && (
                    <span style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                      {beatScenes.length} scene{beatScenes.length !== 1 ? 's' : ''}
                    </span>
                  )}
                  {!isAdding && (
                    <button
                      onClick={() => openAddScene(beat, actNumber)}
                      className="btn-dashed-add"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        padding: '5px 12px', borderRadius: '6px',
                        fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600',
                        color: 'var(--green)', cursor: 'pointer',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                      Add scene
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── Scenes Tab ────────────────────────────────────────────────────────────────

function ScenesTab({ projectId, scenes, setScenes, framework, toast }) {
  const [adding,      setAdding]      = useState(false)
  const [form,        setForm]        = useState({ title: '', act_number: 1, beat_label: '', notes: '' })
  const [saving,      setSaving]      = useState(false)
  const [autoFilling, setAutoFilling] = useState(false)
  const [confirmFill, setConfirmFill] = useState(false)

  const stubs = frameworkBeatStubs[framework] || []

  async function autoFill() {
    if (!stubs.length) return
    setAutoFilling(true)
    setConfirmFill(false)
    const inserts = stubs.map((s, i) => ({
      project_id:  projectId,
      title:       s.title,
      act_number:  s.act_number,
      beat_label:  s.beat_label,
      notes:       s.notes,
      order_index: scenes.length + i,
      status:      'draft',
    }))
    const { data, error } = await supabase.from('scenes').insert(inserts).select()
    if (data) {
      setScenes(prev => [...prev, ...data])
      toast.success(`${data.length} beat stubs added.`)
    } else {
      toast.error('Could not auto-fill beats.')
      console.error(error)
    }
    setAutoFilling(false)
  }

  const byAct = scenes.reduce((acc, s) => {
    const act = s.act_number || 1
    if (!acc[act]) acc[act] = []
    acc[act].push(s)
    return acc
  }, {})

  async function addScene() {
    if (!form.title.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('scenes')
      .insert({ project_id: projectId, ...form, title: form.title.trim(), order_index: scenes.length })
      .select().single()
    if (data) {
      setScenes(prev => [...prev, data])
      setForm({ title: '', act_number: form.act_number, beat_label: '', notes: '' })
      setAdding(false)
      toast.success('Scene added.')
    } else {
      toast.error('Could not add scene.')
    }
    setSaving(false)
  }

  async function updateScene(sceneId, fields) {
    const { data } = await supabase.from('scenes').update(fields).eq('id', sceneId).select().single()
    if (data) setScenes(prev => prev.map(s => s.id === sceneId ? data : s))
  }

  async function deleteScene(sceneId) {
    await supabase.from('scenes').delete().eq('id', sceneId)
    setScenes(prev => prev.filter(s => s.id !== sceneId))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)' }}>
          {scenes.length} scene{scenes.length !== 1 ? 's' : ''}
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {stubs.length > 0 && scenes.length === 0 && !confirmFill && (
            <button
              className="btn-ghost"
              onClick={() => setConfirmFill(true)}
              style={{ fontSize: '12px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Auto-fill {stubs.length} beats
            </button>
          )}
          {confirmFill && (
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', background: 'var(--amber-pale, #FEF3C7)', border: '1px solid var(--amber)', borderRadius: '8px', padding: '6px 12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--amber)' }}>Add {stubs.length} beat stubs?</span>
              <button
                className="btn-primary"
                onClick={autoFill}
                disabled={autoFilling}
                style={{ fontSize: '12px', padding: '5px 12px' }}
              >
                {autoFilling ? 'Adding…' : 'Yes, add'}
              </button>
              <button
                className="btn-ghost"
                onClick={() => setConfirmFill(false)}
                style={{ fontSize: '12px', padding: '5px 10px' }}
              >
                Cancel
              </button>
            </div>
          )}
          <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
            + Add scene
          </button>
        </div>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--green-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>New Scene</p>
          <div className="form-3col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Scene title *</label>
              <input className="input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="What happens in this scene?" />
            </div>
            <div>
              <label style={labelStyle}>Act</label>
              <select className="input" value={form.act_number} onChange={e => setForm({...form, act_number: parseInt(e.target.value)})}>
                <option value={1}>Act 1</option>
                <option value={2}>Act 2</option>
                <option value={3}>Act 3</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Beat label</label>
              <input className="input" value={form.beat_label} onChange={e => setForm({...form, beat_label: e.target.value})} placeholder="e.g. Catalyst" />
            </div>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Notes</label>
            <textarea className="input" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="What must this scene accomplish?" style={{ minHeight: '64px' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addScene} disabled={!form.title.trim() || saving} style={{ fontSize: '13px', padding: '8px 16px', opacity: form.title.trim() ? 1 : 0.4 }}>
              {saving ? 'Saving…' : 'Add scene'}
            </button>
            <button className="btn-ghost" onClick={() => setAdding(false)} style={{ fontSize: '13px', padding: '8px 16px' }}>Cancel</button>
          </div>
        </div>
      )}

      {scenes.length === 0 && !adding && (
        <div className="empty-state">
          <h3>No scenes yet</h3>
          <p>Every story is a sequence of scenes. Add your first —or use <strong>Auto-fill beats</strong> above to pre-populate the {stubs.length} structural beats from your {framework ? framework.replace(/-/g,' ') : ''} framework.</p>
        </div>
      )}

      {/* Framework progress bar */}
      {scenes.length > 0 && stubs.length > 0 && (
        <FrameworkProgressBar framework={framework} scenes={scenes} stubs={stubs} />
      )}

      {/* Scenes grouped by act */}
      {Object.entries(byAct).sort(([a],[b]) => a - b).map(([act, actScenes]) => (
        <div key={act} style={{ marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Act {act} · {actScenes.length} scene{actScenes.length !== 1 ? 's' : ''}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {actScenes.map(scene => (
              <SceneRow key={scene.id} scene={scene} framework={framework} onUpdate={(f) => updateScene(scene.id, f)} onDelete={() => deleteScene(scene.id)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function SceneRow({ scene, framework, onUpdate, onDelete }) {
  const [expanded,    setExpanded]    = useState(false)
  const [subTab,      setSubTab]      = useState('notes') // notes | draft | guide
  const [editing,     setEditing]     = useState(false)
  const [form,        setForm]        = useState({ ...scene })
  const [saving,      setSaving]      = useState(false)
  const [draftText,   setDraftText]   = useState(scene.content || '')
  const [draftSaving, setDraftSaving] = useState(false)
  const draftTimer = React.useRef(null)

  const wordCount = draftText.trim() ? draftText.trim().split(/\s+/).length : 0
  const hasGuidance = !!getBeatGuidance(framework, scene.beat_label)

  async function save() {
    setSaving(true)
    await onUpdate(form)
    setSaving(false)
    setEditing(false)
  }

  function handleDraftChange(val) {
    setDraftText(val)
    if (draftTimer.current) clearTimeout(draftTimer.current)
    draftTimer.current = setTimeout(async () => {
      setDraftSaving(true)
      await onUpdate({ content: val })
      setDraftSaving(false)
    }, 900)
  }

  return (
    <div className="card" style={{ padding: '14px 18px' }}>
      {/* Row header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flex: 1 }} onClick={() => setExpanded(!expanded)}>
          {scene.beat_label && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '2px 7px',
              borderRadius: '4px', background: 'var(--green-pale)', color: 'var(--green)',
              border: '1px solid var(--green-border)', flexShrink: 0,
            }}>{scene.beat_label}</span>
          )}
          <p style={{ fontSize: '14px', fontWeight: '500' }}>{scene.title}</p>
          {wordCount > 0 && (
            <span style={{ fontSize: '10px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
              {wordCount}w
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={() => onUpdate({ status: scene.status === 'complete' ? 'draft' : 'complete' })}
            style={{
              background: scene.status === 'complete' ? 'var(--green)' : 'transparent',
              border: `1px solid ${scene.status === 'complete' ? 'var(--green)' : 'var(--border)'}`,
              borderRadius: '4px', width: '22px', height: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            title={scene.status === 'complete' ? 'Mark incomplete' : 'Mark complete'}
          >
            {scene.status === 'complete' && (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5l2.5 2.5L9 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-soft)', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
          {editing ? (
            <div>
              <div className="form-3col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div><label style={labelStyle}>Title</label><input className="input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} /></div>
                <div><label style={labelStyle}>Act</label>
                  <select className="input" value={form.act_number} onChange={e => setForm({...form, act_number: parseInt(e.target.value)})}>
                    <option value={1}>Act 1</option><option value={2}>Act 2</option><option value={3}>Act 3</option>
                  </select>
                </div>
                <div><label style={labelStyle}>Beat</label><input className="input" value={form.beat_label || ''} onChange={e => setForm({...form, beat_label: e.target.value})} /></div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Notes</label>
                <textarea className="input" value={form.notes || ''} onChange={e => setForm({...form, notes: e.target.value})} style={{ minHeight: '60px' }} />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-primary" onClick={save} disabled={saving} style={{ fontSize: '12px', padding: '6px 12px' }}>{saving ? 'Saving...' : 'Save'}</button>
                <button className="btn-ghost" onClick={() => { setEditing(false); setForm({...scene}) }} style={{ fontSize: '12px', padding: '6px 12px' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              {/* Sub-tabs */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                {[
                  { key: 'notes', label: 'Notes' },
                  { key: 'draft', label: wordCount > 0 ? `Draft (${wordCount}w)` : 'Draft' },
                  ...(hasGuidance ? [{ key: 'guide', label: 'Beat Guide' }] : []),
                ].map(t => (
                  <button key={t.key} onClick={() => setSubTab(t.key)} style={{
                    padding: '4px 12px', borderRadius: '14px', fontSize: '11px', cursor: 'pointer',
                    fontFamily: 'var(--font-ui)', fontWeight: subTab === t.key ? '700' : '500',
                    background: subTab === t.key ? 'var(--green)' : '#F9FAFB',
                    color: subTab === t.key ? '#fff' : 'var(--text-soft)',
                    border: subTab === t.key ? '1px solid var(--green)' : '1px solid var(--border)',
                  }}>{t.label}</button>
                ))}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button className="btn-ghost" onClick={() => setEditing(true)} style={{ fontSize: '11px', padding: '4px 10px' }}>Edit details</button>
                  <button onClick={onDelete} style={{ background: 'none', border: 'none', fontSize: '11px', color: '#991B1B', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Delete</button>
                </div>
              </div>

              {/* Notes tab */}
              {subTab === 'notes' && (
                <div>
                  {scene.notes
                    ? <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.65' }}>{scene.notes}</p>
                    : <p style={{ fontSize: '13px', color: 'var(--text-soft)', fontStyle: 'italic' }}>No notes yet. Use Edit details to add planning notes for this scene.</p>
                  }
                </div>
              )}

              {/* Draft tab */}
              {subTab === 'draft' && (
                <div>
                  <textarea
                    value={draftText}
                    onChange={e => handleDraftChange(e.target.value)}
                    placeholder="Write the scene here. This is your drafting space — prose, script pages, or rough notes. Auto-saves as you type."
                    style={{
                      width: '100%', minHeight: '220px', borderRadius: '8px',
                      border: '1px solid var(--border)', padding: '14px 16px',
                      fontSize: '14px', fontFamily: 'var(--font-body)', lineHeight: '1.75',
                      color: 'var(--text)', background: '#FAFAF9', resize: 'vertical',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                      {wordCount > 0 ? `${wordCount} words` : 'Start writing'}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)' }}>
                      {draftSaving ? 'Saving...' : wordCount > 0 ? 'Saved' : ''}
                    </span>
                  </div>
                </div>
              )}

              {/* Beat guide tab */}
              {subTab === 'guide' && scene.beat_label && (
                <BeatGuidancePanel framework={framework} beatLabel={scene.beat_label} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}


// ─── Beat guidance (Level 1 — detail panels) ─────────────────────────────────
// Keyed by framework slug → beat_label → { page, guidance, mistake, question }

const BEAT_GUIDANCE = {
  'save-the-cat': {
    'Opening Image': {
      page: 'p. 1',
      guidance: 'A single image that captures the protagonist\'s problem — their world before anything changes. It should be the opposite of the Final Image. The audience doesn\'t know that yet, but you do.',
      mistake: 'Making it action or intrigue instead of character. The opening image is a still life, not a hook. It establishes tone and emotional register, not plot.',
      question: 'If this image were the only thing you showed, what would the audience feel about the world your protagonist inhabits?',
    },
    'Theme Stated': {
      page: 'p. 5',
      guidance: 'Someone — usually not the protagonist — says something to them that is the thematic argument of the entire film. The protagonist doesn\'t understand it yet. They may even dismiss it. By the end, they will have lived the answer.',
      mistake: 'Having the protagonist say it. The protagonist cannot state the theme because they haven\'t earned the understanding yet. It must come from outside.',
      question: 'What is the one thing your protagonist needs to learn? Now put it in someone else\'s mouth as an offhand remark.',
    },
    'Set-Up': {
      page: 'pp. 1–10',
      guidance: 'Introduce every character, flaw, and circumstance that needs to be addressed by the end. Everything planted here must pay off. Everything that pays off at the end must be planted here.',
      mistake: 'Setting up things that never pay off, or paying off things that were never set up. The set-up and the finale are mirror images. Build them together.',
      question: 'What six things in the protagonist\'s ordinary world are going to be transformed, fixed, or destroyed by the end?',
    },
    'Catalyst': {
      page: 'p. 12',
      guidance: 'The life-changing event that disrupts the protagonist\'s world. Done TO them — not by them. It is a door opening, not a choice to walk through. The choice comes later.',
      mistake: 'Making it an active decision by the protagonist. At the Catalyst, the world acts on the protagonist. Their response is the Debate. Their choice is the Break into Two.',
      question: 'What happens to your protagonist that makes it impossible for them to continue their ordinary life unchanged?',
    },
    'Debate': {
      page: 'pp. 12–25',
      guidance: 'The protagonist hesitates. Should they take the challenge? They ask the thematic question in its most practical form. This is the last moment of the old life.',
      mistake: 'Skipping it in the name of pace. The Debate is what makes the Break into Two meaningful. Without genuine hesitation, the choice has no weight.',
      question: 'What is the last thing holding your protagonist back — and what finally tips them across the line?',
    },
    'Break into Two': {
      page: 'p. 25',
      guidance: 'The protagonist makes an active choice to enter Act 2. Not pushed, not dragged — they choose. This is the most structural beat in the script. It must be a decision the protagonist makes, not something done to them.',
      mistake: 'Making it passive. If the protagonist is carried into Act 2 by circumstances rather than choice, the audience loses their investment. We need to see them decide.',
      question: 'What exactly does your protagonist do — physically, specifically — to cross the threshold into Act 2?',
    },
    'B Story': {
      page: 'p. 30',
      guidance: 'A new character or relationship enters who will carry the theme. The B Story is usually a love story, but it doesn\'t have to be romantic. It is the relationship through which the protagonist will learn what the theme stated.',
      mistake: 'Treating it as subplot decoration. The B Story character is your thematic mirror. They show the protagonist — and the audience — what change is possible.',
      question: 'Who enters the protagonist\'s life at this point, and what do they represent that the protagonist currently lacks?',
    },
    'Fun and Games': {
      page: 'pp. 30–55',
      guidance: 'The promise of the premise delivered. This is what the audience came for. The protagonist explores the upside of the new world before the downside arrives. If your movie is a comedy, this is where the jokes live. If it\'s a thriller, this is where the cool set pieces live.',
      mistake: 'Rushing past it to get to the conflict. Fun and Games is not filler. It is the payoff of your concept. Linger here.',
      question: 'What is the most entertaining version of your premise? Are you actually showing that in this section?',
    },
    'Midpoint': {
      page: 'p. 55',
      guidance: 'False victory or false defeat. The stakes are raised. After this beat, the protagonist becomes fully active — no longer reacting, now initiating. Everything in Act 2B will be driven by the protagonist, not by circumstances.',
      mistake: 'Treating it as just another scene. The Midpoint is the hinge of the whole second act. Something must genuinely shift here — the protagonist\'s understanding, the external stakes, or both.',
      question: 'What happens at the midpoint that makes everything that follows feel more dangerous or more urgent?',
    },
    'Bad Guys Close In': {
      page: 'pp. 55–75',
      guidance: 'External pressure mounts while internal doubt grows. The team the protagonist assembled in Fun and Games begins to fracture. The antagonistic forces — external and internal — start dismantling what was built.',
      mistake: 'Only having external bad guys. The real threat in this section is internal: the protagonist\'s flaw is the bad guy closing in on their soul.',
      question: 'What combination of external attack and internal doubt is threatening to destroy the protagonist right now?',
    },
    'All Is Lost': {
      page: 'p. 75',
      guidance: 'The lowest point. Something must die here — literal, figurative, or symbolic. The whiff of death is mandatory. The protagonist has lost everything they gained in Act 2.',
      mistake: 'Softening it. All Is Lost needs to feel genuinely catastrophic. If the audience doesn\'t believe the protagonist is truly beaten, the Dark Night and the Finale will ring hollow.',
      question: 'What specific thing dies here — a relationship, a dream, a belief, or a literal life — that the protagonist cannot simply recover?',
    },
    'Dark Night of the Soul': {
      page: 'pp. 75–85',
      guidance: 'The protagonist sits in the ashes of All Is Lost and wonders how they could have been so wrong. The answer to their problem must come from within them — not from outside help. This is where the theme is internalized.',
      mistake: 'Having someone else solve it. If a mentor or ally shows up with the answer, the protagonist\'s arc is broken. They must find the answer themselves, even if it\'s triggered by something external.',
      question: 'What does your protagonist realize here that they couldn\'t have understood at the beginning of the story?',
    },
    'Break into Three': {
      page: 'p. 85',
      guidance: 'The A Story and B Story merge. The protagonist has a new idea — and it comes from the B Story relationship. The thematic lesson becomes a practical solution.',
      mistake: 'Having the idea come from plot logic alone. The Break into Three must feel earned emotionally, not just logically. The relationship must be the source of the new understanding.',
      question: 'How does what your protagonist learned from the B Story relationship give them the key to solving the A Story problem?',
    },
    'Finale': {
      page: 'pp. 85–110',
      guidance: 'Execute the new plan using everything learned. Mirror the Set-Up, but with the protagonist transformed. Every thread introduced in Act 1 must be addressed. The old world is dismantled; the new world is built.',
      mistake: 'Resolving only the plot. The finale must resolve the character\'s inner wound as well. Both the external problem and the internal flaw must be addressed.',
      question: 'How does your protagonist use their new understanding to defeat the antagonist AND heal their inner wound simultaneously?',
    },
    'Final Image': {
      page: 'p. 110',
      guidance: 'The opposite of the Opening Image. Proof that change is real and permanent. The same world, but transformed — because the protagonist has been transformed.',
      mistake: 'Making it action or resolution. Like the Opening Image, this is a still life. It is the emotional proof of the journey, not the plot resolution.',
      question: 'What single image would prove to the audience that your protagonist has genuinely changed — not just succeeded?',
    },
  },
  'heros-journey': {
    'Ordinary World': {
      page: 'Act 1 open',
      guidance: 'Establish the hero in their normal world before the adventure begins. Show us who they are, what they value, and crucially — what they stand to lose. The Ordinary World is the emotional baseline everything else is measured against.',
      mistake: 'Making it boring in the name of contrast. The Ordinary World should be appealing enough that we understand why the hero is reluctant to leave it.',
      question: 'What specific thing about the hero\'s ordinary world will they mourn the loss of — and eventually return to changed?',
    },
    'Call to Adventure': {
      page: 'Act 1',
      guidance: 'The hero\'s world is disrupted. A problem, challenge, or opportunity appears that will launch the journey. It presents the central question of the story.',
      mistake: 'Making it too abstract. The call should be concrete and personal — not "the world is in danger" but "someone specific needs this specific thing from you specifically."',
      question: 'What is the specific challenge that only this hero, in this moment, can answer?',
    },
    'Refusal': {
      page: 'Act 1',
      guidance: 'The hero hesitates. They have reasons not to go — fear, obligation, disbelief. The refusal makes the eventual commitment meaningful.',
      mistake: 'Skipping it for pace. The refusal defines what the hero values above adventure. Without it, we don\'t understand what\'s at stake in the choice to go.',
      question: 'What specifically does the hero stand to lose by saying yes — and what does that tell us about their values?',
    },
    'Mentor': {
      page: 'Act 1',
      guidance: 'The hero receives guidance, wisdom, or a tool from someone who has been where they are going. The mentor equips the hero for the journey ahead, then steps back.',
      mistake: 'Making the mentor too available. The mentor cannot do the journey for the hero — they can only prepare them. At some point the mentor must be absent, or the hero will never grow.',
      question: 'What specific gift — knowledge, object, or belief — does the mentor give the hero that they will use at the critical moment?',
    },
    'Threshold': {
      page: 'Act 1 end',
      guidance: 'The hero commits to the adventure. Point of no return. The ordinary world is left behind — physically, emotionally, or both. There is now a before and an after.',
      mistake: 'Being vague about what changes. The threshold crossing should be a specific moment — a door, a departure, a decision — not a gradual drift.',
      question: 'What is the exact moment the hero cannot go back — and do they know it at the time?',
    },
    'Tests / Allies': {
      page: 'Act 2 open',
      guidance: 'The hero learns the rules of the Special World. They face initial tests, make allies, and identify enemies. This section builds the hero\'s team and establishes the world\'s logic.',
      mistake: 'Making it episodic without consequence. Each test should reveal character and raise stakes — not just demonstrate competence.',
      question: 'What does each test here reveal about the hero that they didn\'t know about themselves?',
    },
    'Approach': {
      page: 'Act 2 middle',
      guidance: 'The hero prepares for the central ordeal. Plans are made, the team assembles, and the inmost cave is approached with growing tension.',
      mistake: 'Rushing to the ordeal. The approach builds dread and raises the emotional stakes. Earn the ordeal by making the preparation feel genuinely dangerous.',
      question: 'What does the hero have to face inside themselves before they can face the external ordeal?',
    },
    'Ordeal': {
      page: 'Act 2 midpoint',
      guidance: 'The supreme crisis. The hero faces their greatest fear and must "die" — symbolically or literally — to be reborn with new knowledge. This is the emotional center of the story.',
      mistake: 'Making it only an external battle. The ordeal\'s real drama is internal — what the hero must sacrifice or surrender to pass through.',
      question: 'What does the hero lose here that they thought they couldn\'t survive losing — and how does losing it free them?',
    },
    'Reward': {
      page: 'Act 2 end',
      guidance: 'The hero survives the ordeal and claims their reward — the sword, the knowledge, the treasure, the person. Celebrate the victory, but seeds of the final challenge are already present.',
      mistake: 'Making the reward feel complete. The reward should feel hard-won but also temporary — the road back threatens to take it away.',
      question: 'What has the hero genuinely earned — and what will they have to risk to keep it?',
    },
    'Road Back': {
      page: 'Act 3 open',
      guidance: 'The hero must return to the ordinary world with their reward. New urgency appears — a final threat, a ticking clock, a personal obligation. The choice to return is made.',
      mistake: 'Treating the road back as logistics. It is a renewed commitment to the journey\'s purpose after the ordeal\'s victory. The hero chooses to complete the cycle.',
      question: 'What renewed motivation drives the hero back — is it the same thing that started the journey, or something new they\'ve found?',
    },
    'Resurrection': {
      page: 'Act 3 climax',
      guidance: 'Final test. The hero is "killed" and reborn one last time, with everything at stake. They must use everything learned on the journey to survive. The transformation must be demonstrated, not just stated.',
      mistake: 'Having the hero succeed through skill alone. The resurrection proves transformation — it must require the hero to apply their new self, not just their new abilities.',
      question: 'How does the hero\'s inner transformation — not just their external skills — determine the outcome here?',
    },
    'Return': {
      page: 'Act 3 end',
      guidance: 'The hero returns with the elixir — the gift of wisdom, freedom, or healing — that benefits the ordinary world. The journey is complete. The wound is healed. Show how both worlds are changed.',
      mistake: 'Treating the return as epilogue. The return is proof of the journey\'s meaning. What the hero brings back must visibly change something in the world they left.',
      question: 'What specific thing is different in the ordinary world because this hero made this journey?',
    },
  },
  'story-circle': {
    'You': {
      page: 'Opening',
      guidance: 'Establish the character in their zone of comfort. Show us who they are, what their world feels like from the inside, and crucially — what they lack without knowing they lack it.',
      mistake: 'Making the comfort zone obviously wrong or bad. The character should genuinely belong here. The journey becomes meaningful only if leaving costs something.',
      question: 'What does normal feel like for this character — and what quiet dissatisfaction exists beneath the surface?',
    },
    'Need': {
      page: 'Act 1',
      guidance: 'Establish what the character wants or needs — something they cannot satisfy in their current world. This creates the engine of the story.',
      mistake: 'Making the need too abstract. "She wants love" is not a need. "She needs to prove to her father she can succeed without him" is a need.',
      question: 'What is the specific thing this character wants that their current world cannot provide?',
    },
    'Go': {
      page: 'Act 1 end',
      guidance: 'The character crosses into an unfamiliar situation. They leave their zone of comfort, willingly or not. The threshold is crossed.',
      mistake: 'Making the crossing passive. Even if pushed by circumstances, the character should make some active choice at the moment of crossing.',
      question: 'What is the exact moment the character steps into the unfamiliar — and what do they tell themselves they\'re doing it for?',
    },
    'Search': {
      page: 'Act 2 open',
      guidance: 'Road of trials. The character searches for what they need in the new, unfamiliar world. They adapt, struggle, make alliances, and encounter obstacles.',
      mistake: 'Making the search feel random. Each trial should test a specific dimension of the character — their courage, their values, their relationships.',
      question: 'What is the character learning about themselves through each failed attempt to get what they need?',
    },
    'Find': {
      page: 'Act 2 midpoint',
      guidance: 'The character finds what they were seeking — or something that resembles it. This is a false or complicated victory: they have it, but not in the way they expected.',
      mistake: 'Making the find too clean. What the character finds should complicate the journey, not resolve it. Getting what you want is the beginning of the real problem.',
      question: 'What does the character get here, and why does getting it create a new and harder problem?',
    },
    'Take': {
      page: 'Act 2 end',
      guidance: 'To take the thing fully — to keep it — the character must pay a price. Something must be sacrificed. This is the true cost of the journey.',
      mistake: 'Making the price too abstract. The sacrifice should be concrete and specific — a relationship, a belief, a former self.',
      question: 'What specifically must the character give up to keep what they found — and are they willing to pay that price?',
    },
    'Return': {
      page: 'Act 3 open',
      guidance: 'The character returns to the familiar world, changed. The return tests whether the change is real — can they re-enter the world they came from, as the person they have become?',
      mistake: 'Making the return frictionless. Re-entry should be difficult. The old world pushes back. The change must be defended, not just declared.',
      question: 'What specifically in the familiar world challenges or tests the change the character has made?',
    },
    'Change': {
      page: 'Closing',
      guidance: 'The circle closes. The character is in their world again — but not the same world, because they are not the same person. Show the transformation through behavior and relationship, not through statement.',
      mistake: 'Stating the change instead of showing it. Don\'t have the character explain who they are now. Show them doing something they couldn\'t have done at the start.',
      question: 'What single action at the end proves the character has changed — something they could not have done, or would not have done, in the opening scene?',
    },
  },
  'sequence-approach': {
    'Sequence 1': {
      page: 'pp. 1–15',
      guidance: 'Establish the protagonist and their world. Introduce the status quo and the first disruption — the inciting incident — that sets the story in motion.',
      mistake: 'Front-loading backstory. The first sequence establishes present circumstances, not history. History is revealed only when it serves present action.',
      question: 'What is the protagonist\'s world at the start, and what specific event at the end of this sequence makes it impossible for them to continue unchanged?',
    },
    'Sequence 2': {
      page: 'pp. 15–30',
      guidance: 'The protagonist responds to the inciting incident. Ends at the first act break — the major dramatic question is now fully established and the protagonist commits to Act 2.',
      mistake: 'Letting the protagonist drift into Act 2. The end of Sequence 2 should be a clear, active commitment — a choice with real stakes.',
      question: 'What decision does the protagonist make here that defines the entire Act 2 pursuit?',
    },
    'Sequence 3': {
      page: 'pp. 30–45',
      guidance: 'First attempt. The protagonist tries their initial approach to the Act 2 problem. Old tools meet new challenges. Ends in setback.',
      mistake: 'Making the initial approach work. Sequence 3 should reveal that the protagonist\'s current approach is inadequate — they need to grow.',
      question: 'What does the protagonist try, and why exactly does it fail in a way that reveals a personal limitation?',
    },
    'Sequence 4': {
      page: 'pp. 45–60',
      guidance: 'Escalation and midpoint. The protagonist adjusts and tries again with higher stakes. Ends at the midpoint — a false victory or false defeat that reorients the story.',
      mistake: 'Missing the midpoint\'s reorientation. The midpoint should fundamentally change what the protagonist thinks they\'re fighting for.',
      question: 'What does the protagonist believe they want at the start of this sequence, and how has that belief changed by the end?',
    },
    'Sequence 5': {
      page: 'pp. 60–75',
      guidance: 'The crisis deepens. Things get genuinely worse. The protagonist\'s flaw is exposed. Allies may betray, plans may collapse. Ends approaching All Is Lost.',
      mistake: 'Holding back. Sequence 5 is where the story must genuinely break the protagonist down. Protect nothing.',
      question: 'What is the worst thing that can happen to the protagonist — and are you actually letting it happen here?',
    },
    'Sequence 6': {
      page: 'pp. 75–90',
      guidance: 'All Is Lost through the Dark Night. The protagonist hits bottom, confronts the real problem, and finds the inner resource they need to attempt the finale.',
      mistake: 'Rushing the Dark Night. The protagonist must genuinely believe all is lost before they can find the new approach. Don\'t rescue them too quickly.',
      question: 'What realization does the protagonist come to in the Dark Night that they couldn\'t have reached any other way?',
    },
    'Sequence 7': {
      page: 'pp. 90–105',
      guidance: 'The finale begins. The protagonist executes their final plan with full commitment and transformed understanding. The major dramatic question approaches its answer.',
      mistake: 'Having the protagonist succeed through luck or help. The finale must be won through the protagonist\'s growth — the change they made must be the reason they succeed.',
      question: 'How does the protagonist\'s transformation specifically determine the outcome — not just plot mechanics, but character?',
    },
    'Sequence 8': {
      page: 'pp. 105–120',
      guidance: 'Resolution and final image. All threads resolved. The major dramatic question is answered. The new equilibrium is established. The world is different.',
      mistake: 'Resolving only the plot. Every emotional and thematic thread opened in the first four sequences should find its resolution here.',
      question: 'What is different about the protagonist\'s world now — and would the protagonist at the opening of the story recognize who they\'ve become?',
    },
  },
  'kishotenketsu': {
    'Ki': {
      page: 'Act 1 — Introduction',
      guidance: 'Establish the world, characters, and situation with patience. No conflict is introduced here — the goal is immersive presence. The audience should feel the texture of this world before anything disturbs it. Ki is pure establishment.',
      mistake: 'Rushing to introduce contrast or complication. Ki\'s effectiveness depends entirely on how fully the audience inhabits this world before Ten arrives. The reframing only lands if what it reframes was real.',
      question: 'What specific details — sensory, emotional, relational — make this world feel complete and alive before anything changes?',
    },
    'Shō': {
      page: 'Act 1 — Development',
      guidance: 'Introduce a second element — a character, situation, or idea — that seems unrelated to the first. Develop both threads independently and fully. Do not hint at the connection. Let them exist in parallel, each rendered as if it is its own complete world.',
      mistake: 'Hinting at the connection too early. The power of Ten depends entirely on Shō feeling genuinely separate. If the audience suspects the link before it arrives, the reframing lands as expected rather than discovered.',
      question: 'What is the second element — and how can you develop it fully enough that it feels complete on its own, not like a setup for something else?',
    },
    'Ten': {
      page: 'Act 2 — The Twist',
      guidance: 'The unexpected connection between Ki and Shō arrives. This is not a plot twist — it is a shift in perception. The audience suddenly sees both elements differently because of their relationship to each other. Nothing new happens. What was already there is seen anew.',
      mistake: 'Treating Ten as a plot revelation. It is not "we discover X happened." It is "we now understand X and Y differently because we see them together." The shift is perceptual and emotional, not narrative.',
      question: 'What connection between your two elements reframes both of them — so the audience looks back at the beginning with entirely new eyes?',
    },
    'Ketsu': {
      page: 'Act 3 — Reconciliation',
      guidance: 'Bring the elements together in resolution. Let the meaning land without explaining it. The Ketsu does not conclude with a lesson — it concludes with a felt understanding. Trust the audience to carry the resonance without being handed a thesis.',
      mistake: 'Over-explaining the meaning. Ketsu loses its power the moment it becomes didactic. The connection should feel discovered, not delivered. End on image, on feeling, on the thing itself.',
      question: 'What final image or moment holds both elements in relationship without explaining what that relationship means?',
    },
  },
  'fichtean': {
    'Opening Crisis': {
      page: 'p. 1 — In medias res',
      guidance: 'Drop directly into action at a moment of high tension. No setup. No orientation. The audience will catch up — they are more capable of this than most writers believe. The opening crisis establishes the story\'s emotional register and raises the central dramatic question before any context is provided.',
      mistake: 'Softening the opening because you think the audience needs setup first. They don\'t. The confusion of beginning mid-crisis creates urgent forward momentum. Withhold context intentionally.',
      question: 'What is the most dramatically charged moment in your story — and can you begin there, without explanation, trusting the audience to orient themselves?',
    },
    'Crisis 1': {
      page: 'Early Act 1',
      guidance: 'The first escalating crisis has two functions simultaneously: it advances the external pressure AND it surfaces backstory that contextualizes the present moment. Crisis 1 begins giving the audience the information they need to understand why the opening mattered — but through action, not explanation.',
      mistake: 'Making Crisis 1 feel like exposition. It should feel like a new emergency, not a pause to explain things. The backstory arrives because the crisis forces it to the surface.',
      question: 'What does Crisis 1 cost the protagonist — and what piece of their history does that cost illuminate?',
    },
    'Crisis 2': {
      page: 'Act 2',
      guidance: 'The spiral tightens. Crisis 2 is worse than Crisis 1 — more personal, more costly, closer to the wound. Backstory continues to emerge, and now it begins to feel essential: the audience needs to understand the protagonist\'s past to grasp why the present crisis is so devastating.',
      mistake: 'Escalating only externally. The Fichtean Curve\'s power comes from the convergence of external pressure and internal history. Crisis 2 should reach a deeper layer of the protagonist\'s psychology.',
      question: 'What does Crisis 2 reveal about the protagonist that they have been avoiding knowing about themselves?',
    },
    'Crisis 3': {
      page: 'Late Act 2 — optional',
      guidance: 'Optional but powerful. Crisis 3 delivers the deepest backstory — the root wound or the original event that set everything in motion. By now the audience is primed to receive it. The full weight of the opening crisis can finally be understood.',
      mistake: 'Using Crisis 3 as an information dump. It must still be a crisis — dramatic, active, costly — not a flashback inserted for explanation. The backstory reveals itself through the pressure of the present.',
      question: 'What is the original wound or event that explains why the opening crisis happened — and what is the most dramatically charged way to surface it?',
    },
    'Climax': {
      page: 'Act 3',
      guidance: 'All crises converge. The external pressure and the internal history arrive at the same point simultaneously. The protagonist must face both at once — the full weight of who they are and what they have done. This convergence is inevitable in retrospect. Everything was building here.',
      mistake: 'Resolving the crises separately. The Fichtean climax works because external and internal resolution are the same event. Separate them and the structure collapses into a conventional three-act.',
      question: 'How does resolving the internal wound simultaneously resolve the external crisis — so that one cannot happen without the other?',
    },
    'Resolution': {
      page: 'Brief Act 3 close',
      guidance: 'Keep it short. The emotional work was done in the Climax. The Resolution establishes the new state — not with extended explanation, but with a single image or gesture that confirms what has changed. The Fichtean Curve earns a brief ending because everything that mattered already happened.',
      mistake: 'Over-extending the resolution. In a Fichtean Curve, a long resolution signals you didn\'t trust the Climax. If the Climax landed, one final beat is enough.',
      question: 'What single moment or image confirms the transformation without restating it?',
    },
  },
  'freeform': {
    'Opening': {
      page: 'First scenes',
      guidance: 'Every story opens somewhere — a choice that contains the whole story\'s argument if you make it right. Why does this story begin here, with this image, this person, this moment? The opening is not just introduction — it is a thesis statement in visual form.',
      mistake: 'Beginning where the story is convenient to explain, rather than where it is most alive. The opening should feel chosen, not obligatory.',
      question: 'Why does your story begin exactly here — and what does that choice say about what the story is really about?',
    },
    'Protagonist': {
      page: 'Act 1',
      guidance: 'We need to understand who this person is before anything changes them. Not their history — their present. How they move, what they want, what they tell themselves about themselves. A character is established through behavior, not biography.',
      mistake: 'Establishing the protagonist through backstory or description. We know who someone is by watching what they do when nothing important is happening.',
      question: 'What specific behavior in the first act reveals who this person is more honestly than anything they say about themselves?',
    },
    'Stakes': {
      page: 'Act 1',
      guidance: 'What the protagonist stands to lose must be concrete and personal — not "everything," which means nothing. The stakes are the specific thing the audience is now afraid to see lost. Make them love it before you threaten it.',
      mistake: 'Making stakes abstract or universal before making them personal. We need to care about this specific person\'s specific loss before we can care about anything larger.',
      question: 'What is the most specific thing your protagonist could lose — and have you made the audience love that thing enough to fear losing it?',
    },
    'Turn': {
      page: 'Act 2',
      guidance: 'The central reversal — the moment the story changes direction and cannot return. Not necessarily the lowest point, but the point of no return. After the Turn, a different story is being told.',
      mistake: 'Being vague about what changes. The Turn should be a specific, identifiable moment — something the audience will remember as the hinge of the whole story.',
      question: 'What is the exact moment your story turns — and does the audience feel it as irreversible?',
    },
    'Low Point': {
      page: 'Late Act 2',
      guidance: 'The protagonist has failed, been abandoned, or reached the limit of their current self. The truth they have been avoiding must now be faced — there is no further escape. This moment earns the resolution.',
      mistake: 'Softening the low point out of mercy for the protagonist. If the audience doesn\'t believe the collapse is genuine, the resolution means nothing.',
      question: 'What truth does the protagonist face at the Low Point that they have spent the entire story avoiding?',
    },
    'Resolution': {
      page: 'Act 3',
      guidance: 'What happens in the final scenes must feel both surprising and inevitable — as if the whole story was moving toward exactly this. The Resolution answers the story\'s question and shows — through behavior, not statement — who the protagonist has become.',
      mistake: 'Explaining the resolution. The ending should be felt, not understood. Trust the audience to receive what the story has been giving them.',
      question: 'What is the last image of your story — and does it prove something without saying it?',
    },
  },
  'seven-point-story': {
    'Hook': {
      page: 'p. 1 — Opening state',
      guidance: 'The mirror opposite of where the protagonist will end. The Hook establishes the protagonist\'s current state — their wound, their false belief, their incomplete world. To build a seven-point structure, begin by knowing your Resolution and then establish the Hook as its precise opposite.',
      mistake: 'Making the Hook interesting in isolation without building the mirror. The Hook\'s power comes entirely from what it will become. Design it backwards from the Resolution.',
      question: 'Who is your protagonist at the start — and who will they be at the end? The gap between those two people is your entire story.',
    },
    'Plot Turn 1': {
      page: 'Act 1 end',
      guidance: 'The event that propels the protagonist into the main conflict. They are now in motion. The central dramatic question is established. This beat must move the protagonist from the Hook state toward the Midpoint — not just plot-wise, but emotionally.',
      mistake: 'Making it purely passive. Even if the protagonist is pushed, their response should reveal agency and character.',
      question: 'What specific event launches the protagonist into the main story — and what does their response reveal about who they are?',
    },
    'Pinch Point 1': {
      page: 'Early Act 2',
      guidance: 'The antagonistic force demonstrates its full power. This is not a setback for the protagonist — it is a display of what they are truly up against. The audience should feel the weight of the opposition for the first time.',
      mistake: 'Having the protagonist respond to Pinch Point 1. It is a demonstration, not an engagement. It shows what the antagonistic force is capable of — often without the protagonist directly involved.',
      question: 'What does the antagonistic force do here that shows the audience exactly how dangerous it truly is?',
    },
    'Midpoint': {
      page: 'Act 2 middle',
      guidance: 'The shift from reaction to action. Before the Midpoint, the protagonist responds to events. After it, the protagonist drives events. Something is committed to that fundamentally changes how they engage with the story.',
      mistake: 'Making the Midpoint only a plot beat. It is a character shift — a commitment, a realization, a transformation of stance. Plot consequence follows from inner change.',
      question: 'What does the protagonist decide or understand at the Midpoint that makes them stop reacting and start acting?',
    },
    'Pinch Point 2': {
      page: 'Late Act 2',
      guidance: 'The antagonist escalates. Resources are stripped. The protagonist is at maximum disadvantage. This Pinch Point is more personal than the first — it attacks the protagonist directly and forces the final confrontation.',
      mistake: 'Holding anything back. Pinch Point 2 should feel like the protagonist cannot possibly win. The audience should be genuinely uncertain. Protect nothing.',
      question: 'What is the worst thing the antagonistic force can do to the protagonist here — and are you letting it do exactly that?',
    },
    'Plot Turn 2': {
      page: 'Act 3 open',
      guidance: 'The final piece of information or insight that enables the Resolution. This is what the protagonist has been missing — the key that makes the final confrontation possible. It arrives from the story, not from outside it.',
      mistake: 'Making Plot Turn 2 a coincidence or a rescue. It should feel earned — the protagonist\'s actions throughout the story should have put them in position to receive this.',
      question: 'What does the protagonist discover that makes the Resolution possible — and how did the story put them in position to find it?',
    },
    'Resolution': {
      page: 'Act 3 end',
      guidance: 'The mirror of the Hook. The protagonist has become the opposite of who they were. Every dimension established in the Hook — the wound, the false belief, the limitation — should be addressed here. Show the transformation in action, not in statement.',
      mistake: 'Resolving only the plot. The Resolution must resolve the character. If the protagonist ends with the same wound they started with, the story has not completed its arc.',
      question: 'How has your protagonist become the opposite of who they were in the Hook — and can you show that transformation in a specific, visible act?',
    },
  },
  'freytags-pyramid': {
    'Exposition': {
      page: 'Act 1 — Opening',
      guidance: 'Establish the world, protagonist, and the fault line running through what appears to be a stable order. Freytag\'s Exposition is not neutral — it introduces the conditions that make the Climax inevitable. Every element introduced here is a seed.',
      mistake: 'Making the Exposition feel safe or resolved. The apparent stability of the opening world should carry the feeling of something about to break. The fault line should be visible to an attentive audience even if invisible to the characters.',
      question: 'What fault line runs through the apparently stable world of your opening — and how can you make it visible to the audience before the characters acknowledge it?',
    },
    'Rising Action': {
      page: 'Act 2 — Escalation',
      guidance: 'Escalating complications, each one closing an escape route and making the Climax more inevitable. The Rising Action builds pressure through the systematic elimination of alternatives. The protagonist tries, adapts, and tries again — each attempt both moving forward and making retreat impossible.',
      mistake: 'Allowing the protagonist to escape the Rising Action. Every complication should close a door. By the Climax, there should be only one door left — and it leads directly into the confrontation the protagonist has been avoiding.',
      question: 'What escape route does each complication close — so the protagonist arrives at the Climax with nowhere left to go?',
    },
    'Climax': {
      page: 'Act 2 peak — Turning point',
      guidance: 'The single turning point of the pyramid. Maximum tension. After this moment, the direction of the story inverts — from building to releasing. In tragedy, this is the moment from which catastrophe becomes inevitable. In comedy or romance, it is the moment from which resolution becomes possible.',
      mistake: 'Distributing the Climax across several scenes. Freytag\'s Climax is a point, not a range. The more precisely you can locate it, the more clearly the pyramid will work.',
      question: 'What is the single, specific moment at which the story\'s direction inverts — and does everything before it build toward this point?',
    },
    'Falling Action': {
      page: 'Act 3 — Consequences',
      guidance: 'The consequences of the Climax unfold. What was set in motion by the turning point now plays out to its conclusion. Last attempts to recover, reconcile, or escape — but the direction established at the Climax now runs the story.',
      mistake: 'Introducing new complications in the Falling Action. This section is consequential, not generative. New problems here feel like structural avoidance. Let what happened at the Climax drive everything.',
      question: 'What consequences of the Climax are playing out — and have you resisted introducing new complications?',
    },
    'Denouement': {
      page: 'Act 3 — Close',
      guidance: 'The final resolution. Not just what happened — what it means. The Denouement carries the story\'s argument about human experience. In tragedy, grief and recognition. In comedy, restored order and joy. Either way, it is the last breath — the moment the story says what it came to say.',
      mistake: 'Extending the Denouement past its emotional peak. Once the story\'s meaning has landed, it is over. Lingering beyond this point dilutes the impact.',
      question: 'What is the story\'s final argument about human experience — and have you found the image or moment that makes that argument without stating it?',
    },
  },
  'snowflake-method': {
    'Step 1': {
      page: 'Phase 1 — Foundation',
      guidance: 'Write one sentence: protagonist, conflict, stakes. Maximum 25 words. No character names. The one-sentence summary forces you to identify what your story is actually about at its most essential level. If you cannot write it in 25 words, you do not yet know what your story is.',
      mistake: 'Including plot detail in the one-sentence summary. This sentence is about concept and stakes, not events. Cut everything that is not absolutely necessary to understand why this story matters.',
      question: 'What is the single most important thing about your story — stated in one sentence, without character names, in 25 words or fewer?',
    },
    'Step 2': {
      page: 'Phase 1 — Skeleton',
      guidance: 'Write five sentences: setup, three disasters, ending. These five sentences are the skeleton of your entire story. Each disaster should be genuinely worse than the one before. The ending should follow inevitably from the three disasters.',
      mistake: 'Writing six or seven sentences because five feels constraining. The constraint is the point. If you cannot tell your story in five sentences, the structure is not yet clear enough to begin writing.',
      question: 'What are the three disasters that escalate your story — and does each one genuinely close the door on the possibility established before it?',
    },
    'Step 3': {
      page: 'Phase 1 — Characters',
      guidance: 'One paragraph per major character: who they are at the start, what they want, what they need, what prevents them from getting it, and who they are at the end. Characters drive every disaster and every resolution.',
      mistake: 'Writing character summaries that are essentially backstory. The paragraph should be about arc — the journey from start to end — not history.',
      question: 'Who is each major character at the start of the story — and who are they at the end? Can you name the specific transformation?',
    },
    'Step 4': {
      page: 'Phase 2 — Expansion',
      guidance: 'Expand each sentence of your five-sentence paragraph into one full page. This gives you five pages — a full synopsis. The expansion reveals where the skeleton needs reinforcement and where it already has strength.',
      mistake: 'Introducing new story elements in the expansion that were not implied in the skeleton. Expansion develops what was established. New elements at this phase signal the skeleton needs revision, not the synopsis.',
      question: 'As you expand each sentence, what gaps in the structure become visible — and do you go back to fix the skeleton, or paper over the gaps?',
    },
    'Step 5': {
      page: 'Phase 2 — Scene List',
      guidance: 'Expand the synopsis into individual scenes. Each entry includes: POV character, the conflict or dramatic question, the outcome, and how it moves the story forward. A scene that does not move the story forward is a scene that should not be there.',
      mistake: 'Writing scene entries that describe what happens without identifying what the scene does. Every scene has a job. If you cannot state the job in one sentence, the scene does not have one yet.',
      question: 'Can you state the dramatic function of every scene in one sentence — and does every scene pass that test?',
    },
    'Step 6': {
      page: 'Phase 3 — Draft',
      guidance: 'Write. You have done the structural work. Every scene knows what it is doing. The first draft is no longer a search for structure — it is the execution of a plan. Begin.',
      mistake: 'Continuing to expand and refine instead of writing. At Step 6, more planning is procrastination. The only thing left to discover is what happens when language meets the structure you\'ve built.',
      question: 'What is stopping you from beginning — and is it a structural problem, or is it fear?',
    },
  },
  'hauge-six-stage': {
    'Stage 1': {
      page: '0–10%',
      guidance: 'Establish the protagonist\'s Identity — the false self, the defended self, the performance they offer the world. Hauge\'s model is built on the distinction between Identity (the wound-driven mask) and Essence (the true self beneath). Stage 1 shows the Identity in operation before anything cracks it.',
      mistake: 'Making the Identity obviously false or unappealing. The protagonist should genuinely believe in their Identity — and it should be working for them, at least on the surface. The audience needs to see why they built it before they can understand why it must go.',
      question: 'What is the protagonist\'s Identity — the self they present to the world — and what wound caused them to build it?',
    },
    'Stage 2': {
      page: '10–25%',
      guidance: 'A new situation disrupts the Identity and begins to crack it open. The protagonist cannot navigate this situation with the same defenses. They are forced into contact with something the Identity cannot handle.',
      mistake: 'Introducing the new situation without connecting it to the Identity\'s limits. The new situation should be specifically calibrated to expose the wound — not just be a new external circumstance.',
      question: 'What is it about this specific new situation that the protagonist\'s Identity is uniquely unable to handle?',
    },
    'Stage 3': {
      page: '25–50%',
      guidance: 'Real progress on the outer goal — and small, almost invisible movements toward Essence. The protagonist is succeeding, connecting, growing. The Identity still dominates, but something underneath is beginning to stir.',
      mistake: 'Treating Stage 3 as pure external success. The inner movement toward Essence should be present — a moment of genuine connection, an unguarded response, a glimpse of who they could be.',
      question: 'In what small moment does the protagonist\'s Essence appear despite their Identity — and do they even notice?',
    },
    'Stage 4': {
      page: '50–75%',
      guidance: 'The Identity reasserts itself. The wound is touched and the protagonist retreats into defense. Progress on the outer goal becomes harder as the inner wound creates outer consequences. The gap between Identity and Essence becomes a source of conflict.',
      mistake: 'Making the Identity\'s reassertion feel like a character flaw. The Identity is not villainy — it is self-protection. The audience should understand it even as they watch it create damage.',
      question: 'How does the protagonist\'s wound — the root of their Identity — directly cause the complications of Stage 4?',
    },
    'Stage 5': {
      page: '75–90%',
      guidance: 'The protagonist sheds Identity and acts from Essence for the first time — fully, without defense. This is the final effort: the attempt to achieve the outer goal while finally being who they truly are. It is both the most dangerous and the most alive the protagonist has ever been.',
      mistake: 'Making the Essence choice feel easy or obvious. Shedding the Identity is an act of genuine courage. The protagonist is choosing vulnerability over protection. Make the audience feel the cost.',
      question: 'What does the protagonist risk — specifically, concretely — by choosing to act from Essence instead of Identity at this moment?',
    },
    'Stage 6': {
      page: '90–100%',
      guidance: 'The new equilibrium. The protagonist is now living from Essence. The outer goal is resolved, but more importantly, the inner journey is complete. Show the protagonist doing something they could not have done in Stage 1.',
      mistake: 'Ending with the outer goal resolution alone. Stage 6 must show the inner transformation in action — the Essence operating in the world, not just achieved in private.',
      question: 'What specific action in Stage 6 proves this protagonist is living from Essence — something the Identity-driven version of them could not have done?',
    },
  },
  'heroines-journey': {
    'Separation': {
      page: 'Act 1',
      guidance: 'The heroine has rejected — or been separated from — the feminine world. This rejection is established as her defining stance: her identity is built on distance from qualities coded as feminine in her culture. Show this split in specific behavior, not statement.',
      mistake: 'Framing the separation as purely positive or purely negative. Maureen Murdock\'s model holds that the separation was a necessary survival strategy — and also that it has a cost. Both must be present.',
      question: 'What specific behavior shows the heroine\'s rejection of the feminine — and what does that behavior cost her beneath the surface?',
    },
    'Masculine ID': {
      page: 'Act 1',
      guidance: 'The heroine has identified with the masculine world — its values, its modes of achievement, its definitions of success. Name the achievement she has attained. Name the specific cost that achievement extracted. Both are real and both matter.',
      mistake: 'Making the masculine identification purely ironic or false. The heroine\'s success in the masculine world is genuine. She earned it. It is also incomplete. Treat both truths with equal seriousness.',
      question: 'What has the heroine achieved in the masculine world — and what specific thing has she given up or suppressed to achieve it?',
    },
    'Trials': {
      page: 'Act 2 open',
      guidance: 'The masculine-identified self encounters problems that competence alone cannot solve. Each trial should probe a dimension of connection, intuition, or feeling that the heroine\'s current identity is unable to access. She is meeting her limits.',
      mistake: 'Making the trials purely competence tests. The trials that matter here are relational and emotional — they require capacities the heroine has suppressed.',
      question: 'What do these trials require of the heroine that her current masculine-identified self cannot provide?',
    },
    'Illusory Boon': {
      page: 'Act 2 middle',
      guidance: 'Apparent success that reinforces the old strategy — just before it collapses. The heroine achieves something significant using her familiar approach. This apparent victory briefly convinces her the old way still works.',
      mistake: 'Making the Illusory Boon obviously hollow. The heroine should genuinely believe she has succeeded. The emptiness should arrive as a surprise.',
      question: 'What success does the heroine achieve here — and why does it feel, even briefly, like proof that the old strategy is working?',
    },
    'Awakening': {
      page: 'Act 2 crisis',
      guidance: 'The moment of spiritual aridity. Something is missing — not just externally, but in the deepest interior. The heroine may not be able to name it. But the emptiness is now undeniable. This is the first real encounter with the wound beneath the achievement.',
      mistake: 'Resolving the awakening too quickly. The heroine needs to sit with the aridity long enough that both she and the audience feel its full weight.',
      question: 'What specific experience makes the heroine unable to continue pretending the current strategy is enough?',
    },
    'Descent': {
      page: 'Act 2 deep',
      guidance: 'The crossing into the deep interior. The heroine encounters what she has buried: feeling, intuition, the feminine capacities she separated from. This is disorienting and necessary. She is meeting the other half of herself.',
      mistake: 'Making the descent feel like defeat. The descent is not failure — it is initiation. What the heroine finds in the deep interior is not weakness but strength she has never used.',
      question: 'What does the heroine discover about herself in the descent that she could not have found while identified with the masculine world?',
    },
    'Yearning': {
      page: 'Act 3 open',
      guidance: 'The desire to reconnect — with others, with herself, with what she has suppressed — arises from the descent. This yearning is active: she reaches toward reconnection rather than retreating into familiar defenses.',
      mistake: 'Making the yearning abstract. It should be expressed in specific relationships, specific desires, specific actions the heroine could not have taken before the descent.',
      question: 'What specific connection does the heroine reach toward here that she was unable or unwilling to reach for at the beginning?',
    },
    'Healing M/D': {
      page: 'Act 3',
      guidance: 'A specific reconciliation — literal or internal — begins repairing the original separation. The mother/daughter split (or its symbolic equivalent) is directly addressed. Even if the repair is internal, it should be embodied in a specific relationship or act.',
      mistake: 'Making the healing purely metaphorical at the expense of the concrete. The audience needs to see the reconciliation, not just sense it.',
      question: 'What specific act of reconciliation — with another character or with a suppressed part of herself — embodies the healing of the original split?',
    },
    'Healing Masculine': {
      page: 'Act 3',
      guidance: 'The heroine reclaims healthy ambition and agency — but now without the wound driving it. She can use the competence she built without using it to suppress feeling and connection. Both capacities are now available to her.',
      mistake: 'Implying that the masculine world was simply wrong and the feminine simply right. The integration is real: the heroine is not giving up ambition, she is healing her relationship to it.',
      question: 'How does the heroine demonstrate ambition and agency in Act 3 that is different from how she used those capacities in Act 1?',
    },
    'Integration': {
      page: 'Act 3 close',
      guidance: 'Both capacities — masculine and feminine, achievement and connection, ambition and feeling — now exist simultaneously. Not as balance, which implies tension, but as wholeness, which implies completion. Show it in the final image.',
      mistake: 'Describing the integration instead of showing it. The final image should embody the integrated self in action — doing something that requires both capacities at once.',
      question: 'What single action or image shows the heroine being fully herself — using both the capacities she had at the start and the ones she found in the descent?',
    },
  },
  'story-spine': {
    'Once upon a time': {
      page: 'Opening',
      guidance: 'Establish the protagonist and their ordinary world in a single, specific statement. This is the story\'s baseline — the stable order that exists before anything disrupts it. Should be particular, not general: this person, this world, this texture of daily life.',
      mistake: 'Making it too broad. Specificity here creates investment. We need to know enough about this person and world that their disruption will matter.',
      question: 'What is the most specific, alive version of your protagonist\'s ordinary world before anything changes?',
    },
    'Every day': {
      page: 'Act 1',
      guidance: 'The rhythm of ordinary existence. The repeating pattern of life before disruption establishes the routine — and routines carry meaning because they show what the protagonist values and what they take for granted.',
      mistake: 'Making it feel like filler. The daily rhythm should contain the seeds of everything that will change. What the protagonist does every day should look different by the end.',
      question: 'What does your protagonist do every day — and how does that routine quietly embody the wound or the theme that the story will expose?',
    },
    'Until one day': {
      page: 'Act 1 end',
      guidance: 'The single event that breaks the pattern. The inciting incident, stated as cleanly and specifically as possible. "Until one day" does one thing only: it breaks the "every day." Everything that follows is caused by this break.',
      mistake: 'Making it too complex. This moment should be singular and specific. One thing happens. Everything changes.',
      question: 'What is the one specific event that ends the "every day" — and can you state it in a single sentence?',
    },
    'Because of that (1)': {
      page: 'Act 2 open',
      guidance: 'First direct consequence. The chain of causation begins. "Because of that" is the structural heart of the Story Spine: every event must follow causally from the one before. If you cannot say "because of that" between any two events, the chain is broken.',
      mistake: 'Introducing an event that merely follows in time without being caused by what came before. "And then" is not story. "Because of that" is story.',
      question: 'What happens as a direct result of "until one day" — something that could only happen because of that specific disruption?',
    },
    'Because of that (2)': {
      page: 'Act 2 mid',
      guidance: 'Second consequence. The domino effect escalates. The stakes rise. Each "because of that" should increase the protagonist\'s distance from their ordinary world and increase the cost of returning to it.',
      mistake: 'Repeating the same type of consequence as the first. Escalation means something new and worse — not more of the same complication.',
      question: 'What does the first consequence cause — and is it meaningfully worse and different from what came before?',
    },
    'Until finally': {
      page: 'Act 3 climax',
      guidance: 'The escalation ends and resolution begins. "Until finally" names the climactic moment — the point at which the chain of consequences reaches its peak. After this, the direction changes.',
      mistake: 'Making it too small. This is the story\'s largest moment — the one toward which every "because of that" was building. Give it the weight it has earned.',
      question: 'What is the climactic moment the entire chain of causation was building toward — and does it feel inevitable in retrospect?',
    },
    'Ever since then': {
      page: 'Act 3 end',
      guidance: 'The new ordinary. Not aftermath — a changed equilibrium. Should mirror "every day" but with everything transformed. The protagonist\'s routine has changed because they have changed.',
      mistake: 'Making it purely positive or purely resolved. The new ordinary should carry complexity — some things gained, some lost.',
      question: 'What does your protagonist\'s "every day" look like now — and how does that new routine show who they have become?',
    },
  },
  'five-act': {
    'Act I': {
      page: 'Act I — Exposition',
      guidance: 'Establish the world, protagonist, and the fault line in the stable order. Shakespeare\'s Act I does not merely introduce — it plants the seeds of the catastrophe. The audience should be able to look back at Act I and see that the end was already present in the beginning.',
      mistake: 'Using Act I only for setup without establishing the fault line. The fault line — the wound, the lie, the imbalance — should be visible in the world from the opening.',
      question: 'What fault line in your world or protagonist will eventually crack open into catastrophe — and is it already present and visible in Act I?',
    },
    'Act II': {
      page: 'Act II — Rising Action',
      guidance: 'Escalating complications, each one making the climactic confrontation more inevitable. Act II eliminates alternatives — every scene should close an escape route, making the final confrontation the only remaining door.',
      mistake: 'Introducing complications without escalation. Each complication must raise the stakes above the previous one. Lateral movement is not rising action.',
      question: 'What escape route does each complication in Act II close — so the protagonist arrives at Act III with nowhere left to go?',
    },
    'Act III': {
      page: 'Act III — Climax',
      guidance: 'Maximum tension. The point of no return. In classical drama, Act III contains the crisis — the moment the direction of the story inverts, from building to releasing. In tragedy, this is where the flaw becomes irreversible.',
      mistake: 'Distributing the climax across Act III. The crisis is a moment, not a sequence. Locate it precisely. Everything before it builds; everything after it resolves.',
      question: 'What is the single moment at which the direction of your story inverts — and does everything before it build toward this specific point?',
    },
    'Act IV': {
      page: 'Act IV — Falling Action',
      guidance: 'The consequences of Act III unfold. Last attempts to recover, reconcile, or escape play out. In tragedy, the protagonist\'s flaw now produces consequences that cannot be stopped. The direction established in Act III runs the story to its end.',
      mistake: 'Introducing major new complications in Act IV. Falling action is consequential, not generative. New plot elements here feel like structural panic. Let Act III drive Act IV.',
      question: 'What consequences of the Act III crisis are now playing out — and have you resisted adding new complications?',
    },
    'Act V': {
      page: 'Act V — Catastrophe or Denouement',
      guidance: 'The final cost or resolution. In tragedy: catastrophe — the full weight of the flaw made visible in loss. In comedy or romance: denouement — the restoration of order and the celebration of transformation. Either way, Act V confirms what the play has been about.',
      mistake: 'Rushing Act V to reach the end. The final act carries the emotional argument of the entire work. Give it the space to land fully.',
      question: 'What does Act V confirm about the world and the protagonist — and does that confirmation feel both earned and inevitable?',
    },
  },
  'romancing-the-beat': {
    'Meet': {
      page: 'Act 1 open',
      guidance: 'How do the leads meet — and what specific quality does each notice in the other at this first moment? The Meet establishes the initial dynamic that will drive the entire romance. What each lead notices in the other should reflect what they themselves are missing.',
      mistake: 'Making the Meet too cute or too hostile without purpose. Every element of how they meet should do double work: establishing character and establishing the romantic dynamic.',
      question: 'What specific quality does each lead notice in the other at this first meeting — and what does that tell us about what each of them is missing?',
    },
    'Wanting': {
      page: 'Act 1',
      guidance: 'The first honest moment of wanting — however resisted, suppressed, or rationalized. It\'s there. The audience should be able to see it even if the character cannot. Wanting is the proof that the romance has begun, regardless of what the characters say about it.',
      mistake: 'Making the Wanting too mutual or too obvious. One lead may want before the other. Neither may admit it. The power is in what the audience sees that the characters deny.',
      question: 'Where does the first genuine wanting appear — and are you trusting the audience to see it without having the character state it?',
    },
    'Misbeliefs': {
      page: 'Act 1',
      guidance: 'The wound each character carries — the misbelief about themselves or love that will prevent them from accepting the relationship until it is healed. Show misbeliefs in behavior, not statement. We know what someone believes by watching what they do.',
      mistake: 'Having characters explain their misbeliefs. The misbelief is most powerful when the character doesn\'t know they have it. Show it operating beneath the surface.',
      question: 'What misbelief does each character hold — and what specific behavior shows it operating in their life before they are aware of it?',
    },
    'No Way': {
      page: 'Act 1 end',
      guidance: 'The conscious decision that this is not happening — while it already is. One or both characters close the door on the possibility of romance. This creates the dramatic irony that drives Act 2: the audience knows what the characters are denying.',
      mistake: 'Making the "No Way" decision feel arbitrary or forced. It must feel completely rational from inside the character\'s misbelief. Of course they\'re closing the door. They have a perfectly good reason.',
      question: 'What is the character\'s perfectly rational reason for saying no — and how does that reason trace directly back to their misbelief?',
    },
    'Humming Along': {
      page: 'Act 2 open',
      guidance: 'Growing closeness. Small vulnerabilities offered and received. Guard coming down incrementally. This section creates the relationship the audience is going to love — and therefore the relationship whose collapse at the Dark Moment will genuinely hurt.',
      mistake: 'Rushing through this section to get to conflict. The romance lives here. Give it room. The audience needs to fall in love with this relationship before they can fear losing it.',
      question: 'What specific small vulnerability does each character offer here — and how does the other receive it in a way that deepens the connection?',
    },
    'Shiny Hoo-Ha': {
      page: 'Act 2 middle',
      guidance: 'Peak connection. The false summit of the romance. The couple is closer than they have ever been — and this closeness will make the Commitment Freakout and the Dark Moment hit that much harder. Let it be genuinely beautiful.',
      mistake: 'Undercutting this moment with ironic distance. It should be sincere. If the audience doesn\'t believe in this peak, the Dark Moment has nothing to work with.',
      question: 'What is the most emotionally genuine moment of connection between your leads — and have you let yourself write it without any undercutting?',
    },
    'Resonance': {
      page: 'Act 2',
      guidance: 'True recognition. Not attraction — one person truly sees the other. Not their surface, not their performance — who they actually are beneath the misbelief. The moment of being truly seen is the emotional core of the romance.',
      mistake: 'Confusing attraction with recognition. Resonance is specifically the moment one character sees past the other\'s defenses to their true self — and the person being seen feels it.',
      question: 'In what specific moment does one character genuinely see the other — not as they perform themselves, but as they actually are?',
    },
    'Swoon': {
      page: 'Act 2',
      guidance: 'Maximum romantic escalation. Both characters are fully, undeniably in it — even if they still refuse to say so. The Swoon earns the Dark Moment by making the stakes feel real.',
      mistake: 'Holding back from the Swoon because the Dark Moment is coming. The Swoon should be the most romantic moment in the story. The higher it climbs, the harder the Dark Moment falls.',
      question: 'What is the most romantically charged moment in your story — and are you letting it be fully that, without reservation?',
    },
    'Deepening': {
      page: 'Act 2',
      guidance: 'A genuine vulnerability is offered — something true that is not usually offered to anyone. Not attraction or recognition — it is the specific choice to be known. The character who offers it is taking a real risk.',
      mistake: 'Making the Deepening feel safe. True vulnerability is not comfortable. The character should be offering something they are afraid to offer — and the other character\'s response matters enormously.',
      question: 'What specific truth does one character share that they have not shared before — and does the other character receive it in a way that earns the trust?',
    },
    'Freakout': {
      page: 'Act 2 end',
      guidance: 'The misbelief resurfaces at the worst possible moment. One or both characters retreat into the defense they built around their wound. The closeness has triggered the fear. This is not a character flaw — it is a wound protecting itself.',
      mistake: 'Making the Freakout feel like stupidity or cruelty. The audience must understand the character\'s retreat even as they are frustrated by it. The behavior must trace back to the misbelief.',
      question: 'How does the misbelief drive this specific freakout — so the audience understands the behavior even if they\'re frustrated by it?',
    },
    'Dark Moment': {
      page: 'Act 3 open',
      guidance: 'The relationship collapses. The misbeliefs have been confirmed — or feel confirmed. This must be genuinely devastating. The Swoon and the Deepening exist to make the Dark Moment hurt. Let it hurt.',
      mistake: 'Softening the Dark Moment. The pain is the point. The reader must believe this relationship is lost before they can feel the full impact of the Grand Gesture.',
      question: 'What specifically is lost in the Dark Moment — and have you let it be as painful as it needs to be?',
    },
    'Grand Gesture': {
      page: 'Act 3',
      guidance: 'A gesture that costs something real and proves transformation, not just feeling. The Grand Gesture is not the declaration of love — it is the demonstration that the misbelief has been healed. It must require the character to do the specific thing their wound made impossible.',
      mistake: 'Making the Grand Gesture about emotion rather than transformation. "I love you" is not a Grand Gesture. Doing the specific thing the misbelief made impossible — at real cost — is a Grand Gesture.',
      question: 'What does the character do here that was impossible for them at the start of the story — and what does it cost them to do it?',
    },
    'HEA': {
      page: 'Act 3 end',
      guidance: 'The Happily Ever After. Not just union — transformation made visible. The misbeliefs have been healed. Show this in the final moment: not just the couple together, but the couple operating from their healed selves. The receiving matters as much as the giving.',
      mistake: 'Ending on the gesture without showing the receipt. The HEA must show both characters transformed — not just one making the Grand Gesture, but the other genuinely receiving it as a changed person.',
      question: 'What does the final moment show about both characters — not just that they\'re together, but that they are different people than they were at the Meet?',
    },
  },
  'virgins-promise': {
    'Dependent World': {
      page: 'Act 1 open',
      guidance: 'The world that defines and constrains the protagonist pursuing self-actualization. Show both the love and the constriction — the world that holds her is not evil, just limiting. Her belonging to it is genuine, and her need to leave is also genuine.',
      mistake: 'Making the Dependent World oppressive or obviously wrong. The tension is real on both sides: the world has genuine love to offer and genuine freedom to deny.',
      question: 'What does the Dependent World genuinely offer the protagonist — and what specific freedom does it require her to give up?',
    },
    'Price': {
      page: 'Act 1',
      guidance: 'The specific cost of remaining acceptable in the Dependent World. Conformity has a price — shown in behavior, not statement. The protagonist pays it regularly and without complaint, because the belonging it buys feels worth it. For now.',
      mistake: 'Making the price too large. If the cost of conformity is already unbearable, the protagonist\'s choice to stay is inexplicable. The price should be real but payable — until it isn\'t.',
      question: 'What specific thing does the protagonist do — or suppress — regularly, to remain acceptable to the Dependent World?',
    },
    'Opportunity': {
      page: 'Act 1',
      guidance: 'A glimpse of her full potential. May be small. It is enough to ignite something — an awareness that there is more, that she is more. This moment may be invisible to everyone else. It is everything to her.',
      mistake: 'Making the Opportunity too grand or too obvious. The first glimpse of potential is often small, private, and unremarkable from the outside. Its power is entirely internal.',
      question: 'What small, private moment lets the protagonist glimpse who she could be — and does she dare to hold onto that glimpse?',
    },
    'Dresses the Part': {
      page: 'Act 1 end',
      guidance: 'Trying on the identity of who she could be — privately, tentatively. Not public commitment. The secret rehearsal of a possible self. No one else knows yet. She may not fully believe it herself.',
      mistake: 'Making this step too bold or too public. The dressing is secret and fragile. Exposure here would collapse the entire process. Protect the secret.',
      question: 'In what private moment does the protagonist try on who she could be — and what does it feel like to inhabit that identity, even briefly?',
    },
    'Secret World': {
      page: 'Act 2 open',
      guidance: 'The space she builds — physical or relational — where she can fully be herself without consequence. Not lies or rebellion — a necessary creative space where her potential is exercised and developed.',
      mistake: 'Framing the Secret World as deception. It is not. It is preservation — the only way to develop a self that the Dependent World cannot contain.',
      question: 'What is the Secret World, and what does it let her do that her ordinary world does not allow?',
    },
    'Not Fitting In': {
      page: 'Act 2',
      guidance: 'The double life creates friction. The Secret World begins to leak into the Dependent World. Her behavior, her values, or her sense of herself can no longer be kept entirely separate. Something shows.',
      mistake: 'Making the friction too dramatic. The not-fitting-in is often quiet — a changed response, a visible discomfort, a slipped comment.',
      question: 'In what small, specific way does the protagonist\'s secret self begin to show in her ordinary world — and what is the Dependent World\'s response?',
    },
    'Mentor': {
      page: 'Act 2',
      guidance: 'Someone who believes in her full potential — not to rescue her, but to witness it. The Mentor does not solve anything. They simply see her clearly and believe in what they see.',
      mistake: 'Making the Mentor too active or too directive. Their role is witnessing and believing, not guiding or fixing. Their gift is recognition, not instruction.',
      question: 'Who sees the protagonist\'s potential clearly — and how does being seen in that way change what she believes about herself?',
    },
    'Fully Shines': {
      page: 'Act 2 peak',
      guidance: 'She fully expresses her potential. This is the zenith of the Secret World — the moment she is most completely herself. The Dependent World has not seen it. This moment exists for her and for the audience.',
      mistake: 'Making Fully Shines public prematurely. If the Dependent World witnesses it here, the Kingdom in Chaos arrives too early and the Secret World collapses before it\'s fully built.',
      question: 'What is the peak moment of her full self-expression — and have you protected it from public exposure long enough for it to be fully real?',
    },
    'Chaos': {
      page: 'Act 3 open',
      guidance: 'The Secret World\'s existence destabilizes the Dependent World. Truth is out. The protagonist\'s two lives can no longer coexist. The Dependent World demands a choice.',
      mistake: 'Making Chaos purely external. The chaos is also internal — the protagonist\'s sense of who she is has been destabilized by the exposure.',
      question: 'What specifically destabilizes when the Secret World is exposed — and how does the protagonist experience that destabilization internally?',
    },
    'Wilderness': {
      page: 'Act 3',
      guidance: 'Both worlds have collapsed. She doesn\'t know what she is anymore. This disorientation is necessary — it is the space in which the old self dissolves and the new self becomes possible. The Wilderness cannot be rushed.',
      mistake: 'Resolving the Wilderness too quickly. The protagonist must genuinely not know who she is or what she wants long enough that the audience feels the real cost of transformation.',
      question: 'What does it feel like for the protagonist in the Wilderness — and are you giving her enough time there to make the Choice feel real?',
    },
    'Choice': {
      page: 'Act 3 crisis',
      guidance: 'The central crisis: return to the Dependent World on its terms, or claim her fully shining self at the cost of belonging. Both options cost something real. The Choice must feel genuinely difficult — not obviously right.',
      mistake: 'Making one option obviously correct. If the choice is easy, it isn\'t a choice. The Dependent World\'s terms must have genuine appeal. What she\'s walking away from must be real.',
      question: 'What is the genuine cost of each option — and have you made both feel real enough that the Choice is actually difficult?',
    },
    'Kingdom Brighter': {
      page: 'Act 3',
      guidance: 'Her choice transforms the world she came from. The Dependent World is changed by the fact that she claimed her full self. Even if some of it falls away, something in it is brighter for what she became.',
      mistake: 'Making the Kingdom Brighter purely redemptive. Some things in the Dependent World may be genuinely lost. The brightness is real, and the loss is real. Honor both.',
      question: 'What is specifically brighter in the Dependent World because this protagonist claimed her full self — and what has been genuinely lost?',
    },
    'Rescue Prince': {
      page: 'Act 3 close',
      guidance: 'Her transformation frees someone else who was also constrained by the old order. Not necessarily romantic — it is the ripple effect of self-actualization. By claiming her own freedom, she creates the conditions for someone else\'s.',
      mistake: 'Making the Rescue Prince the point of the story. The protagonist did not become herself in order to free someone else. The freedom of the other is a consequence, not a purpose.',
      question: 'Who is freed by the protagonist\'s transformation — and how does their freedom demonstrate the real cost of the old order?',
    },
  },
  'mice-quotient': {
    'Story Type': {
      page: 'Before you begin',
      guidance: 'Orson Scott Card\'s MICE Quotient identifies four types of story: Milieu (world exploration), Inquiry (question answered), Character (transformation), Event (order disrupted and restored). Name the dominant thread. The dominant thread determines the contract you make with the reader.',
      mistake: 'Trying to make all four types equally dominant. One type must lead. The reader\'s satisfaction depends on the dominant question being answered fully and last.',
      question: 'What is the single most important question your story is asking — and which MICE type does that question belong to?',
    },
    'Milieu': {
      page: 'M thread — World',
      guidance: 'If Milieu is present: the story opens when a character enters a new world and closes when they leave it or choose to stay. Every scene in the Milieu thread explores, reveals, or complicates the world. Reader satisfaction comes from having fully experienced it.',
      mistake: 'Closing the Milieu thread before the world has been fully explored. The contract with the reader is complete world experience. If the story ends before the world has been sufficiently revealed, the reader feels cheated.',
      question: 'When does the Milieu thread open (character enters the world) — and when does it close (character leaves or stays)?',
    },
    'Inquiry': {
      page: 'I thread — Question',
      guidance: 'If Inquiry is present: a question is posed, an investigation follows, and an answer arrives. Reader satisfaction depends entirely on the answer. The question must be clearly posed early and clearly answered at the close.',
      mistake: 'Leaving the Inquiry question ambiguous. Ambiguity in Milieu or Character can be richly satisfying. Ambiguity in Inquiry feels like a broken promise. The reader needs an answer.',
      question: 'What is the specific question posed at the opening of the Inquiry thread — and is it clearly answered at the close?',
    },
    'Character': {
      page: 'C thread — Transformation',
      guidance: 'If Character is present: the thread opens by showing who the character is and closes by showing who they have become. Reader satisfaction depends on the transformation feeling real and complete.',
      mistake: 'Opening a Character thread without planning where the character ends up. The transformation must be real and specific. "They grew" is not a Character thread close.',
      question: 'Who is this character when the Character thread opens — and who specifically are they when it closes?',
    },
    'Event': {
      page: 'E thread — Order disrupted',
      guidance: 'If Event is present: a stable order is disrupted and a new order must be established. Reader satisfaction comes from the restoration of meaningful equilibrium — not necessarily the old order, but a livable one.',
      mistake: 'Restoring the exact original order. The Event thread closes with a new equilibrium — the world has been changed by the events. A return to the exact original order suggests the story didn\'t matter.',
      question: 'What order is disrupted at the opening of the Event thread — and what new order is established at its close?',
    },
    'Nesting': {
      page: 'Structural rule',
      guidance: 'Every nested thread must open before any thread closes. MICE threads nest like parentheses: the last thread opened is the first thread closed. Violating the nesting order creates dissatisfaction the reader may not be able to name.',
      mistake: 'Closing threads in the wrong order. The most common error: closing the dominant thread before closing nested threads. The reader feels vaguely unsatisfied without knowing why.',
      question: 'In what order do your threads open — and are you closing them in the exact reverse order?',
    },
    'Closing': {
      page: 'Final structure',
      guidance: 'Trace each thread to its close. The dominant type closes last. Every thread must be fully closed — answered, concluded, transformed, or restored — before the story ends. A thread left open is a promise broken.',
      mistake: 'Assuming threads close themselves. Track each thread explicitly. Know the moment each one opens and the moment each one closes. The closing of the dominant thread is the ending of the story.',
      question: 'Can you identify the exact moment each thread closes — and does the dominant thread close last?',
    },
  },
  'w-plot': {
    'Opening': {
      page: 'Baseline',
      guidance: 'Establish both the external plot and the internal emotional arc at baseline. The W-plot tracks two simultaneous lines — external events and internal wound — and their interaction. From the opening, make both lines visible: what is the outer situation, and what is the inner wound the story will expose?',
      mistake: 'Establishing only the external baseline. The W-plot\'s power comes from the interaction between the external and internal lines. If the wound is not established at the opening, the crossings will feel arbitrary.',
      question: 'What is the external situation at the opening — and what is the internal wound that the story will expose through that situation?',
    },
    'Complication': {
      page: 'Act 1',
      guidance: 'External pressure begins. Even at this early stage, the external complication should be touching the wound — revealing it or activating it in some way.',
      mistake: 'Making the complication purely external without wound interaction. In the W-plot, every external event has an internal dimension.',
      question: 'How does the first external complication touch or activate the protagonist\'s wound — even if that connection is still subtle?',
    },
    'Crossing 1': {
      page: 'Act 1 end',
      guidance: 'First crossing: external pressure triggers an internal shift — or an internal resolve pushes the plot upward. The two tracks intersect for the first time and change each other.',
      mistake: 'Missing the crossing entirely. The crossing is not just a plot event — it is the moment the two tracks interact and change each other. Make the interaction explicit.',
      question: 'What specifically happens at the first crossing — and how do the external and internal tracks change each other at this point?',
    },
    'False Hope': {
      page: 'Act 2 open',
      guidance: 'Apparent success on both tracks. The external plot appears to be going well, and the internal wound seems manageable or even healing. This must feel genuinely hopeful to the protagonist so the collapse hits hard.',
      mistake: 'Ironizing False Hope too visibly. If the audience can see too clearly that this is false hope, the emotional impact of what follows is diluted. Let the hope be real, even briefly.',
      question: 'What makes this moment feel like genuine hope — and why does the protagonist believe both tracks are succeeding?',
    },
    'Crossing 2': {
      page: 'Act 2 middle',
      guidance: 'The internal wound directly causes an external setback. This crossing reveals the structure\'s central logic: the wound does not just hurt internally — it has consequences in the outer world. The internal causes the external.',
      mistake: 'Making Crossing 2 coincidental rather than causal. The setback should be traceable directly to the wound. The audience should be able to say: this happened because of that internal truth.',
      question: 'How does the protagonist\'s wound specifically cause this external setback — so the audience can trace the causal chain?',
    },
    'Midpoint': {
      page: 'Act 2 midpoint',
      guidance: 'Both tracks hit bottom simultaneously. External failure and internal despair coincide. This is the structural low point of Act 2 — both the external situation and the internal wound at their most exposed.',
      mistake: 'Allowing one track to be better than the other at the midpoint. The W-plot midpoint requires genuine simultaneous failure on both tracks. If one is holding, the structure is off.',
      question: 'What is the lowest point of the external track — and what is the lowest point of the internal track — and do they coincide?',
    },
    'Crossing 3': {
      page: 'Act 2 end',
      guidance: 'External failure and internal despair converge at the All Is Lost point. The two tracks intersect at maximum darkness. This is the darkest moment in the story — and the one from which transformation must begin.',
      mistake: 'Spreading the All Is Lost across multiple scenes. The third crossing is a convergence — a specific moment when both tracks hit bottom together. Locate it precisely.',
      question: 'At what exact moment do external failure and internal despair converge — and is this genuinely the lowest point of the entire story?',
    },
    'Internal Res.': {
      page: 'Act 3 open',
      guidance: 'The internal track resolves first. The protagonist addresses the wound — accepts it, heals it, or sees through it. This internal resolution enables everything that follows on the external track. The order is critical: inner first, outer second.',
      mistake: 'Resolving the internal and external tracks simultaneously. The W-plot\'s central insight is that the inner must come first. External resolution without prior internal resolution feels like luck, not transformation.',
      question: 'What specifically happens on the internal track that enables the external resolution — and does the internal happen first?',
    },
    'Crossing 4': {
      page: 'Act 3 climax',
      guidance: 'Plot victory specifically embodies the emotional transformation. The external success confirms the internal change. What the protagonist does to achieve the external resolution is only possible because they have changed internally.',
      mistake: 'Having the external victory and the internal transformation feel like parallel events rather than one event. The crossing means they are the same event: the external victory IS the internal transformation made visible.',
      question: 'How does the way the protagonist achieves external success specifically prove their internal transformation — so that both confirmations happen simultaneously?',
    },
    'Resolution': {
      page: 'Act 3 close',
      guidance: 'Final state of both tracks. The resolution is whole — not just external success, but internal integration. Both the outer situation and the inner wound have been addressed.',
      mistake: 'Showing only the external resolution. The final scene must demonstrate both tracks are resolved — the protagonist in their new external situation AND behaving in a way that shows the internal transformation.',
      question: 'What does the final scene show about both the external situation and the internal state — and does it confirm that both tracks have genuinely resolved?',
    },
  },
  'harmon-pixar-hybrid': {
    'Circle Map': {
      page: 'Pre-writing — Step 1',
      guidance: 'Walk all 8 Story Circle beats first, treating them as the emotional engine. The hybrid works by layering structural beats (Save the Cat) over the emotional arc (Story Circle). Begin with the circle because emotion is primary — structure should serve the emotional journey, not replace it.',
      mistake: 'Starting with the structural map. If you map the structure first, you will force emotional beats into structural positions rather than letting emotion generate structure.',
      question: 'What is the complete emotional arc of your protagonist — the journey from comfort through need, unfamiliarity, searching, finding, paying, returning, and changing?',
    },
    'Structure Map': {
      page: 'Pre-writing — Step 2',
      guidance: 'Now lay the 15 Save the Cat beats over the emotional arc you mapped. Find the alignment points — where structural beats naturally coincide with emotional beats. Where they align strongly, the story will feel both emotionally true and structurally sound.',
      mistake: 'Forcing every structural beat onto every emotional beat. Many structural beats will not align with circle steps — they fall in between. That is correct. The aligned beats are the moments of maximum power.',
      question: 'Which structural beats align naturally with your emotional arc — and what do those alignment points tell you about where your story\'s most powerful moments will be?',
    },
    'Opening/You': {
      page: 'p. 1 / Circle: You',
      guidance: 'The Opening Image and the You beat are the same moment. The opening image should visually establish the protagonist\'s zone of comfort. The image is both a structural statement (Opening Image: what must change) and an emotional truth (You: here is who this person is right now).',
      mistake: 'Treating the opening as only structural or only emotional. The aligned beat works best when both functions are fully present: the image establishes comfort AND contains the visual thesis of the whole story.',
      question: 'What single opening image establishes both the protagonist\'s zone of comfort and the visual theme of the entire story?',
    },
    'Catalyst/Need': {
      page: 'p. 12 / Circle: Need',
      guidance: 'The Catalyst activates the protagonist\'s Need. These are ideally the same event: the life-changing disruption is the moment the protagonist\'s deepest need becomes unavoidable. When Catalyst and Need coincide, the structural disruption and the emotional wound are inseparable.',
      mistake: 'Having the Catalyst and Need arrive at different moments. If they are separate events, the story splits. Align them so the external disruption triggers the internal need.',
      question: 'How does the Catalyst not just disrupt the protagonist\'s world but specifically activate the need they have been suppressing?',
    },
    'B2/Go': {
      page: 'p. 25 / Circle: Go',
      guidance: 'Break into Two and the Go beat are the same crossing. The protagonist actively chooses to enter both the new story world (structural Act 2) and the unfamiliar situation (circle step 3). This choice must be active — the protagonist decides to go, in both the structural and emotional senses.',
      mistake: 'Making the crossing passive. Break into Two requires active choice. The Go beat requires the same. If the protagonist is carried into the new situation rather than choosing it, both beats are weakened.',
      question: 'What specific active choice does the protagonist make that simultaneously begins Act 2 and enters the unfamiliar situation?',
    },
    'F&G/Search': {
      page: 'pp. 30–55 / Circle: Search',
      guidance: 'The Fun and Games section is the Search. The protagonist adapts imperfectly to the new world while searching for what they need. The promise of the premise is expressed through the searching — the audience gets what they came for by watching the protagonist struggle and adapt.',
      mistake: 'Treating Fun and Games as unrelated to the Search. Every scene in this section should show the protagonist searching — for what they need, for how this new world works, for who they are in unfamiliar territory.',
      question: 'What does the protagonist\'s searching look and feel like in this section — and where does the fun of your premise live within that search?',
    },
    'Midpoint/Find': {
      page: 'p. 55 / Circle: Find',
      guidance: 'The Find arrives as a false summit at the Midpoint. The protagonist gets what they wanted — but it immediately creates a new and harder problem. Having what you wanted is the beginning of the real trouble.',
      mistake: 'Making the Find feel complete or resolved at the Midpoint. Finding what you want is supposed to complicate things, not resolve them. The Midpoint victory should immediately raise new stakes.',
      question: 'What does the protagonist get at the Midpoint — and why does getting it immediately create a more dangerous problem than not having it?',
    },
    'AIL/Take': {
      page: 'p. 75 / Circle: Take',
      guidance: 'All Is Lost and Take are the most powerful alignment in the hybrid. The structural low point — where something must die — is also the moment the protagonist pays the price for what they found. The cost of keeping what they found arrives at the moment of maximum structural devastation.',
      mistake: 'Separating the cost (Take) from the devastation (All Is Lost). When they coincide, the story\'s darkest moment is also its most meaningful — the protagonist loses something in order to keep something more important.',
      question: 'What does the protagonist give up at All Is Lost — and how is that cost specifically the price of keeping what they found at the Midpoint?',
    },
    'B3/Return': {
      page: 'p. 85 / Circle: Return',
      guidance: 'Break into Three and Return coincide. The protagonist moves back toward the familiar world with their new understanding. The B Story idea that unlocks Act 3 maps to the Return perspective: the protagonist uses what they found in the unfamiliar world to re-engage with the world they came from.',
      mistake: 'Treating Break into Three as a plot mechanic without emotional Return. The protagonist\'s new idea for Act 3 should feel like coming home to a new self.',
      question: 'What new understanding does the protagonist carry back from the unfamiliar situation — and how does it change how they re-engage with the world they came from?',
    },
    'FI/Change': {
      page: 'p. 110 / Circle: Change',
      guidance: 'Final Image must prove the Change beat. The closing image is not just the visual opposite of the opening — it is the proof that the protagonist\'s emotional transformation is complete and real. Structural and emotional completion in one frame.',
      mistake: 'Making the Final Image only structural (opposite of Opening Image) without confirming the emotional Change. The image should do both: show the changed world AND show the changed protagonist.',
      question: 'What single closing image simultaneously proves the protagonist\'s emotional transformation (Change) and establishes the opposite of the Opening Image?',
    },
  },
}

// Get guidance for a specific beat
function getBeatGuidance(framework, beatLabel) {
  if (!framework || !beatLabel) return null
  const fw = BEAT_GUIDANCE[framework]
  if (!fw) return null
  return fw[beatLabel] || null
}


// ─── Framework Progress Bar (Level 2) ────────────────────────────────────────

function FrameworkProgressBar({ framework, scenes, stubs }) {
  if (!framework || !stubs || stubs.length === 0) return null

  const completedLabels = new Set(
    scenes.filter(s => s.status === 'complete').map(s => s.beat_label).filter(Boolean)
  )
  const presentLabels = new Set(scenes.map(s => s.beat_label).filter(Boolean))
  const total    = stubs.length
  const present  = stubs.filter(s => presentLabels.has(s.beat_label)).length
  const complete = stubs.filter(s => completedLabels.has(s.beat_label)).length
  const pct      = Math.round((complete / total) * 100)

  // Group by act
  const acts = {}
  stubs.forEach(s => {
    const act = s.act_number || 1
    if (!acts[act]) acts[act] = []
    acts[act].push(s)
  })

  const actColors = { 1: '#2D5016', 2: 'var(--green)', 3: '#4a8a24' }

  return (
    <div style={{
      background: '#fff', border: '1px solid var(--border)', borderRadius: '12px',
      padding: '20px 22px', marginBottom: '20px',
      boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)',
    }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '13px', color: 'var(--text)' }}>
            Framework Progress
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', marginLeft: '10px' }}>
            {complete} of {total} beats complete
          </span>
        </div>
        <div style={{
          fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '13px',
          color: pct === 100 ? 'var(--green)' : 'var(--text-soft)',
        }}>
          {pct}%
        </div>
      </div>

      {/* Master progress bar */}
      <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', marginBottom: '18px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: pct + '%', borderRadius: '3px',
          background: 'linear-gradient(90deg, #2D5016, var(--green))',
          transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Beat dots by act */}
      {Object.entries(acts).sort(([a],[b]) => a - b).map(([act, actStubs]) => (
        <div key={act} style={{ marginBottom: '14px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-soft)',
            textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px',
          }}>
            Act {act}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {actStubs.map(stub => {
              const isPresent  = presentLabels.has(stub.beat_label)
              const isDone     = completedLabels.has(stub.beat_label)
              const guidance   = getBeatGuidance(framework, stub.beat_label)
              const color      = actColors[act] || 'var(--green)'
              return (
                <div key={stub.beat_label}
                  title={isDone ? stub.beat_label + ' — complete' : isPresent ? stub.beat_label + ' — in progress' : stub.beat_label + ' — not started'}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '4px 10px', borderRadius: '20px', fontSize: '11px',
                    fontFamily: 'var(--font-ui)', fontWeight: '600',
                    background: isDone ? color : isPresent ? 'var(--green-pale)' : '#F9FAFB',
                    color: isDone ? '#fff' : isPresent ? 'var(--green)' : 'var(--text-soft)',
                    border: isDone ? 'none' : isPresent ? '1px solid var(--green-border)' : '1px solid var(--border)',
                    cursor: guidance ? 'default' : 'default',
                    transition: 'all 0.15s',
                  }}>
                  {isDone && (
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M1.5 4.5l2 2L7.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {!isDone && isPresent && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', flexShrink: 0 }} />
                  )}
                  {stub.beat_label}
                  {guidance?.page && (
                    <span style={{ opacity: 0.6, fontWeight: '400', marginLeft: '2px' }}>{guidance.page}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Missing beats warning */}
      {(() => {
        const missing = stubs.filter(s => !presentLabels.has(s.beat_label)).map(s => s.beat_label)
        if (missing.length === 0 || scenes.length === 0) return null
        return (
          <div style={{
            marginTop: '12px', padding: '10px 14px', borderRadius: '8px',
            background: '#FFFBEB', border: '1px solid #FDE68A',
            fontSize: '12px', color: '#92400E', fontFamily: 'var(--font-body)', lineHeight: '1.55',
          }}>
            <strong style={{ fontFamily: 'var(--font-ui)' }}>Missing beats:</strong>{' '}
            {missing.join(', ')}
          </div>
        )
      })()}
    </div>
  )
}


// ─── Beat Guidance Panel (Level 1) ───────────────────────────────────────────

function BeatGuidancePanel({ framework, beatLabel }) {
  const guidance = getBeatGuidance(framework, beatLabel)
  if (!guidance) return null

  return (
    <div style={{
      marginTop: '14px', padding: '16px 18px', borderRadius: '10px',
      background: 'var(--green-pale)', border: '1px solid var(--green-border)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '700',
          color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.07em',
        }}>
          Beat Guide
        </span>
        {guidance.page && (
          <span style={{
            fontSize: '10px', fontFamily: 'var(--font-ui)', color: 'var(--text-soft)',
            background: '#fff', border: '1px solid var(--border)', borderRadius: '4px',
            padding: '1px 6px',
          }}>{guidance.page}</span>
        )}
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '11px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '5px' }}>
            What this beat must accomplish
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.65' }}>
            {guidance.guidance}
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--green-border)', paddingTop: '12px' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '11px', color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '5px' }}>
            Most common mistake
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.65' }}>
            {guidance.mistake}
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--green-border)', paddingTop: '12px' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '11px', color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '5px' }}>
            Ask yourself
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.65', fontStyle: 'italic' }}>
            {guidance.question}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Plot Holes Tab ────────────────────────────────────────────────────────────

function PlotHolesTab({ projectId, plotHoles, setPlotHoles, toast }) {
  const [adding,  setAdding]  = useState(false)
  const [form,    setForm]    = useState({ description: '', severity: 'medium' })
  const [saving,  setSaving]  = useState(false)

  const open     = plotHoles.filter(h => h.status === 'open')
  const resolved = plotHoles.filter(h => h.status === 'resolved')

  async function addHole() {
    if (!form.description.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('plot_holes')
      .insert({ project_id: projectId, ...form, description: form.description.trim(), status: 'open' })
      .select().single()
    if (data) {
      setPlotHoles(prev => [...prev, data])
      setForm({ description: '', severity: 'medium' })
      setAdding(false)
      toast.success('Plot hole flagged.')
    } else {
      toast.error('Could not save plot hole.')
    }
    setSaving(false)
  }

  async function toggleStatus(hole) {
    const newStatus = hole.status === 'open' ? 'resolved' : 'open'
    const { data } = await supabase.from('plot_holes').update({ status: newStatus }).eq('id', hole.id).select().single()
    if (data) setPlotHoles(prev => prev.map(h => h.id === hole.id ? data : h))
  }

  async function deleteHole(holeId) {
    const { error } = await supabase.from('plot_holes').delete().eq('id', holeId)
    if (error) { toast.error('Could not delete plot hole.'); return }
    setPlotHoles(prev => prev.filter(h => h.id !== holeId))
    toast.success('Plot hole removed.')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)' }}>
          {open.length} open · {resolved.length} resolved
        </p>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ fontSize: '13px', padding: '8px 16px' }}>
          + Flag a hole
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card-static" style={{ padding: '22px', marginBottom: '20px', borderColor: 'var(--amber-border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Flag a Plot Hole</p>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Describe the hole *</label>
            <textarea
              className="input"
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              placeholder="What doesn't add up? What needs fixing?"
              style={{ minHeight: '72px' }}
              autoFocus
            />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Severity</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['low', 'medium', 'high'].map(s => (
                <button key={s} onClick={() => setForm({...form, severity: s})} style={{
                  padding: '6px 14px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer',
                  border: form.severity === s ? '1px solid var(--green)' : '1px solid var(--border)',
                  background: form.severity === s ? 'var(--green-pale)' : 'transparent',
                  color: form.severity === s ? 'var(--green)' : 'var(--text-mid)',
                  fontFamily: 'var(--font-ui)',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s',
                }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addHole} disabled={!form.description.trim() || saving} style={{ fontSize: '13px', padding: '8px 16px', opacity: form.description.trim() ? 1 : 0.4 }}>
              {saving ? 'Saving…' : 'Flag hole'}
            </button>
            <button className="btn-ghost" onClick={() => setAdding(false)} style={{ fontSize: '13px', padding: '8px 16px' }}>Cancel</button>
          </div>
        </div>
      )}

      {plotHoles.length === 0 && !adding && (
        <div className="empty-state">
          <h3>No plot holes flagged</h3>
          <p>Every first draft has them. The ones you track are the ones you fix.</p>
        </div>
      )}

      {/* Open holes */}
      {open.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Open · {open.length}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {open.map(h => <HoleRow key={h.id} hole={h} onToggle={() => toggleStatus(h)} onDelete={() => deleteHole(h.id)} />)}
          </div>
        </div>
      )}

      {/* Resolved holes */}
      {resolved.length > 0 && (
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Resolved · {resolved.length}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.65 }}>
            {resolved.map(h => <HoleRow key={h.id} hole={h} onToggle={() => toggleStatus(h)} onDelete={() => deleteHole(h.id)} />)}
          </div>
        </div>
      )}
    </div>
  )
}

function HoleRow({ hole, onToggle, onDelete }) {
  const severityColor = {
    high:   { bg: '#FEF2F2', color: '#991B1B', border: '#FECACA' },
    medium: { bg: 'var(--amber-pale)', color: 'var(--amber)', border: 'var(--amber-border)' },
    low:    { bg: 'var(--off-white)', color: 'var(--text-mid)', border: 'var(--border)' },
  }
  const sc = severityColor[hole.severity] || severityColor.medium

  return (
    <div className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '10px', flex: 1, alignItems: 'flex-start' }}>
        <button
          onClick={onToggle}
          style={{
            width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
            background: hole.status === 'resolved' ? 'var(--green)' : 'transparent',
            border: `2px solid ${hole.status === 'resolved' ? 'var(--green)' : 'var(--border)'}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          {hole.status === 'resolved' && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.5', textDecoration: hole.status === 'resolved' ? 'line-through' : 'none' }}>
            {hole.description}
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '1px 6px', borderRadius: '3px', background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`, textTransform: 'capitalize' }}>
              {hole.severity}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-soft)' }}>{timeAgo(hole.created_at)}</span>
          </div>
        </div>
      </div>
      <button onClick={onDelete} style={{ background: 'none', border: 'none', color: 'var(--text-soft)', cursor: 'pointer', fontSize: '16px', lineHeight: 1, padding: '0 2px', flexShrink: 0 }} title="Delete">
        &times;
      </button>
    </div>
  )
}

// ─── Shared styles ─────────────────────────────────────────────────────────────

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: '600',
  color: 'var(--text-dark)',
  marginBottom: '5px',
  fontFamily: 'var(--font-ui)',
}

// ─── Loading / Error states ────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ width: '200px', height: '36px', borderRadius: '6px', marginBottom: '8px' }} className="skeleton" />
      <div style={{ width: '300px', height: '18px', borderRadius: '4px', marginBottom: '32px' }} className="skeleton" />
      <div className="project-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginBottom: '32px' }}>
        {[0,1,2,3].map(i => <div key={i} className="skeleton" style={{ height: '80px', borderRadius: '12px' }} />)}
      </div>
      <div style={{ height: '200px', borderRadius: '12px' }} className="skeleton" />
    </div>
  )
}

function ErrorState({ message }) {
  return (
    <div style={{ maxWidth: '1100px', margin: '80px auto', padding: '40px 24px', textAlign: 'center' }}>
      <div className="card-static" style={{ padding: '48px', maxWidth: '440px', margin: '0 auto' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', marginBottom: '20px' }}>{message}</p>
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">Back to dashboard</button>
        </Link>
      </div>
    </div>
  )
}

// ─── Timeline Tab ─────────────────────────────────────────────────────────────

function TimelineTab({ scenes, setScenes, toast, projectId }) {
  const ACT_COLORS = {
    1: { bg: '#EFF6E7', border: '#6AAF3D', text: '#2D5016', label: 'Act 1' },
    2: { bg: '#FFF7ED', border: '#F59E0B', text: '#92400E', label: 'Act 2' },
    3: { bg: '#EEF2FF', border: '#6366F1', text: '#4338CA', label: 'Act 3' },
  }

  const [expanded, setExpanded] = useState(null)
  const [toggling, setToggling] = useState(null)

  async function toggleStatus(scene) {
    if (toggling === scene.id) return
    setToggling(scene.id)
    const newStatus = scene.status === 'complete' ? 'draft' : 'complete'
    try {
      const { data, error } = await supabase
        .from('scenes')
        .update({ status: newStatus })
        .eq('id', scene.id)
        .select()
        .single()
      if (error) throw error
      setScenes(prev => prev.map(s => s.id === scene.id ? { ...s, status: newStatus } : s))
    } catch {
      toast.error('Could not update scene.')
    } finally {
      setToggling(null)
    }
  }

  const byAct = scenes.reduce((acc, s) => {
    const act = s.act_number || 1
    if (!acc[act]) acc[act] = []
    acc[act].push(s)
    return acc
  }, {})

  const acts = Object.keys(byAct).map(Number).sort()
  const totalDone = scenes.filter(s => s.status === 'complete').length
  const pct = scenes.length ? Math.round((totalDone / scenes.length) * 100) : 0

  if (scenes.length === 0) {
    return (
      <div className="empty-state" style={{ marginTop: '40px' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <h3>No scenes yet</h3>
        <p>Add scenes in the Scenes tab — they will appear here on the timeline.</p>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '60px' }}>

      {/* Header + progress */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>Story Timeline</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            {scenes.length} scene{scenes.length !== 1 ? 's' : ''} &middot; {acts.length} act{acts.length !== 1 ? 's' : ''} &middot; {totalDone} complete
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '120px', height: '6px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: '3px', background: 'var(--green)', width: `${pct}%`, transition: 'width 0.4s ease' }} />
          </div>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>{pct}%</span>
        </div>
      </div>

      {/* Act sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {acts.map(act => {
          const actScenes = byAct[act] || []
          const col = ACT_COLORS[act] || { bg: '#F5F5F5', border: '#999', text: '#555', label: `Act ${act}` }
          const actDone = actScenes.filter(s => s.status === 'complete').length
          return (
            <div key={act}>
              {/* Act header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  padding: '3px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700',
                  fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase',
                  background: col.bg, color: col.text, border: `1px solid ${col.border}`,
                }}>
                  {col.label}
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-soft)' }}>
                  {actDone}/{actScenes.length} complete
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Scene list — vertical */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {actScenes.map((scene, idx) => {
                  const done = scene.status === 'complete'
                  const isExpanded = expanded === scene.id
                  const isToggling = toggling === scene.id
                  return (
                    <div key={scene.id} style={{ display: 'flex', gap: '0', position: 'relative' }}>
                      {/* Timeline spine */}
                      <div style={{ width: '40px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* Node */}
                        <div style={{
                          width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                          background: done ? 'var(--green)' : '#fff',
                          border: `2px solid ${done ? 'var(--green)' : 'var(--border)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          zIndex: 1, marginTop: '14px',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                        }}
                          onClick={() => toggleStatus(scene)}
                          title={done ? 'Mark incomplete' : 'Mark complete'}
                        >
                          {isToggling ? (
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid', borderColor: done ? '#fff' : 'var(--text-soft)', borderTopColor: 'transparent', animation: 'spin 0.6s linear infinite' }} />
                          ) : done ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: '700', color: 'var(--text-soft)' }}>{idx + 1}</span>
                          )}
                        </div>
                        {/* Connector line */}
                        {idx < actScenes.length - 1 && (
                          <div style={{ flex: 1, width: '2px', background: done ? 'var(--green-border)' : 'var(--border)', minHeight: '16px' }} />
                        )}
                      </div>

                      {/* Scene card */}
                      <div style={{ flex: 1, paddingBottom: idx < actScenes.length - 1 ? '0' : '0', paddingTop: '8px', paddingLeft: '12px', paddingRight: '4px', paddingBottom: '16px' }}>
                        <div
                          style={{
                            border: `1px solid ${done ? 'var(--green-border)' : 'var(--border)'}`,
                            borderRadius: '10px',
                            background: done ? 'var(--green-pale)' : '#fff',
                            overflow: 'hidden',
                            transition: 'border-color 0.22s, box-shadow 0.22s',
                            boxShadow: done
                              ? '0 1px 4px rgba(45,80,22,0.10), inset 0 1px 0 rgba(255,255,255,0.7)'
                              : 'var(--shadow-xs), inset 0 1px 0 rgba(255,255,255,0.8)',
                          }}
                        >
                          {/* Scene header row */}
                          <div
                            style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                            onClick={() => setExpanded(isExpanded ? null : scene.id)}
                          >
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{
                                fontSize: '14px', fontWeight: '600', lineHeight: '1.35',
                                color: done ? 'var(--green)' : 'var(--text-dark)',
                                margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              }}>
                                {scene.title}
                              </p>
                              {scene.beat_label && (
                                <p style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', margin: '2px 0 0', letterSpacing: '0.03em' }}>
                                  {scene.beat_label}
                                </p>
                              )}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                              {done && (
                                <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--green)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Done</span>
                              )}
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text-soft)', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>

                          {/* Expanded notes */}
                          {isExpanded && (
                            <div style={{ padding: '0 16px 14px', borderTop: '1px solid var(--border)' }}>
                              {scene.notes ? (
                                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7', margin: '12px 0 0' }}>
                                  {scene.notes}
                                </p>
                              ) : (
                                <p style={{ fontSize: '13px', color: 'var(--text-soft)', fontStyle: 'italic', margin: '12px 0 0' }}>
                                  No notes for this scene.
                                </p>
                              )}
                              <button
                                onClick={() => toggleStatus(scene)}
                                disabled={isToggling}
                                style={{
                                  marginTop: '12px', padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '600',
                                  fontFamily: 'var(--font-ui)', cursor: 'pointer', border: 'none',
                                  background: done ? 'var(--off-white)' : 'var(--green)',
                                  color: done ? 'var(--text-mid)' : '#fff',
                                  transition: 'all 0.15s',
                                }}
                              >
                                {done ? 'Mark incomplete' : 'Mark complete'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ─── Themes Map Tab ────────────────────────────────────────────────────────────

function ThemesMapTab({ projectId, scenes, themes, setThemes, toast }) {
  const [adding,      setAdding]      = useState(false)
  const [newLabel,    setNewLabel]    = useState('')
  const [newType,     setNewType]     = useState('theme')
  const [newNotes,    setNewNotes]    = useState('')
  const [saving,      setSaving]      = useState(false)
  const [selected,    setSelected]    = useState(null)   // theme id | null
  const [links,       setLinks]       = useState([])     // [{ theme_id, scene_id }]
  const [positions,   setPositions]   = useState({})
  const [dragging,    setDragging]    = useState(null)
  const [editingId,   setEditingId]   = useState(null)
  const [editNotes,   setEditNotes]   = useState('')
  const svgRef = useRef(null)

  useEffect(() => {
    const pos = {}
    themes.forEach((t, i) => {
      const saved = t.canvas_x != null ? { x: t.canvas_x, y: t.canvas_y } : null
      pos[`theme-${t.id}`] = saved || { x: 100 + (i % 3) * 240, y: 60 + Math.floor(i / 3) * 110 }
    })
    scenes.forEach((s, i) => {
      pos[`scene-${s.id}`] = { x: 80 + (i % 4) * 200, y: 380 + Math.floor(i / 4) * 100 }
    })
    setPositions(pos)
    const allLinks = []
    themes.forEach(t => {
      const linked = t.linked_scenes ? JSON.parse(t.linked_scenes) : []
      linked.forEach(sid => allLinks.push({ theme_id: t.id, scene_id: sid }))
    })
    setLinks(allLinks)
  }, [themes.length, scenes.length])

  async function addTheme() {
    if (!newLabel.trim()) return
    setSaving(true)
    const { data, error } = await supabase
      .from('themes')
      .insert({ project_id: projectId, label: newLabel.trim(), type: newType, notes: newNotes.trim() || null, linked_scenes: '[]', canvas_x: null, canvas_y: null })
      .select().single()
    setSaving(false)
    if (error) { toast.error('Failed to add theme'); return }
    setThemes(prev => [...prev, data])
    setNewLabel('')
    setNewNotes('')
    setAdding(false)
    toast.success('Theme added')
  }

  async function deleteTheme(id) {
    const { error } = await supabase.from('themes').delete().eq('id', id)
    if (error) { toast.error('Failed to delete'); return }
    setThemes(prev => prev.filter(t => t.id !== id))
    setLinks(prev => prev.filter(l => l.theme_id !== id))
    if (selected === id) setSelected(null)
    toast.success('Theme removed')
  }

  async function saveNotes(themeId, notes) {
    await supabase.from('themes').update({ notes }).eq('id', themeId)
    setThemes(prev => prev.map(t => t.id === themeId ? { ...t, notes } : t))
  }

  async function savePosition(themeId, x, y) {
    await supabase.from('themes').update({ canvas_x: Math.round(x), canvas_y: Math.round(y) }).eq('id', themeId)
  }

  async function toggleLink(themeId, sceneId) {
    const existing = links.find(l => l.theme_id === themeId && l.scene_id === sceneId)
    let newLinks
    if (existing) {
      newLinks = links.filter(l => !(l.theme_id === themeId && l.scene_id === sceneId))
    } else {
      newLinks = [...links, { theme_id: themeId, scene_id: sceneId }]
    }
    setLinks(newLinks)
    const themeLinks = newLinks.filter(l => l.theme_id === themeId).map(l => l.scene_id)
    await supabase.from('themes').update({ linked_scenes: JSON.stringify(themeLinks) }).eq('id', themeId)
  }

  function onNodeMouseDown(e, nodeKey) {
    e.preventDefault()
    e.stopPropagation()
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const pos = positions[nodeKey] || { x: 0, y: 0 }
    setDragging({ nodeKey, ox: e.clientX - rect.left - pos.x, oy: e.clientY - rect.top - pos.y })
  }

  function onSvgMouseMove(e) {
    if (!dragging) return
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const x = Math.max(0, e.clientX - rect.left - dragging.ox)
    const y = Math.max(0, e.clientY - rect.top - dragging.oy)
    setPositions(prev => ({ ...prev, [dragging.nodeKey]: { x, y } }))
  }

  function onSvgMouseUp() {
    if (!dragging) return
    if (dragging.nodeKey.startsWith('theme-')) {
      const themeId = dragging.nodeKey.replace('theme-', '')
      const pos = positions[dragging.nodeKey]
      if (pos) savePosition(themeId, pos.x, pos.y)
    }
    setDragging(null)
  }

  const THEME_COLORS = {
    theme:    { bg: '#2D5016', text: '#e8f4d4', border: '#1A3009', label: 'Theme' },
    motif:    { bg: '#7A4C07', text: '#fff7ed', border: '#5a3605', label: 'Motif' },
    question: { bg: '#3730A3', text: '#eef2ff', border: '#2e27a0', label: 'Question' },
    symbol:   { bg: '#0F766E', text: '#f0fdfa', border: '#0c6b64', label: 'Symbol' },
  }

  const selectedTheme = selected ? themes.find(t => t.id === selected) : null

  // Calculate canvas height based on node positions
  const maxY = Object.values(positions).reduce((m, p) => Math.max(m, p.y + 100), 500)
  const canvasH = Math.max(560, maxY + 80)

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>Themes Map</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            Add themes, motifs, and symbols. Drag to arrange. Click a theme node to link it to scenes.
          </p>
        </div>
        <button className="btn-primary" onClick={() => setAdding(true)} style={{ flexShrink: 0 }}>
          + Add
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="card" style={{ padding: '18px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '10px' }}>
            <div style={{ flex: 1, minWidth: '160px' }}>
              <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Label</label>
              <input className="input" placeholder="e.g. Identity, Guilt, The Watch…" value={newLabel}
                onChange={e => setNewLabel(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addTheme()}
                autoFocus
              />
            </div>
            <div style={{ minWidth: '140px' }}>
              <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Type</label>
              <select className="input" value={newType} onChange={e => setNewType(e.target.value)}>
                <option value="theme">Theme</option>
                <option value="motif">Motif</option>
                <option value="question">Question</option>
                <option value="symbol">Symbol</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Notes (optional)</label>
            <textarea className="input" placeholder="How does this theme manifest in the story?" value={newNotes}
              onChange={e => setNewNotes(e.target.value)}
              rows={2}
              style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={addTheme} disabled={saving}>{saving ? 'Adding…' : 'Add'}</button>
            <button className="btn-ghost" onClick={() => { setAdding(false); setNewLabel(''); setNewNotes('') }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {Object.entries(THEME_COLORS).map(([type, c]) => (
          <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: c.bg }} />
            {c.label}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--off-white)', border: '1.5px solid var(--border)' }} />
          Scene
        </div>
      </div>

      {themes.length === 0 && scenes.length === 0 ? (
        <div className="empty-state" style={{ marginTop: '20px' }}>
          <h3>Nothing here yet</h3>
          <p>Add themes above, then add scenes in the Scenes tab — they will appear here to link.</p>
        </div>
      ) : (
        <>
          {/* Canvas */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', background: '#f8f9f4', overflow: 'auto', position: 'relative' }}>
            <svg
              ref={svgRef}
              width="900"
              height={canvasH}
              style={{ display: 'block', cursor: dragging ? 'grabbing' : 'default', userSelect: 'none', minWidth: '100%' }}
              onMouseMove={onSvgMouseMove}
              onMouseUp={onSvgMouseUp}
              onMouseLeave={onSvgMouseUp}
            >
              {/* Dot grid */}
              <defs>
                <pattern id="tmgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#d4ddc8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tmgrid)" />

              {/* Zone labels */}
              {themes.length > 0 && (
                <text x="14" y="22" style={{ fontSize: '10px', fill: '#9aab8a', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  THEMES
                </text>
              )}
              {scenes.length > 0 && (
                <text x="14" y="368" style={{ fontSize: '10px', fill: '#9aab8a', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  SCENES
                </text>
              )}
              {/* Divider line between zones */}
              {themes.length > 0 && scenes.length > 0 && (
                <line x1="0" y1="355" x2="900" y2="355" stroke="#d4ddc8" strokeWidth="1" strokeDasharray="6,5" />
              )}

              {/* Links */}
              {links.map(link => {
                const tp = positions[`theme-${link.theme_id}`]
                const sp = positions[`scene-${link.scene_id}`]
                if (!tp || !sp) return null
                const theme = themes.find(t => t.id === link.theme_id)
                const col = theme ? (THEME_COLORS[theme.type] || THEME_COLORS.theme) : THEME_COLORS.theme
                return (
                  <line
                    key={`${link.theme_id}-${link.scene_id}`}
                    x1={tp.x + 60} y1={tp.y + 22}
                    x2={sp.x + 56} y2={sp.y + 18}
                    stroke={col.bg} strokeWidth="2" strokeDasharray="6,4" opacity="0.55"
                  />
                )
              })}

              {/* Scene nodes */}
              {scenes.map(scene => {
                const pos = positions[`scene-${scene.id}`] || { x: 0, y: 0 }
                const isLinked = selectedTheme
                  ? links.some(l => l.theme_id === selectedTheme.id && l.scene_id === scene.id)
                  : false
                return (
                  <g
                    key={scene.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, `scene-${scene.id}`)}
                    onClick={() => {
                      if (selectedTheme) toggleLink(selectedTheme.id, scene.id)
                    }}
                    style={{ cursor: selectedTheme ? 'pointer' : 'grab' }}
                  >
                    <rect
                      width="112" height="36" rx="6"
                      fill={isLinked ? '#e8f4d4' : 'white'}
                      stroke={isLinked ? '#2D5016' : 'var(--border)'}
                      strokeWidth={isLinked ? '2' : '1.5'}
                    />
                    {selectedTheme && !isLinked && (
                      <rect width="112" height="36" rx="6" fill="rgba(45,80,22,0.04)" />
                    )}
                    <text x="56" y="23" textAnchor="middle"
                      style={{ fontSize: '11px', fill: isLinked ? '#2D5016' : 'var(--text-dark)', fontFamily: 'var(--font-sans)', fontWeight: isLinked ? '600' : '400', pointerEvents: 'none' }}
                    >
                      {scene.title.length > 14 ? scene.title.slice(0, 13) + '…' : scene.title}
                    </text>
                  </g>
                )
              })}

              {/* Theme nodes */}
              {themes.map(theme => {
                const pos = positions[`theme-${theme.id}`] || { x: 0, y: 0 }
                const col = THEME_COLORS[theme.type] || THEME_COLORS.theme
                const isSelected = selected === theme.id
                const linkedCount = links.filter(l => l.theme_id === theme.id).length
                return (
                  <g
                    key={theme.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, `theme-${theme.id}`)}
                    onClick={() => setSelected(isSelected ? null : theme.id)}
                    style={{ cursor: 'grab' }}
                  >
                    <rect
                      width="120" height="44" rx="10"
                      fill={col.bg}
                      stroke={isSelected ? '#fff' : col.border}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                    />
                    {isSelected && (
                      <rect width="120" height="44" rx="10" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="4,3" />
                    )}
                    <text x="60" y="16" textAnchor="middle"
                      style={{ fontSize: '9px', fill: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-mono)', letterSpacing: '0.09em', textTransform: 'uppercase', pointerEvents: 'none' }}
                    >
                      {col.label}
                    </text>
                    <text x="60" y="33" textAnchor="middle"
                      style={{ fontSize: '12px', fontWeight: '600', fill: col.text, fontFamily: 'var(--font-sans)', pointerEvents: 'none' }}
                    >
                      {theme.label.length > 14 ? theme.label.slice(0, 13) + '…' : theme.label}
                    </text>
                    {linkedCount > 0 && (
                      <>
                        <circle cx="108" cy="8" r="9" fill="white" />
                        <text x="108" y="12" textAnchor="middle"
                          style={{ fontSize: '9px', fontWeight: '700', fill: col.bg, fontFamily: 'var(--font-mono)', pointerEvents: 'none' }}
                        >{linkedCount}</text>
                      </>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Linking instruction bar */}
          {selectedTheme ? (
            <div style={{ marginTop: '14px', padding: '12px 18px', borderRadius: '10px', background: 'var(--green-pale)', border: '1px solid var(--green)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: (THEME_COLORS[selectedTheme.type] || THEME_COLORS.theme).bg, flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)' }}>
                  Linking: &ldquo;{selectedTheme.label}&rdquo;
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)' }}>
                  &mdash; click scene nodes above to connect or disconnect
                </span>
              </div>
              <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 12px' }} onClick={() => setSelected(null)}>
                Done
              </button>
            </div>
          ) : (
            <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-soft)', textAlign: 'center' }}>
              Click a theme node to link scenes &middot; Drag any node to reposition
            </p>
          )}

          {/* Theme list */}
          {themes.length > 0 && (
            <div style={{ marginTop: '28px' }}>
              <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                All entries ({themes.length})
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {themes.map(t => {
                  const col = THEME_COLORS[t.type] || THEME_COLORS.theme
                  const linkedScenes = links.filter(l => l.theme_id === t.id)
                  const isEditing = editingId === t.id
                  return (
                    <div key={t.id} style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--white)', boxShadow: 'var(--shadow-xs), inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: col.bg, flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-dark)' }}>{t.label}</span>
                          <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>{col.label.toLowerCase()}</span>
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                          {linkedScenes.length} scene{linkedScenes.length !== 1 ? 's' : ''}
                        </span>
                        <button
                          className="btn-ghost"
                          style={{ fontSize: '11px', padding: '4px 10px' }}
                          onClick={() => {
                            if (isEditing) {
                              setEditingId(null)
                            } else {
                              setEditingId(t.id)
                              setEditNotes(t.notes || '')
                            }
                          }}
                        >
                          {isEditing ? 'Close' : 'Notes'}
                        </button>
                        <button
                          className="btn-danger"
                          style={{ fontSize: '11px', padding: '4px 10px' }}
                          onClick={() => deleteTheme(t.id)}
                        >
                          Remove
                        </button>
                      </div>
                      {isEditing && (
                        <div style={{ marginTop: '10px' }}>
                          <textarea
                            className="input"
                            value={editNotes}
                            onChange={e => setEditNotes(e.target.value)}
                            placeholder="How does this theme manifest? What scenes carry it? What does it mean for the story?"
                            rows={3}
                            style={{ resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
                          />
                          <button
                            className="btn-primary"
                            style={{ marginTop: '8px', fontSize: '12px', padding: '6px 14px' }}
                            onClick={() => { saveNotes(t.id, editNotes); setEditingId(null); toast.success('Notes saved') }}
                          >
                            Save notes
                          </button>
                        </div>
                      )}
                      {!isEditing && t.notes && (
                        <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-mid)', lineHeight: '1.6', paddingLeft: '20px' }}>{t.notes}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

// ─── Story Map Tab ─────────────────────────────────────────────────────────────

const SM_NODE = {
  scene:     { w: 148, h: 48, rx: 8,  bg: '#0D9488', stroke: '#0F766E', fg: '#fff' },
  character: { w: 136, h: 44, rx: 22, bg: '#7C3AED', stroke: '#6D28D9', fg: '#fff' },
  theme:     { w: 128, h: 40, rx: 6,  bg: '#2D5016', stroke: '#1A3009', fg: '#fff' },
  subplot:   { w: 136, h: 44, rx: 6,  bg: '#C3D9A8', stroke: '#7A4C07', fg: '#fff' },
}

const ACT_ZONE = {
  1: { fill: 'rgba(239,246,231,0.7)', stroke: '#C3D9A8' },
  2: { fill: 'rgba(254,243,226,0.7)', stroke: '#F5C57A' },
  3: { fill: 'rgba(238,242,255,0.7)', stroke: '#C7D2FE' },
}

function smNodeType(key) {
  if (key.startsWith('scene-'))   return 'scene'
  if (key.startsWith('char-'))    return 'character'
  if (key.startsWith('theme-'))   return 'theme'
  if (key.startsWith('subplot-')) return 'subplot'
  return 'scene'
}

function smCenter(pos, key) {
  const nt = SM_NODE[smNodeType(key)] || SM_NODE.scene
  return { x: pos.x + nt.w / 2, y: pos.y + nt.h / 2 }
}

function smPath(from, to) {
  const dx = to.x - from.x
  const cx1 = from.x + dx * 0.45
  const cx2 = to.x  - dx * 0.45
  return `M ${from.x} ${from.y} C ${cx1} ${from.y} ${cx2} ${to.y} ${to.x} ${to.y}`
}

function tryParseMap(str) {
  try { return JSON.parse(str) } catch { return null }
}

function StoryMapTab({ projectId, project, scenes, setScenes, characters, setCharacters, themes, setThemes, onUpdateProject, toast }) {
  const svgRef     = React.useRef(null)
  const saveTimer  = React.useRef(null)

  const [positions,   setPositions]   = React.useState({})
  const [edges,       setEdges]       = React.useState([])
  const [dragging,    setDragging]    = React.useState(null)
  const [connectMode, setConnectMode] = React.useState(false)
  const [connectFrom, setConnectFrom] = React.useState(null)
  const [mousePos,    setMousePos]    = React.useState({ x: 0, y: 0 })
  const [selected,    setSelected]    = React.useState(null)
  const [showAdd,     setShowAdd]     = React.useState(null)
  const [addForm,     setAddForm]     = React.useState({})
  const [saving,      setSaving]      = React.useState(false)
  const [initialized, setInitialized] = React.useState(false)
  const [canvasW,     setCanvasW]     = React.useState(900)

  // Measure canvas width
  React.useEffect(() => {
    if (svgRef.current) setCanvasW(svgRef.current.clientWidth || 900)
  }, [])

  // All displayable nodes
  const allNodes = React.useMemo(() => [
    ...scenes.map(s     => ({ key: `scene-${s.id}`,     label: s.title,   sub: s.beat_label ? s.beat_label : `Act ${s.act_number || 1}`, type: 'scene' })),
    ...characters.map(c => ({ key: `char-${c.id}`,      label: c.name,    sub: c.role || '',                                             type: 'character' })),
    ...themes.filter(t => t.type !== 'subplot').map(t => ({ key: `theme-${t.id}`,   label: t.label, sub: t.type,    type: 'theme' })),
    ...themes.filter(t => t.type === 'subplot').map(t => ({ key: `subplot-${t.id}`, label: t.label, sub: 'subplot', type: 'subplot' })),
  ], [scenes, characters, themes])

  // Auto-layout: acts as columns, chars at top, themes at bottom
  const buildAutoLayout = React.useCallback(() => {
    const W = canvasW || 900
    const pos = {}

    // Characters: top row
    characters.forEach((c, i) => {
      pos[`char-${c.id}`] = { x: 60 + i * 170, y: 32 }
    })

    // Scenes: grouped by act in columns
    const byAct = {}
    scenes.forEach(s => {
      const a = s.act_number || 1
      if (!byAct[a]) byAct[a] = []
      byAct[a].push(s)
    })
    const acts = Object.keys(byAct).map(Number).sort()
    const actW = Math.max(200, Math.floor((W - 80) / Math.max(acts.length, 1)))
    acts.forEach((act, ai) => {
      byAct[act].forEach((s, si) => {
        pos[`scene-${s.id}`] = { x: 50 + ai * actW, y: 140 + si * 92 }
      })
    })

    // Themes + subplots: bottom row
    const maxRows = Math.max(...Object.values(byAct).map(a => a.length), 0)
    const bottomY = 140 + maxRows * 92 + 56
    themes.forEach((t, i) => {
      const key = t.type === 'subplot' ? `subplot-${t.id}` : `theme-${t.id}`
      pos[key] = { x: 60 + i * 158, y: bottomY }
    })

    // Auto-edges: sequential within acts + act breaks between acts
    const autoEdges = []
    acts.forEach((act, ai) => {
      const as = byAct[act] || []
      as.forEach((s, si) => {
        if (si < as.length - 1) {
          autoEdges.push({ id: `seq-${s.id}`, from: `scene-${s.id}`, to: `scene-${as[si+1].id}`, type: 'sequence', label: '' })
        }
      })
      if (ai < acts.length - 1) {
        const thisAct = byAct[act], nextAct = byAct[acts[ai+1]]
        if (thisAct?.length && nextAct?.length) {
          autoEdges.push({
            id: `act-${act}-${acts[ai+1]}`,
            from: `scene-${thisAct[thisAct.length - 1].id}`,
            to:   `scene-${nextAct[0].id}`,
            type: 'act-break',
            label: `Act ${acts[ai+1]}`,
          })
        }
      }
    })
    return { pos, edges: autoEdges }
  }, [scenes, characters, themes, canvasW])

  // Load saved layout or auto-arrange
  React.useEffect(() => {
    if (initialized) return
    const saved = project?.story_map_json ? tryParseMap(project.story_map_json) : null
    if (saved?.positions && Object.keys(saved.positions).length > 0) {
      setPositions(saved.positions)
      setEdges(saved.edges || [])
    } else {
      const { pos, edges: ae } = buildAutoLayout()
      setPositions(pos)
      setEdges(ae)
    }
    setInitialized(true)
  }, [initialized, buildAutoLayout, project])

  // Debounced save
  function queueSave(pos, eds) {
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => doSave(pos, eds), 1400)
  }

  async function doSave(pos, eds) {
    setSaving(true)
    try {
      await supabase.from('projects').update({
        story_map_json: JSON.stringify({ positions: pos, edges: eds }),
        updated_at: new Date().toISOString(),
      }).eq('id', projectId)
    } catch (e) {
      console.warn('Story map save failed (run migration):', e)
      try { localStorage.setItem(`eve_sm_${projectId}`, JSON.stringify({ positions: pos, edges: eds })) } catch {}
    }
    setSaving(false)
  }

  // Drag
  function onNodeMouseDown(e, key) {
    if (connectMode) return
    e.preventDefault(); e.stopPropagation()
    const svg = svgRef.current; if (!svg) return
    const rect = svg.getBoundingClientRect()
    const p = positions[key] || { x: 0, y: 0 }
    setDragging({ key, ox: e.clientX - rect.left - p.x, oy: e.clientY - rect.top - p.y })
  }

  function onSvgMouseMove(e) {
    const svg = svgRef.current; if (!svg) return
    const rect = svg.getBoundingClientRect()
    const x = e.clientX - rect.left, y = e.clientY - rect.top
    setMousePos({ x, y })
    if (!dragging) return
    setPositions(prev => ({ ...prev, [dragging.key]: { x: x - dragging.ox, y: y - dragging.oy } }))
  }

  function onSvgMouseUp() {
    if (dragging) { queueSave(positions, edges); setDragging(null) }
  }

  // Connect
  function onNodeClick(e, key) {
    e.stopPropagation()
    if (!connectMode) { setSelected(selected === key ? null : key); return }
    if (!connectFrom) { setConnectFrom(key); return }
    if (connectFrom === key) { setConnectFrom(null); return }
    const newEdge = { id: `e-${Date.now()}`, from: connectFrom, to: key, type: 'custom', label: '' }
    const newEdges = [...edges, newEdge]
    setEdges(newEdges); setConnectFrom(null)
    queueSave(positions, newEdges)
  }

  function deleteEdge(edgeId) {
    const newEdges = edges.filter(e => e.id !== edgeId)
    setEdges(newEdges); setSelected(null)
    queueSave(positions, newEdges)
  }

  // Auto-arrange reset
  function doAutoArrange() {
    const { pos, edges: ae } = buildAutoLayout()
    setPositions(pos); setEdges(ae)
    queueSave(pos, ae)
  }

  // Add nodes from canvas
  async function submitAdd() {
    if (!showAdd) return
    setSaving(true)
    try {
      if (showAdd === 'scene') {
        const { data, error } = await supabase.from('scenes')
          .insert({ project_id: projectId, title: addForm.title || 'New Scene', act_number: Number(addForm.act) || 1, order_index: scenes.length })
          .select().single()
        if (!error && data) {
          setScenes(prev => [...prev, data])
          const key = `scene-${data.id}`
          const np = { ...positions, [key]: { x: 180 + Math.random() * 220, y: 200 + Math.random() * 80 } }
          setPositions(np); queueSave(np, edges)
          toast.success('Scene added')
        }
      } else if (showAdd === 'character') {
        const { data, error } = await supabase.from('characters')
          .insert({ project_id: projectId, name: addForm.name || 'New Character', role: addForm.role || '' })
          .select().single()
        if (!error && data) {
          setCharacters(prev => [...prev, data])
          const key = `char-${data.id}`
          const np = { ...positions, [key]: { x: 180 + Math.random() * 220, y: 32 } }
          setPositions(np); queueSave(np, edges)
          toast.success('Character added')
        }
      } else if (showAdd === 'subplot') {
        const { data, error } = await supabase.from('themes')
          .insert({ project_id: projectId, label: addForm.label || 'New Subplot', type: 'subplot', linked_scenes: '[]' })
          .select().single()
        if (!error && data) {
          setThemes(prev => [...prev, data])
          const key = `subplot-${data.id}`
          const np = { ...positions, [key]: { x: 180 + Math.random() * 220, y: 480 } }
          setPositions(np); queueSave(np, edges)
          toast.success('Subplot added')
        }
      }
    } catch (e) { toast.error('Failed to add') }
    setSaving(false); setShowAdd(null); setAddForm({})
  }

  // Dynamic canvas height
  const canvasH = Math.max(560, ...Object.values(positions).map(p => p.y + 80))

  // Act zones for background shading
  const actZones = React.useMemo(() => {
    const byAct = {}
    scenes.forEach(s => {
      const a = s.act_number || 1
      if (!byAct[a]) byAct[a] = []
      byAct[a].push(s)
    })
    return Object.keys(byAct).map(Number).sort().map(act => {
      const actScenes = byAct[act].map(s => positions[`scene-${s.id}`]).filter(Boolean)
      if (!actScenes.length) return null
      const nt = SM_NODE.scene
      const pad = 22
      return {
        act,
        x: Math.min(...actScenes.map(p => p.x)) - pad,
        y: Math.min(...actScenes.map(p => p.y)) - pad,
        w: Math.max(...actScenes.map(p => p.x)) + nt.w - Math.min(...actScenes.map(p => p.x)) + pad * 2,
        h: Math.max(...actScenes.map(p => p.y)) + nt.h - Math.min(...actScenes.map(p => p.y)) + pad * 2,
      }
    }).filter(Boolean)
  }, [scenes, positions])

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h2 style={{ fontSize: '18px', marginBottom: '3px' }}>Story Map</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
            {scenes.length} scene{scenes.length !== 1 ? 's' : ''} &middot; {characters.length} character{characters.length !== 1 ? 's' : ''} &middot; {themes.length} theme{themes.length !== 1 ? 's' : ''}
            {saving && <span style={{ marginLeft: '10px', color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>Saving&hellip;</span>}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={doAutoArrange}>
            Auto-arrange
          </button>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={() => { setShowAdd('scene'); setAddForm({ act: 1 }) }}>
            + Scene
          </button>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={() => { setShowAdd('character'); setAddForm({}) }}>
            + Character
          </button>
          <button className="btn-ghost" style={{ fontSize: '12px', padding: '6px 13px' }} onClick={() => { setShowAdd('subplot'); setAddForm({}) }}>
            + Subplot
          </button>
          <button
            onClick={() => { setConnectMode(v => !v); setConnectFrom(null) }}
            style={{
              fontSize: '12px', padding: '6px 13px', cursor: 'pointer',
              fontFamily: 'var(--font-ui)', borderRadius: 'var(--radius-btn)',
              border: '1px solid', transition: 'all 0.15s',
              background: connectMode ? 'var(--green)'         : 'transparent',
              color:      connectMode ? '#fff'                  : 'var(--text-mid)',
              borderColor: connectMode ? 'var(--green)'         : 'var(--border)',
            }}>
            {connectMode ? (connectFrom ? 'Pick target...' : 'Pick source...') : 'Draw line'}
          </button>
        </div>
      </div>

      {/* Add node form */}
      {showAdd && (
        <div style={{ padding: '16px 18px', marginBottom: '14px', background: 'var(--green-pale)', borderRadius: '10px', border: '1px solid var(--green-border)', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {showAdd === 'scene' && (
            <>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Scene title</label>
                <input className="input" placeholder="e.g. Opening argument" value={addForm.title || ''} onChange={e => setAddForm(f => ({ ...f, title: e.target.value }))} autoFocus onKeyDown={e => e.key === 'Enter' && submitAdd()} />
              </div>
              <div style={{ minWidth: '110px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Act</label>
                <select className="input" value={addForm.act || 1} onChange={e => setAddForm(f => ({ ...f, act: e.target.value }))}>
                  <option value={1}>Act 1</option>
                  <option value={2}>Act 2</option>
                  <option value={3}>Act 3</option>
                </select>
              </div>
            </>
          )}
          {showAdd === 'character' && (
            <>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                <input className="input" placeholder="Character name" value={addForm.name || ''} onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))} autoFocus onKeyDown={e => e.key === 'Enter' && submitAdd()} />
              </div>
              <div style={{ flex: 1, minWidth: '140px' }}>
                <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</label>
                <input className="input" placeholder="e.g. Protagonist" value={addForm.role || ''} onChange={e => setAddForm(f => ({ ...f, role: e.target.value }))} onKeyDown={e => e.key === 'Enter' && submitAdd()} />
              </div>
            </>
          )}
          {showAdd === 'subplot' && (
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subplot name</label>
              <input className="input" placeholder="e.g. The love story" value={addForm.label || ''} onChange={e => setAddForm(f => ({ ...f, label: e.target.value }))} autoFocus onKeyDown={e => e.key === 'Enter' && submitAdd()} />
            </div>
          )}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" style={{ padding: '9px 18px', fontSize: '13px' }} onClick={submitAdd} disabled={saving}>
              {saving ? 'Adding...' : 'Add to map'}
            </button>
            <button className="btn-ghost" style={{ padding: '9px 14px', fontSize: '13px' }} onClick={() => { setShowAdd(null); setAddForm({}) }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Connect mode banner */}
      {connectMode && (
        <div style={{ padding: '10px 16px', marginBottom: '12px', background: 'var(--amber-pale)', borderRadius: '8px', border: '1px solid var(--amber-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: 'var(--amber)' }}>
            {connectFrom
              ? `Source selected. Click a target node to connect.`
              : 'Click any node to start drawing a connection.'}
          </span>
          <button onClick={() => { setConnectMode(false); setConnectFrom(null) }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--amber)', lineHeight: 1, padding: '0 2px' }}>
            &times;
          </button>
        </div>
      )}

      {scenes.length === 0 && characters.length === 0 ? (
        <div className="empty-state" style={{ marginTop: '24px' }}>
          <h3>Nothing to map yet</h3>
          <p>Add scenes and characters in their tabs. They auto-map here.</p>
        </div>
      ) : (
        <>
          {/* Canvas */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', background: '#FAFAF9' }}>
            <svg
              ref={svgRef}
              width="100%"
              height={canvasH}
              style={{
                display: 'block',
                cursor: dragging ? 'grabbing' : connectMode ? 'crosshair' : 'default',
                userSelect: 'none',
              }}
              onMouseMove={onSvgMouseMove}
              onMouseUp={onSvgMouseUp}
              onMouseLeave={onSvgMouseUp}
              onClick={() => { if (!connectMode) setSelected(null) }}
            >
              <defs>
                {/* Dot grid pattern */}
                <pattern id="smgrid" width="26" height="26" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.4" fill="#C8BEB5" opacity="0.5" />
                </pattern>
                {/* Arrow markers */}
                <marker id="sm-arrow"       markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="#94A3B8" />
                </marker>
                <marker id="sm-arrow-green" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="var(--green)" />
                </marker>
                <marker id="sm-arrow-amber" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="#C3D9A8" />
                </marker>
              </defs>

              {/* Dot background */}
              <rect width="100%" height="100%" fill="url(#smgrid)" />

              {/* Act zone backgrounds */}
              {actZones.map(zone => {
                const z = ACT_ZONE[zone.act] || ACT_ZONE[1]
                return (
                  <g key={`zone-${zone.act}`}>
                    <rect x={zone.x} y={zone.y} width={zone.w} height={zone.h}
                      fill={z.fill} stroke={z.stroke} strokeWidth="1" rx="14" />
                    <text x={zone.x + 12} y={zone.y + 17}
                      style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fill: '#888', letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                      ACT {zone.act}
                    </text>
                  </g>
                )
              })}

              {/* Edges */}
              {edges.map(edge => {
                const fp = positions[edge.from], tp = positions[edge.to]
                if (!fp || !tp) return null
                const fc = smCenter(fp, edge.from), tc = smCenter(tp, edge.to)
                const isSel     = selected === `edge-${edge.id}`
                const isActBrk  = edge.type === 'act-break'
                const isCustom  = edge.type === 'custom'
                const color     = isSel ? 'var(--green)' : isActBrk ? '#C3D9A8' : '#94A3B8'
                const markerId  = isSel ? 'sm-arrow-green' : isActBrk ? 'sm-arrow-amber' : 'sm-arrow'
                const d         = smPath(fc, tc)
                return (
                  <g key={edge.id} onClick={e => { e.stopPropagation(); setSelected(`edge-${edge.id}`) }} style={{ cursor: 'pointer' }}>
                    <path d={d} fill="none" stroke="transparent" strokeWidth="14" />
                    <path d={d} fill="none" stroke={color}
                      strokeWidth={isSel ? 2.5 : 1.8}
                      strokeDasharray={isCustom ? '6,4' : 'none'}
                      markerEnd={`url(#${markerId})`}
                      opacity={isSel ? 1 : 0.75}
                    />
                    {edge.label && (
                      <text x={(fc.x + tc.x) / 2} y={(fc.y + tc.y) / 2 - 7}
                        textAnchor="middle"
                        style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', fill: color, letterSpacing: '0.07em', pointerEvents: 'none' }}>
                        {edge.label.toUpperCase()}
                      </text>
                    )}
                  </g>
                )
              })}

              {/* Connect preview line */}
              {connectMode && connectFrom && positions[connectFrom] && (() => {
                const fp = positions[connectFrom]
                const fc = smCenter(fp, connectFrom)
                return (
                  <path d={smPath(fc, mousePos)}
                    fill="none" stroke="var(--green)" strokeWidth="1.8"
                    strokeDasharray="7,4" markerEnd="url(#sm-arrow-green)" opacity="0.65" />
                )
              })()}

              {/* Nodes */}
              {allNodes.map(node => {
                const pos = positions[node.key]
                if (!pos) return null
                const nt  = SM_NODE[node.type] || SM_NODE.scene
                const isSel     = selected  === node.key
                const isConnSrc = connectFrom === node.key
                const truncLabel = node.label.length > 17 ? node.label.slice(0, 16) + '…' : node.label
                const truncSub   = node.sub   ? (node.sub.length > 20 ? node.sub.slice(0, 19) + '…' : node.sub) : ''
                const midY       = truncSub ? nt.h / 2 - 5 : nt.h / 2 + 5

                return (
                  <g key={node.key}
                    transform={`translate(${pos.x},${pos.y})`}
                    onMouseDown={e => onNodeMouseDown(e, node.key)}
                    onClick={e => onNodeClick(e, node.key)}
                    style={{ cursor: connectMode ? 'pointer' : 'grab' }}
                  >
                    {/* Drop shadow */}
                    <rect x="3" y="4" width={nt.w} height={nt.h} rx={nt.rx} fill="rgba(0,0,0,0.10)" />
                    {/* Body */}
                    <rect width={nt.w} height={nt.h} rx={nt.rx}
                      fill={nt.bg}
                      stroke={isSel || isConnSrc ? '#fff' : nt.stroke}
                      strokeWidth={isSel || isConnSrc ? 2.5 : 1.5}
                    />
                    {/* Selection / connect ring */}
                    {(isSel || isConnSrc) && (
                      <rect x="-3.5" y="-3.5" width={nt.w + 7} height={nt.h + 7} rx={nt.rx + 4}
                        fill="none"
                        stroke={isConnSrc ? '#FCD34D' : 'var(--green)'}
                        strokeWidth="2.2" strokeDasharray="5,3"
                      />
                    )}
                    {/* Primary label */}
                    <text x={nt.w / 2} y={midY}
                      textAnchor="middle"
                      style={{ fontSize: '12px', fontWeight: '700', fill: nt.fg, fontFamily: 'var(--font-ui)', pointerEvents: 'none' }}>
                      {truncLabel}
                    </text>
                    {/* Sub-label */}
                    {truncSub && (
                      <text x={nt.w / 2} y={nt.h / 2 + 12}
                        textAnchor="middle"
                        style={{ fontSize: '9px', fill: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', pointerEvents: 'none' }}>
                        {truncSub.toUpperCase()}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Edge selected: delete action */}
          {selected?.startsWith('edge-') && (
            <div style={{ marginTop: '12px', padding: '10px 16px', background: '#FEF3E2', borderRadius: '8px', border: '1px solid var(--amber-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: 'var(--amber)', fontWeight: '500' }}>Connection selected</span>
              <button
                onClick={() => deleteEdge(selected.replace('edge-', ''))}
                style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: '6px', color: '#DC2626', fontSize: '12px', padding: '5px 14px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600' }}>
                Delete
              </button>
            </div>
          )}

          {/* Legend + hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '14px', flexWrap: 'wrap' }}>
            {[
              { color: '#0D9488', label: 'Scene' },
              { color: '#7C3AED', label: 'Character' },
              { color: '#2D5016', label: 'Theme' },
              { color: '#C3D9A8', label: 'Subplot' },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: color, flexShrink: 0 }} />
                {label}
              </div>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-soft)' }}>
              Drag to move &middot; Draw line to connect &middot; Click line to delete
            </span>
          </div>
        </>
      )}
    </div>
  )
}

// ─── World Tab ────────────────────────────────────────────────────────────────

const WORLD_SECTIONS = [
  {
    key: 'factions',
    label: 'Factions',
    icon: '⚔',
    description: 'Groups with shared goals willing to take coordinated action. Every faction needs a goal, a fear, a hard limit, and an enemy.',
    fields: [
      { key: 'name',      label: 'Faction Name',      placeholder: 'e.g. The Iron Council' },
      { key: 'goal',      label: 'Core Goal',          placeholder: 'What do they concretely want?' },
      { key: 'fear',      label: 'Core Fear',          placeholder: 'What would they do anything to prevent losing?' },
      { key: 'limit',     label: 'Hard Limit',         placeholder: 'What would they never do, even to win?' },
      { key: 'enemy',     label: 'Natural Enemy',      placeholder: 'Who must they destroy or absorb?' },
      { key: 'mythos',    label: 'Public Mythology',   placeholder: 'What do they claim to stand for?' },
      { key: 'reality',   label: 'Actual Behavior',    placeholder: 'What do they actually do?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'locations',
    label: 'Locations',
    icon: '◎',
    description: 'Key places in your world. Every location needs one specific detail that exists nowhere else.',
    fields: [
      { key: 'name',      label: 'Location Name',      placeholder: 'e.g. The Sunken Market' },
      { key: 'role',      label: 'Story Role',         placeholder: 'What does this location do in the story?' },
      { key: 'detail',    label: 'Specific Detail',    placeholder: 'The one thing only this place has' },
      { key: 'center',    label: 'Center or Margin?',  placeholder: 'Is this a center of power or a margin?' },
      { key: 'feel',      label: 'Atmosphere',         placeholder: 'What does it feel like to be here?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'politics',
    label: 'Politics',
    icon: '⚖',
    description: 'The rules of the game — who decides what happens and what happens to people who disagree.',
    fields: [
      { key: 'name',      label: 'System Name',        placeholder: 'e.g. The Compact of Governors' },
      { key: 'question',  label: 'Political Question', placeholder: 'What is the story asking about power?' },
      { key: 'official',  label: 'Official Rules',     placeholder: 'What does the law or custom say?' },
      { key: 'actual',    label: 'Actual Rules',       placeholder: 'What do people who know the system understand?' },
      { key: 'enforcer',  label: 'Who Enforces',       placeholder: 'Who maintains the system and benefits most?' },
      { key: 'exempt',    label: 'Who Is Exempt',      placeholder: 'Who operates above the rules?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'eras',
    label: 'Eras & Technology',
    icon: '◷',
    description: 'When and at what technological level your story takes place — this determines what threats exist and what solutions are possible.',
    fields: [
      { key: 'name',      label: 'Era Name',           placeholder: 'e.g. The Third Reconstruction' },
      { key: 'period',    label: 'Time Period',         placeholder: 'When does the story take place?' },
      { key: 'tech',      label: 'Technology Level',   placeholder: 'What can people do? What cannot exist yet?' },
      { key: 'change',    label: 'What Changed',       placeholder: 'What is the most important recent historical shift?' },
      { key: 'wound',     label: 'Historical Wound',   placeholder: 'What event still shapes the present conflict?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'culture',
    label: 'Language & Culture',
    icon: '◈',
    description: 'How people talk, what they value, what the taboos are. Culture is the invisible hand shaping every conversation.',
    fields: [
      { key: 'name',      label: 'Culture / Group',    placeholder: 'e.g. The River People' },
      { key: 'naming',    label: 'Naming Rule',         placeholder: 'One consistent rule about how people are named' },
      { key: 'taboo',     label: 'Core Taboo',         placeholder: 'What is forbidden, and what does that reveal?' },
      { key: 'greeting',  label: 'Greeting Ritual',    placeholder: 'How do people greet each other, and when does it break down?' },
      { key: 'idiom',     label: 'Distinctive Idiom',  placeholder: 'A phrase or saying specific to this culture' },
      { key: 'value',     label: 'Core Value',         placeholder: 'What does this culture believe most?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
  {
    key: 'quirks',
    label: 'Quirks & Rituals',
    icon: '✦',
    description: 'The specific, strange, particular details that make a world feel real. One good quirk is worth ten pages of lore.',
    fields: [
      { key: 'name',      label: 'Quirk / Ritual',     placeholder: 'e.g. Covering the eyes when entering a home' },
      { key: 'who',       label: 'Who Does This',       placeholder: 'Which group, class, or culture?' },
      { key: 'origin',    label: 'Logical Root',        placeholder: 'What historical or practical reason explains this?' },
      { key: 'story',     label: 'Story Use',           placeholder: 'How does this create a scene, tension, or misunderstanding?' },
      { key: 'notes',     label: 'Notes',              placeholder: 'Anything else worth remembering', multiline: true },
    ],
  },
]

function WorldTab({ projectId, project, toast }) {
  const [section, setSection]       = useState('factions')
  const [elements, setElements]     = useState({})
  const [loading, setLoading]       = useState(true)
  const [form, setForm]             = useState(null)      // null = list view, object = edit view
  const [saving, setSaving]         = useState(false)
  const [exporting, setExporting]   = useState(false)

  useEffect(() => { loadElements() }, [projectId])

  async function loadElements() {
    setLoading(true)
    const { data } = await supabase
      .from('world_elements')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true })

    if (data) {
      const grouped = {}
      WORLD_SECTIONS.forEach(s => { grouped[s.key] = [] })
      data.forEach(el => {
        if (grouped[el.category] !== undefined) grouped[el.category].push(el)
      })
      setElements(grouped)
    }
    setLoading(false)
  }

  async function saveElement() {
    if (!form) return
    setSaving(true)
    const payload = {
      project_id: projectId,
      category: section,
      fields: form.fields || {},
      name: form.fields?.name || 'Untitled',
    }
    if (form.id) {
      await supabase.from('world_elements').update(payload).eq('id', form.id)
    } else {
      await supabase.from('world_elements').insert(payload)
    }
    await loadElements()
    setForm(null)
    setSaving(false)
    toast?.success('Saved')
  }

  async function deleteElement(id) {
    if (!confirm('Delete this entry?')) return
    await supabase.from('world_elements').delete().eq('id', id)
    await loadElements()
    toast?.success('Deleted')
  }

  function openNew() {
    setForm({ fields: {} })
  }

  function openEdit(el) {
    setForm({ id: el.id, fields: { ...el.fields } })
  }

  async function exportBible() {
    setExporting(true)
    try {
      // Build plain-text world bible
      const lines = []
      lines.push(`WORLD BIBLE`)
      lines.push(`${project?.title || 'Untitled Project'}`)
      lines.push(`Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`)
      lines.push('')
      lines.push('─'.repeat(60))
      lines.push('')

      WORLD_SECTIONS.forEach(sec => {
        const items = elements[sec.key] || []
        if (items.length === 0) return
        lines.push(sec.label.toUpperCase())
        lines.push('─'.repeat(sec.label.length))
        lines.push('')
        items.forEach((el, i) => {
          lines.push(`${i + 1}. ${el.name || 'Untitled'}`)
          sec.fields.forEach(f => {
            const val = el.fields?.[f.key]
            if (val && val.trim()) lines.push(`   ${f.label}: ${val}`)
          })
          lines.push('')
        })
        lines.push('')
      })

      const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
      const url  = URL.createObjectURL(blob)
      const a    = document.createElement('a')
      a.href     = url
      a.download = `${(project?.title || 'world').replace(/\s+/g, '-').toLowerCase()}-world-bible.txt`
      a.click()
      URL.revokeObjectURL(url)
      toast?.success('World Bible exported')
    } catch(e) {
      toast?.error('Export failed')
    }
    setExporting(false)
  }

  const activeSec   = WORLD_SECTIONS.find(s => s.key === section)
  const activeItems = elements[section] || []

  if (loading) return (
    <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)', fontSize: '14px' }}>
      Loading world…
    </div>
  )

  return (
    <div style={{ padding: '24px 0' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>World Bible</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', margin: 0 }}>
            Build the world your story lives in. Everything here informs the writing — most of it never appears on screen directly.
          </p>
        </div>
        <button
          onClick={exportBible}
          disabled={exporting}
          style={{
            background: 'var(--green)', color: '#fff', border: 'none',
            borderRadius: '8px', padding: '9px 18px', cursor: 'pointer',
            fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px',
            opacity: exporting ? 0.7 : 1, flexShrink: 0,
          }}>
          {exporting ? 'Exporting…' : 'Export World Bible'}
        </button>
      </div>

      {/* Section nav */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {WORLD_SECTIONS.map(s => {
          const count = (elements[s.key] || []).length
          const active = s.key === section
          return (
            <button
              key={s.key}
              onClick={() => { setSection(s.key); setForm(null) }}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 14px', borderRadius: '20px', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontWeight: active ? '700' : '500', fontSize: '13px',
                background: active ? 'var(--green)' : '#fff',
                color: active ? '#fff' : 'var(--text-soft)',
                border: active ? '1px solid var(--green)' : '1px solid var(--border)',
                transition: 'all 0.15s',
              }}>
              <span style={{ fontSize: '11px' }}>{s.icon}</span>
              {s.label}
              {count > 0 && (
                <span style={{
                  background: active ? 'rgba(255,255,255,0.25)' : 'var(--green-pale)',
                  color: active ? '#fff' : 'var(--green)',
                  borderRadius: '10px', padding: '1px 7px', fontSize: '11px', fontWeight: '700',
                }}>{count}</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Section description */}
      <div style={{
        background: 'var(--green-pale)', border: '1px solid var(--green-border)',
        borderRadius: '10px', padding: '14px 18px', marginBottom: '20px',
        fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.6',
      }}>
        <strong style={{ fontFamily: 'var(--font-ui)', color: 'var(--green)' }}>{activeSec?.label}: </strong>
        {activeSec?.description}
      </div>

      {/* Form or list */}
      {form ? (
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.8)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>
              {form.id ? 'Edit' : 'New'} {activeSec?.label.replace(/s$/, '')}
            </h3>
            <button onClick={() => setForm(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', borderRadius: '4px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
          </div>
          <div style={{ display: 'grid', gap: '16px' }}>
            {activeSec?.fields.map(f => (
              <div key={f.key}>
                <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '12px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {f.label}
                </label>
                {f.multiline ? (
                  <textarea
                    rows={3}
                    placeholder={f.placeholder}
                    value={form.fields?.[f.key] || ''}
                    onChange={e => setForm(prev => ({ ...prev, fields: { ...prev.fields, [f.key]: e.target.value } }))}
                    style={{
                      width: '100%', borderRadius: '8px', border: '1px solid var(--border)',
                      padding: '10px 12px', fontSize: '14px', fontFamily: 'var(--font-body)',
                      color: 'var(--text)', background: '#fff', resize: 'vertical',
                      outline: 'none', boxSizing: 'border-box', lineHeight: '1.6',
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    value={form.fields?.[f.key] || ''}
                    onChange={e => setForm(prev => ({ ...prev, fields: { ...prev.fields, [f.key]: e.target.value } }))}
                    style={{
                      width: '100%', borderRadius: '8px', border: '1px solid var(--border)',
                      padding: '10px 12px', fontSize: '14px', fontFamily: 'var(--font-body)',
                      color: 'var(--text)', background: '#fff',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
            <button
              onClick={saveElement}
              disabled={saving}
              style={{
                background: 'var(--green)', color: '#fff', border: 'none',
                borderRadius: '8px', padding: '10px 22px', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px',
                opacity: saving ? 0.7 : 1,
              }}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button
              onClick={() => setForm(null)}
              style={{
                background: '#fff', color: 'var(--text-soft)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '10px 18px', cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px',
              }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Entry list */}
          {activeItems.length > 0 && (
            <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
              {activeItems.map(el => (
                <div key={el.id} style={{
                  background: '#fff', border: '1px solid var(--border)', borderRadius: '10px',
                  padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '15px', color: 'var(--text)', marginBottom: '6px' }}>
                      {el.name || 'Untitled'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      {activeSec?.fields.filter(f => f.key !== 'name' && f.key !== 'notes' && el.fields?.[f.key]).slice(0, 3).map(f => (
                        <span key={f.key} style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)' }}>
                          <strong style={{ color: 'var(--text)', fontFamily: 'var(--font-ui)' }}>{f.label}:</strong> {el.fields[f.key]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <button
                      onClick={() => openEdit(el)}
                      style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', color: 'var(--green)', borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '12px' }}>
                      Edit
                    </button>
                    <button
                      onClick={() => deleteElement(el.id)}
                      style={{ background: '#FEE2E2', border: '1px solid #FECACA', color: '#DC2626', borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '12px' }}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {activeItems.length === 0 && (
            <div style={{
              textAlign: 'center', padding: '56px 32px',
              border: '1.5px dashed var(--border)', borderRadius: '12px',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{activeSec?.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>
                No {activeSec?.label.toLowerCase()} yet
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', maxWidth: '360px', margin: '0 auto 20px' }}>
                {activeSec?.description}
              </div>
            </div>
          )}

          <button
            onClick={openNew}
            style={{
              background: '#fff', border: '1.5px dashed var(--green)',
              color: 'var(--green)', borderRadius: '8px', padding: '10px 20px',
              cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px',
            }}>
            + Add {activeSec?.label.replace(/s$/, '')}
          </button>
        </>
      )}
    </div>
  )
}

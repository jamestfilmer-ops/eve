'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { useToast } from '../components/Toast'

// ─── Beat checklists ──────────────────────────────────────────────────────────

const sessionChecklist = {
  'save-the-cat': [
    { id: 'opening-image',  section: 'Act 1',      label: 'Opening Image defined',          question: 'What is the very first image of your story? It should be the opposite of your Final Image.',          tip: 'The Opening Image is a snapshot of your protagonist\'s problem, before anything changes. Keep it visual and specific.' },
    { id: 'theme-stated',   section: 'Act 1',      label: 'Theme stated by page 5',          question: 'What does someone say to your protagonist early on that they don\'t yet understand? This is your theme.',tip: 'The theme is rarely stated by the hero — it\'s usually said TO them. They\'ll only understand it at the end.' },
    { id: 'catalyst',       section: 'Act 1',      label: 'Catalyst / inciting incident',    question: 'What happens around page 12 that changes your protagonist\'s world? This is the event that kicks the story into motion.', tip: 'The catalyst is done TO the hero, not BY them. It forces them to respond.' },
    { id: 'break-into-two', section: 'Act 1 → 2',  label: 'Break into Two moment',           question: 'What choice does your protagonist make at the end of Act 1 that they cannot take back?',               tip: 'This is the most important beat. The hero must actively CHOOSE to enter Act 2 — it cannot happen to them.' },
    { id: 'midpoint',       section: 'Act 2',      label: 'Midpoint identified',             question: 'What happens exactly in the middle that raises the stakes and changes the direction of the story?',     tip: 'The midpoint is either a "false victory" (things seem great, then get worse) or a "false defeat" (things seem terrible, then rally).' },
    { id: 'all-is-lost',    section: 'Act 2',      label: 'All Is Lost moment',              question: 'What is the lowest point for your protagonist? What do they lose here?',                               tip: 'The All Is Lost beat often involves a death — literal or symbolic. Something must die for the hero to be reborn.' },
    { id: 'finale',         section: 'Act 3',      label: 'Finale structure sketched',       question: 'How does your protagonist use everything they\'ve learned to win? What does winning look like?',        tip: 'The finale should mirror the setup — use characters, locations, and objects from Act 1 in new, meaningful ways.' },
    { id: 'final-image',    section: 'Act 3',      label: 'Final Image defined',             question: 'What is the last image of your story? It should be the opposite of your Opening Image.',               tip: 'The Final Image proves the change is real. If your hero was alone at the start, they should be surrounded by love at the end — or vice versa.' },
  ],
  'heros-journey': [
    { id: 'ordinary-world',     section: 'Departure',   label: 'Ordinary World established',      question: 'What is your hero\'s normal life before the adventure begins? What is their flaw or limitation?',       tip: 'The Ordinary World exists to show us what the hero stands to lose — and what they need to change.' },
    { id: 'call-to-adventure',  section: 'Departure',   label: 'Call to Adventure defined',       question: 'What event or message disrupts your hero\'s ordinary world and presents the challenge ahead?',           tip: 'The call can come in many forms — a letter, a death, a discovery. It always asks the hero to step outside their comfort zone.' },
    { id: 'refusal',            section: 'Departure',   label: 'Refusal of the Call',             question: 'Why does your hero initially refuse or hesitate to answer the call? What fear holds them back?',          tip: 'Refusal shows us the hero\'s wound. The stronger the fear, the more powerful the eventual crossing.' },
    { id: 'mentor',             section: 'Departure',   label: 'Meeting the Mentor',              question: 'Who or what gives your hero the wisdom, tool, or confidence they need to cross the threshold?',          tip: 'The mentor doesn\'t solve the problem — they prepare the hero and then step aside. Gandalf sends Frodo; he doesn\'t go instead.' },
    { id: 'threshold',          section: 'Departure',   label: 'Crossing the Threshold',          question: 'What is the point of no return that separates the Ordinary World from the Special World?',               tip: 'Once crossed, there is no going back to the old life. The hero is fully committed to the journey.' },
    { id: 'tests-allies',       section: 'Initiation',  label: 'Tests, Allies, and Enemies',      question: 'What tests does your hero face in the Special World? Who do they meet — friend and foe?',               tip: 'This section builds the hero\'s skills and relationships while escalating the danger. Everything here prepares them for the Ordeal.' },
    { id: 'ordeal',             section: 'Initiation',  label: 'The Ordeal (central crisis)',     question: 'What is the greatest challenge your hero faces? What death — literal or symbolic — do they experience?', tip: 'The Ordeal is the midpoint crisis. The hero must "die" here to be reborn with new knowledge and power.' },
    { id: 'road-back',          section: 'Return',      label: 'The Road Back',                   question: 'What drives your hero back toward the Ordinary World? What final obstacle do they face?',                tip: 'The road back often involves a chase or a final temptation. The hero must commit fully to returning.' },
    { id: 'resurrection',       section: 'Return',      label: 'Resurrection / climax',           question: 'How is your hero finally and completely transformed? What final test proves the change is real?',         tip: 'This is the last death-and-rebirth. The hero returns with the elixir — wisdom, love, or freedom — that can heal the Ordinary World.' },
  ],
  'story-circle': [
    { id: 'you',       section: 'Step 1', label: 'You — establish the character',     question: 'Who is your protagonist in their comfort zone? What defines their ordinary life?',                          tip: 'Start with a character who is established — not static, but settled. The circle is about to break that settlement.' },
    { id: 'need',      section: 'Step 2', label: 'Need — establish the want',          question: 'What does your character need or want? What is the itch they can\'t scratch in their current world?',      tip: 'The need is the engine. It doesn\'t have to be noble — greed, loneliness, ambition all work. It just has to be real.' },
    { id: 'go',        section: 'Step 3', label: 'Go — enter an unfamiliar world',     question: 'What is the threshold your character crosses into a new and unfamiliar situation?',                        tip: 'The "go" is a crossing point. Something changes — location, relationship, status — and the character can\'t easily return.' },
    { id: 'search',    section: 'Step 4', label: 'Search — road of trials',            question: 'What obstacles and trials does your character face while searching for what they need?',                    tip: 'This is the longest section. The character tries, fails, adapts, tries again. Each attempt should cost something.' },
    { id: 'find',      section: 'Step 5', label: 'Find — the thing they were seeking', question: 'Does your character find what they were after? What is the cost or complication of finding it?',           tip: 'The "find" is often a false victory or a revelation that changes what the character thought they wanted.' },
    { id: 'take',      section: 'Step 6', label: 'Take — pay the price',               question: 'What price does your character pay for what they found? What do they have to sacrifice or lose?',           tip: 'No reward without cost. The taking forces a sacrifice that proves the character\'s transformation is real.' },
    { id: 'return',    section: 'Step 7', label: 'Return — back to the familiar',      question: 'How does your character return to the familiar world, changed? What is different now?',                   tip: 'The return isn\'t always physical. It\'s a return to the familiar — but the character sees it with new eyes.' },
    { id: 'change',    section: 'Step 8', label: 'Change — transformation complete',   question: 'How has your character fundamentally changed? What can they now do or be that they couldn\'t before?',    tip: 'The change closes the circle. It should mirror the opening — same character, different person.' },
  ],
  'freeform': [
    { id: 'premise',      section: 'Foundation',  label: 'Core premise in one sentence',     question: 'What is the single most essential truth about your story? If you had to pitch it in one sentence, what would you say?', tip: 'A premise isn\'t a plot summary — it\'s the emotional and thematic heart. What does this story prove or explore?' },
    { id: 'protagonist',  section: 'Foundation',  label: 'Protagonist\'s wound and want',    question: 'What happened to your protagonist before the story began? What do they want because of it?',                            tip: 'The wound drives the want. Everything your protagonist does in the story is a response to something they carry from before it started.' },
    { id: 'stakes',       section: 'Foundation',  label: 'What\'s at stake if they fail',   question: 'What does your protagonist lose if they don\'t achieve their goal? Make it concrete.',                                   tip: 'Abstract stakes kill engagement. "The world will end" is weaker than "she\'ll lose the only person who ever believed in her."' },
    { id: 'opening',      section: 'Structure',   label: 'How the story opens',              question: 'What is the first scene or image? Why does the story start here and not somewhere else?',                               tip: 'The opening is a promise to the audience. It tells them what kind of story this is, tonally and thematically.' },
    { id: 'turn',         section: 'Structure',   label: 'The central turn or crisis',       question: 'What is the moment everything changes and can\'t go back? What is lost or revealed?',                                   tip: 'Every story — however freeform — has a turn. Find it. It\'s the moment the character or audience can\'t unknow something.' },
    { id: 'resolution',   section: 'Structure',   label: 'How it ends — and what it means',  question: 'What happens in your final scenes? What does the ending say about everything that came before it?',                     tip: 'Endings are where meaning lives. A great ending doesn\'t just conclude — it recontextualizes.' },
  ],
}

  'sequence-approach': [
    { id: 'seq-1', section: 'Act 1',   label: 'Sequence 1 — Establish & incite',    question: 'What is your sequence question for pp. 1–15? What specific problem opens, and what event closes this sequence?', tip: 'Establish the world and protagonist, then land the inciting incident. The sequence question: "Will the protagonist respond to this disruption?"' },
    { id: 'seq-2', section: 'Act 1',   label: 'Sequence 2 — Decision & threshold',  question: 'What is your sequence question for pp. 15–30? What decision does the protagonist make that cannot be unmade?',     tip: 'This sequence ends at the Act 1 break. The question closes with the protagonist actively choosing to enter Act 2.' },
    { id: 'seq-3', section: 'Act 2A',  label: 'Sequence 3 — New world, old methods',question: 'What is your sequence question for pp. 30–45? How does the protagonist try to solve the problem — and why does their approach fail?', tip: 'Old tools meet new problems. The protagonist tries what worked before. It doesn\'t work. The sequence ends in setback.' },
    { id: 'seq-4', section: 'Act 2A',  label: 'Sequence 4 — Progress & midpoint',   question: 'What is your sequence question for pp. 45–60? What partial success or false victory leads to the midpoint?',       tip: 'The protagonist adapts and makes real progress. The midpoint closes this sequence — a false victory (things look great, then reverse) or false defeat (things look terrible, then rally).' },
    { id: 'seq-5', section: 'Act 2B',  label: 'Sequence 5 — Reversal & escalation', question: 'What is your sequence question for pp. 60–75? How does the midpoint reversal compound — what does the protagonist lose?', tip: 'The midpoint\'s consequences arrive. Resources, allies, or advantages are stripped away. The protagonist is more vulnerable than before.' },
    { id: 'seq-6', section: 'Act 2B',  label: 'Sequence 6 — All Is Lost & choice',  question: 'What is your sequence question for pp. 75–90? What is the protagonist\'s lowest point, and what fundamental choice must they make?', tip: 'The All Is Lost beat lives here. Something dies. The protagonist must choose who they are going to be before Act 3 can begin.' },
    { id: 'seq-7', section: 'Act 3',   label: 'Sequence 7 — Climax begins',         question: 'What is your sequence question for pp. 90–105? How does the protagonist act on their Act 2 choice, and what is the final confrontation?', tip: 'The protagonist moves with new conviction. The final conflict begins. This sequence ends as the climax reaches its peak.' },
    { id: 'seq-8', section: 'Act 3',   label: 'Sequence 8 — Resolution',            question: 'What is your sequence question for pp. 105–120? How does the climax resolve, and what is the final state of the world?', tip: 'The climax breaks. The protagonist demonstrates their transformation. Close with an image that mirrors — or inverts — your opening.' },
  ],
  'kishotenketsu': [
    { id: 'ki',     section: 'Ki — 起',    label: 'Introduction: establish the world',     question: 'What world, characters, and situation are you establishing? What does the audience need to fully inhabit this reality?', tip: 'Ki is not setup — it is immersion. The goal is to make the audience completely at home in a specific, clearly defined world. Resist the urge to introduce conflict.' },
    { id: 'sho',    section: 'Shō — 承',   label: 'Development: introduce the second thread', question: 'What second element — character, situation, or idea — seems unrelated to the first? How do you develop both threads naturally?', tip: 'The second thread should feel genuinely separate. Don\'t hint at connection too early. The audience should have no reason to suspect these threads will meet.' },
    { id: 'ten',    section: 'Ten — 転',   label: 'Twist: the unexpected connection',       question: 'What is your Ten — the pivot that brings your two threads into surprising contact? What does the audience now see that they could not before?', tip: 'The Ten is not a deception revealed — it is a connection discovered. The audience isn\'t fooled and corrected; they are shown something true that they couldn\'t have seen from where they were standing.' },
    { id: 'ketsu',  section: 'Ketsu — 結', label: 'Reconciliation: a new understanding',    question: 'How does the world settle into its new configuration? What has the audience understood that they could not have understood at the start?', tip: 'The resolution absorbs the tension of the Ten rather than resolving it through victory or defeat. The world is not fixed — it is seen differently.' },
  ],
  'fichtean': [
    { id: 'opening-crisis',  section: 'Opening',         label: 'Opening crisis — begin in the middle', question: 'What crisis does the story open with? What decision or problem drops the audience immediately into action?', tip: 'Do not set up. Drop in. The audience will catch up — and catching up keeps them engaged. The opening crisis should be specific and consequential.' },
    { id: 'crisis-1',        section: 'Rising Action',   label: 'First escalating crisis',               question: 'What is the first crisis after the opening? What does it cost the protagonist — and what backstory does it reveal?', tip: 'Each crisis should be worse than the last. Ask: what does this crisis force the protagonist to do? What does that action reveal about their history?' },
    { id: 'crisis-2',        section: 'Rising Action',   label: 'Second escalating crisis',              question: 'What is the second crisis? How does it compound the first — and what new pressure does it add?',              tip: 'Crises should feel like a tightening spiral, not a list. Each one should make the previous one worse in retrospect.' },
    { id: 'crisis-3',        section: 'Rising Action',   label: 'Third escalating crisis (optional)',    question: 'Is there a third crisis before the climax? What final piece of backstory does it unlock?',                   tip: 'Not every Fichtean structure needs a third pre-climax crisis. Use it if the story needs more rope or if there is essential backstory that has not yet been earned.' },
    { id: 'climax',          section: 'Climax',          label: 'Climax — all crises converge',          question: 'How do all previous crises converge into a single overwhelming confrontation? What is the protagonist forced to face?', tip: 'The climax is not a new event — it is the sum of everything that came before arriving at once. It should feel inevitable in retrospect.' },
    { id: 'resolution',      section: 'Resolution',      label: 'Brief resolution',                      question: 'How does the story end — quickly? What is the single final beat that closes the curve?',                    tip: 'Keep the resolution short. The Fichtean Curve does not reward long denouements. Once the climax breaks, end swiftly. What matters has already happened.' },
  ],
}

const frameworkLabel = {
  'save-the-cat':       'Save the Cat',
  'heros-journey':      "Hero's Journey",
  'story-circle':       'Story Circle',
  'freeform':           'Freeform',
  'sequence-approach':  'Sequence Approach',
  'kishotenketsu':      'Kishōtenketsu',
  'fichtean':           'Fichtean Curve',
}

// ─── Main Component ────────────────────────────────────────────────────────────

function SessionInner() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const toast        = useToast()

  const [user,        setUser]        = useState(null)
  const [projects,    setProjects]    = useState([])
  const [projectId,   setProjectId]   = useState(searchParams.get('project') || null)
  const [project,     setProject]     = useState(null)
  const [answers,     setAnswers]     = useState({})
  const [saved,       setSaved]       = useState({})
  const [expanded,    setExpanded]    = useState(null)
  const [loading,     setLoading]     = useState(true)
  const [saving,      setSavingBeat]  = useState(null)

  // ── Load user + projects ──────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setLoading(false); return }
      setUser(user)

      const { data: projs } = await supabase
        .from('projects')
        .select('id, title, framework, status')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
      setProjects(projs || [])

      // If a project is pre-selected, load its beats
      const pid = searchParams.get('project')
      if (pid && projs) {
        const p = projs.find(x => x.id === pid)
        if (p) {
          setProject(p)
          setProjectId(pid)
          await loadBeats(pid, p.framework)
        }
      }
      setLoading(false)
    })
  }, [])

  async function loadBeats(pid, framework) {
    const { data } = await supabase
      .from('session_beats')
      .select('*')
      .eq('project_id', pid)
      .eq('framework', framework)
    if (data) {
      const a = {}
      const s = {}
      data.forEach(b => {
        a[b.beat_key] = b.notes || ''
        s[b.beat_key] = b.completed || false
      })
      setAnswers(a)
      setSaved(s)
      // Auto-expand first incomplete beat
      const checklist = sessionChecklist[framework] || []
      const first = checklist.find(c => !s[c.id])
      setExpanded(first?.id || checklist[0]?.id || null)
    }
  }

  async function selectProject(pid) {
    const p = projects.find(x => x.id === pid)
    if (!p) return
    setProject(p)
    setProjectId(pid)
    setAnswers({})
    setSaved({})
    setLoading(true)
    await loadBeats(pid, p.framework)
    setLoading(false)
    // Update URL without full navigation
    window.history.replaceState(null, '', `/session?project=${pid}`)
  }

  async function handleSave(beatId) {
    if (!answers[beatId]?.trim() || !project) return
    setSavingBeat(beatId)

    const { error } = await supabase
      .from('session_beats')
      .upsert({
        project_id: projectId,
        framework:  project.framework,
        beat_key:   beatId,
        notes:      answers[beatId].trim(),
        completed:  true,
      }, { onConflict: 'project_id,framework,beat_key' })

    if (error) {
      toast.error('Could not save beat.')
      setSavingBeat(null)
      return
    }

    setSaved(prev => ({ ...prev, [beatId]: true }))
    toast.success('Beat saved.')

    // Auto-advance to next incomplete beat
    const checklist = sessionChecklist[project.framework] || []
    const idx = checklist.findIndex(c => c.id === beatId)
    const next = checklist.slice(idx + 1).find(c => !saved[c.id] && c.id !== beatId)
    if (next) setExpanded(next.id)
    else setExpanded(null)

    setSavingBeat(null)
  }

  // ── No user ───────────────────────────────────────────────────────────────
  if (!loading && !user) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div className="card" style={{ padding: '48px 40px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>Sign in to use Session Mode</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '24px', lineHeight: '1.65' }}>
            Session mode saves your beat answers to your project so you can pick up exactly where you left off.
          </p>
          <button className="btn-primary" onClick={() => router.push('/auth')}>Sign in</button>
        </div>
      </div>
    )
  }

  // ── No project selected ───────────────────────────────────────────────────
  if (!loading && !project) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>
        <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '32px' }}>
          ← Dashboard
        </Link>

        <div className="fade-up">
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Session Mode</h1>
          <p style={{ color: 'var(--text-mid)', marginBottom: '32px', lineHeight: '1.65' }}>
            Work through your story beats one at a time. Every answer saves automatically.
          </p>

          {projects.length === 0 ? (
            <div className="empty-state">
              <h3>No projects yet</h3>
              <p>Create a project first, then come back to run a session on it.</p>
              <Link href="/projects/new" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ marginTop: '16px' }}>Create a project</button>
              </Link>
            </div>
          ) : (
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Choose a project
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {projects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => selectProject(p.id)}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '18px 22px', borderRadius: '10px', cursor: 'pointer', textAlign: 'left',
                      background: '#fff', border: '1px solid var(--border)',
                      transition: 'border-color 0.15s, box-shadow 0.15s',
                      fontFamily: 'var(--font-ui)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(45,80,22,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>{p.title}</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{frameworkLabel[p.framework] || p.framework}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--text-soft)', flexShrink: 0 }}>
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Session in progress ───────────────────────────────────────────────────
  const checklist = sessionChecklist[project?.framework] || []
  const completed = checklist.filter(c => saved[c.id]).length
  const pct       = checklist.length > 0 ? Math.round((completed / checklist.length) * 100) : 0

  if (loading) {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ height: '28px', width: '220px', borderRadius: '6px', marginBottom: '8px' }} className="skeleton" />
        <div style={{ height: '16px', width: '160px', borderRadius: '4px', marginBottom: '32px' }} className="skeleton" />
        {[0,1,2,3].map(i => <div key={i} className="skeleton" style={{ height: '64px', borderRadius: '10px', marginBottom: '10px' }} />)}
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            ← Dashboard
          </Link>
          <span style={{ color: 'var(--border)' }}>·</span>
          <button
            onClick={() => { setProject(null); setProjectId(null); window.history.replaceState(null, '', '/session') }}
            style={{ background: 'none', border: 'none', fontSize: '13px', color: 'var(--text-soft)', cursor: 'pointer', padding: 0 }}
          >
            Switch project
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              Session Mode · {frameworkLabel[project.framework] || project.framework}
            </p>
            <h1 style={{ fontSize: '28px', marginBottom: '4px' }}>{project.title}</h1>
            <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Work through one question at a time. Every answer saves to your project.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: 'var(--green)', fontWeight: '700' }}>{pct}%</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{completed} of {checklist.length} beats</p>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: '20px', height: '6px', background: 'var(--green-pale)', borderRadius: '3px' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: 'var(--green)', borderRadius: '3px', transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Beat checklist */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {checklist.map((item, i) => {
          const isDone = saved[item.id]
          const isOpen = expanded === item.id
          const isSaving = saving === item.id

          return (
            <div
              key={item.id}
              className="card"
              style={{
                overflow: 'hidden',
                border: isDone
                  ? '1px solid var(--green-border)'
                  : isOpen ? '2px solid var(--green)' : '1px solid var(--border)',
                background: isDone ? 'var(--green-pale)' : '#fff',
              }}
            >
              {/* Beat row */}
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', cursor: 'pointer' }}
                onClick={() => setExpanded(isOpen ? null : item.id)}
              >
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                  background: isDone ? 'var(--green)' : 'transparent',
                  border: isDone ? 'none' : '2px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {isDone
                    ? <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>{i + 1}</span>
                  }
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: isDone ? 'var(--green)' : 'var(--text-dark)', textDecoration: isDone ? 'line-through' : 'none' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>{item.section}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-soft)', flexShrink: 0 }}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '500', margin: '16px 0 8px', lineHeight: '1.5' }}>
                    {item.question}
                  </p>
                  <div className="tip-box" style={{ marginBottom: '14px' }}>
                    <strong>Craft tip:</strong> {item.tip}
                  </div>
                  <textarea
                    className="input"
                    placeholder="Write your answer here…"
                    value={answers[item.id] || ''}
                    onChange={e => setAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                    style={{ minHeight: '90px', marginBottom: '12px' }}
                  />
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="btn-primary"
                      onClick={() => handleSave(item.id)}
                      disabled={!answers[item.id]?.trim() || isSaving}
                      style={{ opacity: answers[item.id]?.trim() ? 1 : 0.4 }}
                    >
                      {isSaving ? 'Saving…' : isDone ? 'Update →' : 'Save & continue →'}
                    </button>
                    <button className="btn-ghost" onClick={() => setExpanded(null)}>
                      Come back later
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Completion message */}
      {pct === 100 && (
        <div className="fade-up" style={{ marginTop: '32px', textAlign: 'center', padding: '32px', background: 'var(--green-pale)', borderRadius: '12px', border: '1px solid var(--green-border)' }}>
          <p style={{ fontSize: '18px', fontFamily: 'var(--font-display)', color: 'var(--green)', marginBottom: '8px' }}>Session complete.</p>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', marginBottom: '20px' }}>All beats answered. Time to write.</p>
          <Link href={`/projects/${projectId}`} style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Back to project →</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default function Session() {
  return (
    <Suspense fallback={
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px' }}>
        <div className="skeleton" style={{ height: '28px', width: '200px', borderRadius: '6px', marginBottom: '8px' }} />
        <div className="skeleton" style={{ height: '16px', width: '300px', borderRadius: '4px', marginBottom: '40px' }} />
        {[0,1,2,3].map(i => (
          <div key={i} className="skeleton" style={{ height: '72px', borderRadius: '10px', marginBottom: '12px' }} />
        ))}
      </div>
    }>
      <SessionInner />
    </Suspense>
  )
}

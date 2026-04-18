'use client'
export const dynamic = 'force-dynamic'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../lib/supabase'
import { useToast } from '../../components/Toast'

// SVG icons —no emoji
const FrameworkIcon = ({ id, size = 22 }) => {
  const style = { width: size, height: size, flexShrink: 0 }
  if (id === 'save-the-cat') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  )
  if (id === 'heros-journey') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  )
  if (id === 'story-circle') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
    </svg>
  )
  if (id === 'sequence-approach') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  )
  if (id === 'kishotenketsu') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="M12 8v8M8 12h8"/>
    </svg>
  )
  if (id === 'fichtean') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 20 6 12 10 16 14 6 18 10 22 2"/>
    </svg>
  )
  if (id === 'heroines-journey') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/><path d="M5.5 20a7 7 0 0 1 13 0"/>
      <path d="M12 14v4M9 18h6"/>
    </svg>
  )
  if (id === 'story-spine') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  )
  if (id === 'five-act') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 18 6 6 10 14 14 10 18 16 22 4"/>
    </svg>
  )
  if (id === 'romancing-the-beat') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
  if (id === 'virgins-promise') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
  if (id === 'mice-quotient') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  )
  if (id === 'w-plot') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 4 6 18 10 8 14 18 18 8 22 4"/>
    </svg>
  )
  if (id === 'harmon-pixar-hybrid') return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/>
    </svg>
  )
  // default
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  )
} 

const frameworks = [
  {
    id: 'save-the-cat',
    name: 'Save the Cat',
    author: 'Blake Snyder',
    acts: '3 Acts · 15 Beats',
    description: 'The most widely used Hollywood structure. Blake Snyder mapped 15 specific "beats" to exact page numbers in a screenplay. It\'s prescriptive by design —and it works.',
    beats: ['Opening Image', 'Theme Stated', 'Set-Up', 'Catalyst', 'Debate', 'Break into Two', 'B Story', 'Fun & Games', 'Midpoint', 'Bad Guys Close In', 'All Is Lost', 'Dark Night of the Soul', 'Break into Three', 'Finale', 'Final Image'],
    tip: 'The "Save the Cat" moment —an early scene where your hero does something likeable —is what hooks your audience before the story kicks in.',
  },
  {
    id: 'heros-journey',
    name: "Hero's Journey",
    author: 'Joseph Campbell',
    acts: '3 Acts · 12 Stages',
    description: 'The mythic structure Campbell identified across thousands of years of storytelling —from ancient myths to Star Wars. Not a formula, but a map of human transformation.',
    beats: ['Ordinary World', 'Call to Adventure', 'Refusal of the Call', 'Meeting the Mentor', 'Crossing the Threshold', 'Tests, Allies, Enemies', 'Approach to the Inmost Cave', 'The Ordeal', 'Reward', 'The Road Back', 'Resurrection', 'Return with the Elixir'],
    tip: 'The "Ordinary World" is not boring setup —it\'s the baseline you\'ll destroy. Make it specific and lovable so the loss means something.',
  },
  {
    id: 'story-circle',
    name: 'Story Circle',
    author: 'Dan Harmon',
    acts: '1 Circle · 8 Steps',
    description: 'Harmon distilled Campbell into 8 steps that loop —character needs something, goes to get it, pays a price, comes back changed. Used on Community, Rick & Morty, and countless TV pilots.',
    beats: ['You (character in zone of comfort)', 'Need (they want something)', 'Go (into unfamiliar situation)', 'Search (adapt, struggle, work)', 'Find (get what they wanted)', 'Take (pay a price for it)', 'Return (back to familiar)', 'Change (they are different)'],
    tip: 'Every episode of a great TV show is its own complete Story Circle. So is every scene. The smaller you apply it, the tighter your writing gets.',
  },
  {
    id: 'freeform',
    name: 'Freeform',
    author: 'Your instincts',
    acts: 'No template',
    description: 'No imposed structure. You capture scenes, characters, and themes as they come. Eve organizes and tracks —the shape of the story is entirely yours.',
    beats: [],
    tip: 'Freeform doesn\'t mean unstructured —it means the structure comes from the story, not the other way around. Track your scenes and the pattern will emerge.',
  },
  {
    id: 'sequence-approach',
    name: 'Sequence Approach',
    author: 'Frank Daniel',
    acts: '3 Acts · 8 Sequences',
    description: 'Divide your screenplay into eight sequences of roughly 12–15 pages each. Each sequence is a mini-film with its own tension and resolution. Solves the second act problem.',
    beats: ['Sequence 1 (pp. 1–15)', 'Sequence 2 (pp. 15–30)', 'Sequence 3 (pp. 30–45)', 'Sequence 4 (pp. 45–60)', 'Sequence 5 (pp. 60–75)', 'Sequence 6 (pp. 75–90)', 'Sequence 7 (pp. 90–105)', 'Sequence 8 (pp. 105–120)'],
    tip: 'Give each sequence its own question —a specific dramatic problem that opens and closes the sequence. The feature\'s central question stays open; the sequence questions are the stations along the way.',
  },
  {
    id: 'kishotenketsu',
    name: 'Kishōtenketsu',
    author: 'Classical East Asian',
    acts: '4 Movements · No conflict',
    description: 'A four-movement structure with no antagonist. Story organized around surprise and revelation: introduce two seemingly unrelated threads, then bring them into unexpected contact.',
    beats: ['Ki —Introduction', 'Shō —Development', 'Ten —The Twist', 'Ketsu —Reconciliation'],
    tip: 'The Ten (twist) is not a deception revealed —it is a connection discovered. The audience sees a relationship between things they did not know were related. Design the Ten first, then work backward.',
  },
  {
    id: 'fichtean',
    name: 'Fichtean Curve',
    author: 'Janet Burroway',
    acts: 'Crisis-first · Escalating',
    description: 'Open in crisis. Skip the setup. Weave backstory in through pressure and revelation. Each crisis should be worse than the last —they converge in a climax, then end swiftly.',
    beats: ['Opening Crisis', 'Crisis 1 (escalating)', 'Crisis 2 (escalating)', 'Crisis 3 (optional)', 'Climax —all crises converge', 'Brief Resolution'],
    tip: 'Backstory is a reward, not setup. The audience earns the right to understand your character\'s history by first caring what happens to them. Plant the crisis. Then give them the why.',
  },
  {
    id: 'seven-point-story',
    name: "Dan Wells' Seven-Point",
    author: 'Dan Wells',
    acts: '7 Points · Build backward',
    description: "Build from the ending backward. Your Hook should be the mirror opposite of your Resolution. Plot Turns 1 and 2 drive the character in and out of the unfamiliar world. Pinch Points show the threat.",
    beats: ['Hook', 'Plot Turn 1', 'Pinch Point 1', 'Midpoint (reaction→action)', 'Pinch Point 2', 'Plot Turn 2', 'Resolution'],
    tip: "Write your Resolution first —who is your protagonist at the end? Then write the Hook as its exact opposite. Everything else fills the distance between them.",
  },
  {
    id: 'freytags-pyramid',
    name: "Freytag's Pyramid",
    author: 'Gustav Freytag',
    acts: '5 Stages · Classic arc',
    description: "The 1863 dramatic arc underpinning every story structure since. Tension rises through exposition and rising action to the climax —the pivot point —then falls through consequence to resolution.",
    beats: ['Exposition', 'Rising Action', 'Climax', 'Falling Action', 'Denouement'],
    tip: "Use it as a diagnostic: draw the pyramid for your story and mark your major beats. If the climax is not at the peak, you\'ve found your structural problem.",
  },
  {
    id: 'snowflake-method',
    name: 'Snowflake Method',
    author: 'Randy Ingermanson',
    acts: 'Design-first · Expand outward',
    description: "Start with one sentence. Expand to five. Write character summaries. Keep expanding until you have a scene-by-scene blueprint. Designed for novelists who need structure before they write.",
    beats: ['Step 1: One-sentence summary', 'Step 2: One-paragraph (5 sentences)', 'Step 3: Character summaries', 'Step 4: Expanded synopsis', 'Step 5: Scene list', 'Step 6: Draft'],
    tip: "You only need the first three steps to start writing with confidence. One sentence, five sentences, character pages. The rest of the Snowflake builds from there.",
  },
  {
    id: 'hauge-six-stage',
    name: "Hauge's Six-Stage",
    author: 'Michael Hauge',
    acts: '6 Stages · Outer + inner journey',
    description: "Maps plot (outer journey) against character transformation (inner journey) with precise % markers. Every character hides behind an Identity and must reach their Essence. The story is that movement.",
    beats: ['Stage 1: Setup (0–10%)', 'Stage 2: New Situation (10–25%)', 'Stage 3: Progress (25–50%)', 'Stage 4: Complications (50–75%)', 'Stage 5: Final Push (75–90%)', 'Stage 6: Aftermath (90–100%)'],
    tip: "Map both journeys in parallel columns. The external events should be forcing the internal transformation —not running alongside it independently.",
  },
  {
    id: 'heroines-journey',
    name: "Heroine's Journey",
    author: 'Maureen Murdock',
    acts: '10 Phases · Inner transformation',
    description: "Murdock's answer to Campbell: a journey not of conquest but of integration. The heroine separates from the feminine to succeed in a masculine world—then must return and reconcile the two. Particularly powerful for character-driven stories.",
    beats: ['Separation from the Feminine', 'Identification with the Masculine', 'Road of Trials', 'Illusory Boon of Success', 'Awakening to Feelings of Spiritual Aridity', 'Initiation and Descent to the Goddess', 'Urgent Yearning to Reconnect', 'Healing the Mother/Daughter Split', 'Healing the Wounded Masculine', 'Integration of Feminine and Masculine'],
    tip: "The midpoint crisis—\"Illusory Boon\"—is when the hero achieves what they thought they wanted and feels nothing. That hollowness is where the real story begins. Don't skip it.",
  },
  {
    id: 'story-spine',
    name: 'Story Spine',
    author: 'Pixar / Brian Kern',
    acts: '6 Steps · Causal chain',
    description: "The structure Pixar uses to develop story pitches. Each sentence must logically cause the next. Simple enough to sketch on a napkin, powerful enough to build a feature film. Forces writers to make every story beat a consequence, not a coincidence.",
    beats: ['Once upon a time...', 'Every day...', 'Until one day...', 'Because of that...', 'Because of that... (escalate)', 'Until finally...', 'Ever since then...'],
    tip: "\"Because of that\" is the most important phrase in storytelling. If you can replace it with \"and then\" anywhere in your spine, you have a plot problem—not a story. Fix the causation.",
  },
  {
    id: 'five-act',
    name: 'Five-Act Structure',
    author: 'Gustav Freytag / Shakespeare',
    acts: '5 Acts · Classical drama',
    description: "Shakespeare's architecture. Each act has a distinct dramatic function: Act I establishes, Act II complicates, Act III turns, Act IV darkens, Act V resolves. Slower burn than 3-act but allows deeper thematic development.",
    beats: ['Act I — Exposition', 'Act II — Rising Action', 'Act III — Climax / Turn', 'Act IV — Falling Action', 'Act V — Catastrophe or Denouement'],
    tip: "The pivot is Act III—the moment everything changes direction. In tragedy, it's when the fatal flaw becomes irreversible. In comedy, it's the farthest point from resolution. Locate it first, then build outward.",
  },
  {
    id: 'romancing-the-beat',
    name: 'Romancing the Beat',
    author: 'Gwen Hayes',
    acts: '2 Acts · ~20 Beats · Romance',
    description: "The industry-standard beat sheet for romance novels and romantic screenplays. Built entirely around the relationship arc rather than external plot. Every beat tracks the emotional state between the two leads—from meeting to falling apart to earned HEA (happily ever after).",
    beats: ['The Meet', 'Wanting', 'Misbeliefs & Wounds', 'No Way This Is Going Anywhere', 'Humming Along', 'Shiny Hoo-Ha Moment', 'Resonance', 'The Swoon', 'Deepening', 'Commitment Freakout', 'The Dark Moment', 'Groveling / Grand Gesture', 'Happily Ever After'],
    tip: "The 'Dark Moment' is not external conflict—it's the moment the relationship looks permanently broken because of the internal wound, not plot circumstances. If external forces break them up, you've written plot. If their own fear breaks them up, you've written romance.",
  },
  {
    id: 'virgins-promise',
    name: "The Virgin's Promise",
    author: 'Kim Hudson',
    acts: '13 Beats · Inner creative arc',
    description: "Hudson's counterpart to Hero's Journey: not a story of conquest but of becoming. The protagonist suppresses their authentic self to survive in a dependent world—then slowly, at great personal cost, claims their true identity. Powerful for character-driven stories about artists, outsiders, and anyone who must choose between belonging and being themselves.",
    beats: ['Dependent World', 'Price of Conformity', 'Opportunity to Shine', 'Dresses the Part', 'Secret World', 'No Longer Fitting In', 'Mentor Appears', 'Fully Shines', 'Kingdom in Chaos', 'Wanders in the Wilderness', 'Choice to be Taken or Reclaimed', 'The Kingdom is Brighter', 'Rescue of the Prince'],
    tip: "The 'Secret World' beat is the heart of the structure—the private space where the protagonist is fully themselves, unseen by the kingdom. Design it first. Make it specific and joyful. The whole story is the cost of eventually making that world public.",
  },
  {
    id: 'mice-quotient',
    name: 'MICE Quotient',
    author: 'Orson Scott Card',
    acts: '4 Types · Story classifier',
    description: "Not a beat sheet—a diagnostic. Every story is dominated by one of four story types: Milieu (a world to explore), Inquiry (a question to answer), Character (a person to transform), or Event (a situation to resolve). The type you choose defines what promises you make to readers and what must be true for the story to feel finished.",
    beats: ['Identify your dominant story type (M/I/C/E)', 'Milieu — Enter the world; explore it; leave or stay', 'Inquiry — Pose the question; investigate; answer or accept mystery', 'Character — Show who they are; force the change; show who they become', 'Event — Establish the normal order; disrupt it; restore or accept new order', 'Nest additional types inside the dominant frame', 'Open each nested type; close it before the outer type closes'],
    tip: "Most failed stories fail because the writer thought they were telling one type but kept doing the work of another. Finish the diagnostic honestly: what question does your story actually answer when it ends? That's your dominant type.",
  },
  {
    id: 'w-plot',
    name: 'The W-Plot',
    author: 'Melanie Anne Phillips',
    acts: '2 Tracks · 4 Crossings',
    description: "Tracks two simultaneous arcs—external plot and internal emotional journey—that cross four times to form a W shape. Popular in TV writing rooms because it forces writers to keep both dimensions in sync. A plot that moves without emotional movement is action. Emotion that moves without plot is therapy. The W forces both.",
    beats: ['Opening State (plot + emotion established)', 'Downward: External complication begins', 'Crossing 1 — external pressure triggers internal shift', 'Upward: False hope or apparent success', 'Crossing 2 — internal wound surfaces in the plot', 'Downward: Midpoint reversal, both tracks worsen', 'Crossing 3 — darkest moment, tracks converge at crisis', 'Upward: Internal resolution enables external breakthrough', 'Crossing 4 — external victory reflects internal transformation', 'Resolution (both tracks land)'],
    tip: "Draw the actual W on paper before you outline. Mark where each crossing happens in your story. If the crossings are all bunched together or missing, your two tracks aren't actually interacting—they're running in parallel. The crossings are the story.",
  },
  {
    id: 'harmon-pixar-hybrid',
    name: 'Harmon / Pixar Hybrid',
    author: 'Dan Harmon + Pixar Brain Trust',
    acts: '2 Layers · Emotional + Structural',
    description: "A working method used by experienced TV and film writers: run Harmon's Story Circle for emotional precision, then use Save the Cat's beat timing for structural placement. The Circle tells you what the character needs to feel; the beats tell you where in the script those feelings have to land. Together they solve both the 'what happens' and 'why it matters' problems simultaneously.",
    beats: ['Story Circle: map all 8 emotional beats first', 'Save the Cat: map 15 structural beats second', 'Align: Opening Image = You (zone of comfort)', 'Align: Catalyst = Need (want something)', 'Align: Break into Two = Go (unfamiliar situation)', 'Align: Fun & Games = Search (adapt, struggle)', 'Align: Midpoint = Find (get what they wanted)', 'Align: All Is Lost = Take (pay the price)', 'Align: Break into Three = Return (back to familiar)', 'Align: Final Image = Change (they are different)'],
    tip: "The hybrid works because it exposes misalignments: if your Act 2 fun-and-games section doesn't also feel like 'Search / Struggle', your plot and character arc are drifting apart. Every structural beat should also be an emotional beat. If it isn't, rewrite it until it is.",
  },
]

export default function NewProject() {
  const router = useRouter()
  const toast  = useToast()
  const [selected, setSelected] = useState(null)
  const [step,     setStep]     = useState(1)
  const [form,     setForm]     = useState({ title: '', type: 'Novel', logline: '' })
  const [saving,   setSaving]   = useState(false)
  const [saveErr,  setSaveErr]  = useState(null)

  const fw = frameworks.find(f => f.id === selected)

  async function handleCreate() {
    if (!form.title || !selected) return
    setSaving(true)
    setSaveErr(null)

    // Get current user
    const { data: { user }, error: authErr } = await supabase.auth.getUser()
    if (authErr || !user) {
      setSaveErr('You need to be signed in to create a project.')
      toast.error('Sign in to create a project.')
      setSaving(false)
      return
    }

    // INSERT project — with 8s timeout so button never freezes forever
    let data, error
    try {
      const result = await Promise.race([
        supabase
          .from('projects')
          .insert({
            user_id:    user.id,
            title:      form.title.trim(),
            type:       form.type,
            logline:    form.logline.trim() || null,
            framework:  selected,
            status:     'seed',
          })
          .select()
          .single(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), 8000)
        ),
      ])
      data  = result.data
      error = result.error
    } catch (e) {
      setSaveErr(
        e.message === 'timeout'
          ? 'Request timed out. Check your connection and try again.'
          : 'Something went wrong. Try again.'
      )
      toast.error('Could not create project.')
      setSaving(false)
      return
    }

    if (error) {
      console.error('Supabase insert error:', error)
      setSaveErr(`Could not save project: ${error.message}`)
      toast.error('Could not create project.')
      setSaving(false)
      return
    }

    toast.success('Project created.')
    router.push(`/projects/${data.id}`)
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-soft)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Step {step} of 2
        </p>
        <h1 style={{ fontSize: '30px', marginBottom: '8px' }}>
          {step === 1 ? 'Choose your framework' : `Set up "${form.title || 'your story'}"`}
        </h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '15px' }}>
          {step === 1
            ? 'Read the descriptions. Pick the one that feels right. You can always change it later.'
            : 'Just the basics —you can fill everything else in as you go.'}
        </p>
      </div>

      {/* Step 1 —Framework picker */}
      {step === 1 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {frameworks.map(f => (
              <div
                key={f.id}
                onClick={() => setSelected(f.id)}
                className="card"
                style={{
                  padding: '24px', cursor: 'pointer',
                  border: selected === f.id ? '2px solid var(--green)' : '1px solid var(--border)',
                  background: selected === f.id ? 'var(--green-pale)' : '#fff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '8px',
                      background: selected === f.id ? 'var(--green)' : 'var(--green-pale)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: selected === f.id ? '#fff' : 'var(--green)', flexShrink: 0,
                    }}>
                      <FrameworkIcon id={f.id} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', marginBottom: '2px' }}>{f.name}</h3>
                      <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>by {f.author} · {f.acts}</p>
                    </div>
                  </div>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    border: selected === f.id ? 'none' : '2px solid var(--border)',
                    background: selected === f.id ? 'var(--green)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {selected === f.id && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.65', marginBottom: '12px' }}>
                  {f.description}
                </p>

                <div className="tip-box">
                  <strong>Craft tip:</strong> {f.tip}
                </div>

                {f.beats.length > 0 && (
                  <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {f.beats.map((b, i) => (
                      <span key={i} className="mono" style={{
                        padding: '2px 8px', borderRadius: '4px',
                        background: '#fff', border: '1px solid var(--green-border)',
                        color: 'var(--text-mid)',
                      }}>{b}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="btn-primary"
            disabled={!selected}
            onClick={() => setStep(2)}
            style={{ opacity: selected ? 1 : 0.4, cursor: selected ? 'pointer' : 'not-allowed', fontSize: '15px', padding: '12px 28px' }}
          >
            Continue with {fw?.name || '...'} →
          </button>
        </>
      )}

      {/* Step 2 —Project details */}
      {step === 2 && (
        <div className="fade-up" style={{ maxWidth: '560px' }}>
          <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px',
                background: 'var(--green)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#fff', flexShrink: 0,
              }}>
                <FrameworkIcon id={fw.id} size={16} />
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--green)' }}>{fw.name}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{fw.acts}</p>
              </div>
              <button
                onClick={() => setStep(1)}
                style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-soft)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Change
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                  Story title <span style={{ color: 'var(--text-soft)', fontWeight: '400' }}>(can be a working title)</span>
                </label>
                <input
                  className="input"
                  placeholder="e.g. The Long Road Home"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  onKeyDown={e => { if (e.key === 'Enter' && form.title) handleCreate() }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Format</label>
                <select className="input" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                  {['Novel', 'Short Story', 'Screenplay', 'TV Pilot', 'Novella', 'Memoir', 'Other'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', display: 'block', marginBottom: '4px' }}>
                  Logline <span style={{ fontWeight: '400', color: 'var(--text-soft)' }}>(optional —one sentence)</span>
                </label>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '6px' }}>
                  A logline answers: who wants what, and what stands in the way?
                </p>
                <textarea
                  className="input"
                  placeholder="e.g. A disgraced war correspondent returns to her hometown to care for a dying father she hasn't spoken to in twenty years."
                  value={form.logline}
                  onChange={e => setForm({ ...form, logline: e.target.value })}
                  style={{ minHeight: '80px' }}
                />
              </div>
            </div>
          </div>

          <div className="tip-box" style={{ marginBottom: '24px' }}>
            <strong>Don't overthink the title or logline.</strong> Both can change. The point is to give your story a home so you can keep building it.
          </div>

          {saveErr && (
            <p style={{ fontSize: '13px', color: '#991B1B', marginBottom: '16px', padding: '10px 14px', background: '#FEF2F2', borderRadius: '8px', border: '1px solid #FECACA' }}>
              {saveErr}
            </p>
          )}

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-ghost" onClick={() => setStep(1)} disabled={saving}>← Back</button>
            <button
              className="btn-primary"
              disabled={!form.title || saving}
              style={{ opacity: (form.title && !saving) ? 1 : 0.4, fontSize: '15px', padding: '12px 28px' }}
              onClick={handleCreate}
            >
              {saving ? 'Creating...' : 'Create project →'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
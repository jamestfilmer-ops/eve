'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import { useToast } from '../components/Toast'
import { SkeletonPage } from '../components/Skeleton'

export const dynamic = 'force-dynamic'

const TYPES = ['All', 'One-liner', 'Scene', 'Dialogue', 'Character', 'Theme', 'World', 'Title']
const typeColors = {
  'One-liner': { bg: '#FFF8E6', color: '#92400E', border: '#FDE68A' },
  'Scene':     { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Dialogue':  { bg: '#EFF6FF', color: '#1E40AF', border: '#BFDBFE' },
  'World':     { bg: '#F0F9FF', color: '#0369A1', border: '#BAE6FD' },
  'Character': { bg: '#FDF4FF', color: '#6B21A8', border: '#E9D5FF' },
  'Theme':     { bg: '#FFF1F2', color: '#9F1239', border: '#FECDD3' },
  'Title':     { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
}

function timeAgo(ts) {
  const diff = Date.now() - new Date(ts).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1)  return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24)  return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 7)  return `${days}d ago`
  return `${Math.floor(days / 7)}w ago`
}

export default function IdeasPage() {
  const router = useRouter()
  const toast  = useToast()

  const [user,      setUser]      = useState(null)
  const [ideas,     setIdeas]     = useState([])
  const [loading,   setLoading]   = useState(true)
  const [filter,    setFilter]    = useState('All')
  const [showForm,  setShowForm]  = useState(false)
  const [newIdea,   setNewIdea]   = useState({ type: 'One-liner', text: '' })
  const [sparkOffset, setSparkOffset] = useState(() => Math.floor(Math.random() * 100))

  const allSparks = [
    // ── Character ────────────────────────────────────────────────────────────
    { type: 'Character', spark: 'Someone who is very good at the wrong thing.' },
    { type: 'Character', spark: 'Someone trying to escape a version of themselves they no longer believe in.' },
    { type: 'Character', spark: 'Someone who has been lying to protect everyone — until the lie becomes the truth.' },
    { type: 'Character', spark: 'A person who is always the most capable one in the room — and has never once felt safe.' },
    { type: 'Character', spark: 'Someone who became the villain of their own story so slowly they never noticed.' },
    { type: 'Character', spark: 'Someone who stopped caring about being liked and has no idea what to do with the freedom.' },
    { type: 'Character', spark: 'Someone trying to be a better person than the one who raised them, with no idea how.' },
    { type: 'Character', spark: 'Someone with nothing left to lose who suddenly discovers one thing they cannot afford to.' },
    { type: 'Character', spark: 'A person who has been performing competence for so long they have forgotten what they actually know.' },
    { type: 'Character', spark: 'Someone whose greatest talent is making other people feel like the most important person in the room — except for one person.' },
    { type: 'Character', spark: 'A person who survived something they were not supposed to, and has spent every day since trying to deserve it.' },
    { type: 'Character', spark: 'Someone who is only honest when they are angry.' },
    { type: 'Character', spark: 'A person who has kept a secret for so long it has become a load-bearing wall in their identity.' },
    { type: 'Character', spark: 'Someone who aged into exactly the person they swore they would never become.' },
    { type: 'Character', spark: 'A professional liar who does not know how to stop even when the stakes are gone.' },
    { type: 'Character', spark: 'Someone who interprets every act of kindness as a threat.' },
    { type: 'Character', spark: 'A person who was loved very well in childhood and has never quite recovered from the impossibility of recreating it.' },
    { type: 'Character', spark: 'Someone who builds things — houses, organizations, relationships — and is constitutionally incapable of living in them.' },
    { type: 'Character', spark: 'A person who has read everything and understood nothing about their own life.' },
    { type: 'Character', spark: 'Someone who is the funniest person at every funeral.' },
    { type: 'Character', spark: 'A person who knows exactly what everyone in the room needs to hear — and says the opposite instead.' },
    { type: 'Character', spark: 'Someone whose life went exactly to plan, and who has a private terror that they chose wrong.' },
    { type: 'Character', spark: 'A person who is defined entirely by their relationship to a dead person.' },
    { type: 'Character', spark: 'Someone who has forgiven everyone except the one person who would most benefit from it.' },
    { type: 'Character', spark: 'A caretaker who does not know how to receive care and interprets every attempt as an insult.' },
    { type: 'Character', spark: 'Someone who is always leaving — jobs, cities, people — and is only now asking what they are running toward.' },
    { type: 'Character', spark: 'A person who is terrifying when they are quiet.' },
    { type: 'Character', spark: 'Someone whose only real relationship is with a place that no longer exists.' },
    { type: 'Character', spark: 'A person who was extraordinarily beautiful in youth and is only now, at sixty, becoming themselves.' },
    { type: 'Character', spark: 'Someone who betrayed a friend thirty years ago and has built an entire identity around deserving it.' },

    // ── One-liner ─────────────────────────────────────────────────────────────
    { type: 'One-liner', spark: 'Two strangers who share a secret that should destroy their relationship — but instead it saves it.' },
    { type: 'One-liner', spark: 'A person finally gets what they wanted for twenty years — on the day it no longer matters.' },
    { type: 'One-liner', spark: 'A child who understands something about their parent that the parent will never say out loud.' },
    { type: 'One-liner', spark: 'Someone who burned their life down and is now genuinely unsure if it was a mistake.' },
    { type: 'One-liner', spark: 'The wrong person is saved. The right one is not. Both have to keep living.' },
    { type: 'One-liner', spark: 'A family reunion where one person knows a truth that would destroy everyone — and has not decided yet.' },
    { type: 'One-liner', spark: 'A mentor realizes the student surpassed them years ago and has been pretending not to know.' },
    { type: 'One-liner', spark: 'Two people who were in love, then were not, got everything they wanted — and kept thinking about each other.' },
    { type: 'One-liner', spark: 'A translator who has been subtly altering the meaning of what two world leaders say to each other for a decade.' },
    { type: 'One-liner', spark: 'A woman inherits her estranged father\'s house and finds it full of evidence that he knew her entire life — from a distance.' },
    { type: 'One-liner', spark: 'The last two people who remember a dead language, and they hate each other.' },
    { type: 'One-liner', spark: 'A forger of famous paintings falls in love with the only person who can tell they are fakes.' },
    { type: 'One-liner', spark: 'A lighthouse keeper who has been signaling ships for forty years discovers the route was decommissioned in 1987.' },
    { type: 'One-liner', spark: 'Two siblings, separated in childhood, become best friends as adults without realizing who the other is.' },
    { type: 'One-liner', spark: 'A speech therapist who cannot say the word she needs most to say.' },
    { type: 'One-liner', spark: 'An assassin who retires and takes up gardening — and has the same problem with both.' },
    { type: 'One-liner', spark: 'A person discovers that the most important conversation of their life happened while they were drunk and they remember nothing.' },
    { type: 'One-liner', spark: 'A man finds letters from his mother to a man who is not his father, written before he was born. The letters are love letters.' },
    { type: 'One-liner', spark: 'The only survivor of a disaster becomes famous — and resents every person who needs them to have survived for a reason.' },
    { type: 'One-liner', spark: 'A con artist who has been running the same scam on the same mark for fifteen years, now genuinely unsure who conned whom.' },
    { type: 'One-liner', spark: 'Two strangers discover they have been dreaming the same dream. Only one of them is asleep.' },
    { type: 'One-liner', spark: 'A musician who lost their hearing composes their greatest work — and cannot explain how.' },
    { type: 'One-liner', spark: 'Someone who has spent twenty years trying to forget one afternoon.' },
    { type: 'One-liner', spark: 'The last employee of a failing institution who believes, alone, that it matters.' },
    { type: 'One-liner', spark: 'A couple who stayed together for the children. The children are forty.' },
    { type: 'One-liner', spark: 'Someone who spent their life asking the right questions discovers they were asking them to the wrong person.' },
    { type: 'One-liner', spark: 'A war ends. The soldiers do not know how to stop fighting, and neither do their families.' },
    { type: 'One-liner', spark: 'A hostage negotiator whose only real hostage situation is their marriage.' },
    { type: 'One-liner', spark: 'The person who identified a body thirty years ago made a mistake. They are the only one still alive who knows.' },
    { type: 'One-liner', spark: 'A famous author\'s final, secret manuscript is discovered — addressed to a person no one knew existed.' },

    // ── Scene ─────────────────────────────────────────────────────────────────
    { type: 'Scene', spark: 'A conversation where both people are lying, and both know the other is lying, and neither says so.' },
    { type: 'Scene', spark: 'Two people saying goodbye, neither admitting it might be permanent.' },
    { type: 'Scene', spark: 'The first meal shared after a falling-out. Nobody mentions what happened.' },
    { type: 'Scene', spark: 'A job interview where the interviewer is clearly more nervous than the applicant.' },
    { type: 'Scene', spark: 'Two old friends meeting after a decade — neither is who the other remembers.' },
    { type: 'Scene', spark: 'The last night in a place being torn down. Two people who never spoke.' },
    { type: 'Scene', spark: 'An apology that arrives thirty years too late — and is still exactly what was needed.' },
    { type: 'Scene', spark: 'A wedding toast from someone who does not think the couple should be together.' },
    { type: 'Scene', spark: 'Two strangers stuck in an elevator. One of them is on the way to do something they cannot undo.' },
    { type: 'Scene', spark: 'A father teaching his son to drive a car the father no longer has a license to operate.' },
    { type: 'Scene', spark: 'A deathbed confession that the dying person has been rehearsing for twenty years — and the listener already knows.' },
    { type: 'Scene', spark: 'A reading of a will where the biggest inheritance goes to someone nobody in the room has ever heard of.' },
    { type: 'Scene', spark: 'Two enemies, alone, in a burning building, deciding whether to help each other.' },
    { type: 'Scene', spark: 'A first date that is clearly not a first meeting.' },
    { type: 'Scene', spark: 'Someone packing up a childhood bedroom while their parent pretends to help.' },
    { type: 'Scene', spark: 'A woman visits the house she grew up in. Strangers live there now. They invite her in.' },
    { type: 'Scene', spark: 'The moment just before a terrible decision, when everyone in the room knows and no one says it.' },
    { type: 'Scene', spark: 'Two people who have been circling each other for years, alone in a room, when the power goes out.' },
    { type: 'Scene', spark: 'A dog being returned to a shelter by someone who clearly does not want to return it.' },
    { type: 'Scene', spark: 'A child asks a grandparent a question the grandparent has spent a lifetime avoiding.' },
    { type: 'Scene', spark: 'The last customer in a shop on its closing day.' },
    { type: 'Scene', spark: 'A person learning to swim at sixty-five, because someone they love has asked them to.' },
    { type: 'Scene', spark: 'A therapy session where the therapist realizes, mid-session, the patient is describing the therapist\'s own life.' },
    { type: 'Scene', spark: 'Two people who love the same dead person, meeting for the first time at the funeral.' },
    { type: 'Scene', spark: 'A job performance review that somehow becomes a confessional.' },
    { type: 'Scene', spark: 'Two people sharing an umbrella. One of them arranged the rain.' },
    { type: 'Scene', spark: 'A person returning a book to a library after thirty years. They still have not finished it.' },
    { type: 'Scene', spark: 'A dinner where everyone at the table knows the host has just been diagnosed with something serious. Nobody knows whether the host knows they know.' },
    { type: 'Scene', spark: 'Two people playing chess. The game is not about chess.' },
    { type: 'Scene', spark: 'Someone being fired with great kindness — which makes it worse.' },

    // ── Theme ─────────────────────────────────────────────────────────────────
    { type: 'Theme', spark: 'What does it cost to be the person everyone needs you to be?' },
    { type: 'Theme', spark: 'Is loyalty a virtue or a cage?' },
    { type: 'Theme', spark: 'What do we owe the people who made us who we are?' },
    { type: 'Theme', spark: 'Can you forgive someone who is not sorry?' },
    { type: 'Theme', spark: 'How much of who we are is just who people expected us to be?' },
    { type: 'Theme', spark: 'What do you do when the thing you fought your whole life for turns out to be wrong?' },
    { type: 'Theme', spark: 'Is there a difference between surviving and living?' },
    { type: 'Theme', spark: 'What is the difference between a secret and a lie?' },
    { type: 'Theme', spark: 'Can love outlast the person you loved?' },
    { type: 'Theme', spark: 'What does it mean to be truly known by another person?' },
    { type: 'Theme', spark: 'Is there a version of ambition that is not, at its core, about fear?' },
    { type: 'Theme', spark: 'What do we do with grief that has nowhere to go?' },
    { type: 'Theme', spark: 'Can a person change, or do they just become more themselves?' },
    { type: 'Theme', spark: 'What is the relationship between belonging and erasure?' },
    { type: 'Theme', spark: 'Who gets to decide when someone has suffered enough?' },
    { type: 'Theme', spark: 'Is nostalgia a form of love or a form of cowardice?' },
    { type: 'Theme', spark: 'What do we protect people from when we protect them from the truth?' },
    { type: 'Theme', spark: 'Is hope a virtue or a delusion in the face of real evidence?' },
    { type: 'Theme', spark: 'What does it mean to inherit a wound you did not earn?' },
    { type: 'Theme', spark: 'At what point does an act of protection become an act of control?' },
    { type: 'Theme', spark: 'What is left of a person when everything they built is gone?' },
    { type: 'Theme', spark: 'Can two people ever want the same thing at the same time, in the same way?' },
    { type: 'Theme', spark: 'Is there such a thing as an ending that is not also a betrayal of what came before?' },
    { type: 'Theme', spark: 'What are we really asking when we ask someone to stay?' },
    { type: 'Theme', spark: 'How do you tell the story of a person who never believed they deserved one?' },
    { type: 'Theme', spark: 'Is it possible to be both the victim and the cause?' },
    { type: 'Theme', spark: 'What makes a person irreplaceable — and what does it do to everyone left when they are gone?' },
    { type: 'Theme', spark: 'Can something be true and unfair at the same time?' },
    { type: 'Theme', spark: 'What is the cost of keeping the peace?' },
    { type: 'Theme', spark: 'Does it matter why you do the right thing if the result is the same?' },

    // ── World ─────────────────────────────────────────────────────────────────
    { type: 'World', spark: 'A town where one family has been the enemy of another family for so long that no living person remembers why.' },
    { type: 'World', spark: 'A hospital ward where the patients have been there so long they have become more fluent in the place than the staff.' },
    { type: 'World', spark: 'A small newspaper that covers a dying town — and the town is dying partly because of what the paper printed.' },
    { type: 'World', spark: 'A fishing village where every family has lost someone to the water — and every family pretends they have made peace with it.' },
    { type: 'World', spark: 'A theater company that has been performing the same play for thirty years because the lead refuses to stop.' },
    { type: 'World', spark: 'A diner at the edge of a small city that is the last thing standing in a neighborhood that used to be something.' },
    { type: 'World', spark: 'A mountain rescue team in a place where the same people keep needing to be rescued.' },
    { type: 'World', spark: 'A prison where the guards and the inmates have been there so long they have started to resemble each other.' },
    { type: 'World', spark: 'A music school where the star pupil just quit — and the teacher has to figure out whether to be relieved.' },
    { type: 'World', spark: 'A family business that everyone in the family works at and no one in the family wants.' },
    { type: 'World', spark: 'A border town where everyone has a reason to cross and a reason not to.' },
    { type: 'World', spark: 'A retirement community where one resident is clearly waiting to die — and is making everyone else confront the same question.' },
    { type: 'World', spark: 'A drought-year farm where the land and the family are failing at the same rate.' },
    { type: 'World', spark: 'An embassy in a country that no longer recognizes the government the embassy represents.' },
    { type: 'World', spark: 'A boxing gym in a neighborhood that no longer has anything to fight for — except the gym.' },
    { type: 'World', spark: 'A law firm where one partner knows something about the founding case that would undo the entire practice.' },
    { type: 'World', spark: 'An archaeological dig where the thing being excavated belongs to someone who is still alive.' },
    { type: 'World', spark: 'A coast guard station at the end of a shipping lane that has not had an incident in twenty years — this week.' },
    { type: 'World', spark: 'A restaurant kitchen in the final week before a beloved restaurant closes forever.' },
    { type: 'World', spark: 'A Catholic school where the most devout person on staff is having the deepest crisis of faith.' },
  ]
  const [search,    setSearch]    = useState('')
  const [promoteId, setPromoteId] = useState(null)
  const [saving,    setSaving]    = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) loadIdeas(user.id)
      else setLoading(false)
    })
  }, [])

  async function loadIdeas(userId) {
    setLoading(true)
    const { data, error } = await supabase
      .from('ideas').select('*').eq('user_id', userId)
      .order('pinned', { ascending: false }).order('created_at', { ascending: false })
    if (error) {
      toast.error('Could not load ideas. Try refreshing.')
    } else {
      setIdeas(data || [])
    }
    setLoading(false)
  }

  async function handleAdd() {
    if (!newIdea.text.trim() || !user) return
    setSaving(true)
    const { data, error } = await supabase
      .from('ideas').insert({ user_id: user.id, type: newIdea.type, text: newIdea.text, pinned: false })
      .select().single()
    if (error) {
      toast.error('Could not save idea. Try again.')
    } else {
      setIdeas(prev => [data, ...prev])
      setNewIdea({ type: 'One-liner', text: '' })
      setShowForm(false)
      toast.success('Idea captured.')
    }
    setSaving(false)
  }

  async function togglePin(id, current) {
    const { data, error } = await supabase
      .from('ideas').update({ pinned: !current }).eq('id', id).select().single()
    if (error) {
      toast.error('Could not update pin.')
    } else {
      setIdeas(prev =>
        prev.map(i => i.id === id ? data : i)
          .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
      )
      toast.success(current ? 'Unpinned.' : 'Pinned to top.')
    }
  }

  async function deleteIdea(id) {
    const { error } = await supabase.from('ideas').delete().eq('id', id)
    if (error) {
      toast.error('Could not delete idea.')
    } else {
      setIdeas(prev => prev.filter(i => i.id !== id))
      toast.success('Idea deleted.')
    }
  }

  const filtered = ideas
    .filter(i => filter === 'All' || i.type === filter)
    .filter(i => i.text.toLowerCase().includes(search.toLowerCase()))

  if (!user && !loading) return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 20px', textAlign: 'center' }}>
      <div className="card" style={{ display: 'inline-block', padding: '48px 40px' }}>
        <p style={{ marginBottom: '20px', color: 'var(--text-mid)' }}>Sign in to capture and manage your ideas.</p>
        <button className="btn-primary" onClick={() => router.push('/auth')}>Sign in</button>
      </div>
    </div>
  )

  if (loading) return <SkeletonPage variant="ideas" />

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 20px' }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: '12px' }}>Idea Bank</div>
            <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '6px' }}>Your Ideas</h1>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px', maxWidth: '480px', lineHeight: '1.65' }}>
              One-liners, fragments, overheard dialogue, half-formed characters. Drop it here before it disappears.
            </p>
          </div>
          <button className="btn-primary" onClick={() => setShowForm(!showForm)} style={{ flexShrink: 0 }}>
            {showForm ? 'Cancel' : '+ Capture idea'}
          </button>
        </div>
      </div>

      {/* Capture form */}
      {showForm && (
        <div className="fade-up card" style={{ padding: '22px', marginBottom: '28px', border: '2px solid var(--green)' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '6px' }}>Capture an idea</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '16px' }}>
            Don&apos;t edit it. Don&apos;t explain it. Just write it down exactly as it came to you.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {TYPES.filter(t => t !== 'All').map(t => {
              const active = newIdea.type === t
              const c = typeColors[t]
              return (
                <button key={t} onClick={() => setNewIdea({ ...newIdea, type: t })} style={{
                  fontSize: '12px', fontWeight: '600', padding: '5px 12px', borderRadius: '20px',
                  border: active ? `1.5px solid ${c.color}` : '1px solid var(--border)',
                  background: active ? c.bg : '#fff', color: active ? c.color : 'var(--text-soft)',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}>{t}</button>
              )
            })}
          </div>
          <textarea
            className="input"
            placeholder={
              newIdea.type === 'Dialogue'   ? 'Write the line exactly as you heard it in your head...' :
              newIdea.type === 'One-liner'  ? 'A single sentence that captures the whole story...' :
              newIdea.type === 'Scene'      ? 'Describe the scene —what happens, what it feels like...' :
              newIdea.type === 'Character'  ? "Who is this person? What's the one thing that makes them interesting?" :
              newIdea.type === 'Theme'      ? 'A statement, a question, or a contradiction...' :
              'Write it down...'
            }
            style={{ minHeight: '100px', marginBottom: '14px' }}
            value={newIdea.text}
            onChange={e => setNewIdea({ ...newIdea, text: e.target.value })}
            onKeyDown={e => { if (e.key === 'Enter' && e.metaKey) handleAdd() }}
            autoFocus
          />
          <div className="tip-box" style={{ marginBottom: '14px' }}>
            <strong>Craft note:</strong> The best ideas arrive uninvited. Your only job is to catch them. Judgment comes later.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-primary" onClick={handleAdd} disabled={!newIdea.text.trim() || saving} style={{ opacity: newIdea.text.trim() && !saving ? 1 : 0.4 }}>
              {saving ? 'Saving...' : 'Save idea'}
            </button>
            <button className="btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Search + filter */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          className="input" style={{ maxWidth: '200px', fontSize: '13px', padding: '8px 12px' }}
          placeholder="Search ideas..." value={search} onChange={e => setSearch(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {TYPES.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              fontSize: '12px', fontWeight: filter === t ? '600' : '400', padding: '5px 11px', borderRadius: '20px',
              border: filter === t ? '1.5px solid var(--green)' : '1px solid var(--border)',
              background: filter === t ? 'var(--green-pale)' : '#fff',
              color: filter === t ? 'var(--green)' : 'var(--text-soft)', cursor: 'pointer', transition: 'all 0.15s ease',
            }}>{t}</button>
          ))}
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-soft)', marginLeft: 'auto' }}>
          {filtered.length} idea{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Ideas list */}
      <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.length === 0 && ideas.length === 0 && (
          <div>
            <div style={{ textAlign: 'center', padding: '40px 20px 24px', color: 'var(--text-soft)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px', color: 'var(--text-mid)' }}>
                Nothing here yet.
              </p>
              <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                Every great story started as a fragment. Capture yours.
              </p>
              <button className="btn-primary" onClick={() => setShowForm(true)}>
                Capture your first idea
              </button>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '28px', marginTop: '8px' }}>
              <p style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px', textAlign: 'center' }}>
                Need a spark? React to one of these.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                <button
                  onClick={() => setSparkOffset(prev => {
                    let next = prev
                    while (next === prev) next = Math.floor(Math.random() * 100)
                    return next
                  })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-soft)', background: 'transparent', border: '1px solid var(--border)', borderRadius: '20px', padding: '4px 14px', cursor: 'pointer', transition: 'color 0.15s, border-color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.borderColor = 'var(--green-border)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-soft)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 2.5A4.5 4.5 0 002.5 6M2 2.5V2h.5M2 2.5H2.5M2 9.5A4.5 4.5 0 009.5 6M10 9.5V10h-.5M10 9.5H9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  Different sparks
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
                {(() => {
                  // Seeded shuffle so same offset always gives same 6, but types are mixed
                  // Group sparks by type
                  const byType = {}
                  allSparks.forEach(s => { if (!byType[s.type]) byType[s.type] = []; byType[s.type].push(s) })
                  const types = Object.keys(byType)
                  // Pick one from each type in rotation, offset by sparkOffset
                  const result = []
                  const typeCount = types.length // 5
                  for (let i = 0; i < 6; i++) {
                    const type = types[(i + sparkOffset) % typeCount]
                    const pool = byType[type]
                    const item = pool[(sparkOffset * 7 + i * 13) % pool.length]
                    result.push(item)
                  }
                  return result
                })().map((spark, i) => {
                  const col = typeColors[spark.type] || { bg: 'var(--green-pale)', color: 'var(--green)' }
                  return (
                    <button
                      key={i}
                      onClick={() => { setNewIdea({ ...newIdea, text: spark.spark, type: spark.type }); setShowForm(true) }}
                      className="card card-lift"
                      style={{
                        textAlign: 'left', padding: '14px 16px', cursor: 'pointer', width: '100%',
                      }}
                    >
                      <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 7px', borderRadius: '20px', background: col.bg, color: col.color, fontFamily: 'var(--font-ui)', display: 'inline-block', marginBottom: '8px' }}>{spark.type}</span>
                      <p style={{ fontSize: '13px', color: 'var(--text-dark)', lineHeight: '1.55', margin: 0, fontStyle: 'italic' }}>{spark.spark}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
        {filtered.length === 0 && ideas.length > 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-soft)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px', color: 'var(--text-mid)' }}>Nothing matches.</p>
            <p style={{ fontSize: '14px' }}>Try a different search or filter.</p>
          </div>
        )}

        {filtered.map(idea => {
          const c = typeColors[idea.type] || typeColors['One-liner']
          return (
            <div key={idea.id} className="card card-lift" style={{
              padding: '18px 20px',
              borderLeft: idea.pinned ? '3px solid var(--green)' : undefined,
              borderRadius: idea.pinned ? '0 12px 12px 0' : undefined,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '4px', background: c.bg, color: c.color, border: `1px solid ${c.border}`, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {idea.type}
                    </span>
                    {idea.pinned && <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Pinned</span>}
                    <span style={{ fontSize: '11px', color: 'var(--text-soft)', marginLeft: 'auto' }}>{timeAgo(idea.created_at)}</span>
                  </div>
                  <p style={{
                    fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.7',
                    fontFamily: idea.type === 'Dialogue' || idea.type === 'One-liner' ? 'var(--font-display)' : 'var(--font-ui)',
                    fontStyle: idea.type === 'Dialogue' ? 'italic' : 'normal',
                  }}>{idea.text}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                  <button onClick={() => togglePin(idea.id, idea.pinned)} style={{
                    background: idea.pinned ? 'var(--green-pale)' : 'transparent',
                    border: '1px solid var(--border)', borderRadius: '6px', padding: '5px 8px',
                    cursor: 'pointer', fontSize: '12px', color: idea.pinned ? 'var(--green)' : 'var(--text-soft)',
                    fontWeight: '600', transition: 'all 0.15s ease', minWidth: '48px',
                  }}>{idea.pinned ? 'Pinned' : 'Pin'}</button>
                  <button onClick={() => setPromoteId(promoteId === idea.id ? null : idea.id)} style={{
                    background: 'transparent', border: '1px solid var(--border)', borderRadius: '6px',
                    padding: '5px 8px', cursor: 'pointer', fontSize: '12px', color: 'var(--text-soft)', transition: 'all 0.15s ease',
                  }}>Use</button>
                  <button onClick={() => deleteIdea(idea.id)} style={{
                    background: 'transparent', border: '1px solid var(--border)', borderRadius: '6px',
                    padding: '5px 8px', cursor: 'pointer', fontSize: '12px', color: '#9F1239', transition: 'all 0.15s ease',
                  }}>Delete</button>
                </div>
              </div>

              {promoteId === idea.id && (
                <div style={{ marginTop: '14px', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--text-mid)', marginBottom: '10px' }}>Ready to build this into a full project?</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <a href="/projects/new" style={{ textDecoration: 'none' }}>
                      <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>Start a new project</button>
                    </a>
                    <button className="btn-ghost" style={{ fontSize: '13px', padding: '8px 14px' }} onClick={() => setPromoteId(null)}>Not yet</button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </div>
  )
}
'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'

const THEME_PRINCIPLES = [
  {
    title: 'A theme is a question, not an answer',
    body: 'The moment your story answers its own theme, it becomes a message. "Love conquers all" is a message. "Does love survive betrayal?" is a theme. Great stories do not resolve their themes — they pressure-test them until the audience has to decide for themselves.',
  },
  {
    title: 'Theme lives in character, not dialogue',
    body: "The worst place to put your theme is in a character's mouth as a speech. The best place is in the gap between what a character wants and what they need — the story's entire engine is the theme playing out through behavior and consequence.",
  },
  {
    title: 'Every character represents a position',
    body: 'In a well-built story, every major character embodies a different answer to the thematic question. The protagonist holds one position at the start. The antagonist holds the opposing position. The arc is the protagonist being forced to reckon with whether their position survives contact with reality.',
  },
  {
    title: 'Motifs are the theme made visible',
    body: 'A theme is abstract. A motif is the concrete image that carries it — water for change, mirrors for self-deception, birds for freedom. The motif appears early, recurs, and transforms. By the end it means something different than it did at the start. That shift in meaning is the argument.',
  },
]

const THEME_EXAMPLES = [
  {
    film: 'There Will Be Blood',
    theme: 'Can ambition exist without destroying everything it touches?',
    motif: 'Oil — something buried, extracted by force, that blackens everything it reaches',
    argument: "No. Daniel Plainview's success is the proof of his ruin.",
  },
  {
    film: 'Parasite',
    theme: 'Is the desire to belong to a higher class a survival instinct or a moral failure?',
    motif: "The scholar's rock — an object that promises status and delivers catastrophe",
    argument: 'Both, simultaneously, and the system makes the distinction irrelevant.',
  },
  {
    film: 'Whiplash',
    theme: 'Does greatness require suffering, or does suffering just produce suffering?',
    motif: 'Blood on the drum kit — the literal cost measured in flesh',
    argument: 'Left deliberately unresolved. Fletcher may be right. That is the horror.',
  },
  {
    film: 'Marriage Story',
    theme: 'Can love outlast the relationship that produced it?',
    motif: 'The lists — what each person loves about the other, never read aloud until too late',
    argument: 'Yes — but only after it stops being a marriage.',
  },
]

const THEME_CATEGORIES = [
  { label: 'Identity', examples: ['Who am I without what I have built?', 'Can a person change, or only reveal themselves?', 'What do I owe the person I used to be?'] },
  { label: 'Love & Loyalty', examples: ['Does love survive honesty?', 'What is the difference between loyalty and complicity?', 'Can you love someone and still leave?'] },
  { label: 'Power & Justice', examples: ['Is justice possible in a corrupt system?', 'Does power corrupt, or reveal?', 'What is owed to those the system has failed?'] },
  { label: 'Truth & Deception', examples: ['Is a comfortable lie more merciful than a painful truth?', 'What do we owe each other in terms of honesty?', 'Can we ever know our own motives?'] },
  { label: 'Family & Legacy', examples: ['Do we become our parents, or escape them?', 'What do children owe their families?', 'Can love survive irreconcilable difference?'] },
  { label: 'Ambition & Cost', examples: ['What is success worth if it costs you who you were?', 'At what point does determination become destruction?', 'Can ambition coexist with kindness?'] },
  { label: 'Faith & Doubt', examples: ['Can faith survive evidence against it?', 'What do we do when meaning fails us?', 'Is hope rational?'] },
  { label: 'Freedom & Belonging', examples: ['Is freedom worth loneliness?', 'What must be surrendered to belong?', 'Can you choose a community that did not choose you?'] },
]

export default function ThemesPage() {
  const [activeSection, setActiveSection] = useState('guide')
  const [projectThemes, setProjectThemes] = useState([])
  const [loading, setLoading]             = useState(true)
  const [user, setUser]                   = useState(null)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (!user) { setLoading(false); return }
      const { data: projects } = await supabase.from('projects').select('id, title').eq('user_id', user.id)
      if (!projects?.length) { setLoading(false); return }
      const ids = projects.map(p => p.id)
      const { data: themes } = await supabase.from('themes').select('*').in('project_id', ids).order('created_at', { ascending: false })
      if (themes) {
        const pm = {}
        projects.forEach(p => { pm[p.id] = p.title })
        setProjectThemes(themes.map(t => ({ ...t, projectTitle: pm[t.project_id] || 'Untitled' })))
      }
      setLoading(false)
    }
    load()
  }, [])

  const NAV = [
    { key: 'guide',    label: 'The Craft' },
    { key: 'examples', label: 'In Practice' },
    { key: 'starter',  label: 'Theme Finder' },
    { key: 'mine',     label: 'My Themes' },
  ]

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      <div style={{ background: 'var(--green)', padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontFamily: 'var(--font-ui)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Craft</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 44px)', color: '#fff', fontWeight: '700', lineHeight: '1.1', marginBottom: '14px' }}>Theme</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65', fontFamily: 'var(--font-body)', maxWidth: '580px', marginBottom: '28px' }}>
            The question your story is asking. Not the answer — the question. Everything else exists to pressure-test it.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {NAV.map(s => (
              <button key={s.key} onClick={() => setActiveSection(s.key)} style={{
                padding: '8px 18px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px',
                fontFamily: 'var(--font-ui)', fontWeight: activeSection === s.key ? '700' : '500',
                background: activeSection === s.key ? '#fff' : 'rgba(255,255,255,0.15)',
                color: activeSection === s.key ? 'var(--green)' : '#fff',
                border: 'none', transition: 'all 0.15s',
              }}>{s.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {activeSection === 'guide' && (
          <div>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
              {THEME_PRINCIPLES.map(p => (
                <div key={p.title} className="card card-lift" style={{ padding: '28px 30px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text)', marginBottom: '12px' }}>{p.title}</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text)', fontFamily: 'var(--font-body)', margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '24px 28px' }}>
              <p style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '12px', color: 'var(--green)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Theme lessons in the library</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { slug: 'theme', label: 'Theme' },
                  { slug: 'theme-vs-message', label: 'Theme vs. Message' },
                  { slug: 'theme-through-character', label: 'Theme Through Character' },
                  { slug: 'symbol-and-motif', label: 'Symbol and Motif' },
                  { slug: 'irony-in-fiction', label: 'Irony in Fiction' },
                  { slug: 'scorsese-theme', label: 'Scorsese on Theme' },
                  { slug: 'kieslowski-theme', label: 'Kieslowski on Theme' },
                ].map(l => (
                  <Link key={l.slug} href={'/learn/' + l.slug} style={{ display: 'inline-block', padding: '7px 14px', borderRadius: '8px', background: '#fff', border: '1px solid var(--green-border)', color: 'var(--green)', fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '13px', textDecoration: 'none' }}>
                    {l.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'examples' && (
          <div style={{ display: 'grid', gap: '20px' }}>
            {THEME_EXAMPLES.map(ex => (
              <div key={ex.film} className="card card-lift" style={{ padding: '28px 30px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '18px' }}>{ex.film}</div>
                <div style={{ display: 'grid', gap: '14px' }}>
                  {[
                    { k: 'Theme question', v: ex.theme },
                    { k: 'Central motif', v: ex.motif },
                    { k: "The story's argument", v: ex.argument },
                  ].map(row => (
                    <div key={row.k} style={{ borderLeft: '3px solid var(--green)', paddingLeft: '14px' }}>
                      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '11px', color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{row.k}</div>
                      <div style={{ fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.6' }}>{row.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'starter' && (
          <div>
            <p style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', lineHeight: '1.7', marginBottom: '32px' }}>
              Themes cluster around questions human beings have never stopped arguing about. Find the category that resonates with what your story is secretly about, take a starter question, and make it yours.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              {THEME_CATEGORIES.map(cat => (
                <div key={cat.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text)', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                    {cat.label}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {cat.examples.map(ex => (
                      <div key={ex} style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', lineHeight: '1.55', paddingLeft: '12px', borderLeft: '2px solid var(--green-border)' }}>
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'mine' && (
          <div>
            {!user ? (
              <div style={{ textAlign: 'center', padding: '64px 24px' }}>
                <p style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>Sign in to see themes across your projects.</p>
                <Link href="/auth" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '10px 24px', borderRadius: '8px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>Sign in</Link>
              </div>
            ) : loading ? (
              <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)', fontSize: '14px' }}>Loading...</div>
            ) : projectThemes.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '64px 24px', border: '1.5px dashed var(--border)', borderRadius: '12px' }}>
                <p style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginBottom: '8px' }}>No themes yet.</p>
                <p style={{ fontSize: '13px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginBottom: '24px', lineHeight: '1.6' }}>Add themes inside any project from the Themes Map tab.</p>
                <Link href="/projects" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '9px 20px', borderRadius: '8px', fontFamily: 'var(--font-ui)', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>Go to Projects</Link>
              </div>
            ) : (
              <div>
                <p style={{ fontSize: '14px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginBottom: '24px' }}>
                  {projectThemes.length} theme{projectThemes.length !== 1 ? 's' : ''} across your projects
                </p>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {projectThemes.map(t => {
                    const tc = {
                      theme:  { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
                      motif:  { bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' },
                      symbol: { bg: '#EEF2FF', color: '#4338CA', border: '#C7D2FE' },
                    }[t.type] || { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' }
                    return (
                      <Link key={t.id} href={'/projects/' + t.project_id} style={{ textDecoration: 'none' }}>
                        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 18px', display: 'flex', alignItems: 'flex-start', gap: '12px', transition: 'border-color 0.15s' }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--green)'}
                          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-ui)', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', background: tc.bg, color: tc.color, border: '1px solid ' + tc.border, flexShrink: 0, textTransform: 'capitalize' }}>
                            {t.type || 'theme'}
                          </span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: '600', fontSize: '14px', color: 'var(--text)', marginBottom: t.notes ? '3px' : '0' }}>{t.label}</div>
                            {t.notes && <div style={{ fontSize: '12px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', lineHeight: '1.5' }}>{t.notes}</div>}
                          </div>
                          <span style={{ fontSize: '11px', color: 'var(--text-soft)', fontFamily: 'var(--font-ui)', flexShrink: 0, whiteSpace: 'nowrap' }}>{t.projectTitle}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  )
}

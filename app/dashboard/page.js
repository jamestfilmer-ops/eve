'use client'
import Link from 'next/link'

const mockProjects = [
  {
    id: 1, title: 'The Long Road Home', type: 'Novel',
    framework: "Hero's Journey", acts_complete: 2, acts_total: 3,
    last_session: '2 days ago', status: 'In Progress',
    characters: 4, scenes: 12, plot_holes: 2,
  },
  {
    id: 2, title: 'One Last Sunday', type: 'Short Story',
    framework: 'Story Circle', acts_complete: 1, acts_total: 1,
    last_session: 'Today', status: 'Drafting',
    characters: 2, scenes: 4, plot_holes: 0,
  },
  {
    id: 3, title: 'The Bellhop', type: 'Screenplay',
    framework: 'Save the Cat', acts_complete: 0, acts_total: 3,
    last_session: '1 week ago', status: 'Seed',
    characters: 1, scenes: 1, plot_holes: 0,
  },
]

const statusColor = {
  'Seed':        { bg: '#FFF8E6', color: '#B45309', border: '#FDE68A' },
  'In Progress': { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Drafting':    { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE' },
  'Complete':    { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
}

export default function Dashboard() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>

      <div className="fade-up" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '6px' }}>Your Stories</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: '15px' }}>Pick up where you left off, or start something new.</p>
        </div>
        <Link href="/projects/new" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">+ New Project</button>
        </Link>
      </div>

      {/* Stats */}
      <div className="fade-up fade-up-delay-1" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px',
      }}>
        {[
          { label: 'Projects', value: '3' },
          { label: 'Scenes written', value: '17' },
          { label: 'Characters', value: '7' },
          { label: 'Plot holes open', value: '2' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '30px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', fontWeight: '700', marginBottom: '4px' }}>{s.value}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-soft)', letterSpacing: '0.01em' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {mockProjects.map(p => {
          const sc = statusColor[p.status] || statusColor['Seed']
          const pct = p.acts_total > 0 ? Math.round((p.acts_complete / p.acts_total) * 100) : 0
          return (
            <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '24px 28px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <h2 style={{ fontSize: '19px' }}>{p.title}</h2>
                      <span style={{
                        fontSize: '11px', fontWeight: '600', letterSpacing: '0.04em',
                        padding: '2px 8px', borderRadius: '4px',
                        background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`,
                        fontFamily: 'Source Sans 3, sans-serif', textTransform: 'uppercase',
                      }}>{p.status}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>
                      {p.type}&ensp;&middot;&ensp;{p.framework}&ensp;&middot;&ensp;Last session {p.last_session}
                    </p>
                  </div>
                  <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px', flexShrink: 0 }}
                    onClick={e => e.preventDefault()}>
                    Resume &rarr;
                  </button>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-soft)', marginBottom: '6px' }}>
                    <span>Act {p.acts_complete} of {p.acts_total} complete</span>
                    <span>{pct}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--green-pale)', borderRadius: '2px' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: 'var(--green-light)', borderRadius: '2px', transition: 'width 0.5s ease' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {[
                    { label: `${p.characters} characters` },
                    { label: `${p.scenes} scenes` },
                    { label: `${p.plot_holes} plot holes` },
                  ].map((chip, i) => (
                    <span key={i} style={{
                      fontSize: '12px', color: 'var(--text-mid)',
                      background: 'var(--off-white)', border: '1px solid var(--border)',
                      padding: '3px 10px', borderRadius: '20px',
                      fontFamily: 'Source Sans 3, sans-serif',
                    }}>{chip.label}</span>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )
}
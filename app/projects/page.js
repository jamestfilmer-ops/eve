'use client'
import { useState } from 'react'
import Link from 'next/link'

const allProjects = [
  {
    id: 1, title: 'The Long Road Home', type: 'Novel',
    framework: "Hero's Journey", acts_complete: 2, acts_total: 3,
    last_session: '2 days ago', status: 'In Progress',
    characters: 4, scenes: 12, plot_holes: 2,
    logline: 'A disgraced war correspondent returns home to care for a dying father she has not spoken to in twenty years.',
  },
  {
    id: 2, title: 'One Last Sunday', type: 'Short Story',
    framework: 'Story Circle', acts_complete: 1, acts_total: 1,
    last_session: 'Today', status: 'Drafting',
    characters: 2, scenes: 4, plot_holes: 0,
    logline: 'Two elderly neighbors share what they believe is their last Sunday together.',
  },
  {
    id: 3, title: 'The Bellhop', type: 'Screenplay',
    framework: 'Save the Cat', acts_complete: 0, acts_total: 3,
    last_session: '1 week ago', status: 'Seed',
    characters: 1, scenes: 1, plot_holes: 0,
    logline: '',
  },
]

const statusColor = {
  'Seed':        { bg: '#FFF8E6', color: '#92400E', border: '#FDE68A' },
  'In Progress': { bg: 'var(--green-pale)', color: 'var(--green)', border: 'var(--green-border)' },
  'Drafting':    { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE' },
  'Complete':    { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
}

const FILTERS = ['All', 'Seed', 'In Progress', 'Drafting', 'Complete']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('recent')

  const filtered = allProjects
    .filter(p => filter === 'All' || p.status === filter)
    .sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title)
      if (sort === 'progress') return (b.acts_complete / b.acts_total) - (a.acts_complete / a.acts_total)
      return 0
    })

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Header */}
      <div className="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '6px' }}>Projects</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: '15px' }}>
            {allProjects.length} {allProjects.length === 1 ? 'story' : 'stories'} in progress.
          </p>
        </div>
        <Link href="/projects/new" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">+ New project</button>
        </Link>
      </div>

      {/* Filter + sort bar */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontSize: '13px', fontWeight: filter === f ? '600' : '400',
              padding: '5px 14px', borderRadius: '20px',
              border: filter === f ? '1.5px solid var(--green)' : '1px solid var(--border)',
              background: filter === f ? 'var(--green-pale)' : '#fff',
              color: filter === f ? 'var(--green)' : 'var(--text-soft)',
              cursor: 'pointer', fontFamily: 'Source Sans 3, sans-serif',
              transition: 'all 0.15s ease',
            }}>{f}</button>
          ))}
        </div>
        <select
          className="input"
          style={{ width: 'auto', fontSize: '13px', padding: '6px 12px' }}
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="recent">Sort: Most recent</option>
          <option value="title">Sort: Title A–Z</option>
          <option value="progress">Sort: Most complete</option>
        </select>
      </div>

      {/* Project cards */}
      <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: 'var(--text-mid)', marginBottom: '8px' }}>No projects here yet.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-soft)', marginBottom: '24px' }}>Every finished story started as an empty page.</p>
            <Link href="/projects/new" style={{ textDecoration: 'none' }}>
              <button className="btn-primary">Start your first project</button>
            </Link>
          </div>
        )}

        {filtered.map(p => {
          const sc = statusColor[p.status] || statusColor['Seed']
          const pct = p.acts_total > 0 ? Math.round((p.acts_complete / p.acts_total) * 100) : 0
          return (
            <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '24px 28px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h2 style={{ fontSize: '19px' }}>{p.title}</h2>
                      <span style={{
                        fontSize: '11px', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
                        padding: '2px 8px', borderRadius: '4px',
                        background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`,
                        fontFamily: 'Source Sans 3, sans-serif',
                      }}>{p.status}</span>
                      <span className="badge">{p.type}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: p.logline ? '10px' : '0' }}>
                      {p.framework} &middot; Last session {p.last_session}
                    </p>
                    {p.logline && (
                      <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', fontStyle: 'italic', maxWidth: '600px' }}>
                        {p.logline}
                      </p>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginLeft: '16px', flexShrink: 0 }}>
                    <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}
                      onClick={e => e.preventDefault()}>
                      Open
                    </button>
                  </div>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-soft)', marginBottom: '5px' }}>
                    <span>{p.acts_complete > 0 ? `Act ${p.acts_complete} of ${p.acts_total} complete` : 'Not yet started'}</span>
                    <span>{pct}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--green-pale)', borderRadius: '2px' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: 'var(--green-light)', borderRadius: '2px', transition: 'width 0.5s ease' }} />
                  </div>
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: `${p.characters} character${p.characters !== 1 ? 's' : ''}` },
                    { label: `${p.scenes} scene${p.scenes !== 1 ? 's' : ''}` },
                    p.plot_holes > 0 && { label: `${p.plot_holes} open plot hole${p.plot_holes !== 1 ? 's' : ''}`, warn: true },
                  ].filter(Boolean).map((chip, i) => (
                    <span key={i} style={{
                      fontSize: '12px',
                      color: chip.warn ? '#92400E' : 'var(--text-mid)',
                      background: chip.warn ? '#FFF8E6' : 'var(--off-white)',
                      border: `1px solid ${chip.warn ? '#FDE68A' : 'var(--border)'}`,
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

      {/* Bottom tip */}
      {allProjects.length > 0 && (
        <div className="tip-box fade-up" style={{ marginTop: '32px' }}>
          <strong>Craft note:</strong> A story in progress is not a story abandoned. The only unfinished story is the one you never started. Keep going.
        </div>
      )}

    </div>
  )
}
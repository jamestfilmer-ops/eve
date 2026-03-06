'use client'
import { useState } from 'react'
import Link from 'next/link'

const mockUser = {
  name: 'James Filmer',
  username: 'jamesfilmer',
  bio: 'Writing stories between client meetings. Somewhere between a first draft and a real writer.',
  joined: 'March 2026',
  projects: 3,
  ideas: 7,
  scenes: 17,
  characters: 7,
}

export default function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ name: mockUser.name, bio: mockUser.bio })

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Profile header */}
      <div className="fade-up card" style={{ padding: '32px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'var(--green)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', color: '#fff',
            }}>
              {mockUser.name.charAt(0)}
            </div>
            <div>
              {editing ? (
                <input
                  className="input"
                  style={{ fontSize: '20px', fontFamily: 'Playfair Display, serif', marginBottom: '6px', padding: '6px 10px' }}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              ) : (
                <h1 style={{ fontSize: '22px', marginBottom: '4px' }}>{form.name}</h1>
              )}
              <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>@{mockUser.username} &middot; Member since {mockUser.joined}</p>
            </div>
          </div>
          <button className={editing ? 'btn-primary' : 'btn-ghost'} style={{ fontSize: '13px', padding: '7px 16px' }}
            onClick={() => setEditing(!editing)}>
            {editing ? 'Save profile' : 'Edit profile'}
          </button>
        </div>

        {editing ? (
          <textarea
            className="input"
            style={{ minHeight: '80px' }}
            value={form.bio}
            onChange={e => setForm({ ...form, bio: e.target.value })}
            placeholder="A sentence or two about you and your writing..."
          />
        ) : (
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
            {form.bio || <span style={{ color: 'var(--text-soft)' }}>No bio yet. Click Edit profile to add one.</span>}
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="fade-up fade-up-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
        {[
          { label: 'Projects', value: mockUser.projects, href: '/dashboard' },
          { label: 'Ideas', value: mockUser.ideas, href: '/ideas' },
          { label: 'Scenes', value: mockUser.scenes, href: null },
          { label: 'Characters', value: mockUser.characters, href: null },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '18px 20px', textAlign: 'center' }}>
            <p style={{ fontSize: '26px', fontFamily: 'Playfair Display, serif', color: 'var(--green)', fontWeight: '700', marginBottom: '4px' }}>{s.value}</p>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="fade-up fade-up-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quick access</h3>
        {[
          { label: 'Idea Bank', description: 'Your captured fragments, one-liners, and half-formed scenes.', href: '/ideas' },
          { label: 'Active Projects', description: 'Pick up where you left off.', href: '/dashboard' },
          { label: 'Craft Library', description: 'Short lessons on structure, character, dialogue, and theme.', href: '/learn' },
          { label: 'Session Mode', description: 'Work through your story beat by beat.', href: '/session' },
        ].map((item, i) => (
          <Link key={i} href={item.href} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '2px' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-soft)' }}>{item.description}</p>
              </div>
              <span style={{ color: 'var(--text-soft)', fontSize: '16px' }}>&rsaquo;</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
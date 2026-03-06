'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mainLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/projects',  label: 'Projects'  },
  { href: '/ideas',     label: 'Ideas'     },
  { href: '/session',   label: 'Session'   },
]

const learnLinks = [
  { href: '/learn',     label: 'Craft Library' },
  { href: '/glossary',  label: 'Glossary'      },
  { href: '/resources', label: 'Reading List'  },
]

export default function Nav() {
  const pathname = usePathname()
  const [learnOpen, setLearnOpen] = useState(false)

  const learnActive = learnLinks.some(l => pathname.startsWith(l.href))

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px',
      background: 'rgba(250, 252, 247, 0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '7px',
            background: 'var(--green)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontSize: '13px', fontWeight: '700', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>E</span>
          </div>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '600', color: 'var(--green)', letterSpacing: '-0.01em' }}>Eve</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
          {mainLinks.map(l => {
            const active = pathname.startsWith(l.href)
            return (
              <Link key={l.href} href={l.href} style={{
                textDecoration: 'none',
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '14px',
                fontWeight: active ? '600' : '400',
                color: active ? 'var(--green)' : 'var(--text-mid)',
                padding: '6px 12px',
                borderRadius: '7px',
                background: active ? 'var(--green-pale)' : 'transparent',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--off-white)' }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
              >{l.label}</Link>
            )
          })}

          {/* Learn dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '14px',
              fontWeight: learnActive ? '600' : '400',
              color: learnActive ? 'var(--green)' : 'var(--text-mid)',
              padding: '6px 12px',
              borderRadius: '7px',
              background: learnActive ? 'var(--green-pale)' : 'transparent',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              Learn
              <span style={{ fontSize: '9px', opacity: 0.6 }}>&#9660;</span>
            </button>

            {learnOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '0',
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '6px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                minWidth: '180px', zIndex: 200,
                marginTop: '4px',
              }}>
                {learnLinks.map(l => (
                  <Link key={l.href} href={l.href} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{
                      padding: '9px 12px', borderRadius: '7px',
                      fontSize: '14px', fontFamily: 'Source Sans 3, sans-serif',
                      color: pathname.startsWith(l.href) ? 'var(--green)' : 'var(--text-dark)',
                      fontWeight: pathname.startsWith(l.href) ? '600' : '400',
                      background: pathname.startsWith(l.href) ? 'var(--green-pale)' : 'transparent',
                      transition: 'background 0.1s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--off-white)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = pathname.startsWith(l.href) ? 'var(--green-pale)' : 'transparent' }}
                    >{l.label}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/profile" style={{ textDecoration: 'none' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'var(--green)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: '700', color: '#fff',
              cursor: 'pointer',
              border: pathname.startsWith('/profile') ? '2px solid var(--green-light)' : '2px solid transparent',
              transition: 'border-color 0.15s ease',
            }}>J</div>
          </Link>
          <Link href="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn-ghost" style={{ fontSize: '13px', padding: '7px 14px' }}>Sign in</button>
          </Link>
          <Link href="/auth?signup=true" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ fontSize: '13px', padding: '7px 14px' }}>Get started</button>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
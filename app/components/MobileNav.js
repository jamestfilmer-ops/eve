'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'


const learnLinks = [
  { href: '/learn', label: 'All Lessons' },
  { href: '/learn/tracks', label: 'Learning Paths' },
  { href: '/learn/what-a-scene-does', label: 'What a scene does' },
  { href: '/learn/want-vs-need', label: 'Want vs. Need' },
  { href: '/learn/midpoint', label: 'The midpoint' },
  { href: '/learn/dialogue-subtext', label: 'Dialogue & subtext' },
  { href: '/learn/theme', label: 'Theme' },
]

export default function Nav() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [learnOpen, setLearnOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setLearnOpen(false)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(253,252,249,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled
          ? '0 1px 4px rgba(26,23,20,0.07), 0 4px 12px rgba(26,23,20,0.05)'
          : '0 1px 2px rgba(26,23,20,0.04)',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: '700',
              color: 'var(--green)',
              letterSpacing: '-0.01em',
            }}>Eve</span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, paddingLeft: '24px' }} className="nav-desktop">
            <NavLink href="/dashboard" active={isActive('/dashboard')}>Projects</NavLink>
            <NavLink href="/ideas" active={isActive('/ideas')}>Ideas</NavLink>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '6px 10px', borderRadius: '6px',
                  fontFamily: 'var(--font-ui)', fontSize: '14px',
                  fontWeight: isActive('/learn') ? '600' : '400',
                  color: isActive('/learn') ? 'var(--green)' : 'var(--text-mid)',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-pale)'; e.currentTarget.style.color = 'var(--green)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = isActive('/learn') ? 'var(--green)' : 'var(--text-mid)' }}
              >
                Craft
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {learnOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                  background: 'rgba(253,252,249,0.97)',
                  backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid var(--border)', borderRadius: '10px',
                  boxShadow: '0 8px 32px rgba(26,23,20,0.12)',
                  padding: '6px', minWidth: '220px', zIndex: 200,
                }}>
                  {learnLinks.map(l => (
                    <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          padding: '8px 12px', borderRadius: '6px', fontSize: '13px',
                          color: pathname === l.href ? 'var(--green)' : 'var(--text-mid)',
                          fontWeight: pathname === l.href ? '500' : '400',
                          background: pathname === l.href ? 'var(--green-pale)' : 'transparent',
                          transition: 'background 0.15s, color 0.15s', cursor: 'pointer',
                        }}
                        onMouseEnter={e => { if (pathname !== l.href) { e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.color = 'var(--text-dark)' }}}
                        onMouseLeave={e => { if (pathname !== l.href) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-mid)' }}}
                      >
                        {l.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/profile" active={isActive('/profile')}>Profile</NavLink>
          </div>

          {/* Desktop right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }} className="nav-desktop">
            {user ? (
              <>
                <span style={{ fontSize: '13px', color: 'var(--text-soft)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</span>
                <button onClick={handleSignOut} className="btn-ghost" style={{ fontSize: '13px', padding: '7px 14px' }}>Sign out</button>
              </>
            ) : (
              <>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-ghost" style={{ fontSize: '13px', padding: '7px 14px' }}>Sign in</button>
                </Link>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ fontSize: '13px', padding: '7px 14px' }}>Get started</button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-mobile">
            {user ? (
              <button onClick={handleSignOut} className="btn-ghost" style={{ fontSize: '13px', padding: '7px 12px' }}>Sign out</button>
            ) : (
              <Link href="/auth" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ fontSize: '13px', padding: '7px 14px' }}>Get started</button>
              </Link>
            )}

            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: menuOpen ? 'var(--green-pale)' : 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                width: '40px', height: '40px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '5px', cursor: 'pointer', padding: '0',
                transition: 'background 0.2s',
              }}
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--green)' : 'var(--text-mid)', borderRadius: '1px', transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--green)' : 'var(--text-mid)', borderRadius: '1px', transition: 'opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--green)' : 'var(--text-mid)', borderRadius: '1px', transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            position: 'fixed', top: '61px', left: 0, right: 0, bottom: 0,
            background: 'var(--off-white)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99, overflowY: 'auto',
            padding: '16px 16px 48px',
            display: 'flex', flexDirection: 'column', gap: '0',
          }}
        >
          {/* Main nav */}
          <div style={{ marginBottom: '8px' }}>
            <p style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px', paddingLeft: '4px' }}>
              Workspace
            </p>
            <MobileNavLink href="/dashboard" active={isActive('/dashboard')}>Projects</MobileNavLink>
            <MobileNavLink href="/ideas" active={isActive('/ideas')}>Ideas</MobileNavLink>
            <MobileNavLink href="/profile" active={isActive('/profile')}>Profile</MobileNavLink>
          </div>

          {/* Craft Library */}
          <div style={{ marginTop: '4px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px', paddingLeft: '4px' }}>
              Craft Library
            </p>
            {learnLinks.map(l => (
              <MobileNavLink key={l.href} href={l.href} active={pathname === l.href}>{l.label}</MobileNavLink>
            ))}
          </div>

          {/* Auth footer */}
          <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
            {user ? (
              <div>
                <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '12px', paddingLeft: '4px' }}>{user.email}</p>
                <button onClick={handleSignOut} className="btn-ghost" style={{ width: '100%', minHeight: '48px' }}>Sign out</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ width: '100%', padding: '14px 20px', fontSize: '15px' }}>Get started — free</button>
                </Link>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-ghost" style={{ width: '100%', padding: '14px 20px', fontSize: '15px' }}>Sign in</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .nav-mobile { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
        @media (max-width: 639px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <span
        style={{
          display: 'inline-block', padding: '6px 10px', borderRadius: '6px',
          fontSize: '14px', fontWeight: active ? '600' : '400',
          color: active ? 'var(--green)' : 'var(--text-mid)',
          background: active ? 'var(--green-pale)' : 'transparent',
          transition: 'background 0.15s, color 0.15s', cursor: 'pointer',
        }}
        onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'var(--green-pale)'; e.currentTarget.style.color = 'var(--green)' }}}
        onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-mid)' }}}
      >
        {children}
      </span>
    </Link>
  )
}

function MobileNavLink({ href, active, children }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '14px 16px', borderRadius: '12px',
        fontSize: '16px', fontWeight: active ? '600' : '400',
        color: active ? 'var(--green)' : 'var(--text-dark)',
        background: active ? 'var(--green-pale)' : '#fff',
        border: `1px solid ${active ? 'var(--green-border)' : 'var(--border)'}`,
        marginBottom: '6px',
        boxShadow: active
          ? 'var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.85)'
          : 'var(--shadow-xs)',
        transition: 'background 0.15s, border-color 0.15s',
      }}>
        <span style={{
          display: 'block', width: '3px', height: '18px',
          background: active ? 'var(--green)' : 'var(--border)',
          borderRadius: '2px', flexShrink: 0,
          transition: 'background 0.15s',
        }} />
        <span style={{ flex: 1 }}>{children}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: active ? 0.55 : 0.25, flexShrink: 0 }}>
          <path d="M5.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}
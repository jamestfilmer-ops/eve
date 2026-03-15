'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const learnGroups = [
  {
    heading: 'Learn',
    links: [
      { href: '/for-beginners',       label: 'Start Here' },
      { href: '/learn',               label: 'Craft Library' },
      { href: '/learn/tracks',        label: 'Learning Paths' },
      { href: '/frameworks',          label: 'Frameworks' },
      { href: '/glossary',            label: 'Glossary' },
    ],
  },
  {
    heading: 'Guides',
    links: [
      { href: '/road-to-hollywood',   label: 'Road to Hollywood' },
      { href: '/road-to-publishing',  label: 'Road to Publishing' },
      { href: '/road-to-short-story',   label: 'Road to Short Story' },
      { href: '/road-to-short-story',   label: 'Road to Short Story' },
      { href: '/scripts',             label: 'Famous Scripts' },
    ],
  },
]
// flat list for mobile
const learnLinks = learnGroups.flatMap(g => g.links)

export default function Nav() {
  const pathname  = usePathname()
  const router    = useRouter()
  const [user, setUser]         = useState(null)
  const [learnOpen, setLearnOpen] = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const learnRef  = useRef(null)
  const closeTimer = useRef(null)

  /* ── auth ── */
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── close on route change ── */
  useEffect(() => {
    setLearnOpen(false)
    setMenuOpen(false)
  }, [pathname])

  /* ── body scroll lock for mobile menu ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── dropdown hover with delay so the gap doesn't close it ── */
  function openLearn()  {
    clearTimeout(closeTimer.current)
    setLearnOpen(true)
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setLearnOpen(false), 120)
  }
  function cancelClose() {
    clearTimeout(closeTimer.current)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? 'rgba(253,252,249,0.96)' : 'rgba(253,252,249,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled
          ? '0 1px 4px rgba(26,20,15,0.07), 0 6px 20px rgba(26,20,15,0.06)'
          : 'none',
        transition: 'box-shadow 0.35s ease, background 0.35s ease',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          height: '62px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '23px', fontWeight: '800',
              color: 'var(--green)', letterSpacing: '-0.02em',
            }}>Eve</span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: 1, paddingLeft: '28px' }}>
            <NavLink href="/dashboard" active={isActive('/dashboard')}>Projects</NavLink>
            <NavLink href="/ideas"     active={isActive('/ideas')}>Ideas</NavLink>

            {/* Learn dropdown  -- hover with bridge fix */}
            <div
              ref={learnRef}
              style={{ position: 'relative' }}
              onMouseEnter={openLearn}
              onMouseLeave={scheduleClose}
            >
              <button
                style={{
                  background: learnOpen || isActive('/learn') || isActive('/frameworks') ? 'var(--green-pale)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '7px 11px', borderRadius: '8px',
                  fontFamily: 'var(--font-ui)', fontSize: '14px',
                  fontWeight: isActive('/learn') || isActive('/frameworks') ? '600' : '400',
                  color: (isActive('/learn') || isActive('/frameworks')) || learnOpen ? 'var(--green)' : 'var(--text-mid)',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  transition: 'color 0.15s, background 0.15s',
                }}
              >
                Learn
                <svg
                  width="11" height="11" viewBox="0 0 11 11" fill="none"
                  style={{ transition: 'transform 0.2s ease', transform: learnOpen ? 'rotate(180deg)' : 'none' }}
                >
                  <path d="M2.5 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Invisible hover bridge  -- fills the gap so mouse can reach dropdown */}
              {learnOpen && (
                <div
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  style={{
                    position: 'absolute', top: '100%', left: 0,
                    width: '240px', height: '12px',
                    background: 'transparent',
                  }}
                />
              )}

              {/* Dropdown panel */}
              {learnOpen && (
                <div
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  style={{
                    position: 'absolute', top: 'calc(100% + 10px)', left: 0,
                    background: 'rgba(253,252,249,0.98)',
                    backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(26,20,15,0.13), 0 2px 8px rgba(26,20,15,0.07)',
                    padding: '8px', minWidth: '210px', zIndex: 200,
                    animation: 'dropIn 0.18s var(--ease-out) both',
                  }}
                >
                  {learnGroups.map((group, gi) => (
                    <div key={gi} style={{ marginBottom: gi < learnGroups.length - 1 ? '6px' : '0' }}>
                      <div style={{ padding: '7px 13px 4px', fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', fontWeight: '600' }}>
                        {group.heading}
                      </div>
                      {group.links.map(l => (
                        <Link key={l.href} href={l.href} style={{ textDecoration: 'none', display: 'block' }}>
                          <div style={{
                            padding: '8px 13px', borderRadius: '7px', fontSize: '13.5px',
                            color: pathname === l.href ? 'var(--green)' : 'var(--text-mid)',
                            fontWeight: pathname === l.href ? '500' : '400',
                            background: pathname === l.href ? 'var(--green-pale)' : 'transparent',
                            transition: 'background 0.12s, color 0.12s',
                            cursor: 'pointer',
                          }}
                            onMouseEnter={e => {
                              if (pathname !== l.href) {
                                e.currentTarget.style.background = 'var(--off-white)'
                                e.currentTarget.style.color = 'var(--text-dark)'
                              }
                            }}
                            onMouseLeave={e => {
                              if (pathname !== l.href) {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.color = 'var(--text-mid)'
                              }
                            }}
                          >
                            {l.label}
                          </div>
                        </Link>
                      ))}
                      {gi < learnGroups.length - 1 && (
                        <div style={{ height: '1px', background: 'var(--border)', margin: '6px 6px 0' }} />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/profile" active={isActive('/profile')}>Profile</NavLink>
            <NavLink href="/pricing" active={isActive('/pricing')}>Pricing</NavLink>
          </div>

          {/* ── Desktop right ── */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {user ? (
              <>
                <span style={{ fontSize: '13px', color: 'var(--text-soft)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user.email}
                </span>
                <button onClick={handleSignOut} className="btn-ghost" style={{ fontSize: '13px', padding: '7px 15px' }}>Sign out</button>
              </>
            ) : (
              <>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-ghost" style={{ fontSize: '13px', padding: '7px 15px' }}>Sign in</button>
                </Link>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ fontSize: '13px', padding: '7px 15px' }}>Get started</button>
                </Link>
              </>
            )}
          </div>

          {/* ── Mobile right ── */}
          <div className="nav-mobile" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {user ? (
              <button onClick={handleSignOut} className="btn-ghost" style={{ fontSize: '13px', padding: '7px 12px' }}>Sign out</button>
            ) : (
              <Link href="/auth" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ fontSize: '13px', padding: '7px 14px' }}>Get started</button>
              </Link>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: menuOpen ? 'var(--green-pale)' : 'transparent',
                border: '1px solid var(--border)', borderRadius: '9px',
                width: '42px', height: '42px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '5px', cursor: 'pointer', padding: 0,
                transition: 'background 0.2s',
              }}
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--green)' : 'var(--text-mid)', borderRadius: '1px', transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--green)' : 'var(--text-mid)', borderRadius: '1px', transition: 'opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--green)' : 'var(--text-mid)', borderRadius: '1px', transition: 'transform 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu panel ── */}
      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            position: 'fixed', top: '63px', left: 0, right: 0, bottom: 0,
            background: 'rgba(253,252,249,0.99)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99, overflowY: 'auto',
            padding: '20px 20px 48px',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}
        >
          <MobileNavLink href="/dashboard" active={isActive('/dashboard')}>Projects</MobileNavLink>
          <MobileNavLink href="/ideas"     active={isActive('/ideas')}>Ideas</MobileNavLink>
          <MobileNavLink href="/profile"   active={isActive('/profile')}>Profile</MobileNavLink>

          <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px', paddingLeft: '14px' }}>
              Learn
            </p>
            {learnLinks.map(l => (
              <MobileNavLink key={l.href} href={l.href} active={pathname === l.href}>{l.label}</MobileNavLink>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
            {user ? (
              <div>
                <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '12px', paddingLeft: '4px' }}>{user.email}</p>
                <button onClick={handleSignOut} className="btn-ghost" style={{ width: '100%' }}>Sign out</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ width: '100%', padding: '13px 20px', fontSize: '15px' }}>Get started  -- free</button>
                </Link>
                <Link href="/auth" style={{ textDecoration: 'none' }}>
                  <button className="btn-ghost" style={{ width: '100%', padding: '13px 20px', fontSize: '15px' }}>Sign in</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (min-width: 640px) {
          .nav-mobile  { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
        @media (max-width: 639px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
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
          display: 'inline-block', padding: '7px 11px', borderRadius: '8px',
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
        display: 'block', padding: '13px 16px', borderRadius: '10px',
        fontSize: '16px', fontWeight: active ? '600' : '400',
        color: active ? 'var(--green)' : 'var(--text-dark)',
        background: active ? 'var(--green-pale)' : 'transparent',
        border: active ? '1px solid var(--green-border)' : '1px solid transparent',
        marginBottom: '2px',
      }}>
        {children}
      </div>
    </Link>
  )
}
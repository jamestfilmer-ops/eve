'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const learnLinks = [
  { href: '/learn',                       label: 'All Lessons' },
  { href: '/learn/story-structure',       label: 'Story Structure 101' },
  { href: '/learn/character',             label: 'Building Characters That Last' },
  { href: '/learn/scene-writing',         label: 'How to Write a Scene' },
  { href: '/learn/dialogue',              label: 'Writing Dialogue That Works' },
  { href: '/learn/revision',              label: 'The Art of Revision' },
]

export default function Nav() {
  const pathname = usePathname()
  const router   = useRouter()
  const [user,        setUser]        = useState(null)
  const [learnOpen,   setLearnOpen]   = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [scrolled,    setScrolled]    = useState(false)

  // Auth listener
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close learn dropdown on route change
  useEffect(() => { setLearnOpen(false); setMenuOpen(false) }, [pathname])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(253,252,249,0.93)',
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
        padding: '0 24px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: '700',
            color: 'var(--green)',
            letterSpacing: '-0.01em',
          }}>
            Eve
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          flex: 1,
        }}>
          <NavLink href="/dashboard" active={isActive('/dashboard')}>Projects</NavLink>
          <NavLink href="/ideas"     active={isActive('/ideas')}>Ideas</NavLink>

          {/* Learn dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 10px',
              borderRadius: '6px',
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: isActive('/learn') ? '600' : '400',
              color: isActive('/learn') ? 'var(--green)' : 'var(--text-mid)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
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
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                background: 'rgba(253,252,249,0.97)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                boxShadow: '0 8px 32px rgba(26,23,20,0.12)',
                padding: '6px',
                minWidth: '220px',
                zIndex: 200,
              }}>
                {learnLinks.map(l => (
                  <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                    <div style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      color: pathname === l.href ? 'var(--green)' : 'var(--text-mid)',
                      fontWeight: pathname === l.href ? '500' : '400',
                      background: pathname === l.href ? 'var(--green-pale)' : 'transparent',
                      transition: 'background 0.15s, color 0.15s',
                      cursor: 'pointer',
                    }}
                      onMouseEnter={e => { if (pathname !== l.href) { e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.color = 'var(--text-dark)' } }}
                      onMouseLeave={e => { if (pathname !== l.href) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-mid)' } }}
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

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {user ? (
            <>
              <span style={{
                fontSize: '13px',
                color: 'var(--text-soft)',
                maxWidth: '160px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="btn-ghost"
                style={{ fontSize: '13px', padding: '7px 14px' }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth" style={{ textDecoration: 'none' }}>
                <button className="btn-ghost" style={{ fontSize: '13px', padding: '7px 14px' }}>
                  Sign in
                </button>
              </Link>
              <Link href="/auth" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ fontSize: '13px', padding: '7px 14px' }}>
                  Get started
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

// Reusable nav link
function NavLink({ href, active, children }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <span style={{
        display: 'inline-block',
        padding: '6px 10px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: active ? '600' : '400',
        color: active ? 'var(--green)' : 'var(--text-mid)',
        background: active ? 'var(--green-pale)' : 'transparent',
        transition: 'background 0.15s, color 0.15s',
        cursor: 'pointer',
      }}
        onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'var(--green-pale)'; e.currentTarget.style.color = 'var(--green)' } }}
        onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-mid)' } }}
      >
        {children}
      </span>
    </Link>
  )
}
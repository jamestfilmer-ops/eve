'use client'
import React, { useState } from 'react'
import Link from 'next/link'
// Nav is rendered by root layout — do not import here

const COMPARISON = [
  { feature: 'Craft lessons',         free: '10 Start Here lessons',  pro: 'All lessons (100+)'       },
  { feature: 'Story frameworks',      free: "Hero's Journey + Save the Cat", pro: 'All 7 frameworks'  },
  { feature: 'Active projects',       free: '1',                       pro: 'Unlimited'                },
  { feature: 'Characters per project',free: 'Up to 4',                 pro: 'Unlimited'                },
  { feature: 'Scenes per project',    free: 'Up to 8',                 pro: 'Unlimited'                },
  { feature: 'Saved ideas',           free: 'Up to 5',                 pro: 'Unlimited'                },
  { feature: 'Overview tab',          free: true,                      pro: true                       },
  { feature: 'Characters tab',        free: true,                      pro: true                       },
  { feature: 'Scenes tab',            free: true,                      pro: true                       },
  { feature: 'Plot Holes tab',        free: false,                     pro: true                       },
  { feature: 'Timeline view',         free: false,                     pro: true                       },
  { feature: 'Themes Map canvas',     free: false,                     pro: true                       },
  { feature: 'Story Map canvas',      free: false,                     pro: true                       },
  { feature: 'No AI. Ever.',          free: true,                      pro: true                       },
  { feature: 'Your data stays yours', free: true,                      pro: true                       },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)
  const monthlyPrice = 4.99
  const annualMonthly = 2.50
  const annualTotal = 30

  return (
    <>
      <div style={{ background: 'var(--off-white)', minHeight: '100vh', paddingBottom: '80px' }}>

        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.15', marginBottom: '16px' }}>
            Free to start.<br />Pro when you are ready.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', color: 'var(--text-mid)', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 36px' }}>
            Ten lessons and a full project workspace are free, forever. Pro unlocks everything.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '40px', padding: '6px 8px' }}>
            <button onClick={() => setAnnual(false)} style={{ padding: '7px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '13px', background: !annual ? 'var(--green)' : 'transparent', color: !annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s' }}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)} style={{ padding: '7px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '13px', background: annual ? 'var(--green)' : 'transparent', color: annual ? '#fff' : 'var(--text-mid)', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Annual
              <span style={{ fontSize: '11px', fontWeight: '700', background: annual ? 'rgba(255,255,255,0.25)' : 'var(--green-pale)', color: annual ? '#fff' : 'var(--green)', padding: '2px 8px', borderRadius: '10px' }}>Save 50%</span>
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

          <div style={{ background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '8px' }}>Free</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: 1 }}>$0</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-soft)', paddingBottom: '6px' }}>forever</span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-mid)', marginBottom: '28px', lineHeight: '1.5' }}>Enough to know if Eve is right for you.</p>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none', display: 'block', marginBottom: '28px' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'transparent', fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)', cursor: 'pointer' }}>Start free</button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['10 Start Here lessons', "Hero's Journey + Save the Cat", '1 story project', 'Characters and Scenes tabs', 'Up to 8 scenes, 4 characters', 'No credit card required'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="8" cy="8" r="7" fill="var(--green-pale)" stroke="var(--green-border)" strokeWidth="1"/><path d="M5 8l2 2 4-4" stroke="var(--green)" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--green)', border: '1.5px solid var(--green)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '20px' }}>Most popular</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '8px' }}>Pro</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: 1 }}>${annual ? annualMonthly : monthlyPrice}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.65)', paddingBottom: '6px' }}>/ month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>{annual ? `Billed $${annualTotal}/year` : 'Billed monthly'}</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '28px', lineHeight: '1.5' }}>Everything unlocked. No limits, no friction.</p>
            <Link href="/auth?signup=true&plan=pro" style={{ textDecoration: 'none', display: 'block', marginBottom: '28px' }}>
              <button style={{ width: '100%', padding: '13px', borderRadius: '8px', border: 'none', background: '#fff', fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '14px', color: 'var(--green)', cursor: 'pointer' }}>Get Pro</button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Every lesson — 100+ and growing', 'All 7 story frameworks', 'Unlimited projects', 'Plot Holes, Timeline, Themes Map', 'Story Map canvas', 'Unlimited scenes and characters', 'Cancel anytime'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.5' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '820px', margin: '64px auto 0', padding: '0 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '24px', textAlign: 'center' }}>Full comparison</h2>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', borderBottom: '2px solid var(--border)' }}>
              <div style={{ padding: '14px 20px' }} />
              <div style={{ padding: '14px 20px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>Free</div>
              <div style={{ padding: '14px 20px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700' }}>Pro</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', borderBottom: i < COMPARISON.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)' }}>
                <div style={{ padding: '13px 20px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-dark)' }}>{row.feature}</div>
                <div style={{ padding: '13px 20px', textAlign: 'center' }}>
                  {row.free === true ? <svg width="16" height="16" viewBox="0 0 16 16" style={{ margin: '0 auto', display: 'block' }}><path d="M3 8l3.5 3.5L13 5" stroke="var(--green)" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  : row.free === false ? <svg width="16" height="16" viewBox="0 0 16 16" style={{ margin: '0 auto', display: 'block', opacity: 0.2 }}><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="var(--text-dark)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  : <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-mid)' }}>{row.free}</span>}
                </div>
                <div style={{ padding: '13px 20px', textAlign: 'center' }}>
                  {row.pro === true ? <svg width="16" height="16" viewBox="0 0 16 16" style={{ margin: '0 auto', display: 'block' }}><path d="M3 8l3.5 3.5L13 5" stroke="var(--green)" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  : row.pro === false ? <svg width="16" height="16" viewBox="0 0 16 16" style={{ margin: '0 auto', display: 'block', opacity: 0.2 }}><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="var(--text-dark)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  : <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--green)', fontWeight: '600' }}>{row.pro}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '820px', margin: '48px auto 0', padding: '0 24px' }}>
          <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '28px 32px', display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>No AI. On either plan.</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>
                Eve does not write for you, suggest dialogue, or complete your sentences. Free or Pro, the story is yours. Your work is never used to train anything.
              </p>
            </div>
            <Link href="/auth?signup=true" style={{ textDecoration: 'none', alignSelf: 'center' }}>
              <button style={{ background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '14px', padding: '12px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>Start free</button>
            </Link>
          </div>
        </div>

        <div style={{ maxWidth: '620px', margin: '64px auto 0', padding: '0 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '28px', textAlign: 'center' }}>Questions</h2>
          {[
            { q: 'Do I need a credit card to start?', a: 'No. Free accounts require nothing but an email address.' },
            { q: 'Can I cancel Pro anytime?', a: 'Yes. Cancel from your profile page and you keep Pro access until the end of your billing period.' },
            { q: 'What happens to my projects if I cancel?', a: 'Your projects stay in your account. On the free plan you can still view them but will need to upgrade to access the Pro workspace tabs.' },
            { q: 'Will prices go up?', a: 'Possibly. If they do, existing subscribers keep their current rate.' },
            { q: 'Is there a student discount?', a: 'Not yet — but at $5 per month on annual billing, it is already priced with students in mind.' },
          ].map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px' }}>{item.q}</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.7', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

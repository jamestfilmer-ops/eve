import Link from 'next/link'

export const metadata = { title: 'Coming Soon — Eve Craft Library' }

export default function LessonPage() {
  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/learn" style={{ textDecoration: 'none', fontSize: '13px', color: 'var(--text-soft)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
          ← Craft Library
        </Link>
        <div className="badge" style={{ marginBottom: '16px' }}>Coming Soon</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--green)', marginBottom: '12px' }}>
          This lesson is being written.
        </h1>
        <div className="tip-box" style={{ margin: '40px 0' }}>
          <strong>Check back soon.</strong> This lesson will appear in the Craft Library when ready.
        </div>
        <Link href="/learn" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">← Back to Craft Library</button>
        </Link>
      </div>
    </div>
  )
}
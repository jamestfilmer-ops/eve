import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--white)', padding: '24px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: '480px' }}>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontSize: '100px', fontWeight: '700',
          color: 'var(--green-pale)', lineHeight: '1', marginBottom: '8px',
          letterSpacing: '-4px',
        }}>404</p>
        <h1 style={{ fontSize: '26px', marginBottom: '12px', color: 'var(--green)' }}>
          This page doesn't exist yet.
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-soft)', lineHeight: '1.7', marginBottom: '32px' }}>
          Like a scene with no characters — there's nothing here to follow. Head back and find your story.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Go to Dashboard</button>
          </Link>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button className="btn-ghost">Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
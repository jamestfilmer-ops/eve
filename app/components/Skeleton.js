/**
 * Skeleton — reusable loading placeholder shapes
 *
 * Usage:
 *   <Skeleton />                          // single line
 *   <Skeleton width="60%" />              // shorter line
 *   <Skeleton height={80} />              // taller block
 *   <Skeleton variant="avatar" />         // circle
 *   <Skeleton variant="card" />           // full card placeholder
 *   <Skeleton variant="text" lines={3} /> // paragraph block
 *   <Skeleton variant="lesson" />         // lesson card placeholder
 *   <Skeleton variant="stat" />           // stat box placeholder
 */

const BASE = {
  display: 'block',
  background: 'linear-gradient(90deg, #F0EDE8 25%, #E8F0E0 50%, #F0EDE8 75%)',
  backgroundSize: '200% 100%',
  animation: 'skeletonShimmer 1.6s infinite ease-in-out',
  borderRadius: '8px',
  flexShrink: 0,
}

export default function Skeleton({
  variant = 'line',
  width,
  height,
  lines = 3,
  style = {},
}) {
  // Inject keyframes once
  if (typeof document !== 'undefined' && !document.getElementById('sk-style')) {
    const s = document.createElement('style')
    s.id = 'sk-style'
    s.textContent = `
      @keyframes skeletonShimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `
    document.head.appendChild(s)
  }

  /* ── Line (default) ── */
  if (variant === 'line') {
    return (
      <span style={{
        ...BASE,
        display: 'block',
        height: height || 16,
        width: width || '100%',
        ...style,
      }} />
    )
  }

  /* ── Avatar / circle ── */
  if (variant === 'avatar') {
    const size = height || width || 48
    return (
      <span style={{
        ...BASE,
        display: 'block',
        width: size,
        height: size,
        borderRadius: '50%',
        ...style,
      }} />
    )
  }

  /* ── Text paragraph (multiple lines) ── */
  if (variant === 'text') {
    const widths = ['100%', '88%', '74%', '92%', '65%']
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', ...style }}>
        {Array.from({ length: lines }).map((_, i) => (
          <span key={i} style={{
            ...BASE,
            display: 'block',
            height: 15,
            width: widths[i % widths.length],
            animationDelay: `${i * 0.07}s`,
          }} />
        ))}
      </div>
    )
  }

  /* ── Stat box ── */
  if (variant === 'stat') {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #E0D8CE',
        borderRadius: '14px',
        padding: '18px 20px',
        textAlign: 'center',
        ...style,
      }}>
        <span style={{ ...BASE, display: 'block', height: 32, width: '48px', margin: '0 auto 8px' }} />
        <span style={{ ...BASE, display: 'block', height: 12, width: '60px', margin: '0 auto' }} />
      </div>
    )
  }

  /* ── Lesson card ── */
  if (variant === 'lesson') {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #E0D8CE',
        borderRadius: '14px',
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        ...style,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
          <span style={{ ...BASE, height: 18, width: 72 }} />
          <span style={{ ...BASE, height: 14, width: 36 }} />
        </div>
        <span style={{ ...BASE, height: 18, width: '90%' }} />
        <span style={{ ...BASE, height: 14, width: '100%' }} />
        <span style={{ ...BASE, height: 14, width: '75%' }} />
        <span style={{ ...BASE, height: 12, width: '30%', marginTop: '6px' }} />
      </div>
    )
  }

  /* ── Generic card ── */
  if (variant === 'card') {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #E0D8CE',
        borderRadius: '14px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        ...style,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ ...BASE, width: 40, height: 40, borderRadius: '10px', flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ ...BASE, height: 16, width: '70%' }} />
            <span style={{ ...BASE, height: 12, width: '45%' }} />
          </div>
        </div>
        <span style={{ ...BASE, height: 13, width: '100%' }} />
        <span style={{ ...BASE, height: 13, width: '82%' }} />
        <span style={{ ...BASE, height: 6, width: '100%', borderRadius: '3px', marginTop: '4px' }} />
      </div>
    )
  }

  /* ── Idea row ── */
  if (variant === 'idea') {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #E0D8CE',
        borderRadius: '12px',
        padding: '18px 20px',
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        ...style,
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
            <span style={{ ...BASE, height: 18, width: 64, borderRadius: '4px' }} />
            <span style={{ ...BASE, height: 14, width: 40, marginLeft: 'auto' }} />
          </div>
          <span style={{ ...BASE, height: 16, width: '100%' }} />
          <span style={{ ...BASE, height: 16, width: '68%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
          <span style={{ ...BASE, height: 28, width: 48, borderRadius: '6px' }} />
          <span style={{ ...BASE, height: 28, width: 48, borderRadius: '6px' }} />
        </div>
      </div>
    )
  }

  /* ── Profile header ── */
  if (variant === 'profile') {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #E0D8CE',
        borderRadius: '14px',
        padding: '28px',
        ...style,
      }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ ...BASE, width: 64, height: 64, borderRadius: '50%', flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ ...BASE, height: 20, width: '50%' }} />
            <span style={{ ...BASE, height: 13, width: '70%' }} />
          </div>
        </div>
        <span style={{ ...BASE, height: 14, width: '100%' }} />
        <span style={{ ...BASE, height: 14, width: '85%', marginTop: '8px' }} />
      </div>
    )
  }

  // Fallback — plain block
  return (
    <span style={{
      ...BASE,
      display: 'block',
      height: height || 40,
      width: width || '100%',
      ...style,
    }} />
  )
}

/**
 * SkeletonPage — full-page loading states for common page layouts
 *
 * Usage: <SkeletonPage variant="dashboard" />
 */
export function SkeletonPage({ variant = 'default' }) {
  if (variant === 'dashboard') {
    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 20px' }}>
        <div style={{ marginBottom: '32px' }}>
          <Skeleton height={14} width={80} style={{ marginBottom: '14px' }} />
          <Skeleton height={36} width={240} style={{ marginBottom: '10px' }} />
          <Skeleton variant="text" lines={1} style={{ maxWidth: '400px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {[1,2,3].map(i => <Skeleton key={i} variant="card" />)}
        </div>
      </div>
    )
  }

  if (variant === 'learn') {
    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 20px' }}>
        <div style={{ marginBottom: '32px', maxWidth: '640px' }}>
          <Skeleton height={14} width={80} style={{ marginBottom: '14px' }} />
          <Skeleton height={40} width={280} style={{ marginBottom: '12px' }} />
          <Skeleton variant="text" lines={2} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Skeleton height={28} width={140} style={{ marginBottom: '16px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
            {[1,2,3,4].map(i => <Skeleton key={i} variant="lesson" />)}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'profile') {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '36px 20px' }}>
        <Skeleton variant="profile" style={{ marginBottom: '16px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
          {[1,2,3,4].map(i => <Skeleton key={i} variant="stat" />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[1,2,3].map(i => <Skeleton key={i} variant="card" />)}
        </div>
      </div>
    )
  }

  if (variant === 'ideas') {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 20px' }}>
        <div style={{ marginBottom: '28px' }}>
          <Skeleton height={14} width={80} style={{ marginBottom: '14px' }} />
          <Skeleton height={36} width={200} style={{ marginBottom: '8px' }} />
          <Skeleton variant="text" lines={1} style={{ maxWidth: '480px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[1,2,3,4].map(i => <Skeleton key={i} variant="idea" />)}
        </div>
      </div>
    )
  }

  // Generic
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 20px' }}>
      <Skeleton height={36} width={280} style={{ marginBottom: '12px' }} />
      <Skeleton variant="text" lines={2} style={{ marginBottom: '28px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[1,2,3].map(i => <Skeleton key={i} variant="card" />)}
      </div>
    </div>
  )
}
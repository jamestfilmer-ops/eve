const BASE = {
  display: 'block',
  background: 'linear-gradient(90deg, #F0EDE8 25%, #E8F0E0 50%, #F0EDE8 75%)',
  backgroundSize: '200% 100%',
  animation: 'skeletonShimmer 1.6s infinite ease-in-out',
  borderRadius: '8px',
  flexShrink: 0,
}

const STYLE_TAG = `
  @keyframes skeletonShimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`

export default function Skeleton({ variant = 'line', width, height, lines = 3, style = {} }) {
  return (
    <>
      <style>{STYLE_TAG}</style>
      {variant === 'line' && (
        <span style={{ ...BASE, height: height || 16, width: width || '100%', ...style }} />
      )}
      {variant === 'avatar' && (
        <span style={{ ...BASE, width: height || 48, height: height || 48, borderRadius: '50%', ...style }} />
      )}
      {variant === 'text' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', ...style }}>
          {['100%','88%','74%','92%','65%'].slice(0, lines).map((w, i) => (
            <span key={i} style={{ ...BASE, height: 15, width: w, animationDelay: `${i * 0.07}s` }} />
          ))}
        </div>
      )}
      {variant === 'card' && (
        <div style={{ background: '#fff', border: '1px solid #E0D8CE', borderRadius: '14px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px', ...style }}>
          <style>{STYLE_TAG}</style>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ ...BASE, width: 40, height: 40, borderRadius: '10px' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ ...BASE, height: 16, width: '70%' }} />
              <span style={{ ...BASE, height: 12, width: '45%' }} />
            </div>
          </div>
          <span style={{ ...BASE, height: 13, width: '100%' }} />
          <span style={{ ...BASE, height: 13, width: '80%' }} />
          <span style={{ ...BASE, height: 5, width: '100%', borderRadius: '3px' }} />
        </div>
      )}
      {variant === 'stat' && (
        <div style={{ background: '#fff', border: '1px solid #E0D8CE', borderRadius: '14px', padding: '18px 20px', textAlign: 'center', ...style }}>
          <style>{STYLE_TAG}</style>
          <span style={{ ...BASE, height: 32, width: '48px', margin: '0 auto 8px', display: 'block' }} />
          <span style={{ ...BASE, height: 12, width: '60px', margin: '0 auto', display: 'block' }} />
        </div>
      )}
      {variant === 'idea' && (
        <div style={{ background: '#fff', border: '1px solid #E0D8CE', borderRadius: '12px', padding: '18px 20px', display: 'flex', gap: '14px', ...style }}>
          <style>{STYLE_TAG}</style>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
              <span style={{ ...BASE, height: 18, width: 64, borderRadius: '4px' }} />
              <span style={{ ...BASE, height: 14, width: 40, marginLeft: 'auto' }} />
            </div>
            <span style={{ ...BASE, height: 16, width: '100%' }} />
            <span style={{ ...BASE, height: 16, width: '65%' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
            <span style={{ ...BASE, height: 28, width: 48, borderRadius: '6px' }} />
            <span style={{ ...BASE, height: 28, width: 48, borderRadius: '6px' }} />
            <span style={{ ...BASE, height: 28, width: 48, borderRadius: '6px' }} />
          </div>
        </div>
      )}
    </>
  )
}

export function SkeletonPage({ variant = 'default' }) {
  return (
    <>
      <style>{STYLE_TAG}</style>
      {variant === 'dashboard' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <div>
              <span style={{ ...BASE, height: 36, width: 220, display: 'block', marginBottom: '10px' }} />
              <span style={{ ...BASE, height: 16, width: 300, display: 'block' }} />
            </div>
            <span style={{ ...BASE, height: 40, width: 130, borderRadius: '9px' }} />
          </div>
          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '40px' }}>
            {[0,1,2,3].map(i => <Skeleton key={i} variant="stat" />)}
          </div>
          {/* Project cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[0,1,2].map(i => <Skeleton key={i} variant="card" />)}
          </div>
        </div>
      )}
      {variant === 'ideas' && (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
            <div>
              <span style={{ ...BASE, height: 14, width: 80, display: 'block', marginBottom: '12px', borderRadius: '4px' }} />
              <span style={{ ...BASE, height: 34, width: 180, display: 'block', marginBottom: '8px' }} />
              <span style={{ ...BASE, height: 14, width: 340, display: 'block' }} />
            </div>
            <span style={{ ...BASE, height: 40, width: 130, borderRadius: '9px', flexShrink: 0 }} />
          </div>
          {/* Filter bar */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {[100,80,90,70,85,75].map((w,i) => (
              <span key={i} style={{ ...BASE, height: 30, width: w, borderRadius: '20px' }} />
            ))}
          </div>
          {/* Idea rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[0,1,2,3].map(i => <Skeleton key={i} variant="idea" />)}
          </div>
        </div>
      )}
    </>
  )
}
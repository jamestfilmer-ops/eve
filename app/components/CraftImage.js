// Shared image component for visual craft lessons
// Handles Unsplash (free commercial license, requires attribution),
// Wikimedia Commons public domain, and SVG diagrams
//
// UNSPLASH USAGE:
// - Direct hotlink to images.unsplash.com as required by their API guidelines
// - Attribution to photographer is displayed below each image
// - Free for commercial use under Unsplash license

export function UnsplashImage({ id, alt, credit, creditUrl, caption, aspectRatio = '16/9' }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        borderRadius: '8px',
        background: 'var(--off-white)',
      }}>
        <img
          src={`https://images.unsplash.com/${id}?w=900&q=75&auto=format&fit=crop`}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </div>
      {(caption || credit) && (
        <figcaption style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
          marginTop: '7px',
          flexWrap: 'wrap',
        }}>
          {caption && (
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', fontStyle: 'italic', lineHeight: '1.5', flex: 1 }}>
              {caption}
            </span>
          )}
          {credit && (
            <a
              href={creditUrl || 'https://unsplash.com'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-soft)', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Photo: {credit} / Unsplash
            </a>
          )}
        </figcaption>
      )}
    </figure>
  )
}

export function WikiImage({ src, alt, caption, credit, aspectRatio = '4/3' }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        borderRadius: '8px',
        background: '#111',
      }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </div>
      {(caption || credit) && (
        <figcaption style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
          marginTop: '7px',
          flexWrap: 'wrap',
        }}>
          {caption && (
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--text-mid)', fontStyle: 'italic', lineHeight: '1.5', flex: 1 }}>
              {caption}
            </span>
          )}
          {credit && (
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>
              Public domain / Wikimedia Commons
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}

export function ImagePair({ left, right }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

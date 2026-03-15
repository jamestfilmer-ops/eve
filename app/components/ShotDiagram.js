// SVG diagram showing shot scale from EWS to ECU
// Pure SVG -- no external dependencies, no copyright issues

export function ShotScaleDiagram() {
  const shots = [
    { label: 'EWS', name: 'Extreme Wide', fill: '#e8f5e9', stroke: '#2D5016' },
    { label: 'WS',  name: 'Wide Shot',   fill: '#c8e6c9', stroke: '#2D5016' },
    { label: 'MS',  name: 'Mid Shot',    fill: '#a5d6a7', stroke: '#2D5016' },
    { label: 'MCU', name: 'Med Close',   fill: '#81c784', stroke: '#2D5016' },
    { label: 'CU',  name: 'Close-Up',    fill: '#66bb6a', stroke: '#2D5016' },
    { label: 'ECU', name: 'Extreme CU',  fill: '#4caf50', stroke: '#1a3a0a' },
  ]

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>
        Shot Scale: Extreme Wide Shot to Extreme Close-Up
      </p>
      <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
        {shots.map((shot, i) => {
          const x = 10 + i * 115
          const w = 108
          // Frame gets progressively tighter (simulated with a figure crop)
          const figH = 140 - (i * 16)
          const figY = (140 - figH) / 2 + 20
          const frameH = 120
          const frameY = 20

          return (
            <g key={shot.label}>
              {/* Frame rectangle */}
              <rect x={x} y={frameY} width={w} height={frameH} rx="4" fill={shot.fill} stroke={shot.stroke} strokeWidth="1.5"/>
              {/* Stylized person silhouette -- gets more cropped as we zoom in */}
              {/* Head circle */}
              {i < 4 && (
                <circle
                  cx={x + w/2}
                  cy={i === 0 ? frameY + 28 : i === 1 ? frameY + 22 : i === 2 ? frameY + 18 : frameY + 14}
                  r={i === 0 ? 7 : i === 1 ? 9 : i === 2 ? 11 : 14}
                  fill={shot.stroke} opacity="0.7"
                />
              )}
              {/* Body */}
              {i < 3 && (
                <rect
                  x={x + w/2 - (i === 0 ? 8 : i === 1 ? 10 : 13)}
                  y={i === 0 ? frameY + 37 : i === 1 ? frameY + 33 : frameY + 31}
                  width={i === 0 ? 16 : i === 1 ? 20 : 26}
                  height={i === 0 ? 50 : i === 1 ? 60 : 72}
                  rx="3"
                  fill={shot.stroke} opacity="0.5"
                />
              )}
              {/* CU -- just face oval */}
              {i === 4 && (
                <ellipse cx={x + w/2} cy={frameY + 55} rx={28} ry={38} fill={shot.stroke} opacity="0.55"/>
              )}
              {/* ECU -- just eyes region */}
              {i === 5 && (
                <>
                  <rect x={x + 8} y={frameY} width={w - 16} height={frameH} rx="4" fill={shot.fill}/>
                  <ellipse cx={x + w/2 - 18} cy={frameY + 52} rx={18} ry={12} fill={shot.stroke} opacity="0.55"/>
                  <ellipse cx={x + w/2 + 18} cy={frameY + 52} rx={18} ry={12} fill={shot.stroke} opacity="0.55"/>
                  <ellipse cx={x + w/2 - 18} cy={frameY + 52} rx={10} ry={8} fill="#fff" opacity="0.9"/>
                  <ellipse cx={x + w/2 + 18} cy={frameY + 52} rx={10} ry={8} fill="#fff" opacity="0.9"/>
                </>
              )}
              {/* Crop lines -- getting tighter */}
              {i > 0 && i < 5 && (
                <>
                  <line x1={x} y1={frameY + frameH - (i * 12)} x2={x + w} y2={frameY + frameH - (i * 12)} stroke={shot.stroke} strokeWidth="1" strokeDasharray="4,3" opacity="0.6"/>
                  <text x={x + 3} y={frameY + frameH - (i * 12) - 3} fontSize="8" fill={shot.stroke} opacity="0.6" fontFamily="monospace">cut</text>
                </>
              )}
              {/* Label */}
              <text x={x + w/2} y={frameY + frameH + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--green, #2D5016)" fontFamily="monospace">{shot.label}</text>
              <text x={x + w/2} y={frameY + frameH + 25} textAnchor="middle" fontSize="9" fill="#666" fontFamily="sans-serif">{shot.name}</text>
            </g>
          )
        })}
        {/* Arrow showing zoom direction */}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#2D5016"/>
          </marker>
        </defs>
        <line x1="18" y1="165" x2="682" y2="165" stroke="#2D5016" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.5"/>
        <text x="340" y="175" textAnchor="middle" fontSize="9" fill="#666" fontFamily="monospace">zoom in / tighter frame</text>
      </svg>
    </div>
  )
}

export function AngleDiagram() {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>
        Camera Angle and Power -- same subject, three perspectives
      </p>
      <svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>

        {/* HIGH ANGLE panel */}
        <rect x="10" y="10" width="170" height="150" rx="6" fill="#f0f6fc" stroke="#2471A3" strokeWidth="1.5"/>
        {/* Camera above, angled down */}
        <g transform="translate(95, 25)">
          <rect x="-12" y="-8" width="24" height="16" rx="3" fill="#2471A3" opacity="0.8"/>
          <circle cx="0" cy="0" r="5" fill="#1a4a7a"/>
          <line x1="0" y1="8" x2="0" y2="35" stroke="#2471A3" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
          <polygon points="0,35 -4,28 4,28" fill="#2471A3" opacity="0.7"/>
        </g>
        {/* Small figure below -- diminished */}
        <g transform="translate(95, 110)">
          <circle cx="0" cy="-22" r="9" fill="#2471A3" opacity="0.5"/>
          <rect x="-8" y="-12" width="16" height="35" rx="3" fill="#2471A3" opacity="0.35"/>
        </g>
        <text x="95" y="175" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2471A3" fontFamily="monospace">HIGH ANGLE</text>
        <text x="95" y="187" textAnchor="middle" fontSize="9" fill="#666" fontFamily="sans-serif">Subject diminished</text>

        {/* EYE LEVEL panel */}
        <rect x="205" y="10" width="170" height="150" rx="6" fill="#f0fbf4" stroke="#2D5016" strokeWidth="1.5"/>
        {/* Camera at same level */}
        <g transform="translate(290, 80)">
          <rect x="-12" y="-8" width="24" height="16" rx="3" fill="#2D5016" opacity="0.8"/>
          <circle cx="0" cy="0" r="5" fill="#1a3a0a"/>
          <line x1="12" y1="0" x2="45" y2="0" stroke="#2D5016" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
          <polygon points="45,0 38,-4 38,4" fill="#2D5016" opacity="0.7"/>
        </g>
        {/* Figure at same level */}
        <g transform="translate(222, 80)">
          <circle cx="0" cy="-22" r="12" fill="#2D5016" opacity="0.5"/>
          <rect x="-10" y="-9" width="20" height="50" rx="3" fill="#2D5016" opacity="0.35"/>
        </g>
        <text x="290" y="175" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2D5016" fontFamily="monospace">EYE LEVEL</text>
        <text x="290" y="187" textAnchor="middle" fontSize="9" fill="#666" fontFamily="sans-serif">Neutral, democratic</text>

        {/* LOW ANGLE panel */}
        <rect x="400" y="10" width="170" height="150" rx="6" fill="#fff8f0" stroke="#8B4513" strokeWidth="1.5"/>
        {/* Camera below, angled up */}
        <g transform="translate(485, 145)">
          <rect x="-12" y="-8" width="24" height="16" rx="3" fill="#8B4513" opacity="0.8"/>
          <circle cx="0" cy="0" r="5" fill="#5a2d0c"/>
          <line x1="0" y1="-8" x2="0" y2="-45" stroke="#8B4513" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
          <polygon points="0,-45 -4,-38 4,-38" fill="#8B4513" opacity="0.7"/>
        </g>
        {/* Large figure above -- dominant */}
        <g transform="translate(485, 60)">
          <circle cx="0" cy="-28" r="16" fill="#8B4513" opacity="0.5"/>
          <rect x="-14" y="-11" width="28" height="60" rx="4" fill="#8B4513" opacity="0.35"/>
        </g>
        <text x="485" y="175" textAnchor="middle" fontSize="11" fontWeight="700" fill="#8B4513" fontFamily="monospace">LOW ANGLE</text>
        <text x="485" y="187" textAnchor="middle" fontSize="9" fill="#666" fontFamily="sans-serif">Subject dominant</text>

      </svg>
    </div>
  )
}

export function DutchAngleDiagram() {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '14px' }}>
        Dutch Angle -- the tilted frame signals psychological disorder
      </p>
      <svg viewBox="0 0 580 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>

        {/* Normal frame */}
        <g transform="translate(50, 20)">
          <rect x="0" y="0" width="200" height="120" rx="6" fill="#f0fbf4" stroke="#2D5016" strokeWidth="1.5"/>
          <line x1="0" y1="60" x2="200" y2="60" stroke="#2D5016" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
          <line x1="100" y1="0" x2="100" y2="120" stroke="#2D5016" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
          <g transform="translate(100, 60)">
            <circle cx="0" cy="-28" r="14" fill="#2D5016" opacity="0.45"/>
            <rect x="-12" y="-13" width="24" height="55" rx="3" fill="#2D5016" opacity="0.3"/>
          </g>
          <text x="100" y="138" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2D5016" fontFamily="monospace">NORMAL FRAME</text>
          <text x="100" y="150" textAnchor="middle" fontSize="9" fill="#666" fontFamily="sans-serif">World feels ordered</text>
        </g>

        {/* Dutch angle frame */}
        <g transform="translate(330, 20) rotate(12, 100, 60)">
          <rect x="0" y="0" width="200" height="120" rx="6" fill="#fdf0f0" stroke="#C0392B" strokeWidth="1.5"/>
          <line x1="0" y1="60" x2="200" y2="60" stroke="#C0392B" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
          <line x1="100" y1="0" x2="100" y2="120" stroke="#C0392B" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
          <g transform="translate(100, 60)">
            <circle cx="0" cy="-28" r="14" fill="#C0392B" opacity="0.45"/>
            <rect x="-12" y="-13" width="24" height="55" rx="3" fill="#C0392B" opacity="0.3"/>
          </g>
        </g>
        <text x="430" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="#C0392B" fontFamily="monospace">DUTCH ANGLE</text>
        <text x="430" y="167" textAnchor="middle" fontSize="9" fill="#666" fontFamily="sans-serif">World feels wrong</text>

      </svg>
    </div>
  )
}

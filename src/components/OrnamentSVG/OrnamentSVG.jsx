import './OrnamentSVG.css';

/* 4-point sparkle star path centered at (0,0) with "radius" s. */
function sparklePath(s) {
  const t = s * 0.3;
  return `M 0,${-s} C 0,${-t} ${t},${-t*0.5} ${s},0 C ${t},${t*0.5} 0,${t} 0,${s} C 0,${t} ${-t},${t*0.5} ${-s},0 C ${-t},${-t*0.5} 0,${-t} 0,${-s} Z`;
}

/* ─── Single twinkling sparkle ──────────────────────────────── */
export function SparkleSVG({ size = 16, className = '', style = {} }) {
  return (
    <svg viewBox="-12 -12 24 24" width={size} height={size}
      className={className} style={{ color: 'inherit', ...style }} aria-hidden="true">
      <path d={sparklePath(10)} fill="currentColor" className="sparkle-anim"/>
    </svg>
  );
}

/* ─── Trio/cluster of sparkles — different sizes + delays ──── */
export function SparkleClusterSVG({ size = 60, className = '', style = {} }) {
  return (
    <svg viewBox="0 0 100 60" width={size} height={size * 0.6}
      className={className} style={{ color: 'inherit', ...style }} aria-hidden="true">
      {/* Large center */}
      <g transform="translate(50, 30)">
        <path d={sparklePath(14)} fill="currentColor" className="sparkle-anim"/>
      </g>
      {/* Small upper-left */}
      <g transform="translate(16, 14)">
        <path d={sparklePath(5)} fill="currentColor" className="sparkle-anim"
          style={{ animationDelay: '0.6s' }}/>
      </g>
      {/* Small lower-right */}
      <g transform="translate(86, 46)">
        <path d={sparklePath(5)} fill="currentColor" className="sparkle-anim"
          style={{ animationDelay: '1.2s' }}/>
      </g>
      {/* Tiny dot accents */}
      <circle cx="82" cy="16" r="1.4" fill="currentColor"
        className="sparkle-anim sparkle-anim--pulse" style={{ animationDelay: '0.9s' }}/>
      <circle cx="20" cy="46" r="1.4" fill="currentColor"
        className="sparkle-anim sparkle-anim--pulse" style={{ animationDelay: '1.5s' }}/>
    </svg>
  );
}

/* ─── Horizontal animated sparkle border ───────────────────── */
export function SparkleBorderSVG({ width = '100%', height = 22, count = 13, className = '' }) {
  const sparkles = Array.from({ length: count }, (_, i) => {
    const x = ((i + 0.5) / count) * 800;
    const bucket = i % 3;
    const size = bucket === 0 ? 7 : bucket === 1 ? 4 : 2.5;
    const delay = (i * 0.22) % 2.4;
    return { x, size, delay };
  });
  return (
    <svg viewBox="0 0 800 22" width={width} height={height}
      className={className} style={{ color: 'inherit', display: 'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {sparkles.map(({ x, size, delay }, i) => (
        <g key={i} transform={`translate(${x}, 11)`}>
          <path d={sparklePath(size)} fill="currentColor"
            className="sparkle-anim" style={{ animationDelay: `${delay}s` }}/>
        </g>
      ))}
    </svg>
  );
}

/* ─── Vertical animated sparkle border ─────────────────────── */
export function SparkleVerticalBorderSVG({ width = 22, height = '100%', count = 13, className = '' }) {
  const sparkles = Array.from({ length: count }, (_, i) => {
    const y = ((i + 0.5) / count) * 800;
    const bucket = i % 3;
    const size = bucket === 0 ? 7 : bucket === 1 ? 4 : 2.5;
    const delay = (i * 0.22) % 2.4;
    return { y, size, delay };
  });
  return (
    <svg viewBox="0 0 22 800" width={width} height={height}
      className={className} style={{ color: 'inherit', display: 'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {sparkles.map(({ y, size, delay }, i) => (
        <g key={i} transform={`translate(11, ${y})`}>
          <path d={sparklePath(size)} fill="currentColor"
            className="sparkle-anim" style={{ animationDelay: `${delay}s` }}/>
        </g>
      ))}
    </svg>
  );
}

/* ─── L-shaped corner sparkle cluster ──────────────────────── */
export function CornerSparkleSVG({ size = 80, className = '' }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      <g transform="translate(14, 14)">
        <path d={sparklePath(9)} fill="currentColor" className="sparkle-anim"/>
      </g>
      <g transform="translate(38, 18)">
        <path d={sparklePath(4.5)} fill="currentColor" className="sparkle-anim"
          style={{ animationDelay: '0.5s' }}/>
      </g>
      <g transform="translate(18, 38)">
        <path d={sparklePath(4.5)} fill="currentColor" className="sparkle-anim"
          style={{ animationDelay: '1.0s' }}/>
      </g>
      <circle cx="48" cy="40" r="1.6" fill="currentColor"
        className="sparkle-anim sparkle-anim--pulse" style={{ animationDelay: '1.5s' }}/>
      <circle cx="40" cy="48" r="1.6" fill="currentColor"
        className="sparkle-anim sparkle-anim--pulse" style={{ animationDelay: '1.8s' }}/>
    </svg>
  );
}

/* ─── Interlocking wedding rings with diamond ───────────────── */
export function RingsSVG({ size = 110, className = '' }) {
  return (
    <svg viewBox="0 0 120 70" width={size} height={size * (70/120)}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      {/* Left ring */}
      <ellipse cx="44" cy="44" rx="22" ry="22" fill="none" stroke="currentColor" strokeWidth="2.4"/>
      <ellipse cx="44" cy="44" rx="18" ry="18" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
      {/* Right ring */}
      <ellipse cx="76" cy="44" rx="22" ry="22" fill="none" stroke="currentColor" strokeWidth="2.4"/>
      <ellipse cx="76" cy="44" rx="18" ry="18" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
      {/* Right ring appears on top at right-overlap */}
      <path d="M 60,28.5 A 22,22 0 0 1 66,60.5" fill="none" stroke="#fffef8" strokeWidth="3.6"/>
      <path d="M 60,28.5 A 22,22 0 0 1 66,60.5" fill="none" stroke="currentColor" strokeWidth="2.4"/>
      {/* Diamond atop left ring */}
      <g transform="translate(44, 14)">
        <path d="M 0,0 L 4.5,4.5 L 0,11 L -4.5,4.5 Z" fill="currentColor"/>
        <path d="M -4.5,4.5 L 0,3 L 4.5,4.5" fill="none" stroke="#fffef8" strokeWidth="0.7"/>
      </g>
      {/* Animated sparkles around rings */}
      <g transform="translate(14, 14)">
        <path d={sparklePath(3)} fill="currentColor" className="sparkle-anim"/>
      </g>
      <g transform="translate(108, 18)">
        <path d={sparklePath(3)} fill="currentColor" className="sparkle-anim"
          style={{ animationDelay: '0.7s' }}/>
      </g>
      <g transform="translate(104, 58)">
        <path d={sparklePath(2.5)} fill="currentColor" className="sparkle-anim"
          style={{ animationDelay: '1.4s' }}/>
      </g>
    </svg>
  );
}

/* ─── Heart ─────────────────────────────────────────────────── */
export function HeartSVG({ size = 22, className = '', style = {} }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
      className={className} style={{ color: 'inherit', ...style }} aria-hidden="true">
      <path d="M 12,21 C 12,21 2.5,14.2 2.5,8 C 2.5,4.2 5.2,2 8,2 C 10.2,2 12,3.8 12,6 C 12,3.8 13.8,2 16,2 C 18.8,2 21.5,4.2 21.5,8 C 21.5,14.2 12,21 12,21 Z"
        fill="currentColor"/>
    </svg>
  );
}

/* ─── Music note (eighth-note pair) ─────────────────────────── */
export function MusicNoteSVG({ size = 22, className = '', style = {} }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
      className={className} style={{ color: 'inherit', ...style }} aria-hidden="true">
      {/* Two eighth-note heads */}
      <ellipse cx="7"  cy="18"   rx="3"   ry="2.3" fill="currentColor" transform="rotate(-18 7 18)"/>
      <ellipse cx="17" cy="16.5" rx="3"   ry="2.3" fill="currentColor" transform="rotate(-18 17 16.5)"/>
      {/* Stems */}
      <path d="M 9.6,17.4 L 9.6,5 L 19.6,3 L 19.6,15.8"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Beam (top flag joining the two stems) */}
      <path d="M 9.6,5 L 19.6,3 L 19.6,6 L 9.6,8 Z" fill="currentColor" opacity="0.85"/>
    </svg>
  );
}

/* ─── Line-art event icons — match gold stroke aesthetic ──── */

export function CalendarIconSVG({ size = 36, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      <rect x="4" y="7" width="20" height="17" rx="2"
        fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="4" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="10" y1="4" x2="10" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="18" y1="4" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      {/* small sparkle accent */}
      <path d="M 14,16 C 14,17.5 14.5,18 16,18.5 C 14.5,19 14,19.5 14,21 C 14,19.5 13.5,19 12,18.5 C 13.5,18 14,17.5 14,16 Z"
        fill="currentColor"/>
    </svg>
  );
}

export function ClockIconSVG({ size = 36, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      <circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="14" y1="4.5" x2="14" y2="5.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="23.5" y1="14" x2="22.2" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="14" y1="23.5" x2="14" y2="22.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="4.5" y1="14" x2="5.8" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      {/* minute hand to 12, hour hand to 4 (16:00 style) */}
      <line x1="14" y1="14" x2="14" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="14" y1="14" x2="18" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="1.2" fill="currentColor"/>
    </svg>
  );
}

export function LocationPinSVG({ size = 36, className = '' }) {
  return (
    <svg viewBox="0 0 24 28" width={size} height={size * (28/24)}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      <path d="M 12,2 C 7.5,2 4,5.5 4,10 C 4,17 12,25 12,25 C 12,25 20,17 20,10 C 20,5.5 16.5,2 12,2 Z"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="10" r="0.9" fill="currentColor"/>
    </svg>
  );
}

export function BuildingIconSVG({ size = 36, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      <polygon points="3,10 14,4 25,10"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="3" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="12" x2="7" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11.5" y1="12" x2="11.5" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16.5" y1="12" x2="16.5" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="21" y1="12" x2="21" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="4" r="0.9" fill="currentColor"/>
    </svg>
  );
}

export function MapIconSVG({ size = 18, className = '' }) {
  return (
    <svg viewBox="0 0 24 20" width={size} height={size * (20/24)}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      <path d="M 2,5 L 8,3 L 16,5 L 22,3 L 22,17 L 16,19 L 8,17 L 2,19 Z"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="8" y1="3" x2="8" y2="17" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1.5,1.5"/>
      <line x1="16" y1="5" x2="16" y2="19" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1.5,1.5"/>
    </svg>
  );
}

/* ─── Wax Seal — unchanged ─────────────────────────────────── */
export function WaxSealSVG({ size = 100, initials = 'ZS', className = '' }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}
      className={className} aria-hidden="true">
      <defs>
        <radialGradient id="wax-g2" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#c03030"/>
          <stop offset="55%" stopColor="#8a1010"/>
          <stop offset="100%" stopColor="#4e0808"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill="url(#wax-g2)"/>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A84C" strokeWidth="1.8"/>
      <circle cx="50" cy="50" r="41" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.6"/>
      {Array.from({ length: 20 }, (_, i) => {
        const a = (i * 18 - 90) * (Math.PI / 180);
        const r = i % 2 === 0 ? 48.5 : 46.5;
        return (
          <circle key={i}
            cx={(50 + r * Math.cos(a)).toFixed(1)}
            cy={(50 + r * Math.sin(a)).toFixed(1)}
            r="1.4" fill="#C9A84C"/>
        );
      })}
      <circle cx="50" cy="50" r="33" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
      <text x="50" y="58"
        textAnchor="middle" fill="#F0D878"
        fontSize="25" fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic" fontWeight="600" letterSpacing="3">
        {initials}
      </text>
    </svg>
  );
}

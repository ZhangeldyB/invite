/*
 * Kazakh ornament SVG components
 *
 * Қошқар мүйіз (Koshkar Muiz) — ram-horn double spiral; the most
 * iconic Kazakh motif. Constructed with arc segments so the spiral
 * reads clearly at any size.
 *
 * Шаңырақ (Shanyrak) — yurt crown wheel.
 *
 * Жиек (Jiyek) — step-meander border, found on every Kazakh textile.
 */

/* ─────────────────────────────────────────────────────────────────
 * Қошқар мүйіз — single S-scroll with two inward-curling horn tips.
 * Used as divider ornament between sections.
 * viewBox 100 × 50
 * ───────────────────────────────────────────────────────────────── */
export function KoshkarMuizSVG({ size = 80, className = '' }) {
  return (
    <svg viewBox="0 0 100 50" width={size} height={size * 0.5}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      {/* Left horn: sweeps left-up from center, spirals clockwise inward */}
      <path
        d="M 50,25
           C 44,18 30,7 16,8
           C 4,9 0,18 6,27
           C 11,34 22,33 26,25
           C 29,19 25,13 20,15
           C 16,17 17,23 21,22"
        fill="none" stroke="currentColor" strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Right horn: sweeps right-down from center, spirals counter-clockwise */}
      <path
        d="M 50,25
           C 56,32 70,43 84,42
           C 96,41 100,32 94,23
           C 89,16 78,17 74,25
           C 71,31 75,37 80,35
           C 84,33 83,27 79,28"
        fill="none" stroke="currentColor" strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Dots at spiral tips */}
      <circle cx="21" cy="22" r="2.2" fill="currentColor"/>
      <circle cx="79" cy="28" r="2.2" fill="currentColor"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Қошқар мүйіз corner ornament — two perpendicular horns sharing a
 * junction at the inner corner.  Mirror with CSS transform for other
 * three corners.
 * viewBox 80 × 80
 * ───────────────────────────────────────────────────────────────── */
export function KoshkarCornerSVG({ size = 70, className = '' }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      {/* Horizontal horn — goes right from (6,6), arcs down-right, spirals back */}
      <path
        d="M 6,6
           C 26,4 50,10 62,24
           C 72,36 68,54 54,58
           C 41,62 28,54 30,42
           C 31,32 42,30 48,38
           C 52,44 48,52 42,50
           C 37,48 38,42 43,43"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Vertical horn — goes down from (6,6), arcs right-down, spirals back */}
      <path
        d="M 6,6
           C 4,26 10,50 24,62
           C 36,72 54,68 58,54
           C 62,41 54,28 42,30
           C 32,31 30,42 38,48
           C 44,52 52,48 50,42
           C 48,37 42,38 43,43"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Junction dot where both horns meet their spiral tips */}
      <circle cx="43" cy="43" r="3" fill="currentColor"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Horizontal koshkar muiz repeating border (SVG <pattern>)
 * Alternating upper and lower S-scroll waves.
 * viewBox height 32, tile width 80
 * ───────────────────────────────────────────────────────────────── */
export function KoshkarBorderSVG({ width = '100%', height = 32, id = 'kb', className = '' }) {
  const pid = `koshkar-h-${id}`;
  return (
    <svg viewBox={`0 0 800 32`} width={width} height={height}
      className={className} style={{ color: 'inherit', display: 'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={pid} x="0" y="0" width="80" height="32" patternUnits="userSpaceOnUse">
          {/* Upper horn: curves up from left, spirals at each end */}
          <path
            d="M 0,16
               C 6,10 14,5 22,5
               C 30,5 33,10 30,15
               C 28,19 22,20 19,17
               C 17,14 19,11 22,12
               M 40,16
               C 34,10 26,5 18,5"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round"/>
          <path
            d="M 40,16
               C 46,10 54,5 62,5
               C 70,5 73,10 70,15
               C 68,19 62,20 59,17
               C 57,14 59,11 62,12
               M 80,16
               C 74,10 66,5 58,5"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round"/>
          {/* Lower horn: mirror */}
          <path
            d="M 0,16
               C 6,22 14,27 22,27
               C 30,27 33,22 30,17
               C 28,13 22,12 19,15
               C 17,18 19,21 22,20
               M 40,16
               C 34,22 26,27 18,27"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round"/>
          <path
            d="M 40,16
               C 46,22 54,27 62,27
               C 70,27 73,22 70,17
               C 68,13 62,12 59,15
               C 57,18 59,21 62,20
               M 80,16
               C 74,22 66,27 58,27"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round"/>
          {/* Spiral tip dots */}
          <circle cx="22" cy="12" r="1.4" fill="currentColor"/>
          <circle cx="62" cy="12" r="1.4" fill="currentColor"/>
          <circle cx="22" cy="20" r="1.4" fill="currentColor"/>
          <circle cx="62" cy="20" r="1.4" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="800" height="32" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Vertical koshkar muiz border — same pattern rotated 90°.
 * ───────────────────────────────────────────────────────────────── */
export function KoshkarVerticalBorderSVG({ width = 32, height = '100%', id = 'kv', className = '' }) {
  const pid = `koshkar-v-${id}`;
  return (
    <svg viewBox="0 0 32 800" width={width} height={height}
      className={className} style={{ color: 'inherit', display: 'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={pid} x="0" y="0" width="32" height="80" patternUnits="userSpaceOnUse">
          {/* Left horn */}
          <path
            d="M 16,0
               C 10,6 5,14 5,22
               C 5,30 10,33 15,30
               C 19,28 20,22 17,19
               C 14,17 11,19 12,22
               M 16,40
               C 10,34 5,26 5,18"
            fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path
            d="M 16,40
               C 10,46 5,54 5,62
               C 5,70 10,73 15,70
               C 19,68 20,62 17,59
               C 14,57 11,59 12,62
               M 16,80
               C 10,74 5,66 5,58"
            fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          {/* Right horn mirror */}
          <path
            d="M 16,0
               C 22,6 27,14 27,22
               C 27,30 22,33 17,30
               C 13,28 12,22 15,19
               C 18,17 21,19 20,22
               M 16,40
               C 22,34 27,26 27,18"
            fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path
            d="M 16,40
               C 22,46 27,54 27,62
               C 27,70 22,73 17,70
               C 13,68 12,62 15,59
               C 18,57 21,59 20,62
               M 16,80
               C 22,74 27,66 27,58"
            fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="12" cy="22" r="1.4" fill="currentColor"/>
          <circle cx="20" cy="22" r="1.4" fill="currentColor"/>
          <circle cx="12" cy="62" r="1.4" fill="currentColor"/>
          <circle cx="20" cy="62" r="1.4" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="32" height="800" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Шаңырақ — yurt crown seen from above.
 * 12 curved spokes radiating from a central hub to the outer ring.
 * viewBox 100 × 100
 * ───────────────────────────────────────────────────────────────── */
export function ShanyrakSVG({ size = 80, className = '' }) {
  const cx = 50, cy = 50;
  const rHub = 9, rOuter = 44, rDot = 40;

  const spokes = Array.from({ length: 12 }, (_, i) => {
    const baseAngle = (i * 30 - 90) * (Math.PI / 180);
    const shiftAngle = baseAngle + 0.22; // slight clockwise shift for curved look
    const x1 = cx + rHub * Math.cos(baseAngle);
    const y1 = cy + rHub * Math.sin(baseAngle);
    const x2 = cx + rOuter * Math.cos(baseAngle);
    const y2 = cy + rOuter * Math.sin(baseAngle);
    const qx = cx + 26 * Math.cos(shiftAngle);
    const qy = cy + 26 * Math.sin(shiftAngle);
    return { x1, y1, x2, y2, qx, qy };
  });

  return (
    <svg viewBox="0 0 100 100" width={size} height={size}
      className={className} style={{ color: 'inherit' }} aria-hidden="true">
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r="46" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="currentColor" strokeWidth="1"
        opacity="0.4"/>
      {/* Hub */}
      <circle cx={cx} cy={cy} r={rHub} fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor"/>
      {/* Curved spokes */}
      {spokes.map(({ x1, y1, x2, y2, qx, qy }, i) => (
        <path key={i}
          d={`M ${x1.toFixed(1)},${y1.toFixed(1)} Q ${qx.toFixed(1)},${qy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`}
          fill="none" stroke="currentColor" strokeWidth="1.4"/>
      ))}
      {/* Small diamonds on the outer ring at spoke ends */}
      {spokes.map(({ x2, y2 }, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180;
        const dx = 4 * Math.cos(a + Math.PI / 2);
        const dy = 4 * Math.sin(a + Math.PI / 2);
        return (
          <polygon key={i}
            points={`${x2.toFixed(1)},${y2.toFixed(1)} ${(x2 + dx).toFixed(1)},${(y2 + dy).toFixed(1)} ${(x2 + 4 * Math.cos(a)).toFixed(1)},${(y2 + 4 * Math.sin(a)).toFixed(1)} ${(x2 - dx).toFixed(1)},${(y2 - dy).toFixed(1)}`}
            fill="currentColor"/>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Жиек — classic Kazakh step-meander (tooth) border.
 * Repeating crenellation pattern — top and bottom combined.
 * ───────────────────────────────────────────────────────────────── */
export function JiyekBorderSVG({ width = '100%', height = 16, id = 'jb', className = '' }) {
  const pid = `jiyek-${id}`;
  return (
    <svg viewBox="0 0 800 16" width={width} height={height}
      className={className} style={{ color: 'inherit', display: 'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={pid} x="0" y="0" width="32" height="16" patternUnits="userSpaceOnUse">
          {/* Top teeth */}
          <polyline points="0,8 0,2 8,2 8,8 16,8 16,2 24,2 24,8 32,8"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter"/>
          {/* Bottom teeth (mirror) */}
          <polyline points="0,8 0,14 8,14 8,8 16,8 16,14 24,14 24,8 32,8"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter"/>
        </pattern>
      </defs>
      <rect width="800" height="16" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Diamond chain — lightweight accent between borders.
 * ───────────────────────────────────────────────────────────────── */
export function DiamondChainSVG({ width = '100%', height = 12, id = 'dc', className = '' }) {
  const pid = `diamond-${id}`;
  return (
    <svg viewBox="0 0 800 12" width={width} height={height}
      className={className} style={{ color: 'inherit', display: 'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={pid} x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
          <polygon points="10,1 19,6 10,11 1,6"
            fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="10" cy="6" r="1.6" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="800" height="12" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * Wax Seal — ZS monogram, crimson disc with gold trim.
 * ───────────────────────────────────────────────────────────────── */
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
      {/* Outer gold ring */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A84C" strokeWidth="1.8"/>
      <circle cx="50" cy="50" r="41" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.6"/>
      {/* 20 alternating short/long points (serrated edge) */}
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
      {/* Inner koshkar muiz arcs (decorative) */}
      <circle cx="50" cy="50" r="33" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
      {/* ZS monogram */}
      <text x="50" y="58"
        textAnchor="middle" fill="#F0D878"
        fontSize="25" fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic" fontWeight="600" letterSpacing="3">
        {initials}
      </text>
    </svg>
  );
}

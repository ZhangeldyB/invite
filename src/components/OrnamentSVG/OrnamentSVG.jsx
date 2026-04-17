/* Horizontal ornament border sliced from /ornaments.jpg (5 rows).
 * row 0: mixed knots (not tileable, skip)
 * row 1: diamond-knot chain
 * row 2: spiral wave chain
 * row 3: oval chain
 * row 4: heart braid
 */
export function OrnamentBorder({ row = 2, height = 34, className = '', style = {} }) {
  const positionY = `${(row / 4) * 100}%`;
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        height,
        backgroundImage: 'url(/ornaments.jpg)',
        backgroundSize: 'auto 500%',
        backgroundRepeat: 'repeat-x',
        backgroundPositionY: positionY,
        ...style,
      }}
    />
  );
}

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

/*
 * Authentic Kazakh ornament SVG components
 *
 * Patterns used:
 *  - KoshkarMuiz (Қошқар мүйіз) — ram-horn spiral scroll, most iconic Kazakh motif
 *  - Shanyrak (Шаңырақ) — yurt crown seen from above, symbol of home & universe
 *  - Jiyek (Жиек) — step/meander border, ancient geometric border ornament
 *  - KoshkarBorder — repeating horizontal koshkar muiz scroll for borders
 *  - WaxSeal — ZS monogram seal
 */

/* ── Koshkar Muiz (Қошқар мүйіз) ─────────────────────────────
 * Classic double-scroll ram's horn. Two opposing S-curve spirals
 * that each coil inward at the tip — the foundational Kazakh motif.
 * Used in corners, medallions, and as standalone decoration.
 */
export function KoshkarMuizSVG({ size = 80, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}
      style={{ color: 'inherit' }} aria-hidden="true">
      {/* Upper-left horn: large arc sweeping right, spirals inward at tip */}
      <path d="
        M 50,52
        C 44,52 30,50 22,42
        C 14,34 16,22 26,18
        C 36,14 46,20 46,30
        C 46,38 38,42 32,38
        C 28,35 30,29 34,29
        C 37,29 38,33 36,34
      " fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Lower-right horn: mirror — sweeps left, spirals inward */}
      <path d="
        M 50,48
        C 56,48 70,50 78,58
        C 86,66 84,78 74,82
        C 64,86 54,80 54,70
        C 54,62 62,58 68,62
        C 72,65 70,71 66,71
        C 63,71 62,67 64,66
      " fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Paired Koshkar Muiz corner (4-directional) ──────────────── */
export function KoshkarCornerSVG({ size = 70, className = '' }) {
  return (
    <svg viewBox="0 0 70 70" width={size} height={size} className={className}
      style={{ color: 'inherit' }} aria-hidden="true">
      {/* Horizontal horn */}
      <path d="
        M 4,35
        C 4,22 12,10 24,8
        C 36,6 44,15 42,26
        C 40,35 30,38 24,33
        C 19,29 21,22 26,22
        C 30,22 31,27 28,28
      " fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Vertical horn */}
      <path d="
        M 35,4
        C 22,4 10,12 8,24
        C 6,36 15,44 26,42
        C 35,40 38,30 33,24
        C 29,19 22,21 22,26
        C 22,30 27,31 28,28
      " fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Dot at junction */}
      <circle cx="28" cy="28" r="2.5" fill="currentColor"/>
    </svg>
  );
}

/* ── Koshkar Muiz horizontal border (repeating tile via <pattern>) ─
 * The classic Kazakh border: continuous S-scroll with ram-horn spirals
 * alternating above and below the center line.
 */
export function KoshkarBorderSVG({ width = '100%', height = 34, id = 'kb', className = '' }) {
  const pid = `koshkar-border-${id}`;
  return (
    <svg viewBox="0 0 100% 34" width={width} height={height} className={className}
      style={{ color: 'inherit', display: 'block' }} aria-hidden="true"
      preserveAspectRatio="xMidYMid slice">
      <defs>
        {/* One tile: 64px wide, 34px tall — upper + lower horn pair */}
        <pattern id={pid} x="0" y="0" width="64" height="34" patternUnits="userSpaceOnUse">
          {/* Center line */}
          <line x1="0" y1="17" x2="64" y2="17" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          {/* Upper scroll: C-curve opening down, left spiral CW, right spiral CCW */}
          <path d="
            M 0,17
            C 2,10 7,5 13,5
            C 19,5 21,10 19,14
            C 17,17 13,17 12,14
            C 11,12 13,11 14,13
            M 32,17
            C 30,10 25,5 19,5
          " fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Upper right scroll */}
          <path d="
            M 32,17
            C 34,10 39,5 45,5
            C 51,5 53,10 51,14
            C 49,17 45,17 44,14
            C 43,12 45,11 46,13
            M 64,17
            C 62,10 57,5 51,5
          " fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Lower scroll (mirror): C-curve opening up */}
          <path d="
            M 0,17
            C 2,24 7,29 13,29
            C 19,29 21,24 19,20
            C 17,17 13,17 12,20
            C 11,22 13,23 14,21
            M 32,17
            C 30,24 25,29 19,29
          " fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Lower right scroll */}
          <path d="
            M 32,17
            C 34,24 39,29 45,29
            C 51,29 53,24 51,20
            C 49,17 45,17 44,20
            C 43,22 45,23 46,21
            M 64,17
            C 62,24 57,29 51,29
          " fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Junction dots */}
          <circle cx="14" cy="13" r="1.2" fill="currentColor"/>
          <circle cx="46" cy="13" r="1.2" fill="currentColor"/>
          <circle cx="14" cy="21" r="1.2" fill="currentColor"/>
          <circle cx="46" cy="21" r="1.2" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="34" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ── Koshkar Muiz vertical border (for paper left/right sides) ── */
export function KoshkarVerticalBorderSVG({ width = 34, height = '100%', id = 'kv', className = '' }) {
  const pid = `koshkar-vert-${id}`;
  return (
    <svg viewBox="0 34 0 100%" width={width} height={height} className={className}
      style={{ color: 'inherit', display: 'block' }} aria-hidden="true"
      preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={pid} x="0" y="0" width="34" height="64" patternUnits="userSpaceOnUse">
          <line x1="17" y1="0" x2="17" y2="64" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          {/* Left upper */}
          <path d="M 17,0 C 10,2 5,7 5,13 C 5,19 10,21 14,19 C 17,17 17,13 14,12 C 12,11 11,13 13,14
                   M 17,32 C 10,30 5,25 5,19"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Right upper */}
          <path d="M 17,0 C 24,2 29,7 29,13 C 29,19 24,21 20,19 C 17,17 17,13 20,12 C 22,11 23,13 21,14
                   M 17,32 C 24,30 29,25 29,19"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Lower pair mirror */}
          <path d="M 17,32 C 10,34 5,39 5,45 C 5,51 10,53 14,51 C 17,49 17,45 14,44 C 12,43 11,45 13,46
                   M 17,64 C 10,62 5,57 5,51"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 17,32 C 24,34 29,39 29,45 C 29,51 24,53 20,51 C 17,49 17,45 20,44 C 22,43 23,45 21,46
                   M 17,64 C 24,62 29,57 29,51"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="13" cy="14" r="1.2" fill="currentColor"/>
          <circle cx="21" cy="14" r="1.2" fill="currentColor"/>
          <circle cx="13" cy="46" r="1.2" fill="currentColor"/>
          <circle cx="21" cy="46" r="1.2" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="34" height="100%" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ── Shanyrak (Шаңырақ) ──────────────────────────────────────────
 * Yurt crown seen from above. Outer ring + inner hub + curved
 * radial ribs (the bent poles that radiate outward like a wheel).
 * Symbol of hearth, home, and the universe.
 */
export function ShanyrakSVG({ size = 80, className = '' }) {
  // 12 curved spokes, each bending slightly counterclockwise as they radiate
  const spokes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30) * (Math.PI / 180);
    const nextAngle = angle + 0.18; // slight CCW curve
    const r1 = 12, r2 = 42;
    const x1 = 50 + r1 * Math.cos(angle);
    const y1 = 50 + r1 * Math.sin(angle);
    const x2 = 50 + r2 * Math.cos(angle);
    const y2 = 50 + r2 * Math.sin(angle);
    // Control point offset for gentle S-curve
    const cx1 = 50 + 22 * Math.cos(nextAngle);
    const cy1 = 50 + 22 * Math.sin(nextAngle);
    return `M ${x1.toFixed(1)},${y1.toFixed(1)} Q ${cx1.toFixed(1)},${cy1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
  });

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}
      style={{ color: 'inherit' }} aria-hidden="true">
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      {/* Decorative outer ring detail */}
      <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      {/* Inner hub ring */}
      <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="50" cy="50" r="5" fill="currentColor"/>
      {/* Curved spokes */}
      {spokes.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="1.4"/>
      ))}
      {/* Small diamonds at spoke ends on outer ring */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = 50 + 43 * Math.cos(angle);
        const y = 50 + 43 * Math.sin(angle);
        return <circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r="1.8" fill="currentColor"/>;
      })}
    </svg>
  );
}

/* ── Jiyek border (Жиек) ─────────────────────────────────────────
 * Classic Kazakh step/meander border. Ancient geometric border
 * found on textiles, yurt decorations, and architectural elements.
 * Symbolizes life's continuity and the connection of worlds.
 */
export function JiyekBorderSVG({ width = '100%', height = 16, id = 'jb', className = '' }) {
  const pid = `jiyek-${id}`;
  return (
    <svg viewBox="0 0 100% 16" width={width} height={height} className={className}
      style={{ color: 'inherit', display: 'block' }} aria-hidden="true"
      preserveAspectRatio="xMidYMid slice">
      <defs>
        {/* Step meander tile 24×16 */}
        <pattern id={pid} x="0" y="0" width="24" height="16" patternUnits="userSpaceOnUse">
          {/* Top step */}
          <polyline points="0,8 4,8 4,2 12,2 12,8 16,8 16,2 24,2"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter"/>
          {/* Bottom step (mirror) */}
          <polyline points="0,8 4,8 4,14 12,14 12,8 16,8 16,14 24,14"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter"/>
        </pattern>
      </defs>
      <rect width="100%" height="16" fill={`url(#${pid})`}/>
    </svg>
  );
}

/* ── Wax Seal SVG ─────────────────────────────────────────────── */
export function WaxSealSVG({ size = 100, initials = 'ZS', className = '' }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <radialGradient id="wax-g" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#b52525"/>
          <stop offset="60%" stopColor="#7a0f0f"/>
          <stop offset="100%" stopColor="#4a0808"/>
        </radialGradient>
      </defs>
      {/* Main seal disc */}
      <circle cx="50" cy="50" r="46" fill="url(#wax-g)"/>
      {/* Outer gold ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.7"/>
      {/* 16 koshkar-muiz-style points around the edge */}
      {Array.from({ length: 16 }, (_, i) => {
        const a1 = ((i * 22.5) - 90) * (Math.PI / 180);
        const a2 = ((i * 22.5 + 11.25) - 90) * (Math.PI / 180);
        const ox = 50 + 44 * Math.cos(a1);
        const oy = 50 + 44 * Math.sin(a1);
        const px = 50 + 48 * Math.cos(a2);
        const py = 50 + 48 * Math.sin(a2);
        const nx = 50 + 44 * Math.cos(a1 + 22.5 * Math.PI / 180);
        const ny = 50 + 44 * Math.sin(a1 + 22.5 * Math.PI / 180);
        return (
          <polygon key={i}
            points={`${ox.toFixed(1)},${oy.toFixed(1)} ${px.toFixed(1)},${py.toFixed(1)} ${nx.toFixed(1)},${ny.toFixed(1)}`}
            fill="#C9A84C" opacity="0.9"/>
        );
      })}
      {/* Inner detail circle */}
      <circle cx="50" cy="50" r="34" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
      {/* ZS monogram */}
      <text x="50" y="58" textAnchor="middle"
        fill="#E8D08A" fontSize="24" fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic" fontWeight="600" letterSpacing="3">
        {initials}
      </text>
    </svg>
  );
}

/* ── Diamond chain (used as thin accent line) ─────────────────── */
export function DiamondChainSVG({ width = '100%', height = 12, id = 'dc', className = '' }) {
  const pid = `diamond-${id}`;
  return (
    <svg viewBox="0 0 100% 12" width={width} height={height} className={className}
      style={{ color: 'inherit', display: 'block' }} aria-hidden="true"
      preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={pid} x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
          <polygon points="10,1 19,6 10,11 1,6" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="10" cy="6" r="1.5" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="12" fill={`url(#${pid})`}/>
    </svg>
  );
}

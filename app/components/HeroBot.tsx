/**
 * Hero visual, in the spot where vercel.com has its triangle: an original pixel-art
 * Skyhop creature (a little cloud) typing on a laptop. It hops while a comet runs the
 * arc from your Mac up to the cloud and back. SVG + CSS only; still with reduced motion.
 */

const BOT = "#ea6c34"; // bot orange
const U = 9; // one pixel of the sprite, in SVG units

// Body rows: [row, fromCol, toCol] inclusive.
const BODY: [number, number, number][] = [
  [0, 5, 6],
  [0, 9, 14],
  [1, 4, 16],
  [2, 3, 18],
  [3, 3, 19],
  [4, 2, 20],
  [5, 2, 20],
  [6, 2, 20],
  [7, 2, 20],
  [8, 2, 20],
  [9, 3, 19],
  [10, 3, 19],
];

// The Skyhop arc on the laptop lid.
const LID_MARK: [number, number][] = [
  [9, 12],
  [10, 11],
  [11, 10],
  [12, 11],
  [13, 12],
];

function px(col: number, row: number, w = 1, h = 1) {
  return { x: col * U, y: row * U, width: w * U, height: h * U };
}

export function HeroBot() {
  const arc = "M 40 300 C 90 30, 370 30, 420 300";
  const spriteW = 23 * U;
  const spriteH = 16 * U;
  return (
    <div
      role="img"
      aria-label="A pixel-art cloud creature typing on a laptop, hopping along an arc from a laptop up to the cloud and back"
      className="relative mx-auto aspect-[46/40] w-full max-w-[520px]"
    >
      {/* white halo, like the glow behind Vercel's triangle */}
      <div className="bot-halo pointer-events-none absolute left-1/2 top-[60%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <svg viewBox="0 0 460 400" className="relative h-full w-full overflow-visible" aria-hidden="true">
        {/* the hop arc */}
        <path d={arc} fill="none" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="3 7" strokeLinecap="round" />
        <path
          className="bot-comet"
          d={arc}
          pathLength={100}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 200"
          strokeDashoffset="10"
          style={{ opacity: 0 }}
        />

        {/* laptop, left end */}
        <g transform="translate(18 308)" stroke="#171717" strokeWidth="1.75" fill="none" strokeLinejoin="round">
          <rect x="6" y="2" width="32" height="21" rx="3" fill="var(--surface)" />
          <path d="M0 27h44" strokeLinecap="round" />
        </g>
        <text x="40" y="358" textAnchor="middle" className="fill-[var(--muted)] font-mono text-[11px]">
          your mac
        </text>

        {/* cloud, right end */}
        <g transform="translate(398 306)" stroke="#171717" strokeWidth="1.75" fill="var(--surface)" strokeLinejoin="round">
          <path d="M11 26h24a8 8 0 000-16 11 11 0 00-21-2 9 9 0 00-3 18z" />
        </g>
        <text x="420" y="358" textAnchor="middle" className="fill-[var(--muted)] font-mono text-[11px]">
          cloud
        </text>

        {/* ground shadow */}
        <ellipse className="bot-shadow" cx="230" cy="338" rx="96" ry="7" fill="#000" opacity="0.16" />

        {/* the sprite */}
        <g transform={`translate(${230 - spriteW / 2} ${332 - spriteH})`} shapeRendering="crispEdges">
          <g className="bot-float">
            <g className="bot-hop bot-svg">
              {/* body */}
              {BODY.map(([r, a, b]) => (
                <rect key={`${r}-${a}`} {...px(a, r, b - a + 1)} fill={BOT} />
              ))}
              {/* eyes */}
              <rect className="bot-eye" {...px(7, 4, 1, 2)} fill="#0a0a0a" />
              <rect className="bot-eye" {...px(15, 4, 1, 2)} fill="#0a0a0a" />

              {/* laptop lid (back faces us) */}
              <rect {...px(5, 8, 13, 7)} fill="#171717" />
              <rect {...px(5, 8, 13, 1)} fill="#2b2b2b" />
              {LID_MARK.map(([c, r]) => (
                <rect key={`m${c}`} {...px(c, r)} fill="#fafafa" />
              ))}
              {/* laptop base */}
              <rect {...px(3, 15, 17, 1)} fill="#3a3a3a" />

              {/* paws on the keys */}
              <rect className="paw paw-a" {...px(6, 8, 2, 2)} fill={BOT} />
              <rect className="paw paw-b" {...px(15, 8, 2, 2)} fill={BOT} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

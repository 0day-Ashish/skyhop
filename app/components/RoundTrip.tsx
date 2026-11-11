type Box = { title: string; sub: string };
type Props = {
  lanes: string[];
  keyLine: string;
  handoff: Box;
  run: Box;
  resumed: Box;
  carry: Box;
  sync: Box;
  everyReply: string;
  home: Box;
  same: Box;
};

function Node({ box, highlight = false }: { box: Box; highlight?: boolean }) {
  return (
    <div
      className={`rounded-lg px-3 py-2.5 text-center ${
        highlight
          ? "bg-accent-soft shadow-[0_0_0_1.5px_var(--accent)]"
          : "bg-surface shadow-[0_0_0_1px_var(--border),0_1px_2px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="text-[13px] font-medium text-fg">{box.title}</div>
      <div className="mt-0.5 text-[12px] leading-4 text-muted">{box.sub}</div>
    </div>
  );
}

const Right = () => (
  <svg viewBox="0 0 24 8" className="h-2 w-full text-subtle" aria-hidden="true">
    <path d="M0 4h21M18 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
const Left = () => (
  <svg viewBox="0 0 24 8" className="h-2 w-full text-subtle" aria-hidden="true">
    <path d="M24 4H3M6 1L3 4l3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
const Down = () => (
  <svg viewBox="0 0 8 24" className="mx-auto h-6 w-2 text-subtle" aria-hidden="true">
    <path d="M4 0v21M1 18l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

/**
 * The round trip: Mac -> GitHub -> cloud, and back. Keeps the two facts the PRD requires:
 * the same session comes home, and the key goes straight to the cloud chat, never via GitHub.
 */
export function RoundTrip(p: Props) {
  return (
    <figure className="overflow-x-auto">
      <figcaption className="sr-only">
        Hand off from your Mac: code and an encrypted transcript go to a skyhop-run branch on GitHub, and the
        cloud resumes the real session. The key goes straight to the cloud chat, never through GitHub. After every
        reply, code and encrypted messages come back on skyhop-sync branches. At home, /resume opens the same
        session with the cloud&apos;s messages and code.
      </figcaption>
      <div
        aria-hidden="true"
        className="grid min-w-[620px] grid-cols-[1fr_28px_1fr_28px_1fr] items-center gap-y-1 p-5 sm:p-6"
      >
        {/* lane headers */}
        {p.lanes.map((l, i) => (
          <div
            key={l}
            style={{ gridColumn: i * 2 + 1 }}
            className="pb-2 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-subtle"
          >
            {l}
          </div>
        ))}

        {/* key line: Mac straight to cloud */}
        <div className="relative col-span-5 mb-2 flex h-8 items-center">
          <div className="absolute left-[16%] right-[16%] top-1/2 border-t border-dashed border-accent" />
          <span className="relative mx-auto bg-surface px-2 text-[11.5px] font-medium text-accent">{p.keyLine}</span>
          <svg viewBox="0 0 8 8" className="absolute right-[calc(16%-4px)] top-1/2 size-2 -translate-y-1/2 text-accent" aria-hidden="true">
            <path d="M1 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>

        <Node box={p.handoff} />
        <Right />
        <Node box={p.run} />
        <Right />
        <Node box={p.resumed} />

        <div style={{ gridColumn: 5 }}>
          <Down />
        </div>

        <div style={{ gridColumn: 5 }}>
          <Node box={p.carry} />
        </div>

        <div style={{ gridColumn: 5 }}>
          <Down />
        </div>

        <Node box={p.home} />
        <Left />
        <Node box={p.sync} />
        <Left />
        <div className="text-center font-mono text-[11.5px] text-muted">{p.everyReply}</div>

        <div style={{ gridColumn: 1 }}>
          <Down />
        </div>
        <div style={{ gridColumn: 1 }}>
          <Node box={p.same} highlight />
        </div>
      </div>
    </figure>
  );
}

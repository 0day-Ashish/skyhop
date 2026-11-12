type P = { className?: string };

export function GithubIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function CopyIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={className}>
      <rect x="5.25" y="5.25" width="8.5" height="8.5" rx="1" />
      <path d="M10.75 5.25V3.75a1.5 1.5 0 00-1.5-1.5h-5.5a1.5 1.5 0 00-1.5 1.5v5.5a1.5 1.5 0 001.5 1.5h1.5" />
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className={className}>
      <path d="M3 8.5l3.25 3.25L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={className}>
      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={className}>
      <path d="M3 8h10" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06" strokeLinecap="round" />
    </svg>
  );
}

export function MoonIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={className}>
      <path d="M13.5 9.6A5.75 5.75 0 016.4 2.5a5.75 5.75 0 107.1 7.1z" strokeLinejoin="round" />
    </svg>
  );
}

/** Skyhop mark: the hero bot's pixel-cloud head. Same art as app/icon.svg. */
export function SkyhopMark({ className = "size-6" }: P) {
  return (
    <svg viewBox="0 0.5 12 12" aria-hidden="true" className={className}>
      <g fill="#ea6c34" shapeRendering="crispEdges">
        <rect x="3" y="3" width="2" height="1" />
        <rect x="6" y="3" width="3" height="1" />
        <rect x="2" y="4" width="8" height="1" />
        <rect x="1" y="5" width="10" height="1" />
        <rect x="1" y="6" width="10" height="1" />
        <rect x="1" y="7" width="10" height="1" />
        <rect x="1" y="8" width="10" height="1" />
        <rect x="2" y="9" width="8" height="1" />
      </g>
      <g fill="#171717" shapeRendering="crispEdges">
        <rect x="4" y="6" width="1" height="2" />
        <rect x="7" y="6" width="1" height="2" />
      </g>
    </svg>
  );
}

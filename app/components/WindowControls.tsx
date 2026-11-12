"use client";

import { usePlatform } from "@/lib/platform";

/** The mockup windows' controls: Windows-style for Windows visitors, traffic lights for everyone else. */
export function WindowControls() {
  if (usePlatform() === "windows") {
    return (
      <span className="flex items-center gap-4 text-subtle" aria-hidden="true">
        <svg viewBox="0 0 10 10" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 5h10" />
        </svg>
        <svg viewBox="0 0 10 10" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="0.5" y="0.5" width="9" height="9" />
        </svg>
        <svg viewBox="0 0 10 10" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0.5 0.5l9 9M9.5 0.5l-9 9" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <span className="size-2.5 rounded-full bg-[#ff5f57]" />
      <span className="size-2.5 rounded-full bg-[#febc2e]" />
      <span className="size-2.5 rounded-full bg-[#28c840]" />
    </span>
  );
}

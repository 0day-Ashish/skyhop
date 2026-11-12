"use client";

import { useState } from "react";
import { usePlatform } from "@/lib/platform";
import { CopyBlock } from "./CopyBlock";

// id is "mac" or "windows", typed as string because it comes from content/site.json.
type Steps = { id: string; name: string; label: string; commands: string[]; note: string };

type Props = {
  platforms: Steps[];
  block: "hero" | "cta";
  className?: string;
};

/** Install commands for macOS or Windows, starting on the visitor's own system. */
export function InstallTabs({ platforms, block, className = "" }: Props) {
  const detected = usePlatform();
  const [picked, setPicked] = useState<string | null>(null);
  const active = platforms.find((p) => p.id === (picked ?? detected)) ?? platforms[0];

  return (
    <div className={`text-left ${className}`}>
      <div role="tablist" aria-label="Your system" className="mb-2 inline-flex gap-1 rounded-full bg-surface p-1 shadow-[0_0_0_1px_var(--border)]">
        {platforms.map((p) => {
          const selected = p.id === active.id;
          return (
            <button
              key={p.id}
              id={`${block}-tab-${p.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${block}-panel`}
              onClick={() => setPicked(p.id)}
              className={`h-7 rounded-full px-3 text-[13px] font-medium transition-colors ${
                selected ? "bg-fg text-on-fg" : "text-muted hover:text-fg"
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`${block}-panel`} aria-labelledby={`${block}-tab-${active.id}`}>
        <CopyBlock label={active.label} commands={active.commands} block={block} platform={active.id} />
        <p className="mt-2 text-[13px] leading-5 text-muted">{active.note}</p>
      </div>
    </div>
  );
}

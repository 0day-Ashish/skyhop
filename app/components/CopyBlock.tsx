"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";
import { CheckIcon, CopyIcon } from "./icons";

type Props = {
  label: string;
  commands: string[];
  block: "hero" | "cta";
  /** Which system's commands these are, for the copy event. */
  platform?: string;
  className?: string;
};

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

export function CopyBlock({ label, commands, block, platform, className = "" }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function onCopy() {
    const ok = await writeClipboard(commands.join("\n"));
    if (!ok) return;
    track("install_copy", platform ? { block, platform } : { block });
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface text-left shadow-[0_1px_0_rgba(0,0,0,0.04)] ${className}`}>
      <div className="flex h-10 items-center justify-between border-b border-line pl-4 pr-1.5">
        <span className="text-[13px] text-muted">{label}</span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-[13px] font-medium text-fg transition-colors hover:bg-tint"
        >
          {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Install commands copied to clipboard" : ""}
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-6">
        <code>
          {commands.map((c) => (
            <span key={c} className="block whitespace-pre">
              <span className="select-none text-subtle">{"> "}</span>
              {c}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

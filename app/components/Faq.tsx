"use client";

import { track } from "@/lib/track";
import { PlusIcon } from "./icons";

type Item = { id: string; q: string; a: string };

/** Native <details> keeps keyboard support (Enter/Space) for free; closed by default. */
export function Faq({ items }: { items: Item[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details
          key={item.id}
          className="group border-b border-line"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) track("faq_open", { question: item.id });
          }}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg tracking-[-0.01em] text-fg sm:text-xl">
            <h3 className="font-normal">{item.q}</h3>
            <span className="faq-icon inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted shadow-[0_0_0_1px_var(--border)] group-hover:text-fg">
              <PlusIcon className="size-4" />
            </span>
          </summary>
          <p className="max-w-2xl pb-6 pr-12 text-base leading-7 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

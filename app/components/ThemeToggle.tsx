"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";

const KEY = "skyhop-theme";

function savedTheme() {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Switches between the light and dark themes. The theme lives on <html data-theme>,
 * set before paint by the script in layout.tsx, so this keeps no React state and the
 * icons swap with CSS. Until the visitor picks one, the page follows the system setting.
 */
export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = () => {
      if (!savedTheme()) document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    };
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* the choice just isn't remembered */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
      className="inline-flex size-8 items-center justify-center rounded-full bg-surface text-fg shadow-[0_0_0_1px_var(--border)] transition-colors hover:bg-surface-hover"
    >
      <MoonIcon className="size-4 dark:hidden" />
      <SunIcon className="hidden size-4 dark:block" />
    </button>
  );
}

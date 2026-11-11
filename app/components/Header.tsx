"use client";

import { useEffect, useState } from "react";
import { GithubLink } from "./TrackedLink";
import { GithubIcon, SkyhopMark } from "./icons";

type Props = {
  name: string;
  repo: string;
  contact: string;
};

export function Header({ name, repo, contact }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/90 backdrop-blur-md transition-[box-shadow] ${
        scrolled ? "shadow-[0_1px_0_var(--border)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1448px] items-center gap-5 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-fg" aria-label={`${name} home`}>
          <SkyhopMark className="size-8" />
        </a>
        <GithubLink
          where="header-contact"
          href={contact}
          className="inline-flex h-8 items-center rounded-full bg-surface px-3 text-sm font-medium text-fg shadow-[0_0_0_1px_var(--border)] transition-colors hover:bg-black/[0.03]"
        >
          Contact
        </GithubLink>

        <div className="ml-auto flex items-center gap-2">
          <GithubLink
            where="header"
            href={repo}
            aria-label="GitHub"
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-surface px-2.5 text-sm font-medium text-fg shadow-[0_0_0_1px_var(--border)] transition-colors hover:bg-black/3 sm:px-3"
          >
            <GithubIcon className="size-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </GithubLink>
          <a
            href="#install"
            className="inline-flex h-8 items-center rounded-full bg-fg px-3 text-sm font-medium text-white transition-colors hover:bg-[#383838]"
          >
            Install
          </a>
        </div>
      </div>
    </header>
  );
}

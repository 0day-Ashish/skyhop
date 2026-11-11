"use client";

import { track } from "@/lib/track";

type Props = React.ComponentProps<"a"> & { where: string };

/** External GitHub link that fires github_click. */
export function GithubLink({ where, children, ...rest }: Props) {
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer" onClick={() => track("github_click", { where })}>
      {children}
    </a>
  );
}

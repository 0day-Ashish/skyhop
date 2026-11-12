import { useSyncExternalStore } from "react";

export type Platform = "mac" | "windows";

// The visitor's operating system, for showing the right install steps and window
// controls. Anything that isn't Windows gets the macOS version.
function detect(): Platform {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const name = nav.userAgentData?.platform || nav.platform || nav.userAgent || "";
  return /win/i.test(name) ? "windows" : "mac";
}

const noSubscription = () => () => {};

/** "mac" while rendering on the server and hydrating, then the visitor's real platform. */
export function usePlatform(): Platform {
  return useSyncExternalStore(noSubscription, detect, () => "mac");
}

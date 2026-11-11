// Cookie-free analytics hook. Works with Plausible (window.plausible) or Umami (window.umami)
// once one of their scripts is added; does nothing until then.
type Props = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props }) => void;
    umami?: { track: (event: string, data?: Props) => void };
  }
}

export function track(event: "install_copy" | "github_click" | "faq_open", props?: Props) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
    window.umami?.track(event, props);
  } catch {
    /* analytics must never break the page */
  }
}

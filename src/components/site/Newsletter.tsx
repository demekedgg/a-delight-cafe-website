import { useEffect, useRef } from "react";

// A Delight Coffee — Kit (ConvertKit) official JavaScript embed
// Account: a-delight-coffee · Form UID: fe166d098b
// Kit's officially recommended embed method. Loads Kit's own script,
// which renders a real Kit form that captures emails reliably.
const KIT_SCRIPT_SRC = "https://a-delight-coffee.kit.com/fe166d098b/index.js";
const KIT_UID = "fe166d098b";

export function Newsletter(_props: { variant?: "light" | "dark" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Avoid injecting the script twice if the component re-mounts.
    if (el.querySelector(`script[data-uid="${KIT_UID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = KIT_SCRIPT_SRC;
    script.setAttribute("data-uid", KIT_UID);
    el.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full max-w-xl kit-embed" />;
}

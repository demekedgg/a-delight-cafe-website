import logoAsset from "@/assets/adelight-logo.png.asset.json";
import patternDivider from "@/assets/pattern-divider.svg";

const logoMark = logoAsset.url;
export { logoMark, patternDivider };

/** The official A Delight Coffee logo (bean mark + wordmark, unmodified). */
export function MarkLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoMark}
      alt="A Delight Coffee"
      width={1024}
      height={1024}
      className={className}
    />
  );
}

/**
 * Header/nav lockup. The wordmark is baked into the logo image, so we render
 * the image alone — no adjacent text — and size it generously so the wordmark
 * stays legible at compact nav sizes.
 */
export function HorizontalLogo({
  className = "",
}: {
  className?: string;
  tone?: "cream" | "espresso";
}) {
  return (
    <img
      src={logoMark}
      alt="A Delight Coffee"
      width={1024}
      height={1024}
      className={`h-16 sm:h-20 w-auto ${className}`}
    />
  );
}

/** Ethiopian-inspired pattern divider — gold diamonds & dots */
export function PatternDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center text-gold ${className}`}>
      <img src={patternDivider} alt="" aria-hidden className="w-full max-w-md opacity-80" />
    </div>
  );
}

/** Three brand treatments — same official logo, different presentation surfaces. */
export const logoConcepts = [
  {
    id: "heritage",
    name: "Heritage Refined",
    description: "The signature logo on warm cream — the everyday brand voice.",
    bg: "bg-cream",
    text: "text-espresso-deep",
    accent: "text-gold",
    layout: "stacked" as const,
  },
  {
    id: "midnight",
    name: "Midnight Roast",
    description: "The logo on deep espresso — the brand at its most cinematic.",
    bg: "bg-espresso-deep",
    text: "text-cream",
    accent: "text-gold",
    layout: "stacked" as const,
  },
  {
    id: "golden",
    name: "Golden Hour",
    description: "Soft cream backdrop — perfect for packaging and print.",
    bg: "bg-cream-soft",
    text: "text-espresso-deep",
    accent: "text-gold",
    layout: "stacked" as const,
  },
] as const;

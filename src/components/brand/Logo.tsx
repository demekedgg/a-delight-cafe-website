import logoAsset from "@/assets/a-delight-logo.png.asset.json";
import patternDivider from "@/assets/pattern-divider.svg";

export const logoMark = logoAsset.url;
export { patternDivider };

/** The official A Delight logo (full lockup, used as-is from upload) */
export function MarkLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="A Delight Specialty Coffee · Pleasanton"
      className={className}
    />
  );
}

/** Horizontal lockup — uses the full uploaded logo as-is */
export function HorizontalLogo({
  className = "",
}: {
  className?: string;
  tone?: "cream" | "espresso";
}) {
  return (
    <img
      src={logoAsset.url}
      alt="A Delight Specialty Coffee · Pleasanton"
      className={`h-14 w-auto ${className}`}
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

/** Three brand lockup treatments from the official identity */
export const logoConcepts = [
  {
    id: "heritage",
    name: "Heritage Refined",
    description: "The signature lockup on warm cream — mark above stacked wordmark.",
    bg: "bg-cream",
    text: "text-espresso-deep",
    accent: "text-gold",
    layout: "stacked" as const,
  },
  {
    id: "midnight",
    name: "Midnight Roast",
    description: "Glowing gold on deep espresso — the brand at its most cinematic.",
    bg: "bg-espresso-deep",
    text: "text-cream",
    accent: "text-gold",
    layout: "stacked" as const,
  },
  {
    id: "golden",
    name: "Golden Hour",
    description: "Horizontal lockup on soft cream — perfect for headers and packaging.",
    bg: "bg-cream-soft",
    text: "text-espresso-deep",
    accent: "text-gold",
    layout: "horizontal" as const,
  },
] as const;

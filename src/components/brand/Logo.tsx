import logoMark from "@/assets/logo-mark.svg";
import patternDivider from "@/assets/pattern-divider.svg";

export { logoMark, patternDivider };

/** The official A Delight bean mark (gold + espresso) */
export function MarkLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoMark}
      alt="A Delight Cafe"
      width={120}
      height={156}
      className={className}
    />
  );
}

/** Horizontal lockup — "Golden Hour" treatment (mark + stacked wordmark) */
export function HorizontalLogo({
  className = "",
  tone = "cream",
}: {
  className?: string;
  tone?: "cream" | "espresso";
}) {
  const text = tone === "cream" ? "text-cream" : "text-espresso-deep";
  const sub = tone === "cream" ? "text-gold/85" : "text-gold";
  const rule = tone === "cream" ? "bg-gold/70" : "bg-gold";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img src={logoMark} alt="" width={56} height={72} className="h-12 w-auto shrink-0" />
      <div className="leading-none">
        <div className={`font-serif tracking-[0.18em] text-xl sm:text-2xl ${text}`}>
          A&nbsp;DELIGHT
        </div>
        <div className={`mt-1.5 h-px w-12 ${rule}`} />
        <div className={`mt-1.5 text-[0.55rem] sm:text-[0.6rem] tracking-[0.3em] uppercase ${sub}`}>
          Specialty Coffee · Pleasanton
        </div>
      </div>
    </div>
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

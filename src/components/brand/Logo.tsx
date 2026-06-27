import logoBean from "@/assets/logo-bean.svg";
import logoCup from "@/assets/logo-cup.svg";
import logoSun from "@/assets/logo-sun.svg";

export const logoConcepts = [
  {
    id: "bean",
    src: logoBean,
    name: "The Heritage Bean",
    description: "A single coffee bean engraved with Ethiopian-inspired geometry — a quiet nod to the land where coffee was born.",
  },
  {
    id: "cup",
    src: logoCup,
    name: "The Highland Cup",
    description: "A minimalist cup with a rising line of steam that traces the silhouette of the Ethiopian highlands.",
  },
  {
    id: "sun",
    src: logoSun,
    name: "The Origin Emblem",
    description: "A circular emblem uniting bean and sun — origin, warmth, and the ritual of the morning cup.",
  },
] as const;

export function MarkLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSun}
      alt="A Delight Cafe"
      width={64}
      height={64}
      className={className}
    />
  );
}

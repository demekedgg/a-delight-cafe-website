import { useEffect, useState } from "react";
import { HorizontalLogo } from "@/components/brand/Logo";

const links = [
  { href: "#story", label: "Story" },
  { href: "#coffee", label: "Coffee" },
  { href: "#experience", label: "Experience" },
  { href: "#coming-soon", label: "Coming Soon" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.18_0.025_50_/_0.85)] backdrop-blur-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-prose grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#top" className="flex min-w-0 items-center group">
          <HorizontalLogo tone="cream" className="transition-opacity duration-500 group-hover:opacity-80" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] tracking-[0.24em] uppercase text-cream/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#newsletter" className="btn-gold !py-2.5 !px-5 !text-[0.68rem]">
            Join List
          </a>
        </nav>

        <button
          className="md:hidden text-cream p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 17h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-espresso-deep border-t border-cream/10 mt-3">
          <nav className="container-prose flex flex-col py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-cream/85 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a href="#newsletter" onClick={() => setOpen(false)} className="btn-gold mt-2 self-start">
              Join Launch List
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

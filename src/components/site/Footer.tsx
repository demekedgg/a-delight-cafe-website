import { MarkLogo, PatternDivider } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-espresso-deep text-cream/80 pt-20 pb-10">
      <div className="container-prose">
        <PatternDivider className="mb-16 opacity-70" />
      </div>
      <div className="container-prose grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <MarkLogo className="h-24 w-auto" />
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
            Heritage Ethiopian coffee, brewed with intention. A new home for the
            ceremony of the cup, launching soon.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#story" className="hover:text-gold">Our Story</a></li>
            <li><a href="#coffee" className="hover:text-gold">Our Coffee</a></li>
            <li><a href="#experience" className="hover:text-gold">The Experience</a></li>
            <li><a href="#coming-soon" className="hover:text-gold">Coming Soon</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Contact</div>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:demeke@adelightcoffee.com" className="hover:text-gold">demeke@adelightcoffee.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container-prose mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-cream/50">
        <div>© {new Date().getFullYear()} A Delight Coffee · All rights reserved</div>
        <div>A Delight Coffee · Bay Area, California</div>
      </div>
    </footer>
  );
}


import { MarkLogo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-espresso-deep text-cream/80 pt-24 pb-10">
      <div className="container-prose grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <MarkLogo className="h-12 w-12" />
            <div>
              <div className="font-serif text-2xl text-cream">A Delight Cafe</div>
              <div className="text-[0.62rem] tracking-[0.3em] uppercase text-gold/80">Pleasanton · California</div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
            Heritage Ethiopian coffee, brewed with intention. A new home for the
            ceremony of the cup, opening soon in Pleasanton.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#story" className="hover:text-gold">Our Story</a></li>
            <li><a href="#coffee" className="hover:text-gold">Our Coffee</a></li>
            <li><a href="#experience" className="hover:text-gold">The Experience</a></li>
            <li><a href="#visit" className="hover:text-gold">Visit Us</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Follow</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gold">Instagram</a></li>
            <li><a href="#" className="hover:text-gold">Facebook</a></li>
            <li><a href="#" className="hover:text-gold">TikTok</a></li>
            <li><a href="mailto:hello@adelightcafe.com" className="hover:text-gold">hello@adelightcafe.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container-prose mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-cream/50">
        <div>© {new Date().getFullYear()} A Delight Cafe · All rights reserved</div>
        <div>Crafted in Pleasanton, CA</div>
      </div>
    </footer>
  );
}

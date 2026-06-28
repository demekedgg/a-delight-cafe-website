import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-coffee.jpg";
import beansImg from "@/assets/beans.jpg";
import storyImg from "@/assets/story.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Newsletter } from "@/components/site/Newsletter";
import { logoConcepts, MarkLogo, HorizontalLogo, PatternDivider } from "@/components/brand/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Delight Cafe — Ethiopian Specialty Coffee, Pleasanton" },
      { name: "description", content: "Heritage Ethiopian coffee — Yirgacheffe, Sidama, Guji. Opening soon in Pleasanton, California." },
      { property: "og:title", content: "A Delight Cafe — Ethiopian Specialty Coffee" },
      { property: "og:description", content: "Heritage Ethiopian coffee, opening soon in Pleasanton, California." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const origins = [
  {
    name: "Yirgacheffe",
    region: "Gedeo Zone · Southern Ethiopia",
    altitude: "1,800 – 2,200 m",
    notes: ["Jasmine", "Bergamot", "Stone fruit", "Honeyed finish"],
    description:
      "The benchmark for floral, tea-like Ethiopian coffee. Bright and lifted, with a perfume that lingers.",
  },
  {
    name: "Sidama",
    region: "Sidama Region · South Ethiopia",
    altitude: "1,500 – 2,200 m",
    notes: ["Blueberry", "Dark chocolate", "Citrus zest", "Silky body"],
    description:
      "A deeper, more rounded cup. Heirloom varietals processed naturally for a syrupy, fruit-forward profile.",
  },
  {
    name: "Guji",
    region: "Oromia · Southern Ethiopia",
    altitude: "1,900 – 2,400 m",
    notes: ["Peach", "Lavender", "Apricot", "Brown sugar"],
    description:
      "Grown at the highest altitudes, Guji offers complexity in layers — wild, elegant, and unmistakably Ethiopian.",
  },
];

function Home() {
  return (
    <div id="top" className="bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Pouring Ethiopian coffee"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/70 to-espresso-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-deep/70 via-transparent to-transparent" />

        <div className="relative container-prose pb-20 sm:pb-28 pt-40 w-full">
          <div className="max-w-3xl fade-up">
            <div className="flex items-center gap-4 mb-8">
              <span className="gold-rule" />
              <span className="eyebrow !text-gold-soft">Est. in Pleasanton · California</span>
            </div>
            <h1 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              The cup where coffee
              <span className="block italic text-gold mt-2">was born.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-cream/75 leading-relaxed">
              A Delight Cafe is a love letter to Ethiopia — the birthplace of coffee.
              Single-origin beans, ceremony-grade craft, brought home to Pleasanton.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#story" className="btn-gold">Discover the Story</a>
              <a href="#newsletter" className="btn-outline-cream">Join Launch List</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/60">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 sm:py-36 bg-cream">
        <div className="container-prose grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative">
            <img
              src={storyImg}
              alt="Traditional Ethiopian coffee ceremony"
              width={1400}
              height={1600}
              loading="lazy"
              className="w-full h-[520px] sm:h-[640px] object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:block w-40 h-40 border border-gold" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">Our Story</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-espresso-deep leading-[1.05]">
              A heritage <span className="italic text-gold">poured</span> from
              generation to generation.
            </h2>
            <div className="mt-8 space-y-5 text-[1.02rem] leading-[1.8] text-espresso/85">
              <p>
                Long before coffee filled cafés and offices around the world, it
                grew wild in the highlands of Ethiopia. Legend traces it to a
                shepherd named Kaldi, who watched his goats dance after eating
                the bright red cherries of a small tree.
              </p>
              <p>
                A thousand years later, coffee is still ritual at home. In every
                Ethiopian household, the <em>buna</em> ceremony slows the day —
                green beans roasted over coals, ground by hand, brewed in a
                clay <em>jebena</em>, and poured three times for guests.
              </p>
              <p>
                A Delight Cafe was born from that ceremony. We bring the
                farmers, the heirloom varietals, and the patience of the
                ritual to Pleasanton — without losing a single note along the way.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-espresso/15 flex items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-espresso-deep grid place-items-center font-serif text-gold text-xl">
                A
              </div>
              <div>
                <div className="font-serif text-lg text-espresso-deep">From the founder</div>
                <div className="text-sm text-espresso/65">Born in Ethiopia · Brewing in California</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COFFEE */}
      <section id="coffee" className="py-24 sm:py-36 bg-espresso-deep text-cream relative overflow-hidden">
        <img
          src={beansImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-deep via-espresso-deep/95 to-espresso-deep" />

        <div className="relative container-prose">
          <div className="max-w-2xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">Our Coffee</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Three origins.
              <span className="block italic text-gold">One birthplace.</span>
            </h2>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed">
              Every bean we serve is traceable to a single Ethiopian region —
              picked at peak ripeness and roasted to honor what the land already gave it.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {origins.map((o, i) => (
              <article
                key={o.name}
                className="group relative p-8 sm:p-10 border border-cream/15 hover:border-gold transition-colors duration-500 bg-espresso/30 backdrop-blur-sm"
              >
                <div className="text-[0.65rem] tracking-[0.3em] text-gold/80 mb-6">
                  N° 0{i + 1}
                </div>
                <h3 className="font-serif text-4xl text-cream mb-2">{o.name}</h3>
                <div className="text-xs tracking-wider text-cream/55 uppercase mb-6">
                  {o.region}
                </div>
                <p className="text-cream/75 text-sm leading-relaxed mb-8">
                  {o.description}
                </p>

                <div className="border-t border-cream/10 pt-6 space-y-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-cream/50 tracking-wider uppercase">Altitude</span>
                    <span className="text-gold-soft">{o.altitude}</span>
                  </div>
                  <div>
                    <div className="text-xs text-cream/50 tracking-wider uppercase mb-3">Tasting Notes</div>
                    <div className="flex flex-wrap gap-2">
                      {o.notes.map((n) => (
                        <span
                          key={n}
                          className="text-xs px-3 py-1 border border-cream/20 rounded-full text-cream/80"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE — coming soon */}
      <section id="experience" className="py-24 sm:py-36 bg-cream relative overflow-hidden">
        <div className="container-prose">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">The Experience · Coming Soon</span>
              <span className="gold-rule" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-espresso-deep leading-[1.05]">
              Design your cup.
              <span className="block italic text-gold mt-2">Learn its story.</span>
            </h2>
            <p className="mt-8 text-lg text-espresso/75 leading-relaxed max-w-2xl mx-auto">
              We're building an interactive coffee studio — a way to choose your
              origin, your roast, your method, and discover the people, soil,
              and altitude behind every choice. Powered by AI. Rooted in tradition.
            </p>

            <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto text-left">
              {[
                { step: "01", title: "Choose Origin", body: "Yirgacheffe, Sidama, Guji — or blend." },
                { step: "02", title: "Craft the Cup", body: "Roast level, brew method, milk and more." },
                { step: "03", title: "Learn the Story", body: "Meet the farm, taste the altitude." },
              ].map((s) => (
                <div key={s.step} className="p-8 bg-card border border-espresso/10">
                  <div className="font-serif text-gold text-2xl mb-3">{s.step}</div>
                  <div className="font-serif text-xl text-espresso-deep mb-2">{s.title}</div>
                  <div className="text-sm text-espresso/70 leading-relaxed">{s.body}</div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <a href="#newsletter" className="btn-gold">Be First to Try</a>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY / BRAND LOCKUPS */}
      <section className="py-24 sm:py-32 bg-cream-soft border-y border-espresso/10">
        <div className="container-prose">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">The Mark</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-espresso-deep leading-[1.1]">
              One bean. <span className="italic text-gold">Three moods.</span>
            </h2>
            <p className="mt-5 text-espresso/70 leading-relaxed">
              The A Delight mark carries an heirloom Ethiopian motif at its center
              — diamonds and dots drawn from traditional <em>tibeb</em> weaving,
              wrapped around the coffee bean that began it all.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {logoConcepts.map((c, i) => (
              <div key={c.id} className="group">
                <div className={`${c.bg} aspect-[3/4] grid place-items-center p-10 border border-espresso/10 overflow-hidden relative`}>
                  <div className={`absolute top-5 left-6 text-[0.55rem] tracking-[0.3em] uppercase ${c.accent} opacity-80`}>
                    0{i + 1} — {c.name}
                  </div>
                  {c.layout === "stacked" ? (
                    <div className="flex flex-col items-center text-center">
                      <div className={`font-serif tracking-[0.18em] text-2xl sm:text-3xl ${c.text}`}>
                        A&nbsp;DELIGHT
                      </div>
                      <MarkLogo className="mt-6 h-36 w-auto" />
                      <div className="mt-6 flex items-center gap-3">
                        <span className={`h-px w-6 ${c.accent === "text-gold" ? "bg-gold" : "bg-gold"}`} />
                        <span className={`text-[0.6rem] tracking-[0.3em] uppercase ${c.accent}`}>
                          Specialty Coffee · Pleasanton
                        </span>
                        <span className="h-px w-6 bg-gold" />
                      </div>
                    </div>
                  ) : (
                    <HorizontalLogo tone="espresso" className="scale-110" />
                  )}
                </div>
                <div className="mt-5">
                  <div className="text-[0.62rem] tracking-[0.3em] text-gold uppercase mb-2">Treatment 0{i + 1}</div>
                  <h3 className="font-serif text-2xl text-espresso-deep">{c.name}</h3>
                  <p className="mt-2 text-sm text-espresso/70 leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>

          <PatternDivider className="mt-20" />
        </div>
      </section>


      {/* VISIT */}
      <section id="visit" className="py-24 sm:py-36 bg-espresso text-cream">
        <div className="container-prose grid gap-16 lg:grid-cols-2 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">Visit Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Opening soon in
              <span className="block italic text-gold">Pleasanton, California.</span>
            </h2>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed max-w-md">
              A quiet corner of the Tri-Valley, reimagined as a home for
              Ethiopian coffee culture.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <div className="eyebrow !text-gold-soft mb-2">Location</div>
                <div className="font-serif text-2xl">Downtown Pleasanton</div>
                <div className="text-cream/65 text-sm mt-1">Address revealed at launch · Pleasanton, CA</div>
              </div>
              <div>
                <div className="eyebrow !text-gold-soft mb-2">Hours</div>
                <div className="grid grid-cols-2 max-w-sm gap-y-1 text-sm">
                  <div className="text-cream/65">Mon — Fri</div><div>6:30a — 6:00p</div>
                  <div className="text-cream/65">Saturday</div><div>7:00a — 7:00p</div>
                  <div className="text-cream/65">Sunday</div><div>7:00a — 4:00p</div>
                </div>
                <div className="text-xs text-cream/45 mt-2">Hours subject to change at opening.</div>
              </div>
              <div>
                <div className="eyebrow !text-gold-soft mb-2">Contact</div>
                <a href="mailto:hello@adelightcafe.com" className="block hover:text-gold transition-colors">hello@adelightcafe.com</a>
                <a href="tel:+15555555555" className="block text-cream/70 hover:text-gold transition-colors mt-1">(555) 555-5555</a>
              </div>
            </div>
          </div>

          <div className="aspect-[4/5] sm:aspect-[5/6] relative border border-cream/15 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_oklch(0.74_0.13_75_/_0.18),_transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center text-center p-10">
              <div>
                <svg className="mx-auto mb-6 text-gold" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div className="font-serif text-3xl text-cream mb-2">Pleasanton, CA</div>
                <div className="text-xs tracking-[0.3em] uppercase text-cream/55">Map coming at launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="py-24 sm:py-32 bg-cream">
        <div className="container-prose">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">Launch List</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-espresso-deep leading-[1.05]">
              The first cup is
              <span className="italic text-gold"> on us.</span>
            </h2>
            <p className="mt-6 text-lg text-espresso/75 leading-relaxed max-w-xl">
              Join our launch list for opening-day invites, early access to the
              interactive coffee studio, and stories from origin.
            </p>
            <div className="mt-10">
              <Newsletter />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

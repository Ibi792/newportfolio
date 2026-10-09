import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SparkleIcon } from "@/components/SparkleIcon";
import { extras, site, themes } from "@/lib/content";
import { contrastTextFor } from "@/lib/color";

export const metadata: Metadata = { title: "Extras · Isaac Isaac" };

export default function ExtrasPage() {
  const theme = themes.extras;

  return (
    <div
      className="min-h-screen"
      style={{ "--selection-bg": theme.heroAccent, "--selection-fg": contrastTextFor(theme.heroAccent) } as React.CSSProperties}
    >
      <Nav bg={theme.nav} ink={theme.navInk} />

      <section style={{ backgroundColor: theme.heroBg, color: theme.heroText }} className="px-6 py-16 text-center sm:px-10 md:py-20">
        <Reveal>
          <h1 className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl">
            {extras.heading}
          </h1>
        </Reveal>
      </section>

      <section style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }} className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-left">
            <h2 className="flex items-center gap-3 font-display text-3xl font-black uppercase tracking-tight" style={{ color: theme.bodyAccent }}>
              <SparkleIcon color="#F7DFA0" />
              {extras.motion.heading}
            </h2>
            <p className="mt-2 font-mono text-sm opacity-70">{extras.motion.subheading}</p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" stagger={0.05}>
            {extras.motion.items.map((item, i) => (
              <RevealItem key={i}>
                <div className="group relative transition-transform duration-300 hover:scale-105">
                  <div className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <video
                      src={item.video}
                      aria-label={item.alt}
                      className="aspect-video w-full bg-black/5 object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />

                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg border-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ borderColor: theme.bodyAccent }}
                      aria-hidden
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="font-mono text-xs text-white">{item.alt}</p>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute -right-2 -top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <SparkleIcon color={theme.bodyAccent} />
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="contact" style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }} className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight" style={{ color: theme.bodyAccent }}>
                {extras.contact.heading}
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed sm:text-base">{extras.contact.blurb}</p>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="font-display text-sm font-bold" style={{ color: theme.bodyAccent }}>
                    Phone
                  </p>
                  <p className="text-sm">{site.phone}</p>
                </div>
                <div>
                  <p className="font-display text-sm font-bold" style={{ color: theme.bodyAccent }}>
                    Email
                  </p>
                  <a href={`mailto:${site.email}`} className="underline-hover text-sm">
                    {site.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm ink={theme.bodyInk} accent={theme.bodyAccent} />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}

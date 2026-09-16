import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { ContactForm } from "@/components/ContactForm";
import { extras, site, themes } from "@/lib/content";

export const metadata: Metadata = { title: "Extras — Isaac Isaac" };

export default function ExtrasPage() {
  const theme = themes.extras;

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.ink }} className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.ink} />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-10 md:py-24">
        <Reveal>
          <h1 className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl">
            {extras.heading}
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <Reveal className="text-left">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight">
            {extras.motion.heading}
          </h2>
          <p className="mt-2 font-mono text-sm opacity-90">{extras.motion.subheading}</p>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" stagger={0.05}>
          {extras.motion.items.map((item, i) => (
            <RevealItem key={i}>
              <AssetImage
                src={item.image}
                alt={item.alt}
                color={theme.accent}
                className="aspect-video w-full rounded-lg object-cover"
                label={`Add motion clip ${i + 1}`}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight" style={{ color: theme.accent }}>
              {extras.contact.heading}
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed sm:text-base">{extras.contact.blurb}</p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="font-display text-sm font-bold" style={{ color: theme.accent }}>
                  Phone
                </p>
                <p className="text-sm">{site.phone}</p>
              </div>
              <div>
                <p className="font-display text-sm font-bold" style={{ color: theme.accent }}>
                  Email
                </p>
                <a href={`mailto:${site.email}`} className="underline-hover text-sm">
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm ink={theme.ink} />
          </Reveal>
        </div>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}

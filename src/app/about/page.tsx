import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { about, themes } from "@/lib/content";

export const metadata: Metadata = { title: "About — Isaac Isaac" };

export default function AboutPage() {
  const theme = themes.about;

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.ink }} className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.ink} />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 md:py-24">
        <Reveal>
          <h1
            className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl"
            style={{ color: theme.accent }}
          >
            {about.heading}
          </h1>

          <div className="mt-6 space-y-4 font-mono text-sm leading-relaxed sm:text-base">
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold">{about.workList.heading}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-sm">
              {about.workList.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-display text-xl font-bold">{about.interestsList.heading}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-sm">
              {about.interestsList.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex gap-2 font-display text-sm font-bold underline">
            {about.links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-50">|</span>}
                <a href={link.href} className="underline-hover">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-4" stagger={0.1}>
          {[1, 2, 3, 4].map((n) => (
            <RevealItem key={n}>
              <div className="aspect-square overflow-hidden rounded-xl border-2 border-white/20">
                <AssetImage
                  src={`/images/about/photo-${n}.jpg`}
                  alt={`Isaac photo ${n}`}
                  color={theme.accent}
                  className="h-full w-full object-cover"
                  label={`Add /public/images/about/photo-${n}.jpg`}
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-6xl border-t border-white/20 px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{about.skillsHeading}</h2>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <RevealGroup className="grid grid-cols-4 gap-3 sm:grid-cols-4" stagger={0.05}>
            {about.tools.map((tool) => (
              <RevealItem key={tool}>
                <div
                  className="flex aspect-square items-center justify-center rounded-xl text-center font-mono text-xs font-semibold"
                  style={{ backgroundColor: "#ffffff22", color: theme.ink }}
                  title={tool}
                >
                  {tool}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              {about.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}

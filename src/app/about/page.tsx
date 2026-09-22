import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CardStack } from "@/components/CardStack";
import { about, themes } from "@/lib/content";

export const metadata: Metadata = { title: "About — Isaac Isaac" };

export default function AboutPage() {
  const theme = themes.about;

  return (
    <div className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.navInk} />

      <section style={{ backgroundColor: theme.heroBg, color: theme.heroText }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 md:py-20">
          <Reveal>
            <h1 className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl" style={{ color: theme.heroAccent }}>
              {about.heading}
            </h1>

            <div className="mt-6 space-y-4 font-mono text-sm leading-relaxed sm:text-base">
              <p className="font-display text-lg font-medium normal-case not-italic leading-snug sm:text-xl">
                {about.bio[0]}
              </p>
              {about.bio.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl font-bold" style={{ color: theme.heroAccent }}>
                {about.workList.heading}
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-sm">
                {about.workList.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="font-display text-xl font-bold" style={{ color: theme.heroAccent }}>
                {about.interestsList.heading}
              </h2>
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

          <Reveal delay={0.1}>
            <CardStack
              accent={theme.heroAccent}
              photos={about.stackPhotoIds.map((n) => ({
                src: `/images/about/photo-${n}.jpg`,
                alt: `Isaac photo ${n}`,
                label: `Add /public/images/about/photo-${n}.jpg`,
              }))}
            />
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }} className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl" style={{ color: theme.bodyAccent }}>
              {about.skillsHeading}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <div>
              <Reveal>
                <p className="font-mono text-xs font-semibold uppercase tracking-wide opacity-60">Tools</p>
              </Reveal>
              <RevealGroup className="mt-3 flex flex-wrap gap-3" stagger={0.04}>
                {about.tools.map((tool) => (
                  <RevealItem key={tool}>
                    <span
                      className="inline-block rounded-full px-4 py-2 font-mono text-xs font-semibold"
                      style={{ backgroundColor: `${theme.bodyAccent}1A`, color: theme.bodyAccent }}
                    >
                      {tool}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.05}>
                <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-wide opacity-60">Skills</p>
              </Reveal>
              <RevealGroup className="mt-3 flex flex-wrap gap-3" stagger={0.04}>
                {about.coreSkills.map((skill) => (
                  <RevealItem key={skill}>
                    <span
                      className="inline-block rounded-full px-4 py-2 font-mono text-xs font-semibold text-white"
                      style={{ backgroundColor: theme.bodyAccent }}
                    >
                      {skill}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <Reveal delay={0.1}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wide opacity-60">Certifications</p>
              <ul className="mt-3 space-y-3">
                {about.certifications.map((cert) => (
                  <li key={cert.name} className="border-l-4 pl-4 text-sm leading-relaxed" style={{ borderColor: theme.bodyAccent }}>
                    {cert.name}{" "}
                    <span className="font-mono text-xs opacity-60">({cert.source})</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}

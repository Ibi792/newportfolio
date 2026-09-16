import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { fourddoCaseStudy as cs, themes } from "@/lib/content";

export function FourddoCaseStudy() {
  const theme = themes.caseStudy;

  return (
    <div style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }} className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.navInk} />

      {/* Hero */}
      <section style={{ backgroundColor: theme.heroBg, color: theme.heroText }} className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wide opacity-80">{cs.eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              {cs.title}
            </h1>

            <div className="mt-8 grid grid-cols-3 gap-6 font-mono text-sm">
              {cs.meta.map((m) => (
                <div key={m.label}>
                  <p className="opacity-70">{m.label.toUpperCase()}</p>
                  <p className="font-semibold">{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltedFrame rotate={-2} backdrop="#FFFFFF33" className="mt-10">
              <AssetImage
                src={cs.heroImage}
                alt={cs.title}
                color="#EEF0FB"
                className="h-80 w-full object-cover sm:h-[420px]"
                label="Add hero image"
              />
            </TiltedFrame>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={cs.shippedProductUrl}
              className="mt-6 flex items-center justify-between rounded-lg bg-white/10 px-6 py-4 font-mono text-sm font-semibold transition hover:bg-white/20"
            >
              View Shipped Product
              <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        {/* Fellowship */}
        <Reveal>
          <SectionHeading accent={theme.bodyAccent}>{cs.fellowship.heading}</SectionHeading>
          <div className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base">
            {cs.fellowship.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        {/* Overview */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.overview.heading}</SectionHeading>
          <div className="mt-6 space-y-6">
            {cs.overview.rows.map((row) => (
              <div key={row.label} className="grid gap-2 sm:grid-cols-[160px_1fr]">
                <p className="font-display text-sm font-bold" style={{ color: theme.bodyAccent }}>
                  {row.label}
                </p>
                <p className="text-sm leading-relaxed sm:text-base">{row.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Process */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.process.heading}</SectionHeading>
          <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.06}>
            {cs.process.steps.map((step) => (
              <RevealItem key={step}>
                <div
                  className="rounded-full border px-4 py-3 text-center font-display text-sm font-semibold italic"
                  style={{ borderColor: `${theme.bodyAccent}55`, color: theme.bodyAccent }}
                >
                  {step}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* User Research */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.userResearch.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.userResearch.intro}</p>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">
            {cs.userResearch.insightsIntro}
          </p>

          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {cs.userResearch.insights.map((insight) => (
              <RevealItem key={insight.title}>
                <div className="rounded-xl bg-white/60 p-5">
                  <p
                    className="inline-block rounded-md px-3 py-1 font-display text-sm font-bold"
                    style={{ backgroundColor: `${theme.bodyAccent}33`, color: theme.bodyAccent }}
                  >
                    {insight.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">{insight.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-8">
            <p className="font-display text-sm font-bold" style={{ color: theme.bodyAccent }}>
              {cs.userResearch.quote.label}
            </p>
            <blockquote
              className="mt-2 rounded-xl px-6 py-6 font-display text-lg italic"
              style={{ backgroundColor: "#1B1830", color: "#EEF0FB" }}
            >
              &ldquo;{cs.userResearch.quote.text}&rdquo;
              <footer className="mt-3 font-mono text-xs font-semibold not-italic opacity-70">
                -{cs.userResearch.quote.attribution}
              </footer>
            </blockquote>
          </Reveal>
        </Reveal>

        {/* Competitive Analysis */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.competitiveAnalysis.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.competitiveAnalysis.intro}</p>

          <RevealGroup className="mt-8 flex flex-col gap-4" stagger={0.08}>
            {cs.competitiveAnalysis.items.map((item) => (
              <RevealItem key={item.name}>
                <div className="rounded-xl p-6" style={{ backgroundColor: item.color, color: "#F4F2FA" }}>
                  <p className="font-display text-xl font-bold">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{item.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* Solution */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.solution.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.solution.intro}</p>

          <RevealGroup className="mt-8 flex flex-wrap gap-4" stagger={0.06}>
            {cs.solution.goals.map((goal) => (
              <RevealItem key={goal.title}>
                <div className="rounded-xl bg-white/60 px-5 py-4">
                  <p className="font-display text-sm font-bold" style={{ color: theme.bodyAccent }}>
                    {goal.title}
                  </p>
                  <p className="mt-1 text-xs opacity-80">{goal.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mt-8 text-sm leading-relaxed sm:text-base">{cs.solution.outro}</p>

          <Reveal delay={0.1} className="mt-6 overflow-hidden rounded-xl border border-black/10 bg-white">
            <AssetImage
              src={cs.solution.sitemapImage}
              alt="Fellows Hub sitemap"
              color={theme.bodyAccent}
              className="h-96 w-full object-contain"
              label="Add sitemap image"
            />
          </Reveal>
        </Reveal>

        {/* Prototype */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.prototype.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.prototype.intro}</p>

          <Reveal delay={0.1} className="mt-6 overflow-hidden rounded-xl">
            <AssetImage
              src={cs.prototype.desktopImage}
              alt="Fellows Hub desktop prototype"
              color={theme.bodyAccent}
              className="h-96 w-full object-cover"
              label="Add desktop prototype screenshot/video"
            />
          </Reveal>
          <Reveal delay={0.15} className="mt-6 grid grid-cols-2 gap-6">
            <AssetImage
              src={cs.prototype.mobileImage}
              alt="Fellows Hub mobile prototype"
              color={theme.bodyAccent}
              className="h-72 w-full rounded-xl object-cover"
              label="Add mobile prototype screenshot"
            />
            <AssetImage
              src={cs.prototype.desktopImage}
              alt="Fellows Hub prototype detail"
              color={theme.bodyAccent}
              className="h-72 w-full rounded-xl object-cover"
              label="Add prototype detail screenshot"
            />
          </Reveal>
        </Reveal>

        {/* Results */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.results.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.results.intro}</p>

          <div className="mt-6 space-y-6">
            {cs.results.items.map((item) => (
              <div key={item.label} className="grid gap-2 sm:grid-cols-[200px_1fr]">
                <p className="font-display text-sm font-bold" style={{ color: theme.bodyAccent }}>
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed sm:text-base">{cs.results.outro}</p>
        </Reveal>

        {/* Improvements */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.improvements.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.improvements.intro}</p>

          <Reveal delay={0.1} className="mt-6 overflow-hidden rounded-xl">
            <AssetImage
              src={cs.improvements.image}
              alt="Cohort section"
              color={theme.bodyAccent}
              className="h-96 w-full object-cover"
              label="Add cohort feature screenshot"
            />
          </Reveal>
        </Reveal>

        {/* Reflection */}
        <Reveal className="mt-16">
          <SectionHeading accent={theme.bodyAccent}>{cs.reflection.heading}</SectionHeading>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{cs.reflection.intro}</p>

          <div className="mt-6 space-y-4">
            {cs.reflection.lessons.map((lesson) => (
              <p key={lesson.title} className="text-sm leading-relaxed sm:text-base">
                <span className="font-display font-bold" style={{ color: theme.bodyAccent }}>
                  {lesson.title}
                </span>{" "}
                {lesson.detail}
              </p>
            ))}
          </div>

          <p className="mt-12 text-center font-display text-xl font-bold" style={{ color: theme.bodyAccent }}>
            {cs.reflection.thanks}
          </p>
          <p className="mt-4 text-center">
            <Link href="#top" className="underline-hover font-display font-bold" style={{ color: theme.bodyAccent }}>
              Back to top :D
            </Link>
          </p>
        </Reveal>
      </div>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}

function SectionHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl" style={{ color: accent }}>
      {children}
    </h2>
  );
}

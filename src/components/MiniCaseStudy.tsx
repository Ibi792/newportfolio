"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AssetImage } from "@/components/AssetImage";
import { Lightbox } from "@/components/Lightbox";

// Letterboxd's own brand trio (sampled from their real UI), used instead
// of the Projects page's pink accent since this piece is about their
// product specifically, not one of the main case studies.
const LB = {
  bg: "#14181C",
  ink: "#F1F5F8",
  green: "#00E054",
  orange: "#FF8000",
  blue: "#40BCF4",
};

// Same {{phrase}} highlight convention the main case studies use, just
// pointed at Letterboxd's orange instead of a per-case-study accent.
function hi(text: string) {
  return text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ color: LB.orange }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function SubHeading({ children }: { children: string }) {
  return (
    <p className="mt-12 font-mono text-xs font-bold uppercase tracking-wide" style={{ color: LB.green }}>
      {children}
    </p>
  );
}

function P({ children }: { children: string }) {
  return <p className="mt-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">{hi(children)}</p>;
}

export function MiniCaseStudy() {
  const [open, setOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Collapsing from the bottom button jumps back to the card's top so
  // the reader isn't left staring at whatever now sits where the long
  // write-up used to be.
  function collapse() {
    setOpen(false);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="overflow-hidden rounded-2xl" style={{ backgroundColor: LB.bg, color: LB.ink }} ref={topRef}>
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${LB.orange}, ${LB.green}, ${LB.blue})` }}
        aria-hidden
      />

      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${LB.green}22`, color: LB.green }}
          >
            Mini Case Study
          </span>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${LB.ink}15`, color: LB.ink }}
          >
            Self-Initiated, 3-Day Scope
          </span>
        </div>

        <h2 className="mt-4 font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
          Letterboxd Comments
        </h2>
        <p className="font-display text-sm font-bold italic" style={{ color: LB.orange }}>
          Designing for Dialogue, Not Dopamine
        </p>

        <p className="mt-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
          My Letterboxd review isn&apos;t just an accessory to the movie, sometimes I enjoy writing it more than
          the film itself. Unfortunately, I simply can&apos;t reply to comments.
        </p>

        <button
          type="button"
          onClick={() => (open ? collapse() : setOpen(true))}
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-semibold"
          style={{ color: LB.blue }}
        >
          {open ? "Show less" : "Read the write-up"}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} aria-hidden>
            ↓
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t pt-4" style={{ borderColor: `${LB.ink}22` }}>
                <SubHeading>Problem</SubHeading>
                <P>{`Logging favorites and reading reviews has become one of the many joys of the modern movie-going experience. Unfortunately, while I'm always looking for new spaces to commune about the arts, {{the Letterboxd comment section leaves plenty to be desired}}.`}</P>
                <p className="mt-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  I simply <em>can&apos;t</em> reply to comments. Not that it&apos;s difficult, not that doing so
                  would be uninteresting, {hi("{{there's just straight-up no feature for it}}")}. I can reply to
                  reviews but can&apos;t tag another user to follow up on an interesting thought, and even if I
                  could, they wouldn&apos;t be notified about it. I don&apos;t need the social feature kitchen sink
                  in my movie diary app, but I also wish it didn&apos;t feel like a brick wall.
                </p>
                <P>{`Luckily I'm a designer, and being confronted with these kinds of obstacles offers an opportunity for a bit of refurbishing.`}</P>

                <p
                  className="mt-5 border-l-2 pl-4 font-mono text-xs italic opacity-60"
                  style={{ borderColor: `${LB.orange}55` }}
                >
                  I deliberately chose a 3-day timeline for this study to prevent against scope creep.
                </p>

                <SubHeading>Research</SubHeading>
                <P>{`I interviewed three active Letterboxd users about how they actually used the comment section, whether they'd ever missed a comment they wanted to reply to, and whether they'd engage more if replying were actually possible.`}</P>
                <ul className="mt-5 space-y-4 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  <li>
                    {hi("{{Users already know the comment section is limited.}}")}{" "}
                    <em className="opacity-60">
                      &ldquo;For some reason it won&apos;t let me reply to comments. If it did let me reply, I
                      would.&rdquo;
                    </em>
                  </li>
                  <li>
                    {hi("{{People want to be notified of replies.}}")}{" "}
                    <em className="opacity-60">
                      &ldquo;I constantly miss comments I&apos;d love to reply to unless I happen to catch it on
                      opening the app. It&apos;s supposed to be a conversation.&rdquo;
                    </em>
                  </li>
                  <li>
                    {hi("{{New features could change behavior for the worse.}}")}{" "}
                    <em className="opacity-60">
                      &ldquo;If I could reply, it might be dangerous. I&apos;d get into so many arguments.&rdquo;
                    </em>
                  </li>
                </ul>

                <SubHeading>Competitive Analysis</SubHeading>
                <ul className="mt-5 space-y-4 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  <li>
                    <span style={{ color: LB.blue }}>Twitter</span> treats comments as equal to, sometimes more
                    important than, the original post, which breeds ratio culture and reply guys, not what I wanted
                    for a platform where the review should stay the focal point.
                  </li>
                  <li>
                    <span style={{ color: LB.blue }}>Reddit</span>&apos;s open-threaded replies and upvotes reward
                    longer, more helpful responses.
                  </li>
                  <li>
                    <span style={{ color: LB.blue }}>Goodreads</span> is the closest comparison in spirit,
                    review-first and comment-second, but
                    its comments can&apos;t be liked, replied to, or interacted with beyond reporting, and it shows.
                    Goodreads reviews get noticeably less engagement than reviews on other platforms.
                  </li>
                </ul>
                <P>{`Comments on other platforms are in service of a specific purpose. {{Twitter emphasizes the discourse, TikTok emphasizes the creator}}, and {{Letterboxd's comments are currently in service of nothing}}. The goal isn't to disincentivize discussion. It's to make sure discussion is the only incentive.`}</P>

                <div className="mt-8 overflow-hidden rounded-xl border" style={{ borderColor: `${LB.ink}22` }}>
                  <Lightbox src="/images/projects/letterboxd-screens.webp" alt="Final prototype screens">
                    <AssetImage
                      src="/images/projects/letterboxd-screens.webp"
                      alt="Final prototype screens"
                      color={LB.blue}
                      className="h-auto w-full object-contain"
                      label="Add prototype screens"
                    />
                  </Lightbox>
                </div>

                <SubHeading>The Fix</SubHeading>
                <P>{`A mini-threaded comment section with replies and likes only. No dislikes, no visible counts beyond the first comment in a thread, {{nothing that turns someone's review into a popularity contest}}. Once I started mapping the user flow, the hierarchy decisions got a lot easier to make.`}</P>

                <div
                  className="mt-8 overflow-hidden rounded-xl border bg-white p-3"
                  style={{ borderColor: `${LB.ink}22` }}
                >
                  <Lightbox src="/images/projects/letterboxd-flow.webp" alt="Comment reply user flow">
                    <AssetImage
                      src="/images/projects/letterboxd-flow.webp"
                      alt="Comment reply user flow"
                      color={LB.bg}
                      className="h-auto w-full object-contain"
                      label="Add user flow diagram"
                    />
                  </Lightbox>
                </div>

                <ul className="mt-8 list-disc space-y-2 pl-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  <li>Comments stay in the existing hierarchy, under the review, with {hi("{{a dedicated opt-in tap}}")}.</li>
                  <li>
                    Replies to a review keep the current full-screen flow, to encourage a considered response.
                    Replies to a comment use a lighter, Instagram-style threaded view instead.
                  </li>
                  <li>Only the first comment in a thread can be liked, to avoid farming for &ldquo;dunks.&rdquo;</li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-xl border" style={{ borderColor: `${LB.ink}22` }}>
                  <Lightbox src="/images/projects/letterboxd-comments.webp" alt="Comments, original vs. redesign">
                    <AssetImage
                      src="/images/projects/letterboxd-comments.webp"
                      alt="Comments, original vs. redesign"
                      color={LB.blue}
                      className="h-auto w-full object-contain"
                      label="Add comments comparison"
                    />
                  </Lightbox>
                </div>

                <SubHeading>Craft Details</SubHeading>
                <P>{`The reply field shows the replier's photo and a dynamic placeholder reminding them who they're replying to, {{small details meant to cut down on the wrong reply landing in the wrong thread}}. The existing formatting toolbar carries over too, so a reply gets the same bold, italic, and link tools a full review already has. Giving people access to the same tools hopefully pushes them toward {{the same level of thought and care in a reply that they'd put into a full review}}.`}</P>

                <div className="mt-8 grid gap-6">
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: `${LB.ink}22` }}>
                    <Lightbox src="/images/projects/letterboxd-reply-field.webp" alt="Reply field detail">
                      <AssetImage
                        src="/images/projects/letterboxd-reply-field.webp"
                        alt="Reply field detail"
                        color={LB.blue}
                        className="h-auto w-full object-contain"
                        label="Add reply field detail"
                      />
                    </Lightbox>
                  </div>
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: `${LB.ink}22` }}>
                    <Lightbox src="/images/projects/letterboxd-format-bar.png" alt="Format bar detail">
                      <AssetImage
                        src="/images/projects/letterboxd-format-bar.png"
                        alt="Format bar detail"
                        color={LB.blue}
                        className="h-auto w-full object-contain"
                        label="Add format bar detail"
                      />
                    </Lightbox>
                  </div>
                </div>

                <SubHeading>Reflection</SubHeading>
                <P>{`This seemingly innocuous case study idea opened my eyes to how we engage with social platforms, and just how fickle those design ecosystems are. I was forced to consider the subconscious ramifications of each domino I pushed, and in the process got a lot better at mentally mapping a system before touching it. I've always been a smorgasbord of experiences, {{taking the best existing ideas and spinning them into something new}}, and leaning into that when approaching systems is key to how I design.`}</P>
                <P>{`I strongly believe this is a topic that warrants more extensive user research. I can't prove as much as I'd like with a sample size this small, but there's a clear hunger for measured back-and-forth around film that Letterboxd is already serving, and it's worth asking if that audience could be served better. What's clear is that {{these decisions can't be made lightly, a bad apple here could spoil the whole batch}}.`}</P>
                <P>{`Given more time, I would've prototyped a few different comment structures and {{watched how each one actually changed behavior}}, instead of settling on one. I'd also have gone deeper on comment filtering, both as a convenience and as another lever for shaping how people interact with comments, and on accessibility, making sure none of this works against someone configuring the experience differently.`}</P>
                <P>{`This was a genuinely informative exercise in {{the tension between what a design does and how that function actually plays out in how people treat each other}}. It's a joy to get to scrutinize a system I actually love, and I'll be looking for more of my favorite features to pick apart like this.`}</P>
                <p className="mt-4 font-mono text-xs italic opacity-50">
                  Views are my own. Not affiliated with Letterboxd.
                </p>

                <button
                  type="button"
                  onClick={collapse}
                  className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-semibold"
                  style={{ color: LB.blue }}
                >
                  Show less
                  <span aria-hidden>↑</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

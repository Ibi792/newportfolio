"use client";

import { useState } from "react";
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

function SubHeading({ children }: { children: string }) {
  return (
    <p className="mt-8 font-mono text-xs font-bold uppercase tracking-wide" style={{ color: LB.green }}>
      {children}
    </p>
  );
}

export function MiniCaseStudy() {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl" style={{ backgroundColor: LB.bg, color: LB.ink }}>
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
          onClick={() => setOpen((v) => !v)}
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
              <div className="mt-2 border-t pt-2" style={{ borderColor: `${LB.ink}22` }}>
                <SubHeading>Problem</SubHeading>
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  My Letterboxd review isn&apos;t just an accessory to the movie. Sometimes I enjoy writing it more
                  than the film I just saw. Logging favorites and reading reviews has become one of the many joys
                  of the modern movie-going experience. Unfortunately, while I&apos;m always looking for new spaces
                  to commune about the arts, the Letterboxd comment section leaves plenty to be desired.
                </p>
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  I simply can&apos;t reply to comments. Not that it&apos;s difficult, not that doing so would be
                  uninteresting, there&apos;s just straight-up no feature for it. I can reply to reviews but
                  can&apos;t tag another user to follow up on an interesting thought, and even if I could, they
                  wouldn&apos;t be notified about it. I don&apos;t need the social feature kitchen sink in my movie
                  diary app, but I also wish it didn&apos;t feel like a brick wall.
                </p>
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  Luckily I&apos;m a designer, and being confronted with these kinds of obstacles offers an
                  opportunity for a bit of refurbishing. I deliberately chose a 3-day timeline for this study to
                  prevent against scope creep.
                </p>

                <SubHeading>Research</SubHeading>
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  I interviewed three active Letterboxd users about how they actually used the comment section,
                  whether they&apos;d ever missed a comment they wanted to reply to, and whether they&apos;d engage
                  more if replying were actually possible.
                </p>
                <ul className="mt-3 space-y-2 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  <li>
                    Users already know the comment section is limited. <em>&ldquo;For some reason it won&apos;t let
                    me reply to comments. If it did let me reply, I would.&rdquo;</em>
                  </li>
                  <li>
                    People want to be notified of replies. <em>&ldquo;I constantly miss comments I&apos;d love to
                    reply to unless I happen to catch it on opening the app. It&apos;s supposed to be a
                    conversation.&rdquo;</em>
                  </li>
                  <li>
                    New features could change behavior for the worse. <em>&ldquo;If I could reply, it might be
                    dangerous. I&apos;d get into so many arguments.&rdquo;</em>
                  </li>
                </ul>

                <SubHeading>Competitive Analysis</SubHeading>
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  Twitter treats comments as equal to, sometimes more important than, the original post, which
                  breeds ratio culture and reply guys. Not what I wanted for a platform where the review should
                  stay the focal point. Reddit&apos;s open-threaded replies and upvotes reward longer, more helpful
                  responses. Goodreads is the closest comparison in spirit, review-first and comment-second, but
                  its comments can&apos;t be liked, replied to, or interacted with beyond reporting, and it shows.
                  Goodreads reviews get noticeably less engagement than reviews on other platforms.
                </p>
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  Comments on other platforms are in service of a specific purpose. Twitter emphasizes the
                  discourse, TikTok emphasizes the creator, and Letterboxd&apos;s comments are currently in service
                  of nothing. The goal isn&apos;t to disincentivize discussion. It&apos;s to make sure discussion is
                  the only incentive.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border" style={{ borderColor: `${LB.ink}22` }}>
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
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  A mini-threaded comment section with replies and likes only. No dislikes, no visible counts
                  beyond the first comment in a thread, nothing that turns someone&apos;s review into a popularity
                  contest. Once I started mapping the user flow, the hierarchy decisions got a lot easier to make.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border bg-white p-3" style={{ borderColor: `${LB.ink}22` }}>
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

                <ul className="mt-6 list-disc space-y-1 pl-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  <li>Comments stay in the existing hierarchy, under the review, with a dedicated opt-in tap.</li>
                  <li>
                    Replies to a review keep the current full-screen flow, to encourage a considered response.
                    Replies to a comment use a lighter, Instagram-style threaded view instead.
                  </li>
                  <li>Only the first comment in a thread can be liked, to avoid farming for &ldquo;dunks.&rdquo;</li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl border" style={{ borderColor: `${LB.ink}22` }}>
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
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  The reply field shows the replier&apos;s photo and a dynamic placeholder reminding them who
                  they&apos;re replying to, small details meant to cut down on the wrong reply landing in the wrong
                  thread. The existing formatting toolbar carries over too, so a reply gets the same bold, italic,
                  and link tools a full review already has.
                </p>

                <div className="mt-6 grid gap-4">
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
                <p className="mt-3 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
                  The sample size was small, and I&apos;d want real usability testing before calling this done,
                  probably prototyping a few different comment structures and watching how each one actually
                  changes behavior. I&apos;d also want to dig into comment filtering and accessibility before
                  shipping anything like this for real. But the gap is real, and worth taking seriously.
                </p>
                <p className="mt-4 font-mono text-xs italic opacity-50">
                  Views are my own. Not affiliated with Letterboxd.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

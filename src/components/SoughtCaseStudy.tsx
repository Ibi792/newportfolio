"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AssetImage } from "@/components/AssetImage";
import { LazyVideo } from "@/components/LazyVideo";
import { Lightbox } from "@/components/Lightbox";
import { PhoneFilmstrip } from "@/components/PhoneFilmstrip";

// Sampled from Sought's own brand kit — dark navy, a bright cyan accent,
// and a cool off-white, instead of borrowing Letterboxd's palette.
const SO = {
  bg: "#101F25",
  ink: "#EDF4F4",
  accent: "#21D3ED",
  mist: "#D3DEE1",
};

function hi(text: string) {
  return text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ color: SO.accent }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function SubHeading({ children }: { children: string }) {
  return (
    <p className="mt-12 font-mono text-xs font-bold uppercase tracking-wide" style={{ color: SO.accent }}>
      {children}
    </p>
  );
}

function P({ children }: { children: string }) {
  return <p className="mt-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">{hi(children)}</p>;
}

const FIND_FLOW = [
  { src: "/images/projects/sought-find-1-confirm.png", label: "Confirm" },
  { src: "/images/projects/sought-find-2-searching.png", label: "Searching" },
  { src: "/images/projects/sought-find-3-guiding.png", label: "Guiding" },
  { src: "/images/projects/sought-find-4-found.png", label: "Found" },
];

export function SoughtCaseStudy() {
  const [open, setOpen] = useState(false);
  const [fullDemo, setFullDemo] = useState(false);
  const reduceMotion = useReducedMotion();
  const topRef = useRef<HTMLDivElement>(null);

  function collapse() {
    setOpen(false);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      id="sought"
      className="scroll-mt-24 overflow-hidden rounded-2xl"
      style={{ backgroundColor: SO.bg, color: SO.ink }}
      ref={topRef}
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: SO.accent }} aria-hidden />

      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${SO.accent}22`, color: SO.accent }}
          >
            Mini Case Study
          </span>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${SO.ink}15`, color: SO.ink }}
          >
            SwampHacks XII, 36-Hour Hackathon
          </span>
        </div>

        <h2 className="mt-4 font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">Sought</h2>
        <p className="font-display text-sm font-bold italic" style={{ color: SO.accent }}>
          Bringing Clarity to Your Spaces
        </p>
        <p className="mt-2 font-mono text-xs opacity-60">UI/UX Designer · Team of 2</p>

        <p className="mt-5 font-mono text-sm leading-relaxed opacity-90 sm:text-base">
          For someone with low vision or memory loss, a missing pair of slippers can mean minutes on hands and
          knees. I designed the app half of a rover that goes and finds them instead.
        </p>

        {/* A short muted loop sells the robot at a glance without anyone
            expanding the write-up; the full 17 MB demo only loads on request. */}
        <div className="relative mt-6 overflow-hidden rounded-xl border" style={{ borderColor: `${SO.ink}22` }}>
          {fullDemo ? (
            <video
              src="/images/projects/sought-demo.mp4"
              aria-label="Sought demo, SwampHacks XII"
              className="aspect-video h-auto w-full"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <>
              {reduceMotion ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/projects/sought-teaser-poster.jpg"
                  alt="The Soughtbot rover, an iPhone mounted above its camera and sensors"
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <LazyVideo
                  src="/images/projects/sought-teaser.mp4"
                  poster="/images/projects/sought-teaser-poster.jpg"
                  label="Soughtbot driving across a room while its tech stack is listed"
                  className="aspect-video w-full object-cover"
                />
              )}
              <button
                type="button"
                onClick={() => setFullDemo(true)}
                className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-bold shadow-lg transition-transform hover:scale-105 sm:bottom-4 sm:left-4"
                style={{ backgroundColor: SO.accent, color: SO.bg }}
              >
                ▶ Watch the full demo · 1:06
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => (open ? collapse() : setOpen(true))}
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-semibold"
          style={{ color: SO.accent }}
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
              <div className="mt-4 border-t pt-4" style={{ borderColor: `${SO.ink}22` }}>
                <SubHeading>Problem</SubHeading>
                <P>{`Losing your slippers is a small annoyance for most people. For someone with low vision or memory loss, it can mean a slow search on hands and knees, or waiting for someone else to help. {{We wanted a companion that knows the space, remembers where things are, and answers in plain words when you ask}}.`}</P>

                <SubHeading>What It Does</SubHeading>
                <P>{`Sought pairs Soughtbot, an automated rover, with an iPhone app. The rover drives your space and builds a map and a catalog of what it sees. It recognizes things by how they look, not by name, so {{the app asks you once}}, "Soughtbot found something near the front door. What is it?" Say "slippers," and from then on you can ask for them by name.`}</P>
                <P>{`Ask "find my slippers" and Sought answers out loud, "Last seen near the front door, 12 minutes ago," with a map. You can also drop your own pin on things Soughtbot can't see, "my remote is under the blue cushion," always marked as yours, never passed off as something the robot saw. {{In testing, Soughtbot found a navy backpack on its own from a plain-words request.}}`}</P>

                <div
                  className="mt-8 overflow-hidden rounded-xl border"
                  style={{ borderColor: `${SO.ink}22`, backgroundColor: `${SO.ink}08` }}
                >
                  <Lightbox src="/images/projects/sought-rover.jpg" alt="The Soughtbot rover">
                    <AssetImage
                      src="/images/projects/sought-rover.jpg"
                      alt="The Soughtbot rover, an iPhone mounted above its camera and sensors"
                      color={SO.accent}
                      className="h-auto max-h-[520px] w-full object-contain"
                      label="Add Soughtbot rover photo"
                    />
                  </Lightbox>
                </div>

                <SubHeading>How We Built It</SubHeading>
                <P>{`Two systems had to work as one. My teammate built an ESP32 to drive the rover's motors and read its ultrasonic sensors, with safety that doesn't trust the phone, a watchdog stops the motors if the connection goes quiet (measured at 0.28s against a 300ms limit), and the front sensor always wins. An iPhone mounted on the rover handles ARKit and LiDAR for position, while a Core ML CLIP model turns what the camera sees into searchable embeddings that {{never leave the phone}}. A FastAPI backend ties it together, and a Gemini planner turns plain-words requests into actions.`}</P>
                <P>{`I designed the app mock-first in Figma against that same contract, every screen worked end-to-end on labeled sample data before the robot was ever connected, then carried it to SwiftUI with frosted glass cards, a background that shifts with Soughtbot's state, and a splash built straight from the logo. {{Neither side had to wait on the other}}.`}</P>

                <SubHeading>The Find Flow</SubHeading>
                <P>{`Every find has the same four beats. Confirm what you're looking for, watch Soughtbot close the distance, feel it guide you in, and get a clear "found it." {{Haptics speed up as the distance drops}}, so the last few feet don't need your eyes at all.`}</P>

                <PhoneFilmstrip images={FIND_FLOW} accent={SO.accent} />

                <SubHeading>Accessibility</SubHeading>
                <P>{`Accessibility wasn't a pass at the end, it was the brief. Search works by voice or text, every step of a find is spoken aloud, and VoiceOver reads each card as one sentence, "Brown sandals, by the front door, seen 12 minutes ago. Double tap to find." {{Three of our own colors failed contrast checks, so we darkened them}}, rendered text now measures 6.0 to 8.9:1, with a dedicated high-contrast mode on top. Reduce Motion turns animations into fades, Reduce Transparency turns glass solid, and every screen reflows at the largest accessibility text sizes. I ran Apple's own accessibility audit across all 15 screens before submission, and it passes for touch target size, labels, and roles.`}</P>

                <div
                  className="mx-auto mt-8 max-w-[260px] overflow-hidden rounded-xl border"
                  style={{ borderColor: `${SO.ink}22` }}
                >
                  <Lightbox src="/images/projects/sought-settings.png" alt="Settings: sample data and high contrast">
                    <AssetImage
                      src="/images/projects/sought-settings.png"
                      alt="Settings screen showing the sample-data toggle and high contrast option"
                      color={SO.accent}
                      className="h-auto w-full object-contain"
                      label="Add Settings screen"
                    />
                  </Lightbox>
                </div>

                <SubHeading>Craft Details</SubHeading>
                <P>{`Home shows Soughtbot's live status and a map of what moved recently. The Item Log is the full catalog, searchable, pinned essentials up top, {{everything else organized by room}}.`}</P>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: `${SO.ink}22` }}>
                    <Lightbox src="/images/projects/sought-home.png" alt="Home screen">
                      <AssetImage
                        src="/images/projects/sought-home.png"
                        alt="Sought app Home screen"
                        color={SO.accent}
                        className="h-auto w-full object-contain"
                        label="Add Home screen"
                      />
                    </Lightbox>
                  </div>
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: `${SO.ink}22` }}>
                    <Lightbox src="/images/projects/sought-item-log.png" alt="Item Log screen">
                      <AssetImage
                        src="/images/projects/sought-item-log.png"
                        alt="Sought app Item Log screen"
                        color={SO.accent}
                        className="h-auto w-full object-contain"
                        label="Add Item Log screen"
                      />
                    </Lightbox>
                  </div>
                </div>

                <div
                  className="mt-8 overflow-hidden rounded-xl border bg-white p-3"
                  style={{ borderColor: `${SO.ink}22` }}
                >
                  <Lightbox src="/images/projects/sought-brand-kit.webp" alt="Sought brand kit">
                    <AssetImage
                      src="/images/projects/sought-brand-kit.webp"
                      alt="Sought logo, color palette, and type pairing"
                      color={SO.bg}
                      className="h-auto w-full object-contain"
                      label="Add brand kit"
                    />
                  </Lightbox>
                </div>

                <a
                  href="https://github.com/says1117/Sought"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold"
                  style={{ backgroundColor: SO.accent, color: SO.bg }}
                >
                  View the Code on GitHub ↗
                </a>

                <SubHeading>Challenges</SubHeading>
                <P>{`Two of us, a robot and an app, building toward one contract in 36 hours. Designing mock-first meant {{neither side waited on the other}}, and a shared message board kept decisions visible instead of living in someone's head. The robot's own problems, tracking, safety, and retrieval on a phone, not a dedicated board, were the hardest part of the weekend.`}</P>

                <SubHeading>Reflection</SubHeading>
                <P>{`Designing for low vision made the app better for everyone, plain words, one clear action per screen, and big targets all read faster at a glance regardless of who's looking. {{The bigger lesson was about honesty}}. Say exactly what's real, and label the rest. A system people trust to find their things has to earn that trust in how it talks about itself, not just in what it can do.`}</P>
                <P>{`What's next is finishing the link so a find or "come to me" sent from the app actually drives the robot (the app and server side are built, the robot's side is next), along with photo confirmation instead of typing, letting Soughtbot explore on its own, and a shared caregiver view for family.`}</P>

                <button
                  type="button"
                  onClick={collapse}
                  className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-semibold"
                  style={{ color: SO.accent }}
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

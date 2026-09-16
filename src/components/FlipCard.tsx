"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A click-to-flip 3D card: front and back are both always mounted, laid
 * on top of each other, and the whole thing rotates on the Y axis. Each
 * face has backface-visibility hidden so only one is ever legible.
 */
export function FlipCard({
  front,
  back,
  className,
  ariaLabel,
}: {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  ariaLabel: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  function toggle() {
    setFlipped((f) => !f);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  return (
    <div className={className} style={{ perspective: 1600 }}>
      <div
        role="button"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className="relative h-full w-full cursor-pointer outline-none"
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
            {front}
          </div>
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            {back}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

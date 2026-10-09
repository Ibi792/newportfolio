"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The same sparkle shape as the nav logo mark, given a slow continuous
 * twinkle (scale + wobble) since it sits as a static page accent rather
 * than something a user hovers to trigger. `float` adds a gentle bob on
 * top of the twinkle, for spots (like the hero card corners) that sit
 * among other floating stickers and should read as part of the same
 * group rather than the one static accent.
 */
export function SparkleIcon({
  color,
  size = 30,
  delay = 0,
  float = false,
}: {
  color: string;
  size?: number;
  delay?: number;
  float?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      className="shrink-0"
      animate={
        shouldReduceMotion
          ? undefined
          : { rotate: [-6, 8, -6], scale: [1, 1.15, 1], y: float ? [0, -6, 0] : 0 }
      }
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path d="M12 0c0 6-6 12-12 12 6 0 12 6 12 12 0-6 6-12 12-12-6 0-12-6-12-12Z" />
    </motion.svg>
  );
}

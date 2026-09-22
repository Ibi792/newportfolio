"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The same sparkle shape as the nav logo mark, given a slow continuous
 * twinkle (scale + wobble) since it sits as a static page accent rather
 * than something a user hovers to trigger.
 */
export function SparkleIcon({ color }: { color: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      className="shrink-0"
      animate={
        shouldReduceMotion
          ? undefined
          : { rotate: [-6, 8, -6], scale: [1, 1.15, 1] }
      }
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 0c0 6-6 12-12 12 6 0 12 6 12 12 0-6 6-12 12-12-6 0-12-6-12-12Z" />
    </motion.svg>
  );
}

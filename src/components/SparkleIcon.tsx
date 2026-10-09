"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParallax } from "@/components/MouseParallax";

/**
 * The same sparkle shape as the nav logo mark, given a slow continuous
 * twinkle (scale + wobble) since it sits as a static page accent rather
 * than something a user hovers to trigger. `float` adds a gentle bob on
 * top of the twinkle plus a small pointer-driven drift, for spots (like
 * the hero card corners) that sit among the other floating stickers and
 * should read as part of the same group rather than the one static
 * accent — wrapped in its own outer layer so the drift (a continuous
 * value from `useParallax`) and the twinkle's keyframe loop compose
 * instead of fighting over the same transform.
 */
export function SparkleIcon({
  color,
  size = 30,
  delay = 0,
  float = false,
  depth = 10,
}: {
  color: string;
  size?: number;
  delay?: number;
  float?: boolean;
  depth?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { x, y } = useParallax(float && !shouldReduceMotion ? depth : 0);

  const svg = (
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

  if (!float) return svg;

  return <motion.div style={{ x, y }}>{svg}</motion.div>;
}

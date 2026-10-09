"use client";

import { motion, useReducedMotion, useTransform } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useParallax } from "@/components/MouseParallax";

/**
 * A circular sticker badge (same visual language as the hero card's
 * "Open to Work" sticker) that bobs gently in place and drifts a
 * little with the pointer. Used to scatter personality badges around
 * the trading card's edges.
 *
 * Two nested motion elements, not one: the outer layer owns the
 * pointer-driven drift (a continuous value from `useParallax`, plus
 * `centerOffsetPx` for badges that need a fixed self-width correction
 * to sit truly centered), the inner layer owns the looping
 * bob/rotate. Both want to drive the same `x`/`y` transform, and a
 * single motion element can't cleanly mix a keyframe loop with an
 * independently-driven value on the same axis — nesting lets the two
 * transforms compose instead of fight.
 */
export function FloatingBadge({
  children,
  className,
  style,
  rotate = 0,
  centerOffsetPx = 0,
  duration = 2.8,
  delay = 0,
  depth = 10,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  rotate?: number;
  centerOffsetPx?: number;
  duration?: number;
  delay?: number;
  depth?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { x: parallaxX, y } = useParallax(shouldReduceMotion ? 0 : depth);
  const x = useTransform(parallaxX, (v) => v + centerOffsetPx);

  return (
    <motion.div aria-hidden className={className} style={{ ...style, x, y }}>
      <motion.div
        initial={{ rotate }}
        animate={shouldReduceMotion ? { rotate } : { rotate, y: [0, -6, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/**
 * A circular sticker badge (same visual language as the hero card's
 * "Open to Work" sticker) that bobs gently in place. Used to scatter
 * personality badges around the trading card's edges.
 *
 * Rotation and the optional horizontal re-center both have to go
 * through framer-motion's own `rotate`/`x` animation props rather
 * than a plain CSS `transform` in `style` — motion components own
 * the `transform` property for their animations and will silently
 * overwrite a manually-set one.
 */
export function FloatingBadge({
  children,
  className,
  style,
  rotate = 0,
  centerX = false,
  duration = 2.8,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  rotate?: number;
  centerX?: boolean;
  duration?: number;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const x = centerX ? "-50%" : 0;

  return (
    <motion.div
      aria-hidden
      className={className}
      style={style}
      initial={{ x, rotate }}
      animate={shouldReduceMotion ? { x, rotate } : { x, rotate, y: [0, -6, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

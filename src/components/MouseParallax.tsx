"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";

const ParallaxContext = createContext<{ x: MotionValue<number>; y: MotionValue<number> } | null>(null);

/**
 * Tracks the pointer across the whole window and exposes a single,
 * spring-smoothed -1..1 position to any descendant via `useParallax`.
 * One listener + one spring shared by every floating badge/sparkle
 * underneath, rather than each element re-deriving its own.
 */
export function MouseParallaxProvider({ children }: { children: ReactNode }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    function handlePointerMove(e: PointerEvent) {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [shouldReduceMotion, rawX, rawY]);

  return <ParallaxContext.Provider value={{ x, y }}>{children}</ParallaxContext.Provider>;
}

/**
 * Scales the shared pointer position into a small pixel drift for one
 * element. `depth` is how far that element travels at full tilt — give
 * elements that should feel "closer" a larger depth so the parallax
 * reads as layered rather than everything moving in lockstep. Safe to
 * call outside the provider (falls back to a static zero value).
 */
export function useParallax(depth: number) {
  const ctx = useContext(ParallaxContext);
  const fallback = useMotionValue(0);
  const x = useTransform(ctx?.x ?? fallback, (v) => v * depth);
  const y = useTransform(ctx?.y ?? fallback, (v) => v * depth);
  return { x, y };
}

import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

/**
 * Body copy — the real, final font. IBM Plex Sans is open-source so it's
 * self-hosted here with no licensing concerns.
 */
export const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Monospace accent — used for the small terminal-style labels
 * ("Hi, i'm Isaac but...", category tags, etc).
 */
export const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/**
 * Display / headline font — Integral CF, the real brand font (licensed
 * Desktop + Web files, not the Fontspring demo). No ExtraBold (800) file
 * was provided; browsers resolve a requested 800 to the nearest
 * registered weight (900) automatically, so `font-extrabold` still
 * renders a real cut rather than a faux-bolded one.
 */
export const displayFont = localFont({
  variable: "--font-display",
  src: [
    { path: "../../public/fonts/IntegralCF-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/IntegralCF-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/IntegralCF-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/IntegralCF-Heavy.ttf", weight: "900" },
  ],
  display: "swap",
});

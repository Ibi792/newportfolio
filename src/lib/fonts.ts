import { IBM_Plex_Sans, IBM_Plex_Mono, Archivo } from "next/font/google";

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
 * Display / headline font — PLACEHOLDER.
 *
 * The real brand headline font is Integral CF. It's a commercial font, so
 * before we can self-host it here we need woff2 files + a license that
 * covers self-hosting outside Framer. Until then, Archivo (900 weight) is
 * used as a free stand-in with a similar bold-geometric-grotesque feel.
 *
 * To swap in Integral CF once you have the files:
 *   1. Drop IntegralCF-Bold.woff2 (+ other weights) into /public/fonts/
 *   2. Replace this export with:
 *
 *      import localFont from "next/font/local";
 *      export const displayFont = localFont({
 *        variable: "--font-display",
 *        src: [
 *          { path: "../../public/fonts/IntegralCF-Bold.woff2", weight: "700" },
 *          { path: "../../public/fonts/IntegralCF-Heavy.woff2", weight: "900" },
 *        ],
 *        display: "swap",
 *      });
 *
 *   Nothing else in the codebase needs to change — every component reads
 *   the font through the --font-display CSS variable.
 */
export const displayFont = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

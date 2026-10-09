import { paper, paperInk } from "@/lib/content";

// WCAG relative luminance, used to pick readable text color against an
// arbitrary accent background (e.g. themed text-selection highlights,
// where accents range from pale gold to dark ink).
function relativeLuminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [lr, lg, lb] = [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

export function contrastTextFor(accent: string) {
  return relativeLuminance(accent) > 0.4 ? paperInk : paper;
}

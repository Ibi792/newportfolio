import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 is Next's default; 90 keeps text and UI detail in project
    // thumbnails crisp, which the default re-encode visibly softens.
    qualities: [75, 90],
  },
};

export default nextConfig;

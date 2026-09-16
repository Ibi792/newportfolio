import type { Metadata } from "next";
import { bodyFont, monoFont, displayFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Isaac — User Experience Designer",
  description: "Designing experiences with intention, honesty, and a touch of whimsy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${monoFont.variable} ${displayFont.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

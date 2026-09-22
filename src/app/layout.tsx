import type { Metadata } from "next";
import { bodyFont, monoFont, displayFont } from "@/lib/fonts";
import "./globals.css";

const title = "Isaac Isaac · User Experience Designer";
const description = "Designing experiences with intention, honesty, and a touch of whimsy.";
const siteUrl = "https://friendscallmeibi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Friends Call Me Ibi",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
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

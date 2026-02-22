import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "craftgarden.studio — Crafting digital products with AI and passion",
  description:
    "A solo builder's studio creating digital products powered by AI. Explore tools, apps, and content platforms built with Next.js, Flutter, Claude, and more.",
  metadataBase: new URL("https://craftgarden.studio"),
  openGraph: {
    title: "craftgarden.studio",
    description: "Crafting digital products with AI and passion.",
    siteName: "craftgarden.studio",
    locale: "ja_JP",
    type: "website",
    url: "https://craftgarden.studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "craftgarden.studio",
    description: "Crafting digital products with AI and passion.",
  },
  alternates: {
    canonical: "https://craftgarden.studio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}

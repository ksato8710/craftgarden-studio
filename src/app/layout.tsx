import type { Metadata } from "next";
import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "craftgarden.studio — Plant ideas. Watch them grow. Have fun.",
  description:
    "A solo craft garden crafting tools, products, and content with curiosity and care. Every project starts as a tiny seed.",
  metadataBase: new URL("https://craftgarden.studio"),
  openGraph: {
    title: "craftgarden.studio",
    description: "Plant ideas. Watch them grow. Have fun.",
    siteName: "craftgarden.studio",
    locale: "ja_JP",
    type: "website",
    url: "https://craftgarden.studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "craftgarden.studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "craftgarden.studio",
    description: "Plant ideas. Watch them grow. Have fun.",
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
    <html lang="ja" className={`${dmSans.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

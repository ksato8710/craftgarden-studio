import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Craftyard Studio",
  description: "Crafting digital products with AI and passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className="min-h-screen bg-surface-950 text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}

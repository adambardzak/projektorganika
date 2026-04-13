import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "./CookieBanner";
import { Analytics } from "./Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Projekt Organika™ — Systém pro experty ve zdraví",
  description:
    "3denní online trénink pro experty ve zdraví. Získej systém, díky kterému experti získali z 0 na 10 000+ sledujících a 20+ klientů za 40 dnů. Bez reklam. Bez agentury. Jen přes telefon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

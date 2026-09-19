import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/lib/cart";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veloura Pâtisserie — Baked beautifully. Made to be remembered.",
  description:
    "Discover handcrafted pastries, artisan bread, delicate cakes and freshly baked creations from Veloura Pâtisserie.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Veloura Pâtisserie",
    description:
      "Handcrafted pastries, delicate cakes, and warm bread made fresh every day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-cream text-espresso font-body antialiased selection:bg-caramel/30 selection:text-espresso">
        <CartProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}

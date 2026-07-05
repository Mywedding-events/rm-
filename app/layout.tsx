import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Ramy & Mary Wedding Invitation",
  description: "Digital wedding invitation for Ramy Karam and Mary Haddad on Sunday, August 23, 2026.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${greatVibes.variable}`}>{children}</body>
    </html>
  );
}

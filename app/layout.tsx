import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import Navigation from "@/components/navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "MI+ | Product Showcase",
  description:
    "Discover the Essence of MI+ - Elevate your experience with our curated product collection",
  bookmarks: "Mi+",
  creator: "ISCE Digital Concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>
        <NextTopLoader color="#e82b05" showSpinner={false} />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

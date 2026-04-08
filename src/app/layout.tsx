import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Key Scales | AI Made Simple. One Build at a Time.",
  description:
    "Key Scales builds AI solutions for real businesses and teaches you how to do the same. Websites, automations, agents, SOPs. No fluff, just results.",
  keywords:
    "Key Scales, Key Builds AI, AI automation, AI tutorials, build with AI, small business AI",
  authors: [{ name: "Key Scales" }],
  openGraph: {
    title: "Key Scales | AI Made Simple. One Build at a Time.",
    description:
      "Follow Key Scales for free AI tips, real builds, and step-by-step breakdowns.",
    siteName: "Key Builds AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Scales | AI Made Simple",
    description:
      "Free AI tips, real builds, no fluff. Follow Key Scales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-white font-sans">
        {children}
      </body>
    </html>
  );
}

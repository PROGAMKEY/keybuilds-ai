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
  metadataBase: new URL("https://keybuilds.ai"),
  title: "Key Scales | AI Made Simple. One Build at a Time.",
  description:
    "Key Scales builds custom AI solutions for entrepreneurs and small businesses. Websites, automations, AI agents, SOPs, and SEO. Free AI tips every week.",
  keywords: [
    "Key Scales",
    "Key Builds AI",
    "AI automation for business",
    "AI website builder",
    "custom AI agents",
    "AI tutorials for beginners",
    "build with AI",
    "small business AI solutions",
    "Claude Code",
    "AI SOP generator",
    "AI consultant",
  ],
  authors: [{ name: "Key Scales", url: "https://keybuilds.ai" }],
  creator: "Key Scales",
  publisher: "Key Builds AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://keybuilds.ai",
  },
  openGraph: {
    title: "Key Scales | AI Made Simple. One Build at a Time.",
    description:
      "Follow Key Scales for free AI tips, real builds, and step-by-step breakdowns. Websites, automations, agents, SOPs built with AI.",
    url: "https://keybuilds.ai",
    siteName: "Key Builds AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Key Scales - AI Made Simple. One Build at a Time.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Scales | AI Made Simple. One Build at a Time.",
    description:
      "Free AI tips, real builds, no fluff. Follow Key Scales.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  other: {
    "theme-color": "#030303",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Key Scales",
              url: "https://keybuilds.ai",
              jobTitle: "AI Builder and Educator",
              description:
                "Teaching entrepreneurs how to use AI to build, automate, and scale their businesses.",
              knowsAbout: [
                "Artificial Intelligence",
                "Web Development",
                "Automation",
                "Claude Code",
                "SEO",
                "Business Strategy",
              ],
              sameAs: [
                "https://www.linkedin.com/in/keym/",
                "https://www.instagram.com/keybuilds.ai/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Key Builds AI",
              url: "https://keybuilds.ai",
              description:
                "AI implementation studio that builds custom websites, automations, AI agents, and SOPs for entrepreneurs and small businesses.",
              founder: {
                "@type": "Person",
                name: "Key Scales",
              },
              areaServed: "Worldwide",
              serviceType: [
                "AI Automation",
                "Website Development",
                "AI Agent Development",
                "SOP Generation",
                "SEO Optimization",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030303] text-white font-sans">
        {children}
      </body>
    </html>
  );
}

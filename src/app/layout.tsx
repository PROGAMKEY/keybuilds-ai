import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keybuilds.ai"),
  title: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
  description:
    "Key Scales builds with AI every day — websites, automations, agents, custom skills, and shipped products. Anyone can learn AI. The gate is intimidation. I burn the gate.",
  keywords: [
    "Key Scales",
    "Key Builds AI",
    "AI authority",
    "AI builder",
    "responsible AI",
    "AI for entrepreneurs",
    "ship with AI",
    "Claude Code",
    "Anthropic",
    "ChatGPT",
    "Perplexity",
    "Gemini",
    "AI skills",
    "AI agents",
    "AI automation",
  ],
  authors: [{ name: "Key Scales", url: "https://keybuilds.ai" }],
  creator: "Key Scales",
  publisher: "Key Builds AI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://keybuilds.ai" },
  openGraph: {
    title: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
    description:
      "Authority you can talk to. Builder who ships. Follow Key Scales for templates, skills, and the time AI buys you back.",
    url: "https://keybuilds.ai",
    siteName: "Key Builds AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
    description:
      "Authority you can talk to. Builder who ships. Follow Key Scales.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0C0E0D",
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
      className={`${geist.variable} ${interTight.variable} ${geistMono.variable} dark h-full antialiased`}
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
              jobTitle: "AI Builder, Educator, and Authority",
              description:
                "Builder-educator hybrid. Ships AI products and teaches people to build responsibly. Founder of Key Builds AI and Key's Touch.",
              knowsAbout: [
                "Artificial Intelligence",
                "Anthropic Claude",
                "OpenAI ChatGPT",
                "Google Gemini",
                "Perplexity",
                "Claude Code",
                "Web Development",
                "Automation",
                "Responsible AI",
                "Prompt Engineering",
                "AI Agents",
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
                "Personal brand of Key Scales — AI authority, builder, and educator. Templates, skills, digital products, speaking, brand deals.",
              founder: { "@type": "Person", name: "Key Scales" },
              areaServed: "Worldwide",
              serviceType: [
                "AI Education",
                "AI Templates and Skills",
                "AI Speaking and Brand Deals",
                "AI Product Development",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0C0E0D] text-[#EDE9DF] font-sans">
        {children}
      </body>
    </html>
  );
}

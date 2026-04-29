import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Inter_Tight, Instrument_Serif } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
    variable: "--font-editorial",
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
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
                  className={`${geist.variable} ${interTight.variable} ${geistMono.variable} ${instrumentSerif.variable} dark h-full antialiased`}
                >
                <head>
                  {/* Google Tag Manager */}
                        <Script
                                    id="gtm-script"
                                    strategy="afterInteractive"
                                    dangerouslySetInnerHTML={{
                                                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                                  })(window,document,'script','dataLayer','GTM-WZ5Z5J46');`,
                                    }}
                                  />
                        <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                                  __html: JSON.stringify({
                                                                  "@context": "https://schema.org",
                                                                  "@type": "Person",
                                                                  name: "Key Scales",
                                                                  url: "https://keybuilds.ai",
                                                                  image: "https://keybuilds.ai/avatar.png",
                                                                  jobTitle: "AI Builder, Educator, and Authority",
                                                                  alternateName: "Key Builds AI",
                                                                  description:
                                                                                    "Builder-educator hybrid. Ships AI products and teaches people to build responsibly. Founder of Key Builds AI and Key's Touch. Builds 1:1 tutoring, AI audits, custom AI personal assistants (Apex), and booking systems for small businesses.",
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
                                                                                    "AI Personal Assistants",
                                                                                    "Booking Systems",
                                                                                    "Custom GPTs",
                                                                                    "Notion",
                                                                                    "MCP servers",
                                                                                  ],
                                                                  hasOccupation: {
                                                                                    "@type": "Occupation",
                                                                                    name: "AI Builder and Educator",
                                                                                    skills:
                                                                                                        "Claude Code, ChatGPT, Gemini, Perplexity, Next.js, Vercel, MCP, prompt engineering, AI product development",
                                                                  },
                                                                  worksFor: [
                                                                    {
                                                                                        "@type": "Organization",
                                                                                        name: "Key Builds AI",
                                                                                        url: "https://keybuilds.ai",
                                                                    },
                                                                    {
                                                                                        "@type": "Organization",
                                                                                        name: "Key's Touch",
                                                                                        url: "https://keystouch.com",
                                                                    },
                                                                                  ],
                                                                  sameAs: [
                                                                                    "https://www.linkedin.com/in/keym/",
                                                                                    "https://www.instagram.com/keybuilds.ai/",
                                                                                    "https://keystouch.com",
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
                                                                  logo: "https://keybuilds.ai/brand-assets/logo-mark/on-onyx/512.png",
                                                                  image: "https://keybuilds.ai/og-image.png",
                                                                  description:
                                                                                    "Personal brand of Key Scales — AI authority, builder, and educator. 1:1 AI tutoring, AI audits, Q&A office hours, speaking and brand deals, templates and digital products, Apex custom personal assistants, and booking systems for small businesses.",
                                                                  founder: { "@type": "Person", name: "Key Scales" },
                                                                  areaServed: "Worldwide",
                                                                  email: "key@keybuilds.ai",
                                                                  priceRange: "$$",
                                                                  serviceType: [
                                                                                    "AI Education",
                                                                                    "AI Tutoring",
                                                                                    "AI Audit",
                                                                                    "AI Office Hours",
                                                                                    "AI Speaking",
                                                                                    "AI Brand Deals",
                                                                                    "AI Templates and Digital Products",
                                                                                    "Custom AI Personal Assistants",
                                                                                    "Booking Systems for Small Businesses",
                                                                                    "AI Product Development",
                                                                                  ],
                                                                  hasOfferCatalog: {
                                                                                    "@type": "OfferCatalog",
                                                                                    name: "Key Builds AI Services",
                                                                                    itemListElement: [
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: { "@type": "Service", name: "1:1 AI tutoring" },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: { "@type": "Service", name: "AI audit" },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Service",
                                                                                                                                    name: "Office hours / Q&A",
                                                                                                              },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Service",
                                                                                                                                    name: "Speaking and brand deals",
                                                                                                              },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Service",
                                                                                                                                    name: "Templates and digital products",
                                                                                                              },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Service",
                                                                                                                                    name: "Apex personal assistants",
                                                                                                              },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Service",
                                                                                                                                    name: "Booking systems for small businesses",
                                                                                                              },
                                                                                        },
                                                                                                      ],
                                                                  },
                                                  }),
                                    }}
                                  />
                        <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                                  __html: JSON.stringify({
                                                                  "@context": "https://schema.org",
                                                                  "@type": "WebSite",
                                                                  name: "Key Builds AI",
                                                                  url: "https://keybuilds.ai",
                                                                  alternateName: ["Key Scales", "KBAi"],
                                                                  publisher: { "@type": "Person", name: "Key Scales" },
                                                                  inLanguage: "en-US",
                                                                  potentialAction: {
                                                                                    "@type": "SubscribeAction",
                                                                                    target: "https://keybuilds.ai/#subscribe",
                                                                  },
                                                  }),
                                    }}
                                  />
                </head>
                <body className="min-h-full flex flex-col bg-[#0C0E0D] text-[#EDE9DF] font-sans relative">
                  {/* Google Tag Manager (noscript) */}
                        <noscript>
                                  <iframe
                                                src="https://www.googletagmanager.com/ns.html?id=GTM-WZ5Z5J46"
                                                height="0"
                                                width="0"
                                                style={{ display: "none", visibility: "hidden" }}
                                              />
                        </noscript>
                        <div className="grain-overlay" aria-hidden />
                  {children}
                </body>
          </html>
        );
}

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
    title: {
          default: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
          template: "%s · Key Builds AI",
    },
    description:
          "I don't sell AI hype. I sell AI you can ship. Full stack software engineer + Certified Solutions AI Architect. 1:1 AI tutoring, AI audits, custom AI assistants, booking systems, templates.",
    applicationName: "Key Builds AI",
    keywords: [
          "Key Builds AI",
          "AI authority",
          "AI tutor",
          "AI tutoring",
          "AI audit",
          "AI builder",
          "AI educator",
          "responsible AI",
          "AI for entrepreneurs",
          "AI for small business",
          "ship with AI",
          "Claude Code",
          "Anthropic Claude",
          "OpenAI ChatGPT",
          "Perplexity",
          "Google Gemini",
          "Cursor IDE",
          "OpenAI Codex",
          "Windsurf",
          "GitHub Copilot",
          "Zapier",
          "n8n",
          "AI skills",
          "AI agents",
          "AI automation",
          "AI personal assistant",
          "Apex AI assistant",
          "booking system",
          "Notion templates",
          "Custom GPT",
          "Solutions AI Architect",
          "Data AI Governance",
        ],
    authors: [{ name: "Key Builds AI", url: "https://keybuilds.ai" }],
    creator: "Key Builds AI",
    publisher: "Key Builds AI",
    category: "Technology",
    classification: "AI Education and Software Engineering",
    robots: {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
                  index: true,
                  follow: true,
                  noimageindex: false,
                  "max-video-preview": -1,
                  "max-image-preview": "large",
                  "max-snippet": -1,
          },
    },
    alternates: {
          canonical: "https://keybuilds.ai",
          languages: { "en-US": "https://keybuilds.ai" },
    },
    manifest: "/manifest.json",
    openGraph: {
          title: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
          description:
                  "Full stack software engineer + Certified Solutions AI Architect. 1:1 AI tutoring, AI audits, custom AI assistants, booking systems, templates. Authority you can talk to.",
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
                      type: "image/png",
            },
                ],
    },
    twitter: {
          card: "summary_large_image",
          site: "@keybuildsai",
          creator: "@keybuildsai",
          title: "Key Builds AI — I don't sell AI hype. I sell AI you can ship.",
          description:
                  "Full stack engineer + Certified Solutions AI Architect. 1:1 tutoring, audits, custom AI assistants, booking systems, templates.",
          images: ["/og-image.png"],
    },
    icons: {
          icon: [
            { url: "/favicon.ico?v=3", sizes: "any" },
            { url: "/favicon-16.png?v=3", type: "image/png", sizes: "16x16" },
            { url: "/favicon-32.png?v=3", type: "image/png", sizes: "32x32" },
            { url: "/favicon-48.png?v=3", type: "image/png", sizes: "48x48" },
            { url: "/favicon-192.png?v=3", type: "image/png", sizes: "192x192" },
            { url: "/favicon-512.png?v=3", type: "image/png", sizes: "512x512" },
                ],
          apple: [
            { url: "/apple-touch-icon.png?v=3", sizes: "180x180" },
                ],
          shortcut: "/favicon.ico?v=3",
    },
    appleWebApp: {
          capable: true,
          statusBarStyle: "black-translucent",
          title: "Key Builds AI",
    },
    formatDetection: { telephone: false, date: false, address: false, email: false, url: false },
    other: {
          "theme-color": "#0C0E0D",
          "color-scheme": "dark",
          // TODO: add real verification IDs once Search Console + Bing
          // Webmaster Tools are wired:
          //   "google-site-verification": "<your-token>",
          //   "msvalidate.01": "<your-bing-token>",
          //   "p:domain_verify": "<pinterest-token>",
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
                                                                  name: "Key Builds AI",
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
                                                                                    "Ollama",
                                                                                    "Hugging Face",
                                                                                    "Hermes by Nous Research",
                                                                                    "Local LLMs",
                                                                                    "Retrieval-Augmented Generation",
                                                                                    "Cursor IDE",
                                                                                    "OpenAI Codex",
                                                                                    "Windsurf",
                                                                                    "GitHub Copilot",
                                                                                    "Zapier",
                                                                                  ],
                                                                  hasOccupation: {
                                                                                    "@type": "Occupation",
                                                                                    name: "Full Stack Software Engineer, AI Builder, and Educator",
                                                                                    skills:
                                                                                                        "Full stack software engineering (10+ years), Claude Code, ChatGPT, Gemini, Perplexity, Cursor, Codex, Windsurf, GitHub Copilot, Zapier, Ollama, Hugging Face, local LLMs, RAG pipelines, MCP servers, Next.js, Vercel, prompt engineering, AI product development",
                                                                  },
                                                                  hasCredential: [
                                                                    {
                                                                                        "@type": "EducationalOccupationalCredential",
                                                                                        name: "Certified Data AI Governance",
                                                                                        credentialCategory: "Certification",
                                                                    },
                                                                    {
                                                                                        "@type": "EducationalOccupationalCredential",
                                                                                        name: "Certified Solutions AI Architect",
                                                                                        credentialCategory: "Certification",
                                                                    },
                                                                                  ],
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
                                                                                    "Personal brand of Key Builds AI — AI authority, builder, and educator. 1:1 AI tutoring, AI audits, Q&A office hours, speaking and brand deals, templates and digital products, Apex custom personal assistants, booking systems for small businesses, and the Burn the Gate live AI cohort.",
                                                                  founder: { "@type": "Person", name: "Key Builds AI" },
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
                                                                                    "AI Cohort Program",
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
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Course",
                                                                                                                                    name: "Burn the Gate cohort",
                                                                                                                                    description:
                                                                                                                                                          "5-week live AI cohort. Two calls/week. 12-20 seats. Ship your first working AI build with Key + peers.",
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
                                                                  alternateName: ["Key Builds AI", "KBAi"],
                                                                  publisher: { "@type": "Person", name: "Key Builds AI" },
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

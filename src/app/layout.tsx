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
          // Brand
          "Key Builds AI",
          "Burn the Gate cohort",
          "AI Field Notes",
          "Apex AI assistant",

          // Authority / role
          "AI authority",
          "AI educator",
          "AI builder",
          "AI tutor",
          "AI coach",
          "AI mentor",
          "AI consultant",
          "AI thought leader",
          "AI keynote speaker",
          "AI conference speaker",
          "AI brand ambassador",
          "Solutions AI Architect",
          "Certified Solutions AI Architect",
          "Data AI Governance certified",
          "full stack software engineer",
          "AI advisor",

          // Service intent
          "1:1 AI tutoring",
          "AI tutoring online",
          "AI audit",
          "AI audit for small business",
          "AI consulting for entrepreneurs",
          "AI strategy consultant",
          "AI workflow audit",
          "AI implementation services",
          "AI office hours",
          "AI Q&A",
          "AI workshop",
          "AI bootcamp",
          "live AI cohort",
          "AI cohort program",
          "AI training course",
          "AI training for teams",
          "learn AI online",
          "ship with AI",
          "build with AI",

          // Audience intent
          "AI for entrepreneurs",
          "AI for small business",
          "AI for solopreneurs",
          "AI for coaches",
          "AI for content creators",
          "AI for marketers",
          "AI for non-technical",
          "AI for beginners",
          "AI for service businesses",
          "AI for founders",

          // Product intent
          "AI personal assistant",
          "custom AI assistant",
          "executive AI assistant",
          "booking system for small business",
          "automated scheduling",
          "AI-powered website",
          "Notion AI templates",
          "Notion templates",
          "Custom GPT",
          "AI agent development",
          "AI workflow automation",
          "no-code AI",
          "low-code AI",

          // Tools / platforms
          "Claude Code",
          "Claude Code tutorial",
          "Anthropic Claude",
          "OpenAI ChatGPT",
          "ChatGPT tutorial",
          "Perplexity AI",
          "Google Gemini",
          "Gemini Nano Banana",
          "Cursor IDE",
          "OpenAI Codex",
          "Windsurf IDE",
          "GitHub Copilot",
          "Zapier automation",
          "Make.com",
          "n8n",
          "MCP servers",
          "Model Context Protocol",
          "Ollama",
          "Hugging Face",
          "Hermes Nous Research",
          "local LLM",
          "RAG pipeline",
          "Retrieval-Augmented Generation",
          "vector database",
          "ElevenLabs voice",
          "Notion AI",

          // Concepts
          "responsible AI",
          "AI governance",
          "AI compliance",
          "AI policy",
          "EU AI Act",
          "AI risk management",
          "prompt engineering",
          "AI conversion",
          "AI for productivity",

          // Content / SEO
          "AI newsletter",
          "AI blog",
          "weekly AI tips",
          "AI tips",

          // Long-tail intent (added 2026-04-29)
          "AI tools for coaches",
          "how to automate my business with AI",
          "best AI tools for solopreneurs",
          "ship AI products fast",
          "build AI without coding",
          "AI for service businesses",
          "AI for content creators",
          "AI productivity tools",
          "AI time-saving tools",
          "no-code AI automation",
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
                                                                  "@id": "https://keybuilds.ai/#key",
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
                                                                                    "Model Context Protocol",
                                                                                    "Ollama",
                                                                                    "Hugging Face",
                                                                                    "Hermes by Nous Research",
                                                                                    "Local LLMs",
                                                                                    "Retrieval-Augmented Generation",
                                                                                    "Vector databases",
                                                                                    "Cursor IDE",
                                                                                    "OpenAI Codex",
                                                                                    "Windsurf",
                                                                                    "GitHub Copilot",
                                                                                    "Zapier",
                                                                                    "Make.com",
                                                                                    "n8n",
                                                                                    "ElevenLabs",
                                                                                    "AI Governance",
                                                                                    "AI Policy",
                                                                                    "AI Compliance",
                                                                                    "EU AI Act",
                                                                                    "AI Risk Management",
                                                                                    "AI Conversion",
                                                                                    "AI Education",
                                                                                    "AI Cohorts",
                                                                                    "Live AI Training",
                                                                                    "Software Engineering",
                                                                                    "Full Stack Development",
                                                                                    "Next.js",
                                                                                    "Vercel",
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
                                                                                    "https://www.tiktok.com/@keybuilds.ai",
                                                                                    "https://www.youtube.com/@keybuildsai",
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
                                                                  "@id": "https://keybuilds.ai/#business",
                                                                  name: "Key Builds AI",
                                                                  url: "https://keybuilds.ai",
                                                                  logo: "https://keybuilds.ai/brand-assets/logo-mark/on-onyx/512.png",
                                                                  image: "https://keybuilds.ai/og-image.png",
                                                                  description:
                                                                                    "Personal brand of Key Builds AI — AI authority, builder, and educator. 1:1 AI tutoring, AI audits, Q&A office hours, speaking and brand deals, templates and digital products, Apex custom personal assistants, booking systems for small businesses, and the Burn the Gate live AI cohort.",
                                                                  founder: {
                                                                                    "@type": "Person",
                                                                                    "@id": "https://keybuilds.ai/#key",
                                                                                    name: "Key Builds AI",
                                                                  },
                                                                  sameAs: [
                                                                                    "https://www.linkedin.com/in/keym/",
                                                                                    "https://www.instagram.com/keybuilds.ai/",
                                                                                    "https://www.tiktok.com/@keybuilds.ai",
                                                                                    "https://www.youtube.com/@keybuildsai",
                                                                                    "https://keystouch.com",
                                                                                  ],
                                                                  areaServed: "Worldwide",
                                                                  email: "key@keybuilds.ai",
                                                                  priceRange: "$$",
                                                                  serviceType: [
                                                                                    "AI Education",
                                                                                    "AI Tutoring",
                                                                                    "1:1 AI Coaching",
                                                                                    "AI Audit",
                                                                                    "AI Office Hours",
                                                                                    "AI Q&A",
                                                                                    "AI Speaking",
                                                                                    "AI Brand Deals",
                                                                                    "AI Templates and Digital Products",
                                                                                    "Notion AI Templates",
                                                                                    "Custom GPTs",
                                                                                    "Custom AI Personal Assistants",
                                                                                    "Apex AI Assistants",
                                                                                    "Booking Systems for Small Businesses",
                                                                                    "AI Workflow Automation",
                                                                                    "AI Cohort Program",
                                                                                    "Live AI Cohort",
                                                                                    "AI Bootcamp",
                                                                                    "AI Workshop",
                                                                                    "AI Strategy Consulting",
                                                                                    "AI Governance Advisory",
                                                                                    "Responsible AI Implementation",
                                                                                    "AI Product Development",
                                                                                    "AI Search Visibility Kit",
                                                                                    "AI SEO Audit",
                                                                                    "AI Search Optimization",
                                                                                    "Schema.org Implementation",
                                                                                    "AI Newsletter",
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
                                                                                                                                    provider: {
                                                                                                                                                          "@type": "Person",
                                                                                                                                                          "@id": "https://keybuilds.ai/#key",
                                                                                                                                                          name: "Key Builds AI",
                                                                                                                                                          url: "https://keybuilds.ai",
                                                                                                                                    },
                                                                                                              },
                                                                                        },
                                                                                      {
                                                                                                            "@type": "Offer",
                                                                                                            priceCurrency: "USD",
                                                                                                            price: "997",
                                                                                                            itemOffered: {
                                                                                                                                    "@type": "Service",
                                                                                                                                    name: "AI Search Visibility Kit",
                                                                                                                                    description:
                                                                                                                                                          "14-component SEO + AI-search optimization package. Schema.org @id-linked entity graph, /llms.txt, /services.md, voice-search speakable markup, robots.txt with AI-bot allowlist, dynamic sitemap, 100+ keywords, Open Graph, multi-size favicons, PWA manifest, Google Search Console + Bing Webmaster wired, validation reports. Add-on, included on premium builds, or standalone retrofit.",
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
                                                                  publisher: {
                                                                                    "@type": "Person",
                                                                                    "@id": "https://keybuilds.ai/#key",
                                                                                    name: "Key Builds AI",
                                                                  },
                                                                  inLanguage: "en-US",
                                                                  potentialAction: {
                                                                                    "@type": "SubscribeAction",
                                                                                    target: "https://keybuilds.ai/#subscribe",
                                                                  },
                                                                  speakable: {
                                                                                    "@type": "SpeakableSpecification",
                                                                                    cssSelector: ["h1", ".hero-tagline", "#manifesto", "#faq"],
                                                                  },
                                                  }),
                                    }}
                                  />
                        <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                                  __html: JSON.stringify({
                                                                  "@context": "https://schema.org",
                                                                  "@type": "Course",
                                                                  "@id": "https://keybuilds.ai/#burn-the-gate-cohort",
                                                                  name: "Burn the Gate — Live AI Cohort",
                                                                  description:
                                                                                    "Five-week live AI cohort. Two calls per week (one teaching, one workshop). 12–20 operators, founders, and creators ship their first working AI build alongside Key. Demo day at the end. Async Slack between sessions. Cohorts run 3–4 times per year.",
                                                                  provider: {
                                                                                    "@type": "Person",
                                                                                    "@id": "https://keybuilds.ai/#key",
                                                                                    name: "Key Builds AI",
                                                                                    url: "https://keybuilds.ai",
                                                                  },
                                                                  url: "https://keybuilds.ai/#cohort",
                                                                  courseMode: "online",
                                                                  educationalLevel: "Beginner to Intermediate",
                                                                  teaches: [
                                                                                    "How to build with AI",
                                                                                    "AI workflow automation",
                                                                                    "Prompt engineering",
                                                                                    "Claude Code",
                                                                                    "ChatGPT Custom GPTs",
                                                                                    "Responsible AI",
                                                                                    "Shipping AI products",
                                                                  ],
                                                                  audience: {
                                                                                    "@type": "Audience",
                                                                                    audienceType:
                                                                                                        "Operators, founders, solopreneurs, content creators, non-technical builders",
                                                                  },
                                                                  inLanguage: "en-US",
                                                                  isAccessibleForFree: false,
                                                                  hasCourseInstance: {
                                                                                    "@type": "CourseInstance",
                                                                                    courseMode: "online",
                                                                                    courseSchedule: {
                                                                                                          "@type": "Schedule",
                                                                                                          repeatFrequency: "P1W",
                                                                                                          byDay: ["Monday", "Thursday"],
                                                                                                          duration: "PT1H",
                                                                                    },
                                                                                    instructor: {
                                                                                                          "@type": "Person",
                                                                                                          "@id": "https://keybuilds.ai/#key",
                                                                                                          name: "Key Builds AI",
                                                                                    },
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

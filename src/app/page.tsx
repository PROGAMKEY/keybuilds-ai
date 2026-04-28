import { Hero } from "@/components/sections/hero";
import { Socials } from "@/components/sections/socials";
import { Stats } from "@/components/sections/stats";
import { AIStack } from "@/components/sections/ai-stack";
import { Subscribe } from "@/components/sections/subscribe";
import { Quote } from "@/components/sections/quote";
import { Builds } from "@/components/sections/builds";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Socials />
      <Stats />
      <AIStack />
      <Subscribe />
      <Quote />
      <Builds />
      <CTA />
      <Footer />
    </main>
  );
}

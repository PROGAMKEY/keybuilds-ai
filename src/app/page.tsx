import { Hero } from "@/components/sections/hero";
import { Quote } from "@/components/sections/quote";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { AIStack } from "@/components/sections/ai-stack";
import { Services } from "@/components/sections/services";
import { Builds } from "@/components/sections/builds";
import { Beliefs } from "@/components/sections/beliefs";
import { Subscribe } from "@/components/sections/subscribe";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Socials } from "@/components/sections/socials";
import { Footer } from "@/components/sections/footer";
import { SectionDivider } from "@/components/ui/editorial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Quote />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <AIStack />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Builds />
      <SectionDivider />
      <Beliefs />
      <SectionDivider />
      <Subscribe />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <SectionDivider />
      <Socials />
      <Footer />
    </main>
  );
}

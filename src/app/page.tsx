import { HillsHero } from "@/components/hills-hero";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Home() {
  return (
    <div>
      <HillsHero />
      <HeroGeometric
        badge="What I Build"
        title1="Websites. Agents."
        title2="Automations. SOPs."
      />
    </div>
  );
}

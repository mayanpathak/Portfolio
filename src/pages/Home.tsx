
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CTASection />
    </Layout>
  );
}

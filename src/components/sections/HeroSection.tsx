
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ParticlesBackground } from "@/components/ui/particles-background";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden">
      <ParticlesBackground />

      <div className="container mx-auto max-w-5xl z-10">
        <FadeInSection>
          <span className="inline-block text-secondary font-medium mb-3">
            Professional Web Developer
          </span>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <AnimatedText text="Hi, I'm Mayan Pathak" className="gradient-text" />
          </h1>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Building scalable, beautiful products with modern technologies that 
            delight users and exceed client expectations.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.6} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-electric hover:bg-gradient-premium hover:shadow-glow-md transition-all duration-300"
            >
              <a href="#projects">
                View My Projects
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary/50 hover:border-secondary text-white hover:text-secondary"
            >
              <Link to="/contact">
                Let's Connect
              </Link>
            </Button>
          </div>
        </FadeInSection>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-secondary transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

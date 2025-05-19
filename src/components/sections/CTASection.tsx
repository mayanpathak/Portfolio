
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="bg-gradient-premium p-8 md:p-16 text-center"
          >
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something Magical Together
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Ready to start your next project? Get in touch and let's discuss how I can help bring your vision to life.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl"
              >
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}

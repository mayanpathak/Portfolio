
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my experience and approach"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <FadeInSection direction="left">
            <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-secondary">My Approach</h3>
              <p className="text-white/80 mb-4">
                I specialize in creating exceptional digital experiences that balance beautiful design with technical excellence. 
                My focus is on building scalable applications that solve real business problems.
              </p>
              <p className="text-white/80">
                With expertise across the full development stack, I bring a holistic perspective to every project, 
                ensuring that all pieces work together seamlessly to deliver outstanding results.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Skills & Expertise</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "React", "Node.js", "TypeScript",
                  "MongoDB", "Firebase", "Redux",
                  "Framer Motion", "Tailwind CSS", "Next.js"
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-primary-light/50 border border-white/10 rounded-lg p-3 text-center text-sm hover:bg-secondary hover:shadow-glow-sm transition-all"
                    whileHover={{ y: -3, scale: 1.03 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="up">
            <motion.div 
              className="bg-gradient-premium rounded-2xl p-1 shadow-glow-sm hover:shadow-glow-md transition-all"
              whileHover={{ scale: 1.01 }}
            >
              <div className="bg-primary p-6 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Journey Highlights</h3>
                <ul className="space-y-3">
                  {[
                    
                    "Shipped 5+ Production Apps",
                    "Specialized in MERN and Next Ecosystem",
                    "Focus on Performance & UX"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center gap-2 text-white/90"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-secondary">•</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </FadeInSection>

          <FadeInSection direction="up" delay={0.2}>
            <motion.div 
              className="bg-gradient-premium rounded-2xl p-1 shadow-glow-sm hover:shadow-glow-md transition-all"
              whileHover={{ scale: 1.01 }}
            >
              <div className="bg-primary p-6 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Philosophy</h3>
                <p className="text-white/80 mb-3">
                  I believe in creating digital experiences that blend artistry with functionality.
                  Every project deserves meticulous attention to detail and a commitment to excellence.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="link" className="text-secondary p-0">
                    <Link to="/about" className="flex items-center gap-1">
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

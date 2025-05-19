
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionHeading } from "@/components/ui/section-heading";

const timelineData = [
  {
    year: "2023",
    title: "Senior Frontend Developer",
    description: "Led the development of enterprise applications with React and TypeScript, focusing on performance optimization and team mentorship.",
  },
  {
    year: "2022",
    title: "Frontend Developer",
    description: "Specialized in creating responsive user interfaces and implementing complex state management solutions.",
  },
  {
    year: "2020",
    title: "Web Developer",
    description: "Started my professional journey building full-stack applications with React and Node.js.",
  },
  {
    year: "2019",
    title: "Computer Science Graduate",
    description: "Graduated with honors in Computer Science, specializing in web technologies and software engineering.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <SectionHeading 
                title="About Me" 
                showGradient
                centered
              />
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 md:p-8 mb-12">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm Mayan Pathak, a passionate web developer with expertise in creating modern, 
                    intuitive, and high-performance web applications. With a strong foundation in 
                    frontend technologies and a keen eye for design, I strive to build digital 
                    experiences that not only look great but also deliver exceptional functionality.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My approach to development combines technical excellence with creative 
                    problem-solving. I believe in writing clean, maintainable code that stands the 
                    test of time, and in creating interfaces that users find both delightful and 
                    intuitive to use. When I'm not coding, I enjoy staying up-to-date with the latest 
                    industry trends, contributing to open-source projects, and expanding my skill set 
                    through continuous learning.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <SectionHeading 
                title="My Journey" 
                subtitle="A timeline of my professional path"
                centered
              />
            </FadeInSection>

            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-secondary/30"></div>

              {/* Timeline entries */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <FadeInSection 
                    key={index}
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={index * 0.1}
                  >
                    <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      {/* Content */}
                      <div className="md:w-1/2 p-6">
                        <div className="bg-glassBgDark backdrop-blur-sm rounded-xl border border-white/10 shadow-lg p-6">
                          <h3 className="text-xl font-bold text-secondary mb-1">{item.title}</h3>
                          <p className="text-white/70 mb-4">{item.year}</p>
                          <p className="text-white/80">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Spacer */}
                      <div className="md:w-1/2"></div>
                      
                      {/* Timeline dot */}
                      <motion.div
                        className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary shadow-glow-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                      />
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <SectionHeading 
                title="Skills & Technologies" 
                subtitle="Tools and technologies I work with"
                centered
              />
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {/* Frontend */}
              <FadeInSection direction="up">
                <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">Frontend</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "React", "TypeScript", "Next.js",
                      "Tailwind CSS", "Framer Motion", "Redux",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="bg-primary-light/50 border border-white/10 rounded-lg p-3 text-center hover:bg-secondary hover:shadow-glow-sm transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Backend */}
              <FadeInSection direction="up" delay={0.2}>
                <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">Backend</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Node.js", "Express", "MongoDB",
                      "Firebase", "REST APIs", "GraphQL",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="bg-primary-light/50 border border-white/10 rounded-lg p-3 text-center hover:bg-secondary hover:shadow-glow-sm transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Tools & Other */}
              <FadeInSection direction="up" delay={0.4}>
                <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">Tools & Other</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Git", "Webpack", "Docker",
                      "CI/CD", "Jest", "Figma",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="bg-primary-light/50 border border-white/10 rounded-lg p-3 text-center hover:bg-secondary hover:shadow-glow-sm transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

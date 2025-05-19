
import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "React", "Node.js", "API", "AI"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="section-padding">
          <FadeInSection>
            <SectionHeading 
              title="My Projects" 
              subtitle="Explore the applications I've built"
              showGradient
              centered
            />
          </FadeInSection>

          {/* Category Filter */}
          <FadeInSection delay={0.2} direction="up">
            <div className="flex flex-wrap justify-center gap-3 my-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={cn(
                    "relative rounded-full",
                    selectedCategory === category 
                      ? "bg-secondary hover:bg-secondary/80" 
                      : "border-secondary/50 hover:border-secondary text-white hover:text-secondary"
                  )}
                  onMouseEnter={() => setHoveredButton(category)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  {hoveredButton === category && (
                    <motion.span
                      layoutId="categoryIndicator"
                      className="absolute inset-0 rounded-full bg-secondary/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Button>
              ))}
            </div>
          </FadeInSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  index={index}
                />
              ))
            ) : (
              <FadeInSection className="col-span-2 text-center py-20">
                <p className="text-xl text-white/70">
                  No projects found in this category.
                </p>
              </FadeInSection>
            )}
          </div>
        </section>

        {/* Project Process */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <SectionHeading 
                title="My Development Process" 
                subtitle="How I approach building projects"
                centered
              />
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  step: "1",
                  title: "Discovery & Planning",
                  description: "Understanding requirements, researching solutions, and creating a detailed roadmap.",
                },
                {
                  step: "2",
                  title: "Design & Architecture",
                  description: "Designing user interfaces and planning the technical architecture for robust implementation.",
                },
                {
                  step: "3",
                  title: "Development & Testing",
                  description: "Writing clean, maintainable code with comprehensive testing for reliability.",
                },
              ].map((item, index) => (
                <FadeInSection key={index} direction="up" delay={index * 0.2}>
                  <div className="relative bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 h-full">
                    <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4 pt-2 text-white">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

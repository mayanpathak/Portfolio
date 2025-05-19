
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  
  const glowStyles = {
    boxShadow: isHovered 
      ? isDark 
        ? '0 0 25px rgba(31, 63, 255, 0.4)' 
        : '0 0 20px rgba(65, 105, 225, 0.4)'
      : 'none',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
  };
  
  return (
    <FadeInSection
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 0.1}
    >
      <motion.div
        className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden transition-all duration-500"
        style={glowStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          type: "spring", 
          stiffness: 100,
          damping: 15
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t"
            animate={{ 
              background: isHovered 
                ? 'linear-gradient(to top, rgba(10, 15, 60, 0.9), transparent)' 
                : 'linear-gradient(to top, rgba(25, 25, 112, 0.8), transparent)'
            }}
          />
        </div>
        <div className="p-6">
          <motion.h3 
            className="text-2xl font-bold mb-2"
            animate={{ 
              color: isHovered ? '#1F3FFF' : '#FFFFFF' 
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-white/70 mb-4">{description}</p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="bg-primary-light/30 text-xs px-2 py-1 rounded-md"
                whileHover={{ 
                  backgroundColor: 'rgba(31, 63, 255, 0.3)',
                  scale: 1.05
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          <div className="flex gap-3">
            {githubUrl && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-secondary/50 hover:border-secondary text-white hover:text-secondary transition-all"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </a>
                </Button>
              </motion.div>
            )}
            {liveUrl && (
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(31, 63, 255, 0.6)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-electric hover:shadow-glow-sm transition-all"
                >
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </FadeInSection>
  );
}

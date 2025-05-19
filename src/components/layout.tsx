
import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ParticlesBackground } from "@/components/ui/particles-background";

interface LayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

export function Layout({ children, showParticles = true }: LayoutProps) {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b transition-colors duration-500 dark:from-[#0A0F3C] dark:to-[#050824] from-primary to-primary-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      {showParticles && <ParticlesBackground />}
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="pt-28 overflow-hidden"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

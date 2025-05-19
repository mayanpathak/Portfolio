import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "@/components/theme-switch";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle active section based on URL
  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveSection(pathname);
  }, []);
  
  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-glassBgDark backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-6"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            className="font-poppins font-bold text-2xl gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Mayan.dev
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-secondary",
                activeSection === item.href
                  ? "text-secondary"
                  : "text-white/80 hover:text-white"
              )}
            >
              <motion.span 
                className="relative inline-block overflow-hidden"
                whileHover={{ color: activeSection === item.href ? "" : "#1F3FFF" }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-secondary origin-left rounded-full"
                  initial={{ scaleX: activeSection === item.href ? 1 : 0 }}
                  animate={{ scaleX: activeSection === item.href ? 1 : 0 }}
                  exit={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>
          ))}
          
          <div className="ml-4">
            <ThemeSwitch />
          </div>
        </nav>
        
        <div className="hidden md:block">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(31, 63, 255, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              asChild
              className="bg-gradient-electric hover:bg-gradient-premium hover:shadow-glow-md transition-all duration-300"
            >
              <a href="/contact">Let's Connect</a>
            </Button>
          </motion.div>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitch />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full block"
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full block"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full block"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-primary/95 backdrop-blur-md z-40 md:hidden pt-24 pb-8 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "text-lg font-medium w-full text-center py-3 rounded-md transition-colors",
                    activeSection === item.href
                      ? "bg-secondary text-white"
                      : "text-white/80 hover:bg-secondary/20"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 w-full bg-secondary hover:bg-secondary/80 shadow-glow-sm hover:shadow-glow-md transition-all"
              >
                <a href="/contact" onClick={() => setIsOpen(false)}>Let's Connect</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <motion.div
                className="font-poppins font-bold text-2xl gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Mayan.dev
              </motion.div>
            </Link>
            <p className="text-white/70 max-w-md">
              Professional web developer building scalable, beautiful products with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-poppins text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-poppins text-xl mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-light hover:bg-secondary p-3 rounded-full transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-light hover:bg-secondary p-3 rounded-full transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:info@example.com" 
                className="bg-primary-light hover:bg-secondary p-3 rounded-full transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Mayan Pathak. All rights reserved.
          </p>
          <div className="flex items-center">
            <motion.span
              initial={{ scale: 1 }}
              animate={{ 
                scale: [1, 1.2, 1],
                transition: { 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 2,
                  repeatDelay: 3
                }
              }}
            >
              Crafted with ❤️ by Mayan Pathak
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}

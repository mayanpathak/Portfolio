
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };
    
    const handleMouseLeave = () => {
      setHidden(true);
    };
    
    const handleMouseEnter = () => {
      setHidden(false);
    };
    
    // Check hover state for clickable elements
    const handleElementHover = () => {
      const hoveredElements = document.querySelectorAll("a, button, [role='button'], .hover-effect");
      
      hoveredElements.forEach((element) => {
        element.addEventListener("mouseenter", () => setHovered(true));
        element.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    
    // Initialize after DOM content is loaded
    handleElementHover();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
  
  return (
    <motion.div
      className="custom-cursor"
      style={{ 
        backgroundColor: hovered ? "rgba(65, 105, 225, 0.5)" : "rgba(0, 191, 255, 0.5)",
        borderColor: hovered ? "rgba(65, 105, 225, 0.8)" : "rgba(0, 191, 255, 0.8)",
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: clicked ? 0.8 : hovered ? 1.5 : 1,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 40,
      }}
    />
  );
}

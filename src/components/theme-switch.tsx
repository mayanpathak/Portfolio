
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Toggle } from "@/components/ui/toggle";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-white/10"
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-white" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </motion.div>
    </Toggle>
  );
}

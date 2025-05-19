
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

interface ParticlesBackgroundProps {
  id?: string;
}

export function ParticlesBackground({ id = "tsparticles" }: ParticlesBackgroundProps) {
  // Use state to track loading status and components
  const [isReady, setIsReady] = useState(false);
  const [ParticlesComponent, setParticlesComponent] = useState<any>(null);
  const [particlesInit, setParticlesInit] = useState<((engine: any) => Promise<void>) | null>(null);
  const { theme } = useTheme();
  
  // Determine particle colors based on theme
  const particleColor = theme === 'dark' ? "#1F3FFF" : "#4169E1";
  const particleOpacity = theme === 'dark' ? 0.5 : 0.3;
  
  // Load particles libraries on component mount
  useEffect(() => {
    let isMounted = true;

    const loadParticlesLibrary = async () => {
      try {
        // Directly import the required packages
        const reactTsParticles = await import("react-tsparticles");
        const tsparticles = await import("tsparticles");
        
        // Only update state if component is still mounted
        if (isMounted) {
          setParticlesComponent(() => reactTsParticles.default);
          setParticlesInit(() => tsparticles.loadFull);
          setIsReady(true);
        }
      } catch (error) {
        console.warn("Failed to load particles packages:", error);
        if (isMounted) {
          setIsReady(false);
        }
      }
    };

    loadParticlesLibrary();

    // Cleanup function to prevent setting state on unmounted component
    return () => {
      isMounted = false;
    };
  }, []);

  const handleParticlesInit = useCallback(async (engine: any) => {
    if (particlesInit) {
      await particlesInit(engine);
    }
  }, [particlesInit]);

  // If particles libraries aren't ready, show a fallback animation
  if (!isReady || !ParticlesComponent) {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary-light/20"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0.2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    );
  }

  // If Particles is available, render it with appropriate options
  return (
    <ParticlesComponent
      id={id}
      init={handleParticlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: particleColor,
            distance: 150,
            enable: true,
            opacity: particleOpacity,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: particleOpacity,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.1,
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 3.5 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.1,
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
}

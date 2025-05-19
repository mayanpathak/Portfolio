
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Premium blue palette - Enhanced with deeper and more electric tones
				primary: {
					DEFAULT: '#191970', // Midnight Blue
					light: '#2a2a8c',
					dark: '#0A0F3C', // Deeper base blue
				},
				secondary: {
					DEFAULT: '#4169E1', // Royal Blue
					light: '#6384e8',
					dark: '#1F3FFF', // Electric royal blue
				},
				accent: {
					DEFAULT: '#00BFFF', // Electric Blue
					light: '#33ceff',
					dark: '#0099cc',
				},
				highlight: '#60EFFF', // Sky Blue
				neon: '#00F9FF', // Neon accent for dark mode
				glassBg: 'rgba(255, 255, 255, 0.1)',
				glassBgDark: 'rgba(25, 25, 112, 0.6)',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)',
						boxShadow: '0 0 10px rgba(31, 63, 255, 0.4)',
					},
					'50%': {
						opacity: '0.95',
						transform: 'scale(1.05)',
						boxShadow: '0 0 25px rgba(31, 63, 255, 0.7)',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-15px)',
					},
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'shine': {
					'0%': { backgroundPosition: '200% center' },
					'100%': { backgroundPosition: '-200% center' },
				},
				'shimmer': {
					'0%': {
						'background-position': '-468px 0'
					},
					'100%': {
						'background-position': '468px 0'
					}
				},
				'tilt': {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)',
					},
					'25%': {
						transform: 'rotate(2deg)',
					},
					'75%': {
						transform: 'rotate(-2deg)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-x': 'gradient-x 15s ease infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'shine': 'shine 8s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'tilt': 'tilt 10s infinite ease-in-out',
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(31, 63, 255, 0.3)',
				'glow-md': '0 0 20px rgba(31, 63, 255, 0.4)',
				'glow-lg': '0 0 30px rgba(31, 63, 255, 0.5)',
				'neon-sm': '0 0 5px rgba(0, 249, 255, 0.5), 0 0 20px rgba(0, 249, 255, 0.3)',
				'neon-md': '0 0 10px rgba(0, 249, 255, 0.5), 0 0 30px rgba(0, 249, 255, 0.3)',
				'neon-lg': '0 0 15px rgba(0, 249, 255, 0.5), 0 0 40px rgba(0, 249, 255, 0.3)',
			},
			backgroundImage: {
				'gradient-premium': 'linear-gradient(135deg, #0A0F3C 0%, #1F3FFF 100%)',
				'gradient-electric': 'linear-gradient(135deg, #4169E1 0%, #00BFFF 100%)',
				'gradient-highlight': 'linear-gradient(135deg, #00BFFF 0%, #60EFFF 100%)',
				'gradient-neon': 'linear-gradient(135deg, #1F3FFF 0%, #00F9FF 100%)',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
				'theme': 'background-color, border-color, color, fill, stroke',
				'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

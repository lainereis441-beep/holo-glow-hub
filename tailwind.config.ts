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
				// Core colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Brand colors
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				
				// Neon colors for futuristic effects
				neon: {
					fuchsia: 'hsl(var(--neon-fuchsia))',
					purple: 'hsl(var(--neon-purple))',
					cyan: 'hsl(var(--neon-cyan))',
					pink: 'hsl(var(--neon-pink))',
					amber: 'hsl(var(--neon-amber))'
				},
				
				// Glass effect colors
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))',
					backdrop: 'hsl(var(--glass-backdrop))'
				},
				
				// Text variations
				text: {
					muted: 'hsl(var(--text-muted))',
					subtle: 'hsl(var(--text-subtle))',
					faint: 'hsl(var(--text-faint))'
				},
				
				// Legacy colors
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			
			// Background images and gradients
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-text': 'var(--gradient-text)',
				'gradient-radial': 'var(--gradient-radial)'
			},
			
			// Box shadows with neon effects
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'neon-hover': 'var(--shadow-neon-hover)',
				'glow-fuchsia': 'var(--glow-fuchsia)',
				'glow-cyan': 'var(--glow-cyan)'
			},
			
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1.5rem',
				'3xl': '2rem'
			},
			
			keyframes: {
				// Legacy animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				// Floating animations
				'float': {
					'0%, 100%': { transform: 'translateY(10px) rotate(-1deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(-5px) rotate(1deg)' },
					'50%': { transform: 'translateY(15px) rotate(-1deg)' }
				},
				
				// Border animations
				'border-spin': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(180deg)' },
					'100%': { filter: 'hue-rotate(360deg)' }
				},
				
				// Glow pulse
				'glow-pulse': {
					'0%, 100%': { filter: 'drop-shadow(0 0 20px hsl(var(--neon-purple) / 0.3))' },
					'50%': { filter: 'drop-shadow(0 0 40px hsl(var(--neon-cyan) / 0.5))' }
				},
				
				// Scale in/out
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			
			animation: {
				// Legacy
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// Custom animations
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 6s ease-in-out infinite 3s',
				'border-spin': 'border-spin 6s linear infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'scale-in': 'scale-in 0.3s ease-out'
			},
			
			// Custom transitions
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

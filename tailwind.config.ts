
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#7C20A1',
					50: '#F3E7FF',
					100: '#E6CCFF',
					200: '#D6B3FF',
					300: '#C399FF',
					400: '#A066FF',
					500: '#7C20A1',
					600: '#701A75',
					700: '#6B1FD1',
					800: '#5A1CB3',
					900: '#4A1A94',
					foreground: 'hsl(var(--primary-foreground))'
				},
				red: {
					DEFAULT: '#B91C1C',
					700: '#B91C1C'
				},
				violet: {
					DEFAULT: '#F5F3FF',
					50: '#F5F3FF'
				},
				fuchsia: {
					DEFAULT: '#701A75',
					900: '#701A75'
				},
				blue: {
					DEFAULT: '#2493FB',
					500: '#2493FB'
				},
				white: '#FFFFFF',
				black: '#000000',
				gray: {
					DEFAULT: '#4F4F4F',
					400: '#4F4F4F',
					500: '#4F4F4F'
				},
				orange: {
					DEFAULT: '#FF9800',
					500: '#FF9800'
				},
				green: {
					DEFAULT: '#22C55E',
					500: '#22C55E'
				},
				yellow: {
					DEFAULT: '#EAB308',
					500: '#EAB308'
				},
				brown: {
					DEFAULT: '#584949',
					500: '#584949'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
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
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			fontSize: {
				'heading-1': ['18px', { lineHeight: '1.2' }],
				'heading-2': ['16px', { lineHeight: '1.2' }],
				'heading-3': ['14px', { lineHeight: '1.2' }],
				'heading-4': ['12px', { lineHeight: '1.2' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #7C20A1 0%, #A066FF 50%, #C399FF 100%)',
				'gradient-purple': 'linear-gradient(90deg, #7C20A1 0%, #701A75 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

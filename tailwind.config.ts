import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
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
        },
        dark: {
          DEFAULT: '#0E0E0E',
          light: '#1A1A1A',
          lighter: '#222222',
          subtle: '#121212'
        },
        gold: {
          DEFAULT: '#A29466',
          light: '#B3A477',
          dark: '#8C7F56'
        },
        background: {
          DEFAULT: '#0A0A0A'
        },
        'nb-cream': '#FDF6F0',
        'nb-purple': '#A688FF',
        'nb-green': '#55EFC4',
        'nb-blue': '#00D1FF',
        'nb-yellow': '#FACC15',
        'nb-pink': '#F472B6',
        'nb-black': '#000000',
      },
      boxShadow: {
        'mysterious': '0 10px 30px rgba(0, 0, 0, 0.5)',
        'enigma': '0 4px 15px rgba(0, 0, 0, 0.7)',
        'nb-hard': '4px 4px 0px 0px #000000',
        'nb-hard-lg': '8px 8px 0px 0px #000000',
      },
      borderColor: {
        'dark-border': 'rgba(255, 255, 255, 0.05)',
        'nb-black': '#000000',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to right, #0E0E0E, #1A1A1A)',
        'gold-gradient': 'linear-gradient(45deg, #A29466, #8C7F56)'
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
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
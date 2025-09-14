import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefdf8',
          100: '#fdf8e6', 
          200: '#fbf0c9',
          300: '#f7e4a1',
          400: '#F4E8B8',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9a7a1a',
          800: '#7d6315',
          900: '#654f12',
          DEFAULT: '#D4AF37',
        },
        accent: '#B8941F',
      },
      fontFamily: {
        // Typography system per brand guidelines
        'display': ['Anton', 'Bebas Neue', 'Arial Black', 'sans-serif'], // Condensed modern sans for headings
        'sans': ['Inter', 'Rubik', 'system-ui', 'sans-serif'], // Clean geometric sans for body
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.875rem)', { lineHeight: '1.3' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 40px -5px rgba(0, 0, 0, 0.09)',
        'strong': '0 8px 40px -12px rgba(0, 0, 0, 0.25)',
        'gold': '0 4px 25px -5px rgba(212, 175, 55, 0.3), 0 20px 40px -5px rgba(212, 175, 55, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
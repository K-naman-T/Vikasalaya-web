import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#8B5E3C',    // Rich Earth Brown
          light: '#A67B5B',      // Light Clay
          dark: '#6F4B30',       // Deep Earth
        },
        secondary: {
          DEFAULT: '#FFF9F0',    // Soft Parchment
          light: '#FFFFFF',      // Pure White
          dark: '#F5EBE0',       // Warm Sand
        },
        accent: {
          DEFAULT: '#C17817',    // Terracotta
          dark: '#A66615',       // Deep Clay
          light: '#D68F2B',      // Warm Clay
        },
        
        // Semantic Colors
        text: {
          DEFAULT: '#2C1810',
          muted: '#4A3F3A',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#FAF6F0',
        },
        border: '#E8DFD5',
        input: '#E8DFD5',
        ring: '#8B5E3C',
        
        // Status Colors
        success: '#849B87',
        error: '#C17817',
        warning: '#D6AD7B',
        info: '#8B5E3C',
      },
      
      //gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8B5E3C 0%, #A67B5B 100%)',
        'gradient-secondary': 'linear-gradient(to right, #FFF9F0 0%, #FFFFFF 100%)',
        'gradient-accent': 'linear-gradient(to right, #C17817 0%, #D68F2B 100%)',
        'gradient-hero': 'linear-gradient(to bottom right, #6F4B30 0%, #8B5E3C 50%, #D68F2B 100%)',
        'gradient-section': 'linear-gradient(to bottom right, #F5EBE0 0%, #FFF9F0 50%, #FFFFFF 100%)',
        'gradient-gold': 'linear-gradient(to right, #C17817 0%, #D68F2B 50%, #A67B5B 100%)',
        'gradient-earth': 'linear-gradient(to right, #8B5E3C 0%, #C17817 50%, #A67B5B 100%)',
        'gradient-soft': 'linear-gradient(to right, #FFF9F0 0%, #FFFFFF 100%)',
        'gradient-warm': 'linear-gradient(to bottom right, #D68F2B 0%, #FFF9F0 100%)',
        'gradient-natural': 'linear-gradient(to bottom, #A67B5B 0%, #FFF9F0 100%)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        inter: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      },
    }
  },
  plugins: [tailwindcssAnimate],
};

export default config;

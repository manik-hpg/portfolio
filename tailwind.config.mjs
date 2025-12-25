/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        // Monotone palette - no blue accents
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          dark: '#09090B',
          'dark-secondary': '#18181B',
          'dark-tertiary': '#27272A',
        },
        foreground: {
          DEFAULT: '#111827',
          secondary: '#4B5563',
          tertiary: '#6B7280',
          dark: '#FAFAFA',
          'dark-secondary': '#A1A1AA',
          'dark-tertiary': '#71717A',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#27272A',
        },
        // Monotone accent - using neutral gray instead of blue
        accent: {
          DEFAULT: '#18181B',
          hover: '#27272A',
          dark: '#FAFAFA',
          'dark-hover': '#E5E7EB',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'prose': '65ch',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

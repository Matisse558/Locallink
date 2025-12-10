import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core design system - warm dark palette
        body: '#050302',
        surface: '#111010',
        elevated: '#1a1512',
        'text-primary': '#f9f5f0',
        'text-secondary': '#d2c7be',
        'text-muted': '#7a6a60',
        accent: '#f4a259',
        'border-subtle': '#2b1a13',
      },
      fontFamily: {
        sans: ['Inter', '"SF Pro Display"', 'SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.5rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.875rem, 4vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.25rem', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '4rem',
        'section-lg': '6rem',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(-30px, 20px, 0) scale(1.04)' },
          '66%': { transform: 'translate3d(25px, -15px, 0) scale(1.02)' },
          '100%': { transform: 'translate3d(-15px, 10px, 0) scale(1.05)' },
        },
        'blob2': {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(20px, -30px, 0) scale(1.03)' },
          '100%': { transform: 'translate3d(-25px, 15px, 0) scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blob: 'blob 30s ease-in-out infinite alternate',
        'blob-delay': 'blob 36s ease-in-out infinite alternate',
        'blob2': 'blob2 28s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(244, 162, 89, 0.3)',
        'glow-lg': '0 0 40px rgba(244, 162, 89, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config

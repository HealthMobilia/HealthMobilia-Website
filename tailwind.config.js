/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#050707', // Deepest background
          900: '#0A0C0C', // Section depth
          800: '#141717', // Cards / Hover
          700: '#1F2424', // Borders
        },
        sage: {
          DEFAULT: '#94A89A',
          dim: '#6D8075', // Fixed: For selection and accents
          glow: 'rgba(148, 168, 154, 0.1)',
        },
        paper: '#F5F7F7', // Premium typography color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(40px) scale(0.98)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
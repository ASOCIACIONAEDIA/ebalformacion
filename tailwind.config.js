/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      heading: ['Josefin Sans', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c7ccfe',
          300: '#a5adfc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#343d92', // Primary Brand Color
          700: '#2a3175',
          800: '#232962',
          900: '#1e224f',
          950: '#121430',
        },
        indigo: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1863dc', // Secondary Brand Color
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        red: {
          500: '#e42c2c', // Accent Red
          600: '#dc2626',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        'xl': '0.5rem', // Reduce roundness for a different feel
        '2xl': '0.75rem',
        '3xl': '1rem',
      }
    },
  },
  plugins: [],
};
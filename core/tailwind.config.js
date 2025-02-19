/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '!./node_modules/**', // Exclude everything in node_modules to speed up builds
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        primary: '#1061a3',
        secondary: '#287728',
        button:'#4baf4d',
        linkhover:'#757575',
        white: '#FFFFFF',
        error: {
          DEFAULT: '#AD0000',
          secondary: '#C62828',
        },
        success: {
          DEFAULT: '#146622',
          secondary: '#388E3C',
        },
        container: {
          padding: {
            DEFAULT: '1rem'
          }
        },
        gray: {
          100: '#f1f1f3',
          200: '#e6e7e9',
          300: '#a8a8a8',
          400: '#bcbdbf',
          500: '#797979',
        },
        green:{
          400:'#4baf4d',
          500:'#4eae4c',
        },
        footer:{
          100:'#002b4d',
          200:'#002039',
        }
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        filson: ['var(--font-filson-pro)']
      },
      borderColor: {
        DEFAULT: '#bcbdbf',
      },
      keyframes: {
        revealVertical: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        revealVertical: 'revealVertical 400ms forwards cubic-bezier(0, 1, 0.25, 1)',
      },
    },
  },

  plugins: [
    // @ts-ignore

    require('tailwindcss-radix')(),
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
};

module.exports = config;

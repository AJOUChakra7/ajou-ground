/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      nw: '100vw',
      nh: '100vh',
      full: '576px',
    },
    maxWidth: {
      full: '576px',
    },
    extend: {
      colors: {
        primary: {
          dark: '#0B123B',
          lightdark: '#165EB0',
          main: '#1a70d2',
          bright: '#639EE0',
          light: '#4363E1',
        },
        secondary: {
          main: '#FACD4B',
          light: '#FAEFC5',
        },
        title: '#232323',
        span: '#ababab',
        black: '#333333',
        white: '#fefefe',
        warn: '#C7A43C',
        error: '#C7473B',
        success: '#47C753',
      },
      keyframes: {
        fadeIn: {
          'from': {
            transform: 'translateY(-2rem)' 
          },
          'to': {
            opacity : '1'
          }
        },
        fadeOut: {
          'from': {
            opacity : '1'
          },
          'to': {
            opacity : '0'
          }
        },
        push: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.025)' },
        },
        pull: {
          '0%': { transform: 'scale(1.025)' },
          '100%': { transform: 'scale(0.96)' },
        },
      },
      animation: {
        push: 'push .2s ease-out forwards',
        pull: 'pull .2s ease-out forwards',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl'), color: theme('colors.text.title') },
        h2: { fontSize: theme('fontSize.xl'), color: theme('colors.text.title') },
        h3: { fontSize: theme('fontSize.lg'), color: theme('colors.text.title') },
        p: { fontSize: theme('fontSize.base'), color: theme('colors.text.default') },
        span: { fontSize: theme('fontSize.sm'), color: theme('colors.text.span') },
      });
    }),
  ],
};

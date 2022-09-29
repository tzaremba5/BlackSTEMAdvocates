const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green:colors.green,
      blue:colors.blue,
      warmGray:colors.warmGray,
    },
    extend: {
      'animation': {
          'gradient-x':'gradient-x 15s ease infinite',
          'gradient-y':'gradient-y 15s ease infinite',
          'gradient-xy':'gradient-xy 15s ease infinite',
      },
      'keyframes': {
          'gradient-y': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'center top'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'center center'
              }
          },
          'gradient-x': {
              '0%, 100%': {
                  'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'gradient-xy': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

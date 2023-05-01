/** @type {import('tailwindcss').Config} */

const { boxShadow } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const shadowBase = '0px 1px 2px rgba(16, 24, 40, 0.05)';

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      ...colors,
    },
    boxShadow: ({ theme }) => ({
      ...boxShadow,
      base: shadowBase,
      sb: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      xs: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);',
      sm: '0px 3px 8px rgba(0, 0, 0, 0.08)',
      'outline-primary': `${shadowBase}, 0px 0px 0px 4px ${theme('colors.primary[100]')}`,
      'outline-secondary': `${shadowBase}, 0px 0px 0px 4px ${theme('colors.blue[100]')}`,
      'outline-error': `${shadowBase}, 0px 0px 0px 4px ${theme('colors.error[100]')}`,
      'outline-gray': `${shadowBase}, 0px 0px 0px 4px ${theme('colors.gray[100]')}`,
    }),
    extends: {
      transitionProperty: {
        'height': 'height',
      }
    }
  },
  plugins: [],
}

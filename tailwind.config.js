const { boxShadow } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    boxShadow: {
      ...boxShadow,
      sm: '0px 3px 8px rgba(0, 0, 0, 0.08)',
    }
  },
  plugins: [],
}

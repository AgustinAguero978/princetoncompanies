/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

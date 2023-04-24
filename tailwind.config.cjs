/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontFamily:{
        custom: "'Open Sans', sans-serif",
      },

      colors: {
        dressblue: '#2b4360',
        azuretide:'#436585',
        skylinesteel: '#C6BFB3',
        spacegrey: '#404040',
        lightbluenew: '#E0E8E7',
      },

      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },

      keyframes: {
        fullSpin: {
          '100%':{transform:'rotate(-360deg)'},
        }
      },
      
      animation:{
        fullSpin:'fullSpin 3s linear infinite',
      },

    },
  },

  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],

  variants: {
    scrollbar: ['rounded']
}
}

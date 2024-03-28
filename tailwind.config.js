/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./index.html',
            './src/**/*.{css,js}'],
  theme: {
    extend: {
      fontFamily :{
        'robotoCondensed': ["'Roboto Condensed'"],
      },
      colors:{
        'blue-black': '#0d3860',
      },
    },
    
  },
  plugins: [],
}


const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Lato ,"Segoe UI", sans-serif',    
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const { addBasePath } = require('next/dist/shared/lib/router/router')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend:{
      colors:{
      myBlue: '#007FB6',
      
      },
      height: theme => ({
        "128": "30rem",
        "256": "60rem",
        "164": "50rem",
      }),
  }},
  variants: {
    extend: {
      
    },
  },
  plugins: [
    
    
  ],
}

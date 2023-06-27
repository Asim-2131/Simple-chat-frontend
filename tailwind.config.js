
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      height:{
        '130' : '40rem',
        '11/12' : '90%',
        '100' : '29rem',
        
      },
    }
  },
  plugins: [],
}
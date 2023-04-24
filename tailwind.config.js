/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'day': ['day1', 'sans-serif']
      },
      colors: {
        'primary-bg': '#F8F3E8',
        'sidebar-bg': '#BD7637',
        'text-color': '#FFFFFF',
        'user-bg'   : '#9F9B92',
        'bot-bg'    : '#4D4C47',
      },
      width: {
        'sidebar': '571px'
      }
    }
  },
  plugins: [],
}

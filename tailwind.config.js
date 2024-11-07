/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        customYellow: '#E9A21A',
        customBlue: '#022C5E',
        hoverBlue: '#011A3E'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        creamPrimary: 'rgb(211, 211, 211)',
        white: '#fff',
        black: '#000'
      }
    },
  },
  plugins: [],
}

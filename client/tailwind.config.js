/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hiveOrange: {
          normal: '#DC5F00',
          darker: '#B34D00'
        },
      },
      fontFamily: {
        arial: ['arial'],
        helvetica: ['helvetica'],
        verdana: ['verdana'],
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
}

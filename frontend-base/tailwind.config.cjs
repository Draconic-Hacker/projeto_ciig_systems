/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      }
    }
  },
  plugins: [],
}
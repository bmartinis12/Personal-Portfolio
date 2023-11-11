/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080708',
        primary: '#CBC8C9',
        secondary: '#111212',
        accent: '#757A7A',
        text: '#F0EFF0'
      }
    },
  },
  plugins: [],
}

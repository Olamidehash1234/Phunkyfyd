/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'zoom-100': '1119px',
        'zoom-90': '1341.11px',
        'zoom-80': '1528.75px',
        'zoom-75': '1640px',
      },
    },
  },
  plugins: [],
}

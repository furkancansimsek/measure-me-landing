/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/banner.jpg')",
      },
      colors: {
        'primary': "#513834",
        'myOrange': "#F38C28",
      }
    },
  },
  plugins: [],
}

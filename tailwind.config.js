/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/banner.jpg')",
        'progressBg' : "url('/src/assets/progressBg.svg')",
        'designCounterBg' : "url('/src/assets/DesignCounterBg.svg')",
      },
      colors: {
        'primary': "#513834",
        'myOrange': "#F38C28",
      }
    },
  },
  plugins: [],
}

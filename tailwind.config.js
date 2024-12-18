/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":'#676a6c',
        "secondary":"#F5F5F6",
        "border-color":"#e7e7e7"
      }
    },
  },
  plugins: [],
}
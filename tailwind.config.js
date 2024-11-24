/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      fontFamily: {
        mogra: ["Mogra", "system-ui"],
        crimson: ["Crimson Text", "serif"],
        abril: ["Abril Fatface", "serif"],
      },
    },
  },
  plugins: [],
}

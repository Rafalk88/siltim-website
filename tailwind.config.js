/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "af-white": "#FEF9FF",
        "plat": "#DBD9DB",
        "rose": "#B098A4",
        "gray": "747572",
        "ebony": "45503B"
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}

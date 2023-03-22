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
        "af-white": "#F9FCFF",
        "sunglow": "#FFD166",
        "rich-black": "#04151F",
        "blue-200": "#1e4363",
        "blue-400": "#17324a",
        "pink": "#EF476F",
        "emerald": "#06D6A0"
      },
      backgroundImage: {
        'hero': "url('../public/assets/new_hero.jpg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    animation: {
      "loading": 'spin 1s infinite'
    }
  },
  plugins: [],
}

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
        "blue": "#0133FF",
        "dark-grey": "#4A4661",
        "light-grey": "#F4F4F5"
      },
      content: {
        "arrow-left": 'url("../public/assets/RightArrow.svg")',
        "arrow-right": 'url("../public/assets/RightArrow.svg")',
      },
      backgroundImage: {
        'hero': "url('../public/assets/hero.jpg')",
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

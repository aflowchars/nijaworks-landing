/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          xs: "1.5rem",
          sm: "1.75rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4.5rem",
        },
      },

      colors: {
        "brand-purple": "#6E43FB",
        "light-primary": "#EFEFEF",
        "dark-primary": "#0D0E10",
        "dark-secondary": "#1E1E1E",
        "dark-ternary": "#080808",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

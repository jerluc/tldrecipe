const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        banana: "#fbbf24",
        "burnt-banana": "#40403a",
      },
      fontFamily: {
        display: ["Fredoka One"],
        body: ["Work Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "300px",
      // https://tailwindcss.com/docs/breakpoints#extending-the-default-breakpoints
      ...defaultTheme.screens,
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "fresh-banana": "#fffd87",
        "burnt-banana": "#40403a",
      },
      fontFamily: {
        display: ["Fredoka One"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};

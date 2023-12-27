/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        banana: "#fbbf24",
        "burnt-banana": "#40403a",
      },
      fontFamily: {
        display: ["Moirai One", "Rubik Moonrocks"],
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

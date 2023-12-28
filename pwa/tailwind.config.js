/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        banana: "#fbbf24",
        salmon: "#ff8B59",
      },
      fontFamily: {
        display: ["Moirai One"],
        body: ["Work Sans Variable"],
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};

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
        display: ["Barlow Semi Condensed", "sans-serif"],
        body: ["Barlow Semi Condensed", "Work Sans", "sans-serif"],
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "day-text": "#000000",
        "night-text": "#ffffff",
      },
    },
  },
  plugins: [],
};

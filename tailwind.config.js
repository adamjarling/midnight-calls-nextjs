/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        caprasimo: ["Caprasimo", "sans-serif"],
        statliches: ["Staatliches", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

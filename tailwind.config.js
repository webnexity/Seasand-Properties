/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"],
        sans: ['"Exo 2"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

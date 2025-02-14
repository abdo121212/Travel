/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0287a6",
        secondary: "#00c3c7",
      },
    },
  },
  plugins: [],
};

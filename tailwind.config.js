/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimaryDark: "#FF8A00",
        colorPrimaryLight: "#FFC000",
        colorSecondary: "#5C5C5C",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

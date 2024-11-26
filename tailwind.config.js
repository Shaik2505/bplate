/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#63ED",
        darkGrey: "#1F1F1F",
        offBlack: "#141414",
        offWhite: "#d4d4d4",
      },
    },
  },
  plugins: [],
};

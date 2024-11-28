/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // Light mode primary
        secondary: "#2ecc71", // Light mode secondary
        accent: "#e74c3c", // Light mode accent
        background: "#ecf0f1", // Light mode background
        text: "#2c3e50", // Light mode text
        onHover: "#95a5a6", // Light mode hover

        darkPrimary: "#8e44ad", // Dark mode primary
        darkSecondary: "#c0392b", // Dark mode secondary
        darkAccent: "#f39c12", // Dark mode accent
        darkBackground: "#34495e", // Dark mode background
        darkText: "#ecf0f1", // Dark mode text
        darkOnHover: "#7f8c8d", // Dark mode hover
      },
      fontSize: {
        'cXS': '.75rem',
        'cSM': '.875rem',
        'cMD': '1rem',
        'cLG': '1.125rem',
        'cXL': '1.25rem',
        'c2XL': '1.5rem',
        'c3XL': '1.875rem',
        'c4XL': '2.25rem',
        'C5XL': '3rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

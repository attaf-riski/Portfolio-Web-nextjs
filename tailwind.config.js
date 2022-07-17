/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        yellow: {
          50: "#FEFFF0",
          100: "#FDFFE0",
          200: "#FCFFBD",
          300: "#FAFF94",
          400: "#F7FF57",
          500: "#F1FF00",
          600: "#DAE600",
          700: "#C2CC00",
          800: "#A0A800",
          900: "#747A00",
        },
        primarygray: { DEFAULT: "#F6F7FF", 200: "#DCDCE0", 300: "#D2D2D2" },
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".shadow-skill": {
          "box-shadow": "0px 29px 50px rgba(0, 0, 0, 0.25)",
          "border-radius": "5px",
        },
      };

      addUtilities(utilities);
    }),
  ],
};

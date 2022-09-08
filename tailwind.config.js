/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "600px",
      md: "728px",
      lg: "768px",
      xl: "1024px",
    },
    extend: {
      colors: {
        discord_gray: "#f6f6f6",
        discord_blue: "#404eed",
        discord_black_text: "#23272a",
        discord_purple: "#5865f2",
        discord_back_gray: "#202225",
        discord__light_gray: "#2F3136",
        discord__light_gray2: "#36393F",
      },
    },
    fontFamily: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

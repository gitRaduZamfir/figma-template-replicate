/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: "#FFF2F3",
        secondtext0: "#252b42",
        secondtext1: "#737373",
        secondtext2: "#96BB7C",
        secondtext3: "#bdbdbd",
        secondtext4: "#87a86f",
      },
      fontFamily: {
        mon: ["Montserrat"],
      },
      backgroundImage: {
        ph3: "url('img/placeholder3.png')",
      },
    },
  },
  plugins: [],
};

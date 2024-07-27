/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "2d6acc"
      },
      fontFamily: {
        JakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        mammoth: `7.0rem;`,
      }
    },
  },
  plugins: [],
}


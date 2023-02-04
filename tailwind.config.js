/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "#F25F3A",
        brightRedLight: "#F6866A",
        brightRedSupLight: "#FDECE7",
        darkBlue: "#242D52",
        darkGreyishBlue: "#9095A7",
        veryDarkBlue: "#1D1E25",
        veryPaleRed: "#FFEFEB",
        veryLightGray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "768px",
      md: "890px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      fontFamily: {
        galanoGrotesqueAltRegular: ["GalanoGrotesqueAltRegular", "sans-serif"],
        galanoGrotesqueSemiBold: ["GalanoGrotesqueSemiBold", "sans-serif"],
        galanoGrotesqueAltMedium: ["GalanoGrotesqueAltMedium", "sans-serif"],
        galanoGrotesqueBold: ["GalanoGrotesqueBold", "sans-serif"],
      },
      colors: {
        basicBlue: "#00415a",
        underlineBlue: "#0e7Caf",
        backgroundBlue: "#e3f2f8",
        sliderNavigationBlue: "#546071",
        sliderNavigationBlueOHover: "#152136",
        buttonBlue: "#0e7aad",
        backgroundBlueSection2: "#005f87",
        spanBlue: "#afd9ed",
      },
      boxShadow: {
        sliderPagination: "0px 0px 0px 2px rgba(255,255,255, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-hyphens")],
}

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#a7a1ff",
          200: "#9892ff",
          300: "#8982ff",
          400: "#7b73ff",
          500: "#6c63ff",
          600: "#6159e6",
          700: "#564fcc",
          800: "#4c45b3",
          900: "#413b99",
        },
      },
      boxShadow: {
        blue: "0 5px 7px #95fcf7",
        white: "0 5px 7px #ffffff",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "visited"],
    textColor: ["responsive", "hover", "focus", "visited"],
  },
  plugins: [],
};

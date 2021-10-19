const spacing = {};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#10375C",
        },
        secondary: {
          600: "#FF5722",
        },
      },
      spacing: spacing,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

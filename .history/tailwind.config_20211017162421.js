const spacing = {
  7.5: "1.875rem", // 30px
  5.5: "1.375rem", // 22px
};

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
        grey: {
          500: "#676767",
          800: "#333333",
        },
      },
      spacing: spacing,
      borderWidth: {
        3: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const spacing = {
  7.5: "1.875rem", // 30px
  5.5: "1.375rem", // 22px
  6.25: "1.5625rem", // 25px
  86: "21.5rem", // 344px
  86: "21.5rem", // 344px
  144: "36rem", // 576px
  185: "46.25rem", // 740px
};

module.exports = {
  purge: ["./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
      fontSize: {
        xxxs: [".5rem", ".75rem"],
        xxs: [".625rem", ".75rem"],
      },
      minWidth: {
        15: "3.75rem", // 60px
      },
      minHeight: {
        14: "3.5rem", // 56px
      },
      maxHeight: {
        none: "none",
        144: "36rem", // 576px
      },
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

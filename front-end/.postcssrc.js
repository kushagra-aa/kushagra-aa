module.exports = {
  plugins: {
    "postcss-import": { path: "./src/styles/utils" },
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
    "postcss-extend-rule": {},
    stylelint: {},
  },
};

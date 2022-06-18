module.exports = {
  module: {
    test: /\.(js)$/,
    exclude: /node_modules/,
    // loader: "sass-loader",
    use: [
      "vue-style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        query: {
          name: "bundle.js",
        },
      },
    ],
  },
};

module.exports = {
  module: {
    test: /\.(js)$/,
    exclude: /node_modules/,
    // loader: 'eslint-loader',
    use: [
      {
        loader: "eslint-loader",
        query: {
          name: "bundle.js",
        },
      },
    ],
  },
};

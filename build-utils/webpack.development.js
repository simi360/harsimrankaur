const port = process.env.PORT || 3000;

module.exports = () => ({
  output: {
    filename: "[name].[hash].js",
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
});

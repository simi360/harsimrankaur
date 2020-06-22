const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].bundle.js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [new MiniCssExtractPlugin()],
});

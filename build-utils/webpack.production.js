const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
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
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            //changes images in base64 format until a certain limit and renames it with an hash
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});

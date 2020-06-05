const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
// va chercher le mode de l'environnement dans la commande effectuée
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

const HtmlWebpackPlugin = require("html-webpack-plugin");

//environment and presets arguments with their default values are given
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              "babel-loader",
              {
                loader: "eslint-loader",
                options: {
                  cache: true,
                },
              },
              "stylelint-custom-processor-loader", //for css in js
            ],
          },
          {
            test: /\.png/,
            use: [
              {
                //changes images in base64 format until a certain limit and renames it with an hash
                loader: "url-loader",
                options: {
                  limit: 500,
                },
              },
            ],
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: "fonts/",
                },
              },
            ],
          },
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html",
        }),
        //adds the created bundles between script tags in the output file
        new webpack.ProgressPlugin(),
      ],

      optimization: {
        //creats also a bundle from vendors
        splitChunks: {
          // include all types of chunks
          chunks: "all",
        },
      },
    },
    modeConfig(mode)
    // presetConfig({
    //    mode,
    //    presets
    // })
  );
};

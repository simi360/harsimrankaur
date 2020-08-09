const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
// va chercher le mode de l'environnement dans la commande effectuée
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

//environment and presets arguments with their default values are given
module.exports = (
  { mode, presets, psw } = { mode: "production", presets: [] }
) => {
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
              },
              "stylelint-custom-processor-loader", //for css in js
            ],
          },
          {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
          },
          {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
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
        //adds the created bundles between script tags in the output file
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
          __PSW__: JSON.stringify(psw || ""),
        }),
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

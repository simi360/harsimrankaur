const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
    devtool: "source-map",
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].bundle.js',
      publicPath: 'dist/',
    },
    module: {
        rules: [
            {
               test: /\.css$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  {
                     loader: 'css-loader',
                     options: {
                        modules: true,
                        localsConvention: 'camelCase',
                        sourceMap: true
                     }
                  },
               ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});

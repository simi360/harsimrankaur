const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
// va chercher le mode de l'environnement dans la commande effectuée
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

const HtmlWebpackPlugin = require("html-webpack-plugin");

//on va fournir des arguments d'environnement et de presets avec leurs valeurs par défaut
module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
    return webpackMerge(
        {
            mode,
            // to change name of the bundle (by default main.js)
            output: {
                filename: "bundle.js"
            },

            module: {
                rules: [
                    {
                        test: /\.png/,
                        use: [
                            {
                                //changes images in base64 format until a certain limit and renames it with an hash
                                loader: "url-loader",
                                options: {
                                    limit: 500
                                }
                            }
                        ]
                    }
                ]
            },

            plugins: [
                new HtmlWebpackPlugin(),
                //va rajouter le bundle créé dans un script tag dans l'index
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode),
        presetConfig({mode, presets})
    );
};
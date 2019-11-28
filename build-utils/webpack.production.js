const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
    devtool: "source-map",
    output: {
        //permet de nommer le nom du fichier en hash
        // filename: "[chunkhash].js"
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});
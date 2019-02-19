var webpack = require("webpack");
var path = require("path");

var sourceDirectory = path.join(__dirname, "src");

module.exports = {
    entry: [path.join(sourceDirectory, "index.js")],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        hot: true,
        contentBase: sourceDirectory,
        historyApiFallback: true
    }
};

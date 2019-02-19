var webpack = require("webpack");
var path = require("path");

var parentDir = path.join(__dirname, "../");

module.exports = {
    entry: [path.join(parentDir, "index.js")],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    output: {
        path: parentDir + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        hot: true,
        contentBase: parentDir,
        historyApiFallback: true
    }
};

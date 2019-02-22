var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var sourceDirectory = path.join(__dirname, "src");
// var data = require("json-loader!yaml-loader!./src/data/data.yaml");
console.log("mensaje de prueba");

module.exports = {
    entry: [path.join(sourceDirectory, "index.js")],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.pug$/,
                include: [path.join(__dirname, "src", "layout")],
                use: [
                    {
                        loader: "file-loader?name=[name].html"
                    },
                    {
                        /**
                         * We use extract-loader in this configuration because
                         * file-loader above expects a string. In other configs,
                         * we use HtmlWebpackLoader which handles the module
                         * output of render-template-loader, so extract-loader
                         * is not required.
                         */
                        loader: "extract-loader"
                    },
                    {
                        loader: "render-template-loader",
                        options: {
                            engine: "pug",
                            locals: {
                                title: "Rendered with Pug!",
                                desc: "Partials Support"
                            },
                            engineOptions: function(info) {
                                return { filename: info.filename };
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [],
    devServer: {
        hot: true,
        contentBase: sourceDirectory,
        historyApiFallback: true
    }
};

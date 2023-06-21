const { resolve, dirname } = require("path");
const packageJson = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const scriptName = `index.js`;

const isProd = process.env.NODE_ENV === "production";

const config = {
    mode: isProd ? "production" : "development",
    entry: {
        index: "./src/index.tsx"
    },

    output: {
        path: resolve(__dirname, "dist"),
        filename: scriptName
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            meta: {
                charset: 'UTF-8'
            }
        })
    ]
}

if (isProd) {
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()]
    }
}

else {
    config.devServer = {
        port: 7003,
        open: false,
        hot: true,
        liveReload: true,
        compress: true
    }
}

module.exports = config;
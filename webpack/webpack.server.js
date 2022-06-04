const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    entry: "./src/index.ts",
    mode: process.env.ENV || "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "..", "dist"),
    },
};

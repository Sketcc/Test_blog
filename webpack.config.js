const path = require("path")
const nodeExternals = require("webpack-node-externals")
module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/server",
    target: "node",
    watch: true,
    output: {
        filename: "server.js"
    },
    externals: [nodeExternals()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
        extensions: [".html", ".css", ".js"]
    }
}
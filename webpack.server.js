const path = require("path")
const nodeExternals = require("webpack-node-externals")
const baseConfig = require("./webpack.base");
const {merge} = require("webpack-merge")
const serverConfig = {
    mode: "development",
    devtool: "none",
    entry: "./src/server",
    target: "node",
    output: {
        filename: "server.js",
        path:path.resolve(__dirname,"./dist")
    },
    externals: [nodeExternals()]

}
module.exports = merge(baseConfig,serverConfig)




module.exports = {
    devtool: "none",
    entry: "./src/server",
    target: "node",
    output: {
        filename: "server.js"
    },
    externals: [nodeExternals()],
}
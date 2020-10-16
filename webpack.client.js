const path = require("path")
const baseConfig = require("./webpack.base");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const clientConfig = {
    mode: "development",
    devtool: "source-map",
    entry: {
        axios:"./src/client/axios.js",
        index:"./src/client/base.js",
     
    },    
    output:{
        filename:"js/[name].bundle.js",
        path:path.resolve(__dirname,"./public")
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['**/*','!favicon.ico']
        })
    ]

}

module.exports = merge(baseConfig,clientConfig)
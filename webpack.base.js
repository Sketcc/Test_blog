const path = require("path")
module.exports = {
    watch: true,
    output: {
        filename: "server.js"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
        extensions: [".html", ".css", ".js"]
    }
}
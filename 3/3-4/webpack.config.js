const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    //production cheap-module-source-map
    //development cheap-module-eval-source-map
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './disk',
        open: true
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'disk'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()]
}

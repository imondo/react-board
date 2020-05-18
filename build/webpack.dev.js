const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')

const PORT = process.env.PORT || 1220

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
    port: PORT,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    })
  ]
}


module.exports = smart(base, devConfig);
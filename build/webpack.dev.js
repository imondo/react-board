const webpack = require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
const config = require('./../config')

const PORT = process.env.PORT || 1220

const devConfig = {
  mode: config.dev.NODE_ENV,
  devtool: 'source-map',
  devServer: {
    stats: 'errors-only',
    contentBase: "./dist",
    port: PORT,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(config.dev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}


module.exports = smart(base, devConfig);
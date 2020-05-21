const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
const config = require('./../config')

const prodConfig = {
  mode: config.prod.NODE_ENV,
  output: {
    publicPath: config.prod.publicPath,
    filename: '[name].[contentHash:6].js',
    chunkFilename: 'chunk/[name].[chunkhash:6].js'
  },  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(config.prod)
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        }
      }
    }
  }  
}

module.exports = smart(base, prodConfig)
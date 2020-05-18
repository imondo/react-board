const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contentHash:6].js',
    chunkFilename: 'chunk/[name].[chunkhash:6].js'
  },  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    })
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
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const base = require('./webpack.base');
const config = require('../config');

module.exports = merge(base, {
  mode: config.dev.NODE_ENV,
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    port: 9527,
    hot: true,
    open: true
  }
})
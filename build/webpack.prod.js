const path = require('path');
const { merge } = require('webpack-merge');

const base = require('./webpack.base');
const config = require('../config');

const resolve = dir => path.resolve(__dirname, dir)

module.exports = merge(base, {
  mode: config.build.NODE_ENV,
  output: {
    path: resolve('../dist'),
    publicPath: `${config.build.publicPath}`,
    filename: '[name].js'
  }
})
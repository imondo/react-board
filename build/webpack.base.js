const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: {
    app: resolve('../src/App.js')
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Web',
      filename: 'index.html',
      template: 'src/index.html',
      files: {
        js: [
          '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js'
        ],
        css: []
      }
    })
  ]
}
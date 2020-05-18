const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = src => path.resolve(__dirname, src)

module.exports = {
  mode: '',
  entry: {
    main: [
      'babel-polyfill',
      resolve('../src/main.js')
    ]
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunk/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: ['less-loader', 'style-loader', 'css-loader']
      },
      {
        test: /.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
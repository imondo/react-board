const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  mode: '',
  entry: {
    main: [
      'babel-polyfill',
      resolve('../src/App.js')
    ]
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunk/[name].[chunkhash:6].js'
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
        use: ['style-loader', 'css-loader', 'less-loader']
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
    // 设置别名
    alias: {
      '@': resolve('../src')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: []
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src/js/index.js'),
  devServer: {},
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(css|less$)/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ]
}
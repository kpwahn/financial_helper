const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    stats: 'errors-only',
    historyApiFallback: true
  },
  entry: './src/index.js',
  output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/'
  },
  mode: 'development',
  module: {
      rules: [
          {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
          {test: /\.css$/, loader: 'style-loader'},
          {test: /\.css$/, loader: 'css-loader'},
          {test: /\.(png|jpg|gif)$/, loader: 'url-loader'}
      ]
  },
  // Remove this for info about perforamce(i.e bundle size)
  performance : {
    hints : false
  },
  watchOptions: {
    poll: true
  }
}

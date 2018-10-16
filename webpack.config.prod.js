const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { MODULE, SRC_DIR, DIST_DIR } = require('./webpack.constants');

module.exports = {
  entry: ['@babel/polyfill', `${SRC_DIR}/index.jsx`],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', SRC_DIR],
  },
  output: {
    path: DIST_DIR,
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  mode: 'production',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
    }),
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('https://example.com/api'),
      },
    }),
  ],
  module: MODULE,
};

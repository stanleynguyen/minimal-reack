const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { MODULE, SRC_DIR, DIST_DIR } = require('./webpack.constants');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', SRC_DIR],
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    '@babel/polyfill',
    `${SRC_DIR}/index.jsx`,
  ],
  devServer: {
    inline: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: 'index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('http://localhost:8080/api'),
      },
    }),
  ],
  module: MODULE,
};

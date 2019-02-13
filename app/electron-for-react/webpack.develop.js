const webpack = require('webpack');
const resolves = require('./config/resolves');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');
const vendors = require('./config/vendor');
const splitChunks = require('./config/splitChunks');
// const BundleAnalyzer = require('webpack-bundle-analyzer');

const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/js/entry.jsx'],
    vendor: vendors
  },
  target: 'electron-renderer',
  module: {
    rules: loaders
  },
  optimization: {
    splitChunks
  },
  devtool: 'inline-source-map',
  resolve: resolves,
  plugins: [
    ...plugins,
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzer()
  ],
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: '/dist/js',
    port: 3030,
    // 他デバイスで見たい時用
    // host: "0.0.0.0",
    hot: true,
    overlay: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true
    }
  }
};

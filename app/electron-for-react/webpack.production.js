const resolves = require('./config/resolves');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');
const vendors = require('./config/vendor');
const splitChunks = require('./config/splitChunks');
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: {
    app: ['@babel/polyfill', './src/js/entry.jsx'],
    vendor: vendors
  },
  optimization: {
    splitChunks
  },
  module: {
    rules: loaders
  },
  resolve: resolves,
  plugins: [
    ...plugins,
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};

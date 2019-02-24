import webpack from 'webpack';
import path from 'path';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

export const tsRule: webpack.Rule = {
  test: /\.(ts|tsx)/,
  use: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }
};

export const cssRule: webpack.Rule = {
  test: /\.sass/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        module: true
      }
    },
    {
      loader: 'postcss-loader'
    },
    {
      loader: 'sass-loader'
    }
  ]
};

export const htmlRule: webpack.Rule = {
  test: /\.pug/,
  use: [
    {
      loader: 'pug-loader'
    }
  ]
};

export const ruleList: webpack.Rule[] = [tsRule, cssRule, htmlRule];

export const resolves: webpack.Resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx']
};

export const plugins: webpack.Plugin[] = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve('./src/html/index.pug')
  }),
  new webpack.HotModuleReplacementPlugin()
];

export const output: webpack.Output = {
  path: path.resolve('./dist/js'),
  filename: 'bundle.js',
  publicPath: '/'
};

// const isProduction = process.env.NODE_ENV === 'production';

export const baseConfig: webpack.Configuration = {
  mode: 'development',
  entry: [path.resolve('./src/react/entry.tsx')],
  output: output,
  // target: 'electron',
  module: {
    rules: ruleList
  },
  resolve: resolves,
  plugins: plugins,
  devServer: {
    contentBase: '/dist',
    port: 3030,
    // 他デバイスで見たい時用
    host: '0.0.0.0',
    hot: true,
    overlay: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true
    }
  }
};

export default baseConfig;

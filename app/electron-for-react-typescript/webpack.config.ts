import webpack from 'webpack';
import path from 'path';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AutodllWebpackPlugin = require('autodll-webpack-plugin');

// const isSourceMap: Boolean = true;
export const tsRule: webpack.Rule = {
  test: /\.(ts|tsx)/,
  include: path.resolve('src'),
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ]
};

export const cssRule: webpack.Rule = {
  test: /\.(sass|scss)/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        modules: true
      }
    },
    // {
    //   loader: 'css-typescript-loader'
    // },
    // {
    //   loader: 'postcss-loader',
    //   options: {
    //     sourceMap: isSourceMap
    //   }
    // },
    {
      loader: 'sass-loader'
    }
  ]
};

export const htmlRule: webpack.Rule = {
  test: /\.pug/,
  include: path.resolve('src'),
  exclude: /node_modules/,
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
  new ForkTsCheckerWebpackPlugin({ reportFiles: ['src/**/*.{ts,tsx}'] }),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve('./src/html/index.pug'),
    minify: {
      collapseWhitespace: true
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new AutodllWebpackPlugin({
    inject: true,
    filename: '[name]_[hash].js',
    entry: {
      react: ['react', 'react-dom'],
      mobx: ['mobx', 'mobx-react'],
      util: ['fecha', 'axios', 'url']
    }
  }),
  new BundleAnalyzerPlugin()
];

export const output: webpack.Output = {
  path: path.resolve('dist'),
  filename: '[name].js'
};

export const baseConfig: webpack.Configuration = {
  // mode: 'development',
  mode: 'production',
  entry: {
    'dll-user': [path.resolve('src/react/entry.tsx')]
  },
  output: output,
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  resolveLoader: {
    modules: ['node_modules', 'loaders']
  },
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

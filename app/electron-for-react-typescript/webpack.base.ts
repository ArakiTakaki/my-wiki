import * as webpack from 'webpack';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
  use: ['html-loader', 'pug-loader']
};

export const ruleList: webpack.Rule[] = [tsRule, cssRule, htmlRule];

export const resolves: webpack.Resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx']
};

export const plugins: webpack.Plugin[] = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    cache: true,
    template: path.resolve('./src/html/index.pug'),
    inject: 'head'
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
  plugins: plugins
};

export default baseConfig;

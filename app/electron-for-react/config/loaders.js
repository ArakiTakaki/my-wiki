const path = require('path');
const isSourceMaps = {
  development: true,
  production: false
};
console.log(process.env.MODE);
const isProduction = isSourceMaps[process.env.MODE] || false;
const isSourceMap = isSourceMaps[process.env.MODE] || false;
const styleLocalIdentName = isProduction ? '[name]-[local]-[hash:base64:4]' : '[name]-[local]-[hash:base64:4]'

module.exports = [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
  },
  {
    enforce: "pre",
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: "eslint-loader"
  },
  {
    test: /\.pug$/,
    use: [{
      loader: "pug-loader"
    }]
  },
  {
    test: /\.(sass|scss)$/,
    use: [{
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: isSourceMap,
          localIdentName: styleLocalIdentName,
          modules: true
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: isSourceMap,
          plugins: [require("autoprefixer")({grid: true})]
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: isSourceMap
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          sourceMap: isSourceMap,
          resources: [path.resolve('./src/scss/resources/*.scss')]
        }
      }
    ]
  }
];
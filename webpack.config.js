const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {

  cache: true,

  resolve: {
    root: [path.resolve(__dirname, "src")],
    extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['happypack/loader?id=jsx'],
        include: [
          path.join(__dirname, "src")
        ]
      },
      {
        test: /\.s?css$/,
        loaders: ['happypack/loader?id=style'],
        include: [
          path.join(__dirname, "src")
        ]
      }
    ]
  },

  postcss() {
    return [autoprefixer];
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.tmpl.html"),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new HappyPack({
      id: 'jsx',
      loaders: [ 'babel?compact=false&cacheDirectory=true' ]
    }),
    new HappyPack({
      id: 'style',
      loaders: [ 'style-loader?singleton!css-loader!postcss-loader!sass-loader' ]
    })
  ]

};
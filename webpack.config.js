const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {

  cache: true,

  resolve: {
    root: [path.resolve(__dirname, "src")],
    extensions: ["", ".jsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?compact=false&cacheDirectory=true',
        include: [
          path.join(__dirname, "src")
        ]
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader?singleton!css-loader!postcss-loader!sass-loader',
        include: [
          path.join(__dirname, "src")
        ]
      },
      {
        test: /\.(woff|png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=10000&name=img/[name]-[hash:6].[ext]',
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
    })
  ]

};
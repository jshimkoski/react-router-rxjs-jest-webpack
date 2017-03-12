const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {

  cache: true,

  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".jsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        include: [
          path.join(__dirname, "src")
        ]
      },
      {
        test: /\.(woff|png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "img/[name]-[hash:6].[ext]"
            }
          }
        ],
        include: [
          path.join(__dirname, "src")
        ]
      }
    ]
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
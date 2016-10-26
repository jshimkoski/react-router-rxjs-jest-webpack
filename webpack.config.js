const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  cache: true,

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    progress: true,
    stats: 'errors-only'
  },

  devtool: "eval-source-map",

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],

  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },

  resolve: {

    root: [path.resolve(__dirname, "src")],

    modulesDirectories: ["web_modules", "node_modules", "routes", "components", "states"],

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

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.tmpl.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({
      id: 'jsx',
      loaders: [ 'babel?compact=false&cacheDirectory=true' ]
    }),
    new HappyPack({
      id: 'style',
      loaders: [ 'style-loader?singleton!css-loader!sass-loader' ]
    })
  ]

};
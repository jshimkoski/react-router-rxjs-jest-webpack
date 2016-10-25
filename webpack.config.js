const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    progress: true,
    stats: 'errors-only'
  },

  devtool: "source-map",

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
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.s?css$/, loader: "style-loader?singleton!css-loader!sass-loader" }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src", "index.tmpl.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

};
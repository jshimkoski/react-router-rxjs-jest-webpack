var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

  entry: "./src/index.jsx",

  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },

  devServer: {inline: true },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {

    root: [path.resolve(__dirname), path.resolve(__dirname, "src")],

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
      template: path.resolve(__dirname, "src", "index.tmpl.html")
    })
  ]

};
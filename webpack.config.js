var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

  entry: "./src/index.jsx",

  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.tmpl.html")
    })
  ],

  devServer: {inline: true },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {

    root: [path.resolve(__dirname, "src"), path.resolve(__dirname, "src", "shared")],

    modulesDirectories: ["web_modules", "node_modules", "routes", "components", "stores"],

    extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
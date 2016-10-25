var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

  entry: "./src/index.ts",

  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'Smilejs'
  })],

  devServer: {inline: true },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {

    root: [path.resolve(__dirname, "src"), path.resolve(__dirname, "src", "shared")],

    modulesDirectories: ["web_modules", "node_modules", "routes", "components", "services"],

    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
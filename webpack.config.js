const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  cache: true,

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
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.join(__dirname, "src")
        ],
        query: {
          compact: false,
          cacheDirectory:true
        }
      },
      {
        test: /\.s?css$/,
        loader: "style-loader?singleton!css-loader!sass-loader",
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
    new webpack.HotModuleReplacementPlugin()
  ]

};
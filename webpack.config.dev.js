var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
const path = require('path');

webpackConfig.devtool = '#source-map';

webpackConfig.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  historyApiFallback: true,
  hot: true,
  inline: true,
  compress: true,
  port: 8080,
  noInfo: false,
  quiet: false,
  stats: {
    colors: true,
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    chunkModules: false,
    /*modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    publicPath: false*/
  }
};

webpackConfig.module.rules.push(
  {
    test: /\.jsx?$/,
    use: [
      {
        loader: "react-hot-loader"
      },
      {
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react'
          ],
          plugins: []
        }
      }
    ],
    include: [
      path.join(__dirname, "src")
    ]
  }
);

webpackConfig.entry = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './src/index.jsx'
];

webpackConfig.output = {
  path: '/dist',
  filename: '[name].js',
  publicPath: 'http://localhost:8080/'
};

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = webpackConfig;
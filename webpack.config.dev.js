var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
const path = require('path');

webpackConfig.devtool = '#eval';

webpackConfig.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  historyApiFallback: true,
  compress: true,
  hot: true,
  inline: true,
  port: 8080,
  progress: true,
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

webpackConfig.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './src/index.jsx'
];

webpackConfig.output = {
  path: 'dist',
  filename: '[name].js'
},

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = webpackConfig;
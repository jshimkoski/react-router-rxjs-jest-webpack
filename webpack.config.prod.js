var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var vendorList = require('./webpack.config.vendors.js');
const path = require('path');

webpackConfig.module.loaders.push(
  {
    test: /\.jsx?$/,
    loader: 'babel?compact=false&cacheDirectory=true',
    include: [
      path.join(__dirname, "src")
    ]
  }
);

webpackConfig.entry = {
  app: ['./src/index.jsx'],
  vendor: vendorList
};

webpackConfig.output = {
  path: 'dist',
  filename: '[name].[chunkhash].js'
},

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[chunkhash].js'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: { warnings: false },
    options: { mangle: true },
    output: { comments: false }
  })
);

module.exports = webpackConfig;
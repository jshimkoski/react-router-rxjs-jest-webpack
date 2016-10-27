var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var vendorList = require('./webpack.config.vendors.js');

webpackConfig.devtool = '#source-map';

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
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[chunkhash].js')
);

module.exports = webpackConfig;
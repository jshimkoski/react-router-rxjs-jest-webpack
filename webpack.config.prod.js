var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var vendorList = require('./webpack.config.vendors.js');
const path = require('path');

webpackConfig.module.rules.push(
  {
    test: /\.jsx?$/,
    use: [
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
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].[chunkhash].js' }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    options: { mangle: true },
    output: { comments: false }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
);

module.exports = webpackConfig;
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    compress: true,
    historyApiFallback: true,
    contentBase: './assets',
  },
  plugins: [
    new webpack.DefinePlugin({
      __API__: "''", // testing server
    }),
  ],
});

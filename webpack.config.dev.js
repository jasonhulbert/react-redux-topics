const webpackMerge = require('webpack-merge');
const defaultConfig = require('./webpack.config');

module.exports = webpackMerge(defaultConfig, {
  devtool: 'eval-source-map',
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  }
});

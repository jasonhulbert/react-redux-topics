const webpackMerge = require('webpack-merge');
const defaultConfig = require('./webpack.config');

module.exports = webpackMerge(defaultConfig, {
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          reuseExistingChunk: true
        }
      }
    }
  }
});

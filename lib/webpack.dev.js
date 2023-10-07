const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devServer: {
    hot: true,
  },
  devtool: 'cheap-source-map',
  // 开启stats？
};

module.exports = merge(baseConfig, devConfig);

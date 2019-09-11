const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

// 使用webpack-merge复用之前的配置
module.exports = merge(baseConfig, {
  // 用于调试。inline-source-map模式效率比较高，所以dev环境下推荐使用这个
  devtool: 'inline-source-map',
  mode: 'development',
  // 设置dev服务器
  devServer: {
    // 设置端口号，默认8080
    port: 8000
  },
  plugins: [
    new webpack.DefinePlugin({
      //  注入process.env全局变量区分环境
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    })
  ]
})
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
  entry: resolve('app/main.js'), // 指定入口
  // 设置出口并确定输出的文件名称 
  output: {
    path: resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: resolve('app'), // 只编译app文件夹下的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        include: resolve('app'),
        loader: 'html-loader'
      },
      {
        test: /\.less$/,
        include: resolve('app'),
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=1000'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('app')  // 设置别名路径
    },
    extensions: ['.js', '.jsx'] // 设置文件名后缀自动不补全，即import文件时如果没写后缀优先找下面几个
  },
  // 第三方依赖，可以写在这里，不打包
  externals: {},
  plugins: [
      new  HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolve('template/app.html')
      })
  ]
}
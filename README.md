# react-ssr

## 结构目录
.
|-- app

|   |-- main.js 页面render

|   |-- style css文件

|   |-- style css文件

|   |-- static 静态资源

|-- build
|   |-- utils.js 公共方法
|   |-- webpack.base.config.js 基本webpack的配置（entry，output...）
|   |-- webpack.dev.config.js 设置全局变量区分环境等，复用webpack.base.config.js配置操作
|-- server
|-- template
|   |-- app.html 模板文件
|-- package.json
|-- README.md
|-- .gitignore

## webpack的配置
- 安装webpack
  - entry 入口
  - output 设置输出文件
  - rules 配置loader
  - babel 编译代码
  - HtmlWebpackPlugin 自动生成html
- 配置react环境
  - render 输出
  - script 命令添加
- 配置开发环境
  - webpack-dev-server 可本地启动服务，热更新，接口代理等
  - webpack-merge 可复用配置
  - devServer 配置
  - process.env 注入全局变量区分环境

## 使用koa搭建node服务
- 安装koa
- 利用koa起一个服务
- 通过react-dom/server的renderToString方法将react组件，返回输出字符串给客户端
- 同构问题
  - 服务端渲染的页面是静态资源，因为是不具备click等事件系统
  - 此时就需要同构处理这个问题，即一份代码在服务端执行一次，在客户端也执行一次
  - 就是浏览器执行React打包后的js代码
  - webpack.base.config.js配置文件，打包输出一份客户端index.js文件。
## SSR下的路由
- 前端路由使用react-router
- 服务端路由使用koa-router
  - 用koa-router注册路由,并且使用renderToString将组件转成html
  - 内容添加一个html模板

## SSR中的数据请求
- 使用redux通过props传数据做到前后端同步
- 前端通过 Provider 将store注入到组件中
- 前后端同步数据，即需要把store注入到window上即可，因为前端默认了值，我们加载index.js的时候前端又重新初始化了stor

#### 学习之一 https://juejin.im/post/5c90b4115188252d9559136c

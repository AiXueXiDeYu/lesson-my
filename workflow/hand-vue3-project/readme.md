# 前端工程化

- webpack 5
- vue 3
- npm init -y 
   初始化 项目为  node 后端项目  package.json 项目描述文件
   npm i -g yarn 安装到全局
   npm i webpack 安装到当前项目
- yarn
   npm 的代替品， 来自Facebook
   npm i
   yarn add
- 工程化在代码的开发阶段
   development  代码开发   vite webpack   babel    搭建开发阶段的脚手架
      npm i webpack -D
   test         测试阶段
   production   上线阶段   vue 

- 工程化的套件 devDependiences
   - webpack webpack-cli 5.0.1
   - src 代码开发目录
      mian.js 入口文件
      index.html 首页 root 挂载点
   - 如何web-server 在 ：8080 index HTML 显示
   - main.js 
      createApp App.vue 根组件
   - webpack --mode=development
      启动 webpack 工程化 为代码开发做准备
      webpack-cli --mode-development 命令行参数
      webpack-dev-server 在webpack 编译的同时， 启动 web server
      npm run dev
      webpack webpack.config.js
- webpack 配置
   - 最基本的就是 entry output 的概念

- loader 的重要概念
   - webpack entry 到 output 中间
      module 匹配每一个规则
      在使用相应的loader 去处理的过程

- webpack-dev-server
   为了性能， 把代码放在内存中

- hash？ 
   根据文件内容进行计算 得到一个唯一值 留下打包历史
   为了防止浏览器的缓存 CleanWebpackPulgin 清空一下

- --mode=
   development 开发阶段
   production 上线   代码压缩？ http 传输 越小越好

- vite 完胜webpack
   更快 启动快 重新编译快
   vite 使用了Go(rust) 代替 node 编译
   webpack 生态更成熟

- babel 是什么？
   JS 的编译器 正因为babel， es6+ 才大胆的使用起来
   @babel/core babel 的核心库
   @babel/cli 命令行
   @babel/preset-env 预处理方式 preset    env 按照你的当前环境来编译




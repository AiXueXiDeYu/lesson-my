// console.log('hello world');

// import App from './App.vue' // 引入App.vue 但是 .vue 文件无法识别

// const root = document.getElementById('root')
// root.textContent = 'ni shi ?'

import { createApp } from 'vue' // 依赖关系
import App from './App.vue'
import './assets/a.png' // 一切静态资源都可以打包

const app = createApp(App)
app.mount('#root')
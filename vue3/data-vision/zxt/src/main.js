import { createApp } from 'vue'
import App from './App.vue'
// js 使用import 引入了css vite 的功劳
// link 传统
// 更加好统一管理
import 'element-plus/dist/index.css'
// 全局引入
// 性能问题

import {
   // 按需加载
   ElButton, 
   ElCard
} from 'element-plus' // 亚洲啤酒厂

const app =  createApp(App)
// ElButton 全局组件引入
app
   .use(ElButton)
   .use(ElCard) // 组件变成全局组件
app.mount('#app')

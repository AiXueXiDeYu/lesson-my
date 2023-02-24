import { defineStore } from 'pinia'
// 每个路由级别组件都有独立的store 模块
import { getSwiperList, getVideosList } from '@/service/home.js'
import videosList from '../mock/data/videosList'

// 每个子仓库都是一个函数， use 开头，store 结尾， hooks
// 界面工程师 简单的写页面
export const useHomeStore = defineStore('home', {
   state: () => ({
         swiperList:[],
         videosList:[]
   }),
   actions: {
      // 修改 也在store 里面 数据管理的闭环？
      async getSwiperList() {
         const {result} = await getSwiperList()
         // console.log(res);
         this.swiperList = result
      },
      async getVideosList() {
         const {result} = await getVideosList()
         // console.log(res);
         this.videosList = result
      }
   }
})
<template>
   <div>
      <!-- 首页做一屏半左右 -->
      <!-- 头部组件 -->
      <AppHeader/>
      <!-- 频道组件 -->
      <!-- <HomeChannel/> -->
      <!-- 录播图 -->
      <HomeSwipe :swiperList="swiperList" />
      <!-- 视频组件 容器组件 -->
      <!-- <HomeVideoList/> -->
   </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
// 本地组件以后基本不发送请求
// import { getSwiperList, getVideosList } from '@/service/home.js'
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import HomeVideoList from '@/components/HomeVideoList.vue'
// import axios from 'axios'
import { useProductsStore } from '@/store/products.js'
import { useHomeStore } from '@/store/home.js'

// vuex 区别 只是products 模块
const store = useProductsStore(); // 本地到中央的联系
const products = computed(() => store.all)
const homeStore = useHomeStore()
const swiperList = computed(() => homeStore.swiperList) 
const videosList = computed(() => homeStore.videosList) //template 绑定

onMounted(async () => {
   store.loadAllProducts() // actions 函数就是交给生命周期调用的
   console.log(store.all,'///');
   await homeStore.getSwiperList()
   await homeStore.getVideosList()
   // const swiperData = await getSwiperList()
   // const videosData = await getVideosList()

   // axios({
   //    url: '/swiperList',
   //    method: 'get'
   // })
   // .then((res) => {
   //    console.log(res);
   // })

   // axios({
   //    url: '/videosList',
   //    method: 'get'
   // })
   // .then((res) => {
   //    console.log(res);
   // })

   // fetch('/swiperList/')
   //    .then(data => data.json)
   //    .then(data => {
   //       console.log(data, '///');
   //    })
})
</script>

<style scoped>

</style>
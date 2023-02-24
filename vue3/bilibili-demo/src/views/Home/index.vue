<template>
   <div>
      <!-- 首页做一屏半左右 -->
      <!-- 头部组件 -->
      <AppHeader/>
      <!-- 频道组件 -->
      <HomeChannel/>
      <!-- 录播图 -->
      <HomeSwipe/>
      <!-- 视频组件 容器组件 -->
      <HomeVideoList/>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getSwiperList, getVideosList } from '@/service/home.js'
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import HomeVideoList from '@/components/HomeVideoList.vue'
import axios from 'axios'

onMounted(async () => {
   const swiperData = await getSwiperList()
   const videosData = await getVideosList()

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
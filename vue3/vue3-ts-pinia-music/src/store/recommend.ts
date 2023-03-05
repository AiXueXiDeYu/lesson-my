import { ref } from  'vue'
import { defineStore } from 'pinia'
import { getBanner } from '@/service/recommend'

export const useRecommendStore = defineStore('recommend', () => {
   const banner = ref([])
   const getBannerData = async () => {
      const data = await getBanner()
      console.log(data, '///');
      
      banner.value = data.banners
   }
   return {
      banner,
      getBannerData,
   }
})
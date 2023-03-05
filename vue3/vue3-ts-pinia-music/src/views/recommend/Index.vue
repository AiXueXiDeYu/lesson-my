<template>
   <div class="recommend">
      <Banner v-if="banner.length" :banner="banner"></Banner>
   </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRecommendStore } from '@/store/recommend';
import Banner from '@/components/banner/Index.vue'

const recommendStore = useRecommendStore()
const banner = computed(() => recommendStore.banner) 

onMounted(async () => {
   await recommendStore.getBannerData()
})
</script>

<style scoped>

</style>
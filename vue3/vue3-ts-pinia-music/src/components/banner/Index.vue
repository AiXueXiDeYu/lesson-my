<template>
   <div>
      {{ JSON.stringify(banner) }}
   </div>
</template>

<script setup lang="ts">
defineProps({
   banner: {
      type: Array,
      default: []
   }
})
</script>

<style lang="stylus" scoped>

</style>
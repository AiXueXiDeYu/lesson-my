<template>
  <div>
    <ul>
      <li v-for="product in productStore.all" :key="product.id">
        商品名称 {{ product.title }} 
        商品评分 {{ product.rating.rate }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useProductStore, Product } from './store/products'

const productStore = useProductStore()
productStore.fetchAll()
</script>

<style>

</style>
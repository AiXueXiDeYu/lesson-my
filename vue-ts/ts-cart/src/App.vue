<script setup lang="ts">
// import { computed } from 'vue'
// import { useProductsStore } from './store/products'

// const productsStore = useProductsStore()

// const all = computed(() => productsStore.state.all)
// productsStore.loadAllProducts();
// setTimeout(() => {
//   console.log(all, '//////')  
// }, 2000);

import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
</script>

<template>
  <h1>购物车</h1>
  <hr>
  <h1>商品列表</h1>
<ProductsList></ProductsList>
<hr>
<Cart></Cart>
</template>

<style >

</style>

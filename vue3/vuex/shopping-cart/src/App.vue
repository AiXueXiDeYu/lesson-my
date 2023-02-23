<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <br>
    <h2>Products</h2>
    <ProductList></ProductList>
    <hr>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script setup>
// 组件思维
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>

<style lang="scss" scoped>

</style>
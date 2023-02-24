<template>
  <div>
    <Layout>
      <div style="margin:1rem 0;">
        <PiniaLogo></PiniaLogo>
      </div>
      <!-- 一个状态  私有状态？  store user模块 name 属性 -->
      <h2>Hello {{ user.name }}</h2>
      <form @submit.prevent="addItemToCart">
        <input type="text" v-model="itemName">
        <button type="submit">Add</button>
      </form>
      <form @submit.prevent="buy">
        <ul>
          <li v-for="item in cart.items" :key="item.name">
            {{ item.name }}  数量：{{ item.amount }}
            <button @click="cart.removeItem(item.name)">X</button>
          </li>
        </ul>
      </form>
    </Layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Layout from './layouts/default.vue'
import PiniaLogo from './components/PiniaLogo.vue'

// 共享状态到组件 hooks函数
// import { useStore } from 'vuex'  root store
// const store = useStore() 
// store.state.user.name

import { useUserStore } from './store/user.js'
import { useCartStore } from './store/cart.js'  // user 模块
const user =  useUserStore()
const cart =  useCartStore() 

// 私有状态
const itemName = ref('') 

const addItemToCart = () => {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

const buy = () => {

}

</script>

<style lang="scss" scoped>

</style>
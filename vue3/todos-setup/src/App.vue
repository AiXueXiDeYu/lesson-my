<script setup>
  // 1. vue3 setup 机制
  // 组件可以降低开发难度
  // 组件可复用 class 大写
  import TodoList from './components/TodoList.vue'
  import MyButton from './components/Button.vue'
  import Lele from './components/Lele.vue'
</script>

<template>
  <div>
    <h1>这是首页</h1>
    <TodoList/>
  </div>
</template>

<style scoped>

</style>

<template>
  <div>
    <!-- hello world -->
    <h1 @click="add" class="red">{{count}}<!--{{ state.count }}--></h1>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  // ref 响应式 简单数据

  // let state = reactive({
  //   count: 1
  // })
  let count = ref(1);
  function add() {
    count++;
    // state.count++;
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
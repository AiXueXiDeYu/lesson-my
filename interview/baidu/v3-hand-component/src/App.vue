<template>
  <div>
    {{ tel }}
    <!-- <Input :modelValue="tel" @update:model-value="tel=$event"></Input> -->
    <Input v-model="tel" :disabled="true" placeholder="请输入手机号"></Input>
  </div>
</template>

<script setup>
import Input from './components/Input.vue'
import { ref } from 'vue'

const tel = ref('')
// 组件通信的角度 
// tel 跟 input 组件双向绑定 而不是标签
// 父子组件之间props 单向的   props -> 
// 子组件 emit input 标签的change 传回来 修改 tel
setTimeout(() => {
  tel.value = '13888888888'
});
</script>

<style>

</style>
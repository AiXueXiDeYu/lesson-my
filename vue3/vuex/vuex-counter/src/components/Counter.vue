<template>
   <div>
      clicked: {{ count }} times, count is  {{ evenOrOdd }}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
   </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.count)
const evenOrOdd = computed(() => store.state.evenOrOdd)
const increment = () => store.dispatch('increment')
const decrement = () => store.dispatch('decrement')
const incrementIfOdd = () => store.dispatch('incrementIfOdd')
const incrementAsync = () => store.dispatch('incrementAsync')

</script>

<style lang="scss" scoped>

</style>
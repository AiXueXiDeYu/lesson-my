<template>
  <div>
    <!-- {{ $store.state.count }} -->
    {{count}}
    <button @click="$store.commit('add')">加 1</button>
    <button @click="addCount">加 1</button>
  </div>
</template>

<script setup>
  import { ref,computed } from 'vue'
  import { useStore } from 'vuex';

  const store = useStore() // provide + inject

  // const count = ref(store.state.count) 私有状态
  const count = computed(() => store.state.count) // 响应式归中央管 来到本地依然是数据状态
  // const count = store.state.count
  // console.log(count);

  const addCount = () =>{
    store.commit('add')
  }
</script>

<!-- <script>
export default({
  setup() {
    return {
      msg:'dfdfdf'
    }
  },
  mounted() {
    console.log(this,'///');
  }
})
</script> -->

<style lang="scss" scoped>

</style>
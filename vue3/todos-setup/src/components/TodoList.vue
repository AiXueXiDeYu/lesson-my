<template>
   <div>
      <!-- <h1 @click="add">{{ count }}</h1> -->
      <input type="text" v-model="title" @keydown.enter="addTodo">
      <ul v-if="todos.length">
         <li v-for="todo in todos" :key="todo">
            <input type="checkbox" v-model="todo.done">
            <span :class="{done: todo.done}">{{ todo.title }}</span>
         </li>
      </ul>
      <div v-else>
         暂无数据
      </div>
      <div>
         全选 <input type="checkbox" v-model="allDone">
         <span>{{ active }} / {{ all }}</span>
      </div>
   </div>
</template>

<script setup>
   // composition api + setup 
   // setup 功劳， vue 功能展开
   // 组织组件的对象
   // 效果都是一样的， 组织的机制改变了
   // import { ref } from 'vue'; // ref 定义一个响应式数据(简单数据) 相对的 reactive(对象)
   // let count = ref(1)
   // function add() {
   //    count.value++
   // }
   import {ref,computed} from 'vue'
   let title = ref('')
   let todos = ref([])
   let active = computed(() => todos.value.filter(v => !v.done).length)
   let all = computed(() => todos.value.length)
   let allDone = computed({
      get: function() {
         return active.value === 0
      },
      set: function(value) {
         todos.value.forEach(todo => {
            todo.done = value
         })
      }
   })
   function addTodo() {
      todos.value.push({
         title:title.value,
         done: false
      })
      title.value
   }
</script>

<style>
   .done {
      text-decoration: line-through;
      color: #ccc;
   }
</style>

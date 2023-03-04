<template>
   <!-- html5语义化 -->
   <main>
      <h1>Todos</h1>
      <form class="addForm" @submit.prevent="addTodo">
         <label for="add">
            Add Todo
         </label>
         <div class="sl">
            <input type="text" naem="add" id="add" v-model="currentTodoInp">
            <button type="submit">Add</button>
         </div>
      </form>
   </main>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/todos'
// import { useProductStore } from '../store/products'
import { ref } from 'vue'

let currentTodoInp = ref('')

// const productStore = useProductStore()
// productStore.fetchAll()

const todoStore = useTodoStore()
todoStore.initFromLocalStorage() // 从loaclStorage 拿出来并更新到store中
// todoStore.addTodo("吴总绝对的小丑")

const addTodo = () => {
   const text = currentTodoInp.value
   currentTodoInp.value = ''

   if (text.trim() !== '') { // 去除前后空格
      todoStore.addTodo(text)
   }
}
</script>

<style scoped>

</style>
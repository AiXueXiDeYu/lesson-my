<template>
   <div>
      <!-- child {{ count }}
       <button @click="addCount()">+1</button> -->
      <!-- <button @click="emit('myClick')">按钮</button> -->

      <!-- {{ msg1 }}
    msg2 {{ msg2 }} -->

    <button @click="handlerClick">按钮</button>
   </div>
</template>
<script setup>
const emit = defineEmits(["key","value"])
const handlerClick = () => {
   // 内置的emit 方法
   emit("update:key", "新的key")
   emit("update:value", "新的value")
}
</script>


<!-- <script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
    console.log(attrs)
</script> -->

<!-- 
<script setup>
// emit 和 methods 有区别， 要报告父组件
    // 不需要引入 直接使用
    // import { defineProps } from "vue"

    const emit = defineEmits(["myClick"])

    const addCount = () => {
      // 父组件里的属性是不能改的
      props.count +=1
    }

    const props = defineProps({
        // 写法一
      //   msg2: String
        // 写法二
        count:{
         type:Number,
         default:0
        },
        msg2:{
            type:String,
            default:""
        },
        msg1:{
            type:String,
            default:""
        }
    })
    console.log(props) // { msg2:"这是传级子组件的信息2" }

    defineExpose({
      childName:'这是子组件的属性',
      someMethod() {
         console.log('这是子组件的方法');
      }
    })
</script> -->


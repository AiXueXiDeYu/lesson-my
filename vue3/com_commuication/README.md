# 组件通信必考题

- 组件树
   App.vue #root 挂载点 (根)

   父子组件    props + emit   父组件负责数据通信和管理；子组件负责展示
   兄弟组件    共享状态 emit
   跨层级组件  爷孙  传递麻烦    所以使用 provide + inject
   页面级别组件;没有任何关系但要共享状态的组件:  router-view 地址 ummout mount    全局 localStorage pinia vuex
      
- vue 2.o 类式组件   老项目
   setup() vue3.0 composition api   过度阶段
   setup 语法糖 完全抛弃类式组件    全新
   统一编程风格

- props
- emit
- expose/ref   expose 向外暴露 + ref 父组件调用子组件里的属性和方法
- attrs  props之外 父组件向子组件传递的数据
- v-model   双向数据绑定
- provide/inject
- localStorage
- vuex

# vue集训一

- vue 3.0 + pinia + ts 
- node + mysql
- vue 2.0

- 路由ts 规则
   1. ts 是为了代码的正确性
   2. createRouter() RouterOptions     ts 的类型约束
   typescript 通过类型约束， 可以让所有人写的代码一致
   ts 多了一些代码 很难
   对新手很好， 不用删了代码跑路

   js 代码太随意了， 原因是没有类型约束的， 弱类型语言
   企业级开发，

- store 的 ts 规则
   1. 数据管理非常重要， 约束数据 todos 
   2. type Todo 
      id
      text
      isComplete
   3. pinia 响应式状态
      Ref 类型 
      todo[]
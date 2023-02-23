- 组件 路由 数据管理
   跨层级 跨页面 共享状态 比如login
   前端工作 分成两部分
   组件开发(切页面 实习生)
   数据管理 (越来越大的时候) 从组件本地(就没什么状态了   computed)脱离到中央 (leader)
- 项目架构store
- vuex 的共享状态 来到组件的流程
   1. 使用vuex 提供的useStore hooks api 拿到store
   2. store.state.count state 是状态对象 读操作
   3. 作为computed计算属性的返回值， 当前状态
      依赖于store.state.count 订阅了count
   4. 全局的$store 对象

- vuex 数据流转的过程
   1. 本地组件 data() reactive/ref 将被收到中央 方便分享和管理
   2. useStore() + 使用computed 计算属性  状态从中央到地方
   3. 本地不可以直接修改store, store.commit('add')
      提交一个mutation 名字一定要放在mutations 里
      管理好数据？

- vuex 的原则
   - vuex是一种复杂的设计范式 管理中大型项目的状态 (共享状态)
   - 小项目最好不用vuex, 组件自己管理状态就好 或 props + emit 
   localStorage ... 共享
   - 组件基本不在自己管理状态
      actions 都在vuex 提供了
      data() reactive ref 就很少在组件里使用了
   - store 全局管理状态
      全家桶之一 vuex/pinia   vuex 是现在 pinia 是未来
      - createStore() 单一状态树 只能有一个仓库， 状态(共享)唯一
      - 分成多个模块 modules 
         每个modules 都有一个独立的 state mutations actions
      - state 只读状态  对象
      - mutations 只有它才能修改state commit('')
      - actions 数据请求不在发送在组件内，而是在actions中
         dispatch 来出发action
- vuex 数据流转流程
   - root (Store) -> modules(cart  products) -> state(申明) 状态的查找 读操作
   - 数据(服务器端) -> api (接口模块 products) -> actions(管理接口请求 dispatch) -> mutation(commit 唯一修改数据 actions 里调用 ) -> state(写操作) 
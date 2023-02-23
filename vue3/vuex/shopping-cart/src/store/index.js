import { createStore } from 'vuex' // 中央状态仓库， 单一状态树
import products from './modules/products'
import cart from './modules/cart'

export default createStore({
   modules: { // 仓库的状态比较多的话？ 模块化的储存
      products,
      cart
   }
})
// js 如何提升数据的完整性
// let  num:Number = 1112
// num = 'ddd'

// 接口 接头
// JS 里为什么没有？ interface
// JS 是弱类型语言 垃圾太多 所以 —> TS  所以没有
// 自定义的接口， 检查数据 代码运行前 就报错
// SQL 定义表
// VScode 用 ts 写的

// js 有时候错误都不知道怎么发生的 ts 99.99% 不出错
export interface IProduct {
   id: number;
   title: string;
   price: number;
   inventory: number
}

// IProduct[]

const _products :IProduct[]= [
   {
      id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2
   },
   {
      id: 2, title: 'iPad 5 Mini', price: 700.01, inventory: 6
   },
   {
      id: 3, title: 'iPad 6 Mini', price: 799.01, inventory: 9
   }
]

export const getProducts = async () => {
   // 延时加载
   await wait(1000)
   return _products
}

export const buyProducts = async () => {
   await wait(1000)
   return Math.random() > 0.5
}

function wait(delay: number) {
   return new Promise((resolve) => {
      setTimeout(resolve, delay)
   })
}
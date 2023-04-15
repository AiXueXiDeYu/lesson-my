// jest 提供的api
// vue 达成了 99.99% 用例测试的框架

// const { reactive, effect } = require("@vue/recativity")

import { reactive, shallowReactive } from "../reactive"
import { effect } from "../effect"

describe('测试响应式', () => { // 测试分组
    // item 一个测试用例
    it('测试', () => {
        // expect  toBe  断言
        expect(1 + 2).toBe(3)
    })
    it('reactive 基本使用', () => {
        // expect(1 + 2).toBe(3)
        let obj = {num: 0}
        const ret = reactive(obj)
        // const ret1 = reactive(obj)
        let val
        // let a
        effect(() => {
            val = ret.num // 运行 get 收集依赖
            // a = ret.num2
        })
        expect(val).toBe(0)
        ret.num++ // setter targetMap effect trigger
        expect(val).toBe(1)
        // ret.num = 10
        // expect(val).toBe(10)
    })
    test('一个reactive 对象的属性在多个effect中', () => {
        const ret = reactive({num: 0})
        let val1, val2
        effect(() => {
            val1 = ret.num
        })
        effect(() => {
            val2 = ret.num
        })
        expect(val1).toBe(0)
        expect(val2).toBe(0)
        ret.num++
        expect(val1).toBe(1)
        expect(val2).toBe(1)
    })
    test('shalldowReactive基本使用', () => {
        const ret = shallowReactive({ num: 0 })
        let val
        effect(() => {
          val = ret.num
        })
        expect(val).toBe(0)
        ret.num++
        expect(val).toBe(1)
        ret.num = 10
        expect(val).toBe(10)
      })
      test('shalldowReactive浅层响应式', () => {
        const ret = shallowReactive({
            name: '玩转vue3',
            info: {
                price: 129,
                type: 'f2e'
            }
        })
        let price
        effect(() => {
            price = ret.info.price
        })
        expect(price).toBe(129)
        ret.info.price++
        expect(price).toBe(129) 
      })
})
it('reactive 嵌套', () => {
    const ret = reactive({
      name: '玩转Vue3',
      info: {
        price: 129,
        type: 'f2e'
      }
    })
    let price
    effect(() => {
      price = ret.info.price
    })
    expect(price).toBe(129)
    ret.info.price++
    expect(price).toBe(130)
  })

// describe('虚拟DOM', () => {
//     it('测试', () => {
//         expect(1 + 2).toBe(3)
//     })
// })
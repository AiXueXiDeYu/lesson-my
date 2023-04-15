// const get = () => {
//     // console.log('///');

import { tarck, trigger } from "./effect"
import {
    reactive,
    ReactiveFlags,
    reactiveMap,
    shallowReactiveMap,
  } from "./reactive"
import { isObject } from '../shared'

// }
const get = createGetter()
const set = createSetter()
const has = () => {}
const deleteProperty = () => {}
const shallowReactiveGet = createGetter(true)
// 性能优化
// shallow 浅  如果是true {num： {a: 1}} obj.num.a

function createGetter(shallow = false) {
    return function get(target, key, receiver) {
        // 本职工作 返回普通对象的值
        // targetMap -> object -> key -> [effect(), effect1(),...]
        // es6 提供的映射api  Reflect
        // target[key]
        // tarck 

        // const isExistMap = () => key === ReactiveFlags.RAW &&
        // (receiver === reactiveMap.get(target) || receiver === shallowReactiveMap.get(target))

        // if (key === ReactiveFlags.IS_REACTIVE) {
        //     return true
        //   } else if (isExistMap()) {
        //     // 已经存在缓存里
        //     return target
        //   }

        const res = Reflect.get(target, key, receiver) 
        // console.log(receiver, res, '////');
        console.log(target, '///');
        tarck(target, 'get', key) // 收集依赖
        if (isObject(res)) {
            return shallow? res:reactive(res)
        }
        return res
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        const result = Reflect.set(target, key,value, receiver)
        trigger(target, 'set', key)
        return result
    }
}

export const mutableHandlers = {
    get,
    set ,
    has,
    deleteProperty
}

export const shallowReactiveHandlers = {
    get: shallowReactiveGet,
    set,
    has,
    deleteProperty
  }
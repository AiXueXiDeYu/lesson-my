// 简单数据类型 响应式怎么写
import { tarck, trigger } from "./effect";
import { reactive } from "./reactive";
import { isObject } from "../shared";
// ref(null) DOM 标记点
export function ref(val) {
    if (isRef(val)) {
        console.log('////', val);
        return val
    }
    // 简单数据类型的 ref
    return new RefImpl(val)
}
export function isRef(val) {
    return !!(val && val.__isRef)
}

// es6 class get set 方法   ref就是利用面向对象的getter和setters进行track和trigget
class RefImpl {
    constructor(val) {
        // 响应式对象 是用 ref 做的
        this.__isRef = true
        this._val = convert(val)
    }
    get value() {   
        tarck(this, 'get', 'value')
        return this._val
    }
    set value(val) {
        if (val !== this._val) {
            this._val = convert(val)
            trigger(this, 'set', 'value')
        }
    }
}

// ref也可以支持复杂数据结构
function convert(val) {
    return isObject(val) ? reactive(val) : val
}

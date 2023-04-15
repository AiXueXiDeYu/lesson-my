import { VNodeFlags, ChildrenFlags } from './flags'

export const Fragment = Symbol()  // key  唯一的
export const Portal = Symbol()

export function h(tag, data = null, children = null) {
    let flags = null
    if (typeof tag === 'string') {
        flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    } else if (tag === Fragment) {
        flags = VNodeFlags.FRAGMENT
    } else if (tag === Portal) {
        flags = VNodeFlags.PORTAL
        tag = data && data.target
    } else {
        // vue 2 对象式组件
        if (tag !== null && typeof tag === 'object') {
            flags = tag.functional 
                ? VNodeFlags.COMPONENT_FUNCTIONAL
                : VNodeFlags.COMPONENT_STATEFUL_NORMAL
        } else if (typeof tag === 'function') {
            flags = tag.prototype && tag.prototype.render
                ? VNodeFlags.COMPONENT_STATEFUL_NORMAL
                : VNodeFlags.COMPONENT_FUNCTIONAL
        }
    }
    let childrenFlags = null
    if (Array.isArray(children)) {
        const { length } = children
        if (length == 0) {
             // 没有 children
            childrenFlags = ChildrenFlags.NO_CHILDREN
        } else if (length == 1) {
            // 单个子节点
            childrenFlags = ChildrenFlags.SINGLE_VNODE
            children = children[0]
        } else {
            // 多个子节点，且子节点使用key
            childrenFlags = ChildrenFlags.KEYED_VNODES // key 后面在判断
            children = normalizeVNode(children)
        }
    } else if (children == null) {
        // 没有子节点
        childrenFlags = ChildrenFlags.NO_CHILDREN
    } else if (children._isVNode) {
        // 单个子节点
        childrenFlags = ChildrenFlags.SINGLE_VNODE
    } else {
        // 其他情况都作为文本节点处理，即单个子节点，会调用 createTextVNode 创建纯文本类型的 VNode
        childrenFlags = ChildrenFlags.SINGLE_VNODE
        children = createTextVNode(children+ '')
    }
    return {
        tag,
        _isVNode: true, // 区别于其他对象 ， 普通对象 响应式对象...
        el: null,
        flags,
        data,
        children,
        childrenFlags,
    }
}

function normalizeVNode(children) {
    const newChildren = []
     // 遍历 children
    for (let i = 0, len = children.length;  i < len; i++ ) {
        const child = children[i]
        if (child.key == null) {
            // 如果原来的 VNode 没有key，则使用竖线(|)与该VNode在数组中的索引拼接而成的字符串作为key
            child.key = '|' + i
        }
        newChildren.push(child)
    }
     // 返回新的children，此时 children 的类型就是 ChildrenFlags.KEYED_VNODES
    return newChildren
}

function createTextVNode(text) {
    return {
        el: null,
        _isVNode: true,
         // flags 是 VNodeFlags.TEXT
        flags: VNodeFlags.TEXT,
        tag: null,
        data: null,
        // 纯文本类型的 VNode，其 children 属性存储的是与之相符的文本内容
        children: text,
        // 文本节点没有子节点
        childrenFlags: ChildrenFlags.NO_CHILDREN
    }
}
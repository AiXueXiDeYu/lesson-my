import { VNodeFlags, ChildrenFlags } from "./flags"

export default function render(vnode, container) {
    // vnode -> tag, data, children -> document.createElment DOM (根据平台选择不同的api) -> append -> container
    // 判断算法是第一次挂载  挂载 更新 替换
    const preVNode = container.vnode
    if (preVNode == null) { // undefined  null
        if (vnode) {
            // 没有旧的 VNode，只有新的 VNode。使用 `mount` 函数挂载全新的 VNode
            mount(vnode, container)
            // 将新的 VNode 添加到 container.vnode 属性下，这样下一次渲染时旧的 VNode 就存在了
            container.vnode = vnode
        }
    } else {
        if (vnode) {
            // 有旧的 VNode，也有新的 VNode。则调用 `patch` 函数打补丁
            // patch(preVNode, vnode, container)
            // 更新 container.vnode
            container.vnode = vnode
        } else {
            // 有旧的 VNode 但是没有新的 VNode，这说明应该移除 DOM，在浏览器中可以使用 removeChild 函数。
            container.removeChild(preVNode.el)
            container.vnode = null
        }
    }
}

function mount(vnode, container, isSVG) {
    const { flags } = vnode
    if (flags & VNodeFlags.ELEMENT) {
        // 挂载普通标签
        mountElement(vnode, container, isSVG)
    } else if (flags & VNodeFlags.COMPONENT) {
        // 挂载组件
        mountComponent(vnode, container, isSVG)
    } else if (flags & VNodeFlags.TEXT) {
        // 挂载纯文本
        mountText(vnode, container)
    } else if (flags & VNodeFlags.FRAGMENT) {
        // 挂载 Fragment
        mountFragment(vnode, container, isSVG)
    } else if (flags & VNodeFlags.PORTAL) {
        // 挂载 Portal
        mountPortal(vnode, container, isSVG)
    }
}

function mountElement(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG
        ? document.createElementNS('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el

    // 拿到 VNodeData
    const data = vnode.data
    if (data) {
        // 如果 VNodeData 存在，则遍历之
        for (let key in data) {
            // key 可能是 class、style、on 等等
            switch (key) {
                case 'style':
                    // 如果 key 的值是 style，说明是内联样式，逐个将样式规则应用到 el
                    for (let k in data.style) {
                        el.style[k] = data.style[k]
                    }
                break;
                case 'class': 
                    if (isSVG) {
                        el.setAttribute('class', data[key])
                    } else {
                        // to primitive
                        el.className = data[key].join(' ') // 强制类型转换
                    }
                break;
                default: 
                    if (domPropsRE.test(key)) {
                        el[key] = data[key]
                    } else {
                        el.setAttribute(key, data[key])
                    }
                break;
            }
        }
    }

    // 拿到 children 和 childFlags
    const childFlags = vnode.childrenFlags
    if (childFlags !== ChildrenFlags.NO_CHILDREN) {
        if (childFlags & ChildrenFlags.SINGLE_VNODE) {
            // 这里需要把 isSVG 传递下去
            mount(children, el, isSVG)
        } else if (childFlags & ChildrenFlags.MULTIPLE_VNODES) {
            for (let i = 0, len = children.length; i < len; i++) {
                // 这里需要把 isSVG 传递下去
                mount(children[i], el, isSVG)
            }
        }
    }

    container.appendChild(el)
}

const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;

function mountComponent() {}
function mountText() {}
function mountFragment() {}
function mountPortal() {}
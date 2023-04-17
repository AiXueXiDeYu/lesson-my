// import { template } from 'lodash'

// const compiler = template('<h1><%= title %></h1>')
// const html = compiler({ title: 'My Component' })

// document.getElementById('app').innerHTML = html
// setTimeout(() => {
//     const html2 = compiler({title: '字节大神'})
//     document.getElementById('app').innerHTML = html2
// },2000)


// props 数据参数 子组件
// const MyComponent = props => {
//     // render
//     const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
//     return compiler(props)
// }
// MyComponent.cache = null
// document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })


// import { h, init } from 'snabbdom'

// // h 函数用来创建 VNode，组件的产出是 VNode
// const MyComponent = props => {
//   return h('div#container', 
//   [
//     h('h1', props.title),
//     h('h2', 'nihao')
// ])
// }
// console.log(MyComponent({ title: 'MyComponent' })); 


// // init 方法用来创建 patch 函数
// const patch = init([])
// // 返回值是 VDOM 
// const MyComponent = props => {
//   return h('h1', props.title)
// }

// // 组件的产出是 VNode
// const prevVnode = MyComponent({ title: 'prev' })
// // 将 VNode 渲染成真实 DOM
// patch(document.getElementById('app'), prevVnode)
// // 数据变更，产出新的 VNode
// setTimeout(() => {
//     const nextVnode = MyComponent({ title: 'next' })
//     // 通过对比新旧 VNode，高效地渲染真实 DOM
//     patch(prevVnode, nextVnode)
// },2000)


// const elementVnode = {
//     tag: 'div'
// }
// const componentVnode = {
//     tag: MyComponent
//   }

// function render(vnode, container) {
//     if (typeof vnode.tag === 'string') {
//         // html 标签
//         mountElement(vnode, container)
//       } else {
//         // 组件
//         mountComponent(vnode, container)
//       }
// }

// function mountElement(vnode, container) {
//     // 创建元素
//     const el = document.createElement(vnode.tag)
//     // 将元素添加到容器
//     container.appendChild(el)
// }

// function mountComponent(vnode, container) {
//     // 创建组件实例
//     const instance = new vnode.tag() // Component 类
//     // 渲染
//     instance.$vnode = instance.render()
//     // 挂载
//     mountElement(instance.$vnode, container)
//   }

// // 把 elementVnode 渲染到 id 为 app 的元素下
// render(elementVnode, document.getElementById('app'))



// MyComponent 组件
class MyComponent {
    render() {
        // render 函数产出 VNode
        return {
            tag: 'div'
        }
    }
}

// VNode
const componentVnode = {
    tag: MyComponent
}

// 渲染
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
    if (typeof vnode.tag === 'string') {
        // html 标签
        mountElement(vnode, container)
    } else {
        // 组件
        mountComponent(vnode, container)
    }
}

function mountComponent(vnode, container) {
    // 创建组件实例
    const instance = new vnode.tag() // this
    // 渲染  组件的虚拟DOM (找到节点) 缓存
    instance.$vnode = instance.render()
    // 挂载
    mountElement(instance.$vnode, container)
}

function mountElement(vnode, container) {
    // 创建元素
    const el = document.createElement(vnode.tag)
    // 将元素添加到容器
    container.appendChild(el)
}

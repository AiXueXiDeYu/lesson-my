// console.log('hello parcel');

import { h } from './h' // VNode 的生成
import render from './render' // 渲染

// const prevNode = h ('div', null, '旧的VNode')

// class MyComponent {
//     render() {
//         return h ('div', null, '新的VNode')
//     }
// }
// const nextVNode = h (MyComponent) // 内存中


// const prevNode = h('div', {
//     style: {
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'red'
//     }
// })

// const nextVNode = h('div', {
//     style: {
//         width: '100px',
//         height: '100px',
//         border: '1px solid green'
//     }
// })


const handler = () => alert('clicked')
const prevNode = h ('div', {
    style: {
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
            },
    onclick: handler
})

const nextVNode = h('div', {
    style: {
        width: '100px',
        height: '100px',
        border: '1px solid green'
    }
})


// const prevNode = h (
//     'div', 
//     null, 
//     h ('p', {
//         style: {
//             width: '100px',
//             height: '100px',
//             backgroundColor: 'red'
//         }
//     })
// )

// const nextVNode = h (
//     'div', 
//     null, 
//     h ('p', {
//         style: {
//             width: '100px',
//             height: '100px',
//             backgroundColor: 'green'
//         }
//     })
// )


// const prevNode = h (
//     'div', 
//     null, 
//     h ('p', {
//         style: {
//             width: '100px',
//             height: '100px',
//             backgroundColor: 'red'
//         }
//     })
// )

// const nextVNode = h ('div')


// const prevNode = h (
//     'div',
//     null,
//     h ('p', null, '子节点1')
// )   

// const nextVNode = h (
//     'div',
//     null,
//     h ('p', null, '子节点2'),
//     h ('p', null, '子节点1')
// )





render(prevNode, document.getElementById('app'))
setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 2000)
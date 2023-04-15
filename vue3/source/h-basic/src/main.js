// import { h } from 'snabbdom'
import { Fragment, h } from './h'
import { Componment } from './Component';
import render from './render'

// const elmentVNode = h('div', null, h('span'))
// console.log(elmentVNode);

// const elmentWithTextVNode = h('div', null, '我是文本')
// console.log(elmentWithTextVNode);

// const fragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
// console.log(fragmentVNode);
// // 函数组件
// function MyFunctionalComponent() {

// }
// MyFunctionalComponent.prototype.render = function() {

// }
// const functionalComponentVNode = h(MyFunctionalComponent, null, h('div'))
// console.log(functionalComponentVNode);

// class MyStatefulComponent extends Componment {

// } 
// const statefulComponentVNode = h(MyStatefulComponent, null, h('div'))
// console.log(statefulComponentVNode);
// console.log(JSON.stringify(statefulComponentVNode)); // 会跳过 tag 函数


// const elementVNode = h(
//     'div',
//     {
//         style: {
//             height: '100px',
//             width: '100px',
//             background: 'red'
//         }
//     },
//     h('div', {
//         style: {
//             height: '50px',
//             width: '50px',
//             background: 'green'
//         }
//     })
// )
// // console.log(elementVNode);
// render(elementVNode, document.getElementById('app'))


// const dynamicClass = ['class-b', 'class-c']

// const elementVNode = h('div', {class: ['class-a', dynamicClass]})
// render(elementVNode, document.getElementById('app'))

const elementVNode = h('input',
    {
        class: 'cls-a',
        type: 'checkbox',
        checked: true,
        custom: '1'
    })
render(elementVNode, document.getElementById('app'))
# 组件

- 从何而来
    js/DOM API 等 -> jQuery (高效/ 兼容性) -> template lodash compiler 
    -> VUE template/script/css

    html -> template 业务的focus -> 数据驱动 -> reactive -> mounted + updated 
    -> effect(compiler) -> vnode -> diff 前后状态的差异 -> dom 更新

- 组件会生成什么？
    - render template {{}} v-if :   VDOM 产出 -> createElment
    - reactive ref  setup
    - 生命周期
    - VDOM
    - diff

- Component 类 函数  -> render  -> 真实的DOM 
    组件化思想 -> reactive diff 数据驱动思想 -> finnal  createElment

- 组件前身的本质 一个组件就是一个函数，给我什么样的数据，我就渲染对应的 html 内容。
    VDOM 

    Component (vdom)

    render 方法 {type, props, children}  createElement

- 组件的产出就是 Virtual DOM。
    - 分层
        普通无关性 VDOM -> patch -> html/ wxml / xml ssr 服务器端渲染
    - 性能优化
        查找 比对 收集差异

- 函数式组件(Functional component) 和 有状态组件(Stateful component)。
    - 展示为主 函数组件 StatelessComponent  props
    function MyComponent(props) {
        props.title = 'asad' // 不纯
    }
    是一个纯函数 一个props 状态对应唯一的template
    没有自身的状态 灵活 复用
    产出 Vnode 的方式： 单纯的函数调用
    - 数据业务 父组件
    class MyComponent {}
    是一个类 可实例化
    可以有自身状态
    产出Vnode的方式：需要实例化，然后调用其 render 函数 

- 组件是怎么挂载到页面的：VNode +  Renderer
- 当更新时，组件是如何effect
- 真实DOM 和VDOM 
    - document.createElement('div')  <div>
    - h('div')
    - Component.$VNode  ->  h('div')
    - tag, props({class:'sd', id: 'd1'}), children: [
        { tag: ele, {list: kist}, children:[] },
        { tag: div, { }, children:['hello word'] }
    ]
    <div class="sd">
        <ele :list="list"></ele>
        <div>hello word</div>
    </div>

    class ThreeNode {
        constructor(value) {
            this.left = null
            this.right = null
            this.value = value
        }
    }
    VDOM 
    h(tag, data, children) VNode (父)
        h(tag, data, children) Vnode (子)
            null

- 我们可以通过检查 tag 属性值是否是字符串来确定一个 VNode 是否是普通标签
    - tag function -> StatelessComponent h(template)
    - class ->  Stateful component  h(component.render)
    - .text  -> document.createTextNode()
    - Fragment   document.createDocumentFragment  性能优化组件
        <template>
            <Fragment>
                <td></td>
                <td></td>
                <td></td>
            </Fragment>
        </template>
    - Portal  指定目标地  弹出层  蒙层
        <template>
            <Portal target="#app-root">
                <div class="overlay"></div>
            </Portal>
        </template>
        flags

        const elementVNode = {
            tag: 'div',
            flags: 1 | 2 | 3 | 4, 
            data: null,
            children: {
                tag: MyComponent,
                data: null
            }
        }

- flags 设计
    - 优化手段
        不需要每都判断
    - html 元素还是组件亦或是普通文本  常用的

        1、拿到 VNode 后先尝试把它当作组件去处理，如果成功地创建了组件，那说明该 VNode 就是组件的 VNode
        2、如果没能成功地创建组件，则检查 vnode.tag 是否有定义，如果有定义则当作普通标签处理  includes  html 标签的校验  HTMLElement
        3、如果 vnode.tag 没有定义则检查是否是注释节点
        4、如果不是注释节点，则会把它当作文本节点对待
    - 使用位运算在一定程度上再次拉升了运行时性能。
    flags 2 4 8 16 32 64 ...
    const VNodeFlags = {
        // html 标签
        ELEMENT_HTML: 1,
        // SVG 标签
        ELEMENT_SVG: 1 << 1,

        // 普通有状态组件
        COMPONENT_STATEFUL_NORMAL: 1 << 2,
        // 需要被keepAlive的有状态组件
        COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,
        // 已经被keepAlive的有状态组件
        COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,
        // 函数式组件
        COMPONENT_FUNCTIONAL: 1 << 5,

        // 纯文本
        TEXT: 1 << 6,
        // Fragment
        FRAGMENT: 1 << 7,
        // Portal
        PORTAL: 1 << 8
    }

    // html 和 svg 都是标签元素，可以用 ELEMENT 表示
    VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG
    // 普通有状态组件、需要被keepAlive的有状态组件、已经被keepAlice的有状态组件 都是“有状态组件”，统一用 COMPONENT_STATEFUL 表示
    VNodeFlags.COMPONENT_STATEFUL =
    VNodeFlags.COMPONENT_STATEFUL_NORMAL |
    VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE |
    VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE
    // 有状态组件 和  函数式组件都是“组件”，用 COMPONENT 表示
    VNodeFlags.COMPONENT = VNodeFlags.COMPONENT_STATEFUL | VNodeFlags.COMPONENT_FUNCTIONAL

- vue runtime
- template -> h 写出 ->  VNode  ->  Renderer
        
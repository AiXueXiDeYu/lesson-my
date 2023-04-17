const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/
export function patchData(el, key, prevValue, nextValue) {
    switch(key) {
        case 'style':
            for (let k in nextValue) {
                el.style[k] = nextValue[k] // 行内样式要少用(并且不会有太多) 性能提升
            }
            for (let k in prevValue) {
                if (!nextValue.hasOwnProperty(k)) {
                    el.style[k] = '' // 如果没有就删除
                }
            }
            break
        case 'class':
            el.className = nextValue // .className
            break
        default :
            // 事件监听
            if (key[0] === 'o' && key[1] === 'n') {
                // console.log('////');
                if (prevValue) {
                    el.removeEventListener(key.slice(2), prevValue)
                    // 将来还可以优化 shuederl
                }
                if (nextValue) {
                    el.addEventListener(key.slice(2), nextValue)
                }
            }
            if (domPropsRE.test(key)) {
                el[key] = nextValue
            } else {
                el.setAttribute(key, nextValue)
            }
            break
    }
}
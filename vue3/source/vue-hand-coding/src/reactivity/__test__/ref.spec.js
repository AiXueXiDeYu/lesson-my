import { effect } from '../effect'
import { ref } from '../ref'


describe('ref测试', () => {
    it('ref基本使用', () => {
        const r = ref(0)
        let val
        effect(() => {
            val = r.value
        })
        expect(val).toBe(0)
        r.value++
        expect(val).toBe(1)
    })

    it('ref复杂数据，其实也是用了reactive', () => {
        const r = ref({ name: '玩转Vue3' })
        let val
        effect(() => {
            val = r.value.name
        })
        expect(val).toBe('玩转Vue3')
        r.value.name = '重学前端'
        expect(val).toBe('重学前端')
    })
    it('ref 在 ref ', () => {
        const r = ref(0)
        const s = ref(r)
        expect(1 + 1).toBe(2)
    })
})

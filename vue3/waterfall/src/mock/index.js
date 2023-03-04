import Mock, { Random } from  'mockjs'

// 拦截 axios 发出的请求
Mock.mock(/\/goods/, 'get', () => {
   const data = []
   const minNum = 100
   const maxNum = 400
   for (let i = 0; i < 20; i++) {
      let randomHeight = parseInt(
         Math.random() * (maxNum - minNum + 1) + minNum
      )
      let item = {
         id: i,
         height: randomHeight,
         title: Random.ctitle(),
         pic: Random.image(`200x${randomHeight}`, '#FF6600')
      }
      data.push(item)
   }
   return data
})
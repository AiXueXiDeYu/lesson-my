let express = require('express')

let app = express() // 后端应用APP
// 添加路由
// http 是简单协议， 基于TCP/IP 基于请求响应
// 使用上网代理 (浏览器)，输入地址 http://localhost:3030/say 
// 请求行 GET http://localhost:3030/say  版本号 1.1.0
// 请求头 COOKIE Authorization

// 后端放水
let whiteList = ['http://127.0.0.1:5500']

// app.use((req, res, next) => { 
//    let origin = req.headers.origin
//    // console.log(origin, '/////');
//    // 那些跨域请求可以通过 origin 不太了解 * 所以都通过
//    if(whiteList.includes(origin)) {
//       res.setHeader('Access-Control-Allow-Origin', origin)
//       // DEL PUT 整个替换 PATCH 部分修改 修改
//       // Restful 一切皆资源 请求资源时候， 使用相应的请求方法
//       res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
//       res.setHeader('Access-Control-Allow-Credentials', true)
//    }
//    // console.log('//////');
//    next()
// }) // 中间件

app.get('/say', function(req, res) {
   let jsonData = {
      name: '吴总',
      favor: ['nantong', 'gaoji']
   }
   // res.end('hello, say')
   // res.writeHead(200, 'OK', {
   //    'Content-Type': 'text/json;charset=utf-8',
   //    'Set-Cookie': 'name = 12; age = 12'
   // })

   // res.setHeader('Content-Type', 'text/json;charset=utf-8')
   // JSONP 
   res.send('callback(' + JSON.stringify(jsonData) + ')')
})

app.listen(3030)
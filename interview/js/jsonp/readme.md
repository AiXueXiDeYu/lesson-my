# json with padding 

- 跨域
   1. 以后 服务器端脚本
      api.baibu.com/say 后端接口域名
      www.baibu.com 前端域名
      ？ 跨域了
      url http(s)://domain.com:8888/path?a=1#b
      只有 协议 域名 端口 不一样， 都叫跨域 严格
      不是跨 domain 域名 是 cross origin = domain + 端口 + 协议
      安全
         双方
         前端 不信任后端返回的资源
         后端 NO Access 
      跨域是常态
         前后端分离是主流  8888  3030
         大公司的协作
            api.baibu.com
            ai.baibu.com

            taobao.com
            cainiao.com

- 浏览器会自动进行CORS 通信
   实现CORS 通信的关键是后端
   只有后端实现了CORS 就实现了跨域
   通过服务器设置Access-Control-Allow-Origin *     后端牺牲
   白名单

- 什么是同源策略及其限制内容
   同源策略是一种约定 是浏览器最核心也最基本的安全功能
   如果没有， 浏览器很容易受到 XSS CSRF 攻击
   js 里不能执行 非同源的代码

   - COOKIE  localStorage  Origin  沙箱隔离
   - DOM 节点
   - AJAX 请求    js 内容  CORS 

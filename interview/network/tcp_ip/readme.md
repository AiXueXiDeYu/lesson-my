# 三次握手 四次挥手

- B/S架构
    C/S架构
    - 优点
    - 只需要一个url 不用安装
    - C/S 要适配客户端 微软 Linux Mac 不一样
        java html/css/js

- TCP/IP
    OSI 七层 (五层)协议 
    IP 唯一性
    TCP/UDP     TCP 确保数据传输正确且完整

- HTTP 应用层协议 基于 TCP/IP 的
    三次握手 建立连接
        确认 双方都有发送及接收的能力
        A           B
            ->  1
            <-  2, 10
            ->  11
    四次挥手 断开连接
    HTTP 是无状态的 通信完会关闭
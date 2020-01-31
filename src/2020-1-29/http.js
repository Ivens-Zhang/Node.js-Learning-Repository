// 1. 加载 http 核心模块
var http = require('http')

// 2. 使用 http.createSever() 创建一个 Web 服务器
var server = http.createServer()

server.on('request', (request, response) => {
  // 3.1. 接收请求
  console.log('收到客户端请求!' + request.url)

  // 3.2. 发出响应
  switch (request.url) {
    case '/':
      response.write('Hello this page is index')
      response.end()
      break;
      
    case '/b':
      response.end('Hello this b page')
      break;
      
    case '/goods':
      let goods = [
        {
          name: 'apple',
          price: 10
        },
        {
          name: 'banana',
          price: 5
        }
      ]
      response.end(JSON.stringify(goods))
      break;

    default:
      break;
  }
})


// 4. 绑定端口号, 启动服务器
server.listen(3000, function (a) {  
  console.log('服务器启动成功!')
})

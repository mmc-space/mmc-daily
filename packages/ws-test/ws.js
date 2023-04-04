const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('client connected')

  // 接收客户端发送的消息
  ws.on('message', (data) => {
    console.log(wss.clients)
    console.log('received: %s', data)
  })

  setInterval(() => {
    // 发送消息给客户端
    ws.send('Hello, Client!')
  }, 1000)
})

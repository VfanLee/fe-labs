const http = require('http')
const express = require('express')
const { Server } = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

io.on('connect', socket => {
  console.log(`[ ${socket.id} 已连接 ]`)

  socket.on('chat message', data => {
    console.log('[ 接收消息 ]', data)

    io.emit('chat message', data)
    console.log('[ 发送消息 ]', data)
  })

  socket.on('disconnect', reason => {
    console.log('[ disconnect 断开连接 ]', reason)
  })

  socket.on('disconnecting', reason => {
    console.log('[ disconnecting 断开连接 ]', reason)
  })
})

httpServer.listen(3000)

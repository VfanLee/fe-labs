import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/chat/send', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  // 每隔 1 秒发送一条消息
  let count = 0
  const interval = setInterval(() => {
    count++
    res.write(`data: ${count}\n\n`) // 固定格式

    // 发送 10 条后断开
    if (count >= 10) {
      clearInterval(interval)
      res.end()
    }
  }, 500)

  // 监听连接关闭
  req.on('close', () => {
    clearInterval(interval)
    console.log('SSE connection closed')
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

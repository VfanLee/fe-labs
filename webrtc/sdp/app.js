const https = require('node:https')
const fs = require('node:fs')
const path = require('node:path')

const express = require('express')
const ip = require('ip')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const httpServer = https.createServer(
  {
    cert: fs.readFileSync(path.join(__dirname, 'certs/cert.crt')),
    key: fs.readFileSync(path.join(__dirname, 'certs/cert.key')),
  },
  app
)

httpServer.listen(443, () => {
  console.log('https://' + ip.address())
})

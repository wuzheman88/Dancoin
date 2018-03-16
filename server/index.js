const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const logger = require('morgan')
var http = require('http')

const socketio = require('socket.io')

const app = express()
const port = process.env.PORT || 3002

app.listen = function (app) {
  var server = http.createServer(this)
  let io = socketio(server)
  socketio.listen(3003)
  io.sockets.on('connection', (socket) => {
    console.log('socket connected')
  })

  return server.listen.apply(server, arguments)
}

app.use(logger('dev'))

// 传入配置初始化 Nuxt.js 实例
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)

// 生产模式不需要 build
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)
app.listen(port, () => { console.log(`Server is listening on http://localhost:${port}`) })

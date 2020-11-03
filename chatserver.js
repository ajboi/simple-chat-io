var net = require('net')
var messages = []

var server = net.createServer(function (connection) {
  console.log('client connected')
  connection.write('You are connected')

  connection.on('data', function (data) {
    // if (data.toString().trim() === 'close') {
    //   connection.end()
    // }
    messages.push(data)
    console.log(messages.toString())
    connection.write('your message "' + data + '" has been recorded.')
  })

  connection.on('close', function (e) {
    console.log('client disconnected')
  })

  connection.on('error', function (e) {
    console.log(' error occured')
  })
  var ip = connection.remoteAddress
})

server.on('close', function () {
  console.log(messages)
})
var PORT = process.env.PORT || 8080
server.listen(PORT, 'localhost', function () {
  console.log('waiting for connection')
})

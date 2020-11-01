var net = require('net')
var messages = [1, 2]
var server = net.createServer(function (connection) {
  console.log('client connected')
  connection.write('You are connected')

  connection.on('data', function (data) {
    messages.push(data)
    connection.write('your message "' + data + '" has been recorded.')
  })

  connection.on('error', function () {
    connection.write('some error occured oopsie doopsie')
  })
})

server.on('close', function () {
  console.log('client disconnected')
})

server.listen(8080, 'localhost', function () {
  console.log('waiting for connection')
})

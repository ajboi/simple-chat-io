var net = require('net')
var client = new net.Socket()
client.setEncoding('utf8')

// connect to server
var PORT = process.env.PORT || 8080

client.connect(PORT, 'https://simple-chat-io-node.herokuapp.com/', function () {
  console.log('connected to server')
  client.write('Who needs a browser to communicate?')
})

// when receive data, send to server
process.stdin.on('data', function (data) {
  client.write(data)
})

// when receive data back, print to console
client.on('data', function (data) {
  console.log(data)
})

// when server closed
client.on('close', function () {
  console.log('connection is closed')
})

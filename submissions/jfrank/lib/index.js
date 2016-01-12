var server = require('./server')(8000)

server.start(function() {
  console.log('Server listening at', server.info.uri)
})

module.exports = server

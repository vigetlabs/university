var Server = require('./server')
var assert = require('assert')

Server.init(8000, function (error, server) {
  assert.ifError(error)
  console.log('Server listening at %s', server.info.uri)
})

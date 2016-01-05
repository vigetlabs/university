var Hapi = require('hapi')
var pkg = require('../package')

exports.metadata = {
  version: pkg.version
}

exports.init = function (port, next) {
  var server = new Hapi.Server()

  server.connection({
    port: port
  })

  server.route({
    method: 'GET',
    path: '/version',
    handler: function (request, reply) {
      reply(exports.metadata)
    }
  })

  server.start(function (error) {
    next(error, server)
  })

  return server
}

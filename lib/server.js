var Hapi = require('hapi')
var pkg  = require('../package.json')

function create(port) {
  var server = new Hapi.Server()

  server.connection({ port: port })

  server.route({
    method: 'GET',
    path: '/version',
    handler: (request, reply) => {
      reply({ version: pkg.version })
    }
  })

  return server
}

module.exports = create

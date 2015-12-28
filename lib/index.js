'use strict'

const Hapi = require('hapi')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

// Add the route
server.route({
  method: 'GET',
  path:   '/version',
  config: {
    state: {
      parse:      true,
      failAction: 'log'
    }
  },
  handler: function (request, reply) {
    return reply({ version: process.env.npm_package_version })
  }
})

// Start the server
server.start((err) => {

  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})

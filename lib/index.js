import { Server } from 'hapi'

const server = new Server()

server.connection({port: 8000})

server.start(() => {
  console.log('Running at http://localhost:8000')
})

server.route({
  method  : 'GET',
  path    : '/version',
  handler : (request, reply) => {
    reply({ version: require('../package').version })
  }
})

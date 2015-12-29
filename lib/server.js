import { Server } from 'hapi'

export default (port) => {
  const server = new Server()

  server.connection({port: port})

  server.start(() => {
    console.log(`Running at http://localhost:${port}`)
  })

  server.route({
    method  : 'GET',
    path    : '/version',
    handler : (request, reply) => {
      reply({ version: require('../package').version })
    }
  })
}

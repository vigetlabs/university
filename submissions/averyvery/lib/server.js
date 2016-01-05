import { Server } from 'hapi'

export default (port) => {
  const server = new Server()
  const config = {
    host: 'localhost',
    port: port
  }

  server.connection(config)

  server.start(() => {
    console.log(`Running at http://${config.host}:${config.port}`)
  })

  server.route({
    method  : 'GET',
    path    : '/version',
    handler : (request, reply) => {
      reply({ version: require('../package').version })
    }
  })

  return server
}

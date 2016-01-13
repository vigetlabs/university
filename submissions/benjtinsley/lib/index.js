var Hapi   = require('hapi');
var Package = require('../package.json');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path:'/version',
  handler: function (request, reply) {
    return reply(Package.version);
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
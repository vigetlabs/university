'use strict';

const Hapi    = require('hapi');
const Package = require('../package.json');

const internals = {
  server: new Hapi.Server()
};

internals.init = function () {
    // Create a server with a host and port
    internals.server.connection({
        host: 'localhost',
        port: 8000
    });

    // Version route
    internals.server.route({
        method: 'GET',
        path:   '/version',
        handler: function (request, reply) {

            return reply({ "version": Package.version });
        }
    });

    // Start the server
    internals.server.start(function(err) {
        console.log('Server running at:', internals.server.info.uri);
    });
};

internals.init();

module.exports = internals.server;

'use strict';

const Hapi    = require('hapi');
const Package = require('../package.json');

const internals = {};

internals.init = function () {
    // Create a server with a host and port
    const server = new Hapi.Server();
    server.connection({
        host: 'localhost',
        port: 8000
    });

    // Version route
    server.route({
        method: 'GET',
        path:   '/version',
        handler: function (request, reply) {

            return reply({ "version": Package.version });
        }
    });

    // Start the server
    server.start(function(err) {

        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
};

internals.init();

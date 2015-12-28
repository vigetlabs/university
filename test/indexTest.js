var Hapi   = require('hapi')
var assert = require('assert')
var routes = require("../lib/routes")

var server = new Hapi.Server()

server.connection({ host: 'test' });
server.route(routes);

it('should GET the version', function() {
  var request = { url: '/version', method: 'GET' }

  server.inject(request, function (res) {
    assert.equal(res.statusCode, 200)
    assert.equal(res.payload, JSON.stringify({"version": "0.0.1"}))
  })
})

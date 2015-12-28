var Hapi   = require('hapi')
var assert = require('assert')
var routes = require("../lib/routes")

var server = new Hapi.Server()

server.connection({ host: 'test' })
server.route(routes)
server.register(require('inject-then'), function (err) {
  if (err) throw err
})
it('should GET the version', function() {
  var request = { url: '/version', method: 'GET' }

  server.injectThen(request).then(function (res) {
    assert.equal(res.statusCode, 200)
    assert.equal(res.payload, JSON.stringify({"version": "0.0.1"}))
  })
})

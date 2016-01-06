var Lab    = require('lab')
var assert = require('assert')
var server = require('../lib/server')(8000)

var lab = exports.lab = Lab.script()

lab.test('/version endpoint returns the project version', function(done) {
  server.inject('/version', function(response) {
    var result = response.result

    assert.ok(result instanceof Object)
    assert.equal(response.statusCode, 200)
    assert.equal(result.version, '0.0.1');

    done()
  })
})

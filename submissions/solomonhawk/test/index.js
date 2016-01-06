var Lab    = require('lab')
var assert = require('assert')
var server = require('../lib/server')(8000)
var pkg    = require('../package.json')

var lab = exports.lab = Lab.script()

lab.test('/version endpoint returns the project version', function(done) {
  server.inject('/version', function(response) {
    var result = response.result

    assert.equal(response.statusCode, 200)
    assert.equal(result.version, pkg.version)

    done()
  })
})

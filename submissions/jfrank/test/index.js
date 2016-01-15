var Code = require('code')
var Lab = require('lab')
var lab = exports.lab = Lab.script()
var server = require('../lib/server')(8000)
var pkg    = require('../package')

lab.test('returns object containing version number from package.json', (done) => {
  server.inject('/version', (res) => {
    Code.expect(res.statusCode).to.equal(200)
    Code.expect(res.result.version).to.equal(pkg.version)
    done()
  })
})

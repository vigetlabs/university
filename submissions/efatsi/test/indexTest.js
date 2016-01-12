var assert = require("assert")
var server = require("./testServer")

it("should GET the version", function() {
  var request = { url: "/version", method: "GET" }

  server.injectThen(request).then(function (res) {
    assert.equal(res.statusCode, 200)
    assert.deepEqual(JSON.parse(res.payload), {version: "0.0.1"})
  })
})

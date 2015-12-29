var Hapi   = require("hapi")
var routes = require("../lib/routes")

var server = new Hapi.Server()

server.connection({ host: "test" })
server.route(routes)
server.register(require("inject-then"), function (err) {
  if (err) throw err
})

module.exports = server

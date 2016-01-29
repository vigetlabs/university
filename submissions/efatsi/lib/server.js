var routes = require("./routes")
var Hapi   = require("hapi")

module.exports = {
  init: function(port, next) {
    var server = new Hapi.Server()

    server.connection({
      host: "localhost",
      port: port
    })

    server.route(routes)

    server.start(function(err) {
      if (err) throw err

      console.log("Server running at:", server.info.uri)
    })

    if (next !== undefined) next(server)

    return server
  }
}

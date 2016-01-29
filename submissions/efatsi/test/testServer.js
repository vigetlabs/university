var serverStarter = require("../lib/server")

var server = serverStarter.init(8008, function(s) {
  s.register(require("inject-then"), function(err) {
    if (err) throw err
  })
})

module.exports = server

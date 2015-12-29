var routes = {
  method: "GET",
  path:   "/version",
  config: {
    state: {
      parse:      true,
      failAction: "log"
    }
  },
  handler: function (request, reply) {
    return reply({ version: process.env.npm_package_version })
  }
}

module.exports = routes

var server = require('./server')(8000)

server.start(function(err) {
  if (err) throw err

  console.log('Server listening at "' + server.info.uri + '"')
})

module.exports = server

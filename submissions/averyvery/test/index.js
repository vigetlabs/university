import assert      from 'assert'
import startServer from '../lib/server'

const server = startServer()

describe('/version', () => {
  it('returns the current version', (done) => {
    server.inject({
      url: '/version'
    }, (res) => {
      assert.deepEqual({ version: '0.0.1' }, JSON.parse(res.payload))
      done()
    })
  })
})

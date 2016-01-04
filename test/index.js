import assert      from 'assert'
import superagent  from 'superagent'
import startServer from '../lib/server'

startServer(8001)

describe('/version', () => {
  it('returns the current version', (done) => {
    superagent.get('http://localhost:8001/version')
              .end((err, res) => {
                assert.deepEqual({ version: '0.0.1' }, JSON.parse(res.text))
                done()
              })
  })
})

import assert     from 'assert'
import superagent from 'superagent'

require('../lib/index')

describe('/version', () => {
  it('returns the current version', (done) => {
    superagent.get('http://localhost:8000/version')
              .end((err, res) => {
                assert.deepEqual({ version: '0.0.1' }, JSON.parse(res.text))
                done()
              })
  })
})

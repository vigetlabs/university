var Code     = require('code');
var Lab      = require('lab');
var Server   = require('../lib/index.js');
var Package  = require("../package.json");

var lab      = exports.lab = Lab.script();
var describe = lab.describe;
var it       = lab.it;
var expect   = Code.expect;

describe('Retrieving the version number', () => {

  it('returns the version of the project at /version', (done) => {

    Server.inject('/version', (response) => {
      var result      = response.result;
      var packageVersion  = Package.version

      expect(result.version).to.equal(packageVersion);

      done();
    });
  });
});

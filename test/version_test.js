const Code = require('code');
const Lab = require('lab');
const Server = require("../lib/index.js");
const Package = require("../package.json")
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;

describe('GETting the version number', () => {

    it('returns an object specifying the version number', (done) => {
        const options = {
            method: "GET",
            url:    "/version"
        };

        Server.inject(options, function(response) {
            const result      = response.result;
            const pkgVersion  = Package.version

            expect(result.version).to.equal(pkgVersion);

            done();
        });
    });
});

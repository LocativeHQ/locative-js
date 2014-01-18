var mocha  = require('mocha');
var expect = require('chai').expect;
var Geofancy = require('../index');

describe('Geofancy', function () {
  it('should know its version', function () {
    var client = Geofancy;
    expect(client.version).to.not.equal(undefined);
    expect(client.version).to.equal('0.0.1');
  });
});
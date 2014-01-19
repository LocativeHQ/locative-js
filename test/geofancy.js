var mocha  = require('mocha');
var expect = require('chai').expect;
var Geofancy = require('../index');

describe('Geofancy', function () {

  it('is a function', function () {
    expect(Geofancy.Client).to.be.an.instanceOf(Function);
  });

  it('has a method Client', function () {
    expect(Geofancy.Client).to.be.an.instanceOf(Function);
  });

});

describe('Geofancy.Client', function () {

  it('is a function', function () {
    expect(Geofancy.Client).to.be.an.instanceOf(Function);
  });

  it('has a string version', function () {
    expect(Geofancy.version).to.be.a('string');
  });

  it('has a method authorizeUrl', function () {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    expect(client.authorizeUrl).to.be.an.instanceOf(Function);
  });

  it('has a method getToken', function () {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    expect(client.getToken).to.be.an.instanceOf(Function);
  });

  it('has a method getFencelogs', function () {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    expect(client.getFencelogs).to.be.an.instanceOf(Function);
  });

});

describe('Geofancy.version', function () {

  it('matches format 0.1.2', function () {
    expect(Geofancy.version).to.match(/^\d\.\d\.\d$/);
  });

});

describe('Geofancy.Client.authorizeUrl()', function () {

  it('returns a string', function () {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    expect(client.authorizeUrl()).to.be.a('string');
  });

  it('returns correct authorizeUrl for given id and redirect_uri', function () {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    expect(client.authorizeUrl()).to.equal(
      'https://my.geofancy.com/oauth2/authorize?client_id=client_id&response_type=code&redirect_uri=redirect_uri'
    );
  });

});

/*
describe('Geofancy.Client.getToken()', function () {

  it('returns accessToken', function (done) {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    client.getToken('code', function(accessToken) {
      if (accessToken) {
        done();
      } else {
        throw new Error('returned ' + typeof accessToken);
      }
    });
  });

});
*/

/*
describe('Geofancy.Client.getFencelogs()', function () {

  it('returns json', function (done) {
    var client = new Geofancy.Client({
      client_id: 'client_id',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
      grant_type: 'code'
    });
    client.getFencelogs('token', function(fencelogs) {
      if (fencelogs) {
        done();
      } else {
        throw new Error('returned ' + typeof fencelogs);
      }
    });
  });

});
*/

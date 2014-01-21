var mocha  = require('mocha');
var expect = require('chai').expect;
var Geofancy = require('../index');

var mochaTestApp = {
  client_id: 'vNFnaPmmbNMVnP1jUSxgLgVSvgoV16ph',
  client_secret: 'ftxuRw8vsSGGXBJ7RJXGgkeD3yC5UZCy',
  client_accesstoken: 't6GFVlNLIiyC95RNKkpMN8Vqfo1pTd2wV7IyCYXRmkHEUWz6tSPxeueoiCs1OfhO',
  redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
  grant_type: 'code'
};

var client = new Geofancy.Client({
  client_id: mochaTestApp.client_id,
  client_secret: mochaTestApp.client_secret,
  redirect_uri: mochaTestApp.redirect_uri,
  grant_type: mochaTestApp.grant_type
});

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
    expect(client.authorizeUrl).to.be.an.instanceOf(Function);
  });

  it('has a method getToken', function () {
    expect(client.getToken).to.be.an.instanceOf(Function);
  });

  it('has a method getFencelogs', function () {
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
    expect(client.authorizeUrl()).to.be.a('string');
  });

  it('returns correct authorizeUrl for given id and redirect_uri', function () {
    expect(client.authorizeUrl()).to.equal(
      'https://my.geofancy.com/oauth2/authorize?client_id=' +
      mochaTestApp.client_id +
      '&response_type=code&redirect_uri=' +
      mochaTestApp.redirect_uri
    );
  });

});

// describe('Geofancy.Client.getToken()', function () {
//   it('returns accessToken', function (done) {
//     console.log(client.authorizeUrl());
//     client.getToken(mochaTestApp.client_accesstoken, function(accessToken) {
//       if (accessToken) {
//         done();
//       } else {
//         throw new Error('returned ' + typeof accessToken);
//       }
//     });
//   });
// });

describe('Geofancy.Client.getFencelogs()', function () {

  it('returns json', function (done) {
    client.getFencelogs(mochaTestApp.client_accesstoken, function(fencelogs) {
      if (fencelogs) {
        done();
      } else {
        throw new Error('returned ' + typeof fencelogs);
      }
    });
  });

});

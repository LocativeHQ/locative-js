'use strict';

var request = require('request');

function Client (options) {
    this.client_id = options.client_id;
    this.client_secret = options.client_secret;
    this.redirect_uri = options.redirect_uri;
    this.grant_type = options.grant_type;
}

Client.prototype.authorizeUrl = function () {
    return 'https://my.geofancy.com/oauth2/authorize?client_id=' + this.client_id + '&response_type=code&redirect_uri=' + this.redirect_uri;
}

Client.prototype.getToken = function (code, cb) {
    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'https://my.geofancy.com/oauth2/token',
        body: 'grant_type=authorization_code&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&redirect_uri=' + this.redirect_uri + '&code=' + code
    }, function (error, response, body){
        var json = null;
        if (!error && body !== 'Unauthorized') {
            try {
                json = JSON.parse(body);
            } catch (e) {
                throw new Error('Could not parse response JSON');
            }
            if (typeof json.access_token === 'string') {
                this.access_token = json.access_token;
            }
        }
        cb(this.access_token);
    });
}

Client.prototype.getFencelogs = function (token, cb) {
    request.get({
        headers: {'authorization' : 'Bearer ' + token},
        url: 'https://my.geofancy.com/api/v1/fencelogs'
    }, function (error, response, body) {
        var json = null;
        if (!error && body !== 'Unauthorized') {
            try {
                json = JSON.parse(body);
            } catch (e) {
                throw new Error('Could not parse fencelogs response JSON');
            }
        }
        cb(json);
    });
}

exports.Client = Client;
exports.version = require('../package').version;

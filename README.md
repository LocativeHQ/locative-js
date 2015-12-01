# Locative.js

![Travis-CI Badge](https://travis-ci.org/LocativeHQ/locative-js.png)

*The official Locative node.js NPM module*

Have a look at the [nodejs-sample](https://github.com/LocativeHQ/nodejs-sample) if you want a quick demo.

Install using NPM like so:

```
npm install locative
```

or use

```
npm install -S locative
```

To keep Locative as a dependency inside your package.json

Then create an client instance this way:

```
var Locative = require('locative');
var client = new Locative.Client({
    client_id: 'YOUR CLIENT ID',
    client_secret: 'YOUR CLIENT SECRET',
    redirect_uri: 'YOUR REDIRECT URI',
    grant_type: 'code'
});
```

To retrieve an accessToken it's neccessary to, at first, retrieve and authorizationCode which can be done using the client's **authorizeUrl()** method which returns a oAuth v2 Authorization url agains the my.locative.io API.

After authentication using the authorization Url, you will be redirected to the redirect_uri (please note that this URI must be the same URI you've entered when creating the oAuth v2 App at my.locative.io).

You may then exchange the authorizationCode by an accessToken using this method:


```
client.getToken(req.query.code, function (accessToken) {
	...
});
```

Using the accessToken you may, e.g. retrieve your Fencelogs like so:

```
client.getFencelogs(req.query.token, function (fencelogs) {
	...
});
```

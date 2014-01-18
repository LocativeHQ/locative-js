# GeofancyJS

*The official Geofancy node.js NPM module*

Have a look at the [geofancy-node-sample](https://github.com/Geofancy/geofancy-node-sample) if you want a quick demo.

Install using NPM like so:

```
npm install geofancy
```

or use

```
npm install -S geofancy
```

To keep geofancy as a dependency inside your package.json

Then create an client instance this way:

```
var Geofancy = require('geofancy');
var client = new Geofancy.Client({
    client_id: 'YOUR CLIENT ID',
    client_secret: 'YOUR CLIENT SECRET',
    redirect_uri: 'YOUR REDIRECT URI',
    grant_type: 'code'
});
```

To retrieve an accessToken it's neccessary to, at first, retrieve and authorizationCode which can be done using the client's **authorizeUrl()** method which returns a oAuth v2 Authorization url agains the my.geofancy.com API.

After authentication using the authorization Url, you will be redirected to the redirect_uri (please note that this URI must be the same URI you've entered when creating the oAuth v2 App at my.geofancy.com).

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
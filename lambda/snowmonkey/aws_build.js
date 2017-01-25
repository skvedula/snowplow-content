var fs = require('fs');
var AWS = require('aws-sdk');
var proxy = require('proxy-agent');

AWS.config.update({
  region: 'us-west-2',
  credentials: new AWS.SharedIniFileCredentials({profile: 'nordstrom-federated'}),
  httpOptions: { agent: proxy('http://webproxysea.nordstrom.net:8181') }
});

fs.readFile('./snowmonkey.js.zip', function(err, data) {
    if (err) { throw err; }
    var s3 = new AWS.S3();
    s3.putObject({
      Bucket: 'cxar-ato-bigdata', 
      Key: 'snowplow-rt/snowmonkey.zip',
      Body: data
    }, function (err, data) {
      console.log(err, data);
    });
});
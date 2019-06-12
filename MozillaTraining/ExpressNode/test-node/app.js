var express = require('express');
var app = express();
var wiki = require('./wiki.js');

app.use('/wiki', wiki);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/mypage', function(req, res) {
  res.send('Hello World printed on mypage!');
});

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
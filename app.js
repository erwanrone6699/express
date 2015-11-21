var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/routing1', function (req, res) {
  res.send('Hello everybody');
});


app.get('/routing2', function (req, res) {
  res.send('Hello Guys');
});


app.req('/routing3', function (req, res) {
  res.send('Hello friends');
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

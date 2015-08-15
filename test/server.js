var request = require('supertest')
  , express = require('express');

var app = express();
var res_api       = require('../index');

app.use(res_api);

app.get('/api/user/login', function(req, res){
  // res.send(200, { name: 'tobi' });
  res.is_jsonp = true
  
  return res.api({
    name: 'login jsonp'
  });
});

app.get('/api/user/login1', function(req, res){
  // res.send(200, { name: 'tobi' });
  
  return res.jsonp({
    a:1,
    b:2
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
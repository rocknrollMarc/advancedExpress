var express = require('express')
  , http = require('http')
  , app = express();

app.set('port', 3000);

app.get('/heartbeat', function(req, res) {
  res.json(200, 'OK')
});

http.createServer(app).listen(app.get('port'));
module.exports = app;

var express = require('express')
  , http = require('http')
  , config = require('../routes/heartbeat')
  , app = express();

app.set('port', config.get('express:port'));

app.get('/heartbeat', heartbeat.index);

http.createServer(app).listen(app.get('port'));

module.exports = app;

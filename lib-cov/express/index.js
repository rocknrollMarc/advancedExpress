
  _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 28);
  // instrument by jscoverage, do not modifly this file
  (function(file, lines, conds, source) {
      _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 29);
      var BASE;
      if (_$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "cond", "30_8_13", typeof global) === "object") {
          _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 31);
          BASE = global;
      } else if (_$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "cond", "32_15_13", typeof window) === "object") {
          _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 33);
          BASE = window;
      } else {
          _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 35);
          throw new Error("[jscoverage] unknow ENV!");
      }
      if (BASE._$jscoverage) {
          _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 38);
          BASE._$jscmd(file, "init", lines, conds, source);
          _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 39);
          return;
      }
      _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 41);
      var cov = {};
      /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
      function jscmd(file, type, line, express, start, offset) {
          _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 48);
          var storage;
          switch (type) {
            case "init":
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 51);
              storage = [];
              for (var i = 0; _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "cond", "52_26_1", i) < _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "cond", "52_30_11", line.length); i++) {
                  _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 53);
                  storage[line[i]] = 0;
              }
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 55);
              var condition = express;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 56);
              var source = start;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 57);
              storage.condition = condition;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 58);
              storage.source = source;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 59);
              cov[file] = storage;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 60);
              break;

            case "line":
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 62);
              storage = cov[file];
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 63);
              storage[line]++;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 64);
              break;

            case "cond":
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 66);
              storage = cov[file];
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 67);
              storage.condition[line]++;
              _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 68);
              return express;
          }
      }
      _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 72);
      BASE._$jscoverage = cov;
      _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 73);
      BASE._$jscmd = jscmd;
      _$jscmd("/usr/local/lib/node_modules/jscoverage/lib/jscoverage.js", "line", 74);
      jscmd(file, "init", lines, conds, source);
  })("lib/express/index.js", [1,8,9,10,11,13,14], {}, ["var express = require('express')","  , http = require('http')","  , config = require('../configuration')","  , heartbeat = require('../routes/heartbeat')","  , notFound = require('../middleware/notFound')","  , app = express();","","app.set('port', config.get('express:port'));","app.use(express.logger({ immediate: true, format: 'dev' }));","app.get('/heartbeat', heartbeat.index);","app.use(notFound.index);","","http.createServer(app).listen(app.get('port'));","module.exports = app;"]);
_$jscmd("lib/express/index.js", "line", 1);

var express = require("express"), http = require("http"), config = require("../configuration"), heartbeat = require("../routes/heartbeat"), notFound = require("../middleware/notFound"), app = express();

_$jscmd("lib/express/index.js", "line", 8);

app.set("port", config.get("express:port"));

_$jscmd("lib/express/index.js", "line", 9);

app.use(express.logger({
    immediate: true,
    format: "dev"
}));

_$jscmd("lib/express/index.js", "line", 10);

app.get("/heartbeat", heartbeat.index);

_$jscmd("lib/express/index.js", "line", 11);

app.use(notFound.index);

_$jscmd("lib/express/index.js", "line", 13);

http.createServer(app).listen(app.get("port"));

_$jscmd("lib/express/index.js", "line", 14);

module.exports = app;
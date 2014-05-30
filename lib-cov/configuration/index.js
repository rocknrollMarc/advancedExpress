
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
  })("lib/configuration/index.js", [1,10,14,4,5,6,7,11], {"5_20_21":0,"6_26_23":0,"6_38_11":0}, ["var nconf = require('nconf');","","function Config(){","  nconf.argv().env('_');","  var environment = nconf.get('NODE:ENV') || 'development';","  nconf.file(environment, 'config/' + environment + '.json');","  nconf.file('default', 'config/default.json');","}","","Config.prototype.get = function(key) {","  return nconf.get(key);","};","","module.exports = new Config();",""]);
_$jscmd("lib/configuration/index.js", "line", 1);

var nconf = require("nconf");

function Config() {
    _$jscmd("lib/configuration/index.js", "line", 4);
    nconf.argv().env("_");
    _$jscmd("lib/configuration/index.js", "line", 5);
    var environment = _$jscmd("lib/configuration/index.js", "cond", "5_20_21", nconf.get("NODE:ENV")) || "development";
    _$jscmd("lib/configuration/index.js", "line", 6);
    nconf.file(environment, _$jscmd("lib/configuration/index.js", "cond", "6_26_23", "config/" + _$jscmd("lib/configuration/index.js", "cond", "6_38_11", environment)) + ".json");
    _$jscmd("lib/configuration/index.js", "line", 7);
    nconf.file("default", "config/default.json");
}

_$jscmd("lib/configuration/index.js", "line", 10);

Config.prototype.get = function(key) {
    _$jscmd("lib/configuration/index.js", "line", 11);
    return nconf.get(key);
};

_$jscmd("lib/configuration/index.js", "line", 14);

module.exports = new Config();
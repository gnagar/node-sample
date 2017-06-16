var express = require('express'),
  config = require('./config/config');

var app = express();

module.exports = require('./config/express')(app, config);


if (!module.parent) {
  app.listen(config.port, function () {
    console.log('Express server listening on port ' + config.port);
  });
}



var express = require('express'),
  controller = require('./controller'),
  router = express.Router();

module.exports = function (app) {
  app.use('/hello', router);
};

//Say Hello
router.get('/', controller.sayHello);

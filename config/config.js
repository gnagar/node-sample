var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

console.log("ENVIRONMENT : " + env);

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'inconnect'
    },
    port: process.env.PORT || 3000
  },

  test: {
    root: rootPath,
    app: {
      name: 'inconnect'
    },
    port: process.env.PORT || 3000
  },

  production: {
    root: rootPath,
    app: {
      name: 'inconnect'
    },
    port: process.env.PORT || 3000
  }
};

module.exports = config[env];

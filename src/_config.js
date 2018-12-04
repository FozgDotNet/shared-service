var config = {};

config.mongoURI = {
  production: 'mongodb://localhost/fozg.net-shared',
  development: 'mongodb://localhost/shared-db-dev',
  test: 'mongodb://localhost/shared-db-test'
};

module.exports = config;
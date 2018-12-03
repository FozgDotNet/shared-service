var mongoose = require('mongoose');

var config = require('./_config');


mongoose.connect(config.mongoURI[process.env], { useNewUrlParser: true }, function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[process.env]);
  }
});

// packages
var core = require('./packages/core');

module.exports = {
  core: core
}
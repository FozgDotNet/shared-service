var express = require('express');
var mongoose = require('mongoose');
var config = require('./_config');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
console.log('process.env.RUNNING:', process.env.RUNNING)


mongoose.connect(config.mongoURI[process.env.RUNNING], { useNewUrlParser: true }, function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[process.env.RUNNING]);
  }
});

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes');
routes(app);

var server   = http.createServer(app);
server.listen(9001, function() {
  console.log("Node server running on http://localhost:9001");
});


module.exports = app;






// // packages
// var core = require('./packages/core');

// module.exports = {
//   core: core
// }
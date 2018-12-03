// var should = require('chai').should();

process.env = 'test';

var ss = require('../../../app');

it('should get userinfo by call getUserProfileById ', function(done) {
  new ss.core.UserProfile(1).getUserProfileByEmail('123').then(res => {
    console.log(res)
  })
 
});
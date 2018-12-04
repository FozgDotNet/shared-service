
var expect = require('chai').expect;
process.env = 'test';

var ss = require('../../../app');

it('should add userProfile success before continute', function (done) {
  
})

it('should get userinfo by call getUserProfileById ', function(done) {
  new ss.core.UserProfile(1).getUserProfileByEmail('123').then(res => {
    console.log(res)
    expect( res ).to.equal( null );
    done();
  })
  
});
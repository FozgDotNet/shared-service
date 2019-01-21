
process.env.RUNNING = 'test';
var UserProfileModel = require("../models/UserProfile.model");

var expect = require('chai').expect;
var chaiHttp = require('chai-http');
var chai = require('chai');
var should = chai.should();
chai.use(chaiHttp);

var server = require('../server');

it('should list SIGNLE userProfiles on /api/userProfile/<id> GET', function(done) {
  var _user = new UserProfileModel({email: 'test@gmail.com', name: 'testing'});
  _user.save(function (err, _doc) {
    chai.request(server)
      .get('/api/userProfile/'+ _doc._id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('name');
        res.body.should.have.property('email');
        res.body.email.should.equal('test@gmail.com');
        res.body.name.should.equal('testing');
        done();
      });
  });
});

it('should add SINGLE userProfile via /api/userProfile POST', function(done) {
  let uId = Date.now();
  chai.request(server).post('/api/userProfile/').send({
    email: `${uId}@gmail.com`, // unique
    name: `name of ${uId}`,
    bio: `bio of `+ uId,
  }).end(function(err, res, body) {
    res.should.have.status(200);
    res.should.be.json;
    res.body.name.should.equal(`name of ${uId}`);
    res.body.should.be.a('object');
    done();
  })
})
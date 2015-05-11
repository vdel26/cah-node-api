var should = require('should')
var request = require('request');

var url = 'http://localhost:'+ (process.env.PORT || 3000);

describe('API', function(){

  describe('Get cards', function(){
    it('should return code 200', function(done){
      request(url+'/api/questions', function (error, response, body) {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        JSON.parse(body).should.be.an.Array;
        done(error);
      })
    })
  });

  describe('Get answers', function(){
    it('should return code 200', function(done){
      request(url+'/api/answers', function (error, response, body) {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        JSON.parse(body).should.be.an.Array;
        done();
      })
    })
  });

  describe('Get answer', function(){
    it('should return code 200', function(done){
      request(url+'/api/answer', function (error, response, body) {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        body.should.be.type('string');
        done();
      })
    })
  });

  describe('Get question', function(){
    it('should return code 200', function(done){
      request(url+'/api/question', function (error, response, body) {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        body.should.be.type('string');
        done();
      })
    })
  });

})

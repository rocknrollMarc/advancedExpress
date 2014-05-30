var app = require('../app')
, request = require('supertest');

describe('vision heartbeat api', function() {
  describe('when requesting resource /heartbeat', function() {
    it('should respond with 200', function(done) {
      request(app)
      .get('heartbeat')
      .expect('Content-Type', /json/)
      .epect(200, done);
    });
  });
});

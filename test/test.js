var request = require('supertest');
var assert  = require('chai').assert;
var expect  = require('chai').expect;
require('chai').should();
var jsonp = require('jsonp');

var jsonpClient = require('jsonp-client');

describe('GET /users', function(){
  it('respond with json', function(done){
      jsonpClient('http://0.0.0.0:3000/api/user/login?callback=callback', function (err, data) {
        if (err) throw err;
        // t.deepEqual(data, obj);
        console.log(data)
        
        assert.equal(data.length > 0, true);
        
        done();
      });
  })
})
/**
 * Created by dinesh3836 on 15/12/16.
 */
//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

//Our parent block
describe('GET: /hello', function () {
    it('No Name Provided', function (done) {
        chai.request(server)
          .get('/hello')
          .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            expect(res.body.message).to.equal('Hello World');
            done();
          });
      }
    );

    /*it('Append Hello with provided name (John)', function (done) {
        chai.request(server)
          .get('/hello?name=John')
          .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            expect(res.body.message).to.equal('Hello John');
            done();
          });
      }
    );*/
  }
);

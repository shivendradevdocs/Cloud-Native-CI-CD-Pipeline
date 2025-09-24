const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/index');

describe('Backend API', () => {
  it('GET / should return 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.contain('Jenkins CI/CD Demo Backend');
        done();
      });
  });

  it('GET /api/message should return JSON message', (done) => {
    request(app)
      .get('/api/message')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('message');
        done();
      });
  });

  it('POST /api/echo returns 400 if message missing', (done) => {
    request(app)
      .post('/api/echo')
      .send({})
      .expect(400, done);
  });

  it('POST /api/echo returns messageReceived when message provided', (done) => {
    request(app)
      .post('/api/echo')
      .send({ message: 'test' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('messageReceived', 'test');
        done();
      });
  });
});


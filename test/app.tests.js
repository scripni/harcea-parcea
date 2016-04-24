'use strict';

const hippie = require('hippie');

describe('app', () => {
  it('is parsed correctly', (done) => {
    const app = require('../src/server/app');
    hippie()
      .base('http://localhost:3000')
      .get('/')
      .expectStatus(200)
      .end((err, res, body) => {
        if (err !== undefined) {
          throw err;
        }

        done();
        process.exit(0);
      })
  });
});
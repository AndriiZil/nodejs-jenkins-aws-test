const request = require('supertest');
const app = require('../index.js');

describe('GET /', () => {

    after(() => {
        process.exit(0);
    });

    it('respond with hello world', (done) => {
        request(app).get('/')
            .expect('Hello world', done)
    });
});

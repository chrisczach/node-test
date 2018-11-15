const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

it('should return hello world response',done=>{
  request(app)
  .get('/')
  .expect('hello world!')
  .expect(200)
  .end(done)
})

it('should return user named bob age 2',done=>{
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
   expect(res.body).toInclude({ name: 'bob', age: 2 });
  } )
  .end(done)
})

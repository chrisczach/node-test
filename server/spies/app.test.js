const expect = require('expect');
const rewire = require('rewire');
const app = rewire('./app');

describe('App', ()=>{
  const db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db',db);

it('should call the spy correctly', () => {
  const spy = expect.createSpy();
 spy('Chris', 31);
  expect(spy).toHaveBeenCalledWith('Chris', 31);
})

it('should save user with user object', () =>{
  const email = 'bob@sponge.com';
  const password = '1234';
  app.handleSignup(email, password);
  expect(db.saveUser).toHaveBeenCalledWith({email, password})
})


})
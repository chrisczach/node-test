const expect = require('expect');
const utilities = require('./utilities');
it('should run test', () => true);

it('should add two numbers', () => {
  expect(utilities.add(4, 5))
  .toBe(9);
});

it('should add square a number', () => {
  expect(utilities.square(4))
    .toBeA('number')
    .toBe(16);
});

it('should expect some values', () => {
  expect({ name: 'bob', last: 'robert' }).toInclude({ name: 'bob' });
});

it('should set first and last name', () => {
  const user = { age: 9000 };
  const result = utilities.setName(user, 'Bob Blob');
  expect(user)
    .toBeA('object')
    .toInclude({ firstName: 'Bob', lastName: 'Blob' })
    .toEqual(result);
});

it('should async add two numbers', (done) => {
  utilities.asyncAdd(4, 3, (sum) => {
    expect(sum)
      .toBe(7)
      .toBeA('number');
    done();
  });
});

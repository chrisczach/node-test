module.exports.add = (a, b) => a + b;
module.exports.square = a => a * a;
module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  [user.firstName, user.lastName] = names;
  return user;
};

module.exports.asyncAdd = (a,b,callback) => {
  setTimeout(callback(a+b), 30)
}




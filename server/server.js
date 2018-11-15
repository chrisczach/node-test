const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hello world!'));

app.get('/users', (req, res) => res.send([{ name: 'bob', age: 2 }, { name: 'slob', age: 4 }, { name: 'blob', age: 7 }]));

app.listen(3000, console.log('listening on port 3000'));

module.exports.app = app;

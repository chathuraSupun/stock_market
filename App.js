var express = require('express');
var app = express();

var login = require('./Profile');

app.get('/', function (req, res) {
    res.end('hello this is home');
});

app.get('/Contact', function (req, res) {
    res.end('hello this is contact');
});

app.get('/Profile', function (req, res) {
    console.log('request ', req);
    var name = req.param('name');
    var password = req.param('password');

   var value = login(name, password);
   res.end(value);
});

app.listen(3000)
console.log('yo yo listening to port 3000');
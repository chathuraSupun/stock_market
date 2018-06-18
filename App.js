var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var login = require('./Profile');

app.get('/', function (req, res) {
    res.end('hello this is home');
});

app.get('/Contact', function (req, res) {
    res.end('hello this is contact');
});

app.post('/Profile', urlencodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    } else {
        console.log('request ', req.body);
        var name = req.body.name;
        var password = req.body.password;

        var value = login(name, password);
        res.end(value);
    }
});

app.listen(80)
console.log('yo yo listening to localhost default port');
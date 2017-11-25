var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('pages/index');
});


app.get('/about', function (req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
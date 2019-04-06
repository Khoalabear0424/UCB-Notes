// load the things we need
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

var session = require('express-session');

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));

//maxAge
	//Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute. This is done by taking the current server time and adding maxAge milliseconds to the value to calculate an Expires datetime. By default, no maximum age is set.

app.use(cookieParser());

app.get('/', function(req, res){
	res.send('hey');
});

app.get('/set/:name', function(req, res){
	req.session.na = req.params.name;

	res.send('hey ' + req.session.na);
});

app.get('/some-other-page', function(req, res){

	res.send(req.session.na)

});

app.get('/a', function(req, res){

	res.send(req.session.na + "!!!")

});


app.get('/logout', function(req, res){
	req.session.destroy(function(err) {
	   res.redirect('/')
	})
})

app.listen(3000);













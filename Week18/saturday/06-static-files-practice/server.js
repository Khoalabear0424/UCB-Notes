var express = require('express');
var app = express();
var mysql = require('mysql');

var path = require('path');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "tvshows_db"
});

app.use(express.static("public"));
con.connect(function (err, result) {
	if (err) throw err;
	console.log("Connected!");
});


//you won't see this because it'll serve index.html because of app.use(express.static("public"));
app.get('/', function (req, res) {
	res.send('blue sky');
});

app.get('/tvshows', function (req, res) {
	con.query('SELECT * FROM tvshows', function (error, results, fields) {
		if (error) res.send(error)
		else res.json(results);
	});
});


app.listen(3001, function () {
	console.log('listening on 3001');
});













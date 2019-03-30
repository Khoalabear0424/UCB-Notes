var express = require('express');
var app = express();

// http://www.omdbapi.com/?t=ace+ventura&y=1994&apikey=trilogy

// http://www.omdbapi.com/?y=1994&t=ace+ventura&apikey=trilogy

//localhost:3000/movies?name=simon&hat=true&likestea=true

//localhost:3000/movies?hat=true&likestea=true&name=simon

app.get('/movies', function(req, res) {
	res.json(req.query);
});

app.listen(3000);
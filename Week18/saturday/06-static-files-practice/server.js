var express = require('express');
var app = express();

var path = require('path');

app.use(express.static("public"));


//you won't see this because it'll serve index.html because of app.use(express.static("public"));
app.get('/', function (req, res) {
	res.send('blue sky');
});


app.listen(3001, function () {
	console.log('listening on 3001');
});










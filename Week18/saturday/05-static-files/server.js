var express = require('express');
var app = express();

var path = require('path');

// you would see this because it's above app.use(express.static("public"));
// app.get('/', function(req, res){
// 	res.send('bye');
// });

// Serve static content for the app from the "public" directory in the application directory.
// you need this line here so you don't have to create a route for every single file in the public folder (css, js, image, etc)
//index.html in the public folder will over ride the root route
app.use(express.static("public"));
	
	/*
		the code
			app.use(express.static("public"));

		makes the following routes automatically for you
	*/
	
		// app.get('/juthika.html', function(req, res){
		// 	res.sendFile(path.join(__dirname, 'public/juthika.html'));
		// });

		// app.get('/khoa.html', function(req, res){
		// 	res.sendFile(path.join(__dirname, 'public/khoa.html'));
		// });

		// app.get('/assets/css/style.css', function(req, res){
		// 	res.sendFile(path.join(__dirname, 'public/assets/css/style.css'));
		// });

		// app.get('/index.html', function(req, res){
		// 	res.sendFile(path.join(__dirname, 'public/index.html'));
		// });

		// app.get('/', function(req, res){
		// 	res.sendFile(path.join(__dirname, 'public/index.html'));
		// });


//you won't see this because it'll serve index.html because of app.use(express.static("public"));
app.get('/', function(req, res){
	res.send('blue sky');
});


app.listen(3001, function(){
	console.log('listening on 3001');
});










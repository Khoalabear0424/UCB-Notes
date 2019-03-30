var express = require('express')
var app = express()

// make an express app that makes the following work IN ONE ROUTE

// /add/1/2
// 	should send back 3

// /multiply/3/5
// 	should send back 15

// /divide/10/2
// 	should send back 5

// /subtract/100/3
// 	should send back 97

app.get('/', function (req, res) {
  res.send('<h1>links you can go to </h1><br><br><a href="/students/rob/food">rob</a>')
})

/*
	http://localhost:3000/add/1/2
		3
	http://localhost:3000/multiply/3/9
		27
*/
app.get('/:operation/:numOne/:numTwo', function (req, res) {
	var n1 = parseInt(req.params.numOne);
	var n2 = parseInt(req.params.numTwo);
	var o = req.params.operation;
	var result;

	if (o == 'add'){
		result = n1+n2;
	}else if (o == 'subtract'){
		result = n1-n2;
	}else if (o == 'divide'){
		result = n1/n2;
	}else if (o == 'multiply'){
		result = n1*n2;
	}

	res.send(result.toString());
})

app.listen(3000, function(){
	console.log('listening on port 3000');
})





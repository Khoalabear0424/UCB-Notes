var e = require('express');
var app = e();

//localhost:3000/animals?name=yogi&species=bear
//http://localhost:3000/animals?name=yogi&species=bear&color=brown&eyecolor=brown&tiecolor=green&hat=true
app.get('/animals', function (req, res) {
	res.json(req.query); // {name : 'yogi'}
});

app.listen(3000, function () {
	console.log("Listening on port 3000");
});
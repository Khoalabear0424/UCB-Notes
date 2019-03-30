var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('activity 4')
})

var operations = {
    'add': function (a, b) { return a + b },
    'subtract': function (a, b) { return a - b },
    'multiply': function (a, b) { return a * b },
    'divide': function (a, b) { return a / b }
};

app.get('/:firstNum/:operator/:secondNum', function (req, res) {
    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);
    var operator = req.params.operator;
    res.send(`The result of ${firstNum} ${operator} ${secondNum} is ${operations[operator](firstNum, secondNum)}`);
})

app.listen(3000, () => {
    console.log(`Listening on port 3000...`)
})

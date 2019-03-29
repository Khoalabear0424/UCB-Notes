var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('activity 4')
})

app.get('/:firstNum/:secondNum', function (req, res) {
    res.send(`The result of ${req.params.firstNum} / ${req.params.secondNum} is ${req.params.firstNum / req.params.secondNum}`);
})

app.listen(3000, () => {
    console.log(`Listening on port 3000...`)
})

//hello
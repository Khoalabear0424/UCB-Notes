var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Reverse WOrd')
})

app.get('/reverse/:word', function (req, res) {
    var str = req.params.word;
    var revStr = str.split("").reverse().join("");
    res.send(revStr);
})

app.get('/type/:word', function (req, res) {
    var str = req.params.word;
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (let i in str) {
        if (vowels.indexOf(str[i]) !== -1) count++;
    }
    res.send(`Number of Vowels in this string is : ${count}`);
})

app.listen(3000)
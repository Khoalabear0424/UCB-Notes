var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Animals')
})

app.get('/polar-bear', function (req, res) {
    res.json({
        name: "poslar bear",
        length: "8ft 7in",
        height: "2ft 6in",
        weight: 100
    })
})

app.get('/brown-bear', function (req, res) {
    res.json({
        name: "brown bear",
        length: "6ft 9in",
        height: "3ft 1in",
        weight: 700
    })
})

app.get('/gorilla', function (req, res) {
    res.json({
        name: "gorilla",
        length: "7ft 7in",
        height: "8ft 6in",
        weight: 900
    })
})

app.get('/bison', function (req, res) {
    res.json({
        name: "bison",
        length: "4ft 7in",
        height: "5ft 6in",
        weight: 500
    })
})

app.listen(3000)

//hello
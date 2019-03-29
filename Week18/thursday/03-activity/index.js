var express = require('express')
var app = express()

var partners = [
    {
        name: "Khoa",
        favoriteHotBeverage: "Tea",
        favoriteColdBeverage: "Beer",
        likeChickpeas: true,
        lastTimePlayedTag: 15
    },
    {
        name: "Kelly",
        favoriteHotBeverage: "Tea",
        favoriteColdBeverage: "Wine",
        likeChickpeas: false,
        lastTimePlayedTag: 10
    },
    {
        name: "Ellie",
        favoriteHotBeverage: "Broth",
        favoriteColdBeverage: "Water",
        likeChickpeas: false,
        lastTimePlayedTag: 2
    }
];

app.get('/', function (req, res) {
    res.send('Khoa, Kelly, and Ellie')
})

app.get('/khoa', function (req, res) {
    res.json(partners[0]);
})

app.get('/kelly', function (req, res) {
    res.json(partners[1]);
})

app.get('/ellie', function (req, res) {
    res.json(partners[2]);
})


app.listen(3000)

//hello
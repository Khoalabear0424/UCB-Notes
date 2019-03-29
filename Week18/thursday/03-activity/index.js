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
    res.send('<h2>Links you can go to</h2> \n <a href="/0">Khoa</a>')
})

// app.get('/0', function (req, res) {
//     res.json(partners[0]);
// })

// app.get('/1', function (req, res) {
//     res.json(partners[1]);
// })

// app.get('/2', function (req, res) {
//     res.json(partners[2]);
// })

app.get('/:numero', function (req, res) {
    res.json(partners[req.params.numero]);
})


app.listen(3000, () => {
    console.log(`Listening on port 3000...`)
})

//hello
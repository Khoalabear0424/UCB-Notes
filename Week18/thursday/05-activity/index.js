var express = require('express')
var app = express()


app.get('/', function (req, res) {
    res.send('<h2>Links you can go to</h2> \n <a href="/0">Khoa</a>')
})

app.listen(3000, () => {
    console.log(`Listening on port 3000...`)
})

//hello
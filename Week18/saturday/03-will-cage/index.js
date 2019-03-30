var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
    res.send('Smith And Cage!')
})

app.get('/will-smith', function (req, res) {
    res.sendFile(path.join(__dirname, "files/will-smith.html"));
})

app.get('/nic-cage', function (req, res) {
    res.sendFile(path.join(__dirname, "files/nic-cage.html"));
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})
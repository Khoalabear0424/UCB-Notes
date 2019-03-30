var express = require('express')
var app = express()



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "files/khoa.html"));
})


app.get('/__dirname', function (req, res) {
    res.send(__dirname);
})


app.listen(3000, () => {
    console.log(`Listening on port 3000...`)
})

//hello
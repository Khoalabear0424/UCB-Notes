var mysql = require('mysql');
var express = require('express')
var app = express()

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cats_db'
});
connection.connect();
app.use(express.static("public"));

app.get('/cat.json', function (req, res) {
    connection.query('SELECT * FROM cats', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})
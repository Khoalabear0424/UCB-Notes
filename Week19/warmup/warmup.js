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

app.get('/cats-insert', function (req, res) {
    connection.query('INSERT INTO cats (place_name) VALUES (?)', [req.body.place_name], function (error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success'
        });
    });
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})
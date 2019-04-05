var express = require('express');
var app = express();

app.use(express.static("public"));

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'actors_db'
});

connection.connect();

app.get('/actors.json', function (req, res) {
    connection.query('SELECT * FROM actors', function (error, results, fields) {
        if (error) res.send(error)
        else res.json(results);
    });
});

// http://localhost:3001/actors-insert?actor_name=bobbi

//HERE
app.post('/actors-insert', function (req, res) {
    connection.query('INSERT INTO actors (actor_name) VALUES (?)', [req.query.actor_name], function (error, results, fields) {
        if (error) res.send(error)
        else res.json({
            message: 'success'
        });
    });
});

// http://localhost:3001/actors-delete?actor_id=3
// what will the delete route look like in this app.js file

//HERE
app.get('/actors-delete', function (req, res) {
    connection.query('DELETE FROM actors WHERE id = (?)', [req.query.actor_id], function (error, results, fields) {

        res.redirect('/');

    });
});

// one way
// http://localhost:3001/actors-update/4?actor_name=dragon

//HERE
app.post('/actors-update/:id', function (req, res) {
    connection.query('UPDATE actors SET actor_name = (?) WHERE id = (?)', [req.query.actor_name, req.params.id], function (error, results, fields) {

        res.redirect('/');

    });
});

// another way
// http://localhost:3001/actors-update?actor_name=dragon&actor_id=4
// app.get('/actors-update', function(req, res){
// 	connection.query('UPDATE actors SET actor_name = (?) WHERE id = (?)', [req.query.actor_name, req.query.actor_id],function (error, results, fields) {

// 	  res.redirect('/');

// 	});
// });

app.listen(3001, function () {
    console.log('listening on 3001');
});







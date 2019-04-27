// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "frogs_db";
var collections = ["frogs"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);




// Log any mongojs errors to console
db.on("error", function (error) {
  console.log("Database Error:", error);
});


// songs Routes
// ======
//documentation for mongojs:
//https://github.com/mafintosh/mongojs

//curl -X GET http://localhost:3000/frogs
app.get("/frogs", function (req, res) {

  //sort songs
  db.frogs.find({}, function (error, frgs) {

    res.json(frgs);
  });
});


//curl -d "name=kermit&species=muppet" -X POST http://localhost:3000/frogs

// Handle form submission, save submission to mongo
app.post("/frogs", function (req, res) {
  // Insert the frog into the frogs collection
  db.frogs.insert({ name: req.body.frog_name, species: req.body.frog_species }, function (error, savedFrogDocument) {
    // Log any errors
    if (error) {
      console.log(error);
    } else {
      //the reason why we are sending the savedFrogDocument back is because we now have an _id to give to the client
      res.redirect("/");
    }
  });
});

//one frog
//curl -X GET http://localhost:3000/frogs/5cc49a2039fb1ad9e2d88495
app.get("/frogs/:id", function (req, res) {
  db.frogs.findOne({
    "_id": mongojs.ObjectId(req.params.id)
  }, function (error, oneFrog) {
    if (error) {
      res.send(error);
    } else {
      res.json(oneFrog);
    }
  });
});

//one frog
//curl -X GET http://localhost:3000/frogs/kermit/green
app.get("/frogs/:name/:species", function (req, res) {
  db.frogs.find({
    "name": req.params.name,
    "species": req.params.species
  }, function (error, someFrogDocuments) {
    if (error) {
      res.send(error);
    } else {
      res.json(someFrogDocuments);
    }
  });
});

//update a frog
//curl -d "name=kermit&species=green" -X PUT http://localhost:3000/frogs/5cc49a2039fb1ad9e2d88495
app.put("/frogs/:id", function (req, res) {
  db.frogs.findAndModify({
    query: {
      "_id": mongojs.ObjectId(req.params.id)
    },
    update: {
      $set: {
        "name": req.body.name, "species": req.body.species
      }
    },
    new: true
  }, function (err, updatedFrogDocument) {
    res.json(updatedFrogDocument);
  });
});

/*  
  curl -X DELETE http://localhost:3000/frogs/5cc288d471a416daebc0d4d6/
*/
app.delete("/frogs/:id", function (req, res) {
  var id = req.params.id;

  db.frogs.remove({
    "_id": mongojs.ObjectID(id)
  }, function (error, removed) {
    if (error) {
      res.send(error);
    } else {
      res.json(id);
    }
  });
});

// Listen on port 3001
app.listen(PORT, function () {
  console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
});

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "Khoa",
  password: "0909"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

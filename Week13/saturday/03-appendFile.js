//the name of this file is 03-appendFile.js

// node 03-appendFile.js water

// fs it's part of node

// 	it's an object

// var fs = {
// 	appendFile : function(){
// 		//
// 	},
// 	writeFile : function(){
// 		//
// 	}
// }
//module.exports = fs;

//require is part of node

// As always, we grab the fs package to handle read/write.
var f = require("fs");

// Next, we store the text given to us from the command line.
var text = process.argv[2]; //water

// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
f.appendFile("./sample.txt", text, function(err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});
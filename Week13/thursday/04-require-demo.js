var a = require('./04-add');
// the ./ stands for current directory 
//require looks for a file named 04-add.js, whatever is exported from that file will basically come out of that require 

	// so the variable a here

		//is a reference to the add function from the 04-add.js file

console.log(a(1,2));
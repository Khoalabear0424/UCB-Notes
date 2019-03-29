//going over process.argv	
	// console.log(process.argv);
	// node 02-one-first-part.js 

		//["where node is on your computer", "where this file is on your computer"]

	// node 02-one-first-part.js hello

		//["where node is on your computer", "where this file is on your computer", "hello"]
/*
	1. 
	write a node file that will take an argument from the terminal, reverse it and console log it
*/
// node 02-one-first-part.js hello
var arg = process.argv[2]; //"hello" is in arg

//arg is a string
//reverse is an array method
console.log(arg.split("").reverse().join(""));

















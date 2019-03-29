// * Starting from a blank file, create a Node-based command-line application that takes in a series of numbers from the user and returns the numbers sorted in ascending order.

// * **NOTE:** Feel free to use Stack Overflow or Google to find the code for sorting integers numerically.

// No need to make a package.json file, use require or do npm install

// node 08-seven-solution.js 8 2 9 1 0

var nums = process.argv.slice(2);
//['8', '2', '9', '1', '0']

//.map creates a brand new array and applys a function TO EVERY element in the original array
var numsParsed = nums.map(function(x){
	return parseInt(x);
});

//b-a for descending
//a-b for ascending
console.log(numsParsed.sort(function(a,b){
	return a-b;
}));

console.log('numsParsed', numsParsed);





















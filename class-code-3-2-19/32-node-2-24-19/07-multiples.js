// # Multiples

// ## File

// * *None*

// ## Instructions

// * Write a command line node application that takes in a number from the command line and finds the sum of all the multiples of 6 that are smaller than it. (ex: input: 13... output: 6 + 12 = 18)

// ### Bonuses

// * Make the program such that it takes in two parameters: The application now taking in the first number from the command and finds all the multiples of the second smaller than it.

// * Give it a set of default values in case the user doesn't provide parameters.
// 


// node 06-multiples.js 15 4

var num = parseInt(process.argv[2]); //15
var secondNum = parseInt(process.argv[3]); //4

if (secondNum == undefined || secondNum == ""){
	secondNum = 6;
}

//one way
	var total = 0;

	for (var i=1; i<num; i++){
		//logic to decide whether I add i to the total

		if (i % secondNum == 0) total += i;
	}

	console.log(total);

//another way
	// node 06-multiples.js 15 6

	// 15/6 = 2.5
	// 	Math.floor(2.5)
	// 		2

	// total = 0
	// for loop 2 times 
	// 	i = 1
	// 		6*1 and add that to the total

	// 	i = 2
	// 		6*2 and add that to the total
	
	// 13/6 = 2.1666666
	// 	Math.floor(2.1666666)
	// 		2
	// 			now you know you'll add twice into the total

	// 				6*1 add that in 
	// 				6*2 add that in 
	// 	6+12

	// var numloops= Math.floor(num/secondNum);
	// var total = 0;
	// for (var i=0; i<numLoops; i++){
	// 	total += i*secondNum;
	// }
	// console.log(total);

//another way
	//13 
		// 6+12
	var total = 0;

	for (var i=secondNum; i<num; i+=secondNum){
		//logic to decide whether I add i to the total

		if (i % secondNum == 0) total += i;
	}

	console.log(total);





















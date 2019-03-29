// # Calculator
// ## File
// * *None*
// ## Instructions
// * Create a command-line node application that takes in parameters like this:
//   * `node calculator.js add 1 2` ... and outputs 3
//   * `node calculator.js - 5 2` ... and outputs 3
//   * `node calculator.js * 3 2` ... and outputs 6
//   * `node calculator.js divide 8 2` ... and outputs 4
//   * `node calculator.js remainder 7 2`... and outputs 1
// ### Bonuses
// * Enable your calculator application to also handle the below cases:
//   * `node calculator.js exp 7 2` ... and output 49 (7 squared)
//   * `node calculator.js algebra 4x+2=10`... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)

console.log(process.argv)

// node calculator.js add 1 2

// "1" -> 1
// "1.2" -> 1

var operation = process.argv[2]; //add

var first_num = parseFloat(process.argv[3]); //1

var second_num = parseFloat(process.argv[4]); //2

// write some conditional logic to determine whether I should add first_num and second_num 

	function add(a,b){
		return a+b;
	}

	if (operation == 'add'){
		var sum = add(first_num, second_num);
		console.log(sum); //3
	}

//   * `node calculator.js subtract 5 2` ... and outputs 3
	function subtract(a,b){
		return a-b;
	}

	if (operation == 'subtract'){
		var difference = subtract(first_num, second_num);
		console.log(difference); //3
	}

//   * `node calculator.js multiply 3 2` ... and outputs 6
	function multiply(a,b){
		return a*b;
	}

	if (operation == 'multiply'){
		var product = multiply(first_num, second_num);
		console.log(product); //6
	}

//   * `node calculator.js divide 8 2` ... and outputs 4
	function divide(a,b){
		return a/b;
	}

	if (operation == 'divide'){
		var quotient = divide(first_num, second_num);
		console.log(quotient); //4
	}

//   * `node calculator.js remainder 7 2`... and outputs 1
	function remainder(a,b){
		return a % b;
	}

	if (operation == 'remainder'){
		var rema = remainder(first_num, second_num);
		console.log(rema); //1
	}

//   * `node calculator.js exp 7 2` ... and output 49 (7 squared)
	function expo(a,b){
		return Math.pow(a,b);

		//another way
			return a**b;

		//another way

			//let's say we didn't use Math.pow

				// 7^8
					// for loop

			// var result = a;

			// for (var i=0; i<a-1; i++){
			// 	result *= a;
			// }
			// return result;
	}

	if (operation == 'expo'){
		var res = expo(first_num, second_num);
		console.log(res); //49
	}

//   * `node calculator.js algebra 4x+2=10`... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)

	// 4x + 2	=	10
	//     -2     -2
	//    4x  =    8
	//    /4  =    /4
	//    x   =    2

	var algebra_problem = process.argv[3];

	var x = algebra_problem.indexOf('x'); //index of x
	var coefficient = parseFloat(algebra_problem.slice(0,x)); //4000

	var plus = algebra_problem.indexOf('+'); //index of +
	var equal = algebra_problem.indexOf('='); //index of =

	var intercept = parseFloat(algebra_problem.slice(plus+1, equal)); //2

	var result = parseFloat(algebra_problem.slice(equal+1));

	if (operation == 'algebra'){
		console.log((result-intercept)/coefficient);
	}






// node calculator.js
	
// 	[location of node.js, location of calculator.js]

// node calculator.js 1 "hello"

// 	[location of node.js, location of calculator.js, "1", "hello"]

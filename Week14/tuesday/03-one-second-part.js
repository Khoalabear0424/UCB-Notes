// 2. 
// write a node file that will take a number from the terminal, and console log true if it is even and odd if it is false

// node 03-one-second-part.js 3

var num = parseFloat(process.argv[2]);

// one way
	console.log(num % 2 == 0);

//another way
	// if (num % 2 == 0){
	// 	console.log(true);
	// }else {
	// 	console.log(false);
	// }

// another way

	// 4
	// 4/2 = 2
	// Math.floor(4/2) = 2
	// 2 == 2
		// true
	// 	so 4 is even

	//5
	// 5/2 = 2.5
	// Math.floor(5/2) = 2
	// 2.5 == 2 
	// 	false
	// so 5 is not even 
	// console.log(num / 2 == Math.floor(num / 2));

// another way

	// 4
	// 4/2 = 2
	// Math.ceil(4/2) = 2
	// 2 == 2
		// true
	// 	so 4 is even

	//5
	// 5/2 = 2.5
	// Math.ceil(5/2) = 3
	// 3 == 2 
	// 	false
	// so 5 is not even 
	// console.log(num / 2 == Math.ceil(num / 2));











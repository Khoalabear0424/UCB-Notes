//WRONG - but an example of going up instead of down
// function factorial(num){ //num is 3
// 	if (num == 5) return 1;
// 	else return num*factorial(num+1);
// }

	// 3*factorial(4)
	// 	4*factorial(5)
	// 	  1
	// 3*4*1= 12

function factorial(num){ //num is 3
	if (num == 0 || num == 1) return 1;
	else return num*factorial(num-1);
}
/*	
	factorial(5)
		return 5*factorial(4)
				 return 4*factorial(3)
  						  return 3*factorial(2)
  						  		   return 2*factorial(1)
  						  		   			return 1
  		       5*4*3*2*1 = 120
*/

var a = factorial(5);

console.log(a)

// the factorial of 5
	
// 	5!

// 		5*4*3*2*1 = 120

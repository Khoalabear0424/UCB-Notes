// use recursion to determine if a number is even or odd

// you can't use division, modulus, math.floor or math.ceil

//this is normal
	function isEven(n){
		return n % 2 == 0
	}

//the way to do it with recursion
	function isEven(n){
		//base case(s)
		if (n==0) return true;
		else if (n==1) return false;

		//return a modified version of the function
			//7:16
		else return isEven(n-2);
	}

		//you are always trying to get to the base case from your modified function call










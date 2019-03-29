// 1. use recursion to calculate the sum up to a number

// 	so 5 should be 15

// 		1+2+3+4+5

// 	so 3 should be 6

// 		1+2+3

function sum(num){
    if(num==1) return 1;
    return num+sum(num-1);
}

// console.log(sum(5));

// 5 should be 

// (((5/4)/3)/2)/1 = 0.20833333333

// 3 should be 

// ((3/2)/1) = 1.5


function divide(num){
    if(num==1) return 1;
    return num/divide(num-1);
}

// console.log(divide(5));


// 1. use recursion to solve the fibonacci sequence

// 1,1,2,3,5,8,13,21

// if I pass in 

//     6 -> 8 
//         8 is the 6th number in the fib seq

//     7 -> 13
//         13 is the 7th number in the fib seq

// function fib(num,pos){

//     if(pos==num)return num

//     return fib(num,pos+1)
// }

function bleh(num, pos, prev, current){
    if (num == pos) return current;

    var temp = prev;
    prev = current;
    current = temp+prev;
    return bleh(num, pos+1, prev, current);
}

// console.log(bleh(6,2,1,1));


2. 

// Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). 

// your function call will take in the number and the count 

// count7(717, 0) → 2
// count7(7, 0) → 1
// count7(123, 0) → 0

// function thing(num, count){
//     if (num.toString().length ==1){
//         return console.log(count);
//     }
//     if(num.toString().length>0){
//         if(num.toString()[0]==7) count++;
//         thing(num.toString().slice(1),count);
//     }//
// };

// console.log(thing(717,0));

function countDigit(n, digit) {
    if (n == 0)
        return 0;
    else if (n % 10 == digit)
        return 1 + countDigit(Math.floor((n / 10)), digit);
    else return countDigit(Math.floor((n / 10)), digit);
}

console.log(countDigit(717,0));
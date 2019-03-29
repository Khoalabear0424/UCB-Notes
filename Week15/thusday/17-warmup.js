// use recursion to determine if a number is even or odd

// you can't use division, modulus, math.floor or math.ceil

function evenOrOdd(num){
    if(num==0) return "even";
    if(num<0) return "odd";
    return evenOrOdd(num-2)
}
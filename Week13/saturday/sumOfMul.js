
var userNum = process.argv[2];
var multiple = process.argv[3];
var totalSum = 0;
console.log(sumOfMul(userNum,multiple));

function sumOfMul(num, mul){
    var multipleLessThanCurrent = Math.floor(num/mul);
    for(var i = 1; i<=multipleLessThanCurrent; i++){
        var nextSum = mul*i;
        totalSum += nextSum;
    }
    return totalSum
}
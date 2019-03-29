
function commands(){
    operations = {
        "reverse": function (str) {
            return str.split('').reverse().join('');
        },
        "evenOrOdd": function (num) {
            return parseInt(num)%2 == 0 ? 'Even' : 'Odd';
        }
    }
}

commands();
console.log(operations[process.argv[2]](process.argv[3]));
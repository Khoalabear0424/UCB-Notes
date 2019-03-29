console.log(process.argv);
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);

switch (process.argv[2]) {
    case "add":
        console.log(a + b);
        break;
    case "subtract":
        console.log(a - b);
        break;
    case "multiply":
        console.log(a*b);
        break;
    case "divide":
        console.log(a/b);
        break;
    case "remainder":
        console.log(a%b);
        break;
    case "exp":
        console.log(a**b);
        break;
}





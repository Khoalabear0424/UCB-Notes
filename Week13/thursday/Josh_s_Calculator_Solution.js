console.log(process.argv);

var operation = {
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    },
    remainder : function(a,b){
        return a%b;
    },
}

var first_num = parseInt(process.argv[3]);

var second_num = parseInt(process.argv[4]);

var num = operation[process.argv[2]](first_num, second_num)

console.log(num);

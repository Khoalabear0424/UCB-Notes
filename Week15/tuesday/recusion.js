function calcExp(base,exp){
    var p = 1;

    for(var i = 0 ; i<exp; i++){
        p *= base;
    }
    return p
}
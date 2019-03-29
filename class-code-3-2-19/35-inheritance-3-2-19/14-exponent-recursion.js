function ex(base, exp){
	if (exp == 0) return 0;
	if (exp == 1) return base;
	else return base*ex(base, exp-1);
}

var a = ex(5,3);

console.log(a)
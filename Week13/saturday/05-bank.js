var f = require('fs');

// node 05-bank.js deposit 500
// console.log(process.argv)
/*
	[ '/usr/local/Cellar/node/11.1.0/bin/node',
	  '/Users/pavankat/Dropbox/class-code/ucb-class-nov-27-2018/32-node-2-24-19/05-bank.js',
	  'deposit',
	  '500' ]
*/

var action = process.argv[2]; //deposit
var amount = process.argv[3]; //500

function appendToBankFile(){
	f.appendFileSync("bank.txt", actionChanged + amount + ",");
}

var actionChanged; 

if (action == "deposit") {
	actionChanged = "+";
	appendToBankFile()
}else if (action == "withdraw"){
	actionChanged = "-";
	appendToBankFile()
}else if (action == "total"){
	var content = f.readFileSync("bank.txt", "utf8");

	var contentArr = content.split(",");

	//ignore the last element because it will always be '' BECAUSE of the last comma
	// console.log(contentArr);
	// [ '+500', '-100', '' ]

	var total = 0;

	//contentArr.length-1 so we don't include the empty '' element at the end
	for (var i=0; i<contentArr.length-1; i++){
		total += parseFloat(contentArr[i]);
	}
	console.log(total);
}else if (action == "lotto"){ 
	amount=2;
	actionChanged = "-";
	appendToBankFile()

	var ranNum = Math.floor(Math.random()*4);

	if (ranNum == 3){
		console.log('you won!')
		amount=1000000;
		actionChanged = "+";
		appendToBankFile()
	}else {
		console.log('you lost')
	}
}

// subtract $2 no matter what

// and if you hit the number 3 then you get 100 

// but there are a total of 100 possible numbers



// * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.












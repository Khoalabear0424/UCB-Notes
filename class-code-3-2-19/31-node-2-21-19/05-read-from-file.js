var fs = require('fs');
 
fs.readFile('00-objectives.tt', 'utf8', function(errrrr, data) {
	console.log(errrrr);
});

console.log('hi');

	/*
		after calling readFile
		{ [Error: ENOENT: no such file or directory, open '00-objectives.tt']
		  errno: -2,
		  code: 'ENOENT',
		  syscall: 'open',
		  path: '00-objectives.tt' }
	*/

fs.readFile('00-objectives.tt', 'utf8', function(err, elephant) {
	console.log(elephant);
});
	//undefined


// fs.readFile('00-objectives.txt', 'utf8', function(err, data) {
//     console.log(data);
// });
 
// console.log('after calling readFile');

// function doStuff(a,b,c){
// 	return b*2;
// }

// doStuff(1,2,3); //4

// doStuff(2,1,3); //2


//why does line 4 happen last?

	//reading the file takes time 

// order in which the code happens
// line 1
// line 3 
// the function in line 3 is qued up 
// line 8
// line 5
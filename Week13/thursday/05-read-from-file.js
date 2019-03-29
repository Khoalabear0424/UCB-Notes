var fs = require('fs');
 
fs.readFile('00-objectives.txt', 'utf8', function(err, data) {

    console.log(data);
});
 
console.log('after calling readFile');


//why does line 4 happen last?

	//reading the file takes time 

// order in which the code happens
// line 1
// line 3 
// the function in line 3 is qued up 
// line 8
// line 5
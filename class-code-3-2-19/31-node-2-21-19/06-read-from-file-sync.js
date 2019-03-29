var fs = require('fs');
//running code SYNCRONOUSLY 
var contents = fs.readFileSync('00-objectives.txt', 'utf8');
//line 5 will not happen until line 3 is done, because of the readFileSync function
console.log(contents);
console.log('after calling readFile');
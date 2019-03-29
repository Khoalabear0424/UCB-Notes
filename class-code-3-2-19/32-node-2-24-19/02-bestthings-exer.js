var f = require('fs');

var contents = f.readFileSync('02-bestthingsever.txt', 'utf8'); //string

// console.log(contents);

var contents_arr = contents.split(',');

// console.log(contents_arr);

for (var i=0; i<contents_arr.length; i++){
	console.log(contents_arr[i].trim()); 
	//trim gets rid of the spaces at the beginning or end of a string
}
var f = require('fs');

var contents = f.readFileSync('best_things_ever.txt','utf8');

varContents_arr = contents.split(',');
console.log(varContents_arr);

for(let i in varContents_arr){
    console.log((varContents_arr[i]).trim());
}
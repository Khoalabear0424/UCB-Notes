const fs = require('fs');
const input = [process.argv[2],process.argv[3],process.argv[4]];
let pets = [];

function dog(name,typ,trick){
    this.name = name,
    this.type = typ,
    this.trick = trick
};

const newDog = new dog(input[0],input[1],input[2]); 

console.log(newDog);
fs.appendFile('./dogNames',JSON.stringify(newDog),function(err){
    if(err) console.log(err)
});


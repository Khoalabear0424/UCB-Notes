// Load the NPM Package inquirer
var inquirer = require("inquirer");
var f = require("fs");

function Pet(po, pn, pty, ptr){
	this.petowner = po;
	this.petname = pn;
	this.pettype = pty;
	this.pettrick = ptr;
}

var pets;
var petsjsonstring = f.readFileSync('pets.json', 'utf8');

console.log(petsjsonstring);

if (petsjsonstring.length > 0){
	console.log('got to line 18')
	pets = JSON.parse(petsjsonstring);
}else{
	pets = [];
}

// var mrWhiskers = new Pet('Haven', 'Mr. Whiskers', 'kitty', 'smoke rings');

// console.log(mrWhiskers);

// Create a "Prompt" with a series of questions.

function createPet(){
	inquirer
	  .prompt([
	    // Here we create a basic text prompt.
	    {
	      type: "input",
	      message: "Who is the owner?",
	      name: "petowner"
	    },
	    {
	      type: "input",
	      message: "What is your pet's name?",
	      name: "petname"
	    },
	    // Here we create a basic password-protected text prompt.
	    {
	      type: "input",
	      message: "what is your pet's type",
	      name: "pettype"
	    },
	    // Here we give the user a list to choose from.
	    {
	      type: "input",
	      message: "what is your pet's trick",
	      name: "pettrick"
	    },
	    // Here we ask the user to confirm.
	    {
	      type: "confirm",
	      message: "do you want to add another pet",
	      name: "confirm",
	      default: true
	    }
	  ])
	  .then(function(res) {

	  	var p = new Pet(res.petowner, res.petname, res.pettype, res.pettrick);

	  	pets.push(p);
	  	console.log(pets);

	  	f.writeFileSync('pets.json', JSON.stringify(pets));

	  	if (res.confirm){
	  		createPet();
	  	}

	  });
}


createPet();








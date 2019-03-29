// make your own constructor function to create objects

// make an Animal constructor function that makes an object 

// 	with 5 keys in it
//    		name, species, hasFur, canSwim, canFly

// use the Animal constructor function to create 3 objects 
// console log each object

function Animal(n, s, hf, cs, cf){
	this.name = n;
	this.species = s;
	this.hasFur = hf;
	this.canSwim = cs;
	this.canFly = cf;
}

var aOne = new Animal('rhino', 'extangenero', false, true, false);

var aTwo = new Animal('lion', 'mammal', true, true, false);

var aThree = new Animal('cat', 'mammal', true, true, false);

console.log(aOne, aTwo, aThree);








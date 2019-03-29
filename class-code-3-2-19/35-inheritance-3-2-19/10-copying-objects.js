var ob = {
	name: 'Haven',
	hat: true, 
	hoodie: true,
	waterBottle: true
}

//clone the object named ob BUT DOES NOT WORK
	//when you take an object and set it to another variable, it's not a clone, it's a reference
var anotherOb = ob;

anotherOb.macBook = true;

console.log('ob', ob);

console.log('anotherOb', anotherOb);


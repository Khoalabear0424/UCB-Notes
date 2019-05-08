//es5
/*
	function Person(na, heigh){
		this.nam = na;
		this.height = heigh;
	}

	Person.prototype.greeting = function(){
		//es5
			// console.log("Hi my name is " + this.nam + ".");

		//es6
			console.log(`Hi my name is ${this.nam}.`);
	}

	let p = new Person('will ferrel', 79);
	console.log(p.height);
	p.greeting();
*/

//es6
class Person {

	constructor(na, heigh) {
		this.nam = na;
		this.height = heigh;
	}

	greeting() {
		//string interpolation

		//es5
		console.log("Hi my name is " + this.nam + ".");

		//es6
		console.log(`Hi my name is ${this.nam}.`);
	}

	drink() {
		console.log('drinking water');
	}
}

//testing out the class by making an object with it
// let p = new Person('aaron', 70);
// console.log(p.height);
// p.greeting();
// p.drink();

class Dancer extends Person {

	constructor(na, heigh, mov, stamin) {
		//call the Person constructor function and pass na, heigh to it
		//you have to say super to be able to call the Person constructor function 
		super(na, heigh);

		this.move = mov;
		this.stamina = stamin;
	}

	dance() {
		console.log(`${this.nam} IS DOING THIS MOVE: *${this.move}*`);
	}

	//overrides the Person drink function 
	drink() {
		console.log('breathe first');
		//you could call any of the Person functions in here via super. the name of the Person function
		super.drink(); //call the drink function in the Person class
	}
}

let d = new Dancer('derek huff', 65, 'running man', 95);

console.log(d.stamina);
d.dance();
d.drink();

class HipHop extends Dancer {
	constructor() {
		super()
	}
	hiphopDance() {
		console.log('yoyo');
	}
}

let khoa = new HipHop('ellie', 15, 'bark', 100);
khoa.hiphopDance();
khoa.dance();
khoa.greeting();












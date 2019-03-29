// make your own constructor function to create objects

// make a Pokemon constructor function that makes an object 

// 	with 3 keys in it
//    		name, hp, attacks 
	// name is a string

	// hp is a number

	// attacks is an array of attacks

// add an attack function to the prototype of the pokemon constructor function that chooses a random attack from the pokemon's attacks property and will console log it

// use the Pokemon constructor function to create 3 pokemon objects

// console log each object

//call attack on each of the objects

//for one of the objects give it an additional property of friendly = true

function Pokemon(n, hp, att){
	this.name = n;
	this.hp = hp;
	this.attacks = att;
}

Pokemon.prototype.attack = function(){
	var ranIndex = Math.floor(Math.random()*this.attacks.length);
	console.log(this.attacks[ranIndex]);
}

var p = new Pokemon('pikachu', 100, ['eletric shock', 'thunderbolt', 'tackle', 'scratch']);

var s = new Pokemon('squirtle', 120, ['watergun', 'bubble', 'tackle', 'ice beam']);

var c = new Pokemon('charmander', 150, ['ember', 'flame thrower', 'smokescreen', 'fury swipes']);

s.friendly = true;

console.log(p,s,c);

p.attack();
s.attack();
c.attack();


















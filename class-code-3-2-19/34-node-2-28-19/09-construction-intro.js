
var nick = {
	name: 'nick',
	hometown: 'bethlaham, pa',
	hobby: 'coding',
	pet : true
}

var rob = {
	name: 'rob',
	hometown: 'sacramento, ca',
	hobby: 'coding',
	pet : true
}

var pavan = {
	name: 'pavan',
	hometown: 'east brunswick, nj',
	hobby: 'coding',
	pet : true
}

// this is an example of a constructor function

//for constructor functions, you capitalize the name of the function, not because you need to, but to communicate to other developers that this is going to run like a constructor function

//an alternative to making really similar objects is to use a constructor function to make them for us

function Person(n, hom, h, p){
	//when you put the word in front of a function, what happens is that you make a object
		// var this = {}
	this.name = n;
	this.hometown = hom;
	this.hobby = h;
	this.pet = p;
		//return this;
}

var nick = new Person('nick', 'bethlaham, pa', 'coding', true)

var rob = new Person('rob', 'sacromento', 'coding', true)

var pavan = new Person('pavan', 'east brunswick, nj', 'coding', true)

var ebony = new Person('ebony', 'san francisco, ca', 'coding', true)

console.log(ebony);











//Person
	function Person(nam, ag, heigh){
		this.name = nam;
		this.age = ag;
		this.height = heigh;
		//the issue with doing the following:
		//is that every object that's created with this Person constructor function is going to have a property called scream set to a function
		//INSTEAD it's better to do Person.prototype.scream = function(){ ... } 
		//BECAUSE you save memory 
			// this.scream = function(){
			// 	console.log(this.name + '!');	
			// }
	}

	Person.prototype.scream = function(){
		console.log(this.name + '!');	
	}

//warrior
	function Dancer(mov, n, a, h){
		this.move = mov;
		Person.call(this, n, a, h);
	}

	//this HAS TO GO first
	//we clone the Person.prototype and set it to the Warrior.prototype
	Dancer.prototype = Object.create(Person.prototype);

	//this HAS TO GO after the above line
	Dancer.prototype.dance = function(){
	  console.log('spin spin spin!');
	}

var d = new Dancer('flip', 'Fernando', 22, 77);

d.scream();

d.dance();












